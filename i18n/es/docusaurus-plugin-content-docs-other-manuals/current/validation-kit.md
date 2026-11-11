---
id: validation-kit
title: Kit de validación para BactoSense
sidebar_position: 2
slug: /validation-kit
document_id: UM_0003-01
manual_version: "01"
---

## Información general {#general-information}

El kit de validación es un kit de reactivos utilizado para validar el correcto funcionamiento de BactoSense. Sus reactivos se han desarrollado para su uso después de medir muestras de agua potable. Es posible que el kit no sea eficaz si se ha almacenado en condiciones inadecuadas, si ha caducado o si se han medido muestras distintas de agua potable.

Almacene el kit refrigerado a **2–8 °C (35–47 °F)**, protegido de la luz. En estas condiciones, su vida útil es de **un año**. El kit permite realizar **10 validaciones**.

## Información de seguridad {#safety}

:::gloves[Use guantes de protección]

En caso de contacto con la piel, enjuague inmediatamente con abundante agua limpia. En caso de dolor o irritación, consulte a un médico.

:::

:::warning[Use gafas de protección]

En caso de contacto con los ojos, enjuáguelos inmediatamente con agua corriente durante 10–15 minutos, manteniendo los párpados separados, y consulte a un médico.

:::

:::info[Lea las instrucciones antes del uso]

Siga atentamente este manual y el [manual de usuario de BactoSense](/bactosense/).

:::

## Contenido {#contents}

| Artículo | Cantidad | Número de documento de la ficha de datos de seguridad | Uso |
| --- | --- | --- | --- |
| Toallitas con alcohol (Alcohol Wipes) | 10 | — | Un solo uso |
| Solución de microesferas (Beads Solution) | 10 | 50106 | Un solo uso |
| Solución de referencia (Reference Solution) | 10 | — | Un solo uso |
| Solución estéril (Sterile Solution) | 10 | — | Un solo uso |
| Portatubos (Tube Holder) | 1 | — | Usos múltiples |

Deseche los artículos de un solo uso conforme a la normativa local de eliminación de residuos. Las fichas de datos de seguridad (SDS) están disponibles previa solicitud a bNovate o a su distribuidor local.

## Cuándo utilizar el kit de validación {#when-to-use}

Realice una validación del instrumento:

- Después de un envío u otro transporte de larga distancia con vibraciones o golpes.
- Después de almacenar el instrumento durante más de un mes.
- Si hay indicios de que los resultados de medición podrían ser erróneos.

La validación completa consta de tres partes, que se realizan en orden: [validación óptica](#optical-validation), [validación de referencia](#reference-validation) y [validación de esterilidad](#sterile-validation). Deben cumplirse todos los criterios de aceptación. Una validación completa dura aproximadamente **3 horas**.

En casos específicos, se puede realizar una validación parcial. Complete primero los preparativos y, a continuación, siga la parte correspondiente.

## Preparativos {#preparations}

1. Verifique que el kit no haya caducado y que se haya almacenado en las condiciones especificadas.
2. Para una validación completa, extraiga una toallita con alcohol, una Beads Solution, una Reference Solution, una Sterile Solution y el portatubos. Para una validación parcial, tome únicamente la toallita, el portatubos y la solución correspondiente.
3. Asegúrese de que el dispositivo de muestreo manual esté firmemente instalado en BactoSense.
4. Desempaque la toallita con alcohol. Limpie la aguja de muestreo de arriba abajo para eliminar los contaminantes. Déjela secar durante **30 segundos**.
5. Inicie sesión como **Admin**. En **Home → Maintenance → Self-check**, pulse **Rerun**. Verifique que cada prueba muestre **PASS** en verde.
6. Abra **Home → Maintenance → Instrument validation**. Marque **Activate Instrument validation** y pulse **Save**.
7. Para una validación completa, continúe con la parte A. Para una validación parcial, continúe con la parte correspondiente.

## Parte A: Validación óptica {#optical-validation}

Esta prueba comprueba el sistema óptico mediante la medición de una solución que contiene partículas fluorescentes.

1. Complete los [preparativos](#preparations) si aún no lo ha hecho.
2. Acople la estación de lavado al dispositivo de muestreo manual. Si no dispone de una, acople un tubo de 5 mL con tapón de rosca, vacío y limpio.
3. Como **Admin**, abra **Home → Manual mode → Start**. Seleccione **Clean Sampling Device with Washstation**, con **una réplica**. Si no dispone de una estación de lavado, seleccione **Clean Sampling Device**, con **dos réplicas**. Pulse **Next** e inicie el protocolo.
4. Una vez finalizado, agite vigorosamente el tubo de Beads Solution durante **10 segundos**, a mano o con un agitador de vórtice.
5. Retire los tapones del tubo de Beads Solution y del portatubos. Introduzca el tubo abierto en el portatubos. Retire la estación de lavado y acople el portatubos que contiene la Beads Solution al dispositivo de muestreo manual.

   :::caution[Utilice el tubo de reactivo completo]

   Introduzca el tubo de reactivo completo en el portatubos, en lugar de verter su contenido en él.

   :::

   ![Apertura del tubo de reactivo e inserción del tubo completo en el portatubos](/img/other-manuals/tube-holder-insertion.png "width=650")

6. Abra **Home → Manual mode → Start**. Seleccione **Prime**, con **una réplica**. Pulse **Next** e inicie el protocolo.
7. Vuelva a la vista general de protocolos. Seleccione **Beads Analysis**, con **dos réplicas**. Pulse **Next** e inicie el protocolo.
8. Revise los resultados. Deben cumplirse todos los criterios siguientes:

   **TCC: 50,000–75,000/mL**

   | Canal | CV (%) | Mediana |
   | --- | --- | --- |
   | FL1 | Inferior a 15 | 5.7–6.5 |
   | FL2 | Inferior a 20 | 5.1–5.7 |
   | SSC | Inferior a 25 | 4.7–6.3 |

   ![Ejemplo de resultados de medición de la validación óptica](/img/other-manuals/validation-optical-results.png "width=450")

9. Si la prueba es satisfactoria, retire el portatubos, extraiga el tubo de Beads Solution, cierre su tapón y deséchelo. Continúe con la parte B.

   Si la prueba no es satisfactoria, compruebe la fecha de caducidad y las condiciones de almacenamiento del kit y, a continuación, repítala asegurándose de que la Beads Solution esté bien mezclada. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate o con su representante de servicio local.

## Parte B: Validación de referencia {#reference-validation}

Esta parte valida el proceso de tinción automatizado.

1. Complete los [preparativos](#preparations) si realiza esta parte por separado.
2. Acople la estación de lavado o, si no dispone de una, un tubo de 5 mL con tapón de rosca, vacío y limpio.
3. Como **Admin**, abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Si no dispone de una estación de lavado, ejecute **Clean Sampling Device**, con **dos réplicas**. Pulse **Next** e inicie el protocolo.
4. Retire el tapón del tubo de Reference Solution e introduzca el tubo completo en el portatubos, como se muestra en la parte A. Retire la estación de lavado y acople el portatubos que contiene la Reference Solution.
5. Abra **Home → Manual mode → Start**. Ejecute **Prime**, con **una réplica**.
6. Vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **dos réplicas**. En **Gates**, seleccione la región de análisis predeterminada para el tipo de cartucho, por ejemplo, **ICC Default Gate** o **TCC Default Gate**. Pulse **Next** e inicie el protocolo.
7. Compare las nubes principales de bacterias con los criterios de referencia:

   | Diagrama de puntos | Criterio de aceptación |
   | --- | --- |
   | FL1 / FL2 | Nube principal por encima de 4.5 en el eje FL1 y por debajo de 5 en el eje FL2 |
   | FL1 / SSC | Nube principal por encima de 2 y por debajo de 5.5 en el eje SSC |

   ![Diagramas de puntos de referencia con las nubes principales de bacterias rodeadas en naranja](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspecto de las nubes]

   Según el cartucho y las condiciones de almacenamiento, las nubes pueden diferir del ejemplo.

   :::

8. Si la prueba es satisfactoria, retire el portatubos, extraiga el tubo de Reference Solution, cierre su tapón y deséchelo. Continúe con la parte C.

   Si la prueba no es satisfactoria, compruebe la fecha de caducidad y las condiciones de almacenamiento del kit. Repita la prueba con una Reference Solution nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate o con su representante de servicio local.

## Parte C: Validación de esterilidad {#sterile-validation}

Esta parte valida la limpieza de BactoSense mediante la medición de agua libre de células.

1. Complete los [preparativos](#preparations) si realiza esta parte por separado.
2. Acople la estación de lavado o, si no dispone de una, un tubo de 5 mL con tapón de rosca, vacío y limpio.
3. Como **Admin**, abra **Home → Manual mode → Start**. Ejecute **Clean Sampling Device with Washstation**, con **una réplica**. Si no dispone de una estación de lavado, ejecute **Clean Sampling Device**, con **dos réplicas**. Pulse **Next** e inicie el protocolo.
4. Retire el tapón del tubo de Sterile Solution e introduzca el tubo completo en el portatubos, como se muestra en la parte A. Retire la estación de lavado y acople el portatubos que contiene la Sterile Solution.
5. Abra **Home → Manual mode → Start**. Ejecute **Prime**, con **una réplica**.
6. Vuelva a la vista general de protocolos. Seleccione **Water Analysis**, con **dos réplicas**. En **Gates**, seleccione **ICC Default Gate** o **TCC Default Gate**, según el cartucho. Pulse **Next** e inicie el protocolo.
7. Revise los resultados. Debe cumplirse el criterio aplicable:

   | Cartucho | Criterio de aceptación |
   | --- | --- |
   | TCC | TCC inferior a 300/mL |
   | ICC | ICC inferior a 100/mL |

8. Si la prueba es satisfactoria, retire el portatubos, extraiga el tubo de Sterile Solution, cierre su tapón y deséchelo. Devuelva el portatubos al kit de validación y acople la estación de lavado al dispositivo de muestreo manual.

   Si la prueba no es satisfactoria, compruebe la fecha de caducidad y las condiciones de almacenamiento del kit. Realice una [descontaminación biológica](cleaning-kit.md#biological-contamination) y, a continuación, repita la prueba con una Sterile Solution nueva. Si los fallos persisten, póngase en contacto con el servicio de asistencia de bNovate o con su representante de servicio local.

9. Abra **Home → Maintenance → Instrument validation**. Desmarque **Activate Instrument validation** y pulse **Save**.

El instrumento se habrá validado correctamente cuando todas las partes requeridas hayan sido satisfactorias.
