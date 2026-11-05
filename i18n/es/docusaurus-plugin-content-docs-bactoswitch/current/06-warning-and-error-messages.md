---
title: "6. Mensajes de advertencia y error"
sidebar_label: "6. Mensajes de advertencia y error"
slug: /warning-and-error-messages
sidebar_position: 6
description: "Manual de usuario de BactoSwitch: Mensajes de advertencia y error."
---

## 6.1 Advertencias {#section-6-1}

Las advertencias indican una situación que requiere la atención del usuario, pero que no detiene necesariamente el funcionamiento.

*Tabla 6-1 Advertencias de BactoSwitch*

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| W15 | BactoSwitchLowFlow | El caudal de entrada es inferior al valor recomendado. La precisión de la medición podría verse afectada. | **Causas habituales:** presión de entrada inferior a la especificada, válvula aguas arriba parcialmente cerrada o instalación que genera contrapresión en el desagüe.<br />**Acción recomendada:**<br />• En **Prueba BactoSwitch**, abra solo la línea afectada y ajústela a 150 – 400 mL/min con el mando de ajuste del caudal (véase la sección [Prueba de las líneas y ajuste del caudal](04-installation.md#section-4-8)).<br />• Confirme que la presión de entrada sea > 0.1 bar y Δh > 0.5 m (véase la [figura 4-2](04-installation.md#section-4-4)).<br />• Corrija cualquier restricción aguas arriba. |

## 6.2 Errores {#section-6-2}

*Tabla 6-2 Errores de BactoSwitch*

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E60 | BactoSwitchFlowTooLowError | El caudal medido en la entrada seleccionada está por debajo del rango aceptable para el funcionamiento con una sola línea. | **Causas habituales:** presión de entrada baja; restricción aguas arriba; instalación del desagüe que genera contrapresión; válvula cerrada manualmente.<br />**Acción recomendada:**<br />• En **Prueba BactoSwitch**, abra solo la línea afectada y ajústela a 150 – 400 mL/min con el mando de ajuste del caudal (véase la sección [Prueba de las líneas y ajuste del caudal](04-installation.md#section-4-8)).<br />• Confirme que la presión de entrada sea > 0.1 bar y Δh > 0.5 m (véase la [figura 4-2](04-installation.md#section-4-4)).<br />• Corrija cualquier restricción aguas arriba.<br />• Compruebe que la válvula de cierre esté abierta. |
| E61 | BactoSwitchDeviceNotFoundError | BactoSense no detecta BactoSwitch. | **Causas habituales:** BactoSwitch sin alimentación; cable USB-C no conectado o no atornillado en ambos dispositivos.<br />**Acción recomendada:** Conecte la fuente de alimentación a BactoSwitch y fije el cable USB-C con los collarines roscados tanto en BactoSwitch como en BactoSense. El dispositivo se detecta automáticamente al conectarlo. |
| E62 | BactoSwitchTimeoutError | Un intento de comunicación con BactoSwitch ha superado el tiempo previsto. | **Causas habituales:** problema temporal de comunicación en el enlace USB-C; conectores flojos o no atornillados.<br />**Acción recomendada:** Compruebe que el cable USB-C esté bien insertado y atornillado en ambos extremos y que BactoSwitch reciba alimentación; a continuación, vuelva a intentar la operación. |
| E63 | BactoSwitchCommunicationError | Se ha producido un error de comunicación entre BactoSense y BactoSwitch. | **Causas habituales:** conexión USB-C inestable o incorrecta; cable no fijado.<br />**Acción recomendada:** Inspeccione el cable USB-C y vuelva a fijarlo en ambos dispositivos (utilice los collarines roscados), compruebe la alimentación de BactoSwitch y reinicie ambos dispositivos. |

Si los problemas persisten después de aplicar los pasos anteriores, póngase en contacto con su colaborador local de servicio (véase el capítulo [Contacto](09-contact.md)).

Para las advertencias y los errores del propio BactoSense, consulte el capítulo [Advertencias, errores y resolución de problemas](/bactosense/warnings-errors-and-troubleshooting) del manual de usuario de BactoSense.
