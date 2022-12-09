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

import { Payment_File_Format_NetSuite_Extract } from '../payment-file-format-netsuite-extract'

export const Vendor_Bank_Details = new Sheet(
  'Vendor Bank Details',
  {
    internalID: TextField({
      label: 'Internal ID',
      description:
        'This is the Unique backend Identifier for the Vendor Record.',
      unique: true,
    }),

    entityID: TextField({
      label: 'Entity ID',
      description:
        'This is the Front-End Vendor ID. Should be unique for all the Vendors. This field is not required if you use Auto-Generated Numbers.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,80}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    companyName: TextField({
      label: 'Company Name',
      description: "Enter the Vendor's company name.",
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    subsidiary: LinkedField({
      label: 'Subsidiary',
      description:
        'This is a reference to the subsidiary which must be created in your account prior to import.    Select from the drop down field.',
      sheet: undefined,
    }),

    paymentFileFormat: LinkedField({
      label: 'Payment File Format',
      description: 'Select the appropriate payment file format to be used',
      sheet: Payment_File_Format_NetSuite_Extract,
    }),

    bankRecordName: TextField({
      label: 'Bank Record Name',
      description: 'Enter the bank detail record name.  ***Formula driven***',
    }),

    type: OptionField({
      label: 'Type',
      description:
        'If the vendor have multiple bank detail information, identify which bank detail will be used as the Primary record.',
      options: {
        primary: 'Primary',
        secondary: 'Secondary',
      },
    }),

    bankAccountType: OptionField({
      label: 'Bank Account Type',
      description: 'Select what is the bank account type - Checking or Savings',
      options: {
        checking: 'Checking',
        savings: 'Savings',
      },
    }),

    bankAccountName: TextField({
      label: 'Bank Account Name',
      description: 'Enter the bank account name.',
    }),

    bankAccountNumber: TextField({
      label: 'Bank Account Number',
      description:
        'Enter the bank account number. Remove all special characters.',
    }),

    sortCode: TextField({
      label: 'Sort Code',
      description: 'Enter the sort code. Remove all special characters.',
    }),

    bicswift: TextField({
      label: 'BIC/SWIFT',
      description: 'Enter the BIC/SWIFT. Remove all special characters.',
    }),

    IBAN: TextField({
      label: 'IBAN',
      description: 'Enter the IBAN. Remove all special characters.',
    }),

    routingNumber: TextField({
      label: 'Routing Number',
      description: 'Enter the routing number. Remove all special characters.',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
