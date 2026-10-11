---
title: "10. Measurements"
sidebar_label: "10. Measurements"
sidebar_position: 10
slug: /measurements
---

## 10.1 Samples {#section-10-1}

The BactoSense can measure manually collected grab samples using the manual sampling device, and also sample automatically from a connected water source using the online sampling device.

Sample types and pretreatments:

- Raw waters and especially surface waters must be filtered with a 20 µm filter. Particles can block the internal filters and damage the instrument. Clear water expected to be potable usually does not need filtering.
- Sparkling water and soft drinks cannot be measured by the instrument.
- Water with a high concentration of chlorine can affect the results of the measurement.
- The sample and operating conditions listed in the technical data in section 3.2 must be fulfilled.

## 10.2 Measuring automatically in online mode {#section-10-2}

Measuring in online (also called automatic or auto) mode describes a configuration, in which the BactoSense is connected to a water source using the online sampling device, and automatically draws and measures a sample at predefined intervals.

If you want to measure manually collected grab samples instead, refer to section 10.3.

### 10.2.1 Configuring and starting automatic online measurements {#section-10-2-1}

The following instructions show how to configure and start automatic online measurements using the online sampling device.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Make sure the online sampling device is tightly installed as described in section 5.5. | If you have the manual sampling device installed and want to change to the online sampling device, refer to section 8.10.2 to remove the manual sampling device and section 5.5 to install the online sampling device. |
| 2. | In the BactoSense user interface, navigate to the Home menu. |  |
| 3. | On the action bar at the bottom, select Auto mode and press Start. |  |
| 4. | Press the Start button. |  |
| 5. | Under Protocol, make sure the check box for “Online Sampling Device (with Backflush)” is checked. |  |
| 6. | Enter a sample name by tapping into the Sample name text field. |  |

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 7. | Select the desired gate to be applied to the measurements by tapping into the Gates text field. | Generally, default TCC and ICC gates are used. Use user-defined gates if your application requires it. Creating and adjusting gates is described in chapter 11. |
| 8. | Press the Next button. |  |
| 9. | Select the measurement interval using the wheel on the right hand side. | The measurement interval describes the time between different measurements and can be as short as 30 min and as long as 6 hours. |
| 10. | If needed, you can delay the starting time by unchecking the Start immediately box and choose a specific time to start. | The time setting of the BactoSense is described in section 8.3.2. |
| 11. | Press the Start button. | During the measurement, the current estimate of the cell concentration is displayed in the action bar under “Last”. |
| 12. | After each measurement, the time series graph is updated. | For more details press the View results button. |
| 13. | If you want to stop an online measurement series, refer to section 10.2.2. |  |

### 10.2.2 Terminating automatic online measurements {#section-10-2-2}

Follow the steps below to terminate a measurement series in auto mode.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Press the Stop button on the user interface. |  |
| 2. | Confirm the message to stop the auto mode measurement series. |  |
| 3. | If a measurement is running, you can select whether you want to abort it immediately, or wait for completion. |  |
| 4. | If you don’t continue with another measurement series within the next hours, proceed with removing the online sampling device as described in section 8.10.1 and installing the manual sampling device as described in section 5.4. |  |
| 5. | If you want to view your data, refer to section 10.2.3. If you want to retrieve your data, refer to chapter 12. |  |

### 10.2.3 Reviewing automatic online measurements {#section-10-2-3}

In Online (Auto) mode, tap the plot on the Home screen to open the line plot of the measurement results over time.

<img src="/img/figures-second/figure-0ecc3fd1aba0ae.webp" alt="Figure 10-1 Auto mode results overview plot" width="532" className="manual-figure" loading="lazy" />

*Figure 10-1 Auto mode results overview plot*

By tapping the button with a gear icon (arrow in figure 10-1), users can change the scales and which metrics are displayed (see figure 10-2). To display alarms on the plot, create an alarm and enable its "Display alarm" setting (see section ).

<img src="/img/figures-second/figure-f099449be57ef2.webp" alt="Figure 10-2 Auto mode plot settings" width="531" className="manual-figure" loading="lazy" />

*Figure 10-2 Auto mode plot settings*

<table className="manual-table"><tbody><tr><td>1</td><td>Adjust the percentage scale. Touch the upper half of the scale bar to move the upper limit. Touch the lower half to move the lower limit.</td></tr><tr><td>2</td><td>Adjust the counts scale. Touch the upper half of the scale bar to move the upper limit. Touch the lower half to move the lower limit.</td></tr><tr><td>3</td><td>Choose the display interval or filter by name (see section 10.7).</td></tr><tr><td>4</td><td>Choose the vertical scale:<br />• Auto scale adapts to the current data<br />• Full scale shows the full range of the instrument<br />• Custom scale is adjusted with sliders 1 and 2. Log and Linear control the counts scale (right-hand-side scale).</td></tr><tr><td>5</td><td>Choose which metrics to display on the graph.</td></tr></tbody></table>

## 10.3 Measuring in manual mode {#section-10-3}

Measuring in manual mode describes a configuration, in which the manual sampling device is connected to the BactoSense, and the operator attaches individual grab samples collected in 5 mL screw cap tubes to the instrument.

### 10.3.1 Performing a measurement in manual mode {#section-10-3-1}

The following instructions show how to configure and start a measurement in manual mode.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Make sure the manual sampling device is tightly installed as described in section 5.4. |  |
| 2. | If the manual sampling device has been newly installed or the instrument has been switched off or idle for more than 3 days, it is recommended to clean the sampling device. If a Washstation is available, follow the procedure in section 15.2.2, otherwise the procedure in section 15.2.3. |  |
| 3. | If a cleaning of the manual sampling device has been conducted (see previous step), it is recommended to perform a prime prior to measuring the sample. Follow the procedure in section 10.9.3. |  |
| 4. | In the BactoSense user interface, navigate to the Home menu. |  |
| 5. | On the Home screen, press Mode and select Manual mode. Press Back, then Measure to open the measurement wizard. |  |
| 6. | Choose the Water Analysis protocol from the list of available protocols. | If you want technical replicates, select the number of replicates in Replications column. By default, one sample is measured. If more replicates are configured, multiple samples are drawn from the same sample tube. |
| 7. | Enter a sample name by tapping into the Sample name text field, entering the name and pressing OK. |  |
| 8. | Check whether your desired gate is configured in the Gates field. If you wish to use another gate, tap into the Gates field and select the desired gate from the available options (depending on the cartridge installed). | Generally, default TCC and ICC gates are used. Use user-defined gates if your application requires it. Creating and adjusting gates is described in chapter 11. |
| 9. | Press the Next button. |  |

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 10. | Attach a 5 mL screw-cap tube containing 2 – 5 mL of sample to the manual sampling device. |  |
| 11. | Press the Start button. | The estimated protocol duration and expected termination timepoint are displayed. The current state of the measurement is indicated in the top bar (e.g. Initializing, Mixing...) |
| 12. | After finishing the measurement, view the results. Results are explained in section 11.1. |  |
| 13. | If you want to proceed with the next measurement, press the New button. |  |
| 14. | If you want to see previous measurement results, press the View results button. |  |
| 15. | If you want to rename, regate or export the measurement, refer to the instructions in following sections. |  |
| 16. | If you don’t want to measure more samples and the instrument will be idle or switched off, perform a cleaning of the manual sampling device. If a Washstation is available, follow the procedure in section 15.2.2, otherwise the procedure in section 15.2.3. |  |

## 10.4 Renaming measurements {#section-10-4}

Measurements can be renamed from their result details view.

|  | WORK STEP |
| --- | --- |
| 1. | Navigate to the Home menu and press Results (Manual) or Results (Auto). |
| 2. | In the results list, select the measurement you want to rename. Exception: If you want to rename a group of replicates (see section 10.5), long- press on the group of replicates and then press the rename button. |
| 3. | In the result details view, press the Rename button (see section 11.1). |
| 4. | A keyboard and text field with the current sample name will appear. Use the keyboard to change the sample name and press OK. |

## 10.5 Working with measurement replicates {#section-10-5}

When working in manual mode, analysis protocols can be repeated. This is particularly useful for generating technical replicates of a single sample.

- The number of replicates can be selected when configuring a manual measurement, as described in section 10.3.1.
- In the manual mode results list, replicates are grouped into one entry, and the number in brackets next to the sample name indicates the number of replicates. In this view, the results shown for the replicate group consist of average and standard deviation. Individual replicate measurements can be accessed by pressing on the replicate group.
- Replicate groups can easily be renamed, deleted, exported or regated after a long-press on the replicate group in the manual mode results list.

## 10.6 Regating measurements {#section-10-6}

Adjusting the gates of individual measurements or a set of measurements is described in section 11.4.

## 10.7 Filtering measurements {#section-10-7}

Filtering can be applied to display a subset of the measurement results. Filtering by text and date range is possible.

|  | WORK STEP |
| --- | --- |
| 1. | Navigate to the Home menu and press Results (Manual) or Results (Auto). |
| 2. | In the results list, press the Filter button. |
| 3. | Specify your filter by applying one or both of the following options:<br/>• Define a date range by specifying start and end date<br/>• Define a text string to filter by measurement name |
| 4. | Press OK. The result list will be refreshed showing filtered results. |

## 10.8 Exporting measurements {#section-10-8}

There are multiple ways to retrieve measurement data. Retrieval via HTTP, HTTPS, FTP and the web interface are described in chapter 12 and chapter 13. In this section, data export to a USB drive is described.

### 10.8.1 Export to a USB drive {#section-10-8-1}

It is possible to export selected or all measurements to a USB flash drive.

Make sure your USB flash drive is formatted in FAT32 format.

|  | WORK STEP |
| --- | --- |
| 1. | Navigate to the Home menu and press Results (Manual) or Results (Auto). |
| 2. | In the results list,<br/>• press the Export series button to export a set of measurements or all measurements.<br/>• select a group of replicates and press the Export series button to export this group of replicates.<br/>• select a single measurement and then press Export to export only a single measurement. |
| 3. | In the folder name field, the name of the target folder which will be created on the USB drive is shown. Change the name if desired. |
| 4. | Insert a USB stick with enough available memory. Press Refresh list to display the connected USB stick. |
| 5. | Export options<br/>• press Export results to export only the basic results (see details in the user interface)<br/>• press Export all to export results, raw data and diagnostic information (see details in the user interface) |
| 6. | Wait for the export to complete and then press OK. |

## 10.9 Available analysis and maintenance protocols {#section-10-9}

### 10.9.1 Overview of protocols in manual mode {#section-10-9-1}

Operators can choose between two analysis protocols in manual mode.

**Table 10-1 Analysis protocols for manual mode**

| PROTOCOL NAME | PROTOCOL DESCRIPTION |
| --- | --- |
| Water Analysis | Analyze a water sample and finish with a cleaning cycle. If several replications are executed, the cleaning step is executed only once, at the end. A prime is executed automatically between replicates. |
| Beads Analysis | This protocol is intended for the analysis of calibration beads and is used with the Validation Kit. The protocol automatically finishes with a cleaning cycle. If several replications are executed, the cleaning step is executed only once, at the end. |

Maintenance protocols can be executed before or between analysis protocols, to prepare, flush, or clean the system. In manual mode, the following maintenance protocols are available:

**Table 10-2 Maintenance protocols for manual mode**

| PROTOCOL NAME | PROTOCOL DESCRIPTION |
| --- | --- |
| Clean Optics | Launches a cleaning step that washes all components in contact with the sample inside the BactoSense, except the sampling device. |
| Clean Sampling Device with Washstation | Cleans the manual sampling device such that the outside filter, the needle's interior and exterior can be fully washed between measurements, after a dirty sample or in case of filter blockage. The Washstation device must be mounted on the manual sampling device and a cartridge must be installed for this protocol to appear. This protocol has a higher disinfection power than the Clean Sampling Device protocol and should therefore be preferred. Using the Washstation is the best way to keep the manual sampling device clean and to avoid cross- contaminations. Instructions for this protocol can be found in section 15.2.2. |
| Clean Sampling Device | Cleans the sampling device so that the external filter and the needle’s interior can be washed after an extremely loaded sample or in case of filter blockage. Instructions for this protocol can be found in section 15.2.3. |

| PROTOCOL NAME | PROTOCOL DESCRIPTION |
| --- | --- |
| Fill Tubing | Fills all tubing carrying reagents from the cartridge, to remove bubbles in the tubing. Cleans optics at the end of the process. |
| Prime and Clean Optics | Fills the tubing with liquid from the sample. Helps to dilute any residues after a clean sampling device for instance. Is finished by the cleaning step. |
| Prime | Loads sample into the instrument. Instructions can be found in section 10.9.3. |

### 10.9.2 Overview of protocols in auto mode {#section-10-9-2}

Operators can choose between two analysis protocols in Auto mode. Table 10-3 Analysis protocols for Auto mode

| PROTOCOL NAME | PROTOCOL DESCRIPTION |
| --- | --- |
| Online Sampling Device (with Backflush) | This is the standard protocol to be used with the online sampling device. This protocol includes automated cleaning procedures between measurements. |
| Manual Sampling Device | This protocol is used with the manual sampling device installed. |

### 10.9.3 Performing a Prime {#section-10-9-3}

Priming preconditions the BactoSense with the sample. Priming can be used to reduce the carryover of cells or unwanted substances, and takes approximately 5 minutes.

Use a Prime under the following circumstances:

- After a Clean Sampling Device protocol (with and without Washstation)
- After measuring a sample with a high chlorine concentration or any other unwanted substance which may affect subsequent measurements

|  | WORK STEP |
| --- | --- |
| 1. | Make sure the manual sampling device is tightly installed as described in section 5.4. |
| 2. | In the BactoSense user interface, navigate to the Home menu. |
| 3. | On the Home screen, press Mode and select Manual mode. Press Back, then Measure to open the measurement wizard. |
| 4. | Choose the Prime protocol from the list of available protocols. |
| 5. | Press the Next button. |
| 6. | Attach the sample you want to measure next to the manual sampling device. |
| 7. | Press the Start button. |
