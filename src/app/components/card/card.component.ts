import { FormModalComponent } from './../form-modal/form-modal.component';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  cards: number[] = [];

  // array de informacoes de cards
  arr : any[] = []

  adicionarCard(): void {
    this.cards.push(this.cards.length);
  }

  openForm() {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width : '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.arr.push(result);
      }
    });
  }

  deletarCompra(item:any){
    const index = this.arr.indexOf(item);
    this.arr.splice(index, 1);
  }

}