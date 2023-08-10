import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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


  onClicTag( tag:string){
    this.gifService.searchTag(tag);
    console.log('aqui deberia haber llamado al metodo');
  }

}
