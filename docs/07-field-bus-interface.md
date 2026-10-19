---
title: "7. Field Bus Interface"
sidebar_label: "7. Field Bus Interface"
slug: /field-bus-interface
sidebar_position: 7
description: "BactoSense user manual: Field Bus Interface."
---

## 7.1 Modbus TCP {#section-7-1}

### 7.1.1 General information for operating with Modbus TCP {#section-7-1-1}

The BactoSense can be operated via the Modbus Transmission Control Protocol (TCP). The  following requirements must be met:

- The computer and/or the management or control system must be compatible with  Modbus TCP.
- The computer and/or the management or control system must have software that can  properly process the data provided by the BactoSense.
- The BactoSense must have the Modbus TCP service activated under Home → Settings → System settings → System services.
- The BactoSense must be connected to the bus system.
- To be able to work with the Modbus TCP, the network settings must be set correctly.

Additional information

- The Modbus TCP interface is integrated by default in the BactoSense.
- The Ethernet socket is located at the right-hand side of the instrument.
- The address table necessary for programming can be found in the [Modbus TCP address list](07-field-bus-interface.md#section-7-1-2).
- All registers are encoded big-endian.
- Modbus TCP communication runs on port 502.
- The error code lists can be found in [Non-critical errors](16-warnings-errors-and-troubleshooting.md#section-16-2) and [Critical errors](16-warnings-errors-and-troubleshooting.md#section-16-3).
- Modbus TCP can be used for time synchronisation. Follow the instructions in [Set NTP Servers](08-general-operations-and-configurations.md#section-8-7)  and select *Modbus TCP* as a sync source.

### 7.1.2 Address list on Modbus TCP: {#section-7-1-2}

The following values can be read with Modbus function 3 or 4 and written with Modbus  function 16.

<div className="manual-modbus-address-scroll manual-modbus-address-list">

| REGISTER<br/>NO | ADDRESS<br/>(OFFSET) | DATA TYPE | FUNCTION | VALUES |
| --- | --- | --- | --- | --- |
| 300201<br/>400201 | 0x00C8 | Unsigned<br/>integer bits<br/>0-15 | Digital<br/>Inputs.<br/>Ignored<br/>unless<br/>“Modbus<br/>TCP” is<br/>selected as<br/>source in<br/>Digital<br/>Inputs<br/>settings<br/>screen. | Bit 0: Input 1<br/>Bit 1: Input 2<br/>Bit 2: Input 3<br/>Bit 3: Input 4<br/>For correct bit to input<br/>mapping, refer to [Digital inputs configuration and PLC mode](06-io-box.md#section-6-5), in particular table 6-2<br/>and figure 6-5.<br/>Input 1111 = 15 means<br/>abort. |
| 300202<br/>400202 | 0x00C9 | Unsigned<br/>integer bits<br/>0-15 | Power<br/>control | Bit 0: Power off<br/>Bit 1: Reboot |
| 300203<br/>400203 | 0x00CA | Uint16 | Watchdog | Write setpoint in seconds to<br/>activate or reset countdown.<br/>After the value is written, a<br/>countdown decrements it by<br/>1 every second.<br/>During countdown, reading<br/>the register returns the<br/>setpoint.<br/>If countdown reaches 0, any<br/>ongoing protocol is aborted.<br/>Reading the register returns<br/>0<br/>Write 0 to disable<br/>countdown. |
| 300204<br/>400204 | 0x00CB | Uint16 | Test<br/>register | Write 1 to display a message<br/>on DI source page of GUI.<br/>Resets to 0 at startup. |
| 300211<br />400211 | 0x00D2 | UInt16: Year | Get/Set<br />Date and<br />Time.<br />Time is<br />changed as<br />soon as<br />write is<br />finished.<br />Only the<br />fields<br />where<br />registers<br />were<br />written are<br />changed: if<br />only month<br />is written,<br />only the<br />month is<br />updated. | [0,9999] |
| 300212<br />400212 | 0x00D3 | UInt16:<br />Month | ^ | [1,12] |
| 300213<br />400213 | 0x00D4 | UInt16: Day | ^ | [0,31] |
| 300214<br />400214 | 0x00D5 | UInt16: Hour | ^ | [0,24] |
| 300215<br />400215 | 0x00D6 | UInt16:<br />Minute | ^ | [0,59] |
| 300216<br />400216 | 0x00D7 | UInt16:<br />Second | ^ | [0,59] |
| The following values can be read with Modbus function 3 or 4. | \< | \< | \< | \< |
| 300001<br />400001 | 0x0000 | UInt16<br />(individual bits) | Digital<br />Outputs | Bit 0: Output 1<br />Bit 1: Output 2<br />Bit 2: Output 3<br />Bit 3: Output 4<br />For correct bit to output<br />mapping, refer to [Digital output configuration](../io-box/#section-6-6), or use the output<br />test interface as described<br />in [Digital and analogue output testing](../io-box/#section-6-8). |
| 300002<br />400002 | 0x0001 | UInt16<br />(individual bits) | Instrument<br />Status<br />0 = No<br />1 = Yes | Bit 0: Process running<br />Bit 1: Critical Error<br />Bit 2: Non-critical error<br />Bit 3: PLC mode active<br />Bit 4: Rapid heating (in<br />winter mode)<br />Bit 5: Background heating<br />(winter mode)<br />Bit 6: Sampling device in<br />use |
| 300003<br />400003 | 0x0002 | UInt16<br />(individual bits) | Alarm status, i.e., alarms raised during the last measurement. | Bit 0: Alarm 1<br />Bit 1: Alarm 2<br />Bit 2: Alarm 3<br />… |
| 300004<br />400004 | 0x0003 | UInt32 MSB<br />(individual bits) | Warning status, i.e., warnings raised during the last measurement. | Bit 0: Warning W01<br />Bit 1: Warning W02<br />...<br />Bit 31: Warning W32 |
| 300005<br />400005 | 0x0004 | UInt32 LSB<br />(individual bits) | ^ | ^ |
| 300006<br />400006 | 0x0005 | UInt16 | Error code | See error code list. Note:<br />E00 (unhandled software<br />error) is renamed to 999<br />to avoid confusion with<br />"no error". Non-critical<br />error codes remain until<br />either cleared<br />automatically by a<br />successful protocol or<br />cleared manually. |
| 300007<br />400007 | 0x0006 | UInt16 | Heartbeat | Seconds of the clock. The<br />value changes every<br />second, use this to<br />monitor responsiveness of<br />the system. |
| 300008<br />400008 | 0x0007 | UInt16 | Measuremen<br />t stage | IDLE 0<br />INITIALIZING 1<br />HEATING 2<br />FILLING 3<br />PRIMING 4<br />MIXING 5<br />INCUBATING 6<br />ANALYZING 7<br />CLEANING 8<br />FLUSHING 9<br />PROCESSING 10<br />VALIDATING 11<br />MOVING 12<br />EJECTING 13<br />EXPORTING 14<br />RENAMING 15<br />DELETING 16<br />SAVING 17<br />SELFCHECK 18<br />ABORTED 19<br />UNKNOWN 98<br />ERROR 99 |
| 300011<br />400011 | 0x000A | UInt16 | Measuremen<br />t Progress | [0, 100]<br />0 .. 100 % |
| 300012<br />400012 | 0x000B | Float 32 MSB | Temperature<br />of IO board | Celsius |
| 300013<br />400013 | 0x000C | Float 32 LSB | ^ | ^ |
| 300014<br />400014 | 0x000D | UInt16 | Humidity at<br />IO board | [0, 100]<br />0 .. 100 % |
| 300015<br />400015 | 0x000E | UInt16: Year | Date and time of last sampling | \< |
| 300016<br />400016 | 0x000F | UInt16: Month | ^ | ^ |
| 300017<br />400017 | 0x0010 | UInt16: Day | ^ | ^ |
| 300018<br />400018 | 0x0011 | UInt16: Hour | ^ | ^ |
| 300019<br />400019 | 0x0012 | UInt16: Minute | ^ | ^ |
| 300020<br />400020 | 0x0013 | UInt16: Second | ^ | ^ |
| 300021<br />400021 | 0x0014 | UInt16 | Cartridge<br />percentage | [0, 100]<br />0 .. 100 % |
| 300022<br />400022 | 0x0015 | UInt32 MSB | Cartridge<br />serial no |  |
| 300023<br />400023 | 0x0016 | UInt32 LSB | ^ | ^ |
| 300024<br />400024 | 0x0017 | UInt32 MSB | Fill serial no |  |
| 300025<br />400025 | 0x0018 | UInt32 LSB |  | ^ |
| 300026<br />400026 | 0x0019 | Uint16 | Cartridge<br />type | 1 = TCC<br />1002 = ICC<br />1030 = ACC |
| 300027<br />400027 | 0x001A | UInt16: Year | Cartridge<br />expiration<br />date | UTC date |
| 300028<br />400028 | 0x001B | UInt16: Month | ^ | ^ |
| 300029<br />400029 | 0x001c | UInt16: Day | ^ | ^ |
| 300031<br />400031 | 0x001E | UInt32 MSB | Instrument<br />Serial<br />number |  |
| 300032<br />400032 | 0x001F | UInt32 LSB | ^ | ^ |
| 300033<br />400033 | 0x0020 | String char 1-2 | Software<br />version | When shorter than 16<br />characters, the string is<br />padded with null<br />characters. Example:<br />'1.4.0-BS\0\0\0\0...' |
| 300034<br />400034 | 0x0021 | String char 3-4 | ^ | ^ |
| 300035<br />400035 | 0x0022 | String char 5-6 | ^ | ^ |
| 300036<br />400036 | 0x0023 | String char 7-8 | ^ | ^ |
| 300037<br />400037 | 0x0024 | String char 9-10 | ^ | ^ |
| 300038<br />400038 | 0x0025 | String char 11-<br />12 |  |  |
| 300039<br />400039 | 0x0026 | String char 13-<br />14 | ^ | ^ |
| 300040<br />400040 | 0x0027 | String char 15-<br />16 | ^ | ^ |
| 300041<br />400041 | 0x0028 | UInt16 | Memory<br />remaining | Approx measurements<br />remaining before disk is<br />full |
| 300042<br />400042 | 0x0029 | UInt16 | Lifetime of<br />valve<br />remaining | [0, 100], percentage of<br />movements remaining<br />before service. |
| 300043<br />400043 | 0x002A | UInt16 | Lifetime of<br />plunger<br />remaining | [0, 100], percentage of<br />movements remaining<br />before service. |
| 300044<br />400044 | 0x002B | UInt16: Year | Next service<br />due date | UTC date |
| 300045<br />400045 | 0x002C | UInt16: Month | ^ | ^ |
| 300046<br />400046 | 0x002D | UInt16: Day | ^ | ^ |
| 300101<br />400101 | 0x0064 | UInt32 MSB | TCC | Resets to zero after a<br />cleaning protocol or at<br />reboot. |
| 300102<br />400102 | 0x0065 | UInt32 LSB | ^ | ^ |
| 300103<br />400103 | 0x0066 | UInt32 MSB | ICC | Always 0 if cartridge does<br />not provide ICC. |
| 300104<br />400104 | 0x0067 | UInt32 LSB | ^ | ^ |
| 300105<br />400105 | 0x0068 | UInt32 MSB | Gate+ | Always 0 if cartridge does<br />not provide Gate+ |
| 300106<br />400106 | 0x0069 | UInt32 LSB | ^ | ^ |
| 300107<br />400107 | 0x006A | UInt32 MSB | HNAC |  |
| 300108<br />400108 | 0x006B | UInt32 LSB | ^ | ^ |
| 300109<br />400109 | 0x006C | UInt32 MSB | LNAC |  |
| 300110<br />400110 | 0x006D | UInt32 LSB | ^ | ^ |
| 300111<br />400111 | 0x006E | Float 32 MSB | HNAP |  |
| 300112<br />400112 | 0x006F | Float 32 LSB | ^ | ^ |
| 300113<br />400113 | 0x0070 | UInt32 MSB | ACC | Always 0 if not ACC<br />cartridge. |
| 300114<br />400114 | 0x0071 | UInt32 LSB | ^ | ^ |
| 300115<br />400115 | 0x0072 | UInt32 MSB | HACC | Always 0 if not ACC<br />cartridge. |
| 300116<br />400116 | 0x0073 | UInt32 LSB | ^ | ^ |
| 300117<br />400117 | 0x0074 | UInt32 MSB | LACC | Always 0 if not ACC<br />cartridge. |
| 300118<br />400118 | 0x0075 | UInt32 LSB | ^ | ^ |
| 300119<br />400119 | 0x0076 | Float 32 MSB | HACP | Always 0 if not ACC<br />cartridge. |
| 300120<br />400120 | 0x0077 | Float 32 LSB | ^ | ^ |
| 300121<br />400121 | 0x0078 | UInt32 MSB | Live TCC | Same as TCC, but the<br />value is updated live<br />during a measurement.<br />Returns to zero at the end<br />of the measurement. |
| 300122<br />400122 | 0x0079 | UInt32 LSB | ^ | ^ |
| 300123<br />400123 | 0x007A | UInt32 MSB | Live ICC | see above. |
| 300124<br />400124 | 0x007B | UInt32 LSB | ^ | ^ |
| 300125<br />400125 | 0x007C | UInt32 MSB | Live Gate+ | see above. |
| 300126<br />400126 | 0x007D | UInt32 LSB | ^ | ^ |
| 300127<br />400127 | 0x007E | UInt32 MSB | Live HNAC | see above. |
| 300128<br />400128 | 0x007F | UInt32 LSB | ^ | ^ |
| 300129<br />400129 | 0x0080 | UInt32 MSB | Live LNAC | see above. |
| 300130<br />400130 | 0x0081 | UInt32 LSB | ^ | ^ |
| 300131<br />400131 | 0x0082 | Float 32 MSB | Live HNAP | see above. |
| 300132<br />400132 | 0x0083 | Float 32 LSB | ^ | ^ |
| 300135<br />400135 | 0x0086 | UInt32 MSB | Live ACC | see above. |
| 300136<br />400136 | 0x0087 | UInt32 LSB | ^ | ^ |
| 300137<br />400137 | 0x0088 | UInt32 MSB | Live HACC | see above. |
| 300138<br />400138 | 0x0089 | UInt32 LSB | ^ | ^ |
| 300139<br />400139 | 0x008A | UInt32 MSB | Live LACC | see above. |
| 300140<br />400140 | 0x008B | UInt32 LSB | ^ | ^ |
| 300141<br />400141 | 0x008C | Float 32 MSB | Live HACP | see above. |
| 300142<br />400142 | 0x008D | Float 32 LSB | ^ | ^ |
| 300151<br />400151 | 0x0096 | UInt16: Year | Date and time of last abrupt shutdown. | \< |
| 300152<br />400152 | 0x0097 | UInt16: Month | ^ | ^ |
| 300153<br />400153 | 0x0098 | UInt16: Day | ^ | ^ |
| 300154<br />400154 | 0x0099 | UInt16: Hour | ^ | ^ |
| 300155<br />400155 | 0x009A | UInt16: Minute | ^ | ^ |
| 300156<br />400156 | 0x009B | UInt16: Second | ^ | ^ |
| 300157<br />400157 | 0x009C | UInt16 | Power off<br />time | In seconds |
| 300165<br />400165 | 0x00A4 | UInt16: Year | Date and time of last protocol start. | \< |
| 300166<br />400166 | 0x00A5 | UInt16: Month | ^ | ^ |
| 300167<br />400167 | 0x00A6 | UInt16: Day | ^ | ^ |
| 300168<br />400168 | 0x00A7 | UInt16: Hour | ^ | ^ |
| 300169<br />400169 | 0x00A8 | UInt16: Minute | ^ | ^ |
| 300170<br />400170 | 0x00A9 | UInt16: Second | ^ | ^ |
| 300171<br />400171 | 0x00AA | UInt16 | BactoSwitch<br />current<br />measure-<br />ment stream | From 1 to 4 |
| 300172<br />400172 | 0x00AB | UInt16 | BactoSwitch<br />next<br />measure-<br />ment stream | From 1 to 4 |
| 300173<br />400173 | 0x00AC | UInt16 | BactoSwitch<br />flow rate | mL/min |
| 300174<br/>400174 | 0x00AD | UInt16 | BactoSwitch<br/>status | 0 means no error. |
| 300175<br/>400175 | 0x00AE | UInt16 | BactoSwitch<br/>connection | 0 = not connected<br/>1 = connected<br/>successfully |
| 300176<br/>400176 | 0x00AF | UInt16 | BactoSwitch<br/>valve state | Bitmask 0x01 = valve of<br/>stream 1, etc<br/>int 15 = all open |

</div>
