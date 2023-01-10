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

export const Location = new Sheet(
  'Location',
  {
    //No Validation
    externalid: TextField({
      label: 'External ID',
      required: false,
      unique: true,
    }),

    //No Validation
    name: TextField({
      label: 'Name',
      required: true,
      unique: true,
    }),

    //Should Validate against a list of exsisting locations from a specific NetSuite environment
    parent: TextField({
      label: 'Parent',
      required: false,
      unique: false,
    }),

    //Should validate against Subsidary sheet
    subsidiary: TextField({
      label: 'Subsidiary',
      required: false,
      unique: false,
    }),

    //Checkbox
    includeChildren: BooleanField({
      label: 'Include Children',
      required: false,
      unique: false,
    }),

    //Should validate against country Worksheet
    Address_country: TextField({
      label: 'Address Country',
      required: false,
      unique: false,
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
