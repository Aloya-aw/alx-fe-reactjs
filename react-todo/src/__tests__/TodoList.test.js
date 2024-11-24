// TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});

test('adds a new todo', () => {
    render(<TodoList />);
  
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
  
    userEvent.type(input, 'New Todo');
    userEvent.click(button);
  
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
    expect(todoItems[2]).toHaveTextContent('New Todo');
  });

test('toggles todo completion', () => {
  render(<TodoList />);

  const firstTodo = screen.getByRole('listitem', { index: 0 });
  userEvent.click(firstTodo);

  expect(firstTodo).toHaveClass('completed'); // Adjust the class name as needed

  userEvent.click(firstTodo);
  expect(firstTodo).not.toHaveClass('completed');
});

test('deletes a todo', () => {
    render(<TodoList />);
  
    const firstTodo = screen.getByRole('listitem', { index: 0 });
    const deleteButton = firstTodo.querySelector('button'); // Adjust the selector as needed
  
    userEvent.click(deleteButton);
  
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(1);
  });