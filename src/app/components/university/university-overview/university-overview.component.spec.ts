import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOverviewComponent } from './university-overview.component';

describe('UniversityOverviewComponent', () => {
  let component: UniversityOverviewComponent;
  let fixture: ComponentFixture<UniversityOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
