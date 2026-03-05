import { ComponentFixture, TestBed } from '@angular/core/testing';

import { azzaAddComponent } from './azza-add.component';

describe('azzaAddComponent', () => {
  let component: azzaAddComponent;
  let fixture: ComponentFixture<azzaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [azzaAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(azzaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
