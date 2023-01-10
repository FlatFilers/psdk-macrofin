import { Workbook } from '@flatfile/configure'

import { Open_AP_Template } from '../templates/open-ap-template'
import { Vendor } from '../templates/vendor'
import { Chart_of_Accounts_NetSuite_Extract } from '../templates/chart-of-accounts-netsuite-extract'
import { Open_AR_Template } from '../templates/open-ar-template'
import { Customers } from '../templates/customers'
import { Trial_Balance } from '../templates/trial-balance'
import { Subsidiary_NetSuite_Extract } from '../templates/subsidiary-netsuite-extract'
import { States_NetSuite_Extract } from '../templates/states-netsuite-extract'
import { Price_Level_NetSuite_Extract } from '../templates/price-level-netsuite-extract'
import { Tax_Item_NetSuite_Extract } from '../templates/tax-item-netsuite-extract'
import { Terms_NetSuite_Extract } from '../templates/terms-netsuite-extract'
import { Currency_NetSuite_Extract } from '../templates/currency-netsuite-extract'
import { Status_NetSuite_Extract } from '../templates/status-netsuite-extract'
import { Customer_Vendor_NetSuite_Extract } from '../templates/customer-vendor-netsuite-extract'
import { Language_NetSuite_Extract } from '../templates/language-netsuite-extract'
import { Payment_Term_NetSuite_Extract } from '../templates/payment-term-netsuite-extract'
import { Customer_Category_NetSuite_Extract } from '../templates/customer-category-netsuite-extract'
import { Sales_Rep_NetSuite_Extract } from '../templates/sales-rep-netsuite-extract'
import { Vendor_Category_NetSuite_Extract } from '../templates/vendor-category-netsuite-extract'
import { Countries_NetSuite_Extract } from '../templates/countries-netsuite-extract'
import { Payment_File_Format_NetSuite_Extract } from '../templates/payment-file-format-netsuite-extract'
import { Employees } from '../templates/employees'
import { Sales_Order_Status } from '../templates/sales-order-status'
import { Location } from '../templates/location'
import { Department } from '../templates/department'
import { Classes } from '../templates/classes'
import { Vendor_Bank_Details } from '../templates/vendor-bank-details'
import { Billing_Schedule } from '../templates/billing_schedule'
import { Job } from '../templates/job'
import { Partners } from '../templates/partners'
import { Open_Amortization_Schedule } from '../templates/open_amortization_schedule'
import { Open_Sales_Order } from '../templates/open_sales_order'

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
    States_NetSuite_Extract,
    Price_Level_NetSuite_Extract,
    Tax_Item_NetSuite_Extract,
    Terms_NetSuite_Extract,
    Currency_NetSuite_Extract,
    Status_NetSuite_Extract,
    Customer_Vendor_NetSuite_Extract,
    Language_NetSuite_Extract,
    Payment_Term_NetSuite_Extract,
    Customer_Category_NetSuite_Extract,
    Sales_Rep_NetSuite_Extract,
    Vendor_Category_NetSuite_Extract,
    Countries_NetSuite_Extract,
    Payment_File_Format_NetSuite_Extract,
    Employees,
    Sales_Order_Status,
    Location,
    Department,
    Classes,
    Vendor_Bank_Details,
    Billing_Schedule,
    Job,
    Partners,
    Open_Amortization_Schedule,
    Open_Sales_Order,
  },
})
