---
title: "11. Resultados y análisis de datos"
sidebar_label: "11. Resultados y análisis de datos"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Resultados de medición {#section-11-1}

La figura siguiente muestra el resultado de una medición seleccionada. Desde aquí, el usuario puede eliminar la medición o cambiarle el nombre, consultar resultados anteriores (y exportarlos) o exportar el resultado. Los usuarios expertos pueden repetir el recuento celular con nuevas regiones de análisis. Algunos elementos o acciones de la interfaz solo están disponibles para determinadas funciones de usuario (Basic, Advanced o Admin).

<img src="/img/figures-second/figure-1dc7da95b4adc8.webp" alt="Figura 11-1 Visualización del resultado de una medición ICC." width="674" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Ilustración del manual de usuario de BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-1 Visualización del resultado de una medición ICC.*

<table className="manual-table"><tbody><tr><td>1</td><td>Parámetros principales del resultado, según el tipo de cartucho utilizado. Encontrará más información en la sección 11.3. Pulse el icono de información junto al resultado principal para mostrar todos los parámetros del resultado (2).</td></tr><tr><td>2</td><td>Ventana de información del resultado con todos los parámetros disponibles y el diagrama de puntos principal.</td></tr><tr><td>3</td><td>Diagrama de puntos principal en la ventana de información del resultado. El diagrama FL1 frente a FL2 muestra todos los eventos detectados según la amplitud de sus señales de fluorescencia FL1 (535 nm, eje X) y FL2 (715 nm, eje Y). El polígono rojo y la línea vertical muestran la región configurada. Para obtener más detalles, consulte la sección 11.3. Al pulsar esta vista previa, se abre una ventana emergente con acceso a todos los diagramas de puntos (4).</td></tr></tbody></table>

<table className="manual-table"><tbody><tr><td>4</td><td>Ventana emergente con acceso a todos los diagramas de puntos. El diagrama FL1 frente a SSC muestra solo las células dentro de la región poligonal FL1 - FL2, según su señal de fluorescencia FL1 (535 nm) y su señal de luz dispersada SSC (488 nm). El histograma FL1 muestra todas las células dentro de la región poligonal FL1 - FL2, agrupadas en intervalos según su fluorescencia FL1. Los diagramas disponibles dependen del modelo y la configuración del instrumento.</td></tr><tr><td>5</td><td>El campo opcional de advertencias indica si se ha generado alguna advertencia durante la medición. Pulse el campo para obtener más información.</td></tr><tr><td>6</td><td>El botón Delete elimina la medición de forma permanente (requiere confirmación).</td></tr><tr><td>7</td><td>El botón Rename permite cambiar el nombre de la medición.</td></tr><tr><td>8</td><td>El botón Re-Gate result permite aplicar otras regiones de análisis a los datos de medición. Para obtener más detalles, consulte la sección 11.4.1.</td></tr><tr><td>9</td><td>El botón Export permite guardar este resultado en una memoria USB. Encontrará más información en la sección 10.8.1.</td></tr><tr><td>10</td><td>Los botones de navegación a la izquierda y derecha de la vista de resultados permiten ir a las mediciones anterior y siguiente, respectivamente.</td></tr></tbody></table>

:::info[Seleccione varias mediciones]

Selección múltiple y operaciones por lotes: en la lista de mediciones, mantenga pulsada una medición para activar la selección múltiple y, a continuación, seleccione Delete / Re-gate o Export.

:::

## 11.2 Introducción a las regiones de análisis {#section-11-2}

De acuerdo con los estándares de citometría de flujo, BactoSense utiliza regiones de análisis para contar las células de las muestras.

Se definen los siguientes términos:

- Región de análisis (Gate): línea o polígono aplicado a un diagrama de puntos para cuantificar poblaciones de células medidas.
- Conjunto de regiones de análisis (gating set): colección de dos o más regiones utilizadas en la estrategia de análisis. Los tipos de regiones son fijos, pero los usuarios pueden cambiar los límites de cada una. Son diferentes para las mediciones TCC e ICC.
- Estrategia de análisis (gating strategy): define cómo se combinan las regiones para contar células. Por ejemplo, HNAC es el número de células que están dentro del polígono TCC y por encima del límite inferior HNA. Estas estrategias son diferentes para las mediciones TCC e ICC.

Los conjuntos de regiones son específicos de un tipo de cartucho. Por ejemplo, solo pueden utilizarse conjuntos de tipo TCC con mediciones realizadas con un cartucho TCC.

### 11.2.1 Conjuntos de regiones predeterminados {#section-11-2-1}

BactoSense dispone de conjuntos de regiones preconfigurados para todos los tipos de cartucho disponibles. Se denominan conjuntos de regiones predeterminados. Se han diseñado cuidadosamente para ser aplicables a la gran mayoría de las muestras.

- Las regiones predeterminadas de BactoSense se encuentran pulsando Gate settings en el menú Home de la interfaz de usuario.
- Los conjuntos de regiones predeterminados no pueden modificarse ni eliminarse.
- Pueden crearse nuevos conjuntos de regiones editando una copia de un conjunto existente, como se describe en la sección 11.4.2.

### 11.2.2 Lista de conjuntos de regiones y operaciones disponibles {#section-11-2-2}

La lista de todos los conjuntos de regiones disponibles en BactoSense se encuentra pulsando Gate settings en el menú Home de la interfaz de usuario.

<img src="/img/figures-second/figure-899e3c5869ed8f.webp" alt="Figura 11-2 Lista de conjuntos de regiones disponibles y opciones para copiar y crear conjuntos nuevos. Las regiones predeterminadas están preconfiguradas y no pueden eliminarse ni editarse." width="599" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Ilustración del manual de usuario de BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-2 Lista de conjuntos de regiones disponibles y opciones para copiar y crear conjuntos nuevos. Las regiones predeterminadas están preconfiguradas y no pueden eliminarse ni editarse.*

<table className="manual-table"><tbody><tr><td>1</td><td>Ejemplo de una región personalizada para el cartucho ICC.</td><td>2</td><td>Región predeterminada ICC. Las regiones predeterminadas están preconfiguradas.</td></tr><tr><td>3</td><td>Región predeterminada doble ICC. Este conjunto contiene una región poligonal adicional configurable. Nota: algunos modelos requieren una función adicional para utilizar esta región (véase la sección 9.1).</td><td>4</td><td>Tipos de regiones, para utilizar con el tipo de cartucho correspondiente.</td></tr><tr><td>5</td><td>Eliminar un conjunto de regiones existente. Las regiones predeterminadas no pueden eliminarse.</td><td>6</td><td>Vista previa del conjunto de regiones.</td></tr><tr><td>7</td><td>Crear una copia del conjunto de regiones.</td><td>8</td><td>Editar el conjunto de regiones. Las regiones predeterminadas no pueden editarse.</td></tr><tr><td>9</td><td>Crear un conjunto de regiones nuevo.</td><td></td><td></td></tr></tbody></table>

## 11.3 Cartuchos, regiones de análisis y parámetros de resultados {#section-11-3}

Según el cartucho utilizado en una medición, se miden distintos parámetros. Los tipos de cartucho disponibles son TCC (recuento total de células), ICC (recuento de células intactas), EBC (recuento de células de E. coli), ACC (recuento de células activas), CBC (recuento de células coliformes) y NBC (recuento de células de enterococos). Las subsecciones siguientes describen los conjuntos de regiones y los parámetros de resultados de los cartuchos TCC, ICC y ACC.

### 11.3.1 Cartucho TCC {#section-11-3-1}

TCC significa Total Cell Count (recuento total de células). Por tanto, el cartucho TCC se utiliza para medir la concentración de todas las células.

**Tabla 11-1 Conjunto de regiones utilizado para el cartucho TCC.**

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| TCC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células (TCC). |
| Límite inferior HNA | Línea vertical | Umbral en FL1. Los puntos dentro de TCC pero con FL1 superior al límite inferior HNA se cuentan como HNAC. Los puntos dentro de TCC pero por debajo del límite se cuentan como LNAC. |

**Tabla 11-2 Parámetros de resultados obtenidos con el cartucho TCC.**

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| TCC | 1/mL | Recuento total de células | Número total de células detectadas dentro de la región TCC. Es la suma de HNAC y LNAC: TCC = HNAC + LNAC. |
| HNAP | % | Porcentaje de células con alto contenido de ácidos nucleicos | Porcentaje de células HNA respecto a TCC:<br/>HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Recuento de células con bajo contenido de ácidos nucleicos | Número de células dentro de la región TCC, pero por debajo del límite inferior HNA (región de línea vertical). |
| HNAC | 1/mL | Recuento de células con alto contenido de ácidos nucleicos | Número de células dentro de la región TCC y por encima del límite inferior HNA (región de línea vertical). |

Para obtener más información sobre el ajuste de las regiones, consulte la sección 11.4.

### 11.3.2 Cartucho ICC {#section-11-3-2}

ICC significa Intact Cell Count (recuento de células intactas). Por tanto, el cartucho ICC se utiliza para medir la concentración de células intactas.

**Tabla 11-3 Conjunto de regiones utilizado para el cartucho ICC.**

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| ICC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células intactas (ICC). |
| Límite inferior HNA | Línea vertical | Umbral en FL1. Los puntos dentro de ICC pero con FL1 superior al límite inferior HNA se cuentan como HNAC. Los puntos dentro de ICC pero por debajo del límite se cuentan como LNAC. |

**Tabla 11-4 Parámetros de resultados obtenidos con el cartucho ICC.**

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| ICC | 1/mL | Recuento de células intactas | Número total de células intactas dentro de la región ICC: ICC = HNAC + LNAC. |
| HNAP | % | Porcentaje de células con alto contenido de ácidos nucleicos | Porcentaje de células HNA respecto a ICC:<br/>HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Recuento de células con bajo contenido de ácidos nucleicos | Número de células LNA dentro de la región ICC, pero por debajo del límite inferior HNA (región de línea vertical). |
| HNAC | 1/mL | Recuento de células con alto contenido de ácidos nucleicos | Número de células HNA dentro de la región ICC y por encima del límite inferior HNA (región de línea vertical). |

Para obtener más información sobre el ajuste de las regiones, consulte la sección 11.4.

### 11.3.3 Cartucho ACC {#section-11-3-3}

ACC significa Active Cell Count (recuento de células activas). Por tanto, el cartucho ACC se utiliza para medir la concentración de células metabólicamente activas mediante un ensayo enzimático.

**Tabla 11-5 Conjunto de regiones utilizado para el cartucho ACC.**

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| ACC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células activas (ACC). |
| Límite inferior HACC | Línea vertical | Umbral en FL1. Los puntos dentro de ACC pero con FL1 superior al límite inferior HACC se cuentan como HACC. Los puntos dentro de ACC pero por debajo del límite se cuentan como LACC. |

**Tabla 11-6 Parámetros de resultados obtenidos con el cartucho ACC.**

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| ACC | 1/mL | Recuento de células activas | Número total de células activas dentro de la región ACC: ACC = HACC + LACC. |
| HACC | 1/mL | Recuento de células altamente activas | Número de células activas cuya intensidad FL1 supera la región vertical HACC. |
| LACC | 1/mL | Recuento de células con baja actividad | Número de células activas cuya intensidad FL1 está por debajo de la región vertical HACC. |
| HACP | % | Porcentaje de células altamente activas | Porcentaje de HACC respecto a ACC.<br/>HACP = (HACC / ACC) × 100 |

Para obtener más información sobre el ajuste de las regiones, consulte la sección 11.4.

## 11.4 Cambio de las regiones de análisis {#section-11-4}

### 11.4.1 Reanálisis de mediciones con otras regiones {#section-11-4-1}

El reanálisis (regating) consiste en aplicar un conjunto de regiones diferente a datos de medición existentes.

- Para reanalizar, es necesario disponer de ese conjunto adicional. Encontrará todos los conjuntos disponibles para su tipo de cartucho pulsando Gate settings en el menú Home de la interfaz de BactoSense.
- La modificación de un conjunto de regiones existente se describe en la sección 11.4.3.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">PASO DE TRABAJO</th><th scope="col">INFORMACIÓN ADICIONAL / IMÁGENES</th></tr><tr><td>1.</td><td>Vaya al menú Home de la interfaz de usuario de BactoSense.</td><td></td></tr><tr><td>2.</td><td>Según cómo se haya realizado la medición, pulse Results (manual) o Results (auto) para ver la lista de resultados.</td><td></td></tr><tr><td>3.</td><td>Para reanalizar una sola medición, selecciónela para acceder a la página de detalles del resultado. Para reanalizar varias mediciones (por lotes), mantenga pulsada una medición hasta que quede resaltada y aparezca una casilla a la izquierda. A continuación, pulse otras mediciones para seleccionarlas también.</td><td></td></tr><tr><td>4.</td><td>Pulse el botón Re-gate.</td><td></td></tr><tr><td>5.</td><td>Seleccione el conjunto de regiones deseado marcando su casilla.</td><td></td></tr><tr><td>6.</td><td>Pulse el botón Confirm para iniciar el reanálisis.</td><td><Admonition type="info" title="Información adicional">Según el número de mediciones, el reanálisis puede tardar varios minutos.</Admonition></td></tr><tr><td>7.</td><td>Al finalizar, pulse OK.</td><td></td></tr></tbody></table>

### 11.4.2 Creación de un conjunto de regiones nuevo {#section-11-4-2}

Pueden crearse conjuntos de regiones nuevos a partir de una copia de un conjunto existente o desde cero.

Creación de un conjunto de regiones nuevo a partir de una copia

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Vaya al menú Home de la interfaz de usuario de BactoSense. |  |
| 2. | Pulse el botón Gate settings. |  |
| 3. | En la lista de conjuntos de regiones disponibles, identifique el conjunto del que desea hacer una copia para crear el nuevo conjunto. | Asegúrese de que el tipo de región (p. ej., TCC, ICC) coincida con la aplicación prevista. |
| 4. | Pulse el icono Copy para crear una copia del conjunto de regiones. |  |
| 5. | En la copia recién generada, pulse el icono Edit y siga las instrucciones de edición de la sección 11.4.3. | <img src="/img/manual/cell-95fee81e2625.png" alt="Ilustración de la tabla de la página 105 del manual" width="264" className="manual-figure" loading="lazy"/> |

Creación de un conjunto de regiones nuevo desde cero

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Vaya al menú Home de la interfaz de usuario de BactoSense. |  |
| 2. | Pulse el botón Gate settings. |  |
| 3. | En la barra de acciones de la parte inferior, pulse New. |  |
| 4. | En el campo de nombre, escriba un nombre para el conjunto de regiones. En el campo de tipo, seleccione el tipo de cartucho con el que se utilizará. |  |
| 5. | A continuación, siga el asistente de configuración de regiones en pantalla, tal como se describe en las instrucciones de edición de la sección 11.4.3. |  |
| 6. | Al finalizar, podrá seleccionar el conjunto nuevo al crear mediciones o reanalizar mediciones existentes, como se describe en la sección 11.4.1. |  |

### 11.4.3 Edición de conjuntos de regiones existentes {#section-11-4-3}

Excepto los conjuntos predeterminados, todos los conjuntos de regiones pueden modificarse. La edición puede incluir el cambio de nombre, la modificación de la posición de la región vertical y el cambio del número y la posición de los vértices de la región poligonal.

Esta sección describe el proceso general de edición de un conjunto de regiones. La sección 11.4.4 describe una estrategia específica para ajustar conjuntos de regiones de mediciones TCC e ICC.

<img src="/img/figures-second/figure-8dc71f8c5efcd4.webp" alt="Figura 11-3 Ajustes de regiones para TCC" width="576" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Ilustración del manual de usuario de BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-3 Ajustes de regiones para TCC*

<table className="manual-table"><tbody><tr><td>①</td><td>Coordenadas de los puntos de la región. a: primer punto; b: segundo punto; c: tercer punto; d: cuarto punto.</td><td>②</td><td>Eliminar un punto de la región.</td></tr><tr><td>③</td><td>Añadir un nuevo punto a la región.</td><td>④</td><td>Modificar la coordenada seleccionada. En esta captura está seleccionada la coordenada FL1 (a, FL1) del primer punto, por lo que podemos mover ese punto de la región a lo largo del eje FL1 (eje X).</td></tr><tr><td>⑤</td><td>Límite inferior HNA: esta región se define en la pantalla siguiente.</td><td>⑥</td><td>Vista previa</td></tr></tbody></table>

El procedimiento siguiente describe cómo ajustar una región:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Vaya al menú Home de la interfaz de usuario de BactoSense. | <img src="/img/manual/cell-d07318a281b1.png" alt="Ilustración de la tabla de la página 107 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 2. | Pulse el botón Gate settings. | <img src="/img/manual/cell-882cf24141b5.png" alt="Ilustración de la tabla de la página 107 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 3. | Pulse el botón Edit de la región que desea editar. | <img src="/img/manual/cell-fd72b5bdcc2a.png" alt="Ilustración de la tabla de la página 107 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Cambie el nombre si lo desea y pulse el botón Next. |  |
| 5. | Ajuste el número y la posición de los vértices del polígono (para TCC e ICC, consulte la sección 11.4.4). Una región poligonal puede tener entre 3 y 6 vértices. | <img src="/img/manual/cell-7440601f6ebb.png" alt="Ilustración de la tabla de la página 107 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 6. | Pulse el botón Next. |  |
| 7. | Introduzca el límite inferior HNA (para TCC e ICC, consulte la sección 11.4.4). | <img src="/img/manual/cell-ec7e624b3c7f.png" alt="Ilustración de la tabla de la página 107 del manual" width="282" className="manual-figure" loading="lazy"/> |
| 8. | Pulse el botón Save y confirme. |  |
| 9. | Al finalizar, podrá seleccionar el conjunto modificado al crear mediciones o reanalizar mediciones existentes, como se describe en la sección 11.4.1. |  |

### 11.4.4 Estrategia de ajuste de regiones para TCC e ICC {#section-11-4-4}

BactoSense se suministra con conjuntos de regiones predeterminados adecuados para la gran mayoría de las muestras. No obstante, los usuarios avanzados pueden ajustar las regiones si es necesario. A continuación se explica un procedimiento general de ajuste válido tanto para los cartuchos TCC como para los ICC.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">PASO DE TRABAJO</th><th scope="col">INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>Mida una muestra de agua con el protocolo estándar Water analysis. En la página Result details, el diagrama FL1 frente a FL2 muestra: 1) células LNA y HNA del agua; 2) ruido eléctrico de los detectores ópticos; 3) residuos/ruido de fondo (puede incluir células dañadas, agregados u otras partículas).</td><td><img src="/img/manual/cell-564a3512838d.png" alt="Ilustración de la tabla de la página 108 del manual" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>2.</td><td>Vaya al menú Home de la interfaz de BactoSense y pulse el botón Gate settings.</td><td></td></tr><tr><td>3.</td><td>Según sus necesidades, realice una de las acciones siguientes:<br />• Crear un conjunto de regiones nuevo.<br />• Editar un conjunto existente.<br />• Copiar un conjunto existente y editar la copia.</td><td></td></tr><tr><td>4.</td><td>Asigne un nombre a este conjunto de regiones y pulse Next.</td><td></td></tr><tr><td>5.</td><td>Coloque la región poligonal en ambos extremos (izquierdo y derecho). Por ejemplo, utilice estos cuatro puntos:<table className="manual-table"><tbody><tr><td>FL1</td><td>FL2</td></tr><tr><td>3.0</td><td>0.0</td></tr><tr><td>3.0</td><td>6.1</td></tr><tr><td>6.5</td><td>6.1</td></tr><tr><td>6.5</td><td>0.0</td></tr></tbody></table></td><td><img src="/img/manual/cell-374bfaa7d23b.png" alt="Ilustración de la tabla de la página 108 del manual" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>6.</td><td>Pulse Next y Save. Confirme que desea guardar el conjunto nuevo.</td><td></td></tr><tr><td>7.</td><td>Vaya a la vista de resultados de la muestra de agua medida anteriormente.</td><td></td></tr></tbody></table>

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 8. | En la vista de resultados, pulse el botón Re-gate result. |  |
| 9. | Seleccione la región recién creada y vuelva a procesar los datos con ella pulsando Confirm. |  |
| 10. | Abra el histograma FL1 y localice el primer valle después del pico de ruido, es decir, el primer mínimo después del pico situado en el extremo izquierdo (flecha en la imagen). Anote el valor FL1 de ese mínimo (p. ej., 3.8). | <img src="/img/manual/cell-d44e977152e1.png" alt="Ilustración de la tabla de la página 109 del manual" width="252" className="manual-figure" loading="lazy"/> |
| 11. | Vuelva a Gate settings y edite de nuevo la región. Coloque sus límites izquierdos en el valor FL1 determinado anteriormente. Así se excluye el ruido eléctrico de los detectores ópticos. Si es necesario, para el eje FL2, coloque los puntos “b” y “c” de la región justo por debajo de la zona de residuos/fondo (que suele aparecer como diagonales rectas). | <img src="/img/manual/cell-67de70c6bd1f.png" alt="Ilustración de la tabla de la página 109 del manual" width="252" className="manual-figure" loading="lazy"/> |
| 12. | Guarde la región ajustada. |  |
| 13. | Vaya de nuevo a la vista de resultados de la muestra de agua medida anteriormente. |  |
| 14. | En la vista de resultados, pulse el botón Re-gate result. |  |
| 15. | Seleccione la región recién creada y vuelva a procesar los datos con ella pulsando Confirm. |  |

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 16. | Para colocar el límite inferior HNA, abra de nuevo el histograma FL1 y localice el mínimo entre los picos LNA y HNA (línea vertical de la imagen). Anote su valor FL1 (p. ej., 4.8). | <img src="/img/manual/cell-3dd4365d2ad3.png" alt="Ilustración de la tabla de la página 110 del manual" width="252" className="manual-figure" loading="lazy"/> |
| 17. | Vuelva a Gate settings y edite de nuevo la región. |  |
| 18. | Vaya al paso de configuración del límite inferior HNA. Introduzca el límite identificado anteriormente en el campo FL1, pulse Save y confirme. |  |
| 19. | Reanalice de nuevo la medición del agua y compruebe que la región sea adecuada. Ajústela de nuevo si es necesario. |  |

## 11.5 Análisis avanzado de datos {#section-11-5}

Los datos de medición de BactoSense pueden exportarse en formato de archivo Flow Cytometry Standard (FCS) 3.1. El formato FCS está normalizado por la International Society for Advancement of Cytometry (ISAC) para garantizar la interoperabilidad entre distintos instrumentos de citometría de flujo y programas de análisis. Existen distintas versiones del formato FCS, cada una con mejoras y funciones adicionales. Los datos FCS pueden utilizarse para un procesamiento posterior personalizado sin conexión, como la aplicación de estrategias complejas de regiones, la obtención de “huellas microbianas”, la detección automática de anomalías y muchas otras aplicaciones.

### 11.5.1 Obtención de archivos FCS {#section-11-5-1}

Los archivos FCS pueden obtenerse de las siguientes formas:

- Descarga a una memoria USB: mediante la función Export all (véase la sección 12.1.1).

- Descarga desde la interfaz web, como archivos individuales (véase la sección 13.4) o varios archivos (véase la sección 13.5).

- Acceso mediante FTP (véase la sección 12.2).

- Acceso mediante HTTPS (véase la sección 12.3).

Si necesita ayuda para configurar una cadena de herramientas de análisis avanzado de datos, póngase en contacto con support@bnovate.com.

## 11.6 Comparación con otros citómetros de flujo {#section-11-6}

Para comparar los resultados de BactoSense con los de otro citómetro de flujo, puede analizarse una solución de referencia con microesferas autofluorescentes. Este método permite comparar las escalas de medición de distintos dispositivos.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">PASO DE TRABAJO</th><th scope="col" colSpan="2">INFORMACIÓN ADICIONAL / IMAGEN</th></tr><tr><td>1.</td><td>Se recomienda utilizar el Validation Kit, que contiene una solución de microesferas lista para usar.</td><td colSpan="2">Lea las instrucciones del Validation Kit para obtener más información.</td></tr><tr><td>2.</td><td>Instale el dispositivo de muestreo manual según el manual de usuario.</td><td colSpan="2"></td></tr><tr><td>3.</td><td>Tome una de las soluciones de microesferas del Validation Kit y colóquela en el dispositivo de muestreo.</td><td colSpan="2">Lea las instrucciones del Validation Kit para obtener más información.</td></tr><tr><td>4.</td><td><Admonition type="info" title="Información adicional">Pulse el botón Home. Pulse Back tantas veces como sea necesario para que aparezca Home.</Admonition></td><td><img src="/img/manual/cell-d07318a281b1.png" alt="Ilustración de la tabla de la página 112 del manual" width="119" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-05da61fc8424.png" alt="Ilustración de la tabla de la página 112 del manual" width="119" className="manual-figure" loading="lazy" /></td></tr><tr><td>5.</td><td>En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>Elija el protocolo Prime en la lista.</td><td colSpan="2">Véase la sección 10.9.3.</td></tr><tr><td>7.</td><td>Pulse los botones Next y Start. Espere a que termine el protocolo de cebado.</td><td colSpan="2"></td></tr><tr><td>8.</td><td>Elija el protocolo Beads Analysis en la lista y ejecútelo.</td><td colSpan="2"></td></tr><tr><td>9.</td><td>Espere a los resultados y, si es necesario, ajuste con precisión la región del diagrama FL1 frente a FL2 para contar solo las 4 poblaciones de microesferas. Asegúrese de que el ruido, el fondo y los residuos no se cuenten dentro de la región.</td><td colSpan="2">Consulte la sección 11.4.3 para ajustar la región.<br /><img src="/img/manual/render-fa85ea9255cb.webp" alt="Ilustración de la tabla de la página 112 del manual" width="246" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 10. | En el histograma FL1 frente a recuentos, estime el valor logarítmico del centro de cada pico en el eje FL1. En este ejemplo, se obtiene aproximadamente (en log): 1.<sup>er</sup> pico = 4.05; 2.<sup>º</sup> pico = 4.3; 3.<sup>er</sup> pico = 5.35; 4.<sup>º</sup> pico = 6.2. | <img src="/img/manual/cell-c2ba9a559620.png" alt="Ilustración de la tabla de la página 113 del manual" width="248" className="manual-figure" loading="lazy"/> |
| 11. | Mida las mismas microesferas con el otro citómetro de flujo que desea comparar y repita los pasos 10 y 11. En este ejemplo, se obtiene aproximadamente (en log): 1.<sup>er</sup> pico = log(10<sup>3</sup>) = 3; 2.<sup>º</sup> pico = log(2*10<sup>3</sup>) = 3.3; 3.<sup>er</sup> pico = log(2.4*10<sup>4</sup>) = 4.4; 4.<sup>º</sup> pico = log(1.6*10<sup>5</sup>) = 5.2. | <img src="/img/manual/cell-4c2343e0bbfe.png" alt="Ilustración de la tabla de la página 113 del manual" width="248" className="manual-figure" loading="lazy"/> |
| 12. | Con los distintos valores obtenidos para ambos dispositivos, ya es posible comparar sus escalas y sus ventanas de medición. |  |
