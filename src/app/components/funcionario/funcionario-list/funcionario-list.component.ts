import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
 
  ELEMENT_DATA: Funcionario[] = [
    {
      id: 1,
      nome: 'Adriana Amaral',
      cpf: '336.255.858.55',
      email: 'adrianafsamaral@gmail.com',
      senha: '123',
      perfis:['0'],
      dataCriacao: 15/11/2021
    }
  ]
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Funcionario>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
