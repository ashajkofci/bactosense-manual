---
title: "6. Caja de E/S"
sidebar_label: "6. Caja de E/S"
slug: /io-box
sidebar_position: 6
description: "Manual de usuario de BactoSense: Caja de E/S."
---

La caja de E/S (IO-box) es un accesorio de BactoSense. Permite conectar las entradas y salidas de BactoSense a un sistema PLC/SCADA.

Como alternativa a la caja de E/S, puede utilizarse Modbus TCP. Encontrará más información en la sección [Modbus TCP](07-field-bus-interface.md#section-7-1).

## 6.1 Especificaciones técnicas {#section-6-1}

:::info[Revise las especificaciones]

Lea atentamente las especificaciones técnicas antes de preparar la integración.

:::

### 6.1.1 Entradas digitales {#section-6-1-1}

- Uso: 4 entradas digitales referenciadas a Common permiten controlar el instrumento mediante una tensión externa (p. ej., una tensión de salida de un PLC).
- Especificaciones: entrada con optoacoplador: tensión directa 1.2 VDC con 3 kΩ en serie, cátodo conectado a COMMON, máx. 30 mA, máx. 50 mW.

Notas adicionales

:::info[Requisitos de las entradas digitales]

- Common (puerto 18) debe conectarse a la tensión de referencia de la tensión de entrada (p. ej., 0 V / masa de la fuente de alimentación externa).
- El rango de tensión de las entradas digitales (puertos 14 - 17) es de 5 - 30 V para producir un nivel lógico alto o "1". De lo contrario, se produce un nivel lógico bajo o "0".
- Si alguna de las entradas digitales está en nivel lógico alto o "1", BactoSense entra en modo PLC ("PLC-mode").

:::

### 6.1.2 Salidas digitales {#section-6-1-2}

- Uso: 4 salidas digitales permiten comunicar 4 estados lógicos diferentes, p. ej., errores o alarmas. Como los bornes de salida corresponden a la salida de un relé de estado sólido basado en MOS (LH1540AAB), no tienen polaridad. Los bornes A y B pueden utilizarse en cualquier sentido e intercambiarse. Los bornes A y B están en estado de alta impedancia (desconectados) o de baja impedancia (conectados).
- Especificaciones: libremente configurables, salida SSR: máx. 48 VDC, máx. 300 mW, resistencia en conducción 2 Ω.

### 6.1.3 Salidas analógicas {#section-6-1-3}

- Uso: 2 salidas analógicas (4 – 20 mA) permiten comunicar dos valores analógicos, p. ej., el recuento total de células y HNAP. Nota: para transmitir resultados precisos se recomienda utilizar Modbus TCP. Véase la sección [Modbus TCP](07-field-bus-interface.md#section-7-1).
- Especificaciones: 2 x 0/4 – 20 mA, carga recomendada de 250 Ω

### 6.1.4 Esquema de la caja de E/S {#section-6-1-4}

![Ilustración del manual original, página impresa 32](/img/manual/asset-da9ff033639d.png "width=633")

*Figura 6-1 Esquema de la caja de E/S de BactoSense.*

### 6.1.5 Descripción general de la caja de E/S {#section-6-1-5}

![Ilustración del manual original, página impresa 33](/img/manual/asset-30fbce76cafa.png "width=240")

*Figura 6-2 Descripción general de la caja de E/S de BactoSense*

|  |  |  |  |
| --- | --- | --- | --- |
| ① | Posición de las salidas digitales<br />Bornes 1 – 8<br />Requisitos del cable:<br />• AWG 12 – 22<br />• Sección: 0.25 – 2.5<br />mm2 | ② | Posición de las salidas analógicas<br />Bornes 9 – 12<br />Requisitos del cable:<br />• AWG 12 – 22<br />• Sección: 0.25 – 2.5 mm2 |
| ③ | Posición de las entradas digitales<br />Bornes 14 – 18<br />Requisitos del cable:<br />• AWG 12 – 22<br />• Sección: 0.25 – 2.5<br />mm2 |  | \< |

### 6.1.6 Tabla de referencia de la caja de E/S {#section-6-1-6}

*Tabla 6-1 Tabla de referencia de la caja de E/S*

| Borne | Función | Color del borne | Color del cable |
| --- | --- | --- | --- |
| 1 | Salida digital 1 - A | Gris | Rojo |
| 2 | Salida digital 1 - B | Gris | Azul |
| 3 | Salida digital 2 - A | Gris | Rosa |
| 4 | Salida digital 2 - B | Gris | Gris |
| 5 | Salida digital 3 - A | Gris | Amarillo |
| 6 | Salida digital 3 - B | Gris | Verde |
| 7 | Salida digital 4 - A | Gris | Marrón |
| 8 | Salida digital 4 - B | Gris | Blanco |
| 9 | Analógica 1+ mA | Naranja | Negro |
| 10 | Analógica 1- mA | Azul | Violeta |
| 11 | Analógica 2+ mA | Naranja | Rosa-gris |
| 12 | Analógica 2- mA | Azul | Rojo-azul |
| 13 | Blindaje | Verde/amarillo |  |
| 14 | Entrada digital 1 | Gris | Blanco |
| 15 | Entrada digital 2 | Gris | Marrón |
| 16 | Entrada digital 3 | Gris | Azul |
| 17 | Entrada digital 4 | Gris | Negro |
| 18 | Común (Common) | Negro | Gris |

## 6.2 Conexión de la caja de E/S {#section-6-2}

:::info[Compruebe las conexiones de E/S]

Revise las especificaciones técnicas de las secciones [Entradas digitales](06-io-box.md#section-6-1-1), [Salidas digitales](06-io-box.md#section-6-1-2) y [Salidas analógicas](06-io-box.md#section-6-1-3) y el esquema de la sección [Esquema de la caja de E/S](06-io-box.md#section-6-1-4) para garantizar una instalación correcta.

:::

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Inserte las dos clavijas M16 de la caja de E/S en el lateral derecho del instrumento. | ![Ilustración del procedimiento, página impresa 35](/img/manual/asset-6a48e9fcafbe.png "width=241") |
| 2. | Retire la tapa de la carcasa desenroscando los cuatro tornillos (círculos). | ![Ilustración del procedimiento, página impresa 35](/img/manual/asset-9f5e3eb5f1fd.png "width=225") |
| 3. | Introduzca el cable a través del prensaestopas (A, B o C) y conecte los conductores al borne correspondiente según la tabla de referencia de la caja de E/S de la sección [Tabla de referencia de la caja de E/S](06-io-box.md#section-6-1-6). | ![Ilustración del procedimiento, página impresa 35](/img/manual/asset-fb6376380698.png "width=222") |
| 4. | Apriete el prensaestopas. Tire del cable para comprobar si el prensaestopas está suficientemente apretado. |  |
| 5. | Opcional: la caja de E/S puede montarse en una pared. Deben utilizarse tornillos M4 de al menos 20 mm de longitud. Con la tapa aún retirada, coloque los 4 tornillos y fije la carcasa a la pared. | ![Ilustración del procedimiento, página impresa 35](/img/manual/asset-3e67c8d4a4e6.png "width=242") |
| 6. | Vuelva a colocar la tapa de la carcasa y apriete los cuatro tornillos para sellarla. |  |

## 6.3 Conexión de las salidas sin caja de E/S {#section-6-3}

BactoSense ofrece las salidas en un conector hembra M16 de 12 contactos. No obstante, se recomienda utilizar una caja de E/S. A continuación se muestra la asignación de contactos del conector.

![Ilustración del manual original, página impresa 36](/img/manual/asset-223bcd55d2e3.png "width=160")

*Figura 6-3 Asignación de contactos del conector de salida*

|  |  |  |  |
| --- | --- | --- | --- |
| A | Salida digital 4 - B | G | Salida digital 1 - B |
| B | Salida digital 4 - A | H | Salida digital 1 - A |
| C | Salida digital 3 - B | J | Analógica 1+ |
| D | Salida digital 3 - A | K | Analógica 1- |
| E | Salida digital 2 - B | L | Analógica 2+ |
| F | Salida digital 2 - A | M | Analógica 2- |

## 6.4 Conexión de las entradas sin caja de E/S {#section-6-4}

BactoSense ofrece las entradas en un conector hembra M16 de 5 contactos. Se recomienda utilizar una caja de E/S. A continuación se muestra la asignación de contactos del conector.

![Ilustración del manual original, página impresa 37](/img/manual/asset-b6ab0aef5737.png "width=120")

*Figura 6-4 Asignación de contactos del conector de entrada*

1. Entrada digital 1
2. Entrada digital 2
3. Entrada digital 3
4. Entrada digital 4
5. Común (Common)

## 6.5 Configuración de las entradas digitales y modo PLC {#section-6-5}

El instrumento puede controlarse desde un controlador lógico programable (PLC) externo. Para evitar conflictos al iniciar un proceso, el PLC bloquea primero el instrumento en “PLC Mode”, en el que el instrumento actúa como esclavo del PLC. En este modo, se bloquean todas las funciones de la interfaz gráfica relacionadas con la ejecución de protocolos y otros procesos. Una vez en modo PLC, los protocolos pueden iniciarse y cancelarse desde el PLC mediante las entradas digitales del instrumento. Las salidas digitales proporcionan entonces información al PLC para un funcionamiento seguro.

El modo PLC es un modo en línea controlado a distancia: el PLC puede solicitar una única medición o iniciar el programador para ejecutar protocolos a intervalos predefinidos. Las mediciones iniciadas desde el PLC también aparecen en los resultados del modo en línea.

Cuando no hay cables conectados a las entradas digitales, su estado es 0000.

*Tabla 6-2 Estados de las entradas digitales y funciones asociadas.*

| DESCRIPCIÓN | ENTRADAS DIGITALES | \< | \< | \< |
| --- | --- | --- | --- | --- |
| ^ | 1 | 2 | 3 | 4 |
| Forzar el modo PLC: el instrumento está inactivo, pero actúa como esclavo<br />del PLC. | 1 | 0 | 0 | 0 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 0 | 0 | 1 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 0 | 1 | 0 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 0 | 1 | 1 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 1 | 0 | 0 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 1 | 0 | 1 |
| Ejecutar el protocolo / intervalo de medición configurable | 1 | 1 | 1 | 0 |
| Cancelar el protocolo actual | 1 | 1 | 1 | 1 |
| Modo esclavo desactivado. Fin del modo PLC. | 0 | 0 | 0 | 0 |

Para ejecutar un protocolo varias veces, utilice la opción de programador o active una nueva medición desde el PLC restableciendo el estado de las entradas a 1000 y, a continuación, al estado “Run” correspondiente.

![BactoSense — Configuración de entradas digitales](/img/gui/es/digital-input-configuration.png "width=532")

*Figura 6-5 Configuración de las entradas digitales*

<div className="manual-digital-input-config">

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Activar o desactivar las entradas digitales. Si están desactivadas, el modo PLC nunca está activo. | 2 | Parámetros del protocolo: Name, Protocol y Gates. |
| 3 | Seleccione el estado de las entradas que desea configurar. Cuando el estado seleccionado en (3) se aplique a las entradas digitales, se ejecutará el protocolo definido en (2), (4) y (5). | 4 | Si se activa, el protocolo comienza inmediatamente después de cambiar el estado de las entradas. De lo contrario, espera a que transcurra el intervalo del programador antes de comenzar. |
| 5 | Ajustes del programador: si el programador está activado, el protocolo se repite al intervalo seleccionado hasta que cambie el estado de las entradas. Si el programador está desactivado, el protocolo se ejecuta una sola vez. |  | \< |

</div>

Para configurar los estados configurables de las entradas digitales, siga estos pasos:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes. |  |
| 2. | Pulse el botón Ajustes del modo en línea. |  |
| 3. | Pulse el botón Entradas digitales. |  |
| 4. | Asegúrese de que el interruptor esté en Habilitado. |  |
| 5. | Active y seleccione el estado que desea configurar en la Lista de entradas, introduzca un nombre para la muestra, elija un protocolo y seleccione una región de análisis. |  |
| 6. | Si desea que el protocolo se repita automáticamente, active la casilla “Utilizar el programador” y elija un intervalo. |  |
| 7. | En el caso anterior, elija si desea ejecutar el protocolo inmediatamente o al finalizar el primer intervalo mediante la casilla “Inicio inmediato”. | Esta opción solo es útil si el programador está activado. |
| 8. | Pulse el botón Guardar. |  |

## 6.6 Configuración de las salidas digitales {#section-6-6}

Los valores de las salidas digitales se modifican en las situaciones siguientes:

- Cuando el instrumento está apagado, todas las salidas se establecen en 0.
- Cuando el instrumento se enciende, las salidas muestran el estado actual de error: ninguno / crítico / no crítico.
- Al finalizar una medición en modo en línea, las salidas cambian para indicar errores y alarmas según los ajustes definidos por el usuario.
- Al pulsar Restablecer en la pantalla de prueba de salidas o Guardar en los ajustes de las salidas digitales, las salidas se actualizan para mostrar únicamente el estado de error (se ignoran las alarmas).
- Después de borrar manualmente los errores, las salidas se restablecen automáticamente (y, por tanto, muestran el nuevo estado de error sin alarmas).
- En momentos específicos durante la medición, pueden transmitirse señales adicionales. Por defecto, ninguna de ellas se transmite a las salidas. Son las siguientes:

  - Proceso en curso. Activa cuando se está ejecutando un protocolo.

  - Dispositivo de muestreo en uso. Activa cuando se utiliza el dispositivo de muestreo. Vuelve al estado inactivo después de la etapa de preparación de la muestra de los protocolos de medición.

  - Nivel bajo del cartucho. Activa cuando el nivel del cartucho es inferior al 15 % o si se estima que el cartucho se agotará en un mes según la frecuencia de medición actual.

  - Cartucho caducado. Activa cuando el cartucho ha caducado.

El estado de las salidas digitales al finalizar una medición se define según estos valores predeterminados, que pueden modificarse en los ajustes:

- Si no hay errores ni alarmas, todos los bornes se establecen en el estado base definido por el usuario. Por defecto, este es 1 en todos ellos.
- En caso de error crítico, la primera salida se establece en 0.
- Los errores no críticos establecen la segunda salida en 0.
- Las alarmas establecen la tercera y la cuarta salida en 0.
- En caso de conflicto en los ajustes de las salidas, se da prioridad a:

  1. Errores críticos

  2. Errores no críticos

  3. Estados del cartucho

  4. Alarma

:::info[Se requiere acceso Admin]

Solo los usuarios Admin pueden cambiar los ajustes de las salidas, ya que estos pueden afectar de forma crítica a los sistemas PLC externos.

:::

El procedimiento siguiente describe cómo ajustar las salidas digitales.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1\. | En la pantalla Home, pulse Ajustes. |  |
| 2\. | Pulse el botón Ajustes del modo en línea. |  |
| 3\. | Pulse el botón Salidas digitales. |  |
| 4\. | Configure el **Estado base** de las salidas 1–4 cuando no haya errores ni alarmas activos. | 1: el contacto está cerrado. 0: el contacto está abierto.<br /><br />![BactoSense — Salidas digitales: controles del estado base](/img/gui/es/digital-output-base-state.png "width=280") |
| 5\. | Configure la respuesta de cada salida en la fila **Error crítico**. | Por defecto, un error crítico abre la salida 1. 1: el contacto está cerrado. 0: el contacto está abierto. /: el error no afecta al contacto.<br /><br />![BactoSense — Salidas digitales: controles de errores críticos](/img/gui/es/digital-output-critical-error.png "width=280") |
| 6\. | Configure la respuesta de cada salida en la fila **Error no crítico**. | Por defecto, un error no crítico abre la salida 2.<br /><br />![BactoSense — Salidas digitales: controles de errores no críticos](/img/gui/es/digital-output-noncritical-error.png "width=280") |
| 7\. | Asigne cada alarma activada a las salidas necesarias en su fila de alarma. | Solo puede asignar alarmas activadas. Puede asignar varias alarmas a la misma salida.<br /><br />Filas de alarma de ejemplo: High TCC (arriba), High HNAP (abajo).<br /><br />![BactoSense — Salidas digitales: asignación de alarmas activadas](/img/gui/es/digital-output-alarm-assignment.png "width=280") |
| 8\. | Pulse el botón Guardar. |  |

## 6.7 Configuración de las salidas analógicas {#section-6-7}

La salida de corriente analógica se modifica en las situaciones siguientes:

- Cuando el instrumento está apagado, ambas salidas se establecen en 0 mA.
- Cuando el instrumento se enciende, ambas salidas se establecen en 2 mA.
- Cuando una medición en modo en línea termina después del recuento celular, el valor se establece entre 4 y 20 mA según la definición del rango y la fuente de los ajustes de las salidas analógicas. Si la medición falla por un error antes de que comience el recuento celular, la salida conserva su valor anterior.
- Cuando un usuario prueba manualmente la salida, la corriente se establece en el valor elegido. El botón Restablecer las establece en 4 mA.

:::info[Valores de salida precisos]

Para transmitir resultados precisos se recomienda utilizar Modbus TCP. Véase la sección [Modbus TCP](07-field-bus-interface.md#section-7-1).

Solo los usuarios **Admin** pueden editar las salidas analógicas de 4 .. 20 mA.

:::

![BactoSense — Configuración de salidas analógicas](/img/gui/es/analog-output-configuration.png "width=553")

*Figura 6-6 Ajustes de las salidas analógicas*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Selección del puerto de salida | 2 | Source: define qué resultado de<br />medición se transmite por este puerto<br />de salida. |
| 3 | Límite inferior de 4 mA: valor del<br />resultado de medición que debe<br />corresponder a 4 mA. | 4 | Límite superior de 20 mA: valor del<br />resultado de medición que debe<br />corresponder a 20 mA. |
| 5 | Si se selecciona, interpola el rango de recuento celular elegido con una escala logarítmica de la siguiente manera:<br />`ratio = 1 + 9 × (counts − low) / (high − low)`<br />`output = 4 mA + log<sub>10</sub>(ratio) × 16 mA`<br /><br />counts: recuento celular medido<br />low: límite inferior del recuento celular<br />high: límite superior del recuento celular<br />output: intensidad de corriente en mA |  | \< |

El procedimiento siguiente describe cómo ajustar las salidas analógicas.

<div className="manual-output-steps-scroll">

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes. |  |
| 2. | Pulse el botón Ajustes del modo en línea. |  |
| 3. | Pulse el botón Salidas analógicas. |  |
| 4. | Elija Puerto 1 o Puerto 2 (figura 6-6). |  |
| 5. | Elija la fuente (figura 6-6, posición 2). |  |
| 6. | Defina el límite inferior del rango (figura 6-6, posición 3). | Cuando la fuente sea igual a este valor, el puerto seleccionado emitirá 4 mA. |
| 7. | Defina el límite superior del rango (figura 6-6, posición 4). | Cuando la fuente sea igual a este valor, el puerto seleccionado emitirá 20 mA. |
| 8. | Pulse el botón Guardar. |  |

</div>

## 6.8 Prueba de las salidas digitales y analógicas {#section-6-8}

Inicie sesión como Administrador (Admin) y use Probar salidas cuando el instrumento esté inactivo, con el modo PLC desactivado.

:::caution[Evite alarmas involuntarias]

La interfaz Probar salidas permite generar una señal física de salida con fines de prueba. Asegúrese de que estas pruebas no generen una alarma en su sistema de control.

:::

![BactoSense — Prueba de salidas](/img/gui/es/output-test-controls.png "width=523")

*Figura 6-7 Prueba de las salidas analógicas y digitales*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Definir el estado de las salidas digitales para<br />la prueba. | 2 | Establecer las salidas digitales en el estado<br />definido en (1). |
| 3 | Establecer todas las salidas digitales y analógicas<br />a la vez. | 4 | Establecer la corriente de ambas salidas<br />analógicas. |
| 5 | Restablecer las salidas al estado anterior<br />a las pruebas. | 6 | Establecer la corriente del puerto 2. |
| 7 | Establecer la corriente del puerto 1. |  | \< |

El procedimiento siguiente describe cómo probar las salidas analógicas y digitales.

<div className="manual-output-steps-scroll">

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En la pantalla Home, pulse Ajustes. |  |
| 2. | Pulse el botón Ajustes del modo en línea. |  |
| 3. | Pulse el botón Probar salidas. |  |
| 4. | Introduzca los valores de prueba que desea enviar al PLC. | Para las salidas digitales: 1: el contacto está cerrado. 0: el contacto está abierto. |
| 5. | Las pruebas pueden activarse individualmente o juntas (véase la figura 6-7): • Probar solo las salidas digitales en los bornes 1 – 4. • Probar solo las salidas analógicas en los puertos 1, 2 o ambos. • Probar todas las salidas. | Las señales de salida pueden medirse en los bornes. |
| 6. | Pulse el botón Restablecer. |  |

</div>
