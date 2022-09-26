export class Proyecto {
    id?:number;
    nombreP:string;
    descripcionP:string;
    imagenP:string;
    linkP:string;

    constructor(nombreP:string, descripcionP:string, imagenP:string, linkP:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;
        this.linkP = linkP;
    }
}
