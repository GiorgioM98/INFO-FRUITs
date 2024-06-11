import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FruitDetailsComponent } from './fruit-details.component';
import { FruitsService } from '../../services/fruits.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('FruitDetailsComponent', () => {
  let component: FruitDetailsComponent;
  let fixture: ComponentFixture<FruitDetailsComponent>;
  let mockFruitsService: jasmine.SpyObj<FruitsService>;

  const fruitData = {
    name: 'Apple',
    family: 'Rosaceae',
    order: 'Rosales',
    genus: 'Malus',
    nutritions: {
      calories: 52,
      fat: 0.2,
      sugar: 10.4,
      carbohydrates: 14,
      protein: 0.3
    }
  };

  beforeEach(async () => {
    mockFruitsService = jasmine.createSpyObj('FruitsService', ['getFruitDetails']);
    mockFruitsService.getFruitDetails.and.returnValue(of(fruitData));

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [FruitDetailsComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: fruitData },
        { provide: FruitsService, useValue: mockFruitsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display fruit details', () => {
    fixture.detectChanges(); // Ensure the DOM is updated

    const compiled = fixture.nativeElement;

    const nameElement = compiled.querySelector('h1');
    const familyElement = compiled.querySelectorAll('td')[1];
    const orderElement = compiled.querySelectorAll('td')[3];
    const genusElement = compiled.querySelectorAll('td')[5];

    expect(nameElement).not.toBeNull();
    expect(nameElement.textContent).toContain('Apple');

    expect(familyElement).not.toBeNull();
    expect(familyElement.textContent).toContain('Rosaceae');

    expect(orderElement).not.toBeNull();
    expect(orderElement.textContent).toContain('Rosales');

    expect(genusElement).not.toBeNull();
    expect(genusElement.textContent).toContain('Malus');
  });

  it('should display nutrition details', () => {
    fixture.detectChanges(); // Ensure the DOM is updated

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('.containerTable table tr');

    expect(rows.length).toBeGreaterThan(1);

    expect(rows[1].querySelector('td:nth-child(2)').textContent).toContain('52'); // Calories
    expect(rows[2].querySelector('td:nth-child(2)').textContent).toContain('0.2'); // Fat
    expect(rows[3].querySelector('td:nth-child(2)').textContent).toContain('10.4'); // Sugar
    expect(rows[4].querySelector('td:nth-child(2)').textContent).toContain('14'); // Carbohydrates
    expect(rows[5].querySelector('td:nth-child(2)').textContent).toContain('0.3'); // Protein
  });

  it('should call close method when close button is clicked', () => {
    spyOn(component.dialogRef, 'close');
    const button = fixture.debugElement.query(By.css('.btnClose')).nativeElement;
    button.click();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
