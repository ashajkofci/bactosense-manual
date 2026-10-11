---
title: "10. Mediciones"
sidebar_label: "10. Mediciones"
sidebar_position: 10
slug: /measurements
---

## 10.1 Muestras {#section-10-1}

BactoSense puede medir muestras puntuales recogidas manualmente mediante el dispositivo de muestreo manual, y también tomar muestras automáticamente de una fuente de agua conectada mediante el dispositivo de muestreo en línea.

Tipos de muestras y pretratamientos:

- Las aguas brutas y, especialmente, las aguas superficiales deben filtrarse con un filtro de 20 µm. Las partículas pueden obstruir los filtros internos y dañar el instrumento. El agua clara que se prevé potable no suele necesitar filtración.
- El instrumento no puede medir agua con gas ni refrescos.
- El agua con una elevada concentración de cloro puede afectar a los resultados de la medición.
- Deben cumplirse las condiciones de muestra y funcionamiento indicadas en los datos técnicos de la sección [Datos técnicos](03-instrument-overview.md#section-3-2).

## 10.2 Medición automática en modo en línea {#section-10-2}

La medición en modo en línea describe una configuración en la que BactoSense está conectado a una fuente de agua mediante el dispositivo de muestreo en línea y toma y mide automáticamente una muestra a intervalos predefinidos.

Si desea medir muestras puntuales recogidas manualmente, consulte la sección [Medición en modo manual](10-measurements.md#section-10-3).

Para distintos intervalos o determinados días de la semana, consulte [Programación avanzada](10-measurements.md#section-10-2-4).

### 10.2.1 Configuración e inicio de mediciones automáticas en línea {#section-10-2-1}

Las instrucciones siguientes muestran cómo configurar e iniciar mediciones automáticas en línea mediante el dispositivo de muestreo en línea.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Asegúrese de que el dispositivo de muestreo en línea esté firmemente instalado como se describe en la sección [Instalación del dispositivo de muestreo en línea](05-installation.md#section-5-5). | Si tiene instalado el dispositivo de muestreo manual y desea cambiar al de muestreo en línea, consulte la sección [Retirada del dispositivo de muestreo manual](08-general-operations-and-configurations.md#section-8-10-2) para retirar el dispositivo manual y la sección [Instalación del dispositivo de muestreo en línea](05-installation.md#section-5-5) para instalar el dispositivo en línea. |
| 2. | Vaya a la pantalla Home de la interfaz de usuario de BactoSense. |  |
| 3. | En la pantalla Home, pulse Modo y seleccione Modo en línea. Pulse Volver para volver a la pantalla Home. |  |
| 4. | Pulse Inicio en la pantalla Home para abrir el asistente de medición en línea. |  |
| 5. | En Protocolo, asegúrese de que esté marcada la casilla “Dispositivo de muestreo en línea (con lavado a contracorriente)”. |  |
| 6. | Introduzca un nombre de muestra pulsando el campo de texto Nombre de la muestra. |  |
| 7. | Seleccione la región de análisis que desea aplicar a las mediciones pulsando el campo de texto Compuertas. | Generalmente se utilizan las regiones predeterminadas TCC e ICC. Utilice regiones definidas por el usuario si su aplicación lo requiere. La creación y el ajuste de las regiones se describen en el capítulo [Resultados y análisis de datos](11-results-and-data-analysis.md). |
| 8. | Pulse el botón Siguiente. |  |
| 9. | Si aparece el editor de la programación semanal, pulse Volver para volver a la programación sencilla por intervalos. Seleccione el intervalo de medición con la rueda situada a la derecha. | El intervalo de medición es el tiempo entre mediciones y puede ser de un mínimo de 30 min y un máximo de 6 horas. |
| 10. | Si es necesario, retrase el inicio desmarcando Inicio inmediato y eligiendo una hora de inicio específica. | El ajuste de la hora de BactoSense se describe en la sección [Fecha y hora](08-general-operations-and-configurations.md#section-8-3-2). |
| 11. | Pulse el botón Inicio. | Durante la medición, la estimación actual de la concentración celular se muestra en la barra de acciones, en “Last”. |
| 12. | Después de cada medición, se actualiza el gráfico de la serie temporal. | Para obtener más detalles, pulse el botón Ver resultados. |
| 13. | Si desea detener una serie de mediciones en línea, consulte la sección [Finalización de mediciones automáticas en línea](10-measurements.md#section-10-2-2). |  |

### 10.2.2 Finalización de mediciones automáticas en línea {#section-10-2-2}

Siga los pasos siguientes para finalizar una serie de mediciones en modo en línea.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | En el modo en línea, pulse el gráfico de la pantalla Home para abrir el gráfico en línea. Pulse Detener. |  |
| 2. | Confirme el mensaje para detener la serie de mediciones en modo en línea. |  |
| 3. | Si hay una medición en curso, puede elegir si desea cancelarla inmediatamente o esperar a que termine. |  |
| 4. | Si no va a continuar con otra serie de mediciones en las próximas horas, retire el dispositivo de muestreo en línea como se describe en la sección [Retirada del dispositivo de muestreo en línea](08-general-operations-and-configurations.md#section-8-10-1) e instale el dispositivo de muestreo manual como se describe en la sección [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4). |  |
| 5. | Si desea visualizar sus datos, consulte la sección [Revisión de las mediciones automáticas en línea](10-measurements.md#section-10-2-3). Si desea obtener sus datos, consulte el capítulo [Acceso y exportación de datos](12-data-access-and-export.md). |  |

### 10.2.3 Revisión de las mediciones automáticas en línea {#section-10-2-3}

En el modo en línea, pulse el gráfico de la pantalla Home para abrir el gráfico de líneas con los resultados de medición a lo largo del tiempo.

![BactoSense — Gráfico de resultados en línea](/img/gui/es/online-results-chart.png "width=532 class=manual-figure")

*Figura 10-1 Gráfico de resultados del modo en línea*

Al pulsar el botón con el icono de engranaje (flecha en la figura 10-1), los usuarios pueden cambiar las escalas y los parámetros mostrados (véase la figura 10-2). Para visualizar alarmas en el gráfico, cree una alarma y active su ajuste "Display alarm" (véase la sección [Configuración de alarmas](08-general-operations-and-configurations.md#section-8-5)).

![BactoSense — Ajustes del gráfico en línea](/img/gui/es/online-chart-settings.png "width=531 class=manual-figure")

*Figura 10-2 Ajustes del gráfico del modo en línea*

|  |  |
| --- | --- |
| 1 | Ajuste la escala de porcentaje. Toque la mitad superior de la barra de escala para desplazar el límite superior. Toque la mitad inferior para desplazar el límite inferior. |
| 2 | Ajuste la escala de recuentos. Toque la mitad superior de la barra de escala para desplazar el límite superior. Toque la mitad inferior para desplazar el límite inferior. |
| 3 | Elija el intervalo de visualización o filtre por nombre (véase la sección [Filtrado de mediciones](../measurements/#section-10-7)). |
| 4 | Elija la escala vertical:<br/>• Auto scale se adapta a los datos actuales.<br/>• Full scale muestra el rango completo del instrumento.<br/>• Custom scale se ajusta con los deslizadores 1 y 2. Log y Linear controlan la escala de recuentos (escala de la derecha). |
| 5 | Elija los parámetros que desea mostrar en el gráfico. |

### 10.2.4 Programación avanzada {#section-10-2-4}

Utilice la programación avanzada para realizar mediciones a distintos intervalos o en determinados días de la semana. Un programa semanal combina una o varias reglas, cada una con su protocolo, nombre de medición, conjunto de regiones de análisis y horarios. El mismo programa se repite hasta que lo cambie o lo detenga.

La programación avanzada requiere la activación del Management Package o del Scientific Package. Si **Avanzado** no está disponible, compruebe el estado del paquete en **Ajustes → Ajustes del sistema → Actualizaciones**; consulte [Paquetes de actualización](09-upgrade-packages.md). Antes de iniciar, instale el dispositivo de muestreo en línea y compruebe la [fecha y hora](08-general-operations-and-configurations.md#section-8-3-2) del instrumento.

#### Crear un programa semanal {#advanced-scheduler-create}

|  | PASO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Siga los pasos 1–8 de [Configuración e inicio de las mediciones automáticas en línea](10-measurements.md#section-10-2-1) para elegir el modo en línea, el protocolo, el nombre de la muestra y las regiones de análisis. | Pulse **Siguiente** para acceder a la programación. |
| 2. | Pulse **Avanzado**. Si ya hay un programa semanal configurado, el editor de reglas puede abrirse directamente. | La figura 10-3 muestra **Avanzado** en la pantalla de intervalo simple. <br />![BactoSense — Botón Avanzado](/img/gui/es/advanced-scheduler-select.png "width=220 class=manual-figure") |
| 3. | Seleccione una regla en la lista de la izquierda para editarla o pulse **Nueva regla**. Para quitar una regla innecesaria del borrador, selecciónela y pulse **Borrar**. | Revise las reglas existentes antes de añadir otra: todas contribuyen al programa semanal. <br />![BactoSense — Botón Nueva regla](/img/gui/es/advanced-scheduler-new-rule.png "width=180 class=manual-figure") |
| 4. | Configure **Nombre**, **Protocolo** y **Compuerta** para la regla seleccionada. | **Nombre** identifica las mediciones obtenidas. Elija un conjunto de regiones de análisis compatible con el cartucho instalado. Los protocolos de mantenimiento que no necesitan regiones ocultan este campo. |
| 5. | Elija **30 minutes**, **1 hour**, **2 hora(s)**, **Diario** o **Personalizado**. | Los intervalos predefinidos se repiten cada día. **Diario** programa una ejecución al día a la **Hora de inicio** elegida. Utilice **Personalizado** para seleccionar días, otro intervalo o una franja horaria. |
| 6. | En **Personalizado**, configure la **Hora de inicio**, seleccione los **Días** y establezca el **Intervalo** en minutos. Pulse **Set time range** para elegir la franja diaria y confirme con **OK**. | Desplace los campos bajo los botones de frecuencia para ver **Intervalo**, **Set time range** y **Rango**. Las figuras 10-4 y 10-5 muestran la misma regla antes y después del desplazamiento. <br />![BactoSense — Botón Set time range](/img/gui/es/advanced-scheduler-time-range-button.png "width=160 class=manual-figure") |
| 7. | Repita los pasos 3–6 para añadir más reglas. Pulse **Vista previa**. | Seleccione un conjunto de regiones si la vista previa no está disponible porque falta uno. Si se indica un conflicto, vuelva a las reglas y ajuste horarios o intervalos para que los protocolos puedan finalizar. <br />![BactoSense — Botón Vista previa](/img/gui/es/advanced-scheduler-preview-button.png "width=130 class=manual-figure") |
| 8. | Seleccione cada día en la vista previa y compruebe las entradas generadas. Seleccione una entrada para revisar **Hora**, **Nombre**, **Protocolo** y **Compuerta**. | La vista previa puede incluir protocolos de limpieza insertados automáticamente durante pausas largas. Revíselos junto con las entradas de medición; consulte la figura 10-6. <br />![BactoSense — Selección del día](/img/gui/es/advanced-scheduler-days.png "width=240 class=manual-figure") |
| 9. | Realice los cambios individuales descritos a continuación, si son necesarios, y pulse **Guardar** para aplicar el programa semanal. | Los cambios en las reglas y las entradas siguen siendo un borrador hasta que pulse **Guardar**. <br />![BactoSense — Botón Guardar](/img/gui/es/advanced-scheduler-save.png "width=130 class=manual-figure") |
| 10. | En **¿Iniciar el programador ahora?**, pulse **Sí** para iniciar el programa guardado o **No** para guardarlo sin iniciar un programador detenido. | Compruebe el estado operativo en la pantalla de inicio. Para detener una serie activa, consulte [Finalización de las mediciones automáticas en línea](10-measurements.md#section-10-2-2). |

![BactoSense — Selección de programación avanzada en la pantalla de intervalo](/img/gui/es/advanced-scheduler-select.png "width=400 class=manual-figure")

*Figura 10-3 Abrir la programación avanzada desde la pantalla de intervalo simple*

![BactoSense — Regla personalizada para días de la semana](/img/gui/es/advanced-scheduler-rule.png "width=600 class=manual-figure")

*Figura 10-4 Editor de reglas con ajustes de medición, frecuencia y días*

![BactoSense — Intervalo personalizado y franja horaria diaria](/img/gui/es/advanced-scheduler-range.png "width=600 class=manual-figure")

*Figura 10-5 Desplazar los campos personalizados para comprobar el intervalo y la franja horaria*

**Ejemplo: seguimiento cada hora en días laborables.** Elija **Personalizado**, configure **Hora de inicio** en **08:00**, **Días** de lunes a viernes, **Intervalo** en **60 min** y la franja horaria en **08:00–17:00**. Las mediciones comienzan a las 08:00, 09:00, …, 16:00 esos días. La franja termina a las 17:00 y no añade un inicio a las 17:00. Estos valores ilustran los controles; elija un programa adecuado para su aplicación.

Para una franja que cruza la medianoche, utilice reglas distintas antes y después de la medianoche y seleccione los días correspondientes. Compare la vista previa generada con los horarios previstos.

#### Ajustar entradas individuales en la vista previa {#advanced-scheduler-preview}

Utilice la vista previa para introducir una excepción al programa generado, como mover una ejecución o cambiar su nombre de medición.

![BactoSense — Vista previa semanal con una entrada seleccionada](/img/gui/es/advanced-scheduler-preview.png "width=600 class=manual-figure")

*Figura 10-6 Vista previa por días y ajustes de la entrada seleccionada*

|  | PASO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Seleccione un día y después una entrada en la lista de la izquierda. | Los campos de la derecha muestran los ajustes de esa entrada. |
| 2. | Pulse **Hora**, **Nombre**, **Protocolo** o **Compuerta** para cambiar la entrada seleccionada. | El cambio se aplica a esa entrada. Compruebe de nuevo las regiones si cambia de protocolo. Los protocolos que utilizan BactoSwitch también incluyen un campo **Línea**. <br />![BactoSense — Hora de la entrada seleccionada](/img/gui/es/advanced-scheduler-entry-time.png "width=280 class=manual-figure") |
| 3. | Pulse **Nuevo** para añadir una entrada al día seleccionado y ajuste sus campos. Para eliminar una entrada, selecciónela y pulse **Borrar**. | Compruebe la hora, el protocolo y las regiones de la nueva entrada antes de guardar. <br />![BactoSense — Botón Nuevo](/img/gui/es/advanced-scheduler-new-entry.png "width=130 class=manual-figure") |
| 4. | Utilice **Copiar a la semana** solo si todos los días deben tener las mismas entradas que el día seleccionado. Confirme el mensaje con **OK**. | Esta acción reemplaza las entradas de los demás días en el borrador, incluidas las del fin de semana y las excepciones de un día concreto. Revise después los siete días. <br />![BactoSense — Botón Copiar a la semana](/img/gui/es/advanced-scheduler-copy-week.png "width=140 class=manual-figure") |
| 5. | Pulse **Guardar** y responda a **¿Iniciar el programador ahora?** como se describe arriba. | Si no se puede guardar, revise el mensaje y corrija los conflictos de horario o los ajustes que falten antes de volver a intentarlo. <br />![BactoSense — Botón Guardar](/img/gui/es/advanced-scheduler-save.png "width=130 class=manual-figure") |

:::info[Conservar los cambios individuales]

**Volver** regresa de la vista previa a las reglas. Cambiar una regla y generar una nueva vista previa puede reemplazar los ajustes individuales. Realice esos ajustes después de la vista previa definitiva de las reglas y revíselos antes de guardar.

:::

#### Cambiar un programa existente o volver a un intervalo simple {#advanced-scheduler-change}

Mientras el programador esté en marcha, abra **Inicio → Ajustes → Ajustes del modo en línea → Programar intervalo**. Edite las reglas semanales, pulse **Vista previa**, revise las entradas y pulse **Guardar**. Si el programador está detenido, utilice **Inicio** en la pantalla de inicio del modo en línea para volver a abrir el asistente de medición.

Para volver a un intervalo constante, pulse **Volver** para pasar de la vista previa a las reglas y después **Volver** de nuevo para abrir la pantalla de intervalo simple. Elija el intervalo y confirme con **OK** en **Programar intervalo** o con **Inicio** en el asistente de medición. Confirmar el programa simple reemplaza el programa semanal avanzado; pulsar **Volver** por sí solo no aplica el cambio.

## 10.3 Medición en modo manual {#section-10-3}

La medición en modo manual describe una configuración en la que el dispositivo de muestreo manual está conectado a BactoSense y el operador coloca en el instrumento muestras puntuales individuales recogidas en tubos de 5 mL con tapón de rosca.

### 10.3.1 Realización de una medición en modo manual {#section-10-3-1}

Las instrucciones siguientes muestran cómo configurar e iniciar una medición en modo manual.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado como se describe en la sección [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4). |  |
| 2. | Si acaba de instalar el dispositivo de muestreo manual o si el instrumento ha estado apagado o inactivo durante más de 3 días, se recomienda limpiar el dispositivo de muestreo. Si dispone de una Washstation, siga el procedimiento de la sección [Limpieza del dispositivo de muestreo manual con Washstation](15-maintenance.md#section-15-2-2); en caso contrario, el de la sección [Limpieza básica del dispositivo de muestreo manual](15-maintenance.md#section-15-2-3). |  |
| 3. | Si se ha limpiado el dispositivo de muestreo manual (véase el paso anterior), se recomienda realizar un cebado antes de medir la muestra. Siga el procedimiento de la sección [Realización de un cebado (Prime)](10-measurements.md#section-10-9-3). |  |
| 4. | Vaya a la pantalla Home de la interfaz de usuario de BactoSense. |  |
| 5. | En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición. |  |
| 6. | Seleccione Análisis del agua en la lista de protocolos disponibles. | Si desea réplicas técnicas, seleccione el número de réplicas en la columna Réplicas. Por defecto, se mide una muestra. Si se configuran más réplicas, se extraen varias muestras del mismo tubo. |
| 7. | Introduzca un nombre de muestra pulsando el campo de texto Nombre de la muestra, escribiendo el nombre y pulsando OK. |  |
| 8. | Compruebe que la región de análisis deseada esté configurada en el campo Compuertas. Si desea utilizar otra región, pulse el campo Compuertas y seleccione la región deseada entre las opciones disponibles (según el cartucho instalado). | Generalmente se utilizan las regiones predeterminadas TCC e ICC. Utilice regiones definidas por el usuario si su aplicación lo requiere. La creación y el ajuste de las regiones se describen en el capítulo [Resultados y análisis de datos](11-results-and-data-analysis.md). |
| 9. | Pulse el botón Siguiente. |  |
| 10. | Coloque un tubo de 5 mL con tapón de rosca que contenga 2 – 5 mL de muestra en el dispositivo de muestreo manual. |  |
| 11. | Pulse el botón Inicio. | Se muestran la duración estimada del protocolo y la hora prevista de finalización. El estado actual de la medición aparece en la barra superior (p. ej., Initializing, Mixing...). |
| 12. | Cuando termine la medición, pulse Siguiente para consultar los resultados. Los resultados se explican en la sección [Resultados de medición](11-results-and-data-analysis.md#section-11-1). |  |
| 13. | Si desea continuar con la siguiente medición, pulse el botón Nuevo. |  |
| 14. | Si desea ver resultados de mediciones anteriores, pulse el botón Ver resultados. |  |
| 15. | Si desea cambiar el nombre de la medición, reanalizarla con otras regiones o exportarla, consulte las instrucciones de las secciones siguientes. |  |
| 16. | Si no desea medir más muestras y el instrumento va a quedar inactivo o apagado, limpie el dispositivo de muestreo manual. Si dispone de una Washstation, siga el procedimiento de la sección [Limpieza del dispositivo de muestreo manual con Washstation](15-maintenance.md#section-15-2-2); en caso contrario, el de la sección [Limpieza básica del dispositivo de muestreo manual](15-maintenance.md#section-15-2-3). |  |

## 10.4 Cambio del nombre de las mediciones {#section-10-4}

Puede cambiarse el nombre de las mediciones desde su vista detallada de resultados.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes, después Registros, y seleccione Results (manual mode) o Results (online mode). |
| 2. | En la lista de resultados, seleccione la medición cuyo nombre desea cambiar. Excepción: si desea cambiar el nombre de un grupo de réplicas (véase la sección [Trabajo con réplicas de medición](10-measurements.md#section-10-5)), mantenga pulsado el grupo y, a continuación, pulse el botón para cambiar el nombre. |
| 3. | En la vista detallada de resultados, pulse el botón Cambie el nombre de (véase la sección [Resultados de medición](11-results-and-data-analysis.md#section-11-1)). |
| 4. | Aparece un teclado y un campo de texto con el nombre actual de la muestra. Utilice el teclado para cambiarlo y pulse OK. |

## 10.5 Trabajo con réplicas de medición {#section-10-5}

En el modo manual pueden repetirse los protocolos de análisis. Esto resulta especialmente útil para generar réplicas técnicas de una misma muestra.

- El número de réplicas puede seleccionarse al configurar una medición manual, como se describe en la sección [Realización de una medición en modo manual](10-measurements.md#section-10-3-1).
- En la lista de resultados del modo manual, las réplicas se agrupan en una entrada y el número entre paréntesis junto al nombre de la muestra indica cuántas réplicas hay. En esta vista, los resultados del grupo consisten en la media y la desviación estándar. Se puede acceder a las mediciones individuales pulsando el grupo de réplicas.
- Puede cambiarse el nombre de un grupo de réplicas, eliminarlo, exportarlo o reanalizarlo con otras regiones manteniendo pulsado el grupo en la lista de resultados del modo manual.

## 10.6 Reanálisis de mediciones con otras regiones {#section-10-6}

El ajuste de las regiones de análisis de mediciones individuales o de un conjunto de mediciones se describe en la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

## 10.7 Filtrado de mediciones {#section-10-7}

Pueden aplicarse filtros para mostrar un subconjunto de resultados de medición. Se puede filtrar por texto y por intervalo de fechas.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes, después Registros, y seleccione Results (manual mode) o Results (online mode). |
| 2. | En la lista de resultados, pulse el botón Filtro. |
| 3. | Especifique el filtro aplicando una o ambas opciones siguientes:<br/>• Defina un intervalo de fechas indicando las fechas de inicio y fin.<br/>• Defina una cadena de texto para filtrar por nombre de medición. |
| 4. | Pulse OK. La lista de resultados se actualizará para mostrar los resultados filtrados. |

## 10.8 Exportación de mediciones {#section-10-8}

Hay varias formas de obtener los datos de medición. La obtención mediante HTTP, HTTPS, FTP y la interfaz web se describe en los capítulos [Acceso y exportación de datos](12-data-access-and-export.md) y [Interfaz web de usuario](13-web-user-interface.md). Esta sección describe la exportación a una memoria USB.

### 10.8.1 Exportación a una memoria USB {#section-10-8-1}

Es posible exportar las mediciones seleccionadas o todas las mediciones a una memoria USB.

Asegúrese de que la memoria USB esté formateada en FAT32.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | En la pantalla Home, pulse Ajustes, después Registros, y seleccione Results (manual mode) o Results (online mode). |
| 2. | En la lista de resultados:<br/>• Pulse Exportar series, elija el intervalo de fechas y el filtro de nombre opcional y pulse OK para exportar una serie.<br/>• Mantenga pulsado un grupo de réplicas y pulse Exportar para exportar ese grupo.<br/>• Abra una medición y pulse Exportar para exportar únicamente esa medición. |
| 3. | El campo del nombre de carpeta muestra el nombre de la carpeta de destino que se creará en la memoria USB. Cámbielo si lo desea. |
| 4. | Inserte una memoria USB con suficiente espacio disponible. Pulse Actualizar lista para mostrar la memoria USB conectada. |
| 5. | Opciones de exportación:<br/>• Pulse Exportar resultados para exportar únicamente los resultados básicos (véanse los detalles en la interfaz).<br/>• Pulse Exportar todo para exportar los resultados, los datos brutos y la información de diagnóstico (véanse los detalles en la interfaz). |
| 6. | Espere a que termine la exportación y pulse OK. |

## 10.9 Protocolos de análisis y mantenimiento disponibles {#section-10-9}

### 10.9.1 Descripción de los protocolos del modo manual {#section-10-9-1}

Los operadores pueden elegir entre dos protocolos de análisis en modo manual.

**Tabla 10-1 Protocolos de análisis del modo manual**

| NOMBRE DEL PROTOCOLO | DESCRIPCIÓN DEL PROTOCOLO |
| --- | --- |
| Water Analysis | Analiza una muestra de agua y termina con un ciclo de limpieza. Si se ejecutan varias réplicas, la etapa de limpieza se realiza una sola vez, al final. Entre réplicas se ejecuta automáticamente un cebado. |
| Beads Analysis | Este protocolo está destinado al análisis de microesferas de calibración y se utiliza con el Validation Kit. El protocolo finaliza automáticamente con un ciclo de limpieza. Si se ejecutan varias réplicas, la etapa de limpieza se realiza una sola vez, al final. |

Los protocolos de mantenimiento pueden ejecutarse antes de los protocolos de análisis o entre ellos, para preparar, enjuagar o limpiar el sistema. En modo manual están disponibles los siguientes protocolos de mantenimiento:

**Tabla 10-2 Protocolos de mantenimiento del modo manual**

| NOMBRE DEL PROTOCOLO | DESCRIPCIÓN DEL PROTOCOLO |
| --- | --- |
| Clean Optics | Inicia una etapa de limpieza que lava todos los componentes interiores de BactoSense que están en contacto con la muestra, excepto el dispositivo de muestreo. |
| Clean Sampling Device with Washstation | Limpia el dispositivo de muestreo manual para lavar por completo el filtro exterior y el interior y exterior de la aguja entre mediciones, después de una muestra sucia o en caso de obstrucción del filtro. Para que aparezca este protocolo, la Washstation debe estar montada en el dispositivo de muestreo manual y debe haber un cartucho instalado. Este protocolo tiene una mayor capacidad de desinfección que Clean Sampling Device y, por tanto, debe utilizarse preferentemente. La Washstation es la mejor forma de mantener limpio el dispositivo de muestreo manual y evitar contaminaciones cruzadas. Encontrará las instrucciones de este protocolo en la sección [Limpieza del dispositivo de muestreo manual con Washstation](15-maintenance.md#section-15-2-2). |
| Clean Sampling Device | Limpia el dispositivo de muestreo para lavar el filtro externo y el interior de la aguja después de una muestra con una carga muy elevada o en caso de obstrucción del filtro. Encontrará las instrucciones de este protocolo en la sección [Limpieza básica del dispositivo de muestreo manual](15-maintenance.md#section-15-2-3). |
| Fill Tubing | Llena todos los tubos que transportan reactivos desde el cartucho para eliminar las burbujas. Limpia la óptica al final del proceso. |
| Prime and Clean Optics | Llena los tubos con líquido de la muestra. Ayuda a diluir los residuos, por ejemplo, después de limpiar el dispositivo de muestreo. Finaliza con la etapa de limpieza. |
| Prime | Carga la muestra en el instrumento. Encontrará las instrucciones en la sección [Realización de un cebado (Prime)](10-measurements.md#section-10-9-3). |

### 10.9.2 Descripción de los protocolos del modo en línea {#section-10-9-2}

Los operadores pueden elegir entre dos protocolos de análisis en modo en línea. Tabla 10-3 Protocolos de análisis del modo en línea.

| NOMBRE DEL PROTOCOLO | DESCRIPCIÓN DEL PROTOCOLO |
| --- | --- |
| Online Sampling Device (with Backflush) | Es el protocolo estándar para utilizar con el dispositivo de muestreo en línea. Incluye procedimientos de limpieza automáticos entre mediciones. |
| Manual Sampling Device | Este protocolo se utiliza con el dispositivo de muestreo manual instalado. |

### 10.9.3 Realización de un cebado (Prime) {#section-10-9-3}

El cebado acondiciona BactoSense con la muestra. Puede utilizarse para reducir el arrastre de células o sustancias no deseadas y dura aproximadamente 5 minutos.

Realice un cebado en las circunstancias siguientes:

- Después de un protocolo Clean Sampling Device (con y sin Washstation).
- Después de medir una muestra con una alta concentración de cloro o cualquier otra sustancia no deseada que pueda afectar a las mediciones posteriores.

|  | PASO DE TRABAJO |
| --- | --- |
| 1. | Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado como se describe en la sección [Instalación del dispositivo de muestreo manual](05-installation.md#section-5-4). |
| 2. | Vaya a la pantalla Home de la interfaz de usuario de BactoSense. |
| 3. | En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición. |
| 4. | Seleccione Preparar en la lista de protocolos disponibles. |
| 5. | Pulse el botón Siguiente. |
| 6. | Coloque en el dispositivo de muestreo manual la muestra que desea medir a continuación. |
| 7. | Pulse el botón Inicio. |
