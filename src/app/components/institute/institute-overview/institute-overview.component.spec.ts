import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOverviewComponent } from './institute-overview.component';

describe('InstituteOverviewComponent', () => {
  let component: InstituteOverviewComponent;
  let fixture: ComponentFixture<InstituteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
