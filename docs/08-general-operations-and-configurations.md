---
title: "8. General Operations and Configurations"
sidebar_label: "8. General Operations and Configurations"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "BactoSense user manual: General Operations and Configurations."
---

## 8.1 Switching on and off {#section-8-1}

The power button of the BactoSense is located on the right hand-side of the instrument.

![Original manual illustration, printed page 58](/img/manual/asset-9b1ae5aeca7f.png "width=160")

*Figure 8-1 Power button of the BactoSense*

:::warning[Check the power supply]

Before switching the BactoSense on, make sure that the instrument is connected to a  stable power supply meeting the requirements described in [Connecting the BactoSense to power](05-installation.md#section-5-3).

:::

**Switching on** To switch the BactoSense on, shortly press on the power button. The power button LED  lights up constantly and after a few seconds, the welcome screen is displayed on the user  interface.

**Switching off** If you are logged in and want to switch the BactoSense off, tap on the logout button on the  top right corner of the user interface and select *Power off*. If you want to switch off from  the login page itself, press the power button for 10 seconds.

:::warning[Disconnect power safely]

To disconnect the BactoSense from power, first switch the instrument off. Then unplug  the power supply unit from the mains power source, before unplugging the power  supply plug from the BactoSense.

:::

## 8.2 Login, user roles and permissions {#section-8-2}

BactoSense operation requires users to log in. Different user roles with different permissions  are available. The user role permissions are listed in [User roles and permissions](08-general-operations-and-configurations.md#section-8-2-7). All logins are password  protected.

Login and logout can be performed using the login button displayed in the top right corner  of the user interface. The currently active user role is displayed next to that button.

### 8.2.1 Login {#section-8-2-1}

|  | WORK STEP |
| --- | --- |
| 1. | Press the login button on the top right corner of the user interface, or the login bar at the bottom in case you switched on the instrument. |
| 2. | For BactoSense CORE or BactoSense ID in the standard configuration: Select one of the user profiles Basic, Advanced or Admin. For BactoSense CORE or BactoSense ID upgraded with the Management package (see [Management package](09-upgrade-packages.md#section-9-2)) and advanced user management mode activated (see [Activating advanced user management mode](08-general-operations-and-configurations.md#section-8-2-4)), enter your user ID. |
| 3. | Enter the password and press OK. If you don’t know the password, ask your Admin user. In a new instrument no passwords are set. In that case, follow the procedure described in [Setting and changing passwords](08-general-operations-and-configurations.md#section-8-2-5). |
| 4. | After logging in, you see the BactoSense user interface. |
| 5. | To log out, follow the procedure described in [Manual logout](08-general-operations-and-configurations.md#section-8-2-2). |

### 8.2.2 Manual logout {#section-8-2-2}

|  | WORK STEP |
| --- | --- |
| 1. | Make sure all processes (e.g. measurements or cleanings) have completed. The idle state of the instrument is indicated on the left hand-side of the top bar of the BactoSense user interface. |
| 2. | Press the logout button in the top right corner of the user interface. |
| 3. | Select Log out Lock screen. |
| 4. | To log in again, follow the procedure described in [Login](08-general-operations-and-configurations.md#section-8-2-1). |

### 8.2.3 Auto-logout {#section-8-2-3}

It is possible to configure an automated logout after predefined period of inactivity.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |  |
| 2. | Press the System settings button. |  |
| 3. | Press the Users button. |  |
| 4. | Press the Settings button. |  |
| 5. | Configure the desired auto-logout time period. |  |
| 6. | Press Save. |  |

### 8.2.4 Activating advanced user management mode {#section-8-2-4}

With the *Advanced User Management* feature, an instrument admin can create different  users and assign different user roles (Basic, Advanced, Admin). This allows to give different  permissions to individual users, and log their activity for the audit trail.

Advanced user management mode is available for BactoSense SMART and PURE, and  BactoSense CORE or BactoSense ID upgraded with the management package (see [Management package](09-upgrade-packages.md#section-9-2)).

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |  |
| 2. | Press the System settings button. |  |
| 3. | Press the System configuration button. |  |
| 4. | Check the Advanced user management mode check box. |  |
| 5. | Press Save. |  |

### 8.2.5 Setting and changing passwords {#section-8-2-5}

Each user role is password protected.

**Setting a password at first login** Upon initial login with any user role, click *OK* when being prompted for a password. This  action will initiate the guided process for configuring your password. The only exception is  the service password, where a preset password is provided.

**Setting and changing a passwords** Each user profile can change its own password. Admin users are allowed to change  passwords from other user profiles. The following procedure describes how to change  passwords.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | On the Home screen, press Settings, then System settings. |  |
| 2. | Press on Users and then select the user profile you want to edit. Press Edit after selecting one check box. | Admin users are allowed to change passwords from other user profiles. |
| 3. | Press on Change PIN, enter the new pin twice and press Save. |  |

### 8.2.6 Changing password settings {#section-8-2-6}

Several password features such as expiration, length etc can be configured.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |  |
| 2. | Press the System settings button. |  |
| 3. | Press the Users button. |  |
| 4. | Press the Settings button. |  |
| 5. | Configure the password requirements based on your preferences. |  |
| 6. | Press Save. |  |

### 8.2.7 User roles and permissions {#section-8-2-7}

*Table 8-1 User roles and permissions*

| RIGHT | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| View last result | ✓ | ✓ | ✓ |
| View all results and export | ✓ | ✓ | ✓ |
| Start, stop, and schedule measurement | ✓ | ✓ | ✓ |
| Switch between Online and Manual mode | ✓ | ✓ | ✓ |
| View error and warning log | ✓ | ✓ | ✓ |
| Rename results | ✓ | ✓ | ✓ |
| Validate device | ✓ | ✓ | ✓ |
| Change their own password | ✓ | ✓ | ✓ |
| View system info | ✓ | ✓ | ✓ |
| See network settings | ✓ | ✓ | ✓ |
| View last self-check | ✓ | ✓ | ✓ |
| Change cartridge | ✓ | ✓ | ✓ |
| Clear errors | ✓ | ✓ | ✓ |
| See intervention log | ✓ | ✓ | ✓ |
| See validation results | ✓ | ✓ | ✓ |
| Delete results |  | ✓ | ✓ |
| Re-gate results |  | ✓ | ✓ |
| Adjust alarms |  | ✓ | ✓ |
| Adjust gates |  | ✓ | ✓ |
| Reboot |  | ✓ | ✓ |
| Run a self check |  | ✓ | ✓ |
| Delete old measurements |  | ✓ | ✓ |
| Export all |  | ✓ | ✓ |
| See intervention info |  | ✓ | ✓ |
| Export diagnostics |  | ✓ | ✓ |
| Change analogue and digital outputs |  |  | ✓ |
| Test analogue and digital outputs |  |  | ✓ |
| Change the passwords of other users |  |  | ✓ |
| Create other users |  |  | ✓ |
| Change authentication settings |  |  | ✓ |

| RIGHT | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Set device name |  |  | ✓ |
| Set date and time |  |  | ✓ |
| Change network settings |  |  | ✓ |
| Change services settings |  |  | ✓ |
| Activate Modbus with key or deactivate |  |  | ✓ |
| Change language |  |  | ✓ |
| Switch to demo mode |  |  | ✓ |
| Reset settings |  |  | ✓ |
| Full factory reset (except intervention log) |  |  | ✓ |
| Import settings |  |  | ✓ |
| Change automatic power-on settings |  |  | ✓ |
| Activate upgrade packages with code |  |  | ✓ |

## 8.3 Basic configurations {#section-8-3}

### 8.3.1 Language of the user interface {#section-8-3-1}

The language can only be changed by admin users.

|  | WORK STEP |
| --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |
| 2. | Press on System settings, then press Language. |
| 3. | Choose the language and press the OK button. |
| 4. | A message appears requesting a reload of the user interface. Confirm the message. |

### 8.3.2 Date and time {#section-8-3-2}

Date and time can only be changed by admin users.

:::info[Automatic time synchronization]

If time synchronization is enabled, either with NTP servers or through Modbus TCP, your  manual date and time settings will be overridden during the next synchronization.  Settings can be found under **System settings** &gt; **Date &amp; Time** &gt; **Time synchronization settings**. For setting up NTP server, please refer to [Set NTP Servers](08-general-operations-and-configurations.md#section-8-7).

:::

|  | WORK STEP |
| --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |
| 2. | Press the System settings button. |
| 3. | Press the Date &amp; Time button. |
| 4. | Enter the date and time. |
| 5. | Select the Time zone. |
| 6. | Press the Set button. |

### 8.3.3 Device name {#section-8-3-3}

The device name can only be changed by admin users.

|  | WORK STEP |
| --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |
| 2. | Press the System settings button. |
| 3. | Press the System configuration button. |
| 4. | Press the Device name button. |
| 5. | Enter your individual device name in the input field. |
| 6. | Press the Save button. |

### 8.3.4 Automatic power-on {#section-8-3-4}

The BactoSense has a built-in auto-restart functionality to automatically recover from  temporary power interruptions. Depending on the configuration, the instrument can simply  restart, but also return to operation by performing a self-cleaning process and restarting an  Online mode series.

|  | WORK STEP |
| --- | --- |
| 1. | As an Admin user, press Settings on the Home screen to open the settings menu. |
| 2. | Press the System settings button. |
| 3. | Press the System configuration button. |
| 4. | Select your automatic power-on preferences. Note: Self-cleaning only occurs if the power has been interrupted during a measurement. |
| 5. | Press the Save button. |

### 8.3.5 Sound notifications {#section-8-3-5}

You can turn on audible notifications to indicate the end of a manual measurement or  maintenance process, alarm or error. The notification is one or several beeping sounds from  the instrument.

|  | WORK STEP |
| --- | --- |
| 1. | As an Admin user, press Settings on the Home screen to open the settings menu. |
| 2. | Press the System settings button. |
| 3. | Press the System configuration button. |
| 4. | Activate the Sound notifications option. |
| 5. | Press the Save button. |

## 8.4 Import / export settings {#section-8-4}

Settings are exported to a USB drive as per [Export settings, diagnostics, or all to USB device](12-data-access-and-export.md#section-12-1-1). The settings are compiled to a  timestamped file ending with ***.bnv**. In order to import the settings in a new instrument, or  as a backup, it is necessary to copy the ***.bnv** file at the root of the USB drive, or in the  directory the file was exported to. If multiple copies of the settings are located in one USB  drive, the system will use the most recent one.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. | ![BactoSense — Home button](/img/gui/icons/home-button.png "width=48 class=manual-icon") |
| 2. | Press the Maintenance button. | ![BactoSense — Maintenance menu](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") |
| 3. | Press the Special export import button. | ![BactoSense — Special export and import options](/img/gui/icons/special-import-export-button.png "width=48 class=manual-icon") |
| 4. | Connect a USB drive. If needed, press the Refresh USB list button until the drive is detected. | Make sure the *.bnv file is at the root of the USB drive. The USB drive should be formatted in FAT32, which is the common standard. |
| 5. | Press Import settings | ![BactoSense — USB import and export](/img/gui/en/usb-import-and-export.png "width=263") |
| 6. | Select the settings you want to import. Measurement settings include gate sets, IO settings, alarms, and date and time settings. Network settings include IP, DNS, and NTP addresses | ![BactoSense — Import settings options](/img/gui/en/import-settings-options.png "width=269") |
| 7. | Press Import settings and wait until the device reboots |  |

## 8.5 Alarm configuration {#section-8-5}

The following rules apply to alarms:

- Only **Advanced** and **Admin** users can change the alarm settings.
- Alarms are only active in the **Online mode**.

BactoSense records alarms in the following ways:

- A popup is displayed in the graphical user interface
- An alarm bell icon appears in the top bar if the last measurement exceeded the alarm  threshold. The alarm is shown in the measurement summary when viewing a result.
- A signal can be sent out to a PLC through digital outputs (configurable).

![BactoSense — Alarm configuration](/img/gui/en/alarm-configuration.png "width=517")

*Figure 8-2 Alarm configuration in the BactoSense graphical user interface.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Select, enable or disable alarms.<br/>Users can configure up to 9<br/>alarms. | 2 | Name of the currently selected alarm. |
| 3 | Source of the alarm: Which<br/>measurement result should be<br/>evaluated. See figure 8-3. | 4 | Condition: Trigger the alarm when<br/>the measured parameter is larger<br/>than (&gt;) or smaller than (&lt;) the<br/>threshold. |
| 5 | Threshold | 6 | Display: If checked, a line will be<br/>shown on the Online mode plot, in the<br/>selected color. |

![BactoSense — Cartridge alarm source](/img/gui/en/cartridge-alarm-source.png "width=290")

*Figure 8-3 BactoSense alarm sources. For a selected source, a condition and a threshold are set.*  *In the example above, an alarm is triggered on a certain cartridge filling level.*

The following procedure describes how to configure the alarm:

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |  |
| 2. | Press the Online mode settings button. |  |
| 3. | Press Alarms. |  |
| 4. | Activate, select and configure the alarms (according to figure 8-2 and figure 8-3). | By default, no alarms are active. |
| 5. | Press Save to save the alarm configuration. |  |

## 8.6 Network configuration {#section-8-6}

:::info[Network settings]

Ask your network administrator for the correct settings.

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th>

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td>

![BactoSense — Home button](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Press the System settings button.

</td>

<td>

![BactoSense — System settings](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Press the Network button.

</td>

<td>

![BactoSense — Network settings](/img/gui/icons/network-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td rowSpan="2">

4\.

</td>

<td>

A: For Dynamic IP check the DHCP check box (1). Note: This is the preferred configuration for most cases when the BactoSense is connected to a router or switch.

</td>

<td rowSpan="2">

![BactoSense — Network configuration](/img/gui/en/network-configuration.png "width=260")

</td>

</tr>

<tr>

<td>

B: For Static IP uncheck the DHCP check box (1) and enter the desired network configuration (2). Note: This is the preferred configuration when the BactoSense is directly connected to a laptop via Ethernet. Make sure to also adjust the network configuration on the laptop accordingly.

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Press the Save button.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Press the Reboot now button.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 8.7 Set NTP Servers {#section-8-7}

Network Time Protocol (NTP) is a computer network protocol which is used to synchronise  time on computers across a network. By default, these are set to synchronise to the  Network Time Foundation servers (ntp.org). You have the possibility to set custom NTP  servers in the *Date and Time* menu.

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th>

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td>

![BactoSense — Home button](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Press the System settings button.

</td>

<td>

![BactoSense — System settings](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Press the Date &amp; Time button.

</td>

<td>

![BactoSense — Date and time settings](/img/gui/icons/date-time-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Press Time synchronization settings button.

</td>

<td>

![BactoSense — Date and time settings](/img/gui/en/date-and-time-settings.png "width=261")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Select the desired Sync Source.

</td>

<td>

:::info[Additional information]

Time synchronisation can be done via NTP server or Modbus TCP. More information about Modbus TCP can be found in [Modbus TCP](../field-bus-interface/#section-7-1)

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Update NTP servers.

</td>

<td>

![BactoSense — Time synchronization settings](/img/gui/en/time-synchronization-settings.png "width=261")

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Press the OK button.

</td>

<td>

:::info[Additional information]

By editing and changing a server address and pressing OK, it will automatically ping the server and update the date and time.

:::

</td>

</tr>

</tbody>

</table>

## 8.8 The BactoSense user interface {#section-8-8}

### 8.8.1 General structure and home menu {#section-8-8-1}

![BactoSense — Home screen overview](/img/gui/en/home-overview.png "width=587")

*Figure 8-4 The Home screen of the BactoSense user interface.*

The Home screen shows the latest measurement result. Press Settings to open the settings menu.

The BactoSense user interface is divided into 3 main sections:

|  |  |
| --- | --- |
| A | Top bar |
| B | Content view |
| C | Action bar |

The main elements of the user interface are:

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Home or return button. To<br />navigate through the menu.

</td>

<td>

2

</td>

<td>

Operation mode (Manual or Online)<br />Instrument status (currently active<br />process)

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Current view

</td>

<td>

4

</td>

<td>

Top bar status icons, see [Top bar status icons](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

<tr>

<td>

5

</td>

<td>

User Role<br />Current time

</td>

<td>

6

</td>

<td>

Logout or power off

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Results: display the measurement results for the selected mode.

</td>

<td>

8

</td>

<td>

Mode: choose Online mode for continuous measurements using the online sampling device, or Manual mode for measuring grab samples using the manual sampling device.

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Measure: open the measurement wizard and choose an analysis protocol (Manual mode).

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Depending on the user role, some options may not be visible or disabled.

### 8.8.2 Top bar status icons {#section-8-8-2}

Top bar icons are displayed in the bar in the top of the display. They indicate the status of  the instrument.

*Table 8-2 Top bar icons*

| ICON | DESCRIPTION | ICON | DESCRIPTION |
| --- | --- | --- | --- |
| ![BactoSense — Process running](/img/gui/icons/process-running-status.png "width=32 class=manual-icon") | Process running | ![BactoSense — Demo mode active](/img/gui/icons/demo-mode-status.png "width=32 class=manual-icon") | Demo mode activated |
| ![BactoSense — Cartridge almost empty](/img/gui/icons/cartridge-almost-empty-status.png "width=32 class=manual-icon") | Cartridge almost empty | ![BactoSense — Service required](/img/gui/icons/service-required-status.png "width=32 class=manual-icon") | Service required (see [Maintenance](15-maintenance.md)) |
| ![BactoSense — Cartridge nearing expiration](/img/gui/icons/cartridge-almost-expired-status.png "width=32 class=manual-icon") | Cartridge almost expired | ![BactoSense — Cartridge filling level](/img/gui/icons/cartridge-level-status.png "width=32 class=manual-icon") | Cartridge level indication |
| ![BactoSense — Cartridge not ready](/img/gui/icons/cartridge-not-ready-status.png "width=32 class=manual-icon") | Cartridge not correctly<br/>initialized or no cartridge | ![BactoSense — Cartridge empty](/img/gui/icons/cartridge-empty-status.png "width=32 class=manual-icon") | Cartridge empty |
| ![BactoSense — Critical error](/img/gui/icons/critical-error-status.png "width=32 class=manual-icon") | Critical error ([Critical errors](16-warnings-errors-and-troubleshooting.md#section-16-3)) | ![BactoSense — Cartridge expired](/img/gui/icons/cartridge-expired-status.png "width=32 class=manual-icon") | Cartridge expired |
| ![BactoSense — Alarm active](/img/gui/icons/alarm-status.png "width=32 class=manual-icon") | Alarm on last measurement<br/>(Online mode only, see [Alarm configuration](08-general-operations-and-configurations.md#section-8-5)) | ![BactoSense — Non-critical error](/img/gui/icons/noncritical-error-status.png "width=32 class=manual-icon") | Non-critical error ([Non-critical errors](16-warnings-errors-and-troubleshooting.md#section-16-2)) |

## 8.9 Cartridge management {#section-8-9}

The BactoSense cartridges contain the reagents required for measuring and maintaining the instrument clean. Available cartridge types are TCC (Total Cell Count), ICC (Intact Cell Count), EBC (E. coli Cell Count), ACC (Active Cell Count), CBC (Coliform Cell Count), and NBC (Enterococcus Cell Count). The following sections explain cartridge handling. Cartridge storage, transportation and refill are described in [Storage, Transport and Disposal](17-storage-transport-and-disposal.md).

### 8.9.1 General instructions for cartridge handling {#section-8-9-1}

When handling the cartridge, the following instructions must be followed:

*Table 8-3 Cartridge handling instructions*

|  |  |  |  |
| --- | --- | --- | --- |
| ![Follow the procedures described in this manual.](/img/manual/cell-28af480709ce.png "width=31 class=cartridge-handling-icon-31") | Follow the procedures<br/>described in this manual. | ![Procedure illustration, printed page 73](/img/manual/asset-32c675a70f3d.png "width=24 class=cartridge-handling-icon-24") | Store and ship between<br/>15 °C – 25 °C (59 °F –<br/>77 °F). The optimal<br/>temperature is 15 °C (59 °F). |
| ![Wear nitrile gloves when handling the cartridge.](/img/manual/cell-27e561e22ac1.png "width=31 class=cartridge-handling-icon-31") | Wear nitrile gloves when<br/>handling the cartridge. | ![Procedure illustration, printed page 73](/img/manual/asset-65d703b8ec50.png "width=24 class=cartridge-handling-icon-24") | Store and ship between<br/>20 % and 60 % relative<br/>humidity. |
| ![Wear safety glasses when handling the cartridge.](/img/manual/cell-d6353e538e2e.png "width=31 class=cartridge-handling-icon-31") | Wear safety glasses when<br/>handling the cartridge. | ![The cartridge is intended for refill.](/img/manual/cell-a80baea9abca.png "width=29 class=cartridge-handling-icon-29") | The cartridge is intended for<br/>refill. |
| ![Ship, install and store in the indicated orientation](/img/manual/cell-7ac996bd1fed.png "width=31 class=cartridge-handling-icon-31") | Ship, install and store in<br/>the indicated orientation | ![Do not throw the cartridge into the trash.](/img/manual/cell-bc083b74fc3c.png "width=29 class=cartridge-handling-icon-29") | Do not throw the cartridge<br/>into the trash. |

### 8.9.2 Checking the filling level and expiration date of a cartridge {#section-8-9-2}

The cartridge filling levels and expiration date can be retrieved from several sources.

- The cartridge icon shown in the top bar of the user interface constantly indicates the approximate cartridge filling level. In case the cartridge is about to expire, the cartridge icon displays this too. Explanations of the different icons can be found in [Top bar status icons](08-general-operations-and-configurations.md#section-8-8-2).
- If you need more information, press *Settings* on the *Home screen*, then press *System info*.  Under *Cartridge capacity remaining* you see how full the cartridge still is (in percent),  and under *Cartridge expiration date* you see when the cartridge expires. The same  information can also be retrieved from the web interface (see [Web User Interface](13-web-user-interface.md))

### 8.9.3 Cartridge overview {#section-8-9-3}

The BactoSense cartridge is installed in a dedicated cartridge compartment of the  instrument. A door closes the cartridge compartment. The cartridge door must only be  opened for removing and installing cartridges.

![Original manual illustration, printed page 74](/img/manual/asset-f8b0a7f1f4e5.png "width=381")

*Figure 8-5 The BactoSense cartridge compartment can be opened by removing two 7 mm hex*  *nuts using the supplied hex nut driver.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | 7 mm hex nuts to secure cartridge<br/>compartment door | 2 | Cartridge compartment door |

:::warning[Use the correct door tool]

Open and close the cartridge compartment door only with the dedicated 7 mm hex nut  driver.

:::

After opening the cartridge compartment door, the user has access to the cartridge and the  connectors which connect the cartridge to the BactoSense.

![Original manual illustration, printed page 75](/img/manual/asset-8e1d2269e91e.png "width=659")

*Figure 8-6 Overview of an installed cartridge. The mobility of the cartridge is secured with a*  *fixation latch on top (4), and the cartridge is connected to the instrument with multiple fluidic (5*  *- 8) and one electronic connector (9). When no cartridge is inserted, the fluidic and electronic*  *connectors can be secured using the removable connector rack (10).*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

BactoSense instrument

</td>

<td>

2

</td>

<td>

Cartridge

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Cartridge handle

</td>

<td>

4

</td>

<td>

Cartridge fixation latch

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Dye connector (green)

</td>

<td>

6

</td>

<td>

Bleach connector (red)

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Waste connector (black or beige)

</td>

<td>

8

</td>

<td>

Rinse connector (blue)

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Electronic connector

</td>

<td>

10

</td>

<td>

Removable connector rack

</td>

</tr>

<tr>

<td>

11

</td>

<td>

Cartridge compartment door

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::warning[Protect the unused connector]

The BactoSense has five fluidic connectors. Depending on the cartridge type, only four or all  five fluidic connectors are needed. In case of TCC or ICC cartridges, make sure the unused  fifth connector is always mounted to the connector rack to prevent contamination.

:::

### 8.9.4 Change cartridges {#section-8-9-4}

The following procedure describes the exchange of cartridges. Use this procedure if you  want to remove and directly install another cartridge. If you only want to remove a cartridge  and not install another one, follow the instruction in [Removing a cartridge](08-general-operations-and-configurations.md#section-8-9-5).  The duration of the cartridge exchange is approximately 35 min.

:::warning[Follow the cartridge wizard]

Strictly follow the procedure in the on-screen wizard.  **Do not remove or install cartridges without this procedure.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th>

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Have the replacement cartridge ready and adjusted to ambient temperature.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Press the Maintenance button.

</td>

<td>

Basic users skip this step.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Press the Cartridge change button.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Select the Change cartridge option.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Follow the cartridge wizard]

Confirm to follow the instructions of the on- screen wizard. Only open the cartridge compartment door when instructed.  Adhere to the general cartridge handling instruction in [General instructions for cartridge handling](../general-operations-and-configurations/#section-8-9-1).  Wear nitrile gloves and safety glasses. Tightly seal the fluidic connectors of the old cartridge with the attached  plugs before removing it. Make sure the cartridge compartment door is tightly closed  and secured at the end.

:::

</td>

<td>

:::warning[Skipping the cartridge wizard]

Only very experienced users mastering safe cartridge  operations are allowed to skip the on-screen instructions. In case of TCC or ICC cartridges, make sure the  unused fifth connector is always mounted to the connector rack to prevent contamination.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Handling the removed cartridge • If you wish to store the removed cartridge, refer to the storage instructions in [Storage of the cartridge](../storage-transport-and-disposal/#section-17-1-3). • If you wish to refill the removed cartridge, refer to the refill instructions in [Returning a cartridge for refill](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 8.9.5 Removing a cartridge {#section-8-9-5}

This procedure is intended for the removal of a cartridge, without immediate installation of  another cartridge. If you want to exchange cartridges, follow the procedure described in  [Change cartridges](08-general-operations-and-configurations.md#section-8-9-4).  The duration of the cartridge removal is approximately 5 min.

:::warning[Follow the cartridge wizard]

Strictly follow the procedure in the on-screen wizard.  **Do not remove or install cartridges without this procedure.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th>

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Press the Maintenance button.

</td>

<td>

Basic users skip this step.

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Press the Cartridge change button.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Select the Remove cartridge option.

</td>

<td>

t

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

:::warning[Follow the cartridge wizard]

Confirm to follow the instructions of the on- screen wizard. Only open the cartridge compartment door when instructed.  Adhere to the general cartridge handling instruction in [General instructions for cartridge handling](../general-operations-and-configurations/#section-8-9-1).  Wear nitrile gloves and safety glasses. Tightly seal the fluidic connectors of the old cartridge with the attached  plugs before removing it. Make sure the cartridge compartment door is tightly closed  and secured at the end.

:::

</td>

<td>

:::warning[Skipping the cartridge wizard]

Only very experienced users mastering safe cartridge  operations are allowed to skip the on-screen instructions.

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Handling of the removed cartridge • If you wish to store the removed cartridge, refer to the storage instructions in [Storage of the cartridge](../storage-transport-and-disposal/#section-17-1-3). • If you wish to refill the removed cartridge, refer to the refill instructions in [Returning a cartridge for refill](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

The top bar of the user interface indicates that no cartridge is connected. The Maintenance button in the Home menu is now dis- played in orange.<br />![BactoSense — Cartridge not ready](/img/gui/icons/cartridge-not-ready-status.png "width=30 class=manual-icon")

</td>

</tr>

</tbody>

</table>

### 8.9.6 Installing a cartridge {#section-8-9-6}

This procedure is intended for the installation of a cartridge, when no other cartridge is installed in the BactoSense. If there is already a cartridge and you want to exchange cartridges, follow the procedure described in [Change cartridges](08-general-operations-and-configurations.md#section-8-9-4).  The duration of the cartridge installation is approximately 30 min.

:::warning[Follow the cartridge wizard]

Strictly follow the procedure of the on-screen wizard.  **Do not remove or install cartridges without this procedure.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th>

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Have the new cartridge ready and adjusted to ambient temperature.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Press the Maintenance button.

</td>

<td>

The Maintenance button is highlighted in orange in case no cartridge is installed. Basic users skip this step.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Press the Cartridge change button.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Select the Install cartridge option.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Follow the cartridge wizard]

Confirm to follow the instructions of the on- screen wizard. Only open the cartridge compartment door when instructed.  Adhere to the general cartridge handling instruction in [General instructions for cartridge handling](../general-operations-and-configurations/#section-8-9-1).  Wear nitrile gloves and safety glasses. Make sure the cartridge compartment door is tightly closed  and secured at the end.

:::

</td>

<td>

:::warning[Skipping the cartridge wizard]

Only very experienced users mastering safe cartridge  operations are allowed to skip the on-screen instructions. In case of TCC or ICC cartridges, make sure the  unused fifth connector is always mounted to the connector rack to prevent contamination.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

After following through all steps of the on- screen wizard, the new cartridge is properly initialized.

</td>

<td>

The cartridge status is indicated with a cartridge symbol in the top bar of the user interface, see [Top bar status icons](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

</tbody>

</table>

## 8.10 Switching between sampling devices {#section-8-10}

The BactoSense can be operated with either the manual or the online sampling device. The following procedure describes the exchange of sampling devices. Sampling device storage information can be found in [Storage of the sampling devices](17-storage-transport-and-disposal.md#section-17-1-2).

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Remove the mounted sampling device according to the instructions in [Removal of the online sampling device](08-general-operations-and-configurations.md#section-8-10-1) (online sampling device) or [Removal of the manual sampling device](08-general-operations-and-configurations.md#section-8-10-2) (manual sampling device) |  |
| 2. | Install the new sampling device according to the instructions in [Installation of the online sampling device](05-installation.md#section-5-5) (online sampling device) or [Installation of the manual sampling device](05-installation.md#section-5-4) (manual sampling device). |  |

### 8.10.1 Removal of the online sampling device {#section-8-10-1}

When switching to the manual sampling device, the online sampling device has to be  removed. Follow the procedure below to safely remove the device and prepare it for  storage.

![Wear protective gloves](/img/manual/icon-gloves.png "width=32")

Avoid contamination of the equipment. Wear nitrile gloves when handling samples,  sampling devices and any components which come in contact with them.

|  | WORK STEP |
| --- | --- |
| 1. | Terminate any ongoing measurement series, as described in [Terminating automatic online measurements](10-measurements.md#section-10-2-2). |
| 2. | Stop the water flow through the sampling device tubings and sampling device. |
| 3. | Carefully unscrew the knurled sampling device fixation ring until the sampling device can be removed. |
| 4. | Remove the online sampling device. Make sure the white sealing plug still sits tightly in the connector of the sampling device. If not, it may have remained in the BactoSense sampling device connector. In this case carefully remove it with tweezers and place it back in the sampling device. |
| 5. | Disconnect and drain the inlet and outlet tubings from the water source and the sampling device body. |
| 6. | Inspect the inlet and outlet tubings for contamination and damage. Only reuse clean and intact tubings. |
| 7. | If you want to store the sampling device, place the device and the tubings separately in a clean and dry plastic bags and follow the storage instructions in [Storage of the sampling devices](17-storage-transport-and-disposal.md#section-17-1-2). |
| 8. | To mount now the manual sampling device, see [Installation of the manual sampling device](05-installation.md#section-5-4). |

### 8.10.2 Removal of the manual sampling device {#section-8-10-2}

When switching to the online sampling device, the manual sampling device has to be  removed. Follow the procedure below to safely remove the device and prepare it for  storage.

![Wear protective gloves](/img/manual/icon-gloves.png "width=32")

Avoid contamination of the equipment. Wear nitrile gloves when handling samples,  sampling devices and any components which come in contact with them.

|  | WORK STEP |
| --- | --- |
| 1. | Perform a cleaning of the manual sampling device: If a Washstation is available, follow the procedure in [Clean manual sampling device with Washstation](15-maintenance.md#section-15-2-2), otherwise the procedure in [Clean manual sampling device with basic cleaning](15-maintenance.md#section-15-2-3). |
| 2. | After finishing, attach a clean and empty 5 mL screw-cap tube or the Washstation to the sampling device. |
| 3. | Carefully unscrew the knurled sampling device fixation ring on top of the device until the sampling device can be removed. |
| 4. | Remove the manual sampling device. Make sure the white sealing plug still sits tightly in the connector of the sampling device. If not, it may have remained in the BactoSense sampling device connector. In this case, carefully remove it with tweezers and place it back in the sampling device. |
| 5. | If you want to store the sampling device, place it in a clean and dry plastic bag and follow the storage instructions in [Storage of the sampling devices](17-storage-transport-and-disposal.md#section-17-1-2). |
| 6. | To mount now the online sampling device, follow the procedure in [Installation of the online sampling device](05-installation.md#section-5-5). |

## 8.11 Qualification {#section-8-11}

Qualification is a process to ensure the BactoSense operates as intended. Different options  are available.

To do a fully automated quick check of the instrument status, perform the self-check  procedure described in [Automatic self-check](16-warnings-errors-and-troubleshooting.md#section-16-6). This test does not require any reagents or user  interaction, is very quick and checks the integrity and communication between the different  modules of the BactoSense.

To assess the cleanliness of the BactoSense and rule out a contamination, perform the  cleanliness verification procedure in [Cleanliness verification](08-general-operations-and-configurations.md#section-8-11-1).

For operational environments requiring system suitability testing, use the *System Suitability*  *Test Kit (SST Kit)* and follow the procedure in its user manual.

For other environments, an instrument qualification using the *Validation kit* is recommended  in the following situations:

- After shipping the instrument or other long-distance transport, exposing the instrument  to vibration or shock.
- After storing the instrument for more than one month.
- If there are indications that measurement results could be erroneous.

### 8.11.1 Cleanliness verification {#section-8-11-1}

|  | WORK STEP |
| --- | --- |
| 1. | Make sure the manual sampling device is tightly installed as described in [Installation of the manual sampling device](05-installation.md#section-5-4). |
| 2. | Perform a cleaning of the sampling device with two replications: If a Washstation is available, follow the procedure in [Clean manual sampling device with Washstation](15-maintenance.md#section-15-2-2), otherwise the procedure in [Clean manual sampling device with basic cleaning](15-maintenance.md#section-15-2-3). |
| 3. | Prepare the blank sample in a 5 mL screw-cap tube. There are two options: A) Use cell-free water, e.g. a sterile solution aliquot from the Validation Kit. If you use the sterile solution aliquot from the Validation Kit, remove the cap of the aliquot and place the aliquot in an empty 5 mL screw-cap tube, as described in the user manual of the Validation Kit. B) Take a still mineral water and filter twice using a membrane filter with a pore size of 0.22 µm or smaller. |
| 4. | In the BactoSense user interface, navigate to the Home menu. |
| 5. | On the Home screen, press Mode and select Manual mode. Press Back, then Measure to open the measurement wizard. |
| 6. | Choose the Prime protocol from the list of available protocols. |
| 7. | Press the Next button. |
| 8. | Remove the tube or Washstation from the manual sampling device and attach the blank sample. |
| 9. | Press the Start button to run the Prime protocol. |
| 10. | After completion of the Prime, press the New button to navigate back to the list of protocols. |
| 11. | Select the Water Analysis protocol from the list of available protocols. |
| 12. | Configure two replications. |
| 13. | Enter a sample name by tapping into the Sample name text field, entering the name and pressing OK. |
| 14. | Verify that the ICC or TCC default gate is configured and change it otherwise by pressing into the Gates field. |
| 15. | Press the Next button. |
| 16. | Press the Start button and wait for the two measurements to complete. |
| 17. | After finishing, press the Next button to review the results. |
| 18. | Look at the results and compare them to the reference values indicated below. The BactoSense is clean if the following criteria are fulfilled: • For TCC cartridges: TCC [/mL] &lt; 300 • For ICC cartridges: ICC [/mL] &lt; 100 |
| 19. | If the cell concentrations are higher than the specified limits, apply the following procedure: • Repeat the procedure with a freshly prepared blank sample. • Repeat the procedure after a decontamination using the Cleaning Kit (see [Consumables](18-supply-scope-accessories-and-consumables.md#section-18-3)). • If the test keeps failing, contact bNovate support or your local service representative. |
| 20. | After finishing, attach a clean and empty 5 mL screw-cap tube or the Washstation to the manual sampling device. |

## 8.12 Demo mode {#section-8-12}

Demo mode can be used when demonstrating the device or when learning how to navigate  the menus and use the functions. When it is activated, the instrument reboots into a special  mode that displays demonstration data (the owner’s measurement results are hidden). All  the instrument’s functions are replaced by simulations that never move the hardware or  modify the results database. This means protocols can be started without needing to load a  sample, and users can pretend to delete or re-gate results without ever changing the data. If  the demo mode is activated, the message ***Demo*** is displayed in the upper middle of  the screen.  When the instrument is reverted to normal mode, the owner’s data is shown again, and all  functions are active again.

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th colSpan="2">

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td colSpan="2">

![BactoSense — Home button](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Enter the System settings button, and then the Demo mode button.

</td>

<td>

![BactoSense — System settings](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Demo mode settings](/img/gui/icons/demo-mode-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Select the Activate demo mode box.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Press the Save and restart button.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

The device reboots automatically.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

To return into normal mode, follow the same procedure, but uncheck the **Activate demo**  **mode** box.

## 8.13 Factory reset {#section-8-13}

Factory reset reverts most of the instrument settings to the factory values: Gating limits,  measurement interval, default protocol names, users, language and network settings. This  option is accessible only by the Admin and Service users.

The following procedure describes how to perform a factory reset:

<table>

<tbody>

<tr>

<th>

</th>

<th>

WORK STEP

</th>

<th colSpan="2">

ADDITIONAL INFO / IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

On the Home screen, press Settings to open the settings menu.

</td>

<td colSpan="2">

![BactoSense — Home button](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Press the Maintenance button, then the Factory reset button.

</td>

<td>

![BactoSense — Maintenance menu](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Restore factory settings](/img/gui/icons/factory-reset-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Use the check boxes to select which parameters you wish to reset: • Instrument settings • Measurements incl. errors and logs • both

</td>

<td colSpan="2">

:::info[Additional information]

Service logs, validation results and the software update his- tory are not deleted.

:::

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Then press the Reset the device and reboot button.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>
