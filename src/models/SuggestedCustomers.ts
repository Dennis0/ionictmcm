
export class SuggestedCustomers {
     customerid : string;
     customername : string;
     customerphoneno : string;
    

    constructor(customerid: string,customername : string,customerphoneno : string) {
        this.customerid = customerid;
        this.customername = customername;
        this.customerphoneno = customerphoneno;
    }
  }