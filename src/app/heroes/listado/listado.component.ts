import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitán América'];
  heroeBorrado: string | undefined = '';

  borrarHeroe(){
    const heroeBorrado:string | undefined = this.heroes.shift();
    this.heroeBorrado = heroeBorrado;
  }

}
