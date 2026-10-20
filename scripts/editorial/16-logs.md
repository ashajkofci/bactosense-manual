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
