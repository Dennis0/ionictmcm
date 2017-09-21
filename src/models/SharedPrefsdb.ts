

export class SharedPrefsdb {
    id : string;
    spid : string;
    spusername : string;
    sppassword : string;
    spusertype : string;
    spemployeeid : string;
   
    
     constructor(id : string,
        spid : string,
        spusername : string,
        sppassword : string,
        spusertype : string,
        spemployeeid : string) {
        this.id = id;
        this.spid = spid;
        this.spusername = spusername;
        this.sppassword = sppassword;
        this.spusertype = spusertype;
        this.spemployeeid = spemployeeid;
        
    }
    
    }