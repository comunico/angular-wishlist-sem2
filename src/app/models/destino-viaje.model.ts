import {v4 as uuid} from 'uuid';

export class DestinoViaje{
 selected: boolean;
 servicios: string[];
 id = uuid();

 constructor(public nombre: string, public u: string, public votes: number = 0) {
     this.servicios = ['pileta', 'desayuno'];
 }
 setSelected(s: boolean){
  this.selected = s;
 }
 isSelected(): boolean {
  return this.selected;
 }
 voteUp() {
   this.votes++;
 }
 voteDown() {
  this.votes--;
}
voteReset() {
  this.votes = 0;
}
}

/*export class DestinoViaje {
nombre: string;
imagenUrl: string;

constructor(n: string, u: string) {
    this.nombre = n;
    this.imagenUrl = u;
}

}*/
