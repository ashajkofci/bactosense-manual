---
title: "6. Warning and Error Messages"
sidebar_label: "6. Warning and Error Messages"
slug: /warning-and-error-messages
sidebar_position: 6
description: "BactoSwitch user manual: Warning and Error Messages."
---

## 6.1 Warnings {#section-6-1}

Warnings indicate a condition that requires user attention but does not necessarily stop operation.

*Table 6-1 BactoSwitch warnings*

| ERROR CODE | NAME | DESCRIPTION | CAUSES / WHAT TO DO |
| --- | --- | --- | --- |
| W15 | BactoSwitchLowFlow | The input flow is lower than the advised value. Measurement precision could be degraded. | **Typical causes:** inlet pressure below specification, partially closed upstream valve, or installation creating back-pressure at the drain.<br />**Recommended action:**<br />• In **Test BactoSwitch**, open the affected line alone and adjust it to 150 – 400 mL/min using the flow rate adjustment knob (see [Line testing and flow setting](04-installation.md#section-4-8)).<br />• Confirm that the inlet pressure is > 0.1 bar and Δh > 0.5 m (see [Figure 4-2](04-installation.md#section-4-4)).<br />• Correct any upstream restrictions. |

## 6.2 Errors {#section-6-2}

*Table 6-2 BactoSwitch errors*

| ERROR CODE | NAME | DESCRIPTION | CAUSES / WHAT TO DO |
| --- | --- | --- | --- |
| E60 | BactoSwitchFlowTooLowError | The measured flow on the selected input is below the acceptable range for single-line operation. | **Typical causes:** low inlet pressure; upstream restriction; drain installation causing back-pressure; valve manually closed.<br />**Recommended action:**<br />• In **Test BactoSwitch**, open the affected line alone and adjust it to 150 – 400 mL/min using the flow rate adjustment knob (see [Line testing and flow setting](04-installation.md#section-4-8)).<br />• Confirm that the inlet pressure is > 0.1 bar and Δh > 0.5 m (see [Figure 4-2](04-installation.md#section-4-4)).<br />• Correct any upstream restrictions.<br />• Check that the On/Off valve is open. |
| E61 | BactoSwitchDeviceNotFoundError | The BactoSense does not detect the BactoSwitch. | **Typical causes:** power not applied to the BactoSwitch; USB-C cable not connected or not screwed on both devices.<br />**Recommended action:** Connect the power supply to the BactoSwitch and secure the USB-C cable with the screw collars on both the BactoSwitch and the BactoSense. The device is detected automatically when connected. |
| E62 | BactoSwitchTimeoutError | A communication attempt with the BactoSwitch exceeded the expected time. | **Typical causes:** temporary communication issue on the USB-C link; loose or unscrewed connectors.<br />**Recommended action:** Check that the USB-C cable is seated and screwed on both ends and that the BactoSwitch is powered, then retry the operation. |
| E63 | BactoSwitchCommunicationError | A communication error occurred between the BactoSense and the BactoSwitch. | **Typical causes:** unstable or incorrect USB-C connection; cable not secured.<br />**Recommended action:** Inspect and re-secure the USB-C cable on both devices (use the screw collars), verify power to the BactoSwitch, and reboot both devices. |

If issues persist after applying the steps above, contact your local service partner (see [Contact](09-contact.md)).

For the warnings and errors of the BactoSense itself, see [Warnings, errors and troubleshooting](/bactosense/warnings-errors-and-troubleshooting) in the BactoSense user manual.
