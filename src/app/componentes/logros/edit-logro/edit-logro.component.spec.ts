import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogroComponent } from './edit-logro.component';

describe('EditLogroComponent', () => {
  let component: EditLogroComponent;
  let fixture: ComponentFixture<EditLogroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLogroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
