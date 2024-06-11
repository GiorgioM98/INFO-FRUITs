import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home.component';
import { FruitsService } from '../../services/fruits.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fruitsServiceSpy: jasmine.SpyObj<FruitsService>;

  const mockFruits = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' }
  ];

  beforeEach(async () => {
    fruitsServiceSpy = jasmine.createSpyObj('FruitsService', ['getAllFruits']);
    fruitsServiceSpy.getAllFruits.and.returnValue(of(mockFruits));

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule, NoopAnimationsModule, HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: FruitsService, useValue: fruitsServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllFruits method on initialization', () => {
    expect(fruitsServiceSpy.getAllFruits).toHaveBeenCalled();
  });

  it('should populate fruits array on initialization', () => {
    expect(component.fruits.length).toBe(mockFruits.length);
  });

  it('should filter fruits based on searchQuery', () => {
    component.searchQuery = 'App';
    component.filterFruits();

    expect(component.filteredFruits.length).toBe(1);
    expect(component.filteredFruits[0].name).toBe('Apple');
  });

  it('should open dialog when dialogDetails method is called', () => {
    spyOn(component.dialog, 'open').and.callThrough();

    component.dialogDetails({
      name: 'Apple',
      id: '',
      genus: '',
      family: '',
      order: '',
      nutritions: {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        calories: 0,
        sugar: 0
      }
    });

    expect(component.dialog.open).toHaveBeenCalled();
  });
});
