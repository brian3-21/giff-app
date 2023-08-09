import { Component } from '@angular/core';
import { GifService } from '../services/gif-services.service';
import { Gif } from '../interface/gif.interface';

@Component({
  selector: 'gif-home-page',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePageComponent {

  constructor( private gifService:GifService){}

  get gifs (){
    return this.gifService.gifList;
  }

}
