---
title: "11. Resultados y análisis de datos"
sidebar_label: "11. Resultados y análisis de datos"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Resultados de medición {#section-11-1}

La figura siguiente muestra el resultado de una medición TCC seleccionada en modo en línea. Desde aquí, el usuario puede eliminar la medición o cambiarle el nombre, consultar resultados anteriores (y exportarlos) o exportar el resultado. Los usuarios expertos pueden repetir el recuento celular con nuevas regiones de análisis. Algunos elementos o acciones de la interfaz solo están disponibles para determinadas funciones de usuario (Basic, Advanced o Admin).

![BactoSense — Detalles y gráficos del resultado en línea](/img/gui/es/online-result-details.png "width=674 class=manual-figure")

*Figura 11-1 Visualización del resultado de una medición TCC en modo en línea.*

|  |  |
| --- | --- |
| 1 | Parámetros principales del resultado, según el tipo de cartucho utilizado. Encontrará más información en la sección [Cartuchos, regiones de análisis y parámetros de resultados](../results-and-data-analysis/#section-11-3). Pulse el icono de información junto al resultado principal para mostrar todos los parámetros del resultado (2). |
| 2 | Ventana de información del resultado con todos los parámetros disponibles y el diagrama de puntos principal. |
| 3 | Diagrama de puntos principal en la ventana de información del resultado. El diagrama FL1 frente a FL2 muestra todos los eventos detectados según la amplitud de sus señales de fluorescencia FL1 (535 nm, eje X) y FL2 (715 nm, eje Y). El polígono rojo y la línea vertical muestran la región configurada. Para obtener más detalles, consulte la sección [Cartuchos, regiones de análisis y parámetros de resultados](../results-and-data-analysis/#section-11-3). Al pulsar esta vista previa, se abre una ventana emergente con acceso a todos los diagramas de puntos (4). |
| 4 | Ventana emergente con acceso a todos los diagramas de puntos. El diagrama FL1 frente a SSC muestra solo las células dentro de la región poligonal FL1 - FL2, según su señal de fluorescencia FL1 (535 nm) y su señal de luz dispersada SSC (488 nm). El histograma FL1 muestra todas las células dentro de la región poligonal FL1 - FL2, agrupadas en intervalos según su fluorescencia FL1. Los diagramas disponibles dependen del modelo y la configuración del instrumento. |
| 5 | El campo de estado de la medición indica alarmas o advertencias. Pulse una indicación de alarma o advertencia para ver sus detalles. |
| 6 | El botón Borrar elimina la medición de forma permanente (requiere confirmación). |
| 7 | El botón Cambie el nombre de permite cambiar el nombre de la medición. |
| 8 | El botón Resultado de re-gate permite aplicar otras regiones de análisis a los datos de medición. Para obtener más detalles, consulte la sección [Reanálisis de mediciones con otras regiones](../results-and-data-analysis/#section-11-4-1). |
| 9 | El botón Exportar permite guardar este resultado en una memoria USB. Encontrará más información en la sección [Exportación a una memoria USB](../measurements/#section-10-8-1). |
| 10 | Los botones de navegación a la izquierda y derecha de la vista de resultados permiten ir a las mediciones anterior y siguiente, respectivamente. |
| 11 | Pulse el gráfico de tendencias para abrir el gráfico del modo automático (el gráfico completo de resultados en línea). Véase [Revisión de las mediciones automáticas en línea](../measurements/#section-10-2-3). |

:::info[Seleccione varias mediciones]

Selección múltiple y operaciones por lotes: en la lista de mediciones, mantenga pulsada una medición para activar la selección múltiple y, a continuación, seleccione Borrar / Re-gate o Exportar.

:::

Para mostrar solo algunas mediciones en la lista de resultados, fíltrelas por fecha, nombre o línea BactoSwitch; véase [Filtrado de mediciones](../measurements/#section-10-7).

## 11.2 Introducción a las regiones de análisis {#section-11-2}

De acuerdo con los estándares de citometría de flujo, BactoSense utiliza regiones de análisis para contar las células de las muestras.

Se definen los siguientes términos:

- Región de análisis (Gate): línea o polígono aplicado a un diagrama de puntos para cuantificar poblaciones de células medidas.
- Conjunto de regiones de análisis (gating set): colección de dos o más regiones utilizadas en la estrategia de análisis. Los tipos de regiones son fijos, pero los usuarios pueden cambiar los límites de cada una. Son diferentes para las mediciones TCC e ICC.
- Estrategia de análisis (gating strategy): define cómo se combinan las regiones para contar células. Por ejemplo, HNAC es el número de células que están dentro del polígono TCC y por encima del límite inferior HNA. Estas estrategias son diferentes para las mediciones TCC e ICC.

Los conjuntos de regiones son específicos de un tipo de cartucho. Por ejemplo, solo pueden utilizarse conjuntos de tipo TCC con mediciones realizadas con un cartucho TCC.

### 11.2.1 Conjuntos de regiones predeterminados {#section-11-2-1}

BactoSense dispone de conjuntos de regiones preconfigurados para todos los tipos de cartucho disponibles. Se denominan conjuntos de regiones predeterminados. Se han diseñado cuidadosamente para ser aplicables a la gran mayoría de las muestras.

- En la pantalla Home, pulse Ajustes y después Ajustes de la compuerta para ver los conjuntos de regiones disponibles.
- Los conjuntos de regiones predeterminados no pueden modificarse ni eliminarse.
- Pueden crearse nuevos conjuntos de regiones editando una copia de un conjunto existente, como se describe en la sección [Creación de un conjunto de regiones nuevo](11-results-and-data-analysis.md#section-11-4-2).

### 11.2.2 Lista de conjuntos de regiones y operaciones disponibles {#section-11-2-2}

En la pantalla Home, pulse Ajustes y después Ajustes de la compuerta para ver los conjuntos de regiones disponibles.

![BactoSense — Lista de gates](/img/gui/es/gate-settings-list.png "width=599 class=manual-figure")

*Figura 11-2 Lista de conjuntos de regiones disponibles y opciones para copiar y crear conjuntos nuevos. Las regiones predeterminadas están preconfiguradas y no pueden eliminarse ni editarse.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Ejemplo de una región personalizada para el cartucho ICC. | 2 | Región predeterminada ICC. Las regiones predeterminadas están preconfiguradas. |
| 3 | Región predeterminada doble ICC. Este conjunto contiene una región poligonal adicional configurable. Nota: algunos modelos requieren una función adicional para utilizar esta región (véase la sección [Paquete Scientific](../upgrade-packages/#section-9-1)). | 4 | Tipos de regiones, para utilizar con el tipo de cartucho correspondiente. |
| 5 | Eliminar un conjunto de regiones existente. Las regiones predeterminadas no pueden eliminarse. | 6 | Vista previa del conjunto de regiones. |
| 7 | Crear una copia del conjunto de regiones. | 8 | Editar el conjunto de regiones. Las regiones predeterminadas no pueden editarse. |
| 9 | Crear un conjunto de regiones nuevo. |  |  |

## 11.3 Cartuchos, regiones de análisis y parámetros de resultados {#section-11-3}

Según el cartucho utilizado en una medición, se miden distintos parámetros. Las subsecciones siguientes describen los conjuntos de regiones de análisis y los parámetros de resultados de TCC (recuento total de células), ICC (recuento de células intactas), ACC (recuento de células activas), CBC (recuento de células coliformes), EBC (recuento de células de E. coli) y NBC (recuento de células de enterococos).

Los cartuchos CBC, EBC y NBC son compatibles con BactoSense ID y BactoSense SMART. Cada uno utiliza un marcaje enzimático selectivo y una única región poligonal y proporciona una concentración celular. Para estos cartuchos no se calculan subpoblaciones HNA ni definidas según su actividad.

:::info[Interpretación de los resultados CBC, EBC y NBC]

CBC, EBC y NBC son concentraciones celulares expresadas en células por mililitro (1/mL). Los recuentos celulares y los resultados de cultivo expresados en unidades formadoras de colonias (CFU) miden propiedades diferentes de una muestra y no pueden compararse directamente.

:::

### 11.3.1 Cartucho TCC {#section-11-3-1}

TCC significa Total Cell Count (recuento total de células). Por tanto, el cartucho TCC se utiliza para medir la concentración de todas las células.

**Tabla 11-1 Conjunto de regiones utilizado para el cartucho TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| TCC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células (TCC). |
| Límite inferior HNA | Línea vertical | Umbral en FL1. Los puntos dentro de TCC pero con FL1 superior al límite inferior HNA se cuentan como HNAC. Los puntos dentro de TCC pero por debajo del límite se cuentan como LNAC. |

</div>

**Tabla 11-2 Parámetros de resultados obtenidos con el cartucho TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| TCC | 1/mL | Recuento total de células | Número total de células detectadas dentro de la región TCC. Es la suma de HNAC y LNAC: TCC = HNAC + LNAC. |
| HNAP | % | Porcentaje de células con alto contenido de ácidos nucleicos | Porcentaje de células HNA respecto a TCC:<br/>HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Recuento de células con bajo contenido de ácidos nucleicos | Número de células dentro de la región TCC, pero por debajo del límite inferior HNA (región de línea vertical). |
| HNAC | 1/mL | Recuento de células con alto contenido de ácidos nucleicos | Número de células dentro de la región TCC y por encima del límite inferior HNA (región de línea vertical). |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

### 11.3.2 Cartucho ICC {#section-11-3-2}

ICC significa Intact Cell Count (recuento de células intactas). Por tanto, el cartucho ICC se utiliza para medir la concentración de células intactas.

**Tabla 11-3 Conjunto de regiones utilizado para el cartucho ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| ICC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células intactas (ICC). |
| Límite inferior HNA | Línea vertical | Umbral en FL1. Los puntos dentro de ICC pero con FL1 superior al límite inferior HNA se cuentan como HNAC. Los puntos dentro de ICC pero por debajo del límite se cuentan como LNAC. |

</div>

**Tabla 11-4 Parámetros de resultados obtenidos con el cartucho ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| ICC | 1/mL | Recuento de células intactas | Número total de células intactas dentro de la región ICC: ICC = HNAC + LNAC. |
| HNAP | % | Porcentaje de células con alto contenido de ácidos nucleicos | Porcentaje de células HNA respecto a ICC:<br/>HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Recuento de células con bajo contenido de ácidos nucleicos | Número de células LNA dentro de la región ICC, pero por debajo del límite inferior HNA (región de línea vertical). |
| HNAC | 1/mL | Recuento de células con alto contenido de ácidos nucleicos | Número de células HNA dentro de la región ICC y por encima del límite inferior HNA (región de línea vertical). |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

### 11.3.3 Cartucho ACC {#section-11-3-3}

ACC significa Active Cell Count (recuento de células activas). Por tanto, el cartucho ACC se utiliza para medir la concentración de células metabólicamente activas mediante un ensayo enzimático.

**Tabla 11-5 Conjunto de regiones utilizado para el cartucho ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| ACC | Polígono | Polígono definido en el plano FL1-FL2. Los puntos dentro de este polígono se cuentan como células activas (ACC). |
| Límite inferior HACC | Línea vertical | Umbral en FL1. Los puntos dentro de ACC pero con FL1 superior al límite inferior HACC se cuentan como HACC. Los puntos dentro de ACC pero por debajo del límite se cuentan como LACC. |

</div>

**Tabla 11-6 Parámetros de resultados obtenidos con el cartucho ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| ACC | 1/mL | Recuento de células activas | Número total de células activas dentro de la región ACC: ACC = HACC + LACC. |
| HACC | 1/mL | Recuento de células altamente activas | Número de células activas cuya intensidad FL1 supera la región vertical HACC. |
| LACC | 1/mL | Recuento de células con baja actividad | Número de células activas cuya intensidad FL1 está por debajo de la región vertical HACC. |
| HACP | % | Porcentaje de células altamente activas | Porcentaje de HACC respecto a ACC.<br/>HACP = (HACC / ACC) × 100 |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

### 11.3.4 Cartucho CBC {#section-11-3-4}

CBC significa Coliform Cell Count (recuento de células coliformes). El cartucho CBC mide la concentración de bacterias coliformes mediante un ensayo enzimático basado en la actividad de la β-galactosidasa. La enzima convierte el sustrato del cartucho en un producto fluorescente, lo que permite detectar las células marcadas mediante citometría de flujo.

**Tabla 11-7 Conjunto de regiones utilizado para el cartucho CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| CBC | Polígono | Polígono definido en el plano FL1-FL2. Las células coliformes marcadas con fluorescencia dentro de este polígono contribuyen a CBC. |

</div>

**Tabla 11-8 Parámetro de resultado obtenido con el cartucho CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| CBC | 1/mL | Recuento de células coliformes | Concentración de células coliformes marcadas dentro de la región CBC, calculada a partir del recuento celular y del volumen de muestra analizado. |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

### 11.3.5 Cartucho EBC {#section-11-3-5}

EBC significa E. coli Cell Count (recuento de células de E. coli). El cartucho EBC mide la concentración de bacterias *Escherichia coli* mediante un ensayo enzimático basado en la actividad de la β-glucuronidasa. La enzima convierte el sustrato del cartucho en un producto fluorescente, lo que permite detectar las células marcadas mediante citometría de flujo.

**Tabla 11-9 Conjunto de regiones utilizado para el cartucho EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| EBC | Polígono | Polígono definido en el plano FL1-FL2. Las células de E. coli marcadas con fluorescencia dentro de este polígono contribuyen a EBC. |

</div>

**Tabla 11-10 Parámetro de resultado obtenido con el cartucho EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| EBC | 1/mL | Recuento de células de E. coli | Concentración de células de E. coli marcadas dentro de la región EBC, calculada a partir del recuento celular y del volumen de muestra analizado. |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

### 11.3.6 Cartucho NBC {#section-11-3-6}

NBC significa Enterococcus Cell Count (recuento de células de enterococos). El cartucho NBC mide la concentración de enterococos mediante un ensayo enzimático basado en la actividad de la β-glucosidasa. La enzima convierte el sustrato del cartucho en un producto fluorescente, lo que permite detectar las células marcadas mediante citometría de flujo.

**Tabla 11-11 Conjunto de regiones utilizado para el cartucho NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| REGIÓN | TIPO | DESCRIPCIÓN |
| --- | --- | --- |
| NBC | Polígono | Polígono definido en el plano FL1-FL2. Los enterococos marcados con fluorescencia dentro de este polígono contribuyen a NBC. |

</div>

**Tabla 11-12 Parámetro de resultado obtenido con el cartucho NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARÁMETRO | UNIDAD | NOMBRE | DESCRIPCIÓN |
| --- | --- | --- | --- |
| NBC | 1/mL | Recuento de células de enterococos | Concentración de enterococos marcados dentro de la región NBC, calculada a partir del recuento celular y del volumen de muestra analizado. |

</div>

Para obtener más información sobre el ajuste de las regiones, consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

## 11.4 Cambio de las regiones de análisis {#section-11-4}

### 11.4.1 Reanálisis de mediciones con otras regiones {#section-11-4-1}

El reanálisis (regating) consiste en aplicar un conjunto de regiones diferente a datos de medición existentes.

- Para reanalizar, es necesario disponer de ese conjunto adicional. En la pantalla Home, pulse Ajustes y después Ajustes de la compuerta para ver los conjuntos de regiones disponibles.
- La modificación de un conjunto de regiones existente se describe en la sección [Edición de conjuntos de regiones existentes](11-results-and-data-analysis.md#section-11-4-3).

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1\. | En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. |  |
| 2\. | Pulse Registros y, según cómo se realizó la medición, Results (manual mode) o Results (online mode). |  |
| 3\. | Para reanalizar una sola medición, selecciónela para acceder a la página de detalles del resultado. Para reanalizar varias mediciones (por lotes), mantenga pulsada una medición hasta que quede resaltada y aparezca una casilla a la izquierda. A continuación, pulse otras mediciones para seleccionarlas también. |  |
| 4\. | Pulse Resultado de re-gate en la vista de una medición o Re-gate cuando hay varias mediciones seleccionadas. |  |
| 5\. | Seleccione el conjunto de regiones deseado marcando su casilla. |  |
| 6\. | Pulse el botón Confirmar para iniciar el reanálisis. | :::info[Información adicional] Según el número de mediciones, el reanálisis puede tardar varios minutos. ::: |
| 7\. | Al finalizar, pulse OK. |  |

### 11.4.2 Creación de un conjunto de regiones nuevo {#section-11-4-2}

Pueden crearse conjuntos de regiones nuevos a partir de una copia de un conjunto existente o desde cero.

Creación de un conjunto de regiones nuevo a partir de una copia

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Como usuario Advanced o Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes de la compuerta. |  |
| 3. | En la lista de conjuntos de regiones disponibles, identifique el conjunto del que desea hacer una copia para crear el nuevo conjunto. | Asegúrese de que el tipo de región (p. ej., TCC, ICC) coincida con la aplicación prevista. |
| 4. | Pulse el icono Copy para crear una copia del conjunto de regiones. |  |
| 5. | En la copia recién generada, pulse el icono Editar y siga las instrucciones de edición de la sección [Edición de conjuntos de regiones existentes](11-results-and-data-analysis.md#section-11-4-3). | ![BactoSense — Editar la región de análisis](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |

Creación de un conjunto de regiones nuevo desde cero

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMÁGENES |
| --- | --- | --- |
| 1. | Como usuario Advanced o Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. |  |
| 2. | Pulse el botón Ajustes de la compuerta. |  |
| 3. | En la barra de acciones de la parte inferior, pulse Nuevo. |  |
| 4. | Introduzca un nombre para el conjunto de regiones y seleccione una de las plantillas disponibles para el cartucho instalado. |  |
| 5. | A continuación, siga el asistente de configuración de regiones en pantalla, tal como se describe en las instrucciones de edición de la sección [Edición de conjuntos de regiones existentes](11-results-and-data-analysis.md#section-11-4-3). |  |
| 6. | Al finalizar, podrá seleccionar el conjunto nuevo al crear mediciones o reanalizar mediciones existentes, como se describe en la sección [Reanálisis de mediciones con otras regiones](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.3 Edición de conjuntos de regiones existentes {#section-11-4-3}

Excepto los conjuntos predeterminados, todos los conjuntos de regiones pueden modificarse. La edición puede incluir el cambio de nombre, la modificación de la posición de la región vertical y el cambio del número y la posición de los vértices de la región poligonal.

Esta sección describe el proceso general de edición de un conjunto de regiones. La sección [Estrategia de ajuste de regiones para TCC e ICC](11-results-and-data-analysis.md#section-11-4-4) describe una estrategia específica para ajustar conjuntos de regiones de mediciones TCC e ICC.

![BactoSense — Definición y vista previa del gate TCC](/img/gui/es/tcc-gate-definition.png "width=576 class=manual-figure")

*Figura 11-3 Ajustes de regiones para TCC*

|  |  |  |  |
| --- | --- | --- | --- |
| ① | Coordenadas de los puntos de la región. a: primer punto; b: segundo punto; c: tercer punto; d: cuarto punto. | ② | Eliminar un punto de la región. |
| ③ | Añadir un nuevo punto a la región. | ④ | Modificar la coordenada seleccionada. En esta captura está seleccionada la coordenada FL1 (a, FL1) del primer punto, por lo que podemos mover ese punto de la región a lo largo del eje FL1 (eje X). |
| ⑤ | Límite inferior HNA: esta región se define en la pantalla siguiente. | ⑥ | Vista previa |

El procedimiento siguiente describe cómo ajustar una región:

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Como usuario Advanced o Admin, pulse Ajustes en la pantalla Home para abrir el menú de ajustes. | ![BactoSense — Botón Ajustes](/img/gui/es/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Pulse el botón Ajustes de la compuerta. | ![BactoSense — Configuración de las regiones de análisis](/img/gui/icons/gate-settings-button.png "width=48 class=manual-icon") |
| 3. | Pulse el botón Editar de la región que desea editar. | ![BactoSense — Editar la región de análisis](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |
| 4. | Cambie el nombre si lo desea y pulse el botón Siguiente. |  |
| 5. | Ajuste el número y la posición de los vértices del polígono (para TCC e ICC, consulte la sección [Estrategia de ajuste de regiones para TCC e ICC](11-results-and-data-analysis.md#section-11-4-4)). Una región poligonal puede tener entre 3 y 6 vértices. | ![BactoSense — Definición del gate ICC](/img/gui/es/icc-gate-definition.png "width=282 class=manual-figure") |
| 6. | Pulse el botón Siguiente. |  |
| 7. | Introduzca el límite inferior HNA (para TCC e ICC, consulte la sección [Estrategia de ajuste de regiones para TCC e ICC](11-results-and-data-analysis.md#section-11-4-4)). | ![BactoSense — Límite inferior de HNA](/img/gui/es/hna-lower-limit.png "width=282 class=manual-figure") |
| 8. | Pulse Guardar. En el cuadro de diálogo, elija Guardar para actualizar el conjunto existente o Guardar como nuevo conjunto para conservar el original y crear uno nuevo. |  |
| 9. | Al finalizar, podrá seleccionar el conjunto modificado al crear mediciones o reanalizar mediciones existentes, como se describe en la sección [Reanálisis de mediciones con otras regiones](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.4 Estrategia de ajuste de regiones para TCC e ICC {#section-11-4-4}

BactoSense se suministra con conjuntos de regiones predeterminados adecuados para la gran mayoría de las muestras. No obstante, los usuarios avanzados pueden ajustar las regiones si es necesario. A continuación se explica un procedimiento general de ajuste válido tanto para los cartuchos TCC como para los ICC.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
</colgroup>

<thead>

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

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Mida una muestra de agua con el protocolo estándar Water analysis. En la página Result details, el diagrama FL1 frente a FL2 muestra: 1) células LNA y HNA del agua; 2) ruido eléctrico de los detectores ópticos; 3) residuos/ruido de fondo (puede incluir células dañadas, agregados u otras partículas).

</td>

<td>

![Ilustración de la tabla de la página 108 del manual](/img/manual/cell-564a3512838d.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

En la pantalla Home, pulse Ajustes para abrir el menú de ajustes. Pulse el botón Ajustes de la compuerta.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Según sus necesidades, realice una de las acciones siguientes:<br />• Crear un conjunto de regiones nuevo.<br />• Editar un conjunto existente.<br />• Copiar un conjunto existente y editar la copia.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Asigne un nombre a este conjunto de regiones y pulse Siguiente.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Coloque la región poligonal en ambos extremos (izquierdo y derecho). Por ejemplo, utilice estos cuatro puntos:

<table className="manual-table">

<tbody>

<tr>

<td>

FL1

</td>

<td>

FL2

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

0.0

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

0.0

</td>

</tr>

</tbody>

</table>

</td>

<td>

![Ilustración de la tabla de la página 108 del manual](/img/manual/cell-374bfaa7d23b.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Pulse Siguiente y Guardar. Para una plantilla nueva, confirme con Sí. Para un conjunto modificado, elija Guardar o Guardar como nuevo conjunto en el cuadro de diálogo.

</td>

<td>

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Vaya a la vista de resultados de la muestra de agua medida anteriormente.

</td>

<td>

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

En la vista de resultados, pulse el botón Resultado de re-gate.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Seleccione la región recién creada y vuelva a procesar los datos con ella pulsando Confirmar.

</td>

<td>

</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Abra el histograma FL1 y localice el primer valle después del pico de ruido, es decir, el primer mínimo después del pico situado en el extremo izquierdo (flecha en la imagen). Anote el valor FL1 de ese mínimo (p. ej., 3.8).

</td>

<td>

![Ilustración de la tabla de la página 109 del manual](/img/manual/cell-d44e977152e1.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Vuelva a Gate settings y edite de nuevo la región. Coloque sus límites izquierdos en el valor FL1 determinado anteriormente. Así se excluye el ruido eléctrico de los detectores ópticos. Si es necesario, para el eje FL2, coloque los puntos “b” y “c” de la región justo por debajo de la zona de residuos/fondo (que suele aparecer como diagonales rectas).

</td>

<td>

![Ilustración de la tabla de la página 109 del manual](/img/manual/cell-67de70c6bd1f.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Guarde la región ajustada.

</td>

<td>

</td>

</tr>

<tr>

<td>

13\.

</td>

<td>

Vaya de nuevo a la vista de resultados de la muestra de agua medida anteriormente.

</td>

<td>

</td>

</tr>

<tr>

<td>

14\.

</td>

<td>

En la vista de resultados, pulse el botón Resultado de re-gate.

</td>

<td>

</td>

</tr>

<tr>

<td>

15\.

</td>

<td>

Seleccione la región recién creada y vuelva a procesar los datos con ella pulsando Confirmar.

</td>

<td>

</td>

</tr>

<tr>

<td>

16\.

</td>

<td>

Para colocar el límite inferior HNA, abra de nuevo el histograma FL1 y localice el mínimo entre los picos LNA y HNA (línea vertical de la imagen). Anote su valor FL1 (p. ej., 4.8).

</td>

<td>

![Ilustración de la tabla de la página 110 del manual](/img/manual/cell-3dd4365d2ad3.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

17\.

</td>

<td>

Vuelva a Gate settings y edite de nuevo la región.

</td>

<td>

</td>

</tr>

<tr>

<td>

18\.

</td>

<td>

Vaya al paso de configuración del límite inferior HNA. Introduzca el límite identificado anteriormente en el campo FL1, pulse Guardar y seleccione Guardar en el cuadro de diálogo.

</td>

<td>

</td>

</tr>

<tr>

<td>

19\.

</td>

<td>

Reanalice de nuevo la medición del agua y compruebe que la región sea adecuada. Ajústela de nuevo si es necesario.

</td>

<td>

</td>

</tr>

</tbody>

</table>

</div>
## 11.5 Análisis avanzado de datos {#section-11-5}

Los datos de medición de BactoSense pueden exportarse en formato de archivo Flow Cytometry Standard (FCS) 3.1. El formato FCS está normalizado por la International Society for Advancement of Cytometry (ISAC) para garantizar la interoperabilidad entre distintos instrumentos de citometría de flujo y programas de análisis. Existen distintas versiones del formato FCS, cada una con mejoras y funciones adicionales. Los datos FCS pueden utilizarse para un procesamiento posterior personalizado sin conexión, como la aplicación de estrategias complejas de regiones, la obtención de “huellas microbianas”, la detección automática de anomalías y muchas otras aplicaciones.

### 11.5.1 Obtención de archivos FCS {#section-11-5-1}

Los archivos FCS pueden obtenerse de las siguientes formas:

- Descarga a una memoria USB: mediante la función Export all (véase la sección [Exportación de ajustes, diagnósticos o todos los datos a USB](12-data-access-and-export.md#section-12-1-1)).

- Descarga desde la interfaz web, como archivos individuales (véase la sección [Descarga de un archivo FCS](13-web-user-interface.md#section-13-4)) o varios archivos (véase la sección [Descarga de un archivo ZIP con varios resultados](13-web-user-interface.md#section-13-5)).

- Acceso mediante FTP (véase la sección [Obtención de datos mediante FTP](12-data-access-and-export.md#section-12-2)).

- Acceso mediante HTTPS (véase la sección [Obtención de archivos mediante HTTP o HTTPS](12-data-access-and-export.md#section-12-3)).

Si necesita ayuda para configurar una cadena de herramientas de análisis avanzado de datos, póngase en contacto con support@bnovate.com.

## 11.6 Comparación con otros citómetros de flujo {#section-11-6}

Para comparar los resultados de BactoSense con los de otro citómetro de flujo, puede analizarse una solución de referencia con microesferas autofluorescentes. Este método permite comparar las escalas de medición de distintos dispositivos.

<div className="manual-narrow-details-scroll manual-narrow-details manual-narrow-details-split">

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN | \< |
| --- | --- | --- | --- |
| 1\. | Se recomienda utilizar el Validation Kit, que contiene una solución de microesferas lista para usar. | Lea las instrucciones del Validation Kit para obtener más información. | \< |
| 2\. | Instale el dispositivo de muestreo manual según el manual de usuario. |  | \< |
| 3\. | Tome una de las soluciones de microesferas del Validation Kit y colóquela en el dispositivo de muestreo. | Lea las instrucciones del Validation Kit para obtener más información. | \< |
| 4\. | :::info[Información adicional] Pulse el botón Home. Pulse Back tantas veces como sea necesario para que aparezca Home. ::: | ![BactoSense — Botón Inicio](/img/gui/icons/home-button.png "width=48 class=manual-icon") | ![BactoSense — Botón Volver](/img/gui/icons/back-button.png "width=48 class=manual-icon") |
| 5\. | En la pantalla Home, pulse Modo y seleccione Modo manual. Pulse Volver y, a continuación, Iniciar para abrir el asistente de medición. |  | \< |
| 6\. | Seleccione Preparar en la lista de protocolos. | Véase la sección [Realización de un cebado (Prime)](../measurements/#section-10-9-3). | \< |
| 7\. | Pulse los botones Siguiente y Inicio. Espere a que termine el protocolo de cebado. |  | \< |
| 8\. | Pulse Nuevo, elija Análisis de perlas en la lista y pulse Siguiente e Inicio. |  | \< |
| 9\. | Espere a los resultados y, si es necesario, ajuste con precisión la región del diagrama FL1 frente a FL2 para contar solo las 4 poblaciones de microesferas. Asegúrese de que el ruido, el fondo y los residuos no se cuenten dentro de la región. | Consulte la sección [Edición de conjuntos de regiones existentes](../results-and-data-analysis/#section-11-4-3) para ajustar la región.<br />![Ilustración de la tabla de la página 112 del manual](/img/manual/render-fa85ea9255cb.webp "width=246 class=manual-figure") | \< |
| 10\. | En el histograma FL1 frente a recuentos, estime el valor logarítmico del centro de cada pico en el eje FL1. En este ejemplo, se obtiene aproximadamente (en log): 1.<sup>er</sup> pico = 4.05; 2.<sup>º</sup> pico = 4.3; 3.<sup>er</sup> pico = 5.35; 4.<sup>º</sup> pico = 6.2. | ![Ilustración de la tabla de la página 113 del manual](/img/manual/cell-c2ba9a559620.png "width=246 class=manual-figure") | \< |
| 11\. | Mida las mismas microesferas con el otro citómetro de flujo que desea comparar y repita los pasos 10 y 11. En este ejemplo, se obtiene aproximadamente (en log): 1.<sup>er</sup> pico = log(10<sup>3</sup>) = 3; 2.<sup>º</sup> pico = log(2*10<sup>3</sup>) = 3.3; 3.<sup>er</sup> pico = log(2.4*10<sup>4</sup>) = 4.4; 4.<sup>º</sup> pico = log(1.6*10<sup>5</sup>) = 5.2. | ![Ilustración de la tabla de la página 113 del manual](/img/manual/cell-4c2343e0bbfe.png "width=246 class=manual-figure") | \< |
| 12\. | Con los distintos valores obtenidos para ambos dispositivos, ya es posible comparar sus escalas y sus ventanas de medición. |  | \< |

</div>
