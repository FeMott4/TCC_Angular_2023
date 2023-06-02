import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAnimalPage } from './editar-animal.page';

describe('EditarAnimalPage', () => {
  let component: EditarAnimalPage;
  let fixture: ComponentFixture<EditarAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
