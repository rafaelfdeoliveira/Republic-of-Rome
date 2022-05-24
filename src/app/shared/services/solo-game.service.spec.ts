import { TestBed } from '@angular/core/testing';

import { SoloGameService } from './solo-game.service';

describe('SoloGameService', () => {
  let service: SoloGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoloGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
