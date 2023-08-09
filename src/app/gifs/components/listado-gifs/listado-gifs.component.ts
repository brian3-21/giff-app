import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gif-listado',
  templateUrl: './listado-gifs.component.html',
  styleUrls: ['./listado-gifs.component.css']
})
export class ListadoGifsComponent {

  @Input()
  public gifList: Gif[] = [];

}
