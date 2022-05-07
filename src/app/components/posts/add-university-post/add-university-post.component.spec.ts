import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversityPostComponent } from './add-university-post.component';

describe('AddUniversityPostComponent', () => {
  let component: AddUniversityPostComponent;
  let fixture: ComponentFixture<AddUniversityPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniversityPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniversityPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
