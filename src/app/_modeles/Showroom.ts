export class Showroom{

    ownerId:number ; 
    name:string="";
    nbrOfCars:number=0;
    descriptiom="";
    dateOfCreation:string="";
    environement:string ="";

    constructor(ownerId:number ,name:string, nbrOfCars:number=0, descriptiom:string ,dateOfCreation:string | null="" , environement:string=""  ){
        this.ownerId=ownerId;
        this.dateOfCreation=dateOfCreation!;
        this.name=name;
        this.descriptiom=descriptiom
        this.environement=environement;
        this.nbrOfCars=nbrOfCars
    }

}