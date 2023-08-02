import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGifsComponent } from './listado-gifs.component';

describe('ListadoGifsComponent', () => {
  let component: ListadoGifsComponent;
  let fixture: ComponentFixture<ListadoGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoGifsComponent]
    });
    fixture = TestBed.createComponent(ListadoGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
