import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExperienciaComponent } from './delete-experiencia.component';

describe('DeleteExperienciaComponent', () => {
  let component: DeleteExperienciaComponent;
  let fixture: ComponentFixture<DeleteExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
