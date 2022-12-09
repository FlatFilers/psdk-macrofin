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

import { Chart_of_Accounts_NetSuite_Extract } from '../chart-of-accounts-netsuite-extract'
import { Subsidiary_NetSuite_Extract } from '../subsidiary-netsuite-extract'

export const Trial_Balance = new Sheet(
  'Trial Balance',
  {
    tranid: TextField({
      label: 'Tran ID',
      description: 'This is used to group the transaction lines together.',
      required: true,
      unique: true,
      validate: (value) => {
        const regex = new RegExp('', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    Subsidiary: LinkedField({
      label: 'Subsidiary',
      description:
        'This is a reference to the subsidiary which must be created in your Setup > Company > Subsidiaries prior to import.',
      required: true,
      sheet: Subsidiary_NetSuite_Extract,
    }),

    Currency: OptionField({
      label: 'Currency',
      description:
        'Enter the transaction currency to be used.  This is a reference to the Currency record which must be created under Lists > Accounting > Currencies prior to import.',
      required: true,
      options: {
        USD: 'United States dollar',
        GBP: 'Pound sterling',
        EUR: 'Euro',
        CAD: 'Canadian dollar',
        AUD: 'Australian dollar',
        CHF: 'Swiss franc',
        CNY: 'Chinese yuan',
        AED: 'United Arab Emirates dirham',
        AFN: 'Afghan afghani',
        ALL: 'Albanian lek',
        AMD: 'Armenian dram',
        ANG: 'Netherlands Antillean guilder',
        AOA: 'Angolan kwanza',
        ARS: 'Argentine peso',
        AWG: 'Aruban florin',
        AZN: 'Azerbaijani manat',
        BAM: 'Bosnia and Herzegovina convertible mark',
        BBD: 'Barbados dollar',
        BDT: 'Bangladeshi taka',
        BGN: 'Bulgarian lev',
        BHD: 'Bahraini dinar',
        BIF: 'Burundian franc',
        BMD: 'Bermudian dollar',
        BND: 'Brunei dollar',
        BOB: 'Boliviano',
        BRL: 'Brazilian real',
        BSD: 'Bahamian dollar',
        BTN: 'Bhutanese ngultrum',
        BWP: 'Botswana pula',
        BYN: 'Belarusian ruble',
        BZD: 'Belize dollar',
        CDF: 'Congolese franc',
        CLP: 'Chilean peso',
        COP: 'Colombian peso',
        COU: 'Unidad de Valor Real',
        CRC: 'Costa Rican colon',
        CUC: 'Cuban convertible peso',
        CUP: 'Cuban peso',
        CVE: 'Cape Verdean escudo',
        CZK: 'Czech koruna',
        DJF: 'Djiboutian franc',
        DKK: 'Danish krone',
        DOP: 'Dominican peso',
        DZD: 'Algerian dinar',
        EGP: 'Egyptian pound',
        ERN: 'Eritrean nakfa',
        ETB: 'Ethiopian birr',
        FJD: 'Fiji dollar',
        FKP: 'Falkland Islands pound',
        GEL: 'Georgian lari',
        GHS: 'Ghanaian cedi',
        GIP: 'Gibraltar pound',
        GMD: 'Gambian dalasi',
        GNF: 'Guinean franc',
        GTQ: 'Guatemalan quetzal',
        GYD: 'Guyanese dollar',
        HKD: 'Hong Kong dollar',
        HNL: 'Honduran lempira',
        HRK: 'Croatian kuna',
        HTG: 'Haitian gourde',
        HUF: 'Hungarian forint',
        IDR: 'Indonesian rupiah',
        ILS: 'Israeli new shekel',
        INR: 'Indian rupee',
        IQD: 'Iraqi dinar',
        IRR: 'Iranian rial',
        ISK: 'Icelandic króna',
        JMD: 'Jamaican dollar',
        JOD: 'Jordanian dinar',
        JPY: 'Japanese yen',
        KES: 'Kenyan shilling',
        KGS: 'Kyrgyzstani som',
        KHR: 'Cambodian riel',
        KMF: 'Comoro franc',
        KPW: 'North Korean won',
        KRW: 'South Korean won',
        KWD: 'Kuwaiti dinar',
        KYD: 'Cayman Islands dollar',
        KZT: 'Kazakhstani tenge',
        LAK: 'Lao kip',
        LBP: 'Lebanese pound',
        LKR: 'Sri Lankan rupee',
        LRD: 'Liberian dollar',
        LSL: 'Lesotho loti',
        LYD: 'Libyan dinar',
        MAD: 'Moroccan dirham',
        MDL: 'Moldovan leu',
        MGA: 'Malagasy ariary',
        MKD: 'Macedonian denar',
        MMK: 'Myanmar kyat',
        MNT: 'Mongolian tögrög',
        MOP: 'Macanese pataca',
        MRU: 'Mauritanian ouguiya',
        MUR: 'Mauritian rupee',
        MVR: 'Maldivian rufiyaa',
        MWK: 'Malawian kwacha',
        MXN: 'Mexican peso',
        MYR: 'Malaysian ringgit',
        MZN: 'Mozambican metical',
        NAD: 'Namibian dollar',
        NGN: 'Nigerian naira',
        NIO: 'Nicaraguan córdoba',
        NOK: 'Norwegian krone',
        NPR: 'Nepalese rupee',
        NZD: 'New Zealand dollar',
        OMR: 'Omani rial',
        PAB: 'Panamanian balboa',
        PEN: 'Peruvian sol',
        PGK: 'Papua New Guinean kina',
        PHP: 'Philippine peso',
        PKR: 'Pakistani rupee',
        PLN: 'Polish złoty',
        PYG: 'Paraguayan guaraní',
        QAR: 'Qatari riyal',
        RON: 'Romanian leu',
        RSD: 'Serbian dinar',
        RUB: 'Russian ruble',
        RWF: 'Rwandan franc',
        SAR: 'Saudi riyal',
        SBD: 'Solomon Islands dollar',
        SCR: 'Seychelles rupee',
        SDG: 'Sudanese pound',
        SEK: 'Swedish krona',
        SGD: 'Singapore dollar',
        SHP: 'Saint Helena pound',
        SLL: 'Sierra Leonean leone',
        SOS: 'Somali shilling',
        SRD: 'Surinamese dollar',
        SSP: 'South Sudanese pound',
        STN: 'São Tomé and Príncipe dobra',
        SVC: 'Salvadoran colón',
        SYP: 'Syrian pound',
        SZL: 'Swazi lilangeni',
        THB: 'Thai baht',
        TJS: 'Tajikistani somoni',
        TMT: 'Turkmenistan manat',
        TND: 'Tunisian dinar',
        TOP: 'Tongan paʻanga',
        TRY: 'Turkish lira',
        TTD: 'Trinidad and Tobago dollar',
        TWD: 'New Taiwan dollar',
        TZS: 'Tanzanian shilling',
        UAH: 'Ukrainian hryvnia',
        UGX: 'Ugandan shilling',
        UYU: 'Uruguayan peso',
        UYW: 'Unidad previsional',
        UZS: 'Uzbekistan som',
        VED: 'Venezuelan bolívar digital',
        VES: 'Venezuelan bolívar soberano',
        VND: 'Vietnamese đồng',
        VUV: 'Vanuatu vatu',
        WST: 'Samoan tala',
        YER: 'Yemeni rial',
        ZAR: 'South African rand',
        ZMW: 'Zambian kwacha',
        ZWL: 'Zimbabwean dollar',
      },
    }),

    exchangeRate: TextField({
      label: 'Exchange Rate',
      description:
        'Enter the currency exchange rate as of cutover date for the transaction.  Maximum of 8 decimal places (0.12345678)  Ask your lead consultant for details.',
      validate: (value) => {
        const regex = new RegExp('^$|^[+-]?\\d*\\.\\d{1,8}$', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    postingPeriod: TextField({
      label: 'Posting Period',
      description:
        'This is the accounting period based on the transaction date.  Formula driven. Do not override.',
    }),

    tranDate: TextField({
      label: 'Tran Date',
      description:
        'Enter the transaction date.  This defaults to the date entered on the instruction sheet. Override if needed.',
    }),

    memoHeader: TextField({
      label: 'Memo Header',
      description:
        'You can retain the default memo driven by the formula or enter the actual description of the transaction. ',
      required: true,
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,999}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    account: LinkedField({
      label: 'Account',
      description:
        'This is a reference to the GL account against which the amounts have to be posted.    Simply enter the account number of the GL account.  The account must be setup in Lists > Accounting > Accounts prior to import.',
      sheet: Chart_of_Accounts_NetSuite_Extract,
    }),

    accountname: LinkedField({
      label: 'Account Name',
      description:
        '(Lookup Needed) Displays the account name based on the account number.',
      sheet: Chart_of_Accounts_NetSuite_Extract,
    }),

    memoLines: TextField({
      label: 'Memo Lines',
      description:
        'You can retain the default memo driven by the formula or enter the actual description of the transaction line.',
      validate: (value) => {
        const regex = new RegExp('^$|^(?=.{1,999}$).*', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    debit: TextField({
      label: 'Debit',
      description:
        'Enter the debit amount in this field.  Ensure NOT to use a thousand separator on the number format.  Maximum of 2 decimal places.',
      validate: (value) => {
        const regex = new RegExp('^$|^(\\d{1,5}|\\d{0,5}\\.\\d{1,2})$', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    credit: TextField({
      label: 'Credit',
      description:
        'Enter the credit amount in this field.  Ensure NOT to use a thousand separator on the number format.  Maximum of 2 decimal places.',
      validate: (value) => {
        const regex = new RegExp('^$|^(\\d{1,5}|\\d{0,5}\\.\\d{1,2})$', '')
        if (!regex.test(value)) {
          return [new Message('Invalid value', 'error', 'validate')]
        }
      },
    }),

    department: TextField({
      label: 'Department',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),

    class: TextField({
      label: 'Class',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),

    location: TextField({
      label: 'Location',
      description:
        'This should be the #N/A value of the segment.  Formula driven. Do not override.',
    }),
  },
  {
    batchRecordsCompute: async (recordBatch, session, logger) => {
      /** begin running migrated hooks **/
      /** end running migrated hooks **/
    },
  }
)
