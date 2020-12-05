import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestposComponent } from './testpos.component';

describe('TestposComponent', () => {
  let component: TestposComponent;
  let fixture: ComponentFixture<TestposComponent>;

  beforeEach(waitForAsync(() => {
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
