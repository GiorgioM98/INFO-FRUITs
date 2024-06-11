import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FruitsService } from './fruits.service';

describe('FruitsService', () => {
  let service: FruitsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FruitsService]
    });
    service = TestBed.inject(FruitsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica che non ci siano richieste HTTP non soddisfatte pendenti
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllFruits and return data', () => {
    const mockFruits = [{ name: 'Apple' }, { name: 'Banana' }];

    service.getAllFruits().subscribe((fruits) => {
      expect(fruits).toEqual(mockFruits);
    });

    const req = httpMock.expectOne('/api/fruit/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockFruits);
  });

  it('should call getFruitDetails and return data', () => {
    const mockFruitDetails = { name: 'Apple', family: 'Rosaceae' };

    service.getFruitDetails('Apple').subscribe((fruitDetails) => {
      expect(fruitDetails).toEqual(mockFruitDetails);
    });

    const req = httpMock.expectOne('/api/fruit/Apple');
    expect(req.request.method).toBe('GET');
    req.flush(mockFruitDetails);
  });
});
