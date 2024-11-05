// src/app/todo-list/todo-list.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  title!: string;
  todos: string[] = [];
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService) {
    this.todoForm = this.fb.group({
      newTodo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }

  addTodo() {
    if (this.todoForm.valid) {
      let todo = this.todoForm.get('todo')?.value;
      this.todos.push(todo);
      this.todoForm.reset();
    }
  }
}
