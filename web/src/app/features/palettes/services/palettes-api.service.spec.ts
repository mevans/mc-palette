import { TestBed } from '@angular/core/testing';

import { PalettesApiService } from './palettes-api.service';

describe('PalettesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalettesApiService = TestBed.get(PalettesApiService);
    expect(service).toBeTruthy();
  });
});
