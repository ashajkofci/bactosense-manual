"""Render extracted callouts using ordinary Docusaurus admonition syntax."""
import html
import re

# Match the source wording, while keeping displayed titles brief and specific.
TITLES = [
 ('Electric shock that', 'Electric shock'),
 ('Explosion that', 'Explosion hazard'),
 ('Injury or hazards', 'Risk of injury'),
 ('Material damage', 'Material damage'),
 ('Operation in explosive', 'Explosive environments'),
 ('Improper use of the instrument', 'Improper use'),
 ('Damaged instrument or cabling', 'Damaged cables'),
 ('Dangerous voltage inside', 'Mains voltage'),
 ('Damage due to incorrect', 'Correct supply voltage'),
 ('Missing user manual', 'Keep the manual available'),
 ('Moisture or condensation', 'Prevent condensation'),
 ('Use of aggressive', 'Avoid aggressive chemicals'),
 ('Improper handling of chemicals', 'Handle chemicals safely'),
 ('Residual risk', 'Measurement accuracy'),
 ('No warning or danger', 'Follow the safety instructions'),
 ('BactoSense is equipped', 'Protect network access'),
 ('Attention', 'Before installation'),
 ('The BactoSense must be operated using', 'Use the original power supply'),
 ('An uninterrupted and stable', 'Stable power supply'),
 ('To disconnect the BactoSense', 'Disconnect power safely'),
 ('Only professional electricians', 'Qualified electricians only'),
 ('Firmly attach tubings', 'Secure tubing connections'),
 ('Connect outlet tubing', 'Connect the outlet to a drain'),
 ('The Test outputs interface', 'Prevent unintended alarms'),
 ('Before switching the BactoSense', 'Check the power supply'),
 ('Open and close the cartridge', 'Use the correct door tool'),
 ('The BactoSense has five', 'Protect the unused connector'),
 ('Strictly follow the procedure', 'Follow the cartridge wizard'),
 ('Multiple selection', 'Select multiple measurements'),
 ('VNC is an insecure', 'Restrict VNC access'),
 ('A VNC connection', 'Close VNC after use'),
 ('The instrument cannot', 'Remote power-on is unavailable'),
 ('BactoSense service duty', 'Follow the maintenance schedule'),
 ('Observe the safety points', 'Before maintenance'),
 ('Never use a spanner', 'Do not use a spanner'),
 ('Wear nitrile gloves when', 'Wear protective gloves'),
 ('Wear fresh, non-powdered', 'Use fresh protective gloves'),
 ('When running out of disk', 'Back up data before deleting'),
 ('Selecting any event', 'View event details'),
 ('Measurements can be delayed', 'Allow time for heating'),
 ('If the BactoSense has been stored', 'Validate after storage'),
 ('Wear protective gloves and goggles', 'Protect against leaking chemicals'),
 ('Check the expiration', 'Check cartridge expiry'),
 ('Do not return contaminated', 'Decontaminate before returning'),
 ('Adhere to shipping', 'Follow the shipping instructions'),
 ('Do not disassemble nor dispose', 'Return used cartridges'),
 ('Confirm to follow the instructions', 'Follow the cartridge wizard'),
 ('Only very experienced users', 'Skipping the cartridge wizard'),
 ('The fixation must carry', 'Secure wall mounting'),
 ('Ensure that the power supply', 'Disconnect the power supply'),
 ('Tighten the 3 wires', 'Connect protective earth'),
 ('Then tighten the knurled', 'Tighten by hand only'),
 ('Carefully connect the free ends', 'Connect the sampling tubing safely'),
 ('Adjust the flow rate', 'Check flow rate and pressure'),
]
ICON = r'<img\b[^>]*src="/img/manual/icon-(?:warning|danger|explosion|information|gloves)\.png"[^>]*/?>'
HAZARD = r'<img\b[^>]*src="/img/manual/icon-(?:warning|danger|explosion)\.png"[^>]*/?>'

def plain(text):
    text = re.sub(r'<img\b[^>]*>', '', text)
    text = re.sub(r'</?(?:strong|em)>', '', text)
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]*>', ' ', text)).replace('**','')).strip()

def title_for(body):
    text = plain(body)
    for prefix, title in TITLES:
        if text.startswith(prefix):
            return title
    raise ValueError('Add a short notice title for: ' + text[:120])

def markdown(body):
    body = re.sub(ICON, '', body)
    body = body.replace('</strong><strong>', '')
    for tag, token in [('strong','**'),('em','*')]:
        body = body.replace('<'+tag+'>', token).replace('</'+tag+'>', token)
    body = re.sub(r'</?p>', '\n\n', body)
    body = body.replace('<ul>', '\n\n').replace('</ul>', '\n\n').replace('<li>', '\n- ').replace('</li>', '')
    body = re.sub(r'\n[ \t]+', '\n', body)
    return re.sub(r'\n{3,}', '\n\n', body).strip()

def normalize_notices(content):
    def block(match):
        kind, old_title, body = match.groups()
        # Already-authored native blocks stay directly editable in Markdown.
        if old_title.lower().rstrip('!') not in ('danger','warning','caution','note','explosion hazard','protective gloves') and not re.search(ICON,body):
            return match[0]
        title = title_for(body)
        body = markdown(body)
        if body.startswith('**'+title+'**\n\n'):
            body = body[len(title)+6:]
        return f':::{kind}[{title}]\n\n{body}\n\n:::'
    content = re.sub(r'^:::(\w+)\[([^\]]+)\]\n(.*?)^:::[ \t]*$', block, content, flags=re.M|re.S)
    def cell(match):
        opening, body = match.groups()
        if not re.search(HAZARD, body):
            return match[0]
        kind = 'danger' if 'icon-danger.png' in body or 'icon-explosion.png' in body else 'warning'
        body = re.sub(HAZARD, '', body)
        body = re.sub(r'(?:<strong>)?(?:CAUTION!|WARNING!|DANGER!)(?:</strong>)?', '', body).strip()
        body = re.sub(r'^(?:<br\s*/>\s*)+', '', body)
        title = title_for(body)
        return f'{opening}<Admonition type="{kind}" title="{title}">{body}</Admonition></td>'
    return re.sub(r'(<td\b[^>]*>)(.*?)</td>', cell, content, flags=re.S)

if __name__ == '__main__':
    from pathlib import Path
    for path in (Path(__file__).resolve().parents[1]/'docs').glob('*.md'):
        original = path.read_text()
        converted = normalize_notices(original)
        if converted != original:
            path.write_text(converted)
            print(path.name)
