---
title: "16. Warnings, Errors and Troubleshooting"
sidebar_label: "16. Warnings, Errors and Troubleshooting"
sidebar_position: 16
slug: /warnings-errors-and-troubleshooting
---

If the instrument encounters a problem, it enters a different state, depending on the severity of the issue. There are warnings, noncritical errors and critical errors, each having different implications and requiring different actions.

## 16.1 Warnings {#section-16-1}

Warnings appear when unusual behaviour is detected during an otherwise successful measurement. They can indicate reduced accuracy of the measurement results or indicate impending errors. Unlike errors, warnings do not prevent the instrument from functioning, but users should pay attention to them as they can indicate sources of inaccuracies.

| WARNING | IMAGE |
| --- | --- |
| When unusual behavior is detected, a warning is shown next to the measurement results. More information on the warning can be found by clicking on the corresponding warning entry next to the measurement results or directly in the warning log. | ![BactoSense — High SSC baseline warning](/img/gui/en/warning-high-ssc-baseline.png "width=252 class=manual-figure") |

The following warning messages can be displayed:

**Table 16-1 Warnings**

| ERROR CODE | NAME | DESCRIPTION | CAUSES / WHAT TO DO |
| --- | --- | --- | --- |
| W01 | Cartridge expired | Cartridge reagents have expired. Measurement accuracy could be affected. | • Please replace the cartridge as soon as possible. |
| W02-04 | High baseline signal in FL1 / FL2 / SSC | Baseline signals are too high. This is usually due to bubbles or particles in suspension in the sample. Measurement accuracy could be affected. | • Check the inlet tubing for any signs of deposits.<br/>• Check the water connections, be sure that they are all tight (no air entry).<br/>• If the warning persists, please perform cleaning of instrument with the cleaning kit. |
| W05 | Incubator temperature off target | Temperature during incubation was more than 2 °C off target. Cell counts may be affected. The incubator may be defective. | • If the problem persists, please contact customer service. |
| W06 | No events detected | No events detected during the measurement. | • If the problem persists, please contact customer service. |
| W07 | TCC out of range | TCC is above the specification limit of BactoSense of 2’000’000 cells/ml. | • Please dilute the sample to ensure accuracy of the measurement. |
| W08 | Air bubbles detected | The sample appears to contain air bubbles. | • Check sampling device is installed properly.<br/>• Check the sample for bubbles.<br/>• If using online sampling device, check water is supplied at correct pressure. |
| W10 | Enclosure too cold | Enclosure is too cold, rapid heating has been activated before continuing protocol. | • Instrument cannot safely operate if internal temperature is too cold.<br/>• Rapid heating attempts to heat the enclosure to ensure safe operations.<br/>• Measurements will start once internal temperature is sufficient. |
| W11 | Service required | Service of the instrument is required. Measurement precision can no longer be guaranteed. Continued operation can lead to leaks, which can damage the instrument. | • Next service date is overdue.<br/>• Valve and plunger have reached end of life.<br/>• Please contact your service representative. |
| W13 | Laser end of life | Laser has reached end of life. | • Please contact your service representative. |
| W14 | Non-critical power cut | The instrument was powered off unexpectedly. | • Ensure the cleanliness of the instrument.<br/>• If the issue occurs frequently, install an uninterruptible power supply |

## 16.2 Non-critical errors {#section-16-2}

Non-critical errors prevent a measurement from terminating successfully, but do not prevent the instrument from running another measurement afterwards. These errors do not require human intervention. Some non-critical errors are promoted to critical errors if they repeat three times.

| NON-CRITICAL ERRORS |  |
| --- | --- |
| The protocol stops. The cause of the error is usually fixed by repeating the analysis or waiting.<br/>• Another measurement can immediately be started. If it completes successfully, the error state is cleared.<br/>• More information on the error can be found in the error log, by clicking on the corresponding error entry. | ![BactoSense — Non-critical empty sample error](/img/gui/en/noncritical-error-empty-sample.png "width=255 class=manual-figure") |

The following non-critical error messages can be displayed:

**Table 16-2 List of non-critical errors.**

| ERROR CODE | NAME | DESCRIPTION | CAUSES / WHAT TO DO |
| --- | --- | --- | --- |
| E01 | Cartridge door open | Cartridge door is open and prevents measurements from running. | • Close door and retry the measurement. |
| E08 | Enclosure too damp | Enclosure humidity is too high for safe operation. | • Replace desiccant bag, by unscrewing the large cap on the left-hand-side of the instrument (see [Replacement of the desiccant bag](15-maintenance.md#section-15-2-6)).<br/>• If the problem persists, please contact customer service. |
| E09 | System overheated | Inside temperature is too high for safe operation. | • Reduce ambient temperature or increase measurement interval to allow instrument to cool down. |
| E14 | Laser too hot | Laser temperature is too high for safe operation. | • Reduce ambient temperature or increase measurement interval to allow instrument to cool down. |
| E15 | Mixer inflation error | Underpressure detected during mix or dispense. | • Missing sample.<br/>• Air in the input.<br/>• Leak in the system.<br/>• Please execute the Clean Optics protocol (see [Overview of protocols in manual mode](10-measurements.md#section-10-9-1)). |
| E18 | Pump underpressure error | Underpressure detected during dispense. | • Missing sample.<br/>• Air in the input.<br/>• Leak in the system.<br/>• Please execute the Clean Optics protocol (see [Overview of protocols in manual mode](10-measurements.md#section-10-9-1)). |
| E19 | System overheated | The inner temperature is too high for operation. | • Reduce ambient temperature, or increase measurement interval to allow instrument to cool down. |
| E33 | Processing memory overflow | Signal processing circuits memory has overflown. | • Please execute the Clean Optics protocol (see [Overview of protocols in manual mode](10-measurements.md#section-10-9-1)).<br/>• Retry the measurement. |
| E42 | Enclosure too cold despite heating | Enclosure temperature remains too cold after heating procedure. | • Ambient temperature is less than 5 °C (41 °F).<br/>• Increase ambient temperature. |
| E44 | Pump module startup error | The pump module failed to power on correctly. | • Simply retry the measurement. |
| E45 | Low valid volume ratio error | The valid volume ratio is too low. This can be caused by a too elevated bacterial content in the water or turbidity/debris. | • The accuracy of the measurement is probably very low. Repeat the measurement while diluting the sample with clear water. |
| E46 | Cartridge is still busy | The cartridge was still initializing when the measurement started. | • Non-critical error. Repeat the measurement. If the problem persists, contact a service technician. |
| E48 | Microfluidic subsystem busy | The microfluidic controller is performing another task while the measurement was taken. | • Non-critical error. Repeat the measurement. If the problem persists, contact a service technician. |
| E49 | GPIO Timeout error | The processing board is waiting for another module to respond. | • Non-critical error. Repeat the measurement. If the problem persists, contact a service technician. |
| E50 | Pump motion blocked | The motion of the pump is blocked. | • Non-critical error. Repeat the measurement. If the problem persists, contact a service technician. |
| E51 | Unable to get temperature reading | Unable to get temperature reading. The control loop is thus disabled. | • Non-critical error. Repeat the measurement. If the problem persists, contact a service technician. |
| E52 | Cartridge valve motion blocked | The motion of the cartridge valve is blocked. | • Non-critical error. Repeat the measurement. If the problem persists, contact customer service. |
| E55 | M7 not connected | The acquisition processor cannot be initialized. | • Reboot the instrument.<br/>• If the problem persists, contact customer service. |
| E56 | Empty acquisition | No events detected during acquisition | • Clean the sampling device using the Washstation, then perform a measurement of clean water.<br/>• If the problem persists, contact customer service. |
| E57 | Cartridge busy (special command busy) | Communication with the cartridge failed. | • Non-critical error. Repeat the measurement.<br/>• If the problem persists, contact customer service. |
| E58 | Cartridge busy (timeout) | Communication with the cartridge failed. | • Check the electronic connector between the cartridge and the instrument.<br/>• Repeat the measurement.<br/>• If the problem persists, contact customer service. |
| E59 | Valve sensor error | Unable to read valve position. | • Please contact customer service. |

## 16.3 Critical errors {#section-16-3}

Critical errors interrupt the workflows of the instrument and require human intervention. The error source needs to be eliminated and the instrument set to running conditions again. Critical errors need to be cleared.

| CRITICAL ERRORS | IMAGE |
| --- | --- |
| If a critical error occurs during operation, it has the following effects:<br/>• The protocol immediately stops.<br/>• The instrument goes into a critical error state, and manual intervention is needed before any new protocol can be launched.<br/>• The cause of the error must be solved by an operator. The errors can then be manually cleared from the Error log, as described in [Error log](16-warnings-errors-and-troubleshooting.md#section-16-4-1) and [Clearing errors](16-warnings-errors-and-troubleshooting.md#section-16-5). | ![BactoSense — Critical missing cartridge error](/img/gui/en/critical-error-missing-cartridge.png "width=253 class=manual-figure") |

The following critical error messages can be displayed:

**Table 16-3  List of critical errors.**

| ERROR CODE | NAME | DESCRIPTION | CAUSES / WHAT TO DO |
| --- | --- | --- | --- |
| E00 | General error | Unhandled error. | • Please contact customer service |
| E02 | Cartridge empty | Cartridge is empty. | • Replace cartridge (see [Change cartridges](08-general-operations-and-configurations.md#section-8-9-4)) |
| E04 | Cartridge missing | Cartridge is missing. | • Insert a cartridge (see [Installing a cartridge](08-general-operations-and-configurations.md#section-8-9-6)) |
| E05 | Full waste bag | Cartridge waste bag is full. | • Replace cartridge (see [Change cartridges](08-general-operations-and-configurations.md#section-8-9-4)) |
| E06 | Cartridge communication impossible | Cartridge is disconnected, door is open, or cartridge electronics are damaged. | • Make sure the cartridge’s electronic cable is connected properly, and that the door is properly closed.<br/>• If that doesn’t help, replace the cartridge and inform customer service. |
| E07 | Storage disk full | Insufficient storage space to continue operation. | • Delete old measurements and try again (see [Clearing of disk space](15-maintenance.md#section-15-2-8))<br/>• This will delete the measurements permanently from the device.<br/>• Export measurements as backup solution. |
| E12 | FPGA initialization error | Failed to initialize the signal processing chip. | • Reboot the instrument. |
| E16 | Processing error | An error was discovered while processing the signals. | • The accuracy of the latest result is not guaranteed. Please repeat the analysis. |
| E17 | Overpressure detected | Overpressure detected during dispense. | • Likely cause: The output filter is probably clogged.<br/>• Optical flow cell blocked.<br/>• Please call customer service. |
| E20 | Abnormal shutdown | Protocol interrupted for unknown reasons, usually due to a power cut. | • Usually indicates a power cut, or other external interruption to the measurement.<br/>• Perform a Clean Optics and Clean Sampling Device protocol before starting a new measurement (see [Overview of protocols in manual mode](10-measurements.md#section-10-9-1)). |
| E23 | Temperature Sensor Communication Error | Communication with temperature sensor on IO board failed. | • Please contact customer service. |
| E24 | Laser Communication Error | Communication with optical unit failed. | • Please contact customer service. |
| E25 | Pump Communication Error | Communication with pump module impossible. | • Please contact customer service. |
| E26 | Power Supply Communication Error | Communication with power supply module impossible. | • Please contact customer service. |
| E27 | Pump Communication timeout | Communication with pump module timed out. | • The cartridge door is open.<br/>• A cable is disconnected.<br/>• A circuit board is damaged, either in the pump or cartridge. |
| E28 | Empty dye supply | Dye tube connected to cartridge is empty. | • The tube is disconnected.<br/>• Cartridge is defective.<br/>• Repeat the cartridge change procedure, making sure that all tubes are properly connected. |
| E29 | Empty rinse fluid supply | Rinse fluid tube connected to cartridge is empty. | • The tube is disconnected.<br/>• Cartridge is defective.<br/>• Repeat the cartridge change procedure, making sure that all tubes are properly connected. |
| E30 | Empty bleach supply | Bleach tube connected to cartridge is empty | • The tube is disconnected.<br/>• Cartridge is defective.<br/>• Repeat the cartridge change procedure, making sure that all tubes are properly connected. |
| E31 | Cartridge electronics failure | Cartridge level can no longer be determined accurately. | • Replace cartridge and contact customer service. |
| E32 | Incompatible cartridge | Cartridge type is incompatible with this instrument or software. | • Make sure that you have the correct cartridge type for this instrument. |
| E33 | Processing memory overflow | Signal processing circuits memory has overflowed. | • Please execute the Clean Optics protocol (see [Overview of protocols in manual mode](10-measurements.md#section-10-9-1)).<br/>• Retry the measurement. |
| E38 | Cartridge not ready error | The new cartridge has not been initialized correctly | • Execute the “Cartridge Change” procedure (see [Change cartridges](08-general-operations-and-configurations.md#section-8-9-4)). |
| E39 | Laser current limit reached | The laser has reached its upper current limit; indicating end of life. | • The laser needs to be replaced. Contact a service technician. |
| E40 | Set of gates not found | Reference to the set of gates selected for the measurement cannot be found in the instrument settings. | • The set of gates has been deleted.<br/>• Change the set of gates and retry the measurement. |
| E41 | Set of gates incompatible | The set of gates selected for the measurement cannot be used with this cartridge. | • Correct cartridge change procedure was not followed.<br/>• Incorrect digital input configuration.<br/>• Change the set of gates and retry the measurement. |
| E43 | External temperature too low | Ambient temperature is outside of the instrument specifications. | • Increase ambient temperature.<br/>• Trying to operate or store the instrument below 5 °C (41 °F) can cause damage to the device. |
| E47 | Unable to find main reference magnet during homing | During initialization, the valve did not home properly. | • Please contact customer service. |
| E53 | Unable to communicate with motor | The communication to the motor controller of the mixer is defective. | • Please contact customer service. |
| E54 | Laser temperature sensor error | Unable to get the laser temperature. | • Please contact customer service. |

## 16.4 Logs {#section-16-4}

The instrument records errors, warnings, alarms and user activity in logs. On the Home screen, press **Settings**, then **Logs**. The **Logs** menu contains the following entries:

| ENTRY | CONTENT | AVAILABLE TO |
| --- | --- | --- |
| **Error log** | Critical and non-critical errors, and the events that cleared them. See [Error log](16-warnings-errors-and-troubleshooting.md#section-16-4-1). | Basic, Advanced and Admin users |
| **Warning log** | Warnings raised during measurements. See [Warning log](16-warnings-errors-and-troubleshooting.md#section-16-4-2). | Basic, Advanced and Admin users |
| **Alarm log** | Alarms triggered by measurement results, including BactoCloud alarms. See [Alarm log](16-warnings-errors-and-troubleshooting.md#section-16-4-3). | Basic, Advanced and Admin users |
| **Access log** | Failed login attempts. See [Access log and audit trail](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Admin users, with the Management Package |
| **Audit trail** | Operations and setting changes by users and the instrument. See [Access log and audit trail](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Admin users, with the Management Package |
| **Results (manual mode)**, **Results (online mode)**, **Validation results** | Measurement results of each mode. See [Filtering measurements](10-measurements.md#section-10-7) and [Results and Data Analysis](11-results-and-data-analysis.md). | Basic, Advanced and Admin users |

The newest entries are listed first. The **Error log**, **Warning log**, **Alarm log** and **Audit trail** show the **Displayed time span:** in the action bar. By default, it runs from the oldest to the newest entry; the **Audit trail** shows the last seven days. Press the time span to show another period (see [Changing the displayed time span](16-warnings-errors-and-troubleshooting.md#section-16-4-5)).

### 16.4.1 Error log {#section-16-4-1}

![BactoSense — Error log](/img/gui/en/error-log.png "width=558 class=manual-figure")

*Figure 16-1 : Error log*

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ① | Date and time of the event | ② | Type of the event. Only the newest entry shows its symbol in color; older entries show it in grey. | \< |
| ^ | ^ | ^ | ![BactoSense — Critical error log entry](/img/gui/icons/critical-error-event.png "width=32 class=manual-icon") | Critical error |
| ^ | ^ | ^ | ![BactoSense — Non-critical error log entry](/img/gui/icons/noncritical-error-event.png "width=32 class=manual-icon") | Non-critical error |
| ^ | ^ | ^ | ![BactoSense — Log entry: errors cleared](/img/gui/icons/errors-cleared-event.png "width=32 class=manual-icon") | Errors cleared |
| ③ | Code and short description of the error or event. The number in brackets shows how often the error has occurred since errors were last cleared. | ④ | **Clear errors** button (available to Basic, Advanced and Admin users when the instrument is idle). See [Clearing errors](16-warnings-errors-and-troubleshooting.md#section-16-5). | \< |
| ⑤ | Displayed time span. Press it to change the period. |  |  | \< |

The row color shows the type of each entry: red for critical errors, yellow for non-critical errors and blue for events that cleared errors. Error codes start with E and are listed in [Non-critical errors](16-warnings-errors-and-troubleshooting.md#section-16-2) and [Critical errors](16-warnings-errors-and-troubleshooting.md#section-16-3). Two events record that errors were cleared:

- **C01 – Errors cleared automatically**: after a non-critical error, the instrument completed a protocol successfully and considers the earlier errors resolved.
- **C02 – Errors cleared manually**: a user pressed **Clear errors** (see [Clearing errors](16-warnings-errors-and-troubleshooting.md#section-16-5)).

If no error was recorded in the displayed time span, **No errors in this date range** is shown.

:::info[View event details]

Select an entry to open a page with more information on the cause of the error and recommended resolution steps. Press **Close** to return to the log.

:::

### 16.4.2 Warning log {#section-16-4-2}

The **Warning log** lists the warnings raised during measurements. Each row shows:

- **Date**: date and time of the warning.
- **Description**: warning code and name. The codes are listed in [Warnings](16-warnings-errors-and-troubleshooting.md#section-16-1).
- **Context**: where the warning occurred: **Manual** (manual mode), **Auto** (Online mode), **Maintenance** or **Validation**.

Select a warning to view its description. Press **Close** to return to the log. If no warning was recorded in the displayed time span, **No warnings in this date range** is shown.

### 16.4.3 Alarm log {#section-16-4-3}

The **Alarm log** lists the alarms triggered by measurement results. It includes the instrument's own alarms (see [Alarm configuration](08-general-operations-and-configurations.md#section-8-5)) and, when the instrument is connected to BactoCloud, the alarms raised by BactoCloud alarm rules (see [BactoCloud](14-bactocloud.md)). Each row shows:

- **Date**: date and time of the measurement that triggered the alarm.
- **Name**: a bell symbol and the alarm name. The bell is red for instrument alarms. For BactoCloud alarms, its color shows the severity: red for Critical, orange for Warning and blue for Info.
- **Alarm**: the alarm source, condition and threshold, for example *Cartridge Remaining < 10 %*.

BactoCloud alarms also show a cloud symbol at the end of the row. To acknowledge a BactoCloud alarm after reviewing it, press the check button beside the cloud symbol; acknowledged alarms show a check mark instead. **Acknowledge all** acknowledges every unacknowledged BactoCloud alarm in the list and is only available while at least one remains. Acknowledgement is recorded in BactoCloud. It documents the review but does not resolve the cause of the alarm.

Select an alarm to open the measurement result that triggered it.

### 16.4.4 Access log and audit trail {#section-16-4-4}

The **Access log** and the **Audit trail** are part of the Management Package (see [Management package](09-upgrade-packages.md#section-9-2)) and are available to Admin users. Without the package, pressing either button shows information about the Management Package instead.

**Access log** opens the **Failed login attempts** list for the last 30 days. Each row shows the **Date**, the **User ID**, the user's **Role** and the number of failed login attempts by that user on that day. If there were none, **No failed login attempts** is shown.

**Audit trail** lists relevant operations and setting changes made by users or by the instrument. Each entry shows the **Date**, the **User** and the **Event** and, where they apply, the changed **Parameter** with its **Old value** and **New value**. The audit trail is also included when exporting all data to a USB drive and can be viewed in the web user interface.

### 16.4.5 Changing the displayed time span {#section-16-4-5}

The following procedure applies to the **Error log**, **Warning log**, **Alarm log** and **Audit trail**.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | Open the log and press the time span button next to **Displayed time span:**. | The **Define time span** screen opens. |
| 2. | Tap the field under **Start date** and select the first day in the calendar. Tap the time field below it and set the hour and minute. Set **End date** and its time in the same way. | The end cannot be earlier than the start. |
| 3. | Press **OK**. | The log lists only the entries within the selected period. |

To restore the default time span, press **Reset** on the **Define time span** screen, then press **OK**.

## 16.5 Clearing errors {#section-16-5}

Critical errors must be cleared manually. Make sure to first solve the origin of the problem, then manually clear the error with the steps below. Please note that the procedure below does not automatically solve the root cause of the error.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press **Settings** to open the settings menu. |  |
| 2. | Press **Logs**, then **Error log**. |  |
| 3. | Make sure you have resolved the problem leading to the displayed error(s). Then press **Clear errors**. | The button is available to Basic, Advanced and Admin users while no protocol is running.<br />![BactoSense — Clear errors control](/img/gui/en/error-log-clear-errors.png "width=245 class=manual-figure") |
| 4. | A **C02 – Errors cleared manually** event is added at the top of the log, and the symbols of the earlier errors turn grey. The instrument is ready to analyze again. |  |

## 16.6 Automatic self-check {#section-16-6}

The automatic self-check tool checks that each component of the BactoSense is functioning correctly and identifies those that are not. It can be used to identify problems with the instrument.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1\. | As an Advanced or Admin user, press Settings on the Home screen to open the settings menu. |  |
| 2\. | Press the Maintenance button. |  |
| 3\. | Press the Self-check button. |  |
| 4\. | :::info[Additional information] Press the Rerun button. Once execution has terminated, the instrument shows a list of all tests, with a green PASS or red FAIL indicator. Some tests may be skipped: if the system cannot communicate with the cartridge, all the tests that require cartridge communication are skipped. ::: | ![BactoSense — Self-check results](/img/gui/en/self-check-results.png "width=245 class=manual-figure") |

## 16.7 Operation at low temperature {#section-16-7}

The instrument must be operated within a specific temperature range to prevent damage and ensure reliable and reproducible measurement results (see [Technical data](03-instrument-overview.md#section-3-2)). At very low and very high ambient temperatures (below 5 °C (41 °F) or above 30 °C (86 °F)), protocols are not executed. At low ambient temperatures, the instrument automatically warms up prior to a measurement to reach the required temperature. During this heating process, the instrument status shows “Heating...”. If the target temperature cannot be reached after several hours, the protocol exits with an error (table 16-2, E42).

:::info[Allow time for heating]

Measurements can be delayed if extensive heating is necessary. To avoid this, keep the instrument temperature above 10 °C (50 °F).

:::

## 16.8 Troubleshooting {#section-16-8}

The following table provides an overview of issues and resolutions. If the issue cannot be resolved, please contact your local service representative or bNovate customer service. Contact information for bNovate customer service can be found in [Contacting customer service](19-contact.md#section-19-1).

**Table 16-4 Troubleshooting instructions**

|  |  |
| --- | --- |
| OBSERVATION | INSTRUCTION |
| Nothing on display | • Check whether the BactoSense is connected to power and switched on. |
| Unresponsive or flickering user interface | • Potential electromagnetic interference from nearby machine (e.g. pump). Relocate BactoSense. |
| Error message on the display | • Respond to the error message as described in this chapter. |
| The measurements appear to be wrong | • Ensure that the sample and operating conditions described in [Technical data](../instrument-overview/#section-3-2) are met.<br/>• Check whether the instrument is correctly installed according to [Installation](../installation/).<br/>• Ensure that the servicing duties have been performed according to the servicing schedules described in [Periodic preventive maintenance by service professional](../maintenance/#section-15-1) and [Maintenance by the user](../maintenance/#section-15-2).<br/>• Perform an instrument cleaning using the Cleaning Kit.<br/>• Perform an instrument validation using the Validation Kit. |
