import { TestBed } from '@angular/core/testing';

import { MovimentoService } from '../../core/movimento/services/movimento.service';

describe('MovimentoService', () => {
  let service: MovimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
