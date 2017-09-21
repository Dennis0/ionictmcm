

export class UserLoginResponsenc {
    message : string;
     pasword : string;
     username : string;
     usertype : string;
    userid : number;
    employeeid : number;
     userrole : number;
     error : boolean;
     constructor(message : string,
        pasword : string,
        username : string,
        usertype : string,
       userid : number,
       employeeid : number,
        userrole : number,
        error : boolean) {
        this.message = message;
        this.pasword = pasword;
        this.username = username;
    
        this.usertype = usertype;
        this.userid = userid;
        this.employeeid = employeeid;
        this.userrole = userrole;
        this.error = error;
        }
}