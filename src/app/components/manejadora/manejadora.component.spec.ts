import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejadoraComponent } from './manejadora.component';

describe('ManejadoraComponent', () => {
  let component: ManejadoraComponent;
  let fixture: ComponentFixture<ManejadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
