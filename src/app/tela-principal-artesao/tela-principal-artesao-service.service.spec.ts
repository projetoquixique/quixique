import { TestBed, inject } from '@angular/core/testing';

import { TelaPrincipalArtesaoServiceService } from './tela-principal-artesao-service.service';

describe('TelaPrincipalArtesaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelaPrincipalArtesaoServiceService]
    });
  });

  it('should be created', inject([TelaPrincipalArtesaoServiceService], (service: TelaPrincipalArtesaoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
