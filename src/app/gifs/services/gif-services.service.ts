import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory:string[] = [];

  private apiKey:string = 'K59UwpBzXAaUTjnNddTzDfU4SSBB23AS';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

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

      const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit','10')
        .set('q',newTag)

      

      this.http.get(`${this.serviceUrl}/search`,{ params })
      .subscribe(
        resp => {
          console.log(resp);
        }
      );
    };
  };

}
