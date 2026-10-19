## 10.7 Filtering measurements {#section-10-7}

Filters limit the results list to the measurements you need. You can filter by date range, by measurement name and, when BactoSwitch is enabled, by BactoSwitch line. When you combine filters, only measurements that match all of them are listed. The filters search all measurements stored on the instrument.

|  | WORK STEP | ADDITIONAL INFO / IMAGES |
| --- | --- | --- |
| 1. | On the Home screen, press **Results**. | The list shows the results of the current operating mode: **Online mode results** or **Manual mode results**. To open the list for the other mode, press **Settings**, then **Logs**, and select **Results (online mode)** or **Results (manual mode)**. |
| 2. | Press **Filter**. | The **Filter results** screen opens. The fields on the left show the current filters. |
| 3. | To filter by date, tap the field under **Start date** and select the first day in the calendar. Tap the time field below it and set the hour and minute with the wheels. Set **End date** and its time in the same way. | Both limits are included: measurements up to the end of the selected end minute are listed. The end cannot be earlier than the start. Without a date filter, the range runs from the oldest to the newest measurement. |
| 4. | To filter by name, tap the field under **Filter by name**, enter part of the measurement name and press **OK**. | The list keeps every measurement whose name contains this text, regardless of upper or lower case. For example, *tap* finds “Tap Water Zürich”. **None** means that no name filter is set. To remove the name filter, delete the text and press **OK**. |
| 5. | To filter by BactoSwitch line, press **Filter by stream**, select the line and press **Confirm**. | This button is only shown when BactoSwitch is enabled. Each line is listed with its name and stream number; the button then shows **Filtered by stream #n**. Only Online mode measurements sampled through BactoSwitch belong to a line, so all other measurements are hidden while this filter is active. To remove the line filter, select the highlighted line again and press **Confirm**. |
| 6. | Press **OK** to apply the filters and return to the results list. | The action bar shows the date range and any active line and name filters. If no measurement matches, **No measurements to display** appears; press **Change filters** to adjust the filters. |

:::info[Clear the filters]

Press **Reset** on the **Filter results** screen to remove the name and line filters and restore the full date range. Filters in the Manual mode results are cleared when you return to the Home screen. In Online mode, the name and line filters remain active, including on the online chart (see [Reviewing automatic online measurements](10-measurements.md#section-10-2-3)), until you reset them.

:::
