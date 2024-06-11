import { Component, Inject, OnInit, TemplateRef, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgIfContext } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Fruits } from '../../model/fruits.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrl: './fruit-details.component.css'
})
export class FruitDetailsComponent implements OnInit {

  fruitDetails: Fruits | undefined;

  constructor(
    public dialogRef: MatDialogRef<FruitDetailsComponent>,


    // uso di mat dialog per passare i dati e aprire un dialog
    @Inject(MAT_DIALOG_DATA)
    public data: Fruits,
    private fruitsService: FruitsService
  ) { }

  ngOnInit(): void {
    this.onFruitDetails(this.data);
    this.fruitDetails = this.data;
    // console.log("dettagli frutto seleziona onInit:", this.fruitDetails);
    // console.log("dettagli:", this.fruitDetails.nutritions);
  }


  // function for fruit details
  onFruitDetails(fruit: Fruits): void {
    this.fruitsService.getFruitDetails(fruit.name)?.subscribe((data) => { });
  }

  // close button
  chiudi(): void {
    this.dialogRef.close();
  }

}

