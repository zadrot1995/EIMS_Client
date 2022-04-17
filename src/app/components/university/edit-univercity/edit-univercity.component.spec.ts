import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnivercityComponent } from './edit-univercity.component';

describe('EditUnivercityComponent', () => {
  let component: EditUnivercityComponent;
  let fixture: ComponentFixture<EditUnivercityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnivercityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnivercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
