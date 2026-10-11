---
title: "8. Operaciones y configuraciones generales"
sidebar_label: "8. Operaciones y configuraciones generales"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "Manual de usuario de BactoSense: Operaciones y configuraciones generales."
---

## 8.1 Encendido y apagado {#section-8-1}

El botón de encendido de BactoSense se encuentra en el lateral derecho del instrumento.

![Ilustración del manual original, página impresa 58](/img/manual/asset-9b1ae5aeca7f.png "width=160")

*Figura 8-1 Botón de encendido de BactoSense*

:::caution[Compruebe la alimentación eléctrica]

Antes de encender BactoSense, asegúrese de que el instrumento esté conectado a una alimentación eléctrica estable que cumpla los requisitos descritos en la sección [Conexión de BactoSense a la alimentación eléctrica](05-installation.md#section-5-3).

:::

**Encendido** Para encender BactoSense, pulse brevemente el botón de encendido. El LED del botón permanece encendido y, tras unos segundos, aparece la pantalla de bienvenida en la interfaz de usuario.

**Apagado** Si ha iniciado sesión y desea apagar BactoSense, pulse el botón de cierre de sesión situado en la esquina superior derecha de la interfaz y seleccione *Apagar*. Si desea apagarlo desde la propia página de inicio de sesión, mantenga pulsado el botón de encendido durante 10 segundos.

:::caution[Desconecte la alimentación de forma segura]

Para desconectar BactoSense de la alimentación, apague primero el instrumento. A continuación, desenchufe la fuente de alimentación de la red antes de desconectar la clavija de alimentación de BactoSense.

:::

## 8.2 Inicio de sesión, funciones de usuario y permisos {#section-8-2}

Para utilizar BactoSense, los usuarios deben iniciar sesión. Hay disponibles distintas funciones de usuario con diferentes permisos. Los permisos de cada función se enumeran en la sección [Funciones de usuario y permisos](08-general-operations-and-configurations.md#section-8-2-7). Todos los inicios de sesión están protegidos por contraseña.

El inicio y el cierre de sesión se realizan mediante el botón situado en la esquina superior derecha de la interfaz de usuario. La función del usuario activo se muestra junto a ese botón.

### 8.2.1 Inicio de sesión {#section-8-2-1}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Pulse el botón de inicio de sesión de la esquina superior derecha de la interfaz, o la barra de inicio de sesión situada en la parte inferior si acaba de encender el instrumento. |
| 2. | Para la configuración estándar de BactoSense CORE o BactoSense ID: seleccione uno de los perfiles de usuario Basic, Advanced o Admin. Para BactoSense CORE o BactoSense ID ampliado con el paquete Management (véase la sección [Paquete Management](09-upgrade-packages.md#section-9-2)) y con el modo de gestión avanzada de usuarios activado (véase la sección [Activación del modo de gestión avanzada de usuarios](08-general-operations-and-configurations.md#section-8-2-4)), introduzca su identificador de usuario. |
| 3. | Introduzca la contraseña y pulse OK. Si no conoce la contraseña, consulte al usuario Admin. En un instrumento nuevo no hay contraseñas establecidas. En ese caso, siga el procedimiento descrito en la sección [Establecimiento y cambio de contraseñas](08-general-operations-and-configurations.md#section-8-2-5). |
| 4. | Después de iniciar sesión, verá la interfaz de usuario de BactoSense. |
| 5. | Para cerrar sesión, siga el procedimiento descrito en la sección [Cierre de sesión manual](08-general-operations-and-configurations.md#section-8-2-2). |

### 8.2.2 Cierre de sesión manual {#section-8-2-2}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Asegúrese de que todos los procesos (p. ej., mediciones o limpiezas) hayan finalizado. El estado inactivo del instrumento se indica en el lado izquierdo de la barra superior de la interfaz de BactoSense. |
| 2. | Pulse el botón de cierre de sesión situado en la esquina superior derecha de la interfaz. |
| 3. | Seleccione Cerrar sesión / Bloquear pantalla. |
| 4. | Para volver a iniciar sesión, siga el procedimiento descrito en la sección [Inicio de sesión](08-general-operations-and-configurations.md#section-8-2-1). |

### 8.2.3 Cierre de sesión automático {#section-8-2-3}

Es posible configurar el cierre de sesión automático tras un período de inactividad predefinido.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes del sistema. |  |
| 3. | Pulse el botón Usuarios. |  |
| 4. | Pulse el botón Ajustes. |  |
| 5. | Configure el período deseado para el cierre de sesión automático. |  |
| 6. | Pulse Guardar. |  |

### 8.2.4 Activación del modo de gestión avanzada de usuarios {#section-8-2-4}

Con la función *Advanced User Management*, un administrador del instrumento puede crear distintos usuarios y asignarles diferentes funciones (Basic, Advanced, Admin). Esto permite otorgar permisos distintos a cada usuario y registrar su actividad en la pista de auditoría.

El modo de gestión avanzada de usuarios está disponible en BactoSense SMART y PURE, y en BactoSense CORE o BactoSense ID ampliado con el paquete Management (véase la sección [Paquete Management](09-upgrade-packages.md#section-9-2)).

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes del sistema. |  |
| 3. | Pulse el botón Configuración del sistema. |  |
| 4. | Marque la casilla Modo avanzado de gestión de usuarios. |  |
| 5. | Pulse Guardar. |  |

### 8.2.5 Establecimiento y cambio de contraseñas {#section-8-2-5}

Cada función de usuario está protegida por contraseña.

**Establecimiento de una contraseña en el primer inicio de sesión** Al iniciar sesión por primera vez con cualquier función de usuario, pulse *OK* cuando se solicite una contraseña. Esta acción inicia el proceso guiado de configuración de la contraseña. La única excepción es la contraseña de Service, para la que se proporciona una contraseña preestablecida.

**Establecimiento y cambio de contraseñas** Cada perfil de usuario puede cambiar su propia contraseña. Los usuarios Admin pueden cambiar las contraseñas de otros perfiles. El procedimiento siguiente describe cómo cambiar las contraseñas.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes. Los usuarios Basic pulsan Cambiar contraseña; los usuarios Advanced y Admin pulsan Ajustes del sistema y, a continuación, Usuarios. |  |
| 2. | Seleccione el perfil de usuario que desea editar y pulse Editar. | Los usuarios Basic y Advanced pueden cambiar su propio PIN. Los usuarios Admin también pueden cambiar el PIN de los usuarios Basic y Advanced. |
| 3. | Pulse Cambiar PIN. Introduzca el nuevo PIN en PIN y Confirmar PIN, después pulse Guardar. |  |

### 8.2.6 Cambio de los ajustes de contraseñas {#section-8-2-6}

Pueden configurarse varias características de las contraseñas, como la caducidad, la longitud, etc.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes del sistema. |  |
| 3. | Pulse el botón Usuarios. |  |
| 4. | Pulse el botón Ajustes. |  |
| 5. | Configure los requisitos de las contraseñas según sus preferencias. |  |
| 6. | Pulse Guardar. |  |

### 8.2.7 Funciones de usuario y permisos {#section-8-2-7}

*Tabla 8-1 Funciones de usuario y permisos*

<div className="manual-user-roles-scroll">

<table className="manual-user-roles-permissions">

<colgroup>
<col className="user-role-permission-column" />
<col className="user-role-basic-column" />
<col className="user-role-advanced-column" />
<col className="user-role-admin-column" />
</colgroup>

<thead>
<tr>
<th scope="col">PERMISO</th>
<th scope="col">BASIC</th>
<th scope="col">ADVANCED</th>
<th scope="col">ADMIN</th>
</tr>
</thead>

<tbody>
<tr><td>Ver el último resultado</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver todos los resultados y exportar</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Iniciar, detener y programar mediciones</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Cambiar entre los modos en línea y Manual</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver el registro de errores y advertencias</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Cambiar el nombre de resultados</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Validar el dispositivo</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Cambiar la contraseña propia</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver la información del sistema</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver los ajustes de red</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver la última autocomprobación</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Cambiar el cartucho</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Borrar errores</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver el registro de intervenciones</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Ver los resultados de validación</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Eliminar resultados</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Reanalizar resultados con otras regiones</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Ajustar alarmas</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Ajustar regiones de análisis</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Reiniciar</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Ejecutar una autocomprobación</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Eliminar mediciones antiguas</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Exportar todo</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Ver la información de intervenciones</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Exportar diagnósticos</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Cambiar las salidas analógicas y digitales</td><td></td><td></td><td>✓</td></tr>
<tr><td>Probar las salidas analógicas y digitales</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar las contraseñas de otros usuarios</td><td></td><td></td><td>✓</td></tr>
<tr><td>Crear otros usuarios</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar los ajustes de autenticación</td><td></td><td></td><td>✓</td></tr>
<tr><td>Establecer el nombre del dispositivo</td><td></td><td></td><td>✓</td></tr>
<tr><td>Establecer la fecha y la hora</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar los ajustes de red</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar los ajustes de los servicios</td><td></td><td></td><td>✓</td></tr>
<tr><td>Activar Modbus con una clave o desactivarlo</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar el idioma</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar al modo de demostración</td><td></td><td></td><td>✓</td></tr>
<tr><td>Restablecer los ajustes</td><td></td><td></td><td>✓</td></tr>
<tr><td>Restablecimiento completo de fábrica (excepto el registro de intervenciones)</td><td></td><td></td><td>✓</td></tr>
<tr><td>Importar ajustes</td><td></td><td></td><td>✓</td></tr>
<tr><td>Cambiar los ajustes de encendido automático</td><td></td><td></td><td>✓</td></tr>
<tr><td>Activar paquetes de ampliación mediante código</td><td></td><td></td><td>✓</td></tr>
</tbody>

</table>

</div>
## 8.3 Configuraciones básicas {#section-8-3}

### 8.3.1 Idioma de la interfaz de usuario {#section-8-3-1}

Solo los usuarios Admin pueden cambiar el idioma.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón Ajustes del sistema. Pulse el botón Idioma. |
| 3. | Elija el idioma y pulse el botón OK. |
| 4. | Cuando se solicite recargar la interfaz, pulse Interfaz de recarga. |

### 8.3.2 Fecha y hora {#section-8-3-2}

Solo los usuarios Admin pueden cambiar la fecha y la hora.

:::info[Sincronización automática de la hora]

Si la sincronización horaria está activada, ya sea mediante servidores NTP o a través de Modbus TCP, los ajustes manuales de fecha y hora se sobrescribirán en la próxima sincronización. Los ajustes se encuentran en Home > Ajustes > Ajustes del sistema > Fecha y hora > Ajustes de sincronización horaria. Para configurar un servidor NTP, consulte la sección [Configuración de servidores NTP](08-general-operations-and-configurations.md#section-8-7).

:::

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón Ajustes del sistema. |
| 3. | Pulse el botón Fecha y hora. |
| 4. | Introduzca la fecha y la hora. |
| 5. | Seleccione la zona horaria. |
| 6. | Pulse el botón Configurar. |

### 8.3.3 Nombre del dispositivo {#section-8-3-3}

Solo los usuarios Admin pueden cambiar el nombre del dispositivo.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón Ajustes del sistema. |
| 3. | Pulse el botón Configuración del sistema. |
| 4. | Pulse el campo Nombre del dispositivo. |
| 5. | Introduzca el nombre del dispositivo con el teclado y pulse OK. |
| 6. | Pulse el botón Guardar. |

### 8.3.4 Encendido automático {#section-8-3-4}

BactoSense incorpora una función de reinicio automático para recuperarse de interrupciones temporales de la alimentación. Según la configuración, el instrumento puede simplemente reiniciarse o también reanudar el funcionamiento realizando una autolimpieza y reiniciando una serie en modo en línea.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón Ajustes del sistema. |
| 3. | Pulse el botón Configuración del sistema. |
| 4. | Seleccione sus preferencias de encendido automático. Nota: la autolimpieza solo se realiza si la alimentación se ha interrumpido durante una medición. |
| 5. | Pulse el botón Guardar. |

### 8.3.5 Notificaciones sonoras {#section-8-3-5}

Puede activar notificaciones sonoras para indicar la finalización de una medición manual o un proceso de mantenimiento, una alarma o un error. La notificación consiste en uno o varios pitidos del instrumento.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |
| 2. | Pulse el botón Ajustes del sistema. |
| 3. | Pulse el botón Configuración del sistema. |
| 4. | Active Notificaciones sonoras. |
| 5. | Pulse el botón Guardar. |

## 8.4 Importación y exportación de ajustes {#section-8-4}

Los ajustes se exportan a una memoria USB como se indica en la sección [Exportación de ajustes, diagnósticos o todos los datos a USB](12-data-access-and-export.md#section-12-1-1). Se recopilan en un archivo con marca de tiempo y extensión ***.bnv**. Para importar los ajustes en un instrumento nuevo o utilizarlos como copia de seguridad, debe copiarse el archivo ***.bnv** en la raíz de la memoria USB o en el directorio al que se exportó. Si hay varias copias de los ajustes en una memoria USB, el sistema utilizará la más reciente.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. | ![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Pulse el botón Mantenimiento. | ![BactoSense — Menú de mantenimiento](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") |
| 3. | Pulse el botón Exportación importación especial. | ![BactoSense — Opciones especiales de exportación e importación](/img/gui/icons/special-import-export-button.png "width=48 class=manual-icon") |
| 4. | Conecte una memoria USB. Si es necesario, pulse Actualizar lista USB hasta que se detecte la memoria. | Asegúrese de que el archivo *.bnv esté en la raíz de la memoria USB. La memoria debe estar formateada en FAT32, que es el estándar habitual. |
| 5. | Pulse el botón Importar configuración. | ![BactoSense — Importación y exportación USB](/img/gui/es/usb-import-and-export.png "width=263") |
| 6. | Seleccione los ajustes que desea importar. Los ajustes de medición incluyen conjuntos de regiones de análisis, ajustes de E/S, alarmas y ajustes de fecha y hora. Los ajustes de red incluyen las direcciones IP, DNS y NTP. | ![BactoSense — Opciones de importación de ajustes](/img/gui/es/import-settings-options.png "width=269") |
| 7. | Pulse Importar configuración y después Reiniciar ahora en el mensaje de confirmación; espere a que el dispositivo se reinicie. |  |

## 8.5 Configuración de alarmas {#section-8-5}

Se aplican las reglas siguientes a las alarmas:

- Solo los usuarios **Advanced** y **Admin** pueden cambiar los ajustes de las alarmas.
- Las alarmas solo están activas en el **modo en línea**.

BactoSense registra las alarmas de las siguientes formas:

- Aparece una ventana emergente en la interfaz gráfica de usuario.
- Aparece un icono de campana de alarma en la barra superior si la última medición ha superado el umbral de alarma. La alarma se muestra en el resumen de la medición al consultar un resultado.
- Puede enviarse una señal a un PLC a través de las salidas digitales (configurable).

![BactoSense — Configuración de alarmas](/img/gui/es/alarm-configuration.png "width=517")

*Figura 8-2 Configuración de alarmas en la interfaz gráfica de usuario de BactoSense.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Seleccionar, activar o desactivar alarmas.<br/>Los usuarios pueden configurar hasta 9<br/>alarmas. | 2 | Nombre de la alarma seleccionada actualmente. |
| 3 | Fuente de la alarma: resultado de<br/>medición que debe<br/>evaluarse. Véase la figura 8-3. | 4 | Condición: activar la alarma cuando<br/>el parámetro medido sea mayor<br/>que (&gt;) o menor que (&lt;) el<br/>umbral. |
| 5 | Umbral | 6 | Display: si se marca, se muestra una línea<br/>en el gráfico del modo en línea con el<br/>color seleccionado. |

![BactoSense — Origen de la alarma del cartucho](/img/gui/es/cartridge-alarm-source.png "width=290")

*Figura 8-3 Fuentes de alarma de BactoSense. Para una fuente seleccionada, se establecen una condición y un umbral.* *En el ejemplo anterior, se activa una alarma al alcanzar un determinado nivel de llenado del cartucho.*

El procedimiento siguiente describe cómo configurar la alarma:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes del modo en línea. |  |
| 3. | Pulse el botón Alarma. |  |
| 4. | Active, seleccione y configure las alarmas (según las figuras 8-2 y 8-3). | Por defecto, no hay alarmas activas. |
| 5. | Pulse Guardar para guardar la configuración de las alarmas. |  |

## 8.6 Configuración de red {#section-8-6}

:::info[Ajustes de red]

Solicite a su administrador de red los ajustes correctos.

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th>

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes.

</td>

<td>

![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse el botón Ajustes del sistema.

</td>

<td>

![BactoSense — Configuración del sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Red.

</td>

<td>

![BactoSense — Configuración de red](/img/gui/icons/network-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

A: para una IP dinámica, marque la casilla DHCP (1). Nota: esta es la configuración preferida en la mayoría de los casos cuando BactoSense está conectado a un router o conmutador.

B: para una IP estática, desmarque la casilla DHCP (1) e introduzca la configuración de red deseada (2). Nota: esta es la configuración preferida cuando BactoSense está conectado directamente a un portátil mediante Ethernet. Asegúrese de ajustar también la configuración de red del portátil de forma correspondiente.

</td>

<td>

![BactoSense — Configuración de red](/img/gui/es/network-configuration.png "width=260")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Pulse el botón Guardar.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Pulse el botón Reiniciar ahora.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 8.7 Configuración de servidores NTP {#section-8-7}

Network Time Protocol (NTP) es un protocolo de red utilizado para sincronizar la hora de los ordenadores de una red. Por defecto, la sincronización utiliza los servidores de Network Time Foundation (ntp.org). Puede establecer servidores NTP personalizados en el menú *Fecha y hora*.

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th>

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes.

</td>

<td>

![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse el botón Ajustes del sistema.

</td>

<td>

![BactoSense — Configuración del sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Fecha y hora.

</td>

<td>

![BactoSense — Configuración de fecha y hora](/img/gui/icons/date-time-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse el botón Ajustes de sincronización horaria.

</td>

<td>

![BactoSense — Fecha y hora](/img/gui/es/date-and-time-settings.png "width=261")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Seleccione la fuente deseada en «Fuente de sincronización.».

</td>

<td>

:::info[Información adicional]

La sincronización horaria puede realizarse mediante un servidor NTP o Modbus TCP. Encontrará más información sobre Modbus TCP en la sección [Modbus TCP](../field-bus-interface/#section-7-1).

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Actualice los servidores NTP.

</td>

<td>

![BactoSense — Sincronización horaria](/img/gui/es/time-synchronization-settings.png "width=261")

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Pulse el botón OK.

</td>

<td>

:::info[Información adicional]

Pulse Prueba NTP para comprobar si los servidores configurados son accesibles. Pulse OK para guardar los ajustes de sincronización.

:::

</td>

</tr>

</tbody>

</table>

## 8.8 Interfaz de usuario de BactoSense {#section-8-8}

### 8.8.1 Estructura general, pantalla Home y menú de ajustes {#section-8-8-1}

![BactoSense — Vista general de la pantalla de inicio](/img/gui/es/home-overview.png "width=587")

*Figura 8-4 Pantalla Home de la interfaz de usuario de BactoSense.*

La pantalla Home muestra el resultado de la medición más reciente. Pulse Ajustes para abrir el menú de ajustes.

La interfaz de usuario de BactoSense se divide en 3 secciones principales:

|  |  |
| --- | --- |
| A | Barra superior |
| B | Vista de contenido |
| C | Barra de acciones |

Los elementos principales de la interfaz de usuario son:

<div className="manual-ui-elements-scroll">

<table className="manual-ui-elements">

<colgroup>
<col className="ui-element-number" />
<col className="ui-element-description" />
<col className="ui-element-number" />
<col className="ui-element-description" />
</colgroup>

<tbody>

<tr>

<td>

1

</td>

<td>

Botón de inicio o volver. Permite<br />navegar por el menú.

</td>

<td>

2

</td>

<td>

Modo de funcionamiento (Manual o En línea)<br />Estado del instrumento (proceso<br />activo actualmente)

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Vista actual

</td>

<td>

4

</td>

<td>

Iconos de estado de la barra superior, véase [Iconos de estado de la barra superior](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Función de usuario<br />Hora actual

</td>

<td>

6

</td>

<td>

Cerrar sesión o apagar

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Resultados: mostrar los resultados de medición del modo seleccionado.

</td>

<td>

8

</td>

<td>

Modo: elegir el modo en línea para mediciones continuas con el dispositivo de muestreo en línea, o el modo manual para muestras puntuales con el dispositivo de muestreo manual.

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Iniciar: abrir el asistente de medición y elegir un protocolo de análisis (modo manual).

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

</div>

Según la función de usuario, algunas opciones pueden no ser visibles o estar desactivadas.

### 8.8.2 Iconos de estado de la barra superior {#section-8-8-2}

Los iconos de la barra superior se muestran en la parte superior de la pantalla. Indican el estado del instrumento.

*Tabla 8-2 Iconos de la barra superior*

| ICONO | DESCRIPCIÓN | ICONO | DESCRIPCIÓN |
| --- | --- | --- | --- |
| ![BactoSense — Proceso en curso](/img/gui/icons/process-running-status.png "width=32 class=manual-icon") | Proceso en curso | ![BactoSense — Modo de demostración activo](/img/gui/icons/demo-mode-status.png "width=32 class=manual-icon") | Modo de demostración activado |
| ![BactoSense — Cartucho casi vacío](/img/gui/icons/cartridge-almost-empty-status.png "width=32 class=manual-icon") | Cartucho casi vacío | ![BactoSense — Mantenimiento necesario](/img/gui/icons/service-required-status.png "width=32 class=manual-icon") | Mantenimiento necesario (véase el capítulo [Mantenimiento](15-maintenance.md)) |
| ![BactoSense — Cartucho próximo a caducar](/img/gui/icons/cartridge-almost-expired-status.png "width=32 class=manual-icon") | Cartucho próximo a caducar | ![BactoSense — Nivel de llenado del cartucho](/img/gui/icons/cartridge-level-status.png "width=32 class=manual-icon") | Indicación del nivel del cartucho |
| ![BactoSense — Cartucho no preparado](/img/gui/icons/cartridge-not-ready-status.png "width=32 class=manual-icon") | Cartucho no inicializado<br/>correctamente o ausente | ![BactoSense — Cartucho vacío](/img/gui/icons/cartridge-empty-status.png "width=32 class=manual-icon") | Cartucho vacío |
| ![BactoSense — Error crítico](/img/gui/icons/critical-error-status.png "width=32 class=manual-icon") | Error crítico (sección [Errores críticos](16-warnings-errors-and-troubleshooting.md#section-16-3)) | ![BactoSense — Cartucho caducado](/img/gui/icons/cartridge-expired-status.png "width=32 class=manual-icon") | Cartucho caducado |
| ![BactoSense — Alarma activa](/img/gui/icons/alarm-status.png "width=32 class=manual-icon") | Alarma en la última medición<br/>(solo modo en línea, véase la sección [Configuración de alarmas](08-general-operations-and-configurations.md#section-8-5)) | ![BactoSense — Error no crítico](/img/gui/icons/noncritical-error-status.png "width=32 class=manual-icon") | Error no crítico (sección [Errores no críticos](16-warnings-errors-and-troubleshooting.md#section-16-2)) |

## 8.9 Gestión de cartuchos {#section-8-9}

Los cartuchos de BactoSense contienen los reactivos necesarios para medir y mantener limpio el instrumento. Los tipos de cartucho disponibles son TCC (recuento total de células), ICC (recuento de células intactas), EBC (recuento de células de E. coli), ACC (recuento de células activas), CBC (recuento de células coliformes) y NBC (recuento de células de enterococos). Las secciones siguientes explican la manipulación de los cartuchos. El almacenamiento, el transporte y la recarga de los cartuchos se describen en el capítulo [Almacenamiento, transporte y eliminación](17-storage-transport-and-disposal.md).

### 8.9.1 Instrucciones generales de manipulación de cartuchos {#section-8-9-1}

Al manipular el cartucho, deben seguirse las instrucciones siguientes:

*Tabla 8-3 Instrucciones de manipulación de cartuchos*

|  |  |  |  |
| --- | --- | --- | --- |
| ![Siga los procedimientos descritos en este manual.](/img/manual/cell-28af480709ce.png "width=31 class=cartridge-handling-icon-31") | Siga los procedimientos<br/>descritos en este manual. | ![Ilustración del procedimiento, página impresa 73](/img/manual/asset-32c675a70f3d.png "width=24 class=cartridge-handling-icon-24") | Almacene y transporte entre<br/>15 °C – 25 °C (59 °F –<br/>77 °F). La temperatura<br/>óptima es de 15 °C (59 °F). |
| ![Utilice guantes de nitrilo al manipular el cartucho.](/img/safety/gloves.svg "width=31 class=cartridge-handling-icon-31") | Utilice guantes de nitrilo al<br/>manipular el cartucho. | ![Ilustración del procedimiento, página impresa 73](/img/manual/asset-65d703b8ec50.png "width=24 class=cartridge-handling-icon-24") | Almacene y transporte entre<br/>un 20 % y un 60 % de humedad<br/>relativa. |
| ![Utilice gafas de seguridad al manipular el cartucho.](/img/manual/cell-d6353e538e2e.png "width=31 class=cartridge-handling-icon-31") | Utilice gafas de seguridad al<br/>manipular el cartucho. | ![El cartucho está diseñado para su recarga.](/img/manual/cell-a80baea9abca.png "width=29 class=cartridge-handling-icon-29") | El cartucho está diseñado para<br/>su recarga. |
| ![Transporte, instale y almacene en la orientación indicada.](/img/manual/cell-7ac996bd1fed.png "width=31 class=cartridge-handling-icon-31") | Transporte, instale y almacene en<br/>la orientación indicada. | ![No tire el cartucho a la basura.](/img/manual/cell-bc083b74fc3c.png "width=29 class=cartridge-handling-icon-29") | No tire el cartucho<br/>a la basura. |

### 8.9.2 Comprobación del nivel de llenado y la fecha de caducidad de un cartucho {#section-8-9-2}

Los niveles de llenado y la fecha de caducidad del cartucho pueden consultarse en varios lugares.

- El icono del cartucho que aparece en la barra superior de la interfaz indica constantemente el nivel aproximado de llenado. Si el cartucho está a punto de caducar, el icono también lo indica. Encontrará la explicación de los distintos iconos en la sección [Iconos de estado de la barra superior](08-general-operations-and-configurations.md#section-8-8-2).
- Si necesita más información, pulse *Ajustes* en la *pantalla Home* y, a continuación, *Información del sistema*. En *Cartridge capacity remaining* se muestra cuánto contenido queda en el cartucho (en porcentaje), y en *Cartridge expiration date* se indica cuándo caduca. La misma información puede consultarse en la interfaz web (véase el capítulo [Interfaz web de usuario](13-web-user-interface.md)).

### 8.9.3 Descripción general del cartucho {#section-8-9-3}

El cartucho de BactoSense se instala en un compartimento específico del instrumento, cerrado por una puerta. La puerta del compartimento del cartucho solo debe abrirse para retirar e instalar cartuchos.

![Ilustración del manual original, página impresa 74](/img/manual/asset-f8b0a7f1f4e5.png "width=381")

*Figura 8-5 El compartimento del cartucho de BactoSense se abre retirando dos tuercas hexagonales de 7 mm* *con la llave para tuercas suministrada.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Tuercas hexagonales de 7 mm para asegurar la puerta<br/>del compartimento del cartucho | 2 | Puerta del compartimento del cartucho |

:::caution[Utilice la herramienta correcta para la puerta]

Abra y cierre la puerta del compartimento del cartucho únicamente con la llave específica para tuercas hexagonales de 7 mm.

:::

Después de abrir la puerta del compartimento del cartucho, el usuario tiene acceso al cartucho y a los conectores que lo conectan a BactoSense.

![Ilustración del manual original, página impresa 75](/img/manual/asset-8e1d2269e91e.png "width=659")

*Figura 8-6 Descripción general de un cartucho instalado. El cartucho queda inmovilizado mediante un* *pestillo de fijación en la parte superior (4) y se conecta al instrumento mediante varios conectores de fluidos (5* *- 8) y un conector electrónico (9). Cuando no hay un cartucho instalado, los conectores de fluidos y electrónicos* *pueden sujetarse con el soporte extraíble de conectores (10).*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Instrumento BactoSense

</td>

<td>

2

</td>

<td>

Cartucho

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Asa del cartucho

</td>

<td>

4

</td>

<td>

Pestillo de fijación del cartucho

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Conector de colorante (verde)

</td>

<td>

6

</td>

<td>

Conector de solución de hipoclorito (rojo)

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Conector de residuos (negro o beige)

</td>

<td>

8

</td>

<td>

Conector de enjuague (azul)

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Conector electrónico

</td>

<td>

10

</td>

<td>

Soporte extraíble de conectores

</td>

</tr>

<tr>

<td>

11

</td>

<td>

Puerta del compartimento del cartucho

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::caution[Proteja el conector no utilizado]

BactoSense tiene cinco conectores de fluidos. Según el tipo de cartucho, solo se necesitan cuatro o los cinco conectores. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte de conectores para evitar la contaminación.

:::

### 8.9.4 Cambio de cartuchos {#section-8-9-4}

El procedimiento siguiente describe el cambio de cartuchos. Utilícelo si desea retirar un cartucho e instalar otro inmediatamente. Si solo desea retirar un cartucho sin instalar otro, siga las instrucciones de la sección [Retirada de un cartucho](08-general-operations-and-configurations.md#section-8-9-5). El cambio de cartucho dura aproximadamente 35 min.

:::caution[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th>

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Tenga preparado el cartucho de recambio y aclimatado a la temperatura ambiente.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Mantenimiento.

</td>

<td>

Los usuarios Basic omiten este paso.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse el botón Cambio de cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Seleccione Cambiar cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Siga el asistente de cartuchos]

Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección [Instrucciones generales de manipulación de cartuchos](../general-operations-and-configurations/#section-8-9-1). Utilice guantes de nitrilo y gafas de seguridad. Selle herméticamente los conectores de fluidos del cartucho antiguo con los tapones unidos a ellos antes de retirarlo. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.

:::

</td>

<td>

:::warning[Omisión del asistente de cartuchos]

Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte para evitar la contaminación.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Manipulación del cartucho retirado. • Si desea almacenar el cartucho retirado, consulte las instrucciones de almacenamiento de la sección [Almacenamiento del cartucho](../storage-transport-and-disposal/#section-17-1-3). • Si desea recargar el cartucho retirado, consulte las instrucciones de recarga de la sección [Devolución de un cartucho para su recarga](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 8.9.5 Retirada de un cartucho {#section-8-9-5}

Este procedimiento sirve para retirar un cartucho sin instalar inmediatamente otro. Si desea cambiar cartuchos, siga el procedimiento descrito en la sección [Cambio de cartuchos](08-general-operations-and-configurations.md#section-8-9-4). La retirada del cartucho dura aproximadamente 5 min.

:::caution[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th>

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse el botón Mantenimiento.

</td>

<td>

Los usuarios Basic omiten este paso.

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Cambio de cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Seleccione Retire el cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

:::warning[Siga el asistente de cartuchos]

Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección [Instrucciones generales de manipulación de cartuchos](../general-operations-and-configurations/#section-8-9-1). Utilice guantes de nitrilo y gafas de seguridad. Selle herméticamente los conectores de fluidos del cartucho antiguo con los tapones unidos a ellos antes de retirarlo. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.

:::

</td>

<td>

:::warning[Omisión del asistente de cartuchos]

Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla.

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Manipulación del cartucho retirado. • Si desea almacenar el cartucho retirado, consulte las instrucciones de almacenamiento de la sección [Almacenamiento del cartucho](../storage-transport-and-disposal/#section-17-1-3). • Si desea recargar el cartucho retirado, consulte las instrucciones de recarga de la sección [Devolución de un cartucho para su recarga](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

La barra superior de la interfaz indica que no hay ningún cartucho conectado. En el menú Ajustes, Mantenimiento aparece resaltado; los usuarios Basic ven directamente el botón Cambio de cartucho resaltado.<br />![BactoSense — Cartucho no preparado](/img/gui/icons/cartridge-not-ready-status.png "width=30 class=manual-icon")

</td>

</tr>

</tbody>

</table>

### 8.9.6 Instalación de un cartucho {#section-8-9-6}

Este procedimiento sirve para instalar un cartucho cuando no hay otro instalado en BactoSense. Si ya hay un cartucho y desea cambiarlo, siga el procedimiento descrito en la sección [Cambio de cartuchos](08-general-operations-and-configurations.md#section-8-9-4). La instalación del cartucho dura aproximadamente 30 min.

:::caution[Siga el asistente de cartuchos]

Siga estrictamente el procedimiento del asistente en pantalla. **No retire ni instale cartuchos sin seguir este procedimiento.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th>

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Tenga preparado el cartucho nuevo y aclimatado a la temperatura ambiente.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

En la pantalla Home, pulse Ajustes para abrir el menú de ajustes.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Mantenimiento.

</td>

<td>

El botón Maintenance aparece resaltado en naranja cuando no hay ningún cartucho instalado. Los usuarios Basic omiten este paso.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse el botón Cambio de cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Seleccione Instalar cartucho.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Siga el asistente de cartuchos]

Confirme que seguirá las instrucciones del asistente en pantalla. Abra la puerta del compartimento del cartucho únicamente cuando se le indique. Siga las instrucciones generales de manipulación de cartuchos de la sección [Instrucciones generales de manipulación de cartuchos](../general-operations-and-configurations/#section-8-9-1). Utilice guantes de nitrilo y gafas de seguridad. Al finalizar, asegúrese de que la puerta del compartimento del cartucho quede bien cerrada y asegurada.

:::

</td>

<td>

:::warning[Omisión del asistente de cartuchos]

Solo los usuarios con mucha experiencia que dominen las operaciones seguras con cartuchos pueden omitir las instrucciones en pantalla. En el caso de los cartuchos TCC o ICC, asegúrese de que el quinto conector no utilizado esté siempre colocado en el soporte para evitar la contaminación.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Después de completar todos los pasos del asistente en pantalla, el cartucho nuevo queda correctamente inicializado.

</td>

<td>

El estado del cartucho se indica mediante un símbolo de cartucho en la barra superior de la interfaz; véase [Iconos de estado de la barra superior](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

</tbody>

</table>

## 8.10 Cambio entre dispositivos de muestreo {#section-8-10}

BactoSense puede utilizarse con el dispositivo de muestreo manual o con el de muestreo en línea. El procedimiento siguiente describe el cambio de dispositivos de muestreo. Encontrará información sobre su almacenamiento en la sección [Almacenamiento de los dispositivos de muestreo](17-storage-transport-and-disposal.md#section-17-1-2).

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Retire el dispositivo de muestreo montado según las instrucciones de la sección [Retirada del dispositivo de muestreo en línea](08-general-operations-and-configurations.md#section-8-10-1) (dispositivo de muestreo en línea) o [Retirada del dispositivo de muestreo manual](08-general-operations-and-configurations.md#section-8-10-2) (dispositivo de muestreo manual). |  |
| 2. | Instale el nuevo dispositivo de muestreo según las instrucciones de la sección [Instalación del dispositivo de muestreo en línea](05-installation.md#section-5-5) (dispositivo de muestreo en línea) o [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4) (dispositivo de muestreo manual). |  |

### 8.10.1 Retirada del dispositivo de muestreo en línea {#section-8-10-1}

Al cambiar al dispositivo de muestreo manual, debe retirarse el dispositivo de muestreo en línea. Siga el procedimiento siguiente para retirarlo de forma segura y prepararlo para el almacenamiento.

:::gloves[Usar guantes de protección]

Evite la contaminación del equipo. Utilice guantes de nitrilo al manipular muestras, dispositivos de muestreo y cualquier componente que entre en contacto con ellos.

:::

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Finalice cualquier serie de mediciones en curso, como se describe en la sección [Finalización de mediciones automáticas en línea](10-measurements.md#section-10-2-2). |
| 2. | Detenga el flujo de agua a través de los tubos y del dispositivo de muestreo. |
| 3. | Desenrosque con cuidado el anillo de fijación moleteado hasta que pueda retirar el dispositivo de muestreo. |
| 4. | Retire el dispositivo de muestreo en línea. Asegúrese de que el tapón de sellado blanco siga bien asentado en el conector del dispositivo. Si no es así, puede haber quedado en el conector de muestreo de BactoSense. En ese caso, retírelo con cuidado con unas pinzas y vuelva a colocarlo en el dispositivo de muestreo. |
| 5. | Desconecte y vacíe los tubos de entrada y salida, separándolos de la fuente de agua y del cuerpo del dispositivo de muestreo. |
| 6. | Inspeccione los tubos de entrada y salida para detectar contaminación o daños. Reutilice únicamente tubos limpios e intactos. |
| 7. | Si desea almacenar el dispositivo de muestreo, guarde el dispositivo y los tubos por separado en bolsas de plástico limpias y secas y siga las instrucciones de almacenamiento de la sección [Almacenamiento de los dispositivos de muestreo](17-storage-transport-and-disposal.md#section-17-1-2). |
| 8. | Para montar ahora el dispositivo de muestreo manual, consulte la sección [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4). |

### 8.10.2 Retirada del dispositivo de muestreo manual {#section-8-10-2}

Al cambiar al dispositivo de muestreo en línea, debe retirarse el dispositivo de muestreo manual. Siga el procedimiento siguiente para retirarlo de forma segura y prepararlo para el almacenamiento.

:::gloves[Usar guantes de protección]

Evite la contaminación del equipo. Utilice guantes de nitrilo al manipular muestras, dispositivos de muestreo y cualquier componente que entre en contacto con ellos.

:::

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Limpie el dispositivo de muestreo manual: si dispone de una Washstation, siga el procedimiento de la sección [Limpieza del dispositivo de muestreo manual con Washstation](15-maintenance.md#section-15-2-2); en caso contrario, siga el procedimiento de la sección [Limpieza básica del dispositivo de muestreo manual](15-maintenance.md#section-15-2-3). |
| 2. | Al finalizar, coloque un tubo limpio y vacío de 5 mL con tapón de rosca o la Washstation en el dispositivo de muestreo. |
| 3. | Desenrosque con cuidado el anillo de fijación moleteado situado en la parte superior del dispositivo hasta que pueda retirarlo. |
| 4. | Retire el dispositivo de muestreo manual. Asegúrese de que el tapón de sellado blanco siga bien asentado en el conector del dispositivo. Si no es así, puede haber quedado en el conector de muestreo de BactoSense. En ese caso, retírelo con cuidado con unas pinzas y vuelva a colocarlo en el dispositivo de muestreo. |
| 5. | Si desea almacenar el dispositivo de muestreo, colóquelo en una bolsa de plástico limpia y seca y siga las instrucciones de almacenamiento de la sección [Almacenamiento de los dispositivos de muestreo](17-storage-transport-and-disposal.md#section-17-1-2). |
| 6. | Para montar ahora el dispositivo de muestreo en línea, siga el procedimiento de la sección [Instalación del dispositivo de muestreo en línea](05-installation.md#section-5-5). |

## 8.11 Cualificación {#section-8-11}

La cualificación es un proceso que garantiza que BactoSense funciona según lo previsto. Hay disponibles distintas opciones.

Para realizar una comprobación rápida y completamente automática del estado del instrumento, ejecute el procedimiento de autocomprobación descrito en la sección [Autocomprobación automática](16-warnings-errors-and-troubleshooting.md#section-16-6). Esta prueba no requiere reactivos ni intervención del usuario, es muy rápida y comprueba la integridad y la comunicación entre los distintos módulos de BactoSense.

Para evaluar la limpieza de BactoSense y descartar una contaminación, realice el procedimiento de verificación de la limpieza de la sección [Verificación de la limpieza](08-general-operations-and-configurations.md#section-8-11-1).

En entornos de funcionamiento que requieran una prueba de aptitud del sistema, utilice el *System Suitability* *Test Kit (SST Kit)* y siga el procedimiento de su manual de usuario.

Para otros entornos, se recomienda cualificar el instrumento con el *Validation Kit* en las situaciones siguientes:

- Después de enviar el instrumento o de otro transporte de larga distancia que lo exponga a vibraciones o golpes.
- Después de almacenar el instrumento durante más de un mes.
- Si hay indicios de que los resultados de medición podrían ser erróneos.

### 8.11.1 Verificación de la limpieza {#section-8-11-1}

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado como se describe en la sección [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4). |
| 2. | Limpie el dispositivo de muestreo con dos repeticiones: si dispone de una Washstation, siga el procedimiento de la sección [Limpieza del dispositivo de muestreo manual con Washstation](15-maintenance.md#section-15-2-2); en caso contrario, el de la sección [Limpieza básica del dispositivo de muestreo manual](15-maintenance.md#section-15-2-3). |
| 3. | Prepare la muestra en blanco en un tubo de 5 mL con tapón de rosca. Hay dos opciones: A) utilice agua libre de células, p. ej., una alícuota de solución estéril del Validation Kit. Si utiliza la alícuota de solución estéril del Validation Kit, retire su tapón y colóquela en un tubo vacío de 5 mL con tapón de rosca, como se describe en el manual de usuario del Validation Kit. B) Tome agua mineral sin gas y fíltrela dos veces con un filtro de membrana de tamaño de poro de 0.22 µm o inferior. |
| 4. | Vaya a la pantalla Home de la interfaz de usuario de BactoSense. |
| 5. | En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición. |
| 6. | Seleccione Preparar en la lista de protocolos disponibles. |
| 7. | Pulse el botón Siguiente. |
| 8. | Retire el tubo o la Washstation del dispositivo de muestreo manual y coloque la muestra en blanco. |
| 9. | Pulse el botón Inicio para ejecutar el protocolo Prime. |
| 10. | Una vez finalizado Prime, pulse el botón Nuevo para volver a la lista de protocolos. |
| 11. | Seleccione Análisis del agua en la lista de protocolos disponibles. |
| 12. | Configure dos repeticiones. |
| 13. | Introduzca un nombre de muestra pulsando el campo de texto Nombre de la muestra, escribiendo el nombre y pulsando OK. |
| 14. | Compruebe que esté configurada la región predeterminada ICC o TCC y, de lo contrario, cámbiela pulsando el campo Compuertas. |
| 15. | Pulse el botón Siguiente. |
| 16. | Pulse el botón Inicio y espere a que finalicen las dos mediciones. |
| 17. | Al finalizar, pulse el botón Siguiente para revisar los resultados. |
| 18. | Examine los resultados y compárelos con los valores de referencia indicados a continuación. BactoSense está limpio si se cumplen los siguientes criterios: • Para cartuchos TCC: TCC [/mL] &lt; 300 • Para cartuchos ICC: ICC [/mL] &lt; 100. |
| 19. | Si las concentraciones celulares superan los límites especificados, aplique el procedimiento siguiente: • Repita el procedimiento con una muestra en blanco recién preparada. • Repita el procedimiento después de una descontaminación con el Cleaning Kit (véase la sección [Consumibles](18-supply-scope-accessories-and-consumables.md#section-18-3)). • Si la prueba sigue fallando, póngase en contacto con el soporte de bNovate o con su representante local de servicio. |
| 20. | Al finalizar, coloque un tubo limpio y vacío de 5 mL con tapón de rosca o la Washstation en el dispositivo de muestreo manual. |

## 8.12 Modo de demostración {#section-8-12}

El modo de demostración puede utilizarse para mostrar el dispositivo o aprender a navegar por los menús y utilizar sus funciones. Al activarlo, el instrumento se reinicia en un modo especial que muestra datos de demostración (los resultados de medición del propietario quedan ocultos). Todas las funciones del instrumento se sustituyen por simulaciones que nunca mueven el hardware ni modifican la base de datos de resultados. Esto permite iniciar protocolos sin cargar una muestra y simular la eliminación o el reanálisis de resultados sin cambiar los datos. Si el modo de demostración está activado, aparece el mensaje ***Demo*** en la parte superior central de la pantalla. Cuando el instrumento vuelve al modo normal, los datos del propietario se muestran de nuevo y todas las funciones vuelven a estar activas.

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th colSpan="2">

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes.

</td>

<td colSpan="2">

![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse el botón Ajustes del sistema. Pulse el botón Modo demostración.

</td>

<td>

![BactoSense — Configuración del sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Configuración del modo de demostración](/img/gui/icons/demo-mode-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Marque la casilla Activar el modo demo.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse el botón Guardar y reiniciar.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

El dispositivo se reinicia automáticamente.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Para volver al modo normal, siga el mismo procedimiento, pero desmarque la casilla **Activar el modo demo**.

## 8.13 Restablecimiento de fábrica {#section-8-13}

El restablecimiento de fábrica devuelve la mayoría de los ajustes del instrumento a los valores de fábrica: límites de las regiones de análisis, intervalo de medición, nombres de protocolo predeterminados, usuarios, idioma y ajustes de red. Solo los usuarios Admin y Service pueden acceder a esta opción.

El procedimiento siguiente describe cómo realizar un restablecimiento de fábrica:

<table>

<tbody>

<tr>

<th>

</th>

<th>

PASO DE TRABAJO

</th>

<th colSpan="2">

INFORMACIÓN ADICIONAL / IMAGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Como usuario Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes.

</td>

<td colSpan="2">

![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse Mantenimiento y, a continuación, Restablecimiento de fábrica.

</td>

<td>

![BactoSense — Menú de mantenimiento](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Restablecer la configuración de fábrica](/img/gui/icons/factory-reset-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Utilice las casillas para seleccionar los parámetros que desea restablecer: • Ajustes del instrumento. • Mediciones, incluidos errores y registros. • Ambos.

</td>

<td colSpan="2">

:::info[Información adicional]

Los registros de servicio, los resultados de validación y el historial de actualizaciones de software no se eliminan.

:::

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Pulse Restablecer el dispositivo y reiniciar y confirme con Sí.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>
