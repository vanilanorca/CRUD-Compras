import { FormModalComponent } from './../form-modal/form-modal.component';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private http: HttpClient
    ) {}

  headers = new HttpHeaders ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/informacoes/`, {headers: this.headers}).subscribe(res => {
      this.arr = res;
    })
  }

  // array de informacoes de cards
  arr : any[] = [];

  openForm() {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width : '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.http.get<any>(`http://localhost:3000/informacoes/`, {headers: this.headers}).subscribe(res => {
        this.arr = res;
      })
    });
  }

  // TA DELETANDO MAS NAO DELETA DA TELA
  deletarCompra(item:any){
    this.http.delete<any>(`http://localhost:3000/informacoes/${item.id}`, {headers: this.headers}).subscribe(res => {
        this.arr = res
        window.location.reload();
    })
  }
}