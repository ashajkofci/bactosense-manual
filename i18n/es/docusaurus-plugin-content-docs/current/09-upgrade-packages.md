---
title: "9. Paquetes de ampliación"
sidebar_label: "9. Paquetes de ampliación"
slug: /upgrade-packages
sidebar_position: 9
description: "Manual de usuario de BactoSense: Paquetes de ampliación."
---

Según el modelo de BactoSense, algunas funciones son opcionales y pueden activarse con una clave de licencia.

## 9.1 Paquete Scientific {#section-9-1}

El *Scientific Package* está destinado a los profesionales de investigación del agua para realizar análisis avanzados de datos. Incluye las siguientes funciones:

- Región adicional: aplique una región poligonal adicional configurable a los datos FL1 / FL2 directamente en la interfaz de usuario.
- Datos de dispersión de luz: registre y visualice datos de dispersión frontal y lateral de cada evento detectado. Obtenga los datos en archivos FCS para su procesamiento posterior.

**Región poligonal adicional** La región poligonal adicional libremente configurable tiene las siguientes propiedades:

- Está disponible para los cartuchos TCC e ICC.
- El parámetro de resultado es una concentración celular denominada “Gate+”.
- La región puede ajustarse de forma similar a las regiones predeterminadas TCC o ICC. Consulte la sección [Cambio de las regiones de análisis](11-results-and-data-analysis.md#section-11-4).

**Detectores de dispersión frontal y lateral** El detector de dispersión frontal (FSC) mide la luz dispersada por bacterias u otras partículas. El detector se coloca formando un ángulo pequeño respecto a la dirección del haz láser y mide así las señales de luz en dirección “frontal”. En cambio, el detector de dispersión lateral (SSC) se sitúa a 90 grados respecto a la dirección del haz y mide la luz dispersada lateralmente. La combinación de la información de fluorescencia y dispersión proporciona datos de alto contenido, lo que permite aplicaciones como la obtención de huellas microbiológicas, la caracterización de perfiles o la detección de anomalías. En particular, los detectores de dispersión permiten obtener una huella precisa (BactoScore) para seguir los cambios en la población bacteriana.

Los datos de dispersión están disponibles de las siguientes formas:

- En los archivos Flow Cytometry Standard (FCS). Para obtener más información sobre este formato de archivo, consulte la sección [Análisis avanzado de datos](11-results-and-data-analysis.md#section-11-5).
- En la interfaz de usuario de BactoSense, como diagrama de puntos FSC / SSC.
- En la interfaz web, como diagrama de puntos FSC / SSC.
- Al descargar los diagramas de puntos como imágenes.

**Activación del** **Scientific Package**

Active el paquete cuando el instrumento esté inactivo, con Modo PLC y Modo demostración desactivados.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Póngase en contacto con su representante comercial de bNovate para adquirir una clave de activación. |  |
| 2. | Tras recibir la clave de activación, inicie sesión como Administrador (Admin) en BactoSense. |  |
| 3. | En la pantalla Home, pulse Ajustes. |  |
| 4. | Pulse el botón Ajustes del sistema. | ![BactoSense — Menú Ajustes: Ajustes del sistema](/img/gui/es/settings-menu-system-settings.png "width=360") |
| 5. | Pulse el botón Actualizaciones. | ![BactoSense — Ajustes del sistema: Actualizaciones](/img/gui/es/scientific-package-upgrades-menu.png "width=360") |
| 6. | Pulse el botón Actualizar. | ![BactoSense — Licencia del paquete Scientific y botón Actualizar](/img/gui/es/scientific-package-upgrades.png "width=360") |
| 7. | Introduzca la clave de activación y pulse OK. | OK estará disponible cuando introduzca una clave.<br />![BactoSense — Introducción de la clave de activación del paquete Scientific](/img/gui/es/scientific-package-activation-key.png "width=360") |

Tras la activación correcta, pulse OK en el mensaje de confirmación. Si el instrumento se reinicia, espere a que termine y vuelva a abrir Actualizaciones. Compruebe que Paquete científico muestre Activado.

## 9.2 Paquete Management {#section-9-2}

El *Management Package* está destinado al uso del instrumento en entornos con mayores requisitos de trazabilidad. Incluye las siguientes funciones:

- Gestión avanzada de usuarios (control de acceso basado en funciones)
- Pista de auditoría

**Gestión avanzada de usuarios** Con la función *Advanced User Management*, el propietario del instrumento puede crear distintos usuarios y asignarles diferentes funciones (Basic, Advanced, Admin). Esto permite otorgar permisos distintos a cada usuario y registrar su actividad en la pista de auditoría.

**Pista de auditoría** La *Audit Trail* es un registro de todas las operaciones o cambios relevantes realizados en el instrumento. Proporciona un historial detallado de las acciones del usuario o del propio instrumento. Se puede acceder a la *Audit Trail* de las siguientes formas:

- En la interfaz de usuario del instrumento, abra Home → Ajustes → Registros → Auditoria de registro (véase [Registro de acceso y auditoría](16-warnings-errors-and-troubleshooting.md#section-16-4-4)).
- Al exportar todos los datos a una memoria USB; véase la sección [Exportación de datos a un dispositivo USB](12-data-access-and-export.md#section-12-1).
- Desde la interfaz web de usuario. El acceso a esta interfaz se describe en el capítulo [Interfaz web de usuario](13-web-user-interface.md).

**Activación del** **Management Package**

Active el paquete cuando el instrumento esté inactivo, con Modo PLC y Modo demostración desactivados.

|  | PASO DE TRABAJO | INFORMACIÓN ADICIONAL / IMAGEN |
| --- | --- | --- |
| 1. | Póngase en contacto con su representante comercial de bNovate para adquirir una clave de activación. |  |
| 2. | Tras recibir la clave de activación, inicie sesión como Administrador (Admin) en BactoSense. |  |
| 3. | En la pantalla Home, pulse Ajustes. |  |
| 4. | Pulse el botón Ajustes del sistema. |  |
| 5. | Pulse el botón Actualizaciones. |  |
| 6. | Pulse el botón Actualizar. |  |
| 7. | Introduzca la clave de activación y pulse OK. | Nota: la función de gestión avanzada de usuarios todavía no está activada. Si desea activarla, siga los pasos siguientes. |
| 8. | En la pantalla Home, pulse Ajustes. |  |
| 9. | Pulse el botón Ajustes del sistema. |  |
| 10. | Pulse el botón Configuración del sistema. |  |
| 11. | Marque la casilla Modo avanzado de gestión de usuarios. |  |
| 12. | Pulse Guardar y confirme el mensaje con OK. |  |
