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
  ReferenceField,
} from '@flatfile/configure'

export const Customers = new Sheet(
  'Customers',
  {
    externalId: TextField({
      label: 'ExternalID',
      description:
        'This is the Unique backend Identifier for a Customer Record. Should be Unique for all the Customer Records. This can be used to create a Parent-Child Relationship and to link other record sets with these Customers.',
      unique: true,
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,100}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    entityId: TextField({
      label: 'Customer ID',
      description:
        'This is the Front-End Customer ID. It will be combined with the Company or Invididual Name to create the full Entity ID.   ID should be unique for all  Customers. This field is not required if you use Auto-Generated Numbers.',
      required: true,
      unique: true,
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,80$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    isperson: BooleanField({
      label: 'Individual',
      description:
        'Records TRUE/FALSE. Please put TRUE if the Customer is an individual.',
    }),

    // Add validation for Optional field if the Customer is an Individual. Leave blank for Companies.

    salutation: OptionField({
      label: 'Mr./Ms...',
      description:
        '(Need category mappings) Optional field if the Customer is an Individual. Leave blank for Companies.',
      options: {
        '1': 'Mr.',
        '2': 'Ms.',
        '3': 'Mrs.',
        '4': 'PhD',
        '5': 'JD',
        '6': 'Esq',
        '7': 'Rev',
      },
    }),

    // Add validation Required field if the Customer is an Individual.

    firstname: TextField({
      label: 'First Name',
      description:
        '(need requiredWith logic) Required field if the Customer is an Individual. ',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,32}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    middlename: TextField({
      label: 'Middle Name',
      description:
        'Optional field if the Customer is an Individual.  Leave blank for Companies.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,32}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    //Required field if the Customer is an Individual.

    lastname: TextField({
      label: 'Last Name',
      description:
        '(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,32}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    title: TextField({
      label: 'Job Title',
      description: 'For individual customers, leave blank for Companies.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,99}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    companyname: TextField({
      label: 'Company Name',
      description:
        '(Need requiredWith logic) Required field if the Customer is a Company. Leave blank for Individual customers',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,83}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    // need to link to validate against list of Netsuite Customers

    parent: TextField({
      label: 'Child Of',
      description:
        '(Need Lookup/Relational logic) ParentHandle field is used to create the Parent-Child Relationship for the Customers.  You can use parent Customer ID/Name or External ID. Please make sure to populate the template such that the Parent Records are given in rows above the Child records.',
    }),

    status: ReferenceField({
      label: 'Status',
      sheetKey: 'Status_NetSuite_Extract',
      foreignKey: 'name',
      relationship: 'has-many',
      description:
        'This field should have the reference to Customer statuses that must exist in your account prior to importing.  You can create a new Customer status at Setup > Sales > Customer Statuses > New.',
      required: true,
    }),

    subsidiary: ReferenceField({
      label: 'Subsidiary',
      sheetKey: 'Subsidiary_NetSuite_Extract',
      foreignKey: 'Name',
      relationship: 'has-many',
      description:
        '(array mapped to multiple FKs) This is a reference to the subsidiary which must be created in your account prior to import.    In case you want to refer a child subsidiary the complete hierarchy must be provided in the format: Parent Subsidiary Name : Child Subsidiary Name.  The delimiter to be used for selecting multiple subsidiaries is a pipe ( | ), without spaces between the two subsidiary references.  This field becomes mandatory if you are using a NetSuite One-World account.',
      required: true,
    }),

    //need to link to validate against list of Netsuite Employees, Need to confirm look-up value
    salesrep: ReferenceField({
      label: 'Sales Rep',
      sheetKey: 'Employees',
      foreignKey: 'entityId',
      relationship: 'has-many',
      description:
        '(Lookup field) Provide the reference to the Sales Rep associated with this Customer. The Employee record must exist in your account prior to importing.   The Sales Rep checkbox must be marked in Lists > Employees > Human Resources.',
    }),

    url: TextField({
      label: 'Web Address',
      description:
        'Must be the complete URL of the company. Ex. http://www.netsuite.com',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,100}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    category: ReferenceField({
      label: 'Category',
      sheetKey: 'Customer_Category_NetSuite_Extract',
      foreignKey: 'name',
      relationship: 'has-many',
      description:
        'Provide the Category reference for this Customer.   It must exist in Setup > Accounting > Accounting Lists > New > Customer Category prior to importing.',
    }),

    defaultorderpriority: NumberField({
      label: 'Default Order Priority',
      description:
        'Enter a number to designate the priority for this customer.  To utilize the priority-based item commitment functionality in your account, you must mark customer records to prioritize the importance of filling orders for customers. Then, transactions are processed based on the indicated priority of the selected customer.',
    }),

    comments: TextField({
      label: 'Comments',
      description:
        'These are the general Comments for the Customers. Should not be used to put the User Notes.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,4000}$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    //add email validation here

    email: TextField({
      label: 'Email',
      description:
        'This field should contain the main E-mail Address of the Customer.  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com',
      validate: (value) => {
        const regex = new RegExp('^$|^[w-.]+@([w-]+.)+[w-]{2,4}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'The information entered for this field must conform to the standard e-mail Address format. i.e. user@domain.com.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),

    //add email validation here

    altEmail: TextField({
      label: 'Alt. Email',
      description:
        'This field is only available for Individual Customers.  This field should contain the alternate E-mail Address of the Customer.    The Information entered for this field must conform to the standard e-mail Address format. i.e. user@domain.com.',
      validate: (value) => {
        const regex = new RegExp('^$|^[w-.]+@([w-]+.)+[w-]{2,4}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'The information entered for this field must conform to the standard e-mail Address format. i.e. user@domain.com.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),

    //add phone validation here

    phone: TextField({
      label: 'Phone',
      description:
        'The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
      validate: (value) => {
        const regex = new RegExp('^.{0,21}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'Please enter up to 21 characters.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),
    //add phone validation here
    altPhone: TextField({
      label: 'Alt. Phone',
      description:
        'This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
      validate: (value) => {
        const regex = new RegExp('^.{0,21}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'Please enter up to 21 characters.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),
    //add phone validation here
    mobilePhone: TextField({
      label: 'Mobile Phone',
      description:
        'This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
      validate: (value) => {
        const regex = new RegExp('^.{0,21}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'Please enter up to 21 characters.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),
    //add phone validation here
    homePhone: TextField({
      label: 'Home Phone',
      description:
        'This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
      validate: (value) => {
        const regex = new RegExp('^.{0,21}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'Please enter up to 21 characters.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),
    //add phone validation here
    fax: TextField({
      label: 'Fax',
      description:
        'The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568',
      validate: (value) => {
        const regex = new RegExp('^.{0,21}$', '')
        if (!regex.test(value)) {
          return [
            new Message(
              'Please enter up to 21 characters.',
              'error',
              'validate'
            ),
          ]
        }
      },
    }),

    Address1_AddressName: TextField({
      label: 'Label',
      description:
        'This field is only required if you use the AddressList element. It maps to the Label of an Address and indicates the beginning of an individual Address.   The Label must be unique for all the different Addresses for this Customer.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,150$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_attention: TextField({
      label: 'Attention',
      description: 'Enter the name of the Individual in this field.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,83$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_Addressee: TextField({
      label: 'Addressee',
      description: 'Enter the Addressee or the Company Name here.',
      validate: (value) => {
        const regex = new RegExp('', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_phone: TextField({
      label: 'Phone',
      description: 'Enter a phone number for your Customer. ',
    }),

    Address1_line1: TextField({
      label: 'Address 1',
      description: 'Enter the Address Line 1 in this field.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,150$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_line2: TextField({
      label: 'Address 2',
      description: 'Enter the Address Line 2 in this field.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,150$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Address1_city: TextField({
      label: 'Address1 City',
      description: 'Enter the City of the Address in this field.',
      validate: (value) => {
        const regex = new RegExp('^(?=.{1,50$).*', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),
    // Needs to be valid for Country and may require some transformation - Flag for Paddy
    Address1_state: ReferenceField({
      label: 'Province/State',
      sheetKey: 'States_NetSuite_Extract',
      foreignKey: 'State',
      relationship: 'has-many',
      description:
        '(need Lookup field) Enter the State in this field. You may enter the standard abbreviation or the full state or province name.',
    }),

    Address1_zipCode: TextField({
      label: 'Postal Code/Zip',
      description: 'Enter the Zip Code of the Address in this field.',
    }),

    //Reference to NetSuite

    Address1_country: ReferenceField({
      label: 'Country',
      sheetKey: 'Countries_NetSuite_Extract',
      foreignKey: 'Countries',
      relationship: 'has-many',
      description:
        '(need Lookup field) This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.',
      required: true,
    }),

    Address1_defaultBilling: BooleanField({
      label: 'Default Billing',
      description:
        'If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.',
    }),

    Address1_defaultShipping: BooleanField({
      label: 'Default Shipping',
      description:
        'If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.',
    }),

    accountnumber: NumberField({
      label: 'Account Number',
      description: 'Account Number shared with the Customer.',
    }),

    defaultreceivablesaccount: ReferenceField({
      label: 'Default Receivables Account',
      sheetKey: 'Chart_of_Accounts_NetSuite_Extract',
      foreignKey: 'Account Name',
      relationship: 'has-many',
      description:
        "(need Lookup field) Choose the A/R account to use by default on receivables transactions for this customer.  If you select Use System Preference, the account selected at Setup > Accounting > Accounting Preferences > Items/Transactions in the Default Receivables Account field is used as this customer's default.",
    }),

    currency: ReferenceField({
      label: 'Currency',
      sheetKey: 'Currency_NetSuite_Extract',
      foreignKey: 'Name',
      relationship: 'has-many',
      description:
        "This element is a reference to a currency record that must exist in  your account prior to importing.  The currency used must match the  currency selected on the customer's record.",
    }),

    terms: ReferenceField({
      label: 'Terms',
      sheetKey: 'Terms_NetSuite_Extract',
      foreignKey: 'description',
      relationship: 'has-many',
      description:
        '(need enum values) This field should have the  reference to default terms that you have with this Customer.   These records must exist in Setup > Accounting > Accounting Lists > Terms prior to importing.',
    }),

    creditlimit: TextField({
      label: 'Credit Limit',
      description:
        'This is the Credit Limit you would want to set for the Sales transactions with this Customer.',
      validate: (value) => {
        const regex = new RegExp('^\\d*\\.?\\d+$', 'i')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    hold: OptionField({
      label: 'Hold',
      description:
        "Select one of the following:  Select Auto if you want this customer's credit status to follow the rules you set at > > Accounting Preferences. Select On to manually apply a credit hold on this customer. Select Off to manually remove a credit hold on this customer.",
      options: {
        auto: 'Auto',
        on: 'On',
        off: 'Off',
      },
    }),

    vatregnumber: NumberField({
      label: 'Tax Reg. Number',
      description: "Enter this Customer's tax registration number.",
    }),

    resaleNumber: NumberField({
      label: 'Resale Number',
      description:
        "If you do not collect Sales tax from this Customer because your merchandise will be resold, enter your Customer's appropriate tax license number here.",
    }),

    //need to add default value here - is this still a bug?
    emailTransaction: BooleanField({
      label: 'Email Transaction',
      description:
        "Defaults to False - don't want customer to override the value",
      default: false,
      annotations: {
        default: true,
        defaultMessage: 'Field was defaulted to False',
      },
    }),

    inactive: BooleanField({
      label: 'Inactive',
    }),

    DRAccount: TextField({
      label: 'DRAccount',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
