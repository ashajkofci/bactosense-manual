---
title: "5. Funcionamiento"
sidebar_label: "5. Funcionamiento"
slug: /operation
sidebar_position: 5
description: "Manual de usuario de BactoSwitch: Funcionamiento."
---

## 5.1 Funcionamiento mediante la interfaz gráfica de BactoSense {#section-5-1}

Esta sección ofrece una introducción básica al funcionamiento de BactoSwitch y a la visualización de los resultados, que son muy similares al funcionamiento en modo automático de BactoSense y a la visualización de sus datos. Para obtener más información, consulte la sección [Medición automática en modo en línea](/bactosense/measurements#section-10-2) de la versión más reciente del manual de usuario de BactoSense.

### 5.1.1 Inicio de mediciones en modo automático {#section-5-1-1}

Asegúrese de que BactoSwitch esté correctamente instalado como se describe en el capítulo [Instalación](04-installation.md).

Vaya al menú Home de la interfaz de usuario de BactoSense. A continuación, seleccione **Modo automático** y pulse **Iniciar**:

![Pantalla de inicio de BactoSense con Modo automático e Iniciar resaltados](/img/bactoswitch/gui-home-auto-mode-start.png "width=639")

En la ventana del gráfico del modo automático, pulse **Inicio**:

![Ventana del gráfico del modo automático con Inicio resaltado](/img/bactoswitch/gui-auto-mode-plot-start.png "width=637")

Seleccione el protocolo **BactoSwitch (con lavado a contracorriente)** y pulse **Siguiente**.

![Selección de protocolo con BactoSwitch (con lavado a contracorriente) seleccionado](/img/bactoswitch/gui-protocol-selection.png "width=638")

Por último, seleccione el intervalo de medición. Tenga en cuenta que se trata del intervalo entre cada medición. El intervalo de medición de cada fuente es N veces mayor, donde N es el número de fuentes activadas. Por ejemplo, si activa 4 fuentes y selecciona un intervalo de 30 min, cada fuente se mide con un intervalo de 2 h.

![Ajustes de intervalo con un intervalo de 30 minutos](/img/bactoswitch/gui-interval-settings.png "width=635")

### 5.1.2 Visualización de los resultados de medición {#section-5-1-2}

En cuanto se inician las mediciones, vuelve a mostrarse la ventana del gráfico del modo automático. Cuando hay un BactoSwitch conectado, la ventana del modo automático muestra los recuentos de cada línea [1/mL], pero no LNA/HNA [%] ni otros parámetros.

![Gráfico del modo automático con una curva por línea](/img/bactoswitch/gui-auto-mode-plot-lines.png "width=637")

Los ajustes de visualización pueden modificarse mediante el botón situado en la parte superior central del gráfico.

![Ajustes de visualización del gráfico del modo automático](/img/bactoswitch/gui-display-settings.png "width=633")

Al pulsar el botón **Ver resultados** se abre la vista de resultados (lista) del modo automático. Los nombres de las muestras coinciden con los nombres de línea definidos en la sección [Configuración de las líneas](04-installation.md#section-4-6).

![Lista de resultados del modo automático con una entrada por medición de línea](/img/bactoswitch/gui-auto-mode-results.png "width=630")

Al pulsar una de las mediciones se muestran sus detalles (de nuevo, consulte el manual de usuario de BactoSense para obtener más información).

![Detalles del resultado de una medición de BactoSwitch en modo automático](/img/bactoswitch/gui-result-details.png "width=637")

Al pulsar el botón **Filtro** en la ventana de resultados (lista) del modo automático se abre la ventana **Filtrar resultados**. Aquí puede filtrar los resultados por una cadena de texto mediante el campo **Filtrar por nombre**.

![Ventana Filtrar resultados](/img/bactoswitch/gui-filter-results.png "width=635")

Además de filtrar por fechas de inicio y fin y por nombre de medición, el botón **Filtrar por línea** permite filtrar los resultados por línea de BactoSwitch.

![Ventana Filtrar resultados con Filtrar por línea resaltado](/img/bactoswitch/gui-filter-by-line-button.png "width=638")

![Selección de una línea de muestra BactoSwitch](/img/bactoswitch/gui-select-sample-line.png "width=635")

Los filtros no solo se aplican a la vista de lista de resultados del modo automático, sino también al gráfico del modo automático, lo que permite representar selectivamente los resultados según los números o los nombres de línea (definidos en la sección [Configuración de las líneas](04-installation.md#section-4-6)). Véase también la sección [Filtrado de mediciones](/bactosense/measurements#section-10-7) del manual de usuario de BactoSense.

![Gráfico del modo automático filtrado por la línea 1](/img/bactoswitch/gui-auto-mode-plot-filtered.png "width=293") ![Resultados del modo automático filtrados por la línea 1](/img/bactoswitch/gui-auto-mode-results-filtered.png "width=293")

### 5.1.3 Configuración de alarmas {#section-5-1-3}

La ventana **Configuración de la alarma** (accesible desde el menú principal, **Ajustes del modo automático** / **Alarmas**) permite definir alarmas de forma selectiva para determinadas líneas:

![Configuración de la alarma con una línea de muestra seleccionada](/img/bactoswitch/gui-alarm-configuration.png "width=625")

## 5.2 Control remoto y visualización de datos {#section-5-2}

### 5.2.1 BactoCloud {#section-5-2-1}

BactoCloud es la solución en la nube de bNovate para el control remoto de instrumentos, la visualización de datos y el análisis avanzado. La versión básica de BactoCloud está disponible con todos los instrumentos.

BactoCloud incluye funciones que facilitan especialmente la visualización de los datos multilínea generados por un BactoSense equipado con BactoSwitch. Además, el análisis avanzado facilita los cálculos diferenciales, p. ej., para evaluar la eficacia microbiológica de las etapas de tratamiento del agua. Para conectar el instrumento, consulte el capítulo [BactoCloud](/bactosense/bactocloud) del manual de usuario de BactoSense.

![Mediciones multilínea en BactoCloud](/img/bactoswitch/bactocloud-multi-line.png "width=700")

### 5.2.2 Interfaz web de usuario {#section-5-2-2}

La [interfaz web de usuario](/bactosense/web-user-interface) de BactoSense incluye funciones que permiten filtrar los datos de las distintas líneas de BactoSwitch.

En la pestaña **Resultados**, en la parte **Resultados del modo en línea**, es posible filtrar los datos por **Nombre** o por **Identificación de línea**. Estos campos corresponden a los nombres y números de línea definidos en la sección [Configuración de las líneas](04-installation.md#section-4-6). El filtrado también se aplica al gráfico del modo automático.

![Resultados del modo automático en la interfaz web de usuario con las columnas Nombre e Identificación de línea resaltadas](/img/bactoswitch/web-auto-mode-results.png "width=634")

### 5.2.3 Control de BactoSwitch mediante la caja de E/S de BactoSense {#section-5-2-3}

El funcionamiento de BactoSwitch puede controlarse con un autómata programable (PLC) a través de BactoSense y de la caja de E/S opcional (I/O-Box). Para obtener información más detallada, consulte la sección [Configuración de las entradas digitales y modo PLC](/bactosense/io-box#section-6-5) del manual de usuario de BactoSense. Aquí solo se explican las particularidades del funcionamiento con BactoSwitch.

Desde el menú principal, vaya a **Ajustes del modo automático** / **Entradas digitales**. La línea de BactoSwitch puede seleccionarse mediante el campo **Línea**.

En el ejemplo siguiente, con la opción **Utilizar el programador** desmarcada, cuando el PLC establece las entradas digitales en 1100, se inicia inmediatamente una medición en la línea n.º 1:

![Configuración de las entradas digitales con la línea 1 seleccionada](/img/bactoswitch/gui-digital-inputs-line.png "width=641")

Para iniciar mediciones periódicas, marque la opción **Utilizar el programador** y ajuste el intervalo deseado. Todas las líneas activas se leen secuencialmente, empezando por la línea seleccionada (la línea n.º 1 en este ejemplo):

![Configuración de las entradas digitales con el programador activado](/img/bactoswitch/gui-digital-inputs-scheduler.png "width=633")

La lectura de los datos de una línea concreta mediante las salidas analógicas debe realizarse justo después de que haya finalizado la medición en esa línea, p. ej., asignando la señal **Proceso en marcha** a una salida digital concreta y activando la lectura de la salida analógica cuando cambie el estado de esa salida. Tenga en cuenta que este no es el ajuste predeterminado. Para obtener más información, consulte la sección [Configuración de las salidas digitales](/bactosense/io-box#section-6-6) del manual de usuario de BactoSense.

![Asignar eventos a salidas con Proceso en marcha en la salida 3](/img/bactoswitch/gui-assign-events-to-outputs.png "width=638")

### 5.2.4 Modbus TCP {#section-5-2-4}

BactoSwitch y BactoSense pueden controlarse a distancia mediante Modbus TCP (Transmission Control Protocol), que no requiere ninguna caja de E/S. Para obtener más información, consulte la sección [Modbus TCP](/bactosense/field-bus-interface#section-7-1) del manual de usuario de BactoSense.

La configuración del instrumento para el control mediante Modbus TCP es idéntica a la explicada en la sección anterior sobre la caja de E/S. Para seleccionar Modbus TCP como fuente de entrada digital, pulse **Seleccionar fuente de entrada digital** en la parte inferior de la ventana **Configuración de entrada digital (PLC)**.

![Configuración de entrada digital con Seleccionar fuente de entrada digital resaltado](/img/bactoswitch/gui-digital-input-source-button.png "width=624")

A continuación, cambie la fuente a **Modbus TCP** y pulse **Volver**.

![Fuente de entrada digital configurada en Modbus TCP](/img/bactoswitch/gui-digital-input-source-modbus.png "width=624")

Además de los registros Modbus habituales de BactoSense, hay registros Modbus específicos para leer información de BactoSwitch:

- Línea de medición actual
- Línea de medición siguiente
- Caudal
- Estado
- Conexión
- Estado de las electroválvulas

Para obtener información sobre las direcciones y los formatos de los registros, consulte la sección [Lista de direcciones en Modbus TCP](/bactosense/field-bus-interface#section-7-1-2) de la versión más reciente del manual de usuario de BactoSense.

Para extraer los resultados de una línea concreta, los datos deseados deben leerse al final de una medición, que el PLC puede detectar cuando el registro **Etapa de medición** vuelve a 0.
