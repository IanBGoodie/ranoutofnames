import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
   @Input({ required: true}) todoData!: NTodo.TodoData;
   
   @Input() first!: boolean;

   @Input() last!: boolean;

   @Input() odd!: boolean;

   @Input() even!: boolean;

   @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();


   get priority(): string {
    switch (this.todoData.priority) {
       case NTodo.Priority.LOW:
        
          return NTodo.PriorityText.LOW;
      
          case NTodo.Priority.MEDIUM:
        
          return NTodo.PriorityText.MEDIUM;
        
    
      default:
        return NTodo.PriorityText.HIGH;
    }
    
   
   }

   get progress() {
    return this.todoData.progress * 100;
   }

   get range() {
    if (this.progress >= 0 && this.progress <= NTodo.Range.LOW){
      return NTodo.RangeText.LOW;
    } else if (this.progress > 0 && this.progress < NTodo.Range.MEDIUM) {
}

return NTodo.RangeText.HIGH;
   }
  }