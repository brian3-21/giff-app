import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory:string[] = [];

  constructor() { };

  get tagsHistory(){
    return [...this._tagsHistory];
  };

  searchTag(newTag:string){
    if (
    newTag === '' 
    ||
    (this._tagsHistory.length > 0 && newTag.toLowerCase() === this._tagsHistory[0].toLowerCase())){
      return
    } else {
      this._tagsHistory.unshift(newTag);
    }
  };

}
