---
title: "16. Advertencias, errores y resolución de problemas"
sidebar_label: "16. Advertencias, errores y resolución de problemas"
sidebar_position: 16
slug: /warnings-errors-and-troubleshooting
---

Si el instrumento detecta un problema, pasa a un estado diferente según su gravedad. Existen advertencias, errores no críticos y errores críticos, cada uno con implicaciones distintas y que requieren acciones diferentes.

## 16.1 Advertencias {#section-16-1}

Las advertencias aparecen cuando se detecta un comportamiento inusual durante una medición que, por lo demás, se ha completado correctamente. Pueden indicar una menor exactitud de los resultados o errores inminentes. A diferencia de los errores, las advertencias no impiden el funcionamiento del instrumento, pero los usuarios deben prestarles atención porque pueden señalar fuentes de inexactitud.

| ADVERTENCIA | IMAGEN |
| --- | --- |
| Cuando se detecta un comportamiento inusual, aparece una advertencia junto a los resultados de medición. Para obtener más información, pulse la advertencia correspondiente junto a los resultados o consúltela directamente en el registro de advertencias. | ![BactoSense — Advertencia de señal basal alta en SSC](/img/gui/es/warning-high-ssc-baseline.png "width=252 class=manual-figure") |

Pueden aparecer los mensajes de advertencia siguientes:

**Tabla 16-1 Advertencias**

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| W01 | Cartucho caducado | Los reactivos del cartucho han caducado. La exactitud de la medición podría verse afectada. | • Sustituya el cartucho lo antes posible. |
| W02-04 | Señal de línea de base elevada en FL1 / FL2 / SSC | Las señales de línea de base son demasiado altas. Suele deberse a burbujas o partículas en suspensión en la muestra. La exactitud de la medición podría verse afectada. | • Compruebe si hay depósitos en el tubo de entrada.<br/>• Compruebe las conexiones de agua y asegúrese de que estén bien apretadas (sin entrada de aire).<br/>• Si la advertencia persiste, limpie el instrumento con el kit de limpieza. |
| W05 | Temperatura del incubador fuera del objetivo | La temperatura durante la incubación se ha desviado más de 2 °C del objetivo. Los recuentos celulares pueden verse afectados. El incubador puede estar averiado. | • Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| W06 | No se han detectado eventos | No se han detectado eventos durante la medición. | • Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| W07 | TCC fuera de rango | TCC supera el límite especificado de BactoSense de 2’000’000 células/ml. | • Diluya la muestra para garantizar la exactitud de la medición. |
| W08 | Burbujas de aire detectadas | La muestra parece contener burbujas de aire. | • Compruebe que el dispositivo de muestreo esté correctamente instalado.<br/>• Compruebe si hay burbujas en la muestra.<br/>• Si utiliza el dispositivo de muestreo en línea, compruebe que el agua se suministre a la presión correcta. |
| W10 | Carcasa demasiado fría | La carcasa está demasiado fría; se ha activado el calentamiento rápido antes de continuar con el protocolo. | • El instrumento no puede funcionar de forma segura si la temperatura interna es demasiado baja.<br/>• El calentamiento rápido intenta calentar la carcasa para garantizar un funcionamiento seguro.<br/>• Las mediciones comenzarán cuando la temperatura interna sea suficiente. |
| W11 | Mantenimiento necesario | Es necesario realizar el mantenimiento del instrumento. Ya no puede garantizarse la precisión de la medición. Continuar utilizándolo puede provocar fugas que dañen el instrumento. | • Se ha superado la fecha del próximo mantenimiento.<br/>• La válvula y el émbolo han llegado al final de su vida útil.<br/>• Póngase en contacto con su representante de servicio. |
| W13 | Fin de la vida útil del láser | El láser ha llegado al final de su vida útil. | • Póngase en contacto con su representante de servicio. |
| W14 | Corte de alimentación no crítico | El instrumento se ha apagado de forma inesperada. | • Asegúrese de que el instrumento esté limpio.<br/>• Si ocurre con frecuencia, instale un sistema de alimentación ininterrumpida. |

## 16.2 Errores no críticos {#section-16-2}

Los errores no críticos impiden que una medición finalice correctamente, pero no impiden que el instrumento ejecute otra medición después. Estos errores no requieren intervención humana. Algunos errores no críticos se convierten en críticos si se repiten tres veces.

| ERRORES NO CRÍTICOS |  |
| --- | --- |
| El protocolo se detiene. La causa del error suele resolverse repitiendo el análisis o esperando.<br/>• Puede iniciarse otra medición inmediatamente. Si finaliza correctamente, se borra el estado de error.<br/>• Encontrará más información en el registro de errores pulsando la entrada correspondiente. | ![BactoSense — Error no crítico: muestra vacía](/img/gui/es/noncritical-error-empty-sample.png "width=255 class=manual-figure") |

Pueden aparecer los siguientes mensajes de error no crítico:

**Tabla 16-2 Lista de errores no críticos.**

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E01 | Puerta del cartucho abierta | La puerta del cartucho está abierta e impide ejecutar mediciones. | • Cierre la puerta y repita la medición. |
| E08 | Carcasa demasiado húmeda | La humedad de la carcasa es demasiado elevada para un funcionamiento seguro. | • Sustituya la bolsa desecante desenroscando la tapa grande del lateral izquierdo del instrumento (véase la sección [Sustitución de la bolsa desecante](15-maintenance.md#section-15-2-6)).<br/>• Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| E09 | Sistema sobrecalentado | La temperatura interior es demasiado elevada para un funcionamiento seguro. | • Reduzca la temperatura ambiente o aumente el intervalo de medición para permitir que el instrumento se enfríe. |
| E14 | Láser demasiado caliente | La temperatura del láser es demasiado elevada para un funcionamiento seguro. | • Reduzca la temperatura ambiente o aumente el intervalo de medición para permitir que el instrumento se enfríe. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E15 | Error de inflado del mezclador | Se ha detectado depresión durante la mezcla o la dispensación. | • Falta de muestra.<br/>• Aire en la entrada.<br/>• Fuga en el sistema.<br/>• Ejecute el protocolo Clean Optics (véase la sección [Descripción de los protocolos del modo manual](10-measurements.md#section-10-9-1)). |
| E18 | Error de depresión de la bomba | Se ha detectado depresión durante la dispensación. | • Falta de muestra.<br/>• Aire en la entrada.<br/>• Fuga en el sistema.<br/>• Ejecute el protocolo Clean Optics (véase la sección [Descripción de los protocolos del modo manual](10-measurements.md#section-10-9-1)). |
| E19 | Sistema sobrecalentado | La temperatura interior es demasiado elevada para el funcionamiento. | • Reduzca la temperatura ambiente o aumente el intervalo de medición para permitir que el instrumento se enfríe. |
| E33 | Desbordamiento de memoria de procesamiento | Se ha desbordado la memoria de los circuitos de procesamiento de señales. | • Ejecute el protocolo Clean Optics (véase la sección [Descripción de los protocolos del modo manual](10-measurements.md#section-10-9-1)).<br/>• Repita la medición. |
| E42 | Carcasa demasiado fría a pesar del calentamiento | La temperatura de la carcasa sigue siendo demasiado baja después del procedimiento de calentamiento. | • La temperatura ambiente es inferior a 5 °C (41 °F).<br/>• Aumente la temperatura ambiente. |
| E44 | Error de arranque del módulo de bomba | El módulo de bomba no se ha encendido correctamente. | • Repita la medición. |
| E45 | Error por proporción de volumen válido baja | La proporción de volumen válido es demasiado baja. Puede deberse a un contenido bacteriano excesivo en el agua o a turbidez/residuos. | • La exactitud de la medición probablemente sea muy baja. Repita la medición diluyendo la muestra con agua clara. |
| E46 | El cartucho sigue ocupado | El cartucho aún se estaba inicializando al comenzar la medición. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con un técnico de servicio. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E48 | Subsistema de microfluídica ocupado | El controlador de microfluídica estaba realizando otra tarea mientras se efectuaba la medición. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con un técnico de servicio. |
| E49 | Error de tiempo de espera de GPIO | La placa de procesamiento está esperando la respuesta de otro módulo. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con un técnico de servicio. |
| E50 | Movimiento de la bomba bloqueado | El movimiento de la bomba está bloqueado. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con un técnico de servicio. |
| E51 | No se puede obtener la lectura de temperatura | No se puede obtener la lectura de temperatura. Por tanto, el bucle de control está desactivado. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con un técnico de servicio. |
| E52 | Movimiento de la válvula del cartucho bloqueado | El movimiento de la válvula del cartucho está bloqueado. | • Error no crítico. Repita la medición. Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| E55 | M7 no conectado | El procesador de adquisición no puede inicializarse. | • Reinicie el instrumento.<br/>• Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| E56 | Adquisición vacía | No se han detectado eventos durante la adquisición. | • Limpie el dispositivo de muestreo con la Washstation y, a continuación, mida agua limpia.<br/>• Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E57 | Cartucho ocupado (comando especial ocupado) | Ha fallado la comunicación con el cartucho. | • Error no crítico. Repita la medición.<br/>• Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| E58 | Cartucho ocupado (tiempo de espera agotado) | Ha fallado la comunicación con el cartucho. | • Compruebe el conector electrónico entre el cartucho y el instrumento.<br/>• Repita la medición.<br/>• Si el problema persiste, póngase en contacto con el servicio de atención al cliente. |
| E59 | Error del sensor de la válvula | No se puede leer la posición de la válvula. | • Póngase en contacto con el servicio de atención al cliente. |

## 16.3 Errores críticos {#section-16-3}

Los errores críticos interrumpen los procesos del instrumento y requieren intervención humana. Debe eliminarse la causa del error y restablecerse el instrumento a condiciones de funcionamiento. Los errores críticos deben borrarse.

| ERRORES CRÍTICOS | IMAGEN |
| --- | --- |
| Si se produce un error crítico durante el funcionamiento, tiene los siguientes efectos:<br/>• El protocolo se detiene inmediatamente.<br/>• El instrumento entra en estado de error crítico y se necesita una intervención manual antes de iniciar cualquier protocolo nuevo.<br/>• Un operador debe resolver la causa del error. Después, los errores pueden borrarse manualmente desde Error log, como se describe en las secciones [Registros de errores y advertencias](16-warnings-errors-and-troubleshooting.md#section-16-4) y [Borrado de errores](16-warnings-errors-and-troubleshooting.md#section-16-5). | ![BactoSense — Error crítico: cartucho ausente](/img/gui/es/critical-error-missing-cartridge.png "width=253 class=manual-figure") |

Pueden aparecer los siguientes mensajes de error crítico:

**Tabla 16-3 Lista de errores críticos.**

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E00 | Error general | Error no gestionado. | • Póngase en contacto con el servicio de atención al cliente. |
| E02 | Cartucho vacío | El cartucho está vacío. | • Sustituya el cartucho (véase la sección [Cambio de cartuchos](08-general-operations-and-configurations.md#section-8-9-4)). |
| E04 | Cartucho ausente | Falta el cartucho. | • Inserte un cartucho (véase la sección [Instalación de un cartucho](08-general-operations-and-configurations.md#section-8-9-6)). |
| E05 | Bolsa de residuos llena | La bolsa de residuos del cartucho está llena. | • Sustituya el cartucho (véase la sección [Cambio de cartuchos](08-general-operations-and-configurations.md#section-8-9-4)). |
| E06 | No es posible comunicarse con el cartucho | El cartucho está desconectado, la puerta está abierta o la electrónica del cartucho está dañada. | • Asegúrese de que el cable electrónico del cartucho esté correctamente conectado y de que la puerta esté bien cerrada.<br/>• Si esto no resuelve el problema, sustituya el cartucho e informe al servicio de atención al cliente. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E07 | Disco de almacenamiento lleno | No hay suficiente espacio de almacenamiento para continuar el funcionamiento. | • Elimine mediciones antiguas y vuelva a intentarlo (véase la sección [Liberación de espacio en disco](15-maintenance.md#section-15-2-8)).<br/>• Esto elimina las mediciones de forma permanente del dispositivo.<br/>• Exporte las mediciones como copia de seguridad. |
| E12 | Error de inicialización de FPGA | No se ha podido inicializar el chip de procesamiento de señales. | • Reinicie el instrumento. |
| E16 | Error de procesamiento | Se ha detectado un error al procesar las señales. | • No se garantiza la exactitud del último resultado. Repita el análisis. |
| E17 | Sobrepresión detectada | Se ha detectado sobrepresión durante la dispensación. | • Causa probable: el filtro de salida está obstruido.<br/>• Celda de flujo óptica obstruida.<br/>• Llame al servicio de atención al cliente. |
| E20 | Apagado anómalo | Protocolo interrumpido por motivos desconocidos, normalmente debido a un corte de alimentación. | • Suele indicar un corte de alimentación u otra interrupción externa de la medición.<br/>• Ejecute los protocolos Clean Optics y Clean Sampling Device antes de iniciar una nueva medición (véase la sección [Descripción de los protocolos del modo manual](10-measurements.md#section-10-9-1)). |
| E23 | Error de comunicación del sensor de temperatura | Ha fallado la comunicación con el sensor de temperatura de la placa de E/S. | • Póngase en contacto con el servicio de atención al cliente. |
| E24 | Error de comunicación del láser | Ha fallado la comunicación con la unidad óptica. | • Póngase en contacto con el servicio de atención al cliente. |
| E25 | Error de comunicación de la bomba | No es posible comunicarse con el módulo de bomba. | • Póngase en contacto con el servicio de atención al cliente. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E26 | Error de comunicación de la fuente de alimentación | No es posible comunicarse con el módulo de alimentación. | • Póngase en contacto con el servicio de atención al cliente. |
| E27 | Tiempo de espera de comunicación con la bomba agotado | Se ha agotado el tiempo de espera de comunicación con el módulo de bomba. | • La puerta del cartucho está abierta.<br/>• Hay un cable desconectado.<br/>• Hay una placa de circuito dañada en la bomba o en el cartucho. |
| E28 | Suministro de colorante vacío | El tubo de colorante conectado al cartucho está vacío. | • El tubo está desconectado.<br/>• El cartucho está defectuoso.<br/>• Repita el procedimiento de cambio de cartucho, asegurándose de que todos los tubos estén correctamente conectados. |
| E29 | Suministro de líquido de enjuague vacío | El tubo de líquido de enjuague conectado al cartucho está vacío. | • El tubo está desconectado.<br/>• El cartucho está defectuoso.<br/>• Repita el procedimiento de cambio de cartucho, asegurándose de que todos los tubos estén correctamente conectados. |
| E30 | Suministro de solución de hipoclorito vacío | El tubo de solución de hipoclorito conectado al cartucho está vacío. | • El tubo está desconectado.<br/>• El cartucho está defectuoso.<br/>• Repita el procedimiento de cambio de cartucho, asegurándose de que todos los tubos estén correctamente conectados. |
| E31 | Fallo de la electrónica del cartucho | Ya no puede determinarse con exactitud el nivel del cartucho. | • Sustituya el cartucho y póngase en contacto con el servicio de atención al cliente. |
| E32 | Cartucho incompatible | El tipo de cartucho es incompatible con este instrumento o software. | • Asegúrese de tener el tipo de cartucho correcto para este instrumento. |
| E33 | Desbordamiento de memoria de procesamiento | Se ha desbordado la memoria de los circuitos de procesamiento de señales. | • Ejecute el protocolo Clean Optics (véase la sección [Descripción de los protocolos del modo manual](10-measurements.md#section-10-9-1)).<br/>• Repita la medición. |

| CÓDIGO DE ERROR | NOMBRE | DESCRIPCIÓN | CAUSAS / QUÉ HACER |
| --- | --- | --- | --- |
| E38 | Error: cartucho no preparado | El cartucho nuevo no se ha inicializado correctamente. | • Ejecute el procedimiento “Cartridge Change” (véase la sección [Cambio de cartuchos](08-general-operations-and-configurations.md#section-8-9-4)). |
| E39 | Se ha alcanzado el límite de corriente del láser | El láser ha alcanzado su límite superior de corriente, lo que indica el final de su vida útil. | • El láser debe sustituirse. Póngase en contacto con un técnico de servicio. |
| E40 | Conjunto de regiones no encontrado | No se encuentra en los ajustes del instrumento la referencia al conjunto de regiones seleccionado para la medición. | • El conjunto de regiones se ha eliminado.<br/>• Cambie el conjunto y repita la medición. |
| E41 | Conjunto de regiones incompatible | El conjunto de regiones seleccionado para la medición no puede utilizarse con este cartucho. | • No se ha seguido el procedimiento correcto de cambio de cartucho.<br/>• Configuración incorrecta de las entradas digitales.<br/>• Cambie el conjunto de regiones y repita la medición. |
| E43 | Temperatura externa demasiado baja | La temperatura ambiente está fuera de las especificaciones del instrumento. | • Aumente la temperatura ambiente.<br/>• Intentar utilizar o almacenar el instrumento por debajo de 5 °C (41 °F) puede dañarlo. |
| E47 | No se encuentra el imán de referencia principal durante la búsqueda de origen | Durante la inicialización, la válvula no ha encontrado correctamente su posición de origen. | • Póngase en contacto con el servicio de atención al cliente. |
| E53 | No es posible comunicarse con el motor | La comunicación con el controlador del motor del mezclador es defectuosa. | • Póngase en contacto con el servicio de atención al cliente. |
| E54 | Error del sensor de temperatura del láser | No se puede obtener la temperatura del láser. | • Póngase en contacto con el servicio de atención al cliente. |

## 16.4 Registros de errores y advertencias {#section-16-4}

Las vistas de los registros de errores y advertencias pueden abrirse por separado desde el menú Home de la interfaz pulsando Logs.

![BactoSense — Registro de errores](/img/gui/es/error-log.png "width=558 class=manual-figure")

*Figura 16-1: Registros de errores*

<table className="manual-table">

<tbody>

<tr>

<td rowSpan="4">

①

</td>

<td rowSpan="4">

Fecha y hora del evento

</td>

<td rowSpan="4">

②

</td>

<td colSpan="2">

Tipo de evento

</td>

</tr>

<tr>

<td>

![BactoSense — Entrada del registro: error crítico](/img/gui/icons/critical-error-event.png "width=32 class=manual-icon")

</td>

<td>

Error crítico

</td>

</tr>

<tr>

<td>

![BactoSense — Entrada del registro: error no crítico](/img/gui/icons/noncritical-error-event.png "width=32 class=manual-icon")

</td>

<td>

Error no crítico

</td>

</tr>

<tr>

<td>

![BactoSense — Entrada del registro: errores borrados](/img/gui/icons/errors-cleared-event.png "width=32 class=manual-icon")

</td>

<td>

Errores borrados

</td>

</tr>

<tr>

<td>

③

</td>

<td>

Descripción breve del error o evento

</td>

<td>

④

</td>

<td colSpan="2">

Botón para borrar errores manualmente (solo disponible para usuarios Admin y Service)

</td>

</tr>

<tr>

<td>

⑤

</td>

<td>

Intervalo de fechas de los eventos mostrados. Pulse para cambiarlo.

</td>

<td>

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::info[Consulte los detalles del evento]

Al seleccionar cualquier evento de la lista, se abre una página con más información sobre la causa del error y los pasos recomendados para resolverlo.

:::

## 16.5 Borrado de errores {#section-16-5}

Los errores críticos deben borrarse manualmente. Asegúrese de resolver primero el origen del problema y, a continuación, borre el error siguiendo los pasos siguientes. Tenga en cuenta que este procedimiento no resuelve automáticamente la causa del error.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Vaya al menú Home de la interfaz de usuario de BactoSense. |  |
| 2. | Pulse el botón Logs y, a continuación, Error log. |  |
| 3. | Asegúrese de haber resuelto el problema que provoca los errores mostrados. Pulse Clear Errors. | ![BactoSense — Borrar errores](/img/gui/es/error-log-clear-errors.png "width=245 class=manual-figure") |
| 4. | Los errores borrados aparecen con símbolos grises y se añade al registro un evento “Errors cleared”. El instrumento está listo para volver a analizar. |  |

## 16.6 Autocomprobación automática {#section-16-6}

La herramienta de autocomprobación automática verifica que cada componente de BactoSense funcione correctamente e identifica los que no funcionan. Puede utilizarse para detectar problemas del instrumento.

<table className="manual-table">

<tbody>

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

<tr>

<td>

1\.

</td>

<td>

Vaya al menú Home de la interfaz de usuario de BactoSense.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Pulse el botón Maintenance.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pulse el botón Self-check.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

:::info[Información adicional]

Pulse Run o Rerun para iniciar la autocomprobación. Una vez finalizada, el instrumento muestra una lista de todas las pruebas con un indicador PASS verde o FAIL rojo. Algunas pruebas pueden omitirse: si el sistema no puede comunicarse con el cartucho, se omiten todas las pruebas que requieren dicha comunicación.

:::

</td>

<td>

![BactoSense — Resultados del autodiagnóstico](/img/gui/es/self-check-results.png "width=245 class=manual-figure")

</td>

</tr>

</tbody>

</table>

## 16.7 Funcionamiento a baja temperatura {#section-16-7}

El instrumento debe utilizarse dentro de un intervalo de temperatura específico para evitar daños y garantizar resultados fiables y reproducibles (véase la sección [Datos técnicos](03-instrument-overview.md#section-3-2)). A temperaturas ambiente muy bajas o muy altas (por debajo de 5 °C (41 °F) o por encima de 30 °C (86 °F)), no se ejecutan los protocolos. A temperaturas ambiente bajas, el instrumento se calienta automáticamente antes de una medición para alcanzar la temperatura necesaria. Durante este proceso, el estado del instrumento muestra “Heating...”. Si no se alcanza la temperatura objetivo tras varias horas, el protocolo finaliza con un error (tabla 16-2, E42).

:::info[Deje tiempo para el calentamiento]

Las mediciones pueden retrasarse si se necesita un calentamiento prolongado. Para evitarlo, mantenga la temperatura del instrumento por encima de 10 °C (50 °F).

:::

## 16.8 Resolución de problemas {#section-16-8}

La tabla siguiente resume los problemas y sus soluciones. Si no puede resolver el problema, póngase en contacto con su representante local de servicio o con el servicio de atención al cliente de bNovate. Los datos de contacto figuran en la sección [Contacto con el servicio de atención al cliente](19-contact.md#section-19-1).

**Tabla 16-4 Instrucciones para resolver problemas**

|  |  |
| --- | --- |
| OBSERVACIÓN | INSTRUCCIÓN |
| No aparece nada en la pantalla | • Compruebe si BactoSense está conectado a la alimentación y encendido. |
| La interfaz no responde o parpadea | • Posibles interferencias electromagnéticas de una máquina cercana (p. ej., una bomba). Cambie BactoSense de ubicación. |
| Mensaje de error en la pantalla | • Responda al mensaje de error como se describe en este capítulo. |
| Las mediciones parecen incorrectas | • Asegúrese de que se cumplan las condiciones de muestra y funcionamiento descritas en la sección [Datos técnicos](../instrument-overview/#section-3-2).<br/>• Compruebe que el instrumento esté correctamente instalado según el capítulo [Instalación](../installation/).<br/>• Asegúrese de que se hayan realizado las tareas de servicio conforme a los programas de las secciones [Mantenimiento preventivo periódico por un profesional de servicio](../maintenance/#section-15-1) y [Mantenimiento por el usuario](../maintenance/#section-15-2).<br/>• Limpie el instrumento con el Cleaning Kit.<br/>• Valide el instrumento con el Validation Kit. |
