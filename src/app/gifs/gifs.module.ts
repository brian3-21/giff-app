import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListadoGifsComponent } from './components/listado-gifs/listado-gifs.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListadoGifsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
  ]
})
export class GifsModule { }
