import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif-services.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('TxTTag')
  public tagInput!:ElementRef<HTMLInputElement>

  constructor ( private gifService:GifService ) { }

  searchTag(){
    const input = this.tagInput.nativeElement.value;
    this.gifService.searchTag(input);
    console.log(this.gifService.tagsHistory);

    this.tagInput.nativeElement.value = '';

  }


  

}
