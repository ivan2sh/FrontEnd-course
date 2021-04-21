import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TodosComponent] // +
})
export class TodosModule { }
