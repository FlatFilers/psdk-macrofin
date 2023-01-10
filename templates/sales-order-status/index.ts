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

export const Sales_Order_Status = new Sheet(
  'Sales Order Status',
  {
    // Standard Values: Pending Fulfillment, Pending Approval, Pending Billing
    statusName: TextField({
      label: 'Status Name',
      required: true,
      unique: true,
    }),
    id: TextField({
      label: 'id',
      required: false,
      unique: true,
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
