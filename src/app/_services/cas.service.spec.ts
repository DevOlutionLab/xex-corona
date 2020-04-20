import { TestBed } from '@angular/core/testing';

import { CasService } from './cas.service';

describe('CasService', () => {
  let service: CasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
