import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComComponent } from './pipe-com.component';

describe('PipeComComponent', () => {
  let component: PipeComComponent;
  let fixture: ComponentFixture<PipeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
