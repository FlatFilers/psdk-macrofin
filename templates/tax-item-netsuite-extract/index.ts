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

import { Countries_NetSuite_Extract } from '../countries-netsuite-extract'

export const Tax_Item_NetSuite_Extract = new Sheet(
  'Tax Item (NetSuite Extract)',
  {
    internalID: TextField({
      label: 'Internal ID',
      unique: true,
    }),

    name: TextField({
      label: 'Name',
      unique: true,
    }),

    vatRate: TextField({
      label: 'VAT Rate',
    }),

    country: LinkedField({
      label: 'Country',
      sheet: Countries_NetSuite_Extract,
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
