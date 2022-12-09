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

import { Currency_NetSuite_Extract } from '../currency-netsuite-extract'

export const Subsidiary_NetSuite_Extract = new Sheet(
  'Subsidiary (NetSuite Extract)',
  {
    Internal_Id: TextField({
      label: 'Internal Id',
      unique: true,
    }),

    External_Id: TextField({
      label: 'External Id',
    }),

    Name: TextField({
      label: 'Name',
      unique: true,
    }),

    currency: LinkedField({
      label: 'Currency',
      sheet: Currency_NetSuite_Extract,
    }),

    inactive: BooleanField({
      label: 'Inactive',
      required: true,
    }),

    IsElimination: BooleanField({
      label: 'Is Elimination',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/

      await { recordBatch, session, logger }
      /** end running migrated hooks **/
    },
  }
)
