import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory:string[] = [];

  private apiKey:string = 'K59UwpBzXAaUTjnNddTzDfU4SSBB23AS';

  //TODO: Necesito un metodo que me organize los tags de manera que no haya ninguno repetido;

  //TODO: Tambien necesito otro metodo para que los elementos no pasen de una cantidad espicifica

  constructor( private http:HttpClient) { };

  get tagsHistory(){
    return [...this._tagsHistory];
  };


  async searchTag(newTag:string):Promise<void>{
    if (
    newTag === '' 
    ||
    (this._tagsHistory.length > 0 && newTag.toLowerCase() === this._tagsHistory[0].toLowerCase())){
      return
    } else {
      this._tagsHistory.unshift(newTag);
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=K59UwpBzXAaUTjnNddTzDfU4SSBB23AS&q=dota&limit=10')
      .subscribe(
        resp => {
          console.log(resp);
        }
      )
    }
  };

}
