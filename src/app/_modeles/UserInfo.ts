export class UserInfo{

    userName:string=""; 
    firstName:string=""
    lastName:string=""
    admin:boolean=false; 
    email:string=""
    phone:string=""; 
    

    constructor(userName:string , firstname:string , lastname:string , admin:boolean , email:string , phone:string){
        this.userName=userName;
        this.firstName=firstname;
        this.lastName=lastname;
        this.admin=admin;
        this.email=email;
        this.phone=phone;
    }

}