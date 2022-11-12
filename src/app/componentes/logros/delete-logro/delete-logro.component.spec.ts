import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLogroComponent } from './delete-logro.component';

describe('DeleteLogroComponent', () => {
  let component: DeleteLogroComponent;
  let fixture: ComponentFixture<DeleteLogroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLogroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
