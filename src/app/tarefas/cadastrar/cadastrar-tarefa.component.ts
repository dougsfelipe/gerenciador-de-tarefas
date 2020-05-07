import { Component, OnInit, ViewChild} from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar():void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
