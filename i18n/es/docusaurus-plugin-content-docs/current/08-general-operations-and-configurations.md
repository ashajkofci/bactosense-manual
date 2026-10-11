---
title: "8. Operaciones y configuraciones generales"
sidebar_label: "8. Operaciones y configuraciones generales"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "Manual de usuario de BactoSense: Operaciones y configuraciones generales."
---

## 8.1 Encendido y apagado {#section-8-1}

El botón de encendido de BactoSense se encuentra en el lateral derecho del instrumento.

<img src="/img/manual/asset-9b1ae5aeca7f.png" alt="Ilustración del manual original, página impresa 58" width="224" loading="lazy" />

*Figura 8-1 Botón de encendido de BactoSense*

:::warning[Compruebe la alimentación eléctrica]

Antes de encender BactoSense, asegúrese de que el instrumento esté conectado a una alimentación eléctrica estable que cumpla los requisitos descritos en la sección 5.3.

:::

**Encendido** Para encender BactoSense, pulse brevemente el botón de encendido. El LED del botón permanece encendido y, tras unos segundos, aparece la pantalla de bienvenida en la interfaz de usuario.

**Apagado** Si ha iniciado sesión y desea apagar BactoSense, pulse el botón de cierre de sesión situado en la esquina superior derecha de la interfaz y seleccione *Power off*. Si desea apagarlo desde la propia página de inicio de sesión, mantenga pulsado el botón de encendido durante 10 segundos.

:::warning[Desconecte la alimentación de forma segura]

Para desconectar BactoSense de la alimentación, apague primero el instrumento. A continuación, desenchufe la fuente de alimentación de la red antes de desconectar la clavija de alimentación de BactoSense.

:::

## 8.2 Inicio de sesión, funciones de usuario y permisos {#section-8-2}

Para utilizar BactoSense, los usuarios deben iniciar sesión. Hay disponibles distintas funciones de usuario con diferentes permisos. Los permisos de cada función se enumeran en la sección 8.2.7. Todos los inicios de sesión están protegidos por contraseña.

El inicio y el cierre de sesión se realizan mediante el botón situado en la esquina superior derecha de la interfaz de usuario. La función del usuario activo se muestra junto a ese botón.

### 8.2.1 Inicio de sesión {#section-8-2-1}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Pulse el botón de inicio de sesión de la esquina superior derecha de la interfaz, o la barra de inicio de sesión situada en la parte inferior si acaba de encender el instrumento. |
| 2. | Para la configuración estándar de BactoSense CORE: seleccione uno de los perfiles de usuario Basic, Advanced o Admin. Para BactoSense CORE ampliado con el paquete Management (véase la sección 9.2) y con el modo de gestión avanzada de usuarios activado (véase la sección 8.2.4), introduzca su identificador de usuario. |
| 3. | Introduzca la contraseña y pulse OK. Si no conoce la contraseña, consulte al usuario Admin. En un instrumento nuevo no hay contraseñas establecidas. En ese caso, siga el procedimiento descrito en la sección 8.2.5. |
| 4. | Después de iniciar sesión, verá la interfaz de usuario de BactoSense. |
| 5. | Para cerrar sesión, siga el procedimiento descrito en la sección 8.2.2. |

### 8.2.2 Cierre de sesión manual {#section-8-2-2}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Asegúrese de que todos los procesos (p. ej., mediciones o limpiezas) hayan finalizado. El estado inactivo del instrumento se indica en el lado izquierdo de la barra superior de la interfaz de BactoSense. |
| 2. | Pulse el botón de cierre de sesión situado en la esquina superior derecha de la interfaz. |
| 3. | Seleccione Log out Lock screen. |
| 4. | Para volver a iniciar sesión, siga el procedimiento descrito en la sección 8.2.1. |

### 8.2.3 Cierre de sesión automático {#section-8-2-3}

Es posible configurar el cierre de sesión automático tras un período de inactividad predefinido.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2. | Pulse el botón System settings. |  |
| 3. | Pulse el botón Users. |  |
| 4. | Pulse el botón Settings. |  |
| 5. | Configure el período deseado para el cierre de sesión automático. |  |
| 6. | Pulse Save. |  |

### 8.2.4 Activación del modo de gestión avanzada de usuarios {#section-8-2-4}

Con la función *Advanced User Management*, un administrador del instrumento puede crear distintos usuarios y asignarles diferentes funciones (Basic, Advanced, Admin). Esto permite otorgar permisos distintos a cada usuario y registrar su actividad en la pista de auditoría.

El modo de gestión avanzada de usuarios está disponible en BactoSense SMART y PURE, y en BactoSense CORE ampliado con el paquete Management (véase la sección 9.2).

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2. | Pulse el botón System settings. |  |
| 3. | Pulse el botón System configuration. |  |
| 4. | Marque la casilla Advanced user management mode. |  |
| 5. | Pulse Save. |  |

### 8.2.5 Establecimiento y cambio de contraseñas {#section-8-2-5}

Cada función de usuario está protegida por contraseña.

**Establecimiento de una contraseña en el primer inicio de sesión** Al iniciar sesión por primera vez con cualquier función de usuario, pulse *OK* cuando se solicite una contraseña. Esta acción inicia el proceso guiado de configuración de la contraseña. La única excepción es la contraseña de Service, para la que se proporciona una contraseña preestablecida.

**Establecimiento y cambio de contraseñas** Cada perfil de usuario puede cambiar su propia contraseña. Los usuarios Admin pueden cambiar las contraseñas de otros perfiles. El procedimiento siguiente describe cómo cambiar las contraseñas.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes y, a continuación, Ajustes del sistema. |  |
| 2. | Pulse Users y seleccione el perfil de usuario que desea editar. Pulse Edit después de marcar una casilla. | Los usuarios Admin pueden cambiar las contraseñas de otros perfiles de usuario. |
| 3. | Pulse Change PIN, introduzca el nuevo PIN dos veces y pulse Save. |  |

### 8.2.6 Cambio de los ajustes de contraseñas {#section-8-2-6}

Pueden configurarse varias características de las contraseñas, como la caducidad, la longitud, etc.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2. | Pulse el botón System settings. |  |
| 3. | Pulse el botón Users. |  |
| 4. | Pulse el botón Settings. |  |
| 5. | Configure los requisitos de las contraseñas según sus preferencias. |  |
| 6. | Pulse Save. |  |

### 8.2.7 Funciones de usuario y permisos {#section-8-2-7}

*Tabla 8-1 Funciones de usuario y permisos*

| PERMISO | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Ver el último resultado | ✓ | ✓ | ✓ |
| Ver todos los resultados y exportar | ✓ | ✓ | ✓ |
| Iniciar, detener y programar mediciones | ✓ | ✓ | ✓ |
| Cambiar entre los modos Auto y Manual | ✓ | ✓ | ✓ |
| Ver el registro de errores y advertencias | ✓ | ✓ | ✓ |
| Cambiar el nombre de resultados | ✓ | ✓ | ✓ |
| Validar el dispositivo | ✓ | ✓ | ✓ |
| Cambiar la contraseña propia | ✓ | ✓ | ✓ |
| Ver la información del sistema | ✓ | ✓ | ✓ |
| Ver los ajustes de red | ✓ | ✓ | ✓ |
| Ver la última autocomprobación | ✓ | ✓ | ✓ |
| Cambiar el cartucho | ✓ | ✓ | ✓ |
| Borrar errores | ✓ | ✓ | ✓ |
| Ver el registro de intervenciones | ✓ | ✓ | ✓ |
| Ver los resultados de validación | ✓ | ✓ | ✓ |
| Eliminar resultados |  | ✓ | ✓ |
| Reanalizar resultados con otras regiones |  | ✓ | ✓ |
| Ajustar alarmas |  | ✓ | ✓ |
| Ajustar regiones de análisis |  | ✓ | ✓ |
| Reiniciar |  | ✓ | ✓ |
| Ejecutar una autocomprobación |  | ✓ | ✓ |
| Eliminar mediciones antiguas |  | ✓ | ✓ |
| Exportar todo |  | ✓ | ✓ |
| Ver la información de intervenciones |  | ✓ | ✓ |
| Exportar diagnósticos |  | ✓ | ✓ |
| Cambiar las salidas analógicas y digitales |  |  | ✓ |
| Probar las salidas analógicas y digitales |  |  | ✓ |
| Cambiar las contraseñas de otros usuarios |  |  | ✓ |
| Crear otros usuarios |  |  | ✓ |
| Cambiar los ajustes de autenticación |  |  | ✓ |

| PERMISO | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Establecer el nombre del dispositivo |  |  | ✓ |
| Establecer la fecha y la hora |  |  | ✓ |
| Cambiar los ajustes de red |  |  | ✓ |
| Cambiar los ajustes de los servicios |  |  | ✓ |
| Activar Modbus con una clave o desactivarlo |  |  | ✓ |
| Cambiar el idioma |  |  | ✓ |
| Cambiar al modo de demostración |  |  | ✓ |
| Restablecer los ajustes |  |  | ✓ |
| Restablecimiento completo de fábrica (excepto el registro de intervenciones) |  |  | ✓ |
| Importar ajustes |  |  | ✓ |
| Cambiar los ajustes de encendido automático |  |  | ✓ |
| Activar paquetes de ampliación mediante código |  |  | ✓ |

## 8.3 Configuraciones básicas {#section-8-3}

### 8.3.1 Idioma de la interfaz de usuario {#section-8-3-1}

Solo los usuarios Admin pueden cambiar el idioma.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |
| 2. | Pulse System settings y, a continuación, Language. |
| 3. | Elija el idioma y pulse el botón OK. |
| 4. | Aparece un mensaje que solicita recargar la interfaz de usuario. Confirme el mensaje. |

### 8.3.2 Fecha y hora {#section-8-3-2}

Solo los usuarios Admin pueden cambiar la fecha y la hora.

:::info[Sincronización automática de la hora]

Si la sincronización horaria está activada, ya sea mediante servidores NTP o a través de Modbus TCP, los ajustes manuales de fecha y hora se sobrescribirán en la próxima sincronización. Los ajustes se encuentran en *System settings* &gt; *Date &amp; Time* &gt; *Time synchronization settings*. Para configurar un servidor NTP, consulte la sección 8.7.

:::

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |
| 2. | Pulse el botón System settings. |
| 3. | Pulse el botón Date &amp; Time. |
| 4. | Introduzca la fecha y la hora. |
| 5. | Seleccione la zona horaria en Time zone. |
| 6. | Pulse el botón Set. |

### 8.3.3 Nombre del dispositivo {#section-8-3-3}

Solo los usuarios Admin pueden cambiar el nombre del dispositivo.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |
| 2. | Pulse el botón System settings. |
| 3. | Pulse el botón System configuration. |
| 4. | Pulse el botón Device name. |
| 5. | Introduzca el nombre deseado para el dispositivo en el campo de entrada. |
| 6. | Pulse el botón Save. |

### 8.3.4 Encendido automático {#section-8-3-4}

BactoSense incorpora una función de reinicio automático para recuperarse de interrupciones temporales de la alimentación. Según la configuración, el instrumento puede simplemente reiniciarse o también reanudar el funcionamiento realizando una autolimpieza y reiniciando una serie en modo Auto.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón System settings. |
| 3. | Pulse el botón System configuration. |
| 4. | Seleccione sus preferencias de encendido automático. Nota: la autolimpieza solo se realiza si la alimentación se ha interrumpido durante una medición. |
| 5. | Pulse el botón Save. |

### 8.3.5 Notificaciones sonoras {#section-8-3-5}

Puede activar notificaciones sonoras para indicar la finalización de una medición manual o un proceso de mantenimiento, una alarma o un error. La notificación consiste en uno o varios pitidos del instrumento.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón System settings. |
| 3. | Pulse el botón System configuration. |
| 4. | Active la opción Sound notifications. |
| 5. | Pulse el botón Save. |

## 8.4 Importación y exportación de ajustes {#section-8-4}

Los ajustes se exportan a una memoria USB como se indica en la sección 12.1.1. Se recopilan en un archivo con marca de tiempo y extensión ***.bnv**. Para importar los ajustes en un instrumento nuevo o utilizarlos como copia de seguridad, debe copiarse el archivo ***.bnv** en la raíz de la memoria USB o en el directorio al que se exportó. Si hay varias copias de los ajustes en una memoria USB, el sistema utilizará la más reciente.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. | <img src="/img/manual/asset-c4707aba8b28.png" alt="Ilustración del procedimiento, página impresa 66" width="73" loading="lazy"/> |
| 2. | Pulse el botón Maintenance. | <img src="/img/manual/asset-41c98df7efd4.png" alt="Ilustración del procedimiento, página impresa 66" width="72" loading="lazy"/> |
| 3. | Pulse el botón Special export import. | <img src="/img/manual/asset-e8682259cb34.png" alt="Ilustración del procedimiento, página impresa 66" width="73" loading="lazy"/> |
| 4. | Conecte una memoria USB. Si es necesario, pulse Refresh USB list hasta que se detecte la memoria. | Asegúrese de que el archivo *.bnv esté en la raíz de la memoria USB. La memoria debe estar formateada en FAT32, que es el estándar habitual. |
| 5. | Pulse Import settings. | <img src="/img/manual/asset-f4dd80d89669.png" alt="Ilustración del procedimiento, página impresa 66" width="263" loading="lazy"/> |
| 6. | Seleccione los ajustes que desea importar. Los ajustes de medición incluyen conjuntos de regiones de análisis, ajustes de E/S, alarmas y ajustes de fecha y hora. Los ajustes de red incluyen las direcciones IP, DNS y NTP. | <img src="/img/manual/asset-3445f2d05cf6.png" alt="Ilustración del procedimiento, página impresa 66" width="269" loading="lazy"/> |
| 7. | Pulse Import settings y espere a que el dispositivo se reinicie. |  |

## 8.5 Configuración de alarmas {#section-8-5}

Se aplican las reglas siguientes a las alarmas:

- Solo los usuarios **Advanced** y **Admin** pueden cambiar los ajustes de las alarmas.
- Las alarmas solo están activas en el **modo Auto**.

BactoSense registra las alarmas de las siguientes formas:

- Aparece una ventana emergente en la interfaz gráfica de usuario.
- Aparece un icono de campana de alarma en la barra superior si la última medición ha superado el umbral de alarma. La alarma se muestra en el resumen de la medición al consultar un resultado.
- Puede enviarse una señal a un PLC a través de las salidas digitales (configurable).

<img src="/img/manual/asset-8dd01c5c0a3f.png" alt="Ilustración del manual original, página impresa 67" width="517" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Ejemplo de captura de pantalla" width="32" loading="lazy" />

*Figura 8-2 Configuración de alarmas en la interfaz gráfica de usuario de BactoSense.*

<table><tbody><tr><td>1</td><td>Seleccionar, activar o desactivar alarmas.<br />Los usuarios pueden configurar hasta 9<br />alarmas.</td><td>2</td><td>Nombre de la alarma seleccionada actualmente.</td></tr><tr><td>3</td><td>Fuente de la alarma: resultado de<br />medición que debe<br />evaluarse. Véase la figura 8-3.</td><td>4</td><td>Condición: activar la alarma cuando<br />el parámetro medido sea mayor<br />que (&gt;) o menor que (&lt;) el<br />umbral.</td></tr><tr><td>5</td><td>Umbral</td><td>6</td><td>Display: si se marca, se muestra una línea<br />en el gráfico del modo Auto con el<br />color seleccionado.</td></tr></tbody></table>

<img src="/img/manual/asset-1ac20898071f.png" alt="Ilustración del manual original, página impresa 68" width="581" loading="lazy" />

*Figura 8-3 Fuentes de alarma de BactoSense. Para una fuente seleccionada, se establecen una condición y un umbral.* *En el ejemplo anterior, se activa una alarma al alcanzar un determinado nivel de llenado del cartucho.*

El procedimiento siguiente describe cómo configurar la alarma:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2. | Pulse el botón de ajustes del modo Auto. |  |
| 3. | Pulse Alarms. |  |
| 4. | Active, seleccione y configure las alarmas (según las figuras 8-2 y 8-3). | Por defecto, no hay alarmas activas. |
| 5. | Pulse Save para guardar la configuración de las alarmas. |  |

## 8.6 Configuración de red {#section-8-6}

:::info[Ajustes de red]

Solicite a su administrador de red los ajustes correctos.

:::

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th>INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td><img src="/img/manual/asset-c4707aba8b28.png" alt="Ilustración del procedimiento, página impresa 69" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Pulse el botón Ajustes del sistema.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Ilustración del procedimiento, página impresa 69" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Pulse el botón Network.</td><td><img src="/img/manual/asset-74d2c341d686.png" alt="Ilustración del procedimiento, página impresa 69" width="73" loading="lazy" /></td></tr><tr><td rowSpan="2">4.</td><td>A: para una IP dinámica, marque la casilla DHCP (1). Nota: esta es la configuración preferida en la mayoría de los casos cuando BactoSense está conectado a un router o conmutador.</td><td rowSpan="2"><img src="/img/manual/asset-d8ec1a3e87c6.png" alt="Ilustración del procedimiento, página impresa 69" width="260" loading="lazy" /></td></tr><tr><td>B: para una IP estática, desmarque la casilla DHCP (1) e introduzca la configuración de red deseada (2). Nota: esta es la configuración preferida cuando BactoSense está conectado directamente a un portátil mediante Ethernet. Asegúrese de ajustar también la configuración de red del portátil de forma correspondiente.</td></tr><tr><td>5.</td><td>Pulse el botón Save.</td><td></td></tr><tr><td>6.</td><td>Pulse el botón Reboot now.</td><td></td></tr></tbody></table>

## 8.7 Configuración de servidores NTP {#section-8-7}

Network Time Protocol (NTP) es un protocolo de red utilizado para sincronizar la hora de los ordenadores de una red. Por defecto, la sincronización utiliza los servidores de Network Time Foundation (ntp.org). Puede establecer servidores NTP personalizados en el menú *Date and Time*.

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th>INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td><img src="/img/manual/asset-c4707aba8b28.png" alt="Ilustración del procedimiento, página impresa 70" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Pulse el botón Ajustes del sistema.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Ilustración del procedimiento, página impresa 70" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Pulse el botón Date &amp; Time.</td><td><img src="/img/manual/asset-a42806c7c455.png" alt="Ilustración del procedimiento, página impresa 70" width="73" loading="lazy" /></td></tr><tr><td>4.</td><td>Pulse el botón Time synchronization settings.</td><td><img src="/img/manual/asset-53a90550e48e.png" alt="Ilustración del procedimiento, página impresa 70" width="261" loading="lazy" /></td></tr><tr><td>5.</td><td>Seleccione la fuente de sincronización deseada en Sync Source.</td><td><Admonition type="info" title="Información adicional">La sincronización horaria puede realizarse mediante un servidor NTP o Modbus TCP. Encontrará más información sobre Modbus TCP en la sección 7.1.</Admonition></td></tr><tr><td>6.</td><td>Actualice los servidores NTP.</td><td><img src="/img/manual/asset-ac0fbb8d54d0.png" alt="Ilustración del procedimiento, página impresa 70" width="261" loading="lazy" /></td></tr><tr><td>7</td><td>Pulse el botón OK.</td><td><Admonition type="info" title="Información adicional">Al editar y cambiar la dirección de un servidor y pulsar OK, el sistema hace ping al servidor y actualiza automáticamente la fecha y la hora.</Admonition></td></tr></tbody></table>

## 8.8 Interfaz de usuario de BactoSense {#section-8-8}

### 8.8.1 Estructura general y menú de inicio {#section-8-8-1}

<img src="/img/manual/asset-7301dbe18d0b.png" alt="Ilustración del manual original, página impresa 71" width="587" loading="lazy" />

*Figura 8-4 Pantalla Home de la interfaz de usuario de BactoSense.*

La pantalla Home muestra el resultado de la medición más reciente. Pulse Ajustes para abrir el menú de ajustes.

La interfaz de usuario de BactoSense se divide en 3 secciones principales:

<table><tbody><tr><td>A</td><td>Barra superior</td></tr><tr><td>B</td><td>Vista de contenido</td></tr><tr><td>C</td><td>Barra de acciones</td></tr></tbody></table>

Los elementos principales de la interfaz de usuario son:

<table><tbody><tr><td>1</td><td>Botón de inicio o volver. Permite<br />navegar por el menú.</td><td>2</td><td>Modo de funcionamiento (Manual o En línea/Auto)<br />Estado del instrumento (proceso<br />activo actualmente)</td></tr><tr><td>3</td><td>Vista actual</td><td>4</td><td>Iconos de estado de la barra superior, véase 8.8.2.</td></tr><tr><td>5</td><td>Función de usuario<br />Hora actual</td><td>6</td><td>Cerrar sesión o apagar</td></tr><tr><td>7</td><td>Resultados: mostrar los resultados de medición del modo seleccionado.</td><td>8</td><td>Modo: elegir el modo en línea (Auto) para mediciones continuas con el dispositivo de muestreo en línea, o el modo manual para muestras puntuales con el dispositivo de muestreo manual.</td></tr><tr><td>9</td><td>Iniciar: abrir el asistente de medición y elegir un protocolo de análisis (modo manual).</td><td colSpan="2"></td></tr></tbody></table>

Según la función de usuario, algunas opciones pueden no ser visibles o estar desactivadas.

### 8.8.2 Iconos de estado de la barra superior {#section-8-8-2}

Los iconos de la barra superior se muestran en la parte superior de la pantalla. Indican el estado del instrumento.

*Tabla 8-2 Iconos de la barra superior*

| ICONO | DESCRIPCIÓN | ICONO | DESCRIPCIÓN |
| --- | --- | --- | --- |
| <img src="/img/manual/asset-dc77eba566ee.png" alt="Ilustración del procedimiento, página impresa 72" width="40" loading="lazy"/> | Proceso en curso | <img src="/img/manual/asset-0a659e5a284a.png" alt="Ilustración del procedimiento, página impresa 72" width="40" loading="lazy"/> | Modo de demostración activado |
| <img src="/img/manual/asset-f8c9ed6e595a.png" alt="Ilustración del procedimiento, página impresa 72" width="41" loading="lazy"/> | Cartucho casi vacío | <img src="/img/manual/cell-c721cca85bf4.png" alt="Mantenimiento necesario (véase el capítulo 15)" width="60" loading="lazy"/> | Mantenimiento necesario (véase el capítulo 15) |
| <img src="/img/manual/asset-c3efc86358a9.png" alt="Ilustración del procedimiento, página impresa 72" width="41" loading="lazy"/> | Cartucho próximo a caducar | <img src="/img/manual/cell-7b30939634a3.png" alt="Indicación del nivel del cartucho" width="60" loading="lazy"/> | Indicación del nivel del cartucho |
| <img src="/img/manual/cell-7bf18abd5784.png" alt="Cartucho no inicializado correctamente o ausente" width="60" loading="lazy"/> | Cartucho no inicializado<br/>correctamente o ausente | <img src="/img/manual/cell-ec16f9129509.png" alt="Cartucho vacío" width="60" loading="lazy"/> | Cartucho vacío |
| <img src="/img/manual/asset-1bbc128332f2.png" alt="Ilustración del procedimiento, página impresa 72" width="48" loading="lazy"/> | Error crítico (sección 16.3) | <img src="/img/manual/cell-9447c1d395cc.png" alt="Cartucho caducado" width="60" loading="lazy"/> | Cartucho caducado |
| <img src="/img/manual/asset-601829975ed7.png" alt="Ilustración del procedimiento, página impresa 72" width="48" loading="lazy"/> | Alarma en la última medición<br/>(solo modo Auto, véase la sección correspondiente) | <img src="/img/manual/asset-4b23f6b46f1e.png" alt="Ilustración del procedimiento, página impresa 72" width="48" loading="lazy"/> | Error no crítico (sección 16.2) |

## 8.9 Gestión de cartuchos {#section-8-9}

Los cartuchos de BactoSense contienen los reactivos necesarios para medir y mantener limpio el instrumento. Los tipos de cartucho disponibles son TCC (recuento total de células), ICC (recuento de células intactas), EBC (recuento de células de E. coli), ACC (recuento de células activas), CBC (recuento de células coliformes) y NBC (recuento de células de enterococos). Las secciones siguientes explican la manipulación de los cartuchos. El almacenamiento, el transporte y la recarga de los cartuchos se describen en el capítulo 17.

### 8.9.1 Instrucciones generales de manipulación de cartuchos {#section-8-9-1}

Al manipular el cartucho, deben seguirse las instrucciones siguientes:

*Tabla 8-3 Instrucciones de manipulación de cartuchos*

<table><tbody><tr><td><img src="/img/manual/cell-28af480709ce.png" alt="Siga los procedimientos descritos en este manual." width="93" loading="lazy" /></td><td>Siga los procedimientos<br />descritos en este manual.</td><td><img src="/img/manual/asset-32c675a70f3d.png" alt="Ilustración del procedimiento, página impresa 73" width="72" loading="lazy" /></td><td>Almacene y transporte entre<br />15 °C – 25 °C (59 °F –<br />77 °F). La temperatura<br />óptima es de 15 °C (59 °F).</td></tr><tr><td><img src="/img/manual/cell-27e561e22ac1.png" alt="Utilice guantes de nitrilo al manipular el cartucho." width="93" loading="lazy" /></td><td>Utilice guantes de nitrilo al<br />manipular el cartucho.</td><td><img src="/img/manual/asset-65d703b8ec50.png" alt="Ilustración del procedimiento, página impresa 73" width="72" loading="lazy" /></td><td>Almacene y transporte entre<br />un 20 % y un 60 % de humedad<br />relativa.</td></tr><tr><td><img src="/img/manual/cell-d6353e538e2e.png" alt="Utilice gafas de seguridad al manipular el cartucho." width="93" loading="lazy" /></td><td>Utilice gafas de seguridad al<br />manipular el cartucho.</td><td><img src="/img/manual/cell-a80baea9abca.png" alt="El cartucho está diseñado para su recarga." width="88" loading="lazy" /></td><td>El cartucho está diseñado para<br />su recarga.</td></tr><tr><td><img src="/img/manual/cell-7ac996bd1fed.png" alt="Transporte, instale y almacene en la orientación indicada." width="93" loading="lazy" /></td><td>Transporte, instale y almacene en<br />la orientación indicada.</td><td><img src="/img/manual/cell-bc083b74fc3c.png" alt="No tire el cartucho a la basura." width="88" loading="lazy" /></td><td>No tire el cartucho<br />a la basura.</td></tr></tbody></table>

### 8.9.2 Comprobación del nivel de llenado y la fecha de caducidad de un cartucho {#section-8-9-2}

Los niveles de llenado y la fecha de caducidad del cartucho pueden consultarse en varios lugares.

- El icono del cartucho que aparece en la barra superior de la interfaz indica constantemente el nivel aproximado de llenado. Si el cartucho está a punto de caducar, el icono también lo indica. Encontrará la explicación de los distintos iconos en la sección 8.8.2.
- Si necesita más información, pulse *Ajustes* en la *pantalla Home* y, a continuación, *Información del sistema*. En *Cartridge capacity remaining* se muestra cuánto contenido queda en el cartucho (en porcentaje), y en *Cartridge expiration date* se indica cuándo caduca. La misma información puede consultarse en la interfaz web (véase el capítulo 13).

### 8.9.3 Descripción general del cartucho {#section-8-9-3}

El cartucho de BactoSense se instala en un compartimento específico del instrumento, cerrado por una puerta. La puerta del compartimento del cartucho solo debe abrirse para retirar e instalar cartuchos.

<img src="/img/manual/asset-f8b0a7f1f4e5.png" alt="Ilustración del manual original, página impresa 74" width="381" loading="lazy" />

*Figura 8-5 El compartimento del cartucho de BactoSense se abre retirando dos tuercas hexagonales de 7 mm* *con la llave para tuercas suministrada.*

<table><tbody><tr><td>1</td><td>Tuercas hexagonales de 7 mm para asegurar la puerta<br />del compartimento del cartucho</td><td>2</td><td>Puerta del compartimento del cartucho</td></tr></tbody></table>

:::warning[Utilice la herramienta correcta para la puerta]

Abra y cierre la puerta del compartimento del cartucho únicamente con la llave específica para tuercas hexagonales de 7 mm.

:::

Después de abrir la puerta del compartimento del cartucho, el usuario tiene acceso al cartucho y a los conectores que lo conectan a BactoSense.

<img src="/img/manual/asset-8e1d2269e91e.png" alt="Ilustración del manual original, página impresa 75" width="659" loading="lazy" />

*Figura 8-6 Descripción general de un cartucho instalado. El cartucho queda inmovilizado mediante un* *pestillo de fijación en la parte superior (4) y se conecta al instrumento mediante varios conectores de fluidos (5* *- 8) y un conector electrónico (9). Cuando no hay un cartucho instalado, los conectores de fluidos y electrónicos* *pueden sujetarse con el soporte extraíble de conectores (10).*

<table><tbody><tr><td>1</td><td>Instrumento BactoSense</td><td>2</td><td>Cartucho</td></tr><tr><td>3</td><td>Asa del cartucho</td><td>4</td><td>Pestillo de fijación del cartucho</td></tr><tr><td>5</td><td>Conector de colorante (verde)</td><td>6</td><td>Conector de solución de hipoclorito (rojo)</td></tr><tr><td>7</td><td>Conector de residuos (negro o beige)</td><td>8</td><td>Conector de enjuague (azul)</td></tr><tr><td>9</td><td>Conector electrónico</td><td>10</td><td>Soporte extraíble de conectores</td></tr><tr><td>11</td><td>Puerta del compartimento del cartucho</td><td colSpan="2"></td></tr></tbody></table>

:::warning[Proteja el conector no utilizado]

BactoSense tiene cinco conectores de fluidos. Según el tipo de cartucho, solo se necesitan cuatro o los cinco conectores. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte de conectores para evitar la contaminación.

:::

### 8.9.4 Cambio de cartuchos {#section-8-9-4}

El procedimiento siguiente describe el cambio de cartuchos. Utilícelo si desea retirar un cartucho e instalar otro inmediatamente. Si solo desea retirar un cartucho sin instalar otro, siga las instrucciones de la sección 8.9.5. El cambio de cartucho dura aproximadamente 35 min.

:::warning[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th>INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>Tenga preparado el cartucho de recambio y aclimatado a la temperatura ambiente.</td><td></td></tr><tr><td>2.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td></td></tr><tr><td>3.</td><td>Pulse el botón Maintenance.</td><td>Los usuarios Basic omiten este paso.</td></tr><tr><td>4.</td><td>Pulse el botón Cartridge change.</td><td></td></tr><tr><td>5.</td><td>Seleccione la opción Change cartridge.</td><td></td></tr><tr><td>6.</td><td><Admonition type="warning" title="Siga el asistente de cartuchos">Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección 8.9.1. Utilice guantes de nitrilo y gafas de seguridad. Selle herméticamente los conectores de fluidos del cartucho antiguo con los tapones unidos a ellos antes de retirarlo. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.</Admonition></td><td><Admonition type="warning" title="Omisión del asistente de cartuchos">Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte para evitar la contaminación.</Admonition></td></tr><tr><td>7.</td><td>Manipulación del cartucho retirado. • Si desea almacenar el cartucho retirado, consulte las instrucciones de almacenamiento de la sección 17.1.3. • Si desea recargar el cartucho retirado, consulte las instrucciones de recarga de la sección 17.3.2.</td><td></td></tr></tbody></table>

### 8.9.5 Retirada de un cartucho {#section-8-9-5}

Este procedimiento sirve para retirar un cartucho sin instalar inmediatamente otro. Si desea cambiar cartuchos, siga el procedimiento descrito en la sección 8.9.4. La retirada del cartucho dura aproximadamente 5 min.

:::warning[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th>INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td></td></tr><tr><td>2.</td><td>Pulse el botón Maintenance.</td><td>Los usuarios Basic omiten este paso.</td></tr><tr><td>3.</td><td>Pulse el botón Cartridge change.</td><td></td></tr><tr><td>4.</td><td>Seleccione la opción Remove cartridge.</td><td></td></tr><tr><td>5.</td><td><Admonition type="warning" title="Siga el asistente de cartuchos">Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección 8.9.1. Utilice guantes de nitrilo y gafas de seguridad. Selle herméticamente los conectores de fluidos del cartucho antiguo con los tapones unidos a ellos antes de retirarlo. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.</Admonition></td><td><Admonition type="warning" title="Omisión del asistente de cartuchos">Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla.</Admonition></td></tr><tr><td>6.</td><td>Manipulación del cartucho retirado. • Si desea almacenar el cartucho retirado, consulte las instrucciones de almacenamiento de la sección 17.1.3. • Si desea recargar el cartucho retirado, consulte las instrucciones de recarga de la sección 17.3.2.</td><td>La barra superior de la interfaz indica que no hay ningún cartucho conectado. El botón Maintenance del menú Home aparece ahora en naranja.<br /><img src="/img/manual/asset-b2065e0aa4d5.png" alt="Indicación de ausencia de cartucho y botón Maintenance del menú Home resaltado en naranja." width="30" loading="lazy" /></td></tr></tbody></table>

### 8.9.6 Instalación de un cartucho {#section-8-9-6}

Este procedimiento sirve para instalar un cartucho cuando no hay otro instalado en BactoSense. Si ya hay un cartucho y desea cambiarlo, siga el procedimiento descrito en la sección 8.9.4. La instalación del cartucho dura aproximadamente 30 min.

:::warning[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th>INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>Tenga preparado el cartucho nuevo y aclimatado a la temperatura ambiente.</td><td></td></tr><tr><td>2.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td></td></tr><tr><td>3.</td><td>Pulse el botón Maintenance.</td><td>El botón Maintenance aparece resaltado en naranja cuando no hay ningún cartucho instalado. Los usuarios Basic omiten este paso.</td></tr><tr><td>4.</td><td>Pulse el botón Cartridge change.</td><td></td></tr><tr><td>5.</td><td>Seleccione la opción Install cartridge.</td><td></td></tr><tr><td>6.</td><td><Admonition type="warning" title="Siga el asistente de cartuchos">Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección 8.9.1. Utilice guantes de nitrilo y gafas de seguridad. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.</Admonition></td><td><Admonition type="warning" title="Omisión del asistente de cartuchos">Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte para evitar la contaminación.</Admonition></td></tr><tr><td>7.</td><td>Después de completar todos los pasos del asistente en pantalla, el cartucho nuevo queda correctamente inicializado.</td><td>El estado del cartucho se indica mediante un símbolo de cartucho en la barra superior de la interfaz; véase 8.8.2.</td></tr></tbody></table>

## 8.10 Cambio entre dispositivos de muestreo {#section-8-10}

BactoSense puede utilizarse con el dispositivo de muestreo manual o con el de muestreo en línea. El procedimiento siguiente describe el cambio de dispositivos de muestreo. Encontrará información sobre su almacenamiento en la sección 17.1.2.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Retire el dispositivo de muestreo montado según las instrucciones de la sección 8.10.1 (dispositivo de muestreo en línea) o 8.10.2 (dispositivo de muestreo manual). |  |
| 2. | Instale el nuevo dispositivo de muestreo según las instrucciones de la sección 5.5 (dispositivo de muestreo en línea) o 5.4 (dispositivo de muestreo manual). |  |

### 8.10.1 Retirada del dispositivo de muestreo en línea {#section-8-10-1}

Al cambiar al dispositivo de muestreo manual, debe retirarse el dispositivo de muestreo en línea. Siga el procedimiento siguiente para retirarlo de forma segura y prepararlo para el almacenamiento.

<img src="/img/manual/icon-gloves.png" alt="Utilice guantes de protección" width="32" loading="lazy" />

Evite la contaminación del equipo. Utilice guantes de nitrilo al manipular muestras, dispositivos de muestreo y cualquier componente que entre en contacto con ellos.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Finalice cualquier serie de mediciones en curso, como se describe en la sección 10.2.2. |
| 2. | Detenga el flujo de agua a través de los tubos y del dispositivo de muestreo. |
| 3. | Desenrosque con cuidado el anillo de fijación moleteado hasta que pueda retirar el dispositivo de muestreo. |
| 4. | Retire el dispositivo de muestreo en línea. Asegúrese de que el tapón de sellado blanco siga bien asentado en el conector del dispositivo. Si no es así, puede haber quedado en el conector de muestreo de BactoSense. En ese caso, retírelo con cuidado con unas pinzas y vuelva a colocarlo en el dispositivo de muestreo. |
| 5. | Desconecte y vacíe los tubos de entrada y salida, separándolos de la fuente de agua y del cuerpo del dispositivo de muestreo. |
| 6. | Inspeccione los tubos de entrada y salida para detectar contaminación o daños. Reutilice únicamente tubos limpios e intactos. |
| 7. | Si desea almacenar el dispositivo de muestreo, guarde el dispositivo y los tubos por separado en bolsas de plástico limpias y secas y siga las instrucciones de almacenamiento de la sección 17.1.2. |
| 8. | Para montar ahora el dispositivo de muestreo manual, consulte la sección 5.4. |

### 8.10.2 Retirada del dispositivo de muestreo manual {#section-8-10-2}

Al cambiar al dispositivo de muestreo en línea, debe retirarse el dispositivo de muestreo manual. Siga el procedimiento siguiente para retirarlo de forma segura y prepararlo para el almacenamiento.

<img src="/img/manual/icon-gloves.png" alt="Utilice guantes de protección" width="32" loading="lazy" />

Evite la contaminación del equipo. Utilice guantes de nitrilo al manipular muestras, dispositivos de muestreo y cualquier componente que entre en contacto con ellos.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Limpie el dispositivo de muestreo manual: si dispone de una Washstation, siga el procedimiento de la sección 15.2.2; en caso contrario, siga el procedimiento de la sección 15.2.3. |
| 2. | Al finalizar, coloque un tubo limpio y vacío de 5 mL con tapón de rosca o la Washstation en el dispositivo de muestreo. |
| 3. | Desenrosque con cuidado el anillo de fijación moleteado situado en la parte superior del dispositivo hasta que pueda retirarlo. |
| 4. | Retire el dispositivo de muestreo manual. Asegúrese de que el tapón de sellado blanco siga bien asentado en el conector del dispositivo. Si no es así, puede haber quedado en el conector de muestreo de BactoSense. En ese caso, retírelo con cuidado con unas pinzas y vuelva a colocarlo en el dispositivo de muestreo. |
| 5. | Si desea almacenar el dispositivo de muestreo, colóquelo en una bolsa de plástico limpia y seca y siga las instrucciones de almacenamiento de la sección 17.1.2. |
| 6. | Para montar ahora el dispositivo de muestreo en línea, siga el procedimiento de la sección 5.5. |

## 8.11 Cualificación {#section-8-11}

La cualificación es un proceso que garantiza que BactoSense funciona según lo previsto. Hay disponibles distintas opciones.

Para realizar una comprobación rápida y completamente automática del estado del instrumento, ejecute el procedimiento de autocomprobación descrito en la sección 16.6. Esta prueba no requiere reactivos ni intervención del usuario, es muy rápida y comprueba la integridad y la comunicación entre los distintos módulos de BactoSense.

Para evaluar la limpieza de BactoSense y descartar una contaminación, realice el procedimiento de verificación de la limpieza de la sección 8.11.1.

En entornos de funcionamiento que requieran una prueba de aptitud del sistema, utilice el *System Suitability* *Test Kit (SST Kit)* y siga el procedimiento de su manual de usuario.

Para otros entornos, se recomienda cualificar el instrumento con el *Validation Kit* en las situaciones siguientes:

- Después de enviar el instrumento o de otro transporte de larga distancia que lo exponga a vibraciones o golpes.
- Después de almacenar el instrumento durante más de un mes.
- Si hay indicios de que los resultados de medición podrían ser erróneos.

### 8.11.1 Verificación de la limpieza {#section-8-11-1}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado como se describe en la sección 5.4. |
| 2. | Limpie el dispositivo de muestreo con dos repeticiones: si dispone de una Washstation, siga el procedimiento de la sección 15.2.2; en caso contrario, el de la sección 15.2.3. |
| 3. | Prepare la muestra en blanco en un tubo de 5 mL con tapón de rosca. Hay dos opciones: A) utilice agua libre de células, p. ej., una alícuota de solución estéril del Validation Kit. Si utiliza la alícuota de solución estéril del Validation Kit, retire su tapón y colóquela en un tubo vacío de 5 mL con tapón de rosca, como se describe en el manual de usuario del Validation Kit. B) Tome agua mineral sin gas y fíltrela dos veces con un filtro de membrana de tamaño de poro de 0.22 µm o inferior. |
| 4. | En la interfaz de usuario de BactoSense, vaya al menú Home. |
| 5. | En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición. |
| 6. | Elija el protocolo Prime en la lista de protocolos disponibles. |
| 7. | Pulse el botón Next. |

|  | PASO DE TRABAJO |
| --- | --- |
| 8. | Retire el tubo o la Washstation del dispositivo de muestreo manual y coloque la muestra en blanco. |
| 9. | Pulse el botón Start para ejecutar el protocolo Prime. |
| 10. | Una vez finalizado Prime, pulse el botón New para volver a la lista de protocolos. |
| 11. | Seleccione el protocolo Water Analysis en la lista de protocolos disponibles. |
| 12. | Configure dos repeticiones. |
| 13. | Introduzca un nombre de muestra pulsando el campo de texto Sample name, escribiendo el nombre y pulsando OK. |
| 14. | Compruebe que esté configurada la región predeterminada ICC o TCC y, de lo contrario, cámbiela pulsando el campo Gates. |
| 15. | Pulse el botón Next. |
| 16. | Pulse el botón Start y espere a que finalicen las dos mediciones. |
| 17. | Al finalizar, pulse el botón Next para revisar los resultados. |
| 18. | Examine los resultados y compárelos con los valores de referencia indicados a continuación. BactoSense está limpio si se cumplen los siguientes criterios: • Para cartuchos TCC: TCC [/mL] &lt; 300 • Para cartuchos ICC: ICC [/mL] &lt; 100. |
| 19. | Si las concentraciones celulares superan los límites especificados, aplique el procedimiento siguiente: • Repita el procedimiento con una muestra en blanco recién preparada. • Repita el procedimiento después de una descontaminación con el Cleaning Kit (véase la sección 18.3). • Si la prueba sigue fallando, póngase en contacto con el soporte de bNovate o con su representante local de servicio. |
| 20. | Al finalizar, coloque un tubo limpio y vacío de 5 mL con tapón de rosca o la Washstation en el dispositivo de muestreo manual. |

## 8.12 Modo de demostración {#section-8-12}

El modo de demostración puede utilizarse para mostrar el dispositivo o aprender a navegar por los menús y utilizar sus funciones. Al activarlo, el instrumento se reinicia en un modo especial que muestra datos de demostración (los resultados de medición del propietario quedan ocultos). Todas las funciones del instrumento se sustituyen por simulaciones que nunca mueven el hardware ni modifican la base de datos de resultados. Esto permite iniciar protocolos sin cargar una muestra y simular la eliminación o el reanálisis de resultados sin cambiar los datos. Si el modo de demostración está activado, aparece el mensaje ***Demo*** en la parte superior central de la pantalla. Cuando el instrumento vuelve al modo normal, los datos del propietario se muestran de nuevo y todas las funciones vuelven a estar activas.

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th colSpan="2">INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td colSpan="2"><img src="/img/manual/asset-c4707aba8b28.png" alt="Ilustración del procedimiento, página impresa 83" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Pulse el botón System settings y, a continuación, Demo mode.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Ilustración del procedimiento, página impresa 83" width="73" loading="lazy" /></td><td><img src="/img/manual/asset-65a7aba669db.png" alt="Ilustración del procedimiento, página impresa 83" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Marque la casilla Activate demo mode.</td><td colSpan="2"></td></tr><tr><td>4.</td><td>Pulse el botón Save and restart.</td><td colSpan="2"></td></tr><tr><td>5.</td><td>El dispositivo se reinicia automáticamente.</td><td colSpan="2"></td></tr></tbody></table>

Para volver al modo normal, siga el mismo procedimiento, pero desmarque la casilla **Activate demo** **mode**.

## 8.13 Restablecimiento de fábrica {#section-8-13}

El restablecimiento de fábrica devuelve la mayoría de los ajustes del instrumento a los valores de fábrica: límites de las regiones de análisis, intervalo de medición, nombres de protocolo predeterminados, usuarios, idioma y ajustes de red. Solo los usuarios Admin y Service pueden acceder a esta opción.

El procedimiento siguiente describe cómo realizar un restablecimiento de fábrica:

<table><tbody><tr><th></th><th>PASO DE TRABAJO</th><th colSpan="2">INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.</td><td colSpan="2"><img src="/img/manual/asset-c4707aba8b28.png" alt="Ilustración del procedimiento, página impresa 84" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Pulse Mantenimiento y, a continuación, Restablecimiento de fábrica.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Ilustración del procedimiento, página impresa 84" width="73" loading="lazy" /></td><td><img src="/img/manual/asset-e6d546463675.png" alt="Ilustración del procedimiento, página impresa 84" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Utilice las casillas para seleccionar los parámetros que desea restablecer: • Ajustes del instrumento. • Mediciones, incluidos errores y registros. • Ambos.</td><td colSpan="2"><Admonition type="info" title="Información adicional">Los registros de servicio, los resultados de validación y el historial de actualizaciones de software no se eliminan.</Admonition></td></tr><tr><td>4.</td><td>A continuación, pulse el botón Reset the device and reboot.</td><td colSpan="2"></td></tr></tbody></table>
