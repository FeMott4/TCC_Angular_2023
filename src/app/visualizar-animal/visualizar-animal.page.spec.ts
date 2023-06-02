import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarAnimalPage } from './visualizar-animal.page';

describe('VisualizarAnimalPage', () => {
  let component: VisualizarAnimalPage;
  let fixture: ComponentFixture<VisualizarAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
