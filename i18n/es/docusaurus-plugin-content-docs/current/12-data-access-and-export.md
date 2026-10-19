---
title: "12. Acceso y exportación de datos"
sidebar_label: "12. Acceso y exportación de datos"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Exportación de datos a un dispositivo USB {#section-12-1}

Para exportar datos de medición, consulte la sección [Exportación a una memoria USB](10-measurements.md#section-10-8-1).

### 12.1.1 Exportación de ajustes, diagnósticos o todos los datos a USB {#section-12-1-1}

La función “Special import/export” permite exportar todos los datos de medición del instrumento o únicamente los datos de diagnóstico, que pueden ser interpretados por los técnicos de servicio.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Advanced o Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Mantenimiento. Pulse el botón Exportación importación especial. |  |
| 3. | Conecte un dispositivo de almacenamiento masivo USB. La memoria USB debe estar formateada en FAT32. Si es necesario, pulse Actualizar lista USB hasta que aparezca el dispositivo. |  |
| 4. | El nombre de la carpeta que se creará en el dispositivo USB se muestra en el campo Folder name. Introduzca otro nombre si lo desea. | ![BactoSense — Importación y exportación USB](/img/gui/es/usb-import-and-export.png "width=261 class=manual-figure") |
| 5. | • Para exportar todos los datos, pulse Exportar todo.<br/>• Para exportar datos de diagnóstico, pulse Exportar diagnósticos.<br/>• Para exportar los ajustes, pulse Exportar diagnósticos. No retire el dispositivo de almacenamiento masivo USB durante la transferencia de datos. | La exportación de todos los datos puede tardar varias horas. Si la capacidad disponible del dispositivo USB es insuficiente, aparecerá una notificación. |
| 6. | Cuando termine la exportación, pulse OK y retire el dispositivo USB. |  |

## 12.2 Obtención de datos mediante FTP {#section-12-2}

Puede accederse a distancia a los datos de BactoSense mediante el protocolo FTP (RFC 3659).

- La autenticación FTP utiliza los pares de nombre de usuario/contraseña de la interfaz gráfica del instrumento. Los nombres de cuenta predeterminados son: basic, advanced y admin.
- Los archivos CSV y Excel se generan al solicitarlos, por lo que siempre contienen los datos de medición más recientes.

![BactoSense — Servicios del sistema](/img/gui/es/system-services.png "width=559 class=manual-figure")

*Figura 12-1 Vista Manage services de la interfaz de usuario de BactoSense.*

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | • Instale un cliente FTP en el dispositivo con el que desee obtener los datos, p. ej., su portátil.<br/>• Como alternativa, puede utilizar el Explorador de archivos de Windows. |  |
| 2. | Conecte BactoSense mediante Ethernet a una red segura (p. ej., LAN). Conecte su dispositivo a la misma red. | Para obtener información sobre la configuración de red (ajustes de IP estática y dinámica), consulte la sección [Configuración de red](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 4. | Pulse el botón Ajustes del sistema. |  |
| 5. | Pulse el botón Servicios del sistema. |  |
| 6. | Asegúrese de que esté marcada la casilla Enable FTP data access. |  |
| 7. | Elija un puerto para el servidor FTP. | El puerto predeterminado es el 21. |
| 8. | Pulse Aplicar para guardar los cambios. Si se solicita un reinicio, pulse Reiniciar ahora. | Solo es necesario si ha cambiado la configuración. |
| 9. | En la pantalla Home, pulse Ajustes y, a continuación, Información del sistema para obtener la dirección IP de BactoSense. | Para obtener información sobre la configuración de red (ajustes de IP estática y dinámica), consulte la sección [Configuración de red](08-general-operations-and-configurations.md#section-8-6). |
| 10. | Para un cliente FTP: abra el cliente e introduzca los datos de acceso. Para el Explorador de archivos de Windows: introduzca la siguiente dirección en la barra de direcciones: ftp://user:password@ip:port | • User/username: nombre de usuario para iniciar sesión en BactoSense.<br/>• Password: contraseña para iniciar sesión en BactoSense.<br/>• Host/ip: dirección IP de BactoSense.<br/>• Port: puerto configurado en la vista System services (véase la figura 12-1). |

## 12.3 Obtención de archivos mediante HTTP o HTTPS {#section-12-3}

Los servidores HTTP y HTTPS están activados por defecto y pueden utilizarse mediante un navegador web o cualquier biblioteca de peticiones HTTP. Utilice el procedimiento siguiente para obtener archivos concretos mediante HTTP o HTTPS. Como alternativa, puede utilizar la interfaz web (capítulo [Interfaz web de usuario](13-web-user-interface.md)) o FTP (sección [Obtención de datos mediante FTP](12-data-access-and-export.md#section-12-2)).

<table className="manual-table manual-http-retrieval">
<colgroup>
<col className="http-step-column" />
<col className="http-instruction-column" />
<col className="http-detail-column" />
</colgroup>

<thead>

<tr>

<th scope="col">

</th>

<th scope="col">

PASO DE TRABAJO

</th>

<th scope="col">

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Conecte BactoSense mediante Ethernet a una red segura (p. ej., LAN). Conecte su dispositivo a la misma red.

</td>

<td>

Para obtener información sobre la configuración de red (ajustes de IP estática y dinámica), consulte la sección [Configuración de red](08-general-operations-and-configurations.md#section-8-6).

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Ajustes del sistema.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse el botón Servicios del sistema.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Para HTTP: asegúrese de que esté marcada la casilla Habilitar el acceso web HTTP. Para HTTPS: asegúrese de que esté marcada la casilla Habilitar el acceso web HTTPS.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Elija un puerto para el servidor HTTP o HTTPS.

</td>

<td>

El puerto predeterminado de HTTP es el 80. El de HTTPS es el 443.

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Pulse Aplicar para guardar los cambios. Si se solicita un reinicio, pulse Reiniciar ahora.

</td>

<td>

Solo es necesario si ha cambiado la configuración.

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

En la pantalla Home, pulse Ajustes y, a continuación, Información del sistema para obtener la dirección IP de BactoSense.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td colSpan="2">

Abra un navegador web en su dispositivo e introduzca la dirección del archivo de destino en el campo de dirección. La dirección tiene el formato siguiente. Para HTTP: `http://ipaddress:port/export/filename.extension?hash=myhash` Ejemplo: http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ Para HTTPS: `https://ipaddress:port/export/filename.extension?hash=myhash` Ejemplo: https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ

<table className="manual-http-parameters">
<colgroup>
<col className="http-parameter-column" />
<col className="http-description-column" />
</colgroup>

<thead>

<tr>

<th>

Nombre

</th>

<th>

Descripción

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`ipaddress`

</td>

<td>

Dirección IP local del instrumento

</td>

</tr>

<tr>

<td>

`port`

</td>

<td>

Puerto del servidor HTTP o HTTPS (por defecto, 80 y 443, respectivamente)

</td>

</tr>

<tr>

<td>

`filename`

</td>

<td>

Nombre del archivo de destino. Ejemplo: history_auto

</td>

</tr>

<tr>

<td>

`extension`

</td>

<td>

Extensión del archivo (csv, xlsx, pdf)

</td>

</tr>

<tr>

<td>

`myhash`

</td>

<td>

Clave de seguridad que contiene la identificación del usuario. La clave es única para cada combinación de usuario y contraseña. Puede encontrarla en la interfaz web (capítulo [Interfaz web de usuario](../web-user-interface/)) copiando el enlace que se muestra al descargar un archivo. Por ejemplo: hash=QWRtaW46MTExMQ

</td>

</tr>

</tbody>

</table>

</td>

</tr>

</tbody>

</table>

## 12.4 Transmisión de la interfaz gráfica mediante VNC {#section-12-4}

Virtual Network Computing (VNC) es un sistema de uso compartido del escritorio gráfico que permite controlar otro ordenador a distancia. Transmite por la red las entradas del teclado y el ratón de un ordenador a otro, junto con las actualizaciones de la pantalla gráfica. El servidor VNC integrado en BactoSense permite compartir la interfaz de usuario únicamente a través de la red de área local (LAN), salvo el acceso remoto mediante una VPN.

:::caution[Restrinja el acceso VNC]

VNC es un protocolo inseguro y no se recomienda utilizarlo fuera de una red local ni con una conexión VPN.

:::

:::info[Cierre VNC después de usarlo]

Una conexión VNC puede ralentizar la interfaz, ya que exige muchos recursos de procesamiento. Cierre la conexión VNC después de usarla.

:::

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Instale un cliente VNC en su ordenador. |  |
| 2. | Conecte BactoSense mediante Ethernet a una red segura (LAN). Conecte su ordenador a la misma red. | Para obtener información sobre la configuración de red (ajustes de IP estática y dinámica), consulte la sección [Configuración de red](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 4. | Pulse el botón Ajustes del sistema. |  |
| 5. | Pulse el botón Servicios del sistema. |  |
| 6. | Asegúrese de que esté marcada la casilla Enable VNC remote control. |  |
| 7. | Elija un puerto para el servidor VNC. | El puerto predeterminado es el 5900. |
| 8. | Pulse Aplicar para guardar los cambios. Si se solicita un reinicio, pulse Reiniciar ahora. | Solo es necesario si ha cambiado la configuración. |
| 9. | En la pantalla Home, pulse Ajustes y, a continuación, Información del sistema para obtener la dirección IP de BactoSense. |  |
| 10. | Abra el cliente VNC en su ordenador y conéctese a BactoSense con la dirección IP y el puerto identificados anteriormente. | Su cliente VNC puede permitir cambiar los ajustes para optimizar la velocidad de la conexión si es necesario. |
| 11. | Al finalizar, vuelva a Servicios del sistema, desmarque la casilla VNC y pulse Aplicar. Si se solicita un reinicio, pulse Reiniciar ahora. | La conexión VNC puede ralentizar la interfaz de usuario de BactoSense. |
