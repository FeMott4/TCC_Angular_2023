import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarAnimalPage } from './consultar-animal.page';

describe('ConsultarAnimalPage', () => {
  let component: ConsultarAnimalPage;
  let fixture: ComponentFixture<ConsultarAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
