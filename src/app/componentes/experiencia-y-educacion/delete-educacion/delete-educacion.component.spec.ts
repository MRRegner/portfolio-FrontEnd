import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEducacionComponent } from './delete-educacion.component';

describe('DeleteEducacionComponent', () => {
  let component: DeleteEducacionComponent;
  let fixture: ComponentFixture<DeleteEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
