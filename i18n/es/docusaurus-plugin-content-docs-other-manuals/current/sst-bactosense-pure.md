---
id: sst-bactosense-pure
title: Kit de prueba de idoneidad del sistema para BactoSense PURE
sidebar_position: 3
slug: /sst-bactosense-pure
document_id: UM_0004-01
manual_version: "01"
---

## Información general {#general-information}

Según la Farmacopea de los Estados Unidos USP \<1058>, la prueba de idoneidad del sistema (SST) verifica que un sistema funcione de acuerdo con los criterios establecidos en el procedimiento de prueba. El kit SST para BactoSense PURE es un kit de reactivos utilizado para realizar esta verificación del rendimiento.

Requisitos previos:

- BactoSense PURE con el dispositivo de muestreo manual instalado.
- Kit SST almacenado en condiciones adecuadas y no caducado.
- Una cuenta personal en el instrumento con permisos **Advanced** o **Admin**.

Almacene el kit refrigerado a **2–8 °C (35–47 °F)**, protegido de la luz. En estas condiciones, su vida útil es de **un año**. El kit permite realizar **10 pruebas**.

## Información de seguridad {#safety}

:::gloves[Utilice guantes de protección]

En caso de contacto con la piel, enjuague inmediatamente y de forma abundante con agua limpia. En caso de dolor o irritación, consulte a un médico.

:::

:::warning[Utilice gafas de protección]

En caso de contacto con los ojos, enjuáguelos inmediatamente con agua corriente durante 10–15 minutos, manteniendo los párpados separados, y consulte a un médico.

:::

:::info[Lea las instrucciones antes del uso]

Siga atentamente este manual y el manual de usuario de BactoSense PURE.

:::

## Contenido {#contents}

| Artículo | Cantidad | Número de documento de la ficha de datos de seguridad | Uso |
| --- | --- | --- | --- |
| Toallitas con alcohol | 10 | — | Un solo uso |
| Solución de partículas | 10 | 50106 | Un solo uso |
| Solución de referencia | 10 | — | Un solo uso |
| Solución estéril | 10 | — | Un solo uso |
| Soporte de tubos | 1 | — | Varios usos |

Deseche los artículos de un solo uso de acuerdo con la normativa local de eliminación de residuos. Las fichas de datos de seguridad están disponibles previa solicitud a bNovate Technologies SA.

## Cuándo utilizar el kit de prueba de idoneidad del sistema {#when-to-use}

Realice una SST:

- Como parte del aseguramiento de la calidad y la validación, por ejemplo, durante la cualificación operativa, la cualificación del rendimiento, el cambio de cartucho o el mantenimiento.
- Después de almacenar el instrumento durante más de un mes.
- Si hay indicios de que los resultados de medición podrían ser erróneos.

El procedimiento consta de tres partes, que se realizan en orden: [validación óptica](#optical-validation), [validación de referencia](#reference-validation) y [validación de esterilidad](#sterile-validation). Deben cumplirse todos los criterios de aceptación de las pruebas. El procedimiento dura aproximadamente **2.5 horas**.

## Preparativos {#preparations}

1. Compruebe que el kit SST no haya caducado y se haya almacenado en las condiciones especificadas.
2. Extraiga una toallita con alcohol, una solución de partículas, una solución de referencia, una solución estéril y el soporte de tubos.
3. Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado en BactoSense PURE.
4. Desembale la toallita con alcohol. Limpie la aguja de muestreo de arriba abajo para eliminar los contaminantes. Déjela secar durante **30 segundos**.
5. Inicie sesión en BactoSense PURE con su nombre de usuario y contraseña personales. Se requieren permisos **Advanced** o **Admin**.
6. Abra **Home → Maintenance → Instrument validation**. Marque **Activate Instrument validation** y pulse **Save**.
7. Continúe con la parte A.

## Parte A: Validación óptica {#optical-validation}

Esta prueba comprueba el sistema óptico del instrumento mediante la medición de una solución que contiene partículas fluorescentes.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Seleccione **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Una vez finalizado, agite enérgicamente el tubo de solución de partículas durante **10 segundos**, a mano o con un agitador de vórtex.
4. Retire los tapones del tubo de solución de partículas y del soporte de tubos. Inserte el tubo abierto en el soporte. Retire la estación de lavado y acople el soporte con la solución de partículas.

   :::caution[Utilice el tubo de reactivo completo]

   Inserte el tubo de reactivo completo en el soporte de tubos, en lugar de verter su contenido en el soporte.

   :::

   ![Apertura e inserción de un tubo de reactivo de un solo uso en el soporte de tubos](/img/other-manuals/sst-tube-holder-insertion.png "width=650")

5. Vuelva a la vista general de protocolos. Seleccione **Prime**, con **una réplica**. Pulse **Next** e inicie el protocolo.
6. Una vez finalizado, vuelva a la vista general de protocolos. Seleccione **Beads Analysis**, con **una réplica**. Pulse **Next** e inicie el protocolo.
7. Revise los resultados. Deben cumplirse todos los criterios siguientes:

   **TCC: 50,000–75,000/mL**

   | Canal | CV (%) | Mediana |
   | --- | --- | --- |
   | FL1 | Menos de 15 | 5.7–6.5 |
   | FL2 | Menos de 20 | 5.1–5.7 |
   | SSC | Menos de 25 | 4.7–6.3 |

   ![Ejemplo de resultados de la validación óptica](/img/other-manuals/sst-optical-results.png "width=450")

8. Si la prueba cumple los criterios, retire el soporte, extraiga el tubo de solución de partículas, ciérrelo con su tapón y deséchelo. Continúe con la parte B.

   Si no los cumple, repita la prueba y asegúrese de que la solución de partículas esté bien mezclada. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate.

## Parte B: Validación de referencia {#reference-validation}

Esta prueba comprueba el proceso automatizado de tinción del instrumento.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Retire el tapón de un tubo de solución de referencia e inserte el tubo completo en el soporte, como se muestra en la parte A. Una vez finalizado el protocolo de limpieza, retire la estación de lavado y acople el soporte con la solución de referencia.
4. Vuelva a la vista general de protocolos. Ejecute **Prime**, con **una réplica**.
5. Una vez finalizado, vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **una réplica**. En **Gates**, seleccione **ICC Default Gate**. Pulse **Next** e inicie el protocolo.
6. Compare las nubes bacterianas principales con los criterios de referencia:

   | Diagrama de puntos | Criterio de aceptación |
   | --- | --- |
   | FL1 / FL2 | Nube principal por encima de 4.5 en el eje FL1 y por debajo de 5 en el eje FL2 |
   | FL1 / SSC | Nube principal por encima de 2 y por debajo de 5.5 en el eje SSC |

   ![Diagramas de puntos de referencia con las nubes bacterianas principales rodeadas en naranja](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspecto de las nubes]

   Según el cartucho y las condiciones de almacenamiento, las nubes pueden diferir de las del ejemplo.

   :::

7. Si la prueba cumple los criterios, retire el soporte, extraiga el tubo de solución de referencia, ciérrelo con su tapón y deséchelo. Continúe con la parte C.

   Si no los cumple, repita la prueba con una solución de referencia nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate.

## Parte C: Validación de esterilidad {#sterile-validation}

Esta prueba verifica la limpieza del dispositivo de muestreo y del sistema fluídico mediante la medición de agua libre de células.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Retire el tapón de un tubo de solución estéril e inserte el tubo completo en el soporte, como se muestra en la parte A. Una vez finalizado el protocolo de limpieza, retire la estación de lavado y acople el soporte con la solución estéril.
4. Vuelva a la vista general de protocolos. Ejecute **Prime**, con **una réplica**.
5. Una vez finalizado, vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **una réplica**. Seleccione **ICC Default Gate**, pulse **Next** e inicie el protocolo.
6. Revise el resultado. El criterio de aceptación es **ICC inferior a 100/mL**.
7. Si la prueba cumple el criterio, retire el soporte, extraiga el tubo de solución estéril, ciérrelo con su tapón y deséchelo. Devuelva el soporte al kit SST, almacene el kit en las condiciones especificadas y acople la estación de lavado al dispositivo de muestreo manual.

   Si no lo cumple, realice una descontaminación biológica utilizando el kit de limpieza. Repita la prueba con una solución estéril nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate.

8. Abra **Home → Maintenance → Instrument validation**. Desmarque **Activate Instrument validation** y pulse **Save**.

La prueba de idoneidad del sistema se ha completado correctamente cuando las tres partes cumplen sus criterios.
