import { TestBed, inject } from '@angular/core/testing';

import { LojaArtesaoViewServiceService } from './loja-artesao-view-service.service';

describe('LojaArtesaoViewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LojaArtesaoViewServiceService]
    });
  });

  it('should be created', inject([LojaArtesaoViewServiceService], (service: LojaArtesaoViewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
