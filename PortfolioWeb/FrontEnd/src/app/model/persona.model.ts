export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo:string;
    gitLink:string;
    linLink:string;

    constructor(nombre: string, apellido: string, img: string, titulo: string, gitLink: string, linLink: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.gitLink = gitLink;
        this.linLink = linLink;
    }
}