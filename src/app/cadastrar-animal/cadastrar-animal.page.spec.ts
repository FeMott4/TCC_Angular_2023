import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarAnimalPage } from './cadastrar-animal.page';

describe('CadastrarAnimalPage', () => {
  let component: CadastrarAnimalPage;
  let fixture: ComponentFixture<CadastrarAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
