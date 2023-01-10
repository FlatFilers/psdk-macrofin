import { Workbook } from '@flatfile/configure'

import { Open_AP_Template } from '../templates/open-ap-template'
import { Vendor } from '../templates/vendor'
import { Chart_of_Accounts_NetSuite_Extract } from '../templates/chart-of-accounts-netsuite-extract'
import { Open_AR_Template } from '../templates/open-ar-template'
import { Customers } from '../templates/customers'
import { Trial_Balance } from '../templates/trial-balance'
import { Subsidiary_NetSuite_Extract } from '../templates/subsidiary-netsuite-extract'
import { Customers_Ed_Integration } from '../templates/customers-ed-integration'
import { States_NetSuite_Extract } from '../templates/states-netsuite-extract'
import { Chart_Of_Accounts_NetSuite_Extract_No_References } from '../templates/chart-of-accounts-netsuite-extract-no-references'
import { Subsidiary_NetSuite_Extract_No_References } from '../templates/subsidiary-netsuite-extract-no-references'
import { Status_NetSuite_Extract_No_References } from '../templates/status-netsuite-extract-no-references'
//import { Vendor_Bank_Details } from './vendor-bank-details'
import { Price_Level_NetSuite_Extract } from '../templates/price-level-netsuite-extract'
import { Tax_Item_NetSuite_Extract } from '../templates/tax-item-netsuite-extract'
import { Terms_NetSuite_Extract } from '../templates/terms-netsuite-extract'
import { Currency_NetSuite_Extract } from '../templates/currency-netsuite-extract'
import { Status_NetSuite_Extract } from '../templates/status-netsuite-extract'
import { Customer_Vendor_NetSuite_Extract } from '../templates/customer-vendor-netsuite-extract'
import { Language_NetSuite_Extract } from '../templates/language-netsuite-extract'
import { Payment_Term_NetSuite_Extract } from '../templates/payment-term-netsuite-extract'
import { Customer_Category_NetSuite_Extract } from '../templates/customer-category-netsuite-extract'
import { Existing_Customers_NetSuite_Extract } from '../templates/existing-customers-netsuite-extract'
import { Sales_Rep_NetSuite_Extract } from '../templates/sales-rep-netsuite-extract'
import { Vendor_Category_NetSuite_Extract } from '../templates/vendor-category-netsuite-extract'
import { Countries_NetSuite_Extract } from '../templates/countries-netsuite-extract'
//import { Vendors_BASELINE } from './vendors-baseline'
import { Payment_File_Format_NetSuite_Extract } from '../templates/payment-file-format-netsuite-extract'
//import { Invoices_BASELINE_Autogenerate_Transaction_ID } from './invoices-baseline-autogenerate-transaction-id'
//import { Invoices_BASELINE } from './invoices-baseline'
//import { Customers_BASELINE_Autogenerate_Customer_ID } from './customers-baseline-autogenerate-customer-id'
//import { Bills_BASELINE } from './bills-baseline'
import { Employees } from '../templates/employees'
import { Sales_Order_Status } from '../templates/sales-order-status'
import { Location } from '../templates/location'

export default new Workbook({
  name: 'Default',
  namespace: 'default',
  sheets: {
    Open_AP_Template,
    Vendor,
    Chart_of_Accounts_NetSuite_Extract,
    Open_AR_Template,
    Customers,
    Trial_Balance,
    Subsidiary_NetSuite_Extract,
    Customers_Ed_Integration,
    States_NetSuite_Extract,
    Chart_Of_Accounts_NetSuite_Extract_No_References,
    Subsidiary_NetSuite_Extract_No_References,
    Status_NetSuite_Extract_No_References,
    //Vendor_Bank_Details,
    Price_Level_NetSuite_Extract,
    Tax_Item_NetSuite_Extract,
    Terms_NetSuite_Extract,
    Currency_NetSuite_Extract,
    Status_NetSuite_Extract,
    Customer_Vendor_NetSuite_Extract,
    Language_NetSuite_Extract,
    Payment_Term_NetSuite_Extract,
    Customer_Category_NetSuite_Extract,
    Existing_Customers_NetSuite_Extract,
    Sales_Rep_NetSuite_Extract,
    Vendor_Category_NetSuite_Extract,
    Countries_NetSuite_Extract,
    //Vendors_BASELINE,
    Payment_File_Format_NetSuite_Extract,
    //Invoices_BASELINE_Autogenerate_Transaction_ID,
    //Invoices_BASELINE,
    //Customers_BASELINE_Autogenerate_Customer_ID,
    //Bills_BASELINE,
    Employees,
    Sales_Order_Status,
    Location,
  },
})
