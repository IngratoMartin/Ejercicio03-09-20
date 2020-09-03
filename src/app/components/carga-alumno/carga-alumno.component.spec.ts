import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaAlumnoComponent } from './carga-alumno.component';

describe('CargaAlumnoComponent', () => {
  let component: CargaAlumnoComponent;
  let fixture: ComponentFixture<CargaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
