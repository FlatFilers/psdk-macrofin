import {
  BooleanField,
  DateField,
  NumberField,
  OptionField,
  LinkedField,
  Sheet,
  TextField,
  Workbook,
  Message,
} from '@flatfile/configure'
import { SmartDateField } from '../../src/SmartDateField'

export const Open_Sales_Order = new Sheet(
  'Open Sales Order',
  {
    //Free form text field

    externalid: TextField({
      label: 'External ID',
      description:
        'This is the Unique backend Identifier for an Employee Record. Should be unique for all Entity Records. This can be used to link other record sets with this Employee.',
      required: true,
      unique: true,
    }),

    //Free Form text field
    orderNumber: TextField({
      label: 'Order #',
      required: true,
      unique: true,
    }),

    //Source from: Customer List
    customer: TextField({
      label: 'Customer',
      required: true,
      unique: false,
    }),

    //This should be in the date format DD/MM/YYYY
    date: SmartDateField({
      label: 'Date',
      fstring: 'DD/MM/YY',
      required: true,
    }),

    //Should source from Sales order Status sheet
    status: TextField({
      label: 'Status',
      required: true,
    }),

    //This should be in the date format DD/MM/YYYY
    startDate: SmartDateField({
      label: 'Start Date',
      fstring: 'DD/MM/YY',
      required: false,
    }),

    //This should be in the date format DD/MM/YYYY
    endDate: SmartDateField({
      label: 'End Date',
      fstring: 'DD/MM/YY',
      required: false,
    }),

    //Free form text field
    poNumeber: TextField({
      label: 'PO #',
      required: false,
      unique: false,
    }),

    //Free form text field
    memo: TextField({
      label: 'Memo',
      required: false,
    }),

    //Free text field - will be updating validation in the future
    job: TextField({
      label: 'Job',
      required: false,
    }),

    //Should source from employee list which are maked as Sales rep
    salesRep: TextField({
      label: 'Sales Rep',
      required: false,
    }),

    //Free text field - will be updating validation in the future
    opportunity: TextField({
      label: 'Opportunity',
      required: false,
    }),

    //Checkbox (true/false)
    excludeCommissions: BooleanField({
      label: 'Exclude Commissions',
      required: false,
    }),

    //Free text field - will be updating validation in the future
    leadSource: BooleanField({
      label: 'Lead Source',
      required: false,
    }),

    //This should be in the date format DD/MM/YYYY
    salesEffectiveDate: SmartDateField({
      label: 'Sales Effective Date',
      fstring: 'DD/MM/YY',
      required: false,
    }),

    //Should source from partner sheet
    partner: BooleanField({
      label: 'Partner',
      required: false,
    }),

    //This should source from the Department List

    department: TextField({
      label: 'Department',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),

    //This should source from the Class List

    class: TextField({
      label: 'Class',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),

    //This should source from the Location List

    location: TextField({
      label: 'Location',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),

    //This should source from the Currency sheet
    Currency: TextField({
      label: 'Currency',
      description:
        'Enter the transaction currency to be used.  This is a reference to the Currency record which must be created under Lists > Accounting > Currencies prior to import.',
      required: true,
    }),

    // Numerical field with a maximum decimal space of 2
    exchangeRate: NumberField({
      label: 'Exchange Rate',
      required: true,
      description:
        'Enter the currency exchange rate as of cutover date for the transaction.  Maximum of 2 decimal places (0.12)  Ask your lead consultant for details.',
      annotations: {
        // default: true,
        // defaultMessage: 'Exchange Rate was not provided, it has been set to ',
        compute: true,
        computeMessage:
          'This value was automatically reformatted to two decimal places. Original value was: ',
      },
      compute: (v: number) => {
        return Number(v.toFixed(2))
      },
    }),

    //Source from: items list

    item: TextField({
      label: 'Item',
      required: true,
    }),

    //Source from: items list

    description: TextField({
      label: 'Description',
      required: false,
    }),

    //This Column should be a numerical value

    rate: NumberField({
      label: 'Rate',
      required: true,
    }),

    //This Column should be a numerical value

    quantity: NumberField({
      label: 'Quantity',
      required: true,
    }),

    // This Column should be a numerical value with a maximum of 2 decimal points
    itemLine_amount: NumberField({
      label: 'Item Line Amount',
      required: false,
      annotations: {
        // default: true,
        // defaultMessage: 'Exchange Rate was not provided, it has been set to ',
        compute: true,
        computeMessage:
          'This value was automatically reformatted to two decimal places. Original value was: ',
      },
      compute: (v: number) => {
        return Number(v.toFixed(2))
      },
    }),

    //this should source from a billing scheduales Worksheet?

    billingSchedule: TextField({
      label: 'Billing Schedule',
      required: true,
    }),

    //This should be in the date format DD/MM/YYYY
    revRecStartDate: SmartDateField({
      label: 'Rev. Rec. Start Date',
      fstring: 'DD/MM/YY',
      required: true,
    }),
    //This should be in the date format DD/MM/YYYY
    revRecEndDate: SmartDateField({
      label: 'Rev. Rec. End Date',
      fstring: 'DD/MM/YY',
      required: true,
    }),
  },

  {
    recordCompute: (record, _session, _logger) => {},
  }
)
