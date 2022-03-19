import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compostos',
  templateUrl: './compostos.component.html',
  styleUrls: ['./compostos.component.css']
})
export class CompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
  this.vp = 100;
  this.j = 1;
  this.n = 2;    
 }

  ngOnInit() {}

  CompostosResultado(){
  
  let exp = Math.pow(1 + this.j/100,this.n);
  let mf = this.vp * exp;
  let jur = mf - this.vp;
  jur = Number(jur.toFixed(2));
  let composto: Number = this.vp + jur;
  let total = composto.toFixed(2);
  return total;
  }

  CompostosTable() {
    let lista: number[] = [];
    let exp = Math.pow(1 + this.j/100,this.n);
    let mf = this.vp * exp;
    var jur = mf - this.vp;
    let total = jur;
    var z = document.getElementById('tabela');
    if (this.n === 0) {
      z.style.display = 'none';
      }
    else 
      z.style.display = 'block';
      for (let i = 0; i < this.n; i++) {
        total = + (this.vp * ((1 + this.j / 100) ** (i+1)) - this.vp);
        lista.push(Number(total.toFixed(2)));
        total = + total;
      }
      return lista;
    }
  }