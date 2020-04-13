import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnegComponent } from './testneg.component';

describe('TestnegComponent', () => {
  let component: TestnegComponent;
  let fixture: ComponentFixture<TestnegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestnegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
