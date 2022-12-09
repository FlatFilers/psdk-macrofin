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

export const Chart_of_Accounts_NetSuite_Extract = new Sheet(
  'Chart of Accounts (NetSuite Extract)',
  {
    internalID: TextField({
      label: 'Internal ID',
      unique: true,
    }),

    'Account Name': TextField({
      label: 'Account Name',
      unique: true,
    }),

    'Account Number': TextField({
      label: 'Account Number',
      unique: true,
    }),

    'Account type ': TextField({
      label: 'Account Type ',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
