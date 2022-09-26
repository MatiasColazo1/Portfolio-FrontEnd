export class Educacion {
    id?: number;
    nombreD: string;
    descripcionD: string;
    fechaD: string;

    constructor(nombreD: string, descripcionD: string, fechaD: string){
        this.nombreD = nombreD;
        this.descripcionD = descripcionD;
        this.fechaD = fechaD;
    }
}
