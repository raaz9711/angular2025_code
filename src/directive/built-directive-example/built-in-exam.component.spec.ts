import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInExamComponent } from './built-in-exam.component';

describe('BuiltInExamComponent', () => {
  let component: BuiltInExamComponent;
  let fixture: ComponentFixture<BuiltInExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
