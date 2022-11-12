import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogroComponent } from './add-logro.component';

describe('AddLogroComponent', () => {
  let component: AddLogroComponent;
  let fixture: ComponentFixture<AddLogroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
