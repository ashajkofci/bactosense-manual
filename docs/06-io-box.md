---
title: "6. I/O-Box"
sidebar_label: "6. I/O-Box"
slug: /io-box
sidebar_position: 6
description: "BactoSense user manual: I/O-Box."
---

The IO-box is an accessory to the BactoSense. It can be used to connect the in- and outputs  of the BactoSense to a PLC/SCADA system.

As an alternative to the I/O-Box, Modbus TCP can be used. Details can be found in section 7.1.

## 6.1 Technical specifications {#section-6-1}

:::info[Review the specifications]

Carefully read the technical specifications before preparing the integration.

:::

### 6.1.1 Digital inputs {#section-6-1-1}

- Use: 4 digital inputs referenced to Common allow the instrument to be controlled by an  external voltage (e.g. voltage coming out of a PLC).
- Specifications: optocoupler input: forward voltage 1.2 VDC with 3 kΩ in serial, cathode  connected to COMMON, max. 30 mA, max. 50 mW.

Additional notes

:::info[Digital input requirements]

- The Common (port 18) must be connected to the reference voltage of the input voltage  (e.g. 0 V / Ground of the external power source).
- The digital inputs (ports 14 - 17) voltage range is between 5 - 30 V to produce a logic  high level or "1". Otherwise it produces a logic low level or "0".
- If any of the digital inputs is at a logic high level or "1", the BactoSense enters "PLC- mode".

:::

### 6.1.2 Digital outputs {#section-6-1-2}

- Use: 4 digital outputs allow the reporting of 4 different logic states, e.g. errors or  alarms. As the output terminals are the output of a MOS-based solid-state relay  (LH1540AAB), there is no polarity. Terminals A and B can be used in either direction and  can be swapped. Terminals A and B are either in high-impedance (disconnected) or low- impedance (connected) state.
- Specifications: freely configurable, SSR output: max. 48 VDC, max. 300 mW,   ON- resistance 2 Ω.

### 6.1.3 Analogue outputs {#section-6-1-3}

- Use: 2 analogue outputs (4 – 20 mA) allow the reporting of two analogue values, e.g.  Total Cell Count and HNAP. Note: For the transmission of precise results, the use of  Modbus TCP is recommended. See section 7.1
- Specifications: 2 x 0/4 – 20 mA, recommended 250 Ω load

### 6.1.4 IO-box schematics {#section-6-1-4}

<img src="/img/manual/asset-da9ff033639d.png" alt="Original manual illustration, printed page 32" width="633" loading="lazy" />

*Figure 6-1 BactoSense IO-box schematics.* 

### 6.1.5 IO-box overview {#section-6-1-5}

<img src="/img/manual/asset-30fbce76cafa.png" alt="Original manual illustration, printed page 33" width="634" loading="lazy" />

*Figure 6-2 Overview of the BactoSense IO-box*

<table><tbody><tr><th>①</th><th>Position of the digital outputs<br />Terminals 1 – 8<br />Cable requirements:<br />• AWG 12 – 22<br />• Cross section: 0.25 – 2.5<br />mm2</th><th>②</th><th>Position of the analogue outputs<br />Terminals 9 – 12<br />Cable requirements:<br />• AWG 12 – 22<br />• Cross section: 0.25 – 2.5 mm2</th></tr><tr><td>③</td><td>Position of the digital inputs<br />Terminals 14 – 18<br />Cable requirements:<br />• AWG 12 – 22<br />• Cross section: 0.25 – 2.5<br />mm2</td><td colSpan="2"></td></tr></tbody></table>

### 6.1.6 IO-box reference table {#section-6-1-6}

*Table 6-1 IO-box reference table*

| Terminal | Function | Terminal Color | Cable Color |
| --- | --- | --- | --- |
| 1 | Digital output 1 - A | Grey | Red |
| 2 | Digital output 1 - B | Grey | Blue |
| 3 | Digital output 2 - A | Grey | Pink |
| 4 | Digital output 2 - B | Grey | Grey |
| 5 | Digital output 3 - A | Grey | Yellow |
| 6 | Digital output 3 - B | Grey | Green |
| 7 | Digital output 4 - A | Grey | Brown |
| 8 | Digital output 4 - B | Grey | White |
| 9 | Analogue 1+ mA | Orange | Black |
| 10 | Analogue 1- mA | Blue | Purple |
| 11 | Analogue 2+ mA | Orange | Pink-Grey |
| 12 | Analogue 2- mA | Blue | Red-Blue |
| 13 | Shield | Green/Yellow |  |
| 14 | Digital input 1 | Grey | White |
| 15 | Digital input 2 | Grey | Brown |
| 16 | Digital input 3 | Grey | Blue |
| 17 | Digital input 4 | Grey | Black |
| 18 | Common | Black | Grey |

## 6.2 Connecting the IO-box {#section-6-2}

:::info[Check the I/O connections]

Review the technical specifications in sections 6.1.1 to 6.1.3 and the schematics in section  6.1.4 to ensure correct installation.

:::

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Insert the two M16 plugs of the IO-box on the right-hand side of the instrument. | <img src="/img/manual/asset-6a48e9fcafbe.png" alt="Procedure illustration, printed page 35" width="241" loading="lazy"/> |
| 2. | Remove the cover of the enclosure by unscrewing the four screws (circles). | <img src="/img/manual/asset-9f5e3eb5f1fd.png" alt="Procedure illustration, printed page 35" width="225" loading="lazy"/> |
| 3. | Insert cable through the cable gland (A, B or C) and connect the wires to the corresponding terminal according to the IO-Box reference table in section 6.1.6. | <img src="/img/manual/asset-fb6376380698.png" alt="Procedure illustration, printed page 35" width="222" loading="lazy"/> |
| 4. | Tighten the cable gland. Try to pull the cable to see if the cable gland is tight enough. |  |
| 5. | Optional: the IO-box can be mounted on a wall. M4 screws should be used with a minimum length of 20 mm. With the cover still removed, place the 4 screws and fix the enclosure to the wall. | <img src="/img/manual/asset-3e67c8d4a4e6.png" alt="Procedure illustration, printed page 35" width="242" loading="lazy"/> |
| 6. | Put the cover of the enclosure back and tighten the four screws to seal it. |  |

## 6.3 Connecting the outputs without IO-box {#section-6-3}

The BactoSense exposes the outputs on a 12 pin M16 female connector. The use of an IO- box is recommended however. The pinout of the connector is given below.

<img src="/img/manual/asset-223bcd55d2e3.png" alt="Original manual illustration, printed page 36" width="311" loading="lazy" />

*Figure 6-3 Overview of the output connector pinout*

<table><tbody><tr><td>A</td><td>Digital output 4 - B</td><td>G</td><td>Digital output 1 - B</td></tr><tr><td>B</td><td>Digital output 4 - A</td><td>H</td><td>Digital output 1 - A</td></tr><tr><td>C</td><td>Digital output 3 - B</td><td>J</td><td>Analogue 1+</td></tr><tr><td>D</td><td>Digital output 3 - A</td><td>K</td><td>Analogue 1-</td></tr><tr><td>E</td><td>Digital output 2 - B</td><td>L</td><td>Analogue 2+</td></tr><tr><td>F</td><td>Digital output 2 - A</td><td>M</td><td>Analogue 2-</td></tr></tbody></table>

## 6.4 Connecting the inputs without IO-box {#section-6-4}

The BactoSense exposes the inputs on a 5 pin M16 female connector. The use of an IO-box  is recommended. The pinout of the connector is given below.

<img src="/img/manual/asset-b6ab0aef5737.png" alt="Original manual illustration, printed page 37" width="320" loading="lazy" />

*Figure 6-4 Overview of the input connector pinouts*

<table><tbody><tr><td>1</td><td>Digital input 1</td><td>2</td><td>Digital input 2</td></tr><tr><td>3</td><td>Digital input 3</td><td>4</td><td>Digital input 4</td></tr><tr><td>5</td><td>Common</td><td colSpan="2"></td></tr></tbody></table>

## 6.5 Digital inputs configuration and PLC mode {#section-6-5}

The instrument can be controlled from an external Programmable Logic Controller (PLC). In order to avoid any conflicts when starting a process, the PLC first locks the instrument into “PLC Mode”, in which the instrument acts as a slave to the PLC. In this mode, all functions of the GUI related to running protocols and other processes are blocked. Once in PLC mode, protocols can be started and aborted from the PLC, using the Instrument’s digital inputs. The digital outputs then provide feedback to the PLC for safe operation.

The PLC mode is a remote-controlled Auto mode: the PLC can request a single measurement, or start the scheduler to run protocols at predefined intervals. Measurements started from the PLC also appear in the Auto mode results.

When no wires are connected to the digital inputs, their state is 0000.

*Table 6-2 Overview of digital inputs states and associated functions.*

<table><tbody><tr><th rowSpan="2">DESCRIPTION</th><th colSpan="4">DIGITAL INPUTS</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>Force PLC mode: The instrument is idle but a slave to<br />the PLC.</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Run configurable protocol / measurement interval</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>Abort current protocol</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Slave mode deactivated. End of PLC mode.</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>

To run a protocol several times, either use the scheduler option, or trigger a new  measurement from the PLC by resetting the inputs state to 1000, then back to the  corresponding “Run” state.

<img src="/img/manual/asset-6d53ddd3d47c.png" alt="Original manual illustration, printed page 39" width="532" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Example screenshot" width="32" loading="lazy" />

*Figure 6-5 Digital inputs configuration*

<table><tbody><tr><td>1</td><td>Enable or disable digital inputs.<br />If disabled, PLC mode is never<br />active.</td><td>2</td><td>Protocol parameters: Name, Protocol,<br />and Gates.</td></tr><tr><td>3</td><td>Select the inputs state you wish to<br />configure. When the state<br />selected in (3) is applied to the DI,<br />the protocol defined in (2), (4) and<br />(5) will be executed</td><td>4</td><td>If enabled, start the protocol<br />immediately after the inputs state has<br />changed. If not, wait for the duration<br />of the scheduler interval before<br />starting.</td></tr><tr><td>5</td><td>Scheduler settings: if the<br />scheduler is activated, the<br />protocol will be repeated at the<br />selected interval, until the inputs<br />state is changed. If the scheduler<br />is disabled, the protocol will run<br />only once.</td><td colSpan="2"></td></tr></tbody></table>

To configure the configurable digital inputs states, follow these steps:

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Navigate to the Home menu of the BactoSense user interface. |  |
| 2. | Press the Auto mode settings button. |  |
| 3. | Press the Digital inputs button. |  |
| 4. | Make sure the toggle button is set to Enabled. |  |
| 5. | Switch on and select the state you wish to configure in the Inputs list, enter a name for the sample, choose a protocol and choose a gate. |  |
| 6. | If you want the protocol to repeat automatically, enable the “Scheduler activated” check box, and choose an interval. |  |
| 7. | In the above case, choose if you want the protocol to execute immediately or at the end of the first interval with the “Start immediately” check box. | This option is only useful if the scheduler is activated. |
| 8. | Press the Save button. |  |

## 6.6 Digital output configuration {#section-6-6}

The values of digital outputs are modified in the following situations:

- When the instrument is powered off, all outputs are set to 0.
- When the instrument is powered on, the outputs show the current error state: none /  critical / non-critical.
- At the end of a measurement in Auto mode, the outputs are changed to indicate errors  and alarms, according to user-defined settings.
- When Reset is clicked on the output test screen or when Save is pressed on the digital  output settings, the outputs are updated to show the error state only (alarms are  ignored).
- After manually clearing the errors, the outputs are automatically reset (and therefore  show the new error state and no alarms).
- At specific times during the measurement, extra signals can be relayed. By default,  neither of them is relayed to the outputs. These are:

**-** Process running. Active when a protocol is running.

**-** Sampling device in use. Active when the sampling device is being used. It drops back  to inactive after the sample preparation step of measurement protocols.

**-** Low cartridge. Active when the cartridge level is below 15 %, or if the cartridge is  estimated to be empty within a month based on the current measurement  frequency.

**-** Expired cartridge. Active when the cartridge is expired.

The digital output state at the end of a measurement is defined according to these default  values, which can be changed in the settings:

- If there are no errors and no alarms, all terminals are set to the user-defined base state.  By default, this is 1 everywhere.
- In case of a critical error, the first output is set to 0.
- Non-critical errors set the second output to 0.
- Alarms set the third and fourth output to 0.
- In case of conflict in the output settings, priority is given to:

**-** 1. Critical errors

**-** 2. Non-critical errors

**-** 3. Cartridge states

**-** 4. Alarm

:::info[Admin access required]

Only Admin users can change the output settings, as these can critically affect external PLC  systems.

:::

The following procedure describes how to adjust the digital outputs.

<table><tbody><tr><th></th><th>WORK STEP</th><th>ADDITIONAL INFO / IMAGES</th></tr><tr><td>1.</td><td>Navigate to the Home menu of the BactoSense user interface.</td><td></td></tr><tr><td>2.</td><td>Press the Auto mode settings button.</td><td></td></tr><tr><td>3.</td><td>Press the Digital outputs button.</td><td></td></tr><tr><td>4.</td><td><Admonition type="info" title="Additional information">Choose the base state, .e. the output state when everything is fine: Output 1 2 3 4 Base state 1 1 1 1</Admonition></td><td>1: The switch is closed. 0: The switch is open.</td></tr><tr><td>5.</td><td>Choose which output the critical error state should be signaled on: Output 1 2 3 4 Critical error 0 / / /</td><td>By default, a critical error opens output 1. 1: The switch is closed. 0: The switch is open. /: The switch is not affected by this error.</td></tr><tr><td>6.</td><td>Choose which output the non-critical error state should be signaled on: Output 1 2 3 4 Non-critical error / 0 / /</td><td>By default, a non-critical error opens output 2.</td></tr><tr><td>7.</td><td>Assign alarms to the remaining outputs: Output 1 2 3 4 Alarm 1 / / 0 0 Alarm 2 ... ... ... ... ...</td><td>You can only assign alarms that are enabled. You can assign several alarms to the same output.</td></tr><tr><td>8.</td><td>Press the Save button.</td><td></td></tr></tbody></table>

## 6.7 Analogue output configuration {#section-6-7}

The analogue current output is changed in the following situations:

- When the instrument is powered off, both outputs are set to 0 mA.
- When the instrument is powered on, both outputs are set to 2 mA.
- When a measurement in Auto mode terminates after cell counting, the value is set  between 4 and 20 mA, according to range and source definition of the analogue  output settings. If the measurement fails due to an error before cell counting begins,  the output remains at its previous value.
- When a user manually tests the output, the current is set to whatever value the user has  chosen. The reset button sets them to 4 mA.

:::info[Precise output values]

For the transmission of precise results, the use of Modbus TCP is recommended. See section  7.1

Only **Admin** users can edit the analogue 4 .. 20 mA outputs.

:::

<img src="/img/manual/asset-9b0542204c11.png" alt="Original manual illustration, printed page 43" width="553" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Example screenshot" width="32" loading="lazy" />

*Figure 6-6 Analogue output settings*

<table><tbody><tr><td>1</td><td>Output port selection</td><td>2</td><td>Source: Defines which measurement<br />result is transmitted by this output<br />port.</td></tr><tr><td>3</td><td>Lower limit 4 mA: Which value of<br />the measurement result should<br />correspond to 4 mA.</td><td>4</td><td>Upper limit 20 mA: Which value of<br />the measurement result should<br />correspond to 20 mA.</td></tr><tr><td>5</td><td>If selected, interpolates the chosen cell count value range with a logarithmic scale as follows:<br /><code>ratio = 1 + 9 × (counts − low) / (high − low)</code><br /><code>output = 4 mA + log<sub>10</sub>(ratio) × 16 mA</code><br /><br />counts: Measured cell count<br />low: Lower cell count limit<br />high: Higher cell count limit<br />output: Current amplitude in mA</td><td colSpan="2"></td></tr></tbody></table>

The following procedure describes how to adjust the analogue outputs.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Navigate to the Home menu of the BactoSense user interface. |  |
| 2. | Press the Auto mode settings button. |  |
| 3. | Press the Analog outputs button. |  |
| 4. | Choose Port 1 or Port 2 (figure 6-6) |  |
| 5. | Choose the source (figure 6-6, position 2). |  |
| 6. | Define the lower limit of the range (figure 6-6, position 3). | When the source is equal to this value, 4 mA will be output on the selected port. |
| 7. | Define the upper limit of the range (figure 6-6, position 4). | When the source is equal to this value, 20 mA will be output on the selected port. |
| 8. | Press the Save button. |  |

## 6.8 Digital and analogue output testing {#section-6-8}

:::warning[Prevent unintended alarms]

The Test outputs interface allows to generate a physical output signal for testing  purposes. Make sure that such tests do not generate an alarm on your control system.

:::

<img src="/img/manual/asset-c774c093b426.png" alt="Original manual illustration, printed page 45" width="523" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Example screenshot" width="32" loading="lazy" />

*Figure 6-7 Testing analogue and digital outputs*

<table><tbody><tr><td>1</td><td>Define state of digital outputs for<br />test.</td><td>2</td><td>Set digital outputs to the state<br />defined in (1).</td></tr><tr><td>3</td><td>Set all digital and analogue<br />outputs at once.</td><td>4</td><td>Set current on both analogue<br />outputs.</td></tr><tr><td>5</td><td>Reset outputs to their state before<br />the tests.</td><td>6</td><td>Set current on port 2.</td></tr><tr><td>7</td><td>Set current on port 1.</td><td colSpan="2"></td></tr></tbody></table>

The following procedure describes how to test the analogue and digital outputs.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Navigate to the Home menu of the BactoSense user interface. |  |
| 2. | Press the Auto mode settings button. |  |
| 3. | Press the Test outputs button. |  |

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 4. | Enter the test values that you wish to send to the PLC. | For digital outputs: 1: The switch is closed. 0: The switch is open. |
| 5. | Tests can be triggered individually or together (see figure 6-7): • Testing only the digital outputs on the terminals 1 – 4. • Testing only the analogue outputs on ports 1, 2 or both. • Testing all outputs. | The output signals can be measured on the terminals. |
| 6. | Press the Reset button. |  |
