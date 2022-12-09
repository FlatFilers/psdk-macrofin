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

import { Subsidiary_NetSuite_Extract } from '../subsidiary-netsuite-extract'
import { Currency_NetSuite_Extract } from '../currency-netsuite-extract'
import { Payment_Term_NetSuite_Extract } from '../payment-term-netsuite-extract'
import { States_NetSuite_Extract } from '../states-netsuite-extract'
import { Countries_NetSuite_Extract } from '../countries-netsuite-extract'
import { Vendor_Category_NetSuite_Extract } from '../vendor-category-netsuite-extract'
import { Chart_of_Accounts_NetSuite_Extract } from '../chart-of-accounts-netsuite-extract'
import { Price_Level_NetSuite_Extract } from '../price-level-netsuite-extract'
import { Tax_Item_NetSuite_Extract } from '../tax-item-netsuite-extract'

import * as default_address_addressee_to_company_name from './hooks/default-address1_addressee-to-company-name.js'

export const Vendor = new Sheet(
  'Vendor',
  {
    externalID: TextField({
      label: 'External ID',
      description:
        'This is the Unique backend Identifier for a Vendor Record. Should be Unique for all the Vendor Records. This can be used to create a Parent-Child Relationship and to link other record sets with these Vendors.',
      unique: true,
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,100}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    entityid: TextField({
      label: 'Vendor ID',
      description:
        'This is the Front-End Vendor ID. Should be unique for all the Vendors. This field is not required if you use Auto-Generated Numbers.',
      unique: true,
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,80}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    isPerson: BooleanField({
      label: 'Is Person',
      description:
        'Choose the type of Vendor record you are creating by selecting an Individual.  If set to TRUE, the First Name and Last Name will be a mandatory field to populate.',
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

    firstName: TextField({
      label: 'First Name',
      description:
        'Required field if the Vendor is an Individual. Leave blank for Companies.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,80}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    lastName: TextField({
      label: 'Last Name',
      description:
        'Required field if the Vendor is an Individual. Leave blank for Companies.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,80}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    subsidiary: LinkedField({
      label: 'Subsidiary',
      description:
        'This is a reference to the subsidiary which must be created in your account prior to import. Select from the drop down field.',
      required: true,
      sheet: Subsidiary_NetSuite_Extract,
    }),

    email: TextField({
      label: 'Email',
      description:
        'This field should contain the main E-mail Address of the Vendor.  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com',
    }),

    email_payment_notif: TextField({
      label: 'Email Payment Notif',
      description:
        'This field should contain the main E-mail Address of the Vendor that will receive the remittance advice for electronic payments.  For multiple e-mail addresses, use a semi-colon (;) as a delimiter (ie., jeleny.oral@macorfin.co.uk;consultant@macrofin.co.uk).  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,300}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    phone: TextField({
      label: 'Phone',
      description:
        'The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
    }),

    currency: LinkedField({
      label: 'Currency',
      description:
        'This is mandatory if you use Multiple Currencies.   It is a reference to a currency record that must exist in Lists > Accounting > Currencies prior to importing.',
      sheet: Currency_NetSuite_Extract,
    }),

    terms: LinkedField({
      label: 'Terms',
      description:
        'This field should have the  reference to default terms that you have with this Vendor.   These records must exist in Setup > Accounting > Accounting Lists > Terms prior to importing.',
      sheet: Payment_Term_NetSuite_Extract,
    }),

    address1_Label: TextField({
      label: 'Address1 Label',
      description:
        'It maps to the Label of an Address and indicates the beginning of an individual Address.   The Label must be unique for all the different Addresses for this Vendor.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address_Attention: TextField({
      label: 'Address Attention',
      description: 'Enter the name of the Individual in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_Addressee: TextField({
      label: 'Address1 Addressee',
      description: 'Enter the Addressee or the Company Name here.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_phone: TextField({
      label: 'Address1 Phone',
      description: 'Enter a phone number for your Vendor. ',
    }),

    Address1_line1: TextField({
      label: 'Address1 Line1',
      description: 'Enter the Address Line 1 in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,150}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    address1_line2: TextField({
      label: 'Address1 Line2',
      description: 'Enter the Address Line 2 in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,150}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_City: TextField({
      label: 'Address1 City',
      description: 'Enter the City of the Address in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,50}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    address1_state: LinkedField({
      label: 'Address1 State',
      description:
        'Enter the State in this field. You may enter the standard abbreviation or the full state or province name.',
      sheet: States_NetSuite_Extract,
    }),

    Address1_zipCode: TextField({
      label: 'Address1 Zip Code',
      description: 'Enter the Zip Code of the Address in this field.',
    }),

    Address1_Country: LinkedField({
      label: 'Address1 Country',
      description:
        'This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.',
      sheet: Countries_NetSuite_Extract,
    }),

    Address1_defaultBilling: BooleanField({
      label: 'Address1 Default Billing',
      description:
        'If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.',
    }),

    Address1_defaultShipping: BooleanField({
      label: 'Address1 Default Shipping',
      description:
        'If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.',
    }),

    emailtransactions: BooleanField({
      label: 'Email Transactions',
      description:
        'If marked as TRUE, new transactions created for the Vendor will automatically gets sent out to the third party. Make sure to set this to FALSE for the initial import. If required to be enabled, Vendor lists needs to be updated after cutover.',
    }),

    category: LinkedField({
      label: 'Category',
      description:
        'Provide the Category reference for this Vendor.   It must exist in Setup > Accounting > Accounting Lists > New > Vendor Category prior to importing.',
      sheet: Vendor_Category_NetSuite_Extract,
    }),

    isInactive: BooleanField({
      label: 'Is Inactive',
      description:
        'This is used to mark the Vendor as Inactive at the time of Import',
    }),

    payablesAccount: LinkedField({
      label: 'Payables Account',
      sheet: Chart_of_Accounts_NetSuite_Extract,
    }),

    priceLevel: LinkedField({
      label: 'Price Level',
      description:
        'This is a reference to a default price level at which you sell your items to this Vendor.   The Price Levels must exist in Setup > Accounting > Accounting List > Price Level prior to importing.',
      sheet: Price_Level_NetSuite_Extract,
    }),

    creditLimit: NumberField({
      label: 'Credit Limit',
      description:
        'This is the Credit Limit you would want to set for the Sales transactions with this Vendor.',
    }),

    taxItem: LinkedField({
      label: 'Tax Item',
      description:
        'This is a reference to a default Sales tax item that applies to this Vendor.   The Sales Tax item must exist in Setup > Accounting > Tax Codes prior to importing.',
      sheet: Tax_Item_NetSuite_Extract,
    }),

    vatregnumber: TextField({
      label: "Vendor's tax registration number",
      description: "Enter this Vendor's tax registration number.",
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,50}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    additionalCurrencies: LinkedField({
      label: 'Additional Currencies',
      description:
        'Add additional currencies outside of the primary currency that the Vendor uses.',
      sheet: Currency_NetSuite_Extract,
    }),

    Address2_attention: TextField({
      label: 'Address2 Attention',
      description: 'Enter the name of the Individual in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address2_Addressee: TextField({
      label: 'Address2 Addressee',
      description: 'Enter the Addressee or the Company Name here.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,83}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address2_phone: TextField({
      label: 'Address2 Phone',
      description: 'Enter a phone number for your Vendor.',
    }),

    Address2_line1: TextField({
      label: 'Address2 Line1',
      description: 'Enter the Address Line 1 in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,150}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address2_line2: TextField({
      label: 'Address2 Line2',
      description: 'Enter the Address Line 2 in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,150}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address2_city: TextField({
      label: 'Address2 City',
      description: 'Enter the City of the Address in this field.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,50}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address2_state: LinkedField({
      label: 'Address2 State',
      description:
        'Enter the State in this field. You may enter the standard abbreviation or the full state or province name.',
      sheet: States_NetSuite_Extract,
    }),

    Address2_zipCode: TextField({
      label: 'Address2 Zip Code',
      description: 'Enter the Zip Code of the Address in this field.',
    }),

    Address2_country: LinkedField({
      label: 'Address2 Country',
      description:
        'This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.',
      sheet: Countries_NetSuite_Extract,
    }),

    Address2_defaultBilling: BooleanField({
      label: 'Address2 Default Billing',
      description:
        'If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.',
    }),

    Address2_defaultShipping: BooleanField({
      label: 'Address2 Default Shipping',
      description:
        'If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/

      await default_address_addressee_to_company_name({
        recordBatch,
        session,
        logger,
      })
      /** end running migrated hooks **/
    },
  }
)
