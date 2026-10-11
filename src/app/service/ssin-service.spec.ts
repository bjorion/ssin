import { TestBed } from '@angular/core/testing';
import { SsinService } from './ssin-service';

describe('SsinService', () => {
  let service: SsinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('stripSsin', () => {
    expect(SsinService.stripSsin(null)).equals("");
    expect(SsinService.stripSsin("01")).equals("01");
    expect(SsinService.stripSsin("01.23.45/678-90")).equals('01234567890');
    expect(SsinService.stripSsin("012345678900000")).equals('01234567890');
  })

  it('formatSsin', () => {
    expect(SsinService.formatSsin(null)).equal("..-.");
    expect(SsinService.formatSsin('01234567890')).equals("01.23.45-678.90");
  })
});
