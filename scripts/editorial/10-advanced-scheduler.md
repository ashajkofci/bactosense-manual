### 10.2.4 Advanced scheduling {#section-10-2-4}

Use advanced scheduling when measurements must run at different intervals or on selected weekdays. A weekly schedule combines one or more rules, each with its own protocol, measurement name, gates and timing. The same weekly plan repeats until you change or stop it.

Advanced scheduling requires an activated Management Package or Scientific Package. If **Advanced** is unavailable, check the package status under **Settings → System settings → Upgrades**; see [Upgrade Packages](09-upgrade-packages.md). Before starting, install the online sampling device and check the instrument's [date and time](08-general-operations-and-configurations.md#section-8-3-2).

#### Create a weekly schedule {#advanced-scheduler-create}

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Follow steps 1–8 of [Configuring and starting automatic online measurements](10-measurements.md#section-10-2-1) to choose Online mode, the protocol, sample name and gates. | Press **Next** to reach the scheduling screen. |
| 2. | Press **Advanced**. If a weekly schedule is already configured, the rule editor may open directly. | Figure 10-3 shows the **Advanced** control on the simple interval screen. <br />![BactoSense — Advanced control](/img/gui/en/advanced-scheduler-select.png "width=220 class=manual-figure") |
| 3. | Select a rule in the left-hand list to edit it, or press **New rule** to add one. Select an unwanted rule and press **Delete** to remove it from the draft. | Review the existing rules before adding another; all rules contribute to the weekly schedule. <br />![BactoSense — New rule button](/img/gui/en/advanced-scheduler-new-rule.png "width=180 class=manual-figure") |
| 4. | Set **Name**, **Protocol** and **Gate** for the selected rule. | **Name** labels the resulting measurements. Choose gates compatible with the installed cartridge. Maintenance protocols that do not need gates hide this field. |
| 5. | Choose **30 minutes**, **1 hour**, **2 hours**, **Daily** or **Custom**. | The interval presets repeat every day. **Daily** schedules one run per day at the chosen **Start time**. Use **Custom** to select weekdays, another interval or a time window. |
| 6. | For **Custom**, set **Start time**, select the required **Days** and set **Interval** in minutes. Press **Set time range** to choose the daily window, then confirm with **OK**. | Scroll the fields below the frequency buttons to see **Interval**, **Set time range** and **Range**. Figures 10-4 and 10-5 show the same rule before and after scrolling. <br />![BactoSense — Set time range button](/img/gui/en/advanced-scheduler-time-range-button.png "width=160 class=manual-figure") |
| 7. | Repeat steps 3–6 for any additional rules. Press **Preview**. | Select a gate if Preview is unavailable because one is missing. If preview reports a conflict, return to the rules and adjust their times or intervals so protocols have time to finish. <br />![BactoSense — Preview button](/img/gui/en/advanced-scheduler-preview-button.png "width=130 class=manual-figure") |
| 8. | Select each weekday in the preview and check the generated entries. Select an entry to inspect its **Time**, **Name**, **Protocol** and **Gate**. | The preview can include automatically inserted cleaning protocols during long gaps. Review these alongside measurement entries; see Figure 10-6. <br />![BactoSense — Weekday selection](/img/gui/en/advanced-scheduler-days.png "width=240 class=manual-figure") |
| 9. | Make any individual changes described below, then press **Save** to apply the weekly schedule. | Changes to rules and preview entries remain a draft until you press **Save**. <br />![BactoSense — Save button](/img/gui/en/advanced-scheduler-save.png "width=130 class=manual-figure") |
| 10. | At **Start scheduler now?**, press **Yes** to start the saved plan, or **No** to save it without starting a stopped scheduler. | Check the Home screen to confirm the operating state. To stop an active series, follow [Terminating automatic online measurements](10-measurements.md#section-10-2-2). |

![BactoSense — Advanced scheduling selection on the interval screen](/img/gui/en/advanced-scheduler-select.png "width=400 class=manual-figure")

*Figure 10-3 Open Advanced scheduling from the simple interval screen*

![BactoSense — Custom weekday schedule rule](/img/gui/en/advanced-scheduler-rule.png "width=600 class=manual-figure")

*Figure 10-4 Rule editor with measurement settings, frequency and weekdays*

![BactoSense — Custom interval and daily time range](/img/gui/en/advanced-scheduler-range.png "width=600 class=manual-figure")

*Figure 10-5 Scroll the custom fields to check the interval and time range*

**Example: hourly monitoring on weekdays.** Set **Custom**, **Start time** to **08:00**, **Days** to Monday–Friday, **Interval** to **60 min** and the time range to **08:00–17:00**. The measurement entries start at 08:00, 09:00, …, 16:00 on those days. The range ends at 17:00; it does not add a 17:00 start. These values illustrate the controls; choose a plan appropriate for your application.

For a window that crosses midnight, use separate rules for the parts before and after midnight and select the corresponding weekdays. Check the generated preview against the intended times.

#### Adjust individual entries in the preview {#advanced-scheduler-preview}

Use the preview to make an exception to the generated plan, such as moving one run or changing its measurement name.

![BactoSense — Weekly schedule preview with an entry selected](/img/gui/en/advanced-scheduler-preview.png "width=600 class=manual-figure")

*Figure 10-6 Day-by-day preview and settings for the selected entry*

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | Select a weekday, then an entry in the left-hand list. | The fields on the right show that entry's settings. |
| 2. | Tap **Time**, **Name**, **Protocol** or **Gate** to change the selected entry. | A change applies to that entry. Check the gate again if you change the protocol. A **Line** field is also available for protocols using BactoSwitch. <br />![BactoSense — Selected entry time](/img/gui/en/advanced-scheduler-entry-time.png "width=280 class=manual-figure") |
| 3. | Press **New** to add an entry to the selected day, then adjust its fields. To remove an entry, select it and press **Delete**. | Check the new entry's time, protocol and gates before saving. <br />![BactoSense — New entry button](/img/gui/en/advanced-scheduler-new-entry.png "width=130 class=manual-figure") |
| 4. | Use **Copy to week** only if every day should have the same entries as the selected day. Acknowledge the confirmation with **OK**. | This replaces the other days' entries in the draft, including weekend entries and day-specific exceptions. Review all seven days afterward. <br />![BactoSense — Copy to week button](/img/gui/en/advanced-scheduler-copy-week.png "width=140 class=manual-figure") |
| 5. | Press **Save**, then answer **Start scheduler now?** as described above. | If saving fails, review the message and correct the conflicting times or missing settings before retrying. <br />![BactoSense — Save button](/img/gui/en/advanced-scheduler-save.png "width=130 class=manual-figure") |

:::info[Preserve individual changes]

**Back** returns from the preview to the rules. Changing a rule and generating a new preview can replace individual entry adjustments. Make those adjustments after the final rule preview and review them before saving.

:::

#### Change an existing schedule or return to a simple interval {#advanced-scheduler-change}

While the scheduler is running, open **Home → Settings → Online mode settings → Schedule interval**. Edit the weekly rules, press **Preview**, review the entries and press **Save**. If the scheduler is stopped, use **Start** on the Online mode Home screen to reopen the measurement wizard.

To use one constant interval again, press **Back** from the preview to the rules, then **Back** to the simple interval screen. Choose the interval and confirm with **OK** in **Schedule interval**, or **Start** in the measurement wizard. Confirming the simple schedule replaces the advanced weekly plan; pressing Back alone does not apply the change.
