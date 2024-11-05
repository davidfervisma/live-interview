// src/app/todo-list/todo-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo item when the form is valid', () => {
    //Arrange
    fixture.detectChanges();
    component.todoForm.controls['newTodo'].setValue('Test Todo');

    //Act
    component.addTodo();

    //Assert
    expect(component.todos.length).toBe(2);
    expect(component.todos[0]).toBe('Test Todo');
  });

  it('should render right title', () => {

    fixture.detectChanges();

    expect(component.title).toBe('Some Title');
  });
});
