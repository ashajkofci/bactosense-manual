---
title: "14. BactoCloud"
sidebar_label: "14. BactoCloud"
sidebar_position: 14
slug: /bactocloud
---

BactoCloud es la plataforma segura en la nube para usuarios de BactoSense, que ofrece visibilidad en tiempo real, acceso remoto e integración inteligente de datos en todas las operaciones de control del agua.

## 14.1 Requisitos informáticos {#section-14-1}

BactoSense inicia una conexión saliente a Internet hacia BactoCloud. La conexión puede utilizar BactoLink, un punto de acceso 4G/5G o Internet por cable. Varios instrumentos pueden compartir una conexión a Internet detrás de NAT; no se requiere VPN ni redirección de puertos entrantes.

| Requisito | Configuración |
| --- | --- |
| Direccionamiento de red | Proporcione una dirección IP, una máscara de subred, una puerta de enlace y un resolvedor DNS operativos. Se admiten DHCP y direccionamiento estático. Confirme los ajustes estáticos con el administrador de red. |
| Acceso saliente | Permita el acceso saliente a `*.bactocloud.com` y `*.bnovate.net` desde la red del instrumento. |
| Ancho de banda | Prevea más de 1 Mbit/s. |
| Uso de datos | Prevea aproximadamente 0.5–1 GB al mes por instrumento que mida cada hora. La sincronización del historial, los diagnósticos y las actualizaciones de software generan tráfico adicional. |
| Sincronización horaria | Configure una fuente horaria aprobada cuando sea necesario para poder correlacionar las marcas de tiempo de los eventos. |
| Proxy del navegador | Un proxy utilizado por los usuarios de BactoCloud debe admitir conexiones WebSocket seguras con BactoCloud. |

Mantenga la interfaz web local del instrumento en una red controlada de la instalación y no exponga sus servicios a Internet público. Las conexiones PLC, Modbus y de E/S existentes pueden seguir utilizándose.

Para configurar el instrumento, consulte [Configuración de red](08-general-operations-and-configurations.md#section-8-6) y [Configuración de servidores NTP](08-general-operations-and-configurations.md#section-8-7).

## 14.2 Registro {#section-14-2}

Visite [www.bactocloud.com/register](https://www.bactocloud.com/register), introduzca los datos de cuenta solicitados y complete la verificación del correo electrónico. El registro crea su cuenta personal; la pertenencia a una organización la conecta con una flota de instrumentos.

Si ha recibido una invitación, siga su enlace e inicie sesión o regístrese con la dirección de correo electrónico exacta a la que se envió. Tras aceptarla, seleccione la organización en la cabecera.

Para crear una organización para su propia flota, abra el selector de organizaciones de la cabecera y elija **New Organisation**. Introduzca su nombre, elija su zona horaria y aplicaciones y seleccione **Create Organisation**. Seleccione la organización correcta antes de generar un código de vinculación.

## 14.3 Vinculación de instrumentos {#section-14-3}
La vinculación conecta un instrumento a una organización de BactoCloud. Necesita permiso para vincular instrumentos a esa organización y una cuenta **admin** en el instrumento. Utilice la pantalla táctil del instrumento o una [vista remota VNC](12-data-access-and-export.md#section-12-4) aprobada de esa pantalla. Un instrumento solo puede pertenecer a una organización a la vez.

Antes de vincularlo, compruebe el software de BactoSense instalado: los instrumentos Rev3 requieren **3.1.0 o posterior** y los Rev2 **2.4.0 o posterior**. Algunas funciones de la nube pueden requerir software más reciente u opciones del instrumento. Si no puede instalar una actualización localmente, póngase en contacto con su servicio técnico antes de continuar.

### 14.3.1 Generación de un código de vinculación {#section-14-3-1}

1. Inicie sesión en BactoCloud y utilice el selector de organizaciones para elegir la organización a la que debe pertenecer el instrumento.
2. Abra el selector de organizaciones de la cabecera, elija **Organisation Settings** y después **Instruments** en la barra lateral. Seleccione **Enrol instrument**. Esta acción también está disponible en la página de flota vacía si no hay instrumentos vinculados.
3. Revise la explicación de vinculación y el requisito de software y seleccione **Generate new code**.
4. Anote o copie el código generado.

![Introducción a la vinculación en BactoCloud con la acción Generate new code y los requisitos mínimos de software.](/img/manual/bactocloud/enrolment.png)

La sección **Enrolment codes** muestra los códigos existentes y sus fechas de caducidad. Utilice un código antes de la fecha indicada o genere otro si ha caducado. Cada código pertenece a la organización en la que se generó. Si la acción de vinculación no está disponible, pida a un administrador de la organización que compruebe su acceso.

### 14.3.2 Introducción del código en el instrumento {#section-14-3-2}

1. En la pantalla de inicio de BactoSense, seleccione **Ajustes** en la barra de herramientas inferior.

   ![BactoSense — Barra Home: Ajustes](/img/gui/es/bactocloud-enrolment-home.png)

2. Seleccione **Ajustes del sistema** en el menú **Ajustes**.

   ![BactoSense — Menú Ajustes: Ajustes del sistema](/img/gui/es/settings-menu-system-settings.png)

3. Seleccione **BactoCloud** para abrir **Configuración de la nube**.

   ![BactoSense — Ajustes del sistema: BactoCloud](/img/gui/es/bactocloud-enrolment-menu.png)

4. Seleccione **Inscríbase en**, introduzca el código generado en BactoCloud y confirme la entrada. Siga los mensajes en pantalla y compruebe que **Registrado** muestre **Sí** y que **Organización** indique la organización deseada.

   ![BactoSense — Ajustes de inscripción en BactoCloud](/img/gui/es/bactocloud-enrolment-settings.png)

Si **BactoCloud** no está disponible, compruebe su rol de usuario local y si está activo el modo demostración o el modo PLC.

### 14.3.3 Confirmación de la vinculación {#section-14-3-3}
En BactoCloud, abra **Organisation Settings → Instruments** desde el selector de organizaciones de la cabecera y compruebe el nombre, el número de serie y el estado de conexión comunicado por el instrumento. Confirme que llegan su estado y mediciones más recientes. **Last seen at** indica la hora del último estado recibido por BactoCloud; no comprueba la conexión de red actual.

Si el instrumento no aparece, compruebe que generó el código en la organización correcta y que completó el procedimiento en el instrumento. Si se rechaza un código o el instrumento ya pertenece a otra organización, solicite ayuda a un administrador de la organización o al soporte.

Si dejan de llegar estados o mediciones, anote el número de serie del instrumento, la versión del software, la marca de tiempo y la última carga correcta. Pida al administrador de red que verifique DNS y la conectividad saliente desde la red del instrumento utilizando los [requisitos informáticos](#section-14-1).

El inventario de instrumentos de la organización también muestra **Enrolled since**. Los usuarios con permiso para eliminar instrumentos pueden seleccionar la acción de fila **Unlink Instrument from organisation**. Antes de desvincular, exporte las mediciones que necesite conservar. La confirmación advierte de que la desvinculación detiene las cargas y elimina las mediciones existentes en la nube. Compruebe el instrumento correcto, introduzca su número de serie en la confirmación y seleccione **Unlink instrument**.