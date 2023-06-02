import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoverAnimalPage } from './remover-animal.page';

describe('RemoverAnimalPage', () => {
  let component: RemoverAnimalPage;
  let fixture: ComponentFixture<RemoverAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemoverAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
