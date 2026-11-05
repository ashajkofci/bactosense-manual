---
title: "2. Instrument Overview"
sidebar_label: "2. Instrument Overview"
slug: /instrument-overview
sidebar_position: 2
description: "BactoSwitch user manual: Instrument Overview."
---

## 2.1 BactoSwitch product overview {#section-2-1}

An overview of the BactoSwitch elements is shown below:

![BactoSwitch elements in views A to F](/img/bactoswitch/bactoswitch-elements.png "width=700")

*Figure 2-1 BactoSwitch elements*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Handle | 2 | Input lines connectors |
| 3 | Wall mount | 4 | Front cover fixation knob |
| 5 | Removable front cover | 6 | Selected line light indicator |
| 7 | Status light indicator | 8 | Water line to BactoSense |
| 9 | Water line from BactoSense | 10 | Water line output to drain |
| 11 | USB-C socket | 12 | Power socket |
| 13 | Manual line open/close override | 14 | Flow rate adjustment knob |
| 15 | Pressure regulator set clearance | 16 | Flow meter |

## 2.2 Light indicators {#section-2-2}

The behaviour of the light indicators is summarized in Table 2-1. Numbers refer to [Figure 2-1](02-instrument-overview.md#section-2-1), view B.

*Table 2-1 Light indicator behaviour*

| LIGHT INDICATOR | BEHAVIOUR |
| --- | --- |
| Line selection lights (6) | **Blue:** line open<br />**Off:** line closed |
| Status light (7) | **Green light:** idle<br />**Slow blinking green light:** measurement in progress, no sampling<br />**Fast blinking green light:** measurement in progress, sampling water from the line<br />**Red light:** measurement error |

## 2.3 Working principle {#section-2-3}

The scheme below shows the basic operation of the BactoSwitch (front cover removed for clarity). Water from each input line (1) flows through a check valve (2, not visible), through a pressure regulator (3), then through a needle flow valve (4) and finally through a solenoid valve (5). The open water lines (each of which can be open or closed) are then merged and flow out of the BactoSwitch to the online sampling device of the BactoSense (6). After flowing through the sampling device, water flows back to the BactoSwitch, through the flowmeter (7), and finally to the drain (8).

![BactoSwitch working principle with the numbered water path](/img/bactoswitch/working-principle.png "width=700")

*Figure 2-2 BactoSwitch working principle. See text above for explanations.*

:::info[Close unused lines]

Solenoid valves of unused input lines must be closed manually and the corresponding lines disabled in the software. See [Installation of the input lines](04-installation.md#section-4-4-3) and [Line configuration](04-installation.md#section-4-6) for more information.

:::

## 2.4 Type plate of the BactoSwitch {#section-2-4}

The type plate of the BactoSwitch can be found on the right-hand side of the instrument.

![Location and elements of the BactoSwitch type plate](/img/bactoswitch/type-plate.png "width=654")

*Figure 2-3 Type plate of the BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Manufacturer | 2 | Product name |
| 3 | Serial number | 4 | Barcode |
| 5 | Manufacturing date | 6 | Country of origin |
| 7 | Voltage and power requirements | 8 | CE mark |
| 9 | UKCA mark | 10 | Compliance with Canadian EMC<br />and interference standards |
| 11 | Read the instructions and operate<br />with caution | 12 | Disposal information |

## 2.5 Type plate of the BactoSwitch power supply {#section-2-5}

The type plate of the BactoSwitch power supply can be found on the power supply and has the following elements:

![Elements of the BactoSwitch power supply type plate](/img/bactoswitch/power-supply-type-plate.png "width=514")

*Figure 2-4 Type plate of the BactoSwitch power supply unit*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Manufacturer | 2 | Product name |
| 3 | Part number (varies with plug type) | 4 | Manufacturing date |
| 5 | Service input voltage and frequency | 6 | Power consumption |
| 7 | CE mark | 8 | UKCA mark |
| 9 | Compliance with Canadian EMC<br />and interference standards | 10 | Read the instructions and operate<br />with caution |
| 11 | Disposal information |  |  |

## 2.6 Technical data {#section-2-6}

*Table 2-2 Technical data of the BactoSwitch*

| PROPERTY | SPECIFICATION |
| --- | --- |
| **GENERAL** | \< |
| Required hardware version | BactoSense CORE/SMART, serial number 910500 onwards |
| Required software version | 3.1.0-BS and above |
| Operating environment | Indoor use |
| Operating altitude | Max. 2000 m (6600 feet) above sea level |
| Operating temperature | 5 °C – 30 °C (41 °F – 86 °F) |
| Operating humidity | 10 % – 90 % RH |
| Storage temperature | 5 °C – 30 °C (41 °F – 86 °F) |
| Storage humidity | 10 % – 70 % RH |
| Ventilation requirements | None |
| Sound pressure level | < 64 dBA |
| Protection class | Instrument: IP65<br />Power supply: IP67 |
| **SAMPLING** | \< |
| Sampling type | Online |
| Sample conditions | Water only<br />Temperature: 5 °C – 40 °C (41 °F – 104 °F)<br />Turbidity: 0 – 10 FTU, 0 – 10 FNU<br />Conductivity: 0 – 100’000 μS/cm at 20 °C<br />pH value: 5 – 12<br />Chlorine: max. 3 mg/L<br />Iron: max. 200 μg/L<br />Manganese: max. 50 μg/L<br />Solid particles: < 0.5 mm |
| Number of inputs | 4 |
| Input pressure range | 0.1 – 5 bar |
| Individual line flow rate range | 150 – 400 mL/min |
| Pressure regulator | Built-in and pre-adjusted (non-relieving) |
| Flow control | Adjustable needle valve |
| Line selection | Normally open, media-separated solenoid valves<br />Manual override close command |
| Fluidic interfaces | Push-in fitting ø6x1 mm |
| Inlet tubings | Material: PFA (transparent)<br />Outer diameter: 6 mm<br />Inner diameter: 4 mm<br />Maximum length: 4 m<br />Quantity: 4x |
| Online sampling device tubings | Material: PFA (transparent)<br />Outer diameter: 6.35 mm (1/4″)<br />Inner diameter: 4.35 mm<br />Recommended length: 200 mm<br />Quantity: 2x |
| Outlet tubing to drain | Material: PFA (transparent)<br />Outer diameter: 6 mm<br />Inner diameter: 4 mm<br />Maximum length: 2 m<br />Quantity: 1x |
| Wetted materials | PFA, SS 316L, SS 316Ti, FKM, EPDM, ENP-brass, PPS 40 % GF, PVDF, zirconia ceramic |
| **CLEANING** | \< |
| Agents and conditions | Water (temperature: 1 °C – 85 °C, pressure: max. 2 bar, time: max. 15 min)<br />Chlorine: max. 10’000 mg/L of active chlorine (temperature: max. 25 °C) |
| **PHYSICAL** | \< |
| Dimensions (W x D x H) | 264 x 206 x 300 mm (10.4 x 8.1 x 11.8″) |
| Weight | 12 kg (26.5 lbs) |
| Power supply dimensions (W x D x H) | 230 x 80 x 65 mm (9.0 x 3.1 x 2.6″) |
| Power supply weight | 0.9 kg (2.0 lbs) |
| **ELECTRICAL** | \< |
| Installation category | II |
| Pollution degree | 2 |
| Power supply | Power supply unit: 100 – 240 VAC ± 10 %, 50/60 Hz, 1.4 A<br />BactoSwitch: 24 VDC, 60 W |
| Power consumption | Max. 60 W |
| **INTERFACES** | \< |
| USB | 1 x USB 2.0 type C (female) |
