---
id: sst-aquasense
title: Kit de prueba de idoneidad del sistema para AQU@Sense MB
sidebar_position: 4
slug: /sst-aquasense
document_id: UM_0005-01
manual_version: "01"
---

## Información general {#general-information}

Según la Farmacopea de los Estados Unidos USP \<1058>, la prueba de idoneidad del sistema (SST) verifica que un sistema funciona de acuerdo con los criterios establecidos en el procedimiento de prueba. El kit SST para AQU@Sense MB es un kit de reactivos utilizado para realizar esta verificación del funcionamiento.

Requisitos previos:

- AQU@Sense MB con el dispositivo de muestreo manual instalado.
- Kit SST almacenado en condiciones adecuadas y que no haya caducado.
- Una cuenta personal para acceder al instrumento con permisos **Advanced** o **Admin**.

Almacene el kit refrigerado a **2–8 °C (35–47 °F)**, protegido de la luz. En estas condiciones, su vida útil es de **un año**. El kit permite realizar **10 pruebas**.

## Información de seguridad {#safety}

:::gloves[Use guantes de protección]

En caso de contacto con la piel, enjuague inmediatamente con abundante agua limpia. En caso de dolor o irritación, consulte a un médico.

:::

:::warning[Use gafas de protección]

En caso de contacto con los ojos, enjuáguelos inmediatamente con agua corriente durante 10–15 minutos, manteniendo los párpados abiertos, y consulte a un médico.

:::

:::info[Lea las instrucciones antes del uso]

Siga atentamente este manual y el manual de usuario de AQU@Sense MB.

:::

## Contenido {#contents}

| Artículo | Cantidad | Número de documento de la ficha de datos de seguridad | Uso |
| --- | --- | --- | --- |
| Toallitas con alcohol (Alcohol Wipes) | 10 | — | Un solo uso |
| Solución de partículas (Beads Solution) | 10 | 50106 | Un solo uso |
| Solución de referencia (Reference Solution) | 10 | — | Un solo uso |
| Solución estéril (Sterile Solution) | 10 | — | Un solo uso |
| Soporte de tubos (Tube Holder) | 1 | — | Usos múltiples |

Deseche los artículos de un solo uso de acuerdo con la normativa local de eliminación de residuos. Las fichas de datos de seguridad están disponibles previa solicitud a BWT.

## Cuándo utilizar el kit de prueba de idoneidad del sistema {#when-to-use}

Realice una SST:

- Como parte del aseguramiento de la calidad y la validación, por ejemplo, durante la cualificación operacional, la cualificación del desempeño, el cambio de cartucho o el mantenimiento.
- Después de almacenar el instrumento durante más de un mes.
- Si hay indicios de que los resultados de medición podrían ser erróneos.

El procedimiento consta de tres partes, que se realizan en orden: [validación óptica](#optical-validation), [validación de referencia](#reference-validation) y [validación de esterilidad](#sterile-validation). Deben cumplirse todos los criterios de aceptación de las pruebas. El procedimiento dura aproximadamente **2.5 horas**.

## Preparativos {#preparations}

1. Verifique que el kit SST no haya caducado y que se haya almacenado en las condiciones especificadas.
2. Saque una toallita con alcohol, una solución de partículas, una solución de referencia, una solución estéril y el soporte de tubos.
3. Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado en AQU@Sense MB.
4. Desempaque la toallita con alcohol. Limpie la aguja de muestreo de arriba abajo para eliminar los contaminantes. Déjela secar durante **30 segundos**.
5. Inicie sesión en AQU@Sense MB con su nombre de usuario y contraseña personales. Se requieren permisos **Advanced** o **Admin**.
6. Abra **Home → Maintenance → Instrument validation**. Marque **Activate Instrument validation** y pulse **Save**.
7. Continúe con la parte A.

## Parte A: Validación óptica {#optical-validation}

Esta prueba comprueba el sistema óptico del instrumento mediante la medición de una solución que contiene partículas fluorescentes.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Seleccione **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Una vez finalizado, agite enérgicamente el tubo de solución de partículas durante **10 segundos**, a mano o con un agitador vórtex.
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
   | FL1 | Menor que 15 | 5.7–6.5 |
   | FL2 | Menor que 20 | 5.1–5.7 |
   | SSC | Menor que 25 | 4.7–6.3 |

   ![Ejemplo de resultados de validación óptica](/img/other-manuals/sst-optical-results.png "width=450")

8. Si la prueba cumple los criterios, retire el soporte, saque el tubo de solución de partículas, cierre su tapón y deséchelo. Continúe con la parte B.

   Si no los cumple, repita la prueba y asegúrese de que la solución de partículas esté bien mezclada. Si los fallos persisten, póngase en contacto con el servicio de asistencia de BWT.

## Parte B: Validación de referencia {#reference-validation}

Esta prueba comprueba el proceso automatizado de tinción del instrumento.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Retire el tapón de un tubo de solución de referencia e inserte el tubo completo en el soporte, como se muestra en la parte A. Una vez finalizado el protocolo de limpieza, retire la estación de lavado y acople el soporte con la solución de referencia.
4. Vuelva a la vista general de protocolos. Ejecute **Prime**, con **una réplica**.
5. Una vez finalizado, vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **una réplica**. En **Gates**, seleccione **ICC Default Gate**. Pulse **Next** e inicie el protocolo.
6. Compare las nubes principales de bacterias con los criterios de referencia:

   | Diagrama de puntos | Criterio de aceptación |
   | --- | --- |
   | FL1 / FL2 | Nube principal por encima de 4.5 en el eje FL1 y por debajo de 5 en el eje FL2 |
   | FL1 / SSC | Nube principal por encima de 2 y por debajo de 5.5 en el eje SSC |

   ![Diagramas de puntos de referencia con las nubes principales de bacterias rodeadas en naranja](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspecto de las nubes]

   Según el cartucho y las condiciones de almacenamiento, las nubes pueden diferir de las del ejemplo.

   :::

7. Si la prueba cumple los criterios, retire el soporte, saque el tubo de solución de referencia, cierre su tapón y deséchelo. Continúe con la parte C.

   Si no los cumple, repita la prueba con una solución de referencia nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de BWT.

## Parte C: Validación de esterilidad {#sterile-validation}

Esta prueba verifica la limpieza del dispositivo de muestreo y del sistema fluídico mediante la medición de agua libre de células.

1. Acople la estación de lavado al dispositivo de muestreo manual.
2. Abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Pulse **Next** e inicie el protocolo.
3. Retire el tapón de un tubo de solución estéril e inserte el tubo completo en el soporte, como se muestra en la parte A. Una vez finalizado el protocolo de limpieza, retire la estación de lavado y acople el soporte con la solución estéril.
4. Vuelva a la vista general de protocolos. Ejecute **Prime**, con **una réplica**.
5. Una vez finalizado, vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **una réplica**. Seleccione **ICC Default Gate**, pulse **Next** e inicie el protocolo.
6. Revise el resultado. El criterio de aceptación es **ICC menor que 100/mL**.
7. Si la prueba cumple el criterio, retire el soporte, saque el tubo de solución estéril, cierre su tapón y deséchelo. Devuelva el soporte al kit SST, almacene el kit en las condiciones especificadas y acople la estación de lavado al dispositivo de muestreo manual.

   Si no lo cumple, realice una descontaminación biológica con el kit de limpieza (Cleaning Kit). Repita la prueba con una solución estéril nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de BWT.

8. Abra **Home → Maintenance → Instrument validation**. Desmarque **Activate Instrument validation** y pulse **Save**.

La prueba de idoneidad del sistema se habrá completado correctamente cuando las tres partes hayan cumplido los criterios de aceptación.
