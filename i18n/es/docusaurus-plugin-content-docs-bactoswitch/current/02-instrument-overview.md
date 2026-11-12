---
title: "2. Descripción general del instrumento"
sidebar_label: "2. Descripción general del instrumento"
slug: /instrument-overview
sidebar_position: 2
description: "Manual de usuario de BactoSwitch: Descripción general del instrumento."
---

## 2.1 Descripción general del producto BactoSwitch {#section-2-1}

A continuación se muestra una descripción general de los elementos de BactoSwitch:

![Elementos de BactoSwitch en las vistas A a F](/img/bactoswitch/bactoswitch-elements.png "width=700")

*Figura 2-1 Elementos de BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Asa | 2 | Conectores de las líneas de entrada |
| 3 | Soporte de pared | 4 | Pomo de fijación de la cubierta frontal |
| 5 | Cubierta frontal extraíble | 6 | Indicador luminoso de línea seleccionada |
| 7 | Indicador luminoso de estado | 8 | Línea de agua hacia BactoSense |
| 9 | Línea de agua procedente de BactoSense | 10 | Salida de la línea de agua al desagüe |
| 11 | Toma USB-C | 12 | Toma de alimentación |
| 13 | Accionamiento manual de apertura/cierre de la línea | 14 | Mando de ajuste del caudal |
| 15 | Acceso para el ajuste del regulador de presión | 16 | Caudalímetro |

## 2.2 Indicadores luminosos {#section-2-2}

El comportamiento de los indicadores luminosos se resume en la tabla 2-1. Los números hacen referencia a la [figura 2-1](02-instrument-overview.md#section-2-1), vista B.

*Tabla 2-1 Comportamiento de los indicadores luminosos*

| INDICADOR LUMINOSO | COMPORTAMIENTO |
| --- | --- |
| Indicadores luminosos de selección de línea (6) | **Azul:** línea abierta<br />**Apagado:** línea cerrada |
| Indicador luminoso de estado (7) | **Luz verde:** inactivo<br />**Luz verde con parpadeo lento:** medición en curso, sin muestreo<br />**Luz verde con parpadeo rápido:** medición en curso, muestreo de agua de la línea<br />**Luz roja:** error de medición |

## 2.3 Principio de funcionamiento {#section-2-3}

El esquema siguiente muestra el funcionamiento básico de BactoSwitch (con la cubierta frontal retirada para mayor claridad). El agua de cada línea de entrada (1) pasa por una válvula antirretorno (2, no visible), por un regulador de presión (3), a continuación por una válvula de aguja de regulación del caudal (4) y, por último, por una electroválvula (5). Cada línea de entrada puede estar abierta o cerrada. El agua de las líneas abiertas se une y sale de BactoSwitch hacia el dispositivo de muestreo en línea de BactoSense (6). Tras pasar por el dispositivo de muestreo, el agua vuelve a BactoSwitch, atraviesa el caudalímetro (7) y llega finalmente al desagüe (8).

![Principio de funcionamiento de BactoSwitch con el recorrido del agua numerado](/img/bactoswitch/working-principle.png "width=700")

*Figura 2-2 Principio de funcionamiento de BactoSwitch. Véanse las explicaciones en el texto anterior.*

:::info[Cierre las líneas no utilizadas]

Las electroválvulas de las líneas de entrada no utilizadas deben cerrarse manualmente y las líneas correspondientes deben desactivarse en el software. Para obtener más información, consulte las secciones [Instalación de las líneas de entrada](04-installation.md#section-4-4-3) y [Configuración de las líneas](04-installation.md#section-4-6).

:::

## 2.4 Placa de características de BactoSwitch {#section-2-4}

La placa de características de BactoSwitch se encuentra en el lateral derecho del instrumento.

![Ubicación y elementos de la placa de características de BactoSwitch](/img/bactoswitch/type-plate.png "width=654")

*Figura 2-3 Placa de características de BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Fabricante | 2 | Nombre del producto |
| 3 | Número de serie | 4 | Código de barras |
| 5 | Fecha de fabricación | 6 | País de origen |
| 7 | Requisitos de tensión y potencia | 8 | Marcado CE |
| 9 | Marcado UKCA | 10 | Conformidad con las normas canadienses sobre compatibilidad electromagnética e interferencias |
| 11 | Lea las instrucciones y utilice el instrumento con precaución | 12 | Información sobre la eliminación |

## 2.5 Placa de características de la fuente de alimentación de BactoSwitch {#section-2-5}

La placa de características de la fuente de alimentación de BactoSwitch se encuentra en la propia fuente de alimentación y contiene los siguientes elementos:

![Elementos de la placa de características de la fuente de alimentación de BactoSwitch](/img/bactoswitch/power-supply-type-plate.png "width=514")

*Figura 2-4 Placa de características de la fuente de alimentación de BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Fabricante | 2 | Nombre del producto |
| 3 | Referencia (varía según el tipo de enchufe) | 4 | Fecha de fabricación |
| 5 | Tensión y frecuencia de entrada de servicio | 6 | Consumo de potencia |
| 7 | Marcado CE | 8 | Marcado UKCA |
| 9 | Conformidad con las normas canadienses sobre compatibilidad electromagnética e interferencias | 10 | Lea las instrucciones y utilice el instrumento con precaución |
| 11 | Información sobre la eliminación |  |  |

## 2.6 Datos técnicos {#section-2-6}

*Tabla 2-2 Datos técnicos de BactoSwitch*

| PROPIEDAD | ESPECIFICACIÓN |
| --- | --- |
| **GENERAL** | \< |
| Versión de hardware requerida | BactoSense CORE/SMART, a partir del número de serie 910500 |
| Versión de software requerida | 3.1.0-BS o superior |
| Entorno de funcionamiento | Uso en interiores |
| Altitud de funcionamiento | Máx. 2000 m (6600 ft) sobre el nivel del mar |
| Temperatura de funcionamiento | 5 °C – 30 °C (41 °F – 86 °F) |
| Humedad de funcionamiento | 10 % – 90 % RH |
| Temperatura de almacenamiento | 5 °C – 30 °C (41 °F – 86 °F) |
| Humedad de almacenamiento | 10 % – 70 % RH |
| Requisitos de ventilación | Ninguno |
| Nivel de presión sonora | < 64 dBA |
| Grado de protección | Instrumento: IP65<br />Fuente de alimentación: IP67 |
| **MUESTREO** | \< |
| Tipo de muestreo | En línea |
| Condiciones de la muestra | Solo agua<br />Temperatura: 5 °C – 40 °C (41 °F – 104 °F)<br />Turbidez: 0 – 10 FTU, 0 – 10 FNU<br />Conductividad: 0 – 100’000 μS/cm a 20 °C<br />Valor de pH: 5 – 12<br />Cloro: máx. 3 mg/L<br />Hierro: máx. 200 μg/L<br />Manganeso: máx. 50 μg/L<br />Partículas sólidas: < 0.5 mm |
| Número de entradas | 4 |
| Rango de presión de entrada | 0.1 – 5 bar |
| Rango de caudal por línea | 150 – 400 mL/min |
| Regulador de presión | Integrado y preajustado (sin alivio de presión) |
| Control del caudal | Válvula de aguja ajustable |
| Selección de línea | Electroválvulas normalmente abiertas con separación de fluidos<br />Cierre mediante accionamiento manual |
| Interfaces fluídicas | Racor instantáneo ø6x1 mm |
| Tubos de entrada | Material: PFA (transparente)<br />Diámetro exterior: 6 mm<br />Diámetro interior: 4 mm<br />Longitud máxima: 4 m<br />Cantidad: 4x |
| Tubos del dispositivo de muestreo en línea | Material: PFA (transparente)<br />Diámetro exterior: 6.35 mm (1/4″)<br />Diámetro interior: 4.35 mm<br />Longitud recomendada: 200 mm<br />Cantidad: 2x |
| Tubo de salida al desagüe | Material: PFA (transparente)<br />Diámetro exterior: 6 mm<br />Diámetro interior: 4 mm<br />Longitud máxima: 2 m<br />Cantidad: 1x |
| Materiales en contacto con el agua | PFA, SS 316L, SS 316Ti, FKM, EPDM, latón ENP, PPS 40 % GF, PVDF, cerámica de circonia |
| **LIMPIEZA** | \< |
| Agentes y condiciones | Agua (temperatura: 1 °C – 85 °C, presión: máx. 2 bar, tiempo: máx. 15 min)<br />Cloro: máx. 10’000 mg/L de cloro activo (temperatura: máx. 25 °C) |
| **CARACTERÍSTICAS FÍSICAS** | \< |
| Dimensiones (ancho x fondo x alto) | 264 x 206 x 300 mm (10.4 x 8.1 x 11.8″) |
| Peso | 12 kg (26.5 lbs) |
| Dimensiones de la fuente de alimentación (ancho x fondo x alto) | 230 x 80 x 65 mm (9.0 x 3.1 x 2.6″) |
| Peso de la fuente de alimentación | 0.9 kg (2.0 lbs) |
| **CARACTERÍSTICAS ELÉCTRICAS** | \< |
| Categoría de instalación | II |
| Grado de contaminación | 2 |
| Alimentación eléctrica | Fuente de alimentación: 100 – 240 VAC ± 10 %, 50/60 Hz, 1.4 A<br />BactoSwitch: 24 VDC, 60 W |
| Consumo de potencia | Máx. 60 W |
| **INTERFACES** | \< |
| USB | 1 x USB 2.0 tipo C (hembra) |
