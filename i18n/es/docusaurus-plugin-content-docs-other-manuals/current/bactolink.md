---
id: bactolink
title: BactoLink
sidebar_position: 6
slug: /bactolink
document_id: 40501-01
manual_version: "1"
software_version: "2.2"
---

Módulo de conectividad para BactoSense y BactoSense Multi. Esta edición describe el flujo de trabajo de BactoHub y es válida a partir de la versión 2.2 del software de BactoSense.

## Información general para el usuario {#general-user-information}

### Uso previsto {#intended-use}

BactoLink establece una conexión remota entre el instrumento y su PC. Inicie la conexión a través del portal BactoHub mediante HTTPS y un navegador web. El portal es el punto de acceso a BactoLink y a los instrumentos asociados. Una conexión permanece activa durante **30 minutos** y después debe volver a establecerse.

### Pictogramas {#pictograms}

:::info[Información adicional]

Los avisos informativos proporcionan detalles adicionales sobre el tema tratado. Las listas numeradas describen procedimientos prácticos. Las capturas de pantalla son ejemplos y pueden diferir del dispositivo actual.

:::

### Descripción general y requisitos previos {#prerequisites}

BactoLink consta de una antena, un cable Ethernet y un inyector Power-over-Ethernet (PoE). El inyector se conecta a la fuente de alimentación de BactoSense o BactoSense Multi.

Antes de la instalación:

- Compruebe que el instrumento ejecuta la **versión 2.2 del software o una posterior**.
- Active **DHCP** y **HTTPS** en la configuración del instrumento.
- Active **VNC** si se necesita GUI relay.
- Asegúrese de tener una cuenta en [hub.bnovate.com](https://hub.bnovate.com). Si es necesario, solicite una cuenta a [support@bnovate.com](mailto:support@bnovate.com).

### Inyector Power-over-Ethernet {#poe-injector}

El inyector PoE alimenta la antena a través de Ethernet. Sus conexiones Ethernet y de alimentación al instrumento están integradas de forma permanente. Dispone de un puerto para el cable de alimentación suministrado con BactoSense y de una conexión Ethernet a la antena.

![Dimensiones del inyector PoE](/img/other-manuals/bactolink-poe-dimensions.png "width=550")

La altura del inyector desde las patas hasta la parte superior es de **65.5 mm**.

| Especificación mecánica | Valor |
| --- | --- |
| Material | Policarbonato (PC) |
| Conectores | RJ45, conector de alimentación |
| Protección | IP67 |
| Dimensiones, L × A × An | 165 × 165 × 54 mm |
| Temperatura de funcionamiento | 5–30 °C |

### Antena {#antenna}

La antena se conecta al inyector PoE a través de Ethernet y aloja la tarjeta SIM para las conexiones móviles (**4G/LTE, 3G, 2G**). Consulte [Montaje de BactoLink](#mounting) para obtener información sobre el soporte de montaje.

![Vistas y dimensiones de la antena](/img/other-manuals/bactolink-antenna-dimensions.png "width=600")

| Especificación mecánica | Valor |
| --- | --- |
| Materiales | ABS, PC, FR4 |
| Conector | RJ45 |
| Protección | IP67 |
| Dimensiones, L × A × An | 165 × 165 × 54 mm |
| Peso | 0.8 kg |
| Temperatura de funcionamiento | −40–80 °C |

## Instalación {#installation}

### Conexiones del instrumento {#instrument-connections}

![Conexiones entre BactoSense, el inyector PoE, la antena y la fuente de alimentación](/img/other-manuals/bactolink-connections.png "width=700")

| Conexión | Descripción |
| --- | --- |
| 1 | Ethernet entre el inyector PoE y el puerto RJ45 del instrumento |
| 2 | Alimentación entre el inyector PoE y el puerto de alimentación del instrumento |
| 3 | Ethernet entre el inyector PoE y la antena |
| 4 | Fuente de alimentación del inyector PoE. La fuente de alimentación se suministra con BactoSense. |

### Conexión de la antena y el inyector PoE {#antenna-connection}

1. Abra la bolsa que contiene el cable Ethernet.
2. Abra el paquete del inyector PoE y la bolsa de conectores que se suministra por separado. Saque la tapa, el anillo de sellado con abertura, el espaciador y el conector para el inyector PoE. Colóquelos en el cable Ethernet en el orden ilustrado.

   ![Orden de las piezas del conector PoE en el cable Ethernet](/img/other-manuals/bactolink-p08-1.png "width=450")

3. Introduzca el conector RJ45 en el conector PoE. Ambos admiten una sola orientación. Empuje el conector RJ45 hacia delante hasta el tope. Introduzca el espaciador y el anillo de sellado en el conector PoE. Enrosque la tapa mientras presiona suavemente las piezas entre sí, hasta apretarla a mano. La unión resultante es un cierre de bayoneta para el inyector PoE.

   ![Montaje del conector PoE](/img/other-manuals/bactolink-p08-2.png "width=400")

4. Coloque el otro extremo del cable Ethernet delante de usted.
5. Saque el conector de la antena y la junta tórica del paquete de la antena.

   ![Conector de la antena y junta tórica](/img/other-manuals/bactolink-p08-3.png "width=450")

6. Desenrosque el conector de la antena y extraiga el anillo de sellado empujándolo. Si es necesario, utilice la varilla curva de montaje para extraerlo.

   ![Extracción del anillo de sellado del conector de la antena](/img/other-manuals/bactolink-p09-0.png "width=300")

7. Coloque las piezas del conector de la antena en el cable Ethernet en el orden ilustrado.

   :::caution[Monte el conector de la antena en el orden indicado]

   Conecte primero el RJ45 a la antena, fije el conector a la antena y monte la tapa al final. Esto evita que el cable quede atrapado debajo de la junta.

   :::

   ![Orden de las piezas del conector de la antena](/img/other-manuals/bactolink-p09-1.png "width=450")

8. Introduzca ligeramente el conector RJ45 en el conector de la antena. Asegúrese de que su pequeña pestaña quede dentro de la antena.
9. Introduzca el anillo de sellado en el conector de la antena.
10. Coloque la junta tórica en el conector de la antena y conecte el RJ45.
11. Enrosque el conector en la antena.
12. Enrosque la tapa en el conector.

    ![Montaje finalizado del conector de la antena](/img/other-manuals/bactolink-p10-0.png "width=350")

### Montaje de BactoLink {#mounting}

El kit de montaje permite fijar la antena a objetos cilíndricos o cuadrados, tuberías o varillas.

1. Abra el paquete de la antena y localice el soporte y los componentes de montaje.
2. Identifique la placa de montaje (A), la varilla curva (B) y el espaciador (C). La placa se fija a BactoLink, la varilla curva lo mantiene en su sitio y el espaciador mantiene la distancia entre la varilla y la placa.

   ![Placa de montaje, varilla curva y espaciador](/img/other-manuals/bactolink-p11-1.png "width=400")

3. Localice los dos tornillos y las arandelas en el paquete de la antena.
4. Coloque la placa de montaje sobre BactoLink. Introduzca los tornillos a través de la placa en BactoLink, con las arandelas entre las cabezas de los tornillos y la placa. Apriételos con una **llave Allen de 5 mm** hasta que la placa quede bien fijada.

   ![Fijación de la placa de montaje a BactoLink](/img/other-manuals/bactolink-p11-3.png "width=300")

5. Localice las dos tuercas con brida.
6. Coloque la varilla curva y el espaciador en la placa con la orientación deseada.

   ![Soporte de montaje ensamblado en la antena](/img/other-manuals/bactolink-p11-2.png "width=450")

7. Enrosque las dos tuercas con brida en los extremos roscados de la varilla curva. Apriételas a mano o utilice una **llave de 13 mm**, hasta que las tuercas no se muevan y BactoLink quede bien fijado.

   ![Fijación de la varilla curva y el espaciador](/img/other-manuals/bactolink-p12-1.png "width=450")

### Primera instalación {#first-installation}

1. Compruebe que el instrumento ejecuta la **versión 2.2 del software o una posterior**. Para actualizarlo, póngase en contacto con [support@bnovate.com](mailto:support@bnovate.com).
2. Escanee el código de barras 2D situado en la parte posterior de la antena. Introduzca el nombre de usuario y la contraseña elegidos previamente para BactoHub. Si necesita una cuenta, póngase en contacto con el servicio de asistencia.
3. Apague el instrumento. Conecte los dispositivos como se describe en [Conexiones del instrumento](#instrument-connections) y [Conexión de la antena y el inyector PoE](#antenna-connection).

   ![Ejemplo de las conexiones del instrumento](/img/other-manuals/bactolink-p13-1.png "width=450")

4. Encienda el dispositivo.
5. Abra **Home → System Settings → Network**. Active **DHCP** si es necesario.

   :::caution[Espere antes de reiniciar]

   No apague y vuelva a encender el instrumento inmediatamente.

   :::

   ![Ejemplo de configuración de red](/img/other-manuals/bactolink-p13-2.png "width=500")

6. Abra **Home → System Settings → System Services**. Active **HTTPS** para acceder a WebUI y asigne el **puerto 443**. Si ha realizado cambios, reinicie BactoSense. HTTPS es necesario para que BactoLink funcione. Apague y vuelva a encender el instrumento, o realice primero el siguiente paso opcional.
7. Si necesita GUI relay, active **VNC**, asignado al **puerto 5900**, en **System Services**. Después, apague y vuelva a encender el instrumento.

   :::caution[Visibilidad remota de la pantalla]

   Con GUI relay, sus acciones en la pantalla son visibles para las personas que se encuentren junto al instrumento y para los usuarios conectados de forma remota. Podría compartirse información confidencial.

   :::

8. Configure BactoLink con su número de serie y un nombre fácil de reconocer. Haga clic en **Connect**.

   ![Configuración de la conexión de BactoLink](/img/other-manuals/bactolink-p15-0.png "width=500")

9. Espere hasta que el instrumento esté conectado y haga clic en **Finish**.

   ![Finalización de la configuración de la conexión](/img/other-manuals/bactolink-p15-1.png "width=500")

10. El instrumento aparece en la lista de instrumentos de BactoHub. Seleccione **WebUI** o **GUI relay**. La conexión se abre en una pestaña independiente y permanece activa durante **30 minutos**. Vuelva a conectarse después de ese período.

    ![Lista de instrumentos de BactoHub con conexiones WebUI y GUI relay](/img/other-manuals/bactolink-p15-2.png "width=500")

### Reconfiguración de BactoHub {#reconfiguration}

1. Haga clic en **Initialize BactoLink** debajo de **My Instruments**. Introduzca el número de serie del instrumento y un nombre fácil de reconocer y, a continuación, pulse **Continue**.
2. Repita los pasos **2–9** de [Primera instalación](#first-installation). Después podrá acceder al instrumento mediante WebUI y GUI relay.

## Conexiones remotas {#remote-connections}

### Interfaz web de usuario (WebUI) {#webui}

La WebUI proporciona acceso a los datos del instrumento a través del puerto RJ45. Haga clic en **WebUI** en BactoHub para establecer una conexión mediante BactoLink. Si reinicia BactoSense a través de la WebUI, vuelva a cargar también la página web.

#### Contraseña

Cuando se le solicite, introduzca el nombre de usuario del dispositivo BactoSense (**Basic**, **Advanced**, **Admin** o **Service**) y la contraseña elegida para este.

![Solicitud de inicio de sesión de WebUI](/img/other-manuals/bactolink-p17-0.png "width=350")

#### Panel de control

El panel de control muestra los últimos resultados de medición, el estado del instrumento y avisos de cartuchos caducados.

![Panel de control de WebUI](/img/other-manuals/bactolink-p17-1.png "width=650")

#### Diagramas de puntos

Los diagramas de puntos muestran una animación de las mediciones recientes. La carga puede tardar, según la conexión. Comience con la velocidad de animación **1**; utilice velocidades más altas cuando las imágenes se hayan cargado por completo. Hay opciones de descarga en formatos GIF y FCS.

![Diagramas de puntos y controles de animación de WebUI](/img/other-manuals/bactolink-p17-2.png "width=650")

#### Resultados

Los resultados muestran las mediciones a lo largo del tiempo y ofrecen opciones de descarga. Debajo del gráfico hay áreas de descarga para el modo automático, el modo manual y la validación del instrumento. Los resultados automáticos y manuales se enumeran en la parte inferior. Puede verlos como una tabla, descargar archivos ZIP acumulativos o descargar archivos IMG y FCS para cada medición. BactoSense Multi muestra solo el modo manual y no dispone de un gráfico de series temporales.

![Resultados y áreas de descarga de WebUI](/img/other-manuals/bactolink-p18-0.png "width=650")

#### Registro de protocolos

El registro de protocolos muestra los protocolos ejecutados y los mensajes de error. Descargue los datos en formato CSV.

![Registro de protocolos de WebUI](/img/other-manuals/bactolink-p18-1.png "width=650")

#### Registro de errores

El registro de errores enumera los errores y avisos, que pueden descargarse en formato XLSX, CSV o PDF.

![Registro de errores de WebUI](/img/other-manuals/bactolink-p19-0.png "width=650")

#### Información del sistema

La información del sistema proporciona datos generales del sistema y permite realizar capturas de pantalla.

![Información del sistema de WebUI](/img/other-manuals/bactolink-p19-1.png "width=650")

#### Configuración

La configuración permite cambiar los nombres de las muestras, los intervalos de medición y el nombre del instrumento. No está disponible para BactoSense Multi.

![Configuración de WebUI](/img/other-manuals/bactolink-p19-2.png "width=650")

### Retransmisión de la interfaz gráfica de usuario (GUI relay) {#gui-relay}

GUI relay proporciona acceso al escritorio remoto como si estuviera físicamente junto al instrumento.

![Ejemplo del escritorio remoto de GUI relay](/img/other-manuals/bactolink-p20-0.png "width=650")

:::caution[Visibilidad remota de la pantalla]

Sus acciones en la pantalla son visibles para las personas que se encuentren junto al instrumento y para los usuarios conectados de forma remota. Podría compartirse información confidencial.

:::

## Solución de problemas {#troubleshooting}

Si el instrumento estaba apagado durante la instalación, BactoLink debería funcionar inmediatamente. Si los problemas persisten:

1. Asegúrese de que BactoLink esté completamente encendido antes de encender BactoSense. Deje transcurrir al menos **3 minutos** para que el instrumento establezca una conexión de red.
2. Compruebe la conectividad de la red móvil en el lugar mediante su teléfono móvil.
3. Si no es posible establecer una conexión, desconecte la antena del inyector PoE y vuelva a conectarla para apagarla y encenderla de nuevo.
4. Inspeccione todas las conexiones del inyector y de los instrumentos conectados.
5. Si los problemas persisten, apague y vuelva a encender BactoSense.

## Editor y contacto {#contact}

© bNovate Technologies SA. Sujeto a modificaciones técnicas sin previo aviso, octubre de 2023. Redactado por bNovate Technologies SA. La copia, modificación o distribución del documento a terceros requiere el consentimiento expreso del editor.

bNovate Technologies SA, Ch. Dent d’Oche 1A, CH-1024 Ecublens, Suiza. Teléfono: +41 21 552 14 21. [info@bnovate.com](mailto:info@bnovate.com) · [www.bnovate.com](https://www.bnovate.com).
