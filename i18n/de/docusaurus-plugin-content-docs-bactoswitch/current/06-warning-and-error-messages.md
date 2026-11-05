---
title: "6. Warn- und Fehlermeldungen"
sidebar_label: "6. Warn- und Fehlermeldungen"
slug: /warning-and-error-messages
sidebar_position: 6
description: "BactoSwitch-Bedienungsanleitung: Warn- und Fehlermeldungen."
---

## 6.1 Warnungen {#section-6-1}

Warnungen weisen auf einen Zustand hin, der die Aufmerksamkeit des Benutzers erfordert, den Betrieb aber nicht unbedingt unterbricht.

*Tabelle 6-1 Warnungen des BactoSwitch*

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / MASSNAHMEN |
| --- | --- | --- | --- |
| W15 | BactoSwitchLowFlow | Der Eingangsdurchfluss ist niedriger als der empfohlene Wert. Die Messgenauigkeit könnte beeinträchtigt sein. | **Typische Ursachen:** Eingangsdruck unterhalb der Spezifikation, teilweise geschlossenes vorgeschaltetes Ventil oder eine Installation, die am Ablauf Gegendruck erzeugt.<br />**Empfohlene Maßnahmen:**<br />• Öffnen Sie unter **Test BactoSwitch** nur die betroffene Leitung und stellen Sie sie mit dem Drehknopf zur Durchflusseinstellung auf 150 – 400 mL/min ein (siehe [Leitungstest und Durchflusseinstellung](04-installation.md#section-4-8)).<br />• Stellen Sie sicher, dass der Eingangsdruck > 0,1 bar und Δh > 0,5 m beträgt (siehe [Abbildung 4-2](04-installation.md#section-4-4)).<br />• Beheben Sie alle vorgeschalteten Durchflussbehinderungen. |

## 6.2 Fehler {#section-6-2}

*Tabelle 6-2 Fehler des BactoSwitch*

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / MASSNAHMEN |
| --- | --- | --- | --- |
| E60 | BactoSwitchFlowTooLowError | Der gemessene Durchfluss am ausgewählten Eingang liegt unterhalb des zulässigen Bereichs für den Einzelleitungsbetrieb. | **Typische Ursachen:** niedriger Eingangsdruck; vorgeschaltete Durchflussbehinderung; Ablaufinstallation, die Gegendruck erzeugt; Ventil manuell geschlossen.<br />**Empfohlene Maßnahmen:**<br />• Öffnen Sie unter **Test BactoSwitch** nur die betroffene Leitung und stellen Sie sie mit dem Drehknopf zur Durchflusseinstellung auf 150 – 400 mL/min ein (siehe [Leitungstest und Durchflusseinstellung](04-installation.md#section-4-8)).<br />• Stellen Sie sicher, dass der Eingangsdruck > 0,1 bar und Δh > 0,5 m beträgt (siehe [Abbildung 4-2](04-installation.md#section-4-4)).<br />• Beheben Sie alle vorgeschalteten Durchflussbehinderungen.<br />• Prüfen Sie, ob das Ein/Aus-Ventil offen ist. |
| E61 | BactoSwitchDeviceNotFoundError | Der BactoSense erkennt den BactoSwitch nicht. | **Typische Ursachen:** BactoSwitch nicht mit Strom versorgt; USB-C-Kabel nicht angeschlossen oder nicht an beiden Geräten festgeschraubt.<br />**Empfohlene Maßnahme:** Schließen Sie das Netzteil an den BactoSwitch an und sichern Sie das USB-C-Kabel mit den Schraubringen sowohl am BactoSwitch als auch am BactoSense. Das Gerät wird beim Anschließen automatisch erkannt. |
| E62 | BactoSwitchTimeoutError | Ein Kommunikationsversuch mit dem BactoSwitch hat die erwartete Zeit überschritten. | **Typische Ursachen:** vorübergehendes Kommunikationsproblem auf der USB-C-Verbindung; lockere oder nicht festgeschraubte Stecker.<br />**Empfohlene Maßnahme:** Prüfen Sie, ob das USB-C-Kabel an beiden Enden richtig sitzt und festgeschraubt ist und ob der BactoSwitch mit Strom versorgt wird, und wiederholen Sie dann den Vorgang. |
| E63 | BactoSwitchCommunicationError | Zwischen dem BactoSense und dem BactoSwitch ist ein Kommunikationsfehler aufgetreten. | **Typische Ursachen:** instabile oder fehlerhafte USB-C-Verbindung; Kabel nicht gesichert.<br />**Empfohlene Maßnahme:** Prüfen Sie das USB-C-Kabel an beiden Geräten und sichern Sie es erneut (verwenden Sie die Schraubringe), überprüfen Sie die Stromversorgung des BactoSwitch und starten Sie beide Geräte neu. |

Bestehen die Probleme nach Durchführung der oben genannten Schritte weiterhin, wenden Sie sich an Ihren lokalen Servicepartner (siehe [Kontakt](09-contact.md)).

Die Warnungen und Fehler des BactoSense selbst finden Sie unter [Warnungen, Fehler und Fehlerbehebung](/bactosense/warnings-errors-and-troubleshooting) in der Bedienungsanleitung des BactoSense.
