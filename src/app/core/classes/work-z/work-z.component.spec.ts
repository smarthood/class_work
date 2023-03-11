import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkZComponent } from './work-z.component';

describe('WorkZComponent', () => {
  let component: WorkZComponent;
  let fixture: ComponentFixture<WorkZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
