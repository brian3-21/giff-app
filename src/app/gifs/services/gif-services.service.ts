import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public gifList:Gif[] = [];
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

    if(newTag!== ''){
      if(true){
        this._tagsHistory = this._tagsHistory.filter( elemnt => elemnt !== newTag);
        console.log('Este es el filtrer:' , this._tagsHistory);
        this._tagsHistory.unshift(newTag);
        const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit','3')
          .set('q',newTag)
        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
          .subscribe( resp => {
            this.gifList = resp.data;
            console.log(this.gifList)
          }
        );
      }
    }
  };

}
