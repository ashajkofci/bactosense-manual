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

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">PASO DE TRABAJO</th><th scope="col" colSpan="2">INFORMACIÓN ADICIONAL / IMÁGENES</th></tr><tr><td>1.</td><td>Conecte BactoSense mediante Ethernet a una red segura (p. ej., LAN). Conecte su dispositivo (p. ej., ordenador o tableta) a la misma red.</td><td colSpan="2"></td></tr><tr><td>2.</td><td>En la pantalla Home de la interfaz de usuario de BactoSense, pulse Ajustes y, a continuación, Información del sistema.</td><td><img src="/img/manual/cell-6a3f9ce5d051.png" alt="Ilustración de la tabla de la página 119 del manual" width="122" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-fc64c36946da.png" alt="Ilustración de la tabla de la página 119 del manual" width="122" className="manual-figure" loading="lazy" /></td></tr><tr><td>3.</td><td>Anote la dirección IP de BactoSense que aparece en la página System info.</td><td colSpan="2"></td></tr><tr><td>4.</td><td>Abra un navegador web en su dispositivo.</td><td colSpan="2"></td></tr><tr><td>5.</td><td>Introduzca la dirección IP de BactoSense en la barra de direcciones y pulse Intro.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>En la página de inicio de sesión, utilice el mismo nombre de usuario y contraseña que en BactoSense y pulse Login.</td><td colSpan="2"></td></tr></tbody></table>

## 13.3 Página de inicio en modo manual {#section-13-3}

<img src="/img/figures-second/figure-57e499d51a174f.webp" alt="Figura 13-1 Página de inicio de la interfaz web de usuario" width="654" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Ilustración del manual de usuario de BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 13-1 Página de inicio de la interfaz web de usuario*

<table className="manual-table"><tbody><tr><td>1</td><td>Menú</td><td>2</td><td>Estado del instrumento</td></tr><tr><td>3</td><td>Panel con los resultados más recientes</td><td>4</td><td>Language: menú desplegable para cambiar el idioma.</td></tr><tr><td>5</td><td>Opciones para cerrar sesión en la interfaz web y reiniciar BactoSense</td><td>6</td><td>Progreso de la medición actual</td></tr></tbody></table>

## 13.4 Descarga de un archivo FCS {#section-13-4}

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Vaya al resultado que desea exportar. |  |
| 3. | Haga clic en el enlace fcs (posición X). | <img src="/img/manual/cell-0c18cf68589a.png" alt="Ilustración de la tabla de la página 120 del manual" width="271" className="manual-figure" loading="lazy"/> |
| 4. | Espere a que termine la descarga. |  |

## 13.5 Descarga de un archivo ZIP con varios resultados {#section-13-5}

Los resultados de varias mediciones pueden descargarse en un archivo ZIP. Este incluye el archivo FCS y los gráficos de resumen de cada medición.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Busque los resultados del modo que le interese: Modo en línea o Modo manual. |  |
| 3. | Seleccione el intervalo de fechas deseado y haga clic en Download ZIP. Aparecerá una barra de progreso en la parte superior del navegador hasta que comience la descarga del ZIP. | <img src="/img/manual/cell-836f089084c0.png" alt="Ilustración de la tabla de la página 121 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Espere a que termine la descarga. |  |

## 13.6 Descarga de todos los resultados en CSV, XLSX o PDF {#section-13-6}

La lista de todos los resultados puede descargarse desde la interfaz web en formato Excel XLSX, CSV o PDF. Los resultados del modo en línea (Auto) se separan de los del modo manual.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Resultados en el panel de navegación de la izquierda. |  |
| 2. | Busque la sección DOWNLOAD RESULTS, situada justo debajo de la sección superior PLOT. |  |
| 3. | Haga clic en el archivo deseado (xlsx, csv o PDF) para iniciar la descarga. | <img src="/img/manual/cell-9979275487c3.png" alt="Ilustración de la tabla de la página 121 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Espere a que termine la descarga. |  |

## 13.7 Animación de la evolución de los diagramas de puntos {#section-13-7}

La interfaz web permite animar los diagramas de puntos del modo en línea (Auto) para visualizar la evolución de las mediciones. Esta función muestra imágenes estáticas en rápida sucesión; la animación puede exportarse con el botón Descargar GIF.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Gráficos en el panel de navegación de la izquierda. | <img src="/img/manual/cell-0615055418e0.png" alt="Ilustración de la tabla de la página 122 del manual" width="283" className="manual-figure" loading="lazy"/> |
| 2. | Utilice las flechas anterior y siguiente o el deslizador para centrarlo en el intervalo de fechas deseado. | <img src="/img/manual/cell-fec791f8e8fd.png" alt="Ilustración de la tabla de la página 122 del manual" width="283" className="manual-figure" loading="lazy"/> |
| 3. | Pulse el botón Play para iniciar la animación. | <img src="/img/manual/cell-fb7fd241751c.png" alt="Ilustración de la tabla de la página 122 del manual" width="283" className="manual-figure" loading="lazy"/> |
| 4. | Si es necesario, ajuste la velocidad mediante el campo de velocidad de animación. |  |
| 5. | La animación puede descargarse como archivo GIF pulsando Descargar GIF. |  |

## 13.8 Cambio del intervalo de medición {#section-13-8}

Si el instrumento está en modo Auto, el intervalo de medición puede cambiarse desde la interfaz web.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página Ajustes en el panel de navegación de la izquierda. | <img src="/img/manual/cell-6df7821e3a62.png" alt="Ilustración de la tabla de la página 122 del manual" width="283" className="manual-figure" loading="lazy"/> |
| 2. | Cambie la duración del intervalo de medición. |  |
| 3. | Haga clic en Save para confirmar. |  |

## 13.9 Capturas de pantalla de la interfaz gráfica {#section-13-9}

Realice capturas de pantalla de la interfaz gráfica de BactoSense desde la interfaz web:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la interfaz web, seleccione la página System info en el panel de navegación de la izquierda. | <img src="/img/manual/cell-71bc4e13a72d.png" alt="Ilustración de la tabla de la página 123 del manual" width="284" className="manual-figure" loading="lazy"/> |
| 2. | Pulse el botón Get screenshot en la parte inferior de la página. |  |
| 3. | La captura de pantalla aparece debajo. |  |

## 13.10 Reinicio desde la interfaz web de usuario {#section-13-10}

BactoSense puede reiniciarse desde la interfaz web siguiendo el procedimiento siguiente.

:::info[El encendido remoto no está disponible]

El instrumento no puede encenderse a distancia.

:::

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la esquina superior derecha de la interfaz web, haga clic en el nombre de usuario para abrir el menú de usuario. | <img src="/img/manual/cell-f60b02982fd9.png" alt="Ilustración de la tabla de la página 123 del manual" width="284" className="manual-figure" loading="lazy"/> |
| 2. | Seleccione Reiniciar y confirme la solicitud. |  |
| 3. | El instrumento se reinicia y es necesario volver a iniciar sesión. |  |
