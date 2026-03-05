import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanimAddComponent } from './ranim-add.component';

describe('RanimAddComponent', () => {
  let component: RanimAddComponent;
  let fixture: ComponentFixture<RanimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RanimAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
