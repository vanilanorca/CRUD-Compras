import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})

export class FormModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    private http: HttpClient
    ) { }

  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })

  ngOnInit(): void {
  }

  

  // formulario
  cadastroForm = new FormGroup({
    // categoria: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])    
  })

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  // botao adicionar card
  adicionarCard(){

    // Salvar informacoes no DB.JSON
    this.http.post<any>(`http://localhost:3000/informacoes/`, {
      // categoria: this.cadastroForm.controls['categoria'].value,
      nome: this.cadastroForm.controls['nome'].value,
      titulo: this.cadastroForm.controls['titulo'].value,
      descricao: this.cadastroForm.controls['descricao'].value,
      // id: uuid();
    }, {headers: this.headers}).subscribe(res => {
      console.log(res)
    })  

    }

    // FORM SELECTS 
    arraySelects : any = [
      {value: 'mercado', content: 'Mercado'},
      {value: 'farmacia', content: 'Farmácia'},
      {value: 'outros', content: 'Outros'}
    ];


  // 
  
  
}



