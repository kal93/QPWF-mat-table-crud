import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAuthorsComponent } from './table-authors.component';

describe('TableAuthorsComponent', () => {
  let component: TableAuthorsComponent;
  let fixture: ComponentFixture<TableAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
