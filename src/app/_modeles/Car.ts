export class Car{

    modelName:string=""; 
    descriptiom:string="";
    price:string="";
    maxSpeed:string="";
    categorie:string="";
    file:File| null = null;;
    // colors:string="";

    constructor(modelName:string , descriptiom:string , price:string , categorie:string , maxSpeed:string , file:File ){
        this.modelName=modelName;
        this.descriptiom=descriptiom;
        this.price=price;
        this.categorie=categorie;
        this.maxSpeed=maxSpeed;
        if(file!=null) this.file=file;
    }

}