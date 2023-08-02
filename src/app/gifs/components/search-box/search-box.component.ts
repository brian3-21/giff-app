import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('TxTTag')
  public tagInput!:ElementRef<HTMLInputElement>

  searchTag(){
    const input = this.tagInput.nativeElement.value;
    console.log(input);
  }

}
