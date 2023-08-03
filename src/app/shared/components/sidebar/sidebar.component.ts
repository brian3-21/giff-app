import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif-services.service';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifService:GifService){}

  get listTags():string[]{
    return this.gifService.tagsHistory;
  }

}
