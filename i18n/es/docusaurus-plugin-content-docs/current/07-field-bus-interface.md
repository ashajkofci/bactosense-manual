---
title: "7. Interfaz de bus de campo"
sidebar_label: "7. Interfaz de bus de campo"
slug: /field-bus-interface
sidebar_position: 7
description: "Manual de usuario de BactoSense: Interfaz de bus de campo."
---

## 7.1 Modbus TCP {#section-7-1}

### 7.1.1 Información general para el funcionamiento con Modbus TCP {#section-7-1-1}

BactoSense puede utilizarse mediante Modbus Transmission Control Protocol (TCP). Deben cumplirse los siguientes requisitos:

- El ordenador y/o el sistema de gestión o control deben ser compatibles con Modbus TCP.
- El ordenador y/o el sistema de gestión o control deben disponer de software capaz de procesar correctamente los datos proporcionados por BactoSense.
- BactoSense debe tener activado el servicio Modbus TCP en Home → Ajustes → Ajustes del sistema → Servicios del sistema.
- BactoSense debe estar conectado al sistema de bus.
- Para poder trabajar con Modbus TCP, los ajustes de red deben configurarse correctamente.

Información adicional

- La interfaz Modbus TCP está integrada de serie en BactoSense.
- La toma Ethernet se encuentra en el lateral derecho del instrumento.
- La tabla de direcciones necesaria para la programación se encuentra por separado en la sección [Lista de direcciones en Modbus TCP](07-field-bus-interface.md#section-7-1-2).
- Todos los registros están codificados en formato big-endian.
- La comunicación Modbus TCP utiliza el puerto 502.
- La lista de códigos de error se encuentra en la sección [Errores no críticos](16-warnings-errors-and-troubleshooting.md#section-16-2) (errores no críticos) y en la sección [Errores críticos](16-warnings-errors-and-troubleshooting.md#section-16-3) (errores críticos).
- Modbus TCP puede utilizarse para sincronizar la hora. Siga las instrucciones de la sección [Configuración de servidores NTP](08-general-operations-and-configurations.md#section-8-7) y seleccione *Modbus TCP* como fuente de sincronización.

### 7.1.2 Lista de direcciones en Modbus TCP: {#section-7-1-2}

Los siguientes valores pueden leerse con la función Modbus 3 o 4 y escribirse con la función Modbus 16.

<div className="manual-modbus-address-scroll manual-modbus-address-list">

| N.º DE<br/>REGISTRO | DIRECCIÓN<br/>(DESPLAZAMIENTO) | TIPO DE DATOS | FUNCIÓN | VALORES |
| --- | --- | --- | --- | --- |
| 300201<br/>400201 | 0x00C8 | Entero<br/>sin signo, bits<br/>0-15 | Entradas<br/>digitales.<br/>Se ignoran<br/>a menos<br/>que se seleccione<br/>“Modbus TCP”<br/>como fuente<br/>en la pantalla<br/>de ajustes<br/>de las entradas<br/>digitales. | Bit 0: entrada 1<br/>Bit 1: entrada 2<br/>Bit 2: entrada 3<br/>Bit 3: entrada 4<br/>Para la correspondencia correcta entre bits<br/>y entradas, consulte la sección<br/>[Configuración de las entradas digitales y modo PLC](06-io-box.md#section-6-5), en particular la tabla 6-2<br/>y la figura 6-5.<br/>La entrada 1111 = 15 significa<br/>cancelar. |
| 300202<br/>400202 | 0x00C9 | Entero<br/>sin signo, bits<br/>0-15 | Control de<br/>alimentación | Bit 0: apagar<br/>Bit 1: reiniciar |
| 300203<br/>400203 | 0x00CA | Uint16 | Temporizador de vigilancia (Watchdog) | Escriba la consigna en segundos para<br/>activar o restablecer la cuenta atrás.<br/>Después de escribir el valor, una<br/>cuenta atrás lo decrementa en<br/>1 cada segundo.<br/>Durante la cuenta atrás, la lectura<br/>del registro devuelve la<br/>consigna.<br/>Si la cuenta atrás llega a 0, se cancela<br/>cualquier protocolo en curso.<br/>La lectura del registro devuelve<br/>0.<br/>Escriba 0 para desactivar<br/>la cuenta atrás. |
| 300204<br/>400204 | 0x00CB | Uint16 | Registro de<br/>prueba | Escriba 1 para mostrar un mensaje<br/>en la página de fuente de entradas digitales de la interfaz.<br/>Se restablece a 0 al arrancar. |
| 300211<br />400211 | 0x00D2 | UInt16: año | Obtener/establecer<br />fecha y<br />hora.<br />La hora<br />cambia en<br />cuanto<br />finaliza la<br />escritura.<br />Solo se<br />modifican los<br />campos cuyos<br />registros<br />se hayan<br />escrito:<br />si solo<br />se escribe el mes,<br />solo se<br />actualiza el<br />mes. | [0,9999] |
| 300212<br />400212 | 0x00D3 | UInt16:<br />mes | ^ | [1,12] |
| 300213<br />400213 | 0x00D4 | UInt16: día | ^ | [0,31] |
| 300214<br />400214 | 0x00D5 | UInt16: hora | ^ | [0,24] |
| 300215<br />400215 | 0x00D6 | UInt16:<br />minuto | ^ | [0,59] |
| 300216<br />400216 | 0x00D7 | UInt16:<br />segundo | ^ | [0,59] |
| Los siguientes valores pueden leerse con la función Modbus 3 o 4. | \< | \< | \< | \< |
| 300001<br />400001 | 0x0000 | UInt16<br />(bits individuales) | Salidas<br />digitales | Bit 0: salida 1<br />Bit 1: salida 2<br />Bit 2: salida 3<br />Bit 3: salida 4<br />Para la correspondencia correcta entre bits<br />y salidas, consulte la sección<br />[Configuración de las salidas digitales](../io-box/#section-6-6) o utilice la interfaz de prueba<br />de salidas como se describe<br />en [Prueba de las salidas digitales y analógicas](../io-box/#section-6-8). |
| 300002<br />400002 | 0x0001 | UInt16<br />(bits individuales) | Estado del<br />instrumento<br />0 = No<br />1 = Sí | Bit 0: proceso en curso<br />Bit 1: error crítico<br />Bit 2: error no crítico<br />Bit 3: modo PLC activo<br />Bit 4: calentamiento rápido (en<br />modo invierno)<br />Bit 5: calentamiento de fondo<br />(modo invierno)<br />Bit 6: dispositivo de muestreo<br />en uso |
| 300003<br />400003 | 0x0002 | UInt16<br />(bits individuales) | Estado de las alarmas, es decir, alarmas generadas durante la última medición. | Bit 0: alarma 1<br />Bit 1: alarma 2<br />Bit 2: alarma 3<br />… |
| 300004<br />400004 | 0x0003 | UInt32 MSB<br />(bits individuales) | Estado de las advertencias, es decir, advertencias generadas durante la última medición. | Bit 0: advertencia W01<br />Bit 1: advertencia W02<br />...<br />Bit 31: advertencia W32 |
| 300005<br />400005 | 0x0004 | UInt32 LSB<br />(bits individuales) | ^ | ^ |
| 300006<br />400006 | 0x0005 | UInt16 | Código de error | Véase la lista de códigos de error. Nota:<br />E00 (error de software<br />no gestionado) se cambia a 999<br />para evitar confusiones con<br />"sin error". Los códigos de error<br />no crítico permanecen hasta<br />que se borran<br />automáticamente mediante un<br />protocolo completado correctamente o<br />se borran manualmente. |
| 300007<br />400007 | 0x0006 | UInt16 | Señal de actividad (Heartbeat) | Segundos del reloj. El<br />valor cambia cada<br />segundo; utilícelo para<br />supervisar la capacidad de respuesta<br />del sistema. |
| 300008<br />400008 | 0x0007 | UInt16 | Etapa de<br />medición | IDLE 0<br />INITIALIZING 1<br />HEATING 2<br />FILLING 3<br />PRIMING 4<br />MIXING 5<br />INCUBATING 6<br />ANALYZING 7<br />CLEANING 8<br />FLUSHING 9<br />PROCESSING 10<br />VALIDATING 11<br />MOVING 12<br />EJECTING 13<br />EXPORTING 14<br />RENAMING 15<br />DELETING 16<br />SAVING 17<br />SELFCHECK 18<br />ABORTED 19<br />UNKNOWN 98<br />ERROR 99 |
| 300011<br />400011 | 0x000A | UInt16 | Progreso de<br />medición | [0, 100]<br />0 .. 100 % |
| 300012<br />400012 | 0x000B | Float 32 MSB | Temperatura<br />de la placa de E/S | Celsius |
| 300013<br />400013 | 0x000C | Float 32 LSB | ^ | ^ |
| 300014<br />400014 | 0x000D | UInt16 | Humedad en<br />la placa de E/S | [0, 100]<br />0 .. 100 % |
| 300015<br />400015 | 0x000E | UInt16: año | Fecha y hora del último muestreo | \< |
| 300016<br />400016 | 0x000F | UInt16: mes | ^ | ^ |
| 300017<br />400017 | 0x0010 | UInt16: día | ^ | ^ |
| 300018<br />400018 | 0x0011 | UInt16: hora | ^ | ^ |
| 300019<br />400019 | 0x0012 | UInt16: minuto | ^ | ^ |
| 300020<br />400020 | 0x0013 | UInt16: segundo | ^ | ^ |
| 300021<br />400021 | 0x0014 | UInt16 | Porcentaje del<br />cartucho | [0, 100]<br />0 .. 100 % |
| 300022<br />400022 | 0x0015 | UInt32 MSB | Número de serie<br />del cartucho |  |
| 300023<br />400023 | 0x0016 | UInt32 LSB | ^ | ^ |
| 300024<br />400024 | 0x0017 | UInt32 MSB | Número de serie de la recarga |  |
| 300025<br />400025 | 0x0018 | UInt32 LSB |  | ^ |
| 300026<br />400026 | 0x0019 | Uint16 | Tipo de<br />cartucho | 1 = TCC<br />1002 = ICC<br />1030 = ACC |
| 300027<br />400027 | 0x001A | UInt16: año | Fecha de<br />caducidad del<br />cartucho | Fecha UTC |
| 300028<br />400028 | 0x001B | UInt16: mes | ^ | ^ |
| 300029<br />400029 | 0x001c | UInt16: día | ^ | ^ |
| 300031<br />400031 | 0x001E | UInt32 MSB | Número de<br />serie del<br />instrumento |  |
| 300032<br />400032 | 0x001F | UInt32 LSB | ^ | ^ |
| 300033<br />400033 | 0x0020 | Cadena, caracteres 1-2 | Versión del<br />software | Si tiene menos de 16<br />caracteres, la cadena se<br />completa con caracteres<br />nulos. Ejemplo:<br />'1.4.0-BS\0\0\0\0...' |
| 300034<br />400034 | 0x0021 | Cadena, caracteres 3-4 | ^ | ^ |
| 300035<br />400035 | 0x0022 | Cadena, caracteres 5-6 | ^ | ^ |
| 300036<br />400036 | 0x0023 | Cadena, caracteres 7-8 | ^ | ^ |
| 300037<br />400037 | 0x0024 | Cadena, caracteres 9-10 | ^ | ^ |
| 300038<br />400038 | 0x0025 | Cadena, caracteres 11-<br />12 |  |  |
| 300039<br />400039 | 0x0026 | Cadena, caracteres 13-<br />14 | ^ | ^ |
| 300040<br />400040 | 0x0027 | Cadena, caracteres 15-<br />16 | ^ | ^ |
| 300041<br />400041 | 0x0028 | UInt16 | Memoria<br />restante | Número aproximado de mediciones<br />restantes antes de que el disco<br />se llene |
| 300042<br />400042 | 0x0029 | UInt16 | Vida útil<br />restante de<br />la válvula | [0, 100], porcentaje de<br />movimientos restantes<br />antes del mantenimiento. |
| 300043<br />400043 | 0x002A | UInt16 | Vida útil<br />restante del<br />émbolo | [0, 100], porcentaje de<br />movimientos restantes<br />antes del mantenimiento. |
| 300044<br />400044 | 0x002B | UInt16: año | Fecha del próximo<br />mantenimiento | Fecha UTC |
| 300045<br />400045 | 0x002C | UInt16: mes | ^ | ^ |
| 300046<br />400046 | 0x002D | UInt16: día | ^ | ^ |
| 300101<br />400101 | 0x0064 | UInt32 MSB | TCC | Se restablece a cero después de un<br />protocolo de limpieza o<br />al reiniciar. |
| 300102<br />400102 | 0x0065 | UInt32 LSB | ^ | ^ |
| 300103<br />400103 | 0x0066 | UInt32 MSB | ICC | Siempre 0 si el cartucho no<br />proporciona ICC. |
| 300104<br />400104 | 0x0067 | UInt32 LSB | ^ | ^ |
| 300105<br />400105 | 0x0068 | UInt32 MSB | Gate+ | Siempre 0 si el cartucho no<br />proporciona Gate+. |
| 300106<br />400106 | 0x0069 | UInt32 LSB | ^ | ^ |
| 300107<br />400107 | 0x006A | UInt32 MSB | HNAC |  |
| 300108<br />400108 | 0x006B | UInt32 LSB | ^ | ^ |
| 300109<br />400109 | 0x006C | UInt32 MSB | LNAC |  |
| 300110<br />400110 | 0x006D | UInt32 LSB | ^ | ^ |
| 300111<br />400111 | 0x006E | Float 32 MSB | HNAP |  |
| 300112<br />400112 | 0x006F | Float 32 LSB | ^ | ^ |
| 300113<br />400113 | 0x0070 | UInt32 MSB | ACC | Siempre 0 si no es un cartucho<br />ACC. |
| 300114<br />400114 | 0x0071 | UInt32 LSB | ^ | ^ |
| 300115<br />400115 | 0x0072 | UInt32 MSB | HACC | Siempre 0 si no es un cartucho<br />ACC. |
| 300116<br />400116 | 0x0073 | UInt32 LSB | ^ | ^ |
| 300117<br />400117 | 0x0074 | UInt32 MSB | LACC | Siempre 0 si no es un cartucho<br />ACC. |
| 300118<br />400118 | 0x0075 | UInt32 LSB | ^ | ^ |
| 300119<br />400119 | 0x0076 | Float 32 MSB | HACP | Siempre 0 si no es un cartucho<br />ACC. |
| 300120<br />400120 | 0x0077 | Float 32 LSB | ^ | ^ |
| 300121<br />400121 | 0x0078 | UInt32 MSB | TCC en tiempo real | Igual que TCC, pero el<br />valor se actualiza en tiempo real<br />durante una medición.<br />Vuelve a cero al finalizar<br />la medición. |
| 300122<br />400122 | 0x0079 | UInt32 LSB | ^ | ^ |
| 300123<br />400123 | 0x007A | UInt32 MSB | ICC en tiempo real | Véase arriba. |
| 300124<br />400124 | 0x007B | UInt32 LSB | ^ | ^ |
| 300125<br />400125 | 0x007C | UInt32 MSB | Gate+ en tiempo real | Véase arriba. |
| 300126<br />400126 | 0x007D | UInt32 LSB | ^ | ^ |
| 300127<br />400127 | 0x007E | UInt32 MSB | HNAC en tiempo real | Véase arriba. |
| 300128<br />400128 | 0x007F | UInt32 LSB | ^ | ^ |
| 300129<br />400129 | 0x0080 | UInt32 MSB | LNAC en tiempo real | Véase arriba. |
| 300130<br />400130 | 0x0081 | UInt32 LSB | ^ | ^ |
| 300131<br />400131 | 0x0082 | Float 32 MSB | HNAP en tiempo real | Véase arriba. |
| 300132<br />400132 | 0x0083 | Float 32 LSB | ^ | ^ |
| 300135<br />400135 | 0x0086 | UInt32 MSB | ACC en tiempo real | Véase arriba. |
| 300136<br />400136 | 0x0087 | UInt32 LSB | ^ | ^ |
| 300137<br />400137 | 0x0088 | UInt32 MSB | HACC en tiempo real | Véase arriba. |
| 300138<br />400138 | 0x0089 | UInt32 LSB | ^ | ^ |
| 300139<br />400139 | 0x008A | UInt32 MSB | LACC en tiempo real | Véase arriba. |
| 300140<br />400140 | 0x008B | UInt32 LSB | ^ | ^ |
| 300141<br />400141 | 0x008C | Float 32 MSB | HACP en tiempo real | Véase arriba. |
| 300142<br />400142 | 0x008D | Float 32 LSB | ^ | ^ |
| 300151<br />400151 | 0x0096 | UInt16: año | Fecha y hora del último apagado brusco. | \< |
| 300152<br />400152 | 0x0097 | UInt16: mes | ^ | ^ |
| 300153<br />400153 | 0x0098 | UInt16: día | ^ | ^ |
| 300154<br />400154 | 0x0099 | UInt16: hora | ^ | ^ |
| 300155<br />400155 | 0x009A | UInt16: minuto | ^ | ^ |
| 300156<br />400156 | 0x009B | UInt16: segundo | ^ | ^ |
| 300157<br />400157 | 0x009C | UInt16 | Tiempo sin<br />alimentación | En segundos |
| 300165<br />400165 | 0x00A4 | UInt16: año | Fecha y hora del inicio del último protocolo. | \< |
| 300166<br />400166 | 0x00A5 | UInt16: mes | ^ | ^ |
| 300167<br />400167 | 0x00A6 | UInt16: día | ^ | ^ |
| 300168<br />400168 | 0x00A7 | UInt16: hora | ^ | ^ |
| 300169<br />400169 | 0x00A8 | UInt16: minuto | ^ | ^ |
| 300170<br />400170 | 0x00A9 | UInt16: segundo | ^ | ^ |
| 300171<br />400171 | 0x00AA | UInt16 | Línea de<br />medición<br />actual de<br />BactoSwitch | De 1 a 4 |
| 300172<br />400172 | 0x00AB | UInt16 | Línea de<br />medición<br />siguiente de<br />BactoSwitch | De 1 a 4 |
| 300173<br />400173 | 0x00AC | UInt16 | Caudal de<br />BactoSwitch | mL/min |
| 300174<br/>400174 | 0x00AD | UInt16 | Estado de<br/>BactoSwitch | 0 significa que no hay errores. |
| 300175<br/>400175 | 0x00AE | UInt16 | Conexión de<br/>BactoSwitch | 0 = no conectado<br/>1 = conectado<br/>correctamente |
| 300176<br/>400176 | 0x00AF | UInt16 | Estado de las válvulas<br/>de BactoSwitch | Máscara de bits 0x01 = válvula de<br/>la línea 1, etc.<br/>int 15 = todas abiertas |

</div>
