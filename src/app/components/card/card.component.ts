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

  // FILTRAGEM DE PALAVRAS
  reEscape = (s:any) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  badWords = ["ANUS", "BABA-OVO", "BABAOVO", "BABACA", "BACURA", "BAGOS", "BAITOLA", "BEBUM", "BESTA", "BICHA", "BISCA", "BIXA", "BOAZUDA", "BUCETA", "BOCO", "BOIOLA", "BOLAGATO", "BOQUETE", "BOLCAT", "BOSSETA", "BOSTA", "BOSTANA", "BRECHA", "BREXA", "BRIOCO", "BRONHA", "BUCA", "BUNDA", "BUNDUDA", "BURRA", "BURRO", "CACHORRA", "CACHORRO", "CADELA", "CAGA", "CAGADO", "CAGAO", "CAGONA", "CANALHA", "CARALHO", "CASSETA", "CASSETE", "CHECHECA", "CHERECA", "CHIBUMBA", "CHIBUMBO", "CHIFRUDA", "CHIFRUDO", "CHOTA", "CHOCHOTA", "CHUPADA", "CHUPADO", "VIADO", "BIXA", "PAU"];
  badWordsRE = new RegExp(this.badWords.map(this.reEscape).join('|'));
  
  ngOnInit(): void {
    this.http.get<any>(`https://crud-comentary.herokuapp.com/informacoes/`, {headers: this.headers}).subscribe(res => {
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
      this.http.get<any>(`https://crud-comentary.herokuapp.com/informacoes/`, {headers: this.headers}).subscribe(res => {
        this.arr = res;
      })
    });
  }

  // TA DELETANDO MAS NAO DELETA DA TELA
  deletarCompra(item:any){
    this.http.delete<any>(`https://crud-comentary.herokuapp.com/informacoes/${item.id}`, {headers: this.headers}).subscribe(res => {
        this.arr = res
        window.location.reload();
    })
  }


  
}