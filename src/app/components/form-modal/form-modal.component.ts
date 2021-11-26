import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})


export class FormModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormModalComponent>) { }

  ngOnInit(): void {
  }

  // formulario
  cadastroForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
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
    let categoria: string = this.cadastroForm.controls['categoria'].value;
    let titulo: string = this.cadastroForm.controls['titulo'].value;
    let descricao: string = this.cadastroForm.controls['descricao'].value;

    let informacoesCard = {
      categoria,
      titulo,
      descricao
    }

    this.dialogRef.close(informacoesCard)
  }

  selects = {

  }

  arraySelects : any = [
    {value: 'mercado', content: 'Mercado'},
    {value: 'farmacia', content: 'Farmácia'},
    {value: 'outros', content: 'Outros'}
  ];
  
}



