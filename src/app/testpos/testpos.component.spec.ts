import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestposComponent } from './testpos.component';

describe('TestposComponent', () => {
  let component: TestposComponent;
  let fixture: ComponentFixture<TestposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
