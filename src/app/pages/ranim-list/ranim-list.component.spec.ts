import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanimListComponent } from './ranim-list.component';

describe('RanimListComponent', () => {
  let component: RanimListComponent;
  let fixture: ComponentFixture<RanimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RanimListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
