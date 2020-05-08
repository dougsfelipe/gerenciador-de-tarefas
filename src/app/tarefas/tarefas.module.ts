import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar'; 
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';


@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefasComponent, TarefaConcluidaDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
  TarefaService
  ]
})
export class TarefasModule { }
