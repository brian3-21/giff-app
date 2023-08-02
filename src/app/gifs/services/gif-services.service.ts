import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory:string[] = [];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  searchTag(newTag:string){
    this._tagsHistory.unshift(newTag);
  }

}
