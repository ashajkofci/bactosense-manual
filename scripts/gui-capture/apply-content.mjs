import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'../..');
const manifest=JSON.parse(await readFile(path.join(root,'maintenance/gui-content-updates.json'),'utf8'));
const originals=new Map(),updated=new Map();
const count=(text,fragment)=>text.split(fragment).length-1;
const reports=[];
for(const entry of manifest.entries) {
  if(!originals.has(entry.file)) {
    const content=await readFile(path.join(root,entry.file),'utf8');
    originals.set(entry.file,content);updated.set(entry.file,content);
  }
  const content=updated.get(entry.file);
  const protectedContent=content.replaceAll(entry.new,'');
  const matches=count(protectedContent,entry.old);
  if(!matches && content.includes(entry.new)) {reports.push({id:entry.id,status:'already-applied'});continue;}
  if(matches!==entry.expected_count) throw new Error(`${entry.id}: expected ${entry.expected_count} source matches, found ${matches}. Review concurrent content changes before applying.`);
  updated.set(entry.file,content.replaceAll(entry.old,entry.new));
  reports.push({id:entry.id,status:'applied',count:matches});
}
// Validate every fragment before making any edits, and preserve concurrent work.
for(const [file,original] of originals) if(await readFile(path.join(root,file),'utf8')!==original) throw new Error(`${file} changed while preparing the content updates.`);
for(const [file,content] of updated) if(content!==originals.get(file)) await writeFile(path.join(root,file),content);
await mkdir(path.join(root,'output/gui-capture'),{recursive:true});
await writeFile(path.join(root,'output/gui-capture/content-application.json'),JSON.stringify({entries:reports,files:[...updated].map(([file,content])=>({file,sha256:createHash('sha256').update(content).digest('hex')}))},null,2)+'\n');
console.log(`Applied ${reports.filter(row=>row.status==='applied').length} reviewed navigation and legend updates in ${updated.size} documents.`);
