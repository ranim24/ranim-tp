import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AzzaListComponent } from './azza-list.component';

describe('AzzaListComponent', () => {
  let component: AzzaListComponent;
  let fixture: ComponentFixture<AzzaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzzaListComponent],
      imports: [RouterTestingModule] // pour Router
    }).compileComponents();

    fixture = TestBed.createComponent(AzzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});