import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversitiesComponent } from './add-universities.component';

describe('AddUniversitiesComponent', () => {
  let component: AddUniversitiesComponent;
  let fixture: ComponentFixture<AddUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
