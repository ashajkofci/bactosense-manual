---
id: sst-aquasense
title: System Suitability Test Kit for AQU@Sense MB
sidebar_position: 4
slug: /sst-aquasense
document_id: UM_0005-01
manual_version: "01"
---

## General information {#general-information}

According to United States Pharmacopeia USP \<1058>, the System Suitability Test (SST) verifies that a system performs in accordance with the criteria set forth in the test procedure. The SST Kit for AQU@Sense MB is a reagent kit used to conduct this performance verification.

Prerequisites:

- AQU@Sense MB with the manual sampling device installed.
- SST Kit stored under adequate conditions and not expired.
- A personal instrument login with **Advanced** or **Admin** permissions.

Store the kit refrigerated at **2–8 °C (35–47 °F)**, away from light. Under these conditions, the shelf-life is **one year**. The kit provides **10 tests**.

## Safety information {#safety}

:::gloves[Wear protective gloves]

In case of skin contact, rinse immediately and abundantly with fresh water. In case of pain or irritation, consult a doctor.

:::

:::warning[Wear protective safety glasses]

In case of eye contact, flush eyes immediately with flowing water for 10–15 minutes, holding eyelids apart, and consult a doctor.

:::

:::info[Read the instructions before use]

Carefully follow this manual and the AQU@Sense MB operating manual.

:::

## Contents {#contents}

| Item | Quantity | SDS document number | Use |
| --- | --- | --- | --- |
| Alcohol Wipes | 10 | — | Single use |
| Beads Solution | 10 | 50106 | Single use |
| Reference Solution | 10 | — | Single use |
| Sterile Solution | 10 | — | Single use |
| Tube Holder | 1 | — | Multiple uses |

Discard single-use items according to local waste disposal regulations. Safety data sheets are available from BWT upon request.

## When to use the System Suitability Test Kit {#when-to-use}

Perform an SST:

- As part of quality assurance and validation, for example during operational qualification, performance qualification, cartridge change or servicing.
- After storing the instrument for more than one month.
- If there are indications that measurement results could be erroneous.

The procedure consists of three parts, performed in order: [Optical Validation](#optical-validation), [Reference Validation](#reference-validation) and [Sterile Validation](#sterile-validation). All test acceptance criteria must be met. The procedure takes approximately **2.5 hours**.

## Preparations {#preparations}

1. Verify that the SST Kit has not expired and has been stored under the specified conditions.
2. Remove one alcohol wipe, one Beads Solution, one Reference Solution, one Sterile Solution and the Tube Holder.
3. Make sure the manual sampling device is tightly installed on AQU@Sense MB.
4. Unpack the alcohol wipe. Wipe the sampling needle from top to bottom to remove contaminants. Let it dry for **30 seconds**.
5. Log in on AQU@Sense MB with your personal username and password. **Advanced** or **Admin** permissions are required.
6. Open **Home → Maintenance → Instrument validation**. Check **Activate Instrument validation** and press **Save**.
7. Continue with Part A.

## Part A: Optical Validation {#optical-validation}

This tests the instrument's optical system by measuring a solution containing fluorescent particles.

1. Attach the wash station to the manual sampling device.
2. Open **Home → Manual mode → Start**. Select **Clean Sampling Device with Washstation**, with **one replication**. Press **Next** and start the protocol.
3. After completion, shake the Beads Solution tube vigorously for **10 seconds**, by hand or using a vortex mixer.
4. Remove the caps from the Beads Solution tube and Tube Holder. Insert the opened tube into the holder. Remove the wash station and attach the holder containing the Beads Solution.

   :::caution[Use the whole reagent tube]

   Insert the entire reagent tube into the Tube Holder, rather than pouring its contents into the holder.

   :::

   ![Opening and inserting a single-use reagent tube into the Tube Holder](/img/other-manuals/sst-tube-holder-insertion.png "width=650")

5. Return to the protocol overview. Select **Prime**, with **one replication**. Press **Next** and start.
6. After completion, return to the protocol overview. Select **Beads Analysis**, with **one replication**. Press **Next** and start.
7. Review the results. All the following criteria must be met:

   **TCC: 50,000–75,000/mL**

   | Channel | CV (%) | Median |
   | --- | --- | --- |
   | FL1 | Less than 15 | 5.7–6.5 |
   | FL2 | Less than 20 | 5.1–5.7 |
   | SSC | Less than 25 | 4.7–6.3 |

   ![Example optical validation results](/img/other-manuals/sst-optical-results.png "width=450")

8. If the test passes, remove the holder, remove the Beads Solution tube, close its cap and discard it. Continue with Part B.

   If it fails, repeat, making sure the Beads Solution is well mixed. If failures persist, contact BWT support.

## Part B: Reference Validation {#reference-validation}

This tests the instrument's automated staining process.

1. Attach the wash station to the manual sampling device.
2. Open **Home → Manual mode → Start**. Run **Clean Sampling Device with Washstation**, with **one replication**. Press **Next** and start.
3. Remove the cap from a Reference Solution tube and insert the entire tube into the holder, as shown in Part A. After the cleaning protocol finishes, remove the wash station and attach the holder containing the Reference Solution.
4. Return to the protocol overview. Run **Prime**, with **one replication**.
5. After completion, return to the protocol overview. Select **Water Analysis**, with **one replication**. In **Gates**, select **ICC Default Gate**. Press **Next** and start.
6. Compare the main bacteria clouds to the reference criteria:

   | Dotplot | Acceptance criterion |
   | --- | --- |
   | FL1 / FL2 | Main cloud above 4.5 on the FL1 axis and below 5 on the FL2 axis |
   | FL1 / SSC | Main cloud above 2 and below 5.5 on the SSC axis |

   ![Reference dotplots with the main bacteria clouds circled in orange](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Appearance of the clouds]

   Depending on the cartridge and storage conditions, the clouds may differ from the example.

   :::

7. If the test passes, remove the holder, remove the Reference Solution tube, close its cap and discard it. Continue with Part C.

   If it fails, repeat with a fresh Reference Solution. If failures persist, contact BWT support.

## Part C: Sterile Validation {#sterile-validation}

This verifies the cleanliness of the sampling device and fluidic system by measuring cell-free water.

1. Attach the wash station to the manual sampling device.
2. Open **Home → Manual mode → Start**. Run **Clean Sampling Device with Washstation**, with **one replication**. Press **Next** and start.
3. Remove the cap from a Sterile Solution tube and insert the entire tube into the holder, as shown in Part A. After the cleaning protocol finishes, remove the wash station and attach the holder containing the Sterile Solution.
4. Return to the protocol overview. Run **Prime**, with **one replication**.
5. After completion, return to the protocol overview. Select **Water Analysis**, with **one replication**. Select **ICC Default Gate**, press **Next** and start.
6. Review the result. The acceptance criterion is **ICC less than 100/mL**.
7. If the test passes, remove the holder, remove the Sterile Solution tube, close its cap and discard it. Return the holder to the SST Kit, store the kit under the specified conditions, and attach the wash station to the manual sampling device.

   If it fails, perform biological decontamination using the Cleaning Kit. Repeat with a fresh Sterile Solution. If failures persist, contact BWT support.

8. Open **Home → Maintenance → Instrument validation**. Uncheck **Activate Instrument validation** and press **Save**.

You have successfully completed the System Suitability Test when all three parts have passed.
