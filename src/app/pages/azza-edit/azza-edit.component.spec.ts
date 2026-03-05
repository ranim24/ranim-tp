import { ComponentFixture, TestBed } from '@angular/core/testing';

import { azzaEditComponent } from './azza-edit.component';

describe('azzaEditComponent', () => {
  let component: azzaEditComponent;
  let fixture: ComponentFixture<azzaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [azzaEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(azzaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
