import { TestBed } from '@angular/core/testing';

import { PalettesFacadeService } from './palettes-facade.service';

describe('PalettesFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalettesFacadeService = TestBed.get(PalettesFacadeService);
    expect(service).toBeTruthy();
  });
});
