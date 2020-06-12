import { TestBed } from '@angular/core/testing';

import { MapChartService } from './map-chart.service';

describe('MapChartService', () => {
  let service: MapChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
