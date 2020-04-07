import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensibilisationComponent } from './sensibilisation.component';

describe('SensibilisationComponent', () => {
  let component: SensibilisationComponent;
  let fixture: ComponentFixture<SensibilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensibilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensibilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
