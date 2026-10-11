---
title: "13. Interfaz web de usuario"
sidebar_label: "13. Interfaz web de usuario"
sidebar_position: 13
slug: /web-user-interface
---

## 13.1 Información general {#section-13-1}

- La interfaz web permite consultar y exportar resultados y otros datos desde un ordenador remoto, así como supervisar el estado del instrumento (proceso activo, nivel del cartucho, alertas, etc.).
- BactoSense debe estar conectado a la misma red que el ordenador desde el que se accede a la interfaz web.
- La interfaz web puede abrirse en cualquier navegador de ordenadores de sobremesa o dispositivos móviles.
- Proteja los datos y la red con todas las medidas de seguridad habituales.

## 13.2 Conexión a la interfaz web de usuario {#section-13-2}

Un **admin** debe activar primero el acceso web HTTP o HTTPS en **Ajustes → Ajustes del sistema → Servicios del sistema**, aplicar los cambios y reiniciar el instrumento cuando se le solicite. Consulte [Recuperación de archivos mediante HTTP o HTTPS](12-data-access-and-export.md#section-12-3) para los servicios y puertos.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details manual-narrow-details-split">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
<col className="procedure-detail-column" />
</colgroup>

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

PASO DE TRABAJO

</th>

<th scope="col" colSpan="2">

INFORMACIÓN ADICIONAL / IMÁGENES

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Conecte BactoSense mediante Ethernet a una red segura (p. ej., LAN). Conecte su dispositivo (p. ej., ordenador o tableta) a la misma red.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

En la pantalla de inicio de la interfaz de usuario de BactoSense, pulse **Ajustes** y, a continuación, **Información del sistema**.

</td>

<td>

![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

<td>

![BactoSense — Información del sistema](/img/gui/icons/system-info-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Anote la dirección IP de BactoSense que aparece en la página **Información del sistema**.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Abra un navegador web en su dispositivo.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Introduzca `http://<dirección IP>` o `https://<dirección IP>` en la barra de direcciones, según el servicio activado. Añada `:<puerto>` si el puerto difiere del predeterminado y pulse Intro.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

En la página de inicio de sesión, utilice el mismo nombre de usuario y contraseña que en BactoSense y pulse **Iniciar sesión**.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

</div>

## 13.3 Página de inicio en modo manual {#section-13-3}

![BactoSense — Panel Web](/img/gui/es/web-dashboard.png "width=654 class=manual-figure")

*Figura 13-1 Página de inicio de la interfaz web de usuario*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menú | 2 | Estado del instrumento |
| 3 | Panel con los resultados más recientes | 4 | Idioma: menú desplegable para cambiar el idioma. |
| 5 | Menú de usuario: cerrar sesión; las cuentas admin y de servicio también pueden reiniciar BactoSense | 6 | Progreso de la medición actual |

## 13.4 Descarga de un archivo FCS {#section-13-4}

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Busque la medición en la tabla de resultados correspondiente debajo del gráfico. Si es necesario, desplácese horizontalmente hasta los enlaces a la derecha de su fila. |  |
| 3. | Haga clic en el enlace **fcs** (posición X). | ![BactoSense — Enlace de descarga FCS](/img/gui/es/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Espere a que termine la descarga. |  |

## 13.5 Descarga de un archivo ZIP con varios resultados {#section-13-5}

Los resultados de varias mediciones pueden descargarse en un archivo ZIP. Este incluye el archivo FCS y los gráficos de resumen de cada medición.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Busque la tabla **Resultados del modo en línea** o **Resultados del modo manual** correspondiente a las mediciones deseadas. |  |
| 3. | Seleccione el intervalo de fechas de esa tabla y haga clic en **Descargar ZIP**. Aparecerá una barra de progreso en la parte superior del navegador hasta que comience la descarga del ZIP. | ![BactoSense — Descarga ZIP](/img/gui/es/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Espere a que termine la descarga. |  |

## 13.6 Descarga de todos los resultados en CSV, XLSX o PDF {#section-13-6}
La lista de todos los resultados puede descargarse desde la interfaz web en formato Excel XLSX, CSV o PDF. Los resultados del modo en línea, del modo manual y de la validación del instrumento se descargan por separado.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Busque la sección **DESCARGAR RESULTADOS** debajo del gráfico de resultados y elija la fila del modo de medición deseado o de la validación del instrumento. |  |
| 3. | Haga clic en **Descargar XLSX**, **Descargar CSV** o **Descargar PDF** en esa fila para iniciar la descarga. | ![BactoSense — Formatos de descarga de resultados](/img/gui/es/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Espere a que termine la descarga. |  |

## 13.7 Animación de la evolución de los diagramas de puntos {#section-13-7}

La interfaz web permite animar los diagramas de puntos del modo en línea para visualizar la evolución de las mediciones. Esta función muestra imágenes estáticas en rápida sucesión; la animación puede exportarse con el botón Descargar GIF.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Gráficos en el panel de navegación de la izquierda. | ![BactoSense — Navegación a Gráficos](/img/gui/es/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Utilice las flechas anterior y siguiente o el deslizador para seleccionar una medición por su marca de tiempo. | ![BactoSense — Selección de la marca de tiempo del gráfico](/img/gui/es/web-plots-measurement-time.png "width=283 class=manual-figure") |
| 3. | Pulse el botón Play triangular para iniciar la animación. Púlselo de nuevo para pausarla. | ![BactoSense — Controles de reproducción de gráficos](/img/gui/es/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Ajuste **Velocidad de animación** al número positivo de gráficos por segundo que desee. |  |
| 5. | Pulse **Descargar GIF** para exportar hasta 60 de los gráficos más recientes del modo en línea a la velocidad elegida. La exportación utiliza los últimos gráficos, independientemente de la posición del deslizador. |  |

## 13.8 Cambio del intervalo de medición {#section-13-8}
El intervalo utilizado para las mediciones en modo en línea puede cambiarse desde la interfaz web.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Ajustes en el panel de navegación de la izquierda. | ![BactoSense — Intervalo de medición](/img/gui/es/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Introduzca un intervalo de 30 a 360 minutos en **Intervalo de medición [minutos]**. |  |
| 3. | Haga clic en **SAVE** para aplicar el intervalo. |  |

## 13.9 Capturas de pantalla de la interfaz gráfica {#section-13-9}

Realice capturas de pantalla de la interfaz gráfica de BactoSense desde la interfaz web:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Información del sistema en el panel de navegación de la izquierda. | ![BactoSense — Navegación a la información del sistema Web](/img/gui/es/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Pulse **Obtener captura de pantalla** en la parte inferior de la página. |  |
| 3. | La captura de pantalla aparece debajo. |  |

## 13.10 Reinicio desde la interfaz web de usuario {#section-13-10}
Un **admin** o una cuenta de servicio puede reiniciar BactoSense desde la interfaz web siguiendo este procedimiento.

:::info[El encendido remoto no está disponible]

El instrumento no puede encenderse a distancia.

:::

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la esquina superior derecha de la interfaz web, haga clic en el nombre de usuario para abrir el menú de usuario. | ![BactoSense — Menú de usuario para reiniciar](/img/gui/es/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Seleccione **Reiniciar** y, a continuación, haga clic en **Reiniciar** en el cuadro de confirmación. |  |
| 3. | Espere a que el instrumento se reinicie, vuelva a cargar la interfaz web e inicie sesión de nuevo si se le solicita. |  |
