---
title: "12. Data Access and Export"
sidebar_label: "12. Data Access and Export"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Export data to USB device {#section-12-1}

To export measurement data, refer to section 10.8.1.

### 12.1.1 Export settings, diagnostics, or all to USB device {#section-12-1-1}

The “Special import/export” function allows users to export either all measurement data from the instrument, or to export only diagnostics data which can be interpreted by service technicians.

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | On the Home screen, press Settings to open the settings menu. |  |
| 2. | Press the Maintenance button and then the Special export import button. |  |
| 3. | Connect a USB mass storage device. The USB flash drive should be formatted in FAT32. If needed, press the Refresh USB list button until the device is displayed. |  |
| 4. | The name of the folder which will be created on the USB device is displayed in the Folder name field. Enter a new folder name if desired. | <img src="/img/manual/cell-2af37708a475.png" alt="Illustration for table on manual page 114" width="261" className="manual-figure" loading="lazy"/> |
| 5. | • To export all data, press the Export all button.<br/>• To export diagnostics data, press the Export diagnostics button.<br/>• To export settings, press the Export diagnostics button. Do not remove the USB mass storage device during the data transfer. | Exporting all data can take several hours. If the available storage capacity of the USB mass storage device is too small, a notification will be shown. |
| 6. | After completion of the export, press the OK button and remove the USB device. |  |

## 12.2 Retrieve data via FTP {#section-12-2}

BactoSense data can be remotely accessed using the FTP protocol (RFC 3659).

- FTP authentication uses the username/password pairs used in the GUI of the instrument. Default account names are: basic, advanced, and admin.
- The CSV and Excel files are generated on-the-fly, and thus always contain the latest measurement data.

<img src="/img/figures-second/figure-f9252ec82a57de.webp" alt="Figure 12-1 The Manage services view of the BactoSense user interface." width="559" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustration from the BactoSense user manual" width="57" className="manual-icon" loading="lazy" />

*Figure 12-1 The Manage services view of the BactoSense user interface.*

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | • Install an FTP client on the device you want to use to retrieve data, e.g. your laptop.<br/>• Alternatively, the Windows file explorer can be used. |  |
| 2. | Connect the BactoSense via Ethernet to a safe network (e.g. LAN). Connect your device to the same network. | For information about network configurations (i.e. static and dynamic IP settings), refer to section 8.6. |
| 3. | On the Home screen, press Settings to open the settings menu. |  |
| 4. | Press the System settings button. |  |
| 5. | Press the Services button. |  |
| 6. | Make sure the Enable FTP data access check box is checked. |  |
| 7. | Choose a port for the FTP server. | The default port is port 21. |

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 8. | Press the Apply button to reboot the BactoSense. | Only needed in case you changed the configuration. |
| 9. | On the Home screen, press Settings, then System info to retrieve the IP address of the BactoSense. | For information about network configurations (i.e. static and dynamic IP settings), refer to section 8.6. |
| 10. | For FTP client: Open the client and enter the login details. For the Windows file explorer: Enter the following address in the address bar: ftp://user:password@ip:port | • User/username: Username to log in to the BactoSense<br/>• Password: Password to log in to the BactoSense<br/>• Host/ip: IP address of the BactoSense<br/>• Port: Port configured in System services view (see figure 12-1) |

## 12.3 Retrieve files via HTTP or HTTPS {#section-12-3}

The HTTP and HTTPS servers are enabled by default and available through a web browser or any HTTP request library. Use the following procedure to retrieve specific files via HTTP or HTTPS. As an alternative, consider the web interface (chapter 13) or FTP (section 12.2).

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | Connect the BactoSense via Ethernet to a safe network (e.g. LAN). Connect your device to the same network. | For information about network configurations (i.e. static and dynamic IP settings), refer to section 8.6. |
| 2. | On the Home screen, press Settings to open the settings menu. |  |
| 3. | Press the System settings button. |  |
| 4. | Press the Services button. |  |
| 5. | For HTTP: Make sure the Enable HTTP web access check box is checked. For HTTPS: Make sure the Enable HTTPS web access check box is checked. |  |
| 6. | Choose a port for the HTTP or HTTPS server. | The default port for HTTP is 80. The default port for HTTPS is 443. |

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">WORK STEP</th><th scope="col">ADDITIONAL INFO / IMAGE</th></tr><tr><td>7.</td><td>Press the Apply button to reboot the BactoSense.</td><td>Only needed in case you changed the configuration.</td></tr><tr><td>8.</td><td>On the Home screen, press Settings, then System info to retrieve the IP address of the BactoSense.</td><td></td></tr><tr><td>9.</td><td colSpan="2">Open a web browser on your device and enter the target file address into the address field. The file address has the following form: For HTTP: <code>http&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code> Example: http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ For HTTPS: <code>https&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code> Example: https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>ipaddress</code></td><td>Local IP address of the instrument</td></tr><tr><td><code>port</code></td><td>Port of the HTTP or HTTPS server (by default 80 and 443, respectively)</td></tr><tr><td><code>filename</code></td><td>Name of the target file. Example: history_auto</td></tr><tr><td><code>extension</code></td><td>File extension (csv, xlsx,pdf)</td></tr><tr><td><code>myhash</code></td><td>Security key containing user identification. The key is unique to any user-password combination. It is possible to find the key in the web interface (chapter 13) by copying the link shown when downloading a file. For example: hash=QWRtaW46MTExMQ</td></tr></tbody></table></td></tr></tbody></table>

## 12.4 GUI relay using VNC {#section-12-4}

Virtual Network Computing (VNC) is a graphical desktop-sharing system to remotely control another computer. It transmits the keyboard and mouse input from one computer to another, relaying the graphical-screen updates, over a network. The embedded VNC server in the BactoSense is capable of sharing the user interface over the local area network (LAN) only (exception: remote access using a VPN).

:::warning[Restrict VNC access]

VNC is an insecure protocol and is not recommended outside of a local network or with a VPN connection.

:::

:::info[Close VNC after use]

A VNC connection can slow down the user interface since it is very taxing in terms of processing power. Be sure to close your VNC connection after use.

:::

|  | WORK STEP | ADDITIONAL INFO / IMAGE |
| --- | --- | --- |
| 1. | Install a VNC client on your computer. |  |
| 2. | Connect the BactoSense via Ethernet to a safe network (LAN). Connect your computer to the same network. | For information about network configurations (i.e. static and dynamic IP settings), refer to section 8.6. |
| 3. | On the Home screen, press Settings to open the settings menu. |  |
| 4. | Press the System settings button. |  |
| 5. | Press the Services button. |  |
| 6. | Make sure the Enable VNC remote control check box is checked. |  |
| 7. | Choose a port for the VNC server. | The default port is port 5900. |
| 8. | Press the Apply button to reboot the BactoSense. | Only needed in case you changed the configuration. |
| 9. | On the Home screen, press Settings, then System info to retrieve the IP address of the BactoSense. |  |
| 10. | Open the VNC client on your computer and connect to the BactoSense using the IP address and port identified previously. | Your VNC client may allow you to change connection settings to optimize the speed of the connection if needed. |
| 11. | Disable the VNC connection in the BactoSense System services page after finishing. | The VNC connection can slow down the user interface on the BactoSense. |
