import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { Fruits } from '../../model/fruits.model';
import { FruitDetailsComponent } from '../fruit-details/fruit-details.component';
import { MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  fruits!: Fruits[]
  searchQuery: string = '';
  filteredFruits: Fruits[] = [];


  constructor(private fruitsService: FruitsService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.onGetAllFruits();
  }


  // // function for all fruits
  onGetAllFruits() {
    this.fruitsService.getAllFruits().subscribe(data => {
      this.fruits = data;
      // console.log("frutti:", this.fruits);
      // filtered fruits is the same of fruits
      this.filteredFruits = this.fruits;
      // console.log(`frutti da get tutti filtrati:`, this.filteredFruits);
      // function filterfruits
      this.filterFruits();
    })
  }

  // function for filter fruits
  filterFruits(): void {
    const query = this.searchQuery.trim().toLowerCase();
    this.filteredFruits = this.fruits.filter(fruit => fruit.name.toLowerCase().includes(query));
    // console.log(`frutti filtrati:`, this.filteredFruits);
  }

  // dettagli utente
  dialogDetails(fruit: Fruits): void {
    // apertura componente dettagli utente e condivisione dei dati utente nel dialog
    const dialogRef = this.dialog.open(FruitDetailsComponent, {
      width: '60%',
      data: fruit
    });
    // console.log("dialog aperto")

    dialogRef.afterClosed().subscribe(result => {
      // console.log('Dialog chiuso');
    });
  }
}
