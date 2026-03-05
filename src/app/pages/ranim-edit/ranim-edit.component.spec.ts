import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanimEditComponent } from './ranim-edit.component';

describe('RanimEditComponent', () => {
  let component: RanimEditComponent;
  let fixture: ComponentFixture<RanimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RanimEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
