import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormLibComponent } from './my-form-lib.component';

describe('MyFormLibComponent', () => {
  let component: MyFormLibComponent;
  let fixture: ComponentFixture<MyFormLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFormLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
