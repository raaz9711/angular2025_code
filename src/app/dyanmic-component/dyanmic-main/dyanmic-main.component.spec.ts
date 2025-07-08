import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicMainComponent } from './dyanmic-main.component';

describe('DyanmicMainComponent', () => {
  let component: DyanmicMainComponent;
  let fixture: ComponentFixture<DyanmicMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyanmicMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyanmicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
