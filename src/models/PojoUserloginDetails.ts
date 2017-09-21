
export class PojoUserloginDetails {
    email: string;
    password: string;
    apptype: string

    constructor(email: string, password: string,apptype: string) {
        this.email = email;
        this.password = password;
        this.apptype = apptype;
    }
  }