const inputElement = "[data-cy='todo-input']";
const remainingTodosCountElement = "[data-cy='remaining-todos']";
const deleteButtonElement = "[data-cy='delete-button']";
const completeAllTasksButton = "[data-cy='complete-all']";
const clearCompletedTaskButton = "[data-cy='clear-completed']";

const selectTodoElement = (todo) => `[data-cy='todo-item-${todo.toLowerCase()}']`;

const addTodo = (todo) => {
  cy.get(inputElement).should('be.visible').type(todo);
  cy.get('form').submit();
  cy.get('#check-icon').should('not.exist');
  cy.get('#todo-item').should('not.have.class', 'line-through');
}

const toggleTodoStatus = (todo, taskCount) => {
  cy.get(selectTodoElement(todo)).within(() => {
    cy.get('input').check();
  });
  cy.get('#check-icon').should('exist');
  cy.get('#todo-item').should('have.class', 'line-through');
  cy.get(remainingTodosCountElement).should('have.text', `${taskCount} left`);
}

const deleteTodo = (todo) => {
  cy.get(selectTodoElement(todo)).within(() => {
    cy.get(deleteButtonElement).click();
  });
  cy.get(selectTodoElement(todo)).should('not.exist');
}


describe('todos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check the navbar is correctly visible', () => {
    cy.get('#navbar').should('have.text', 'Simple Todo Application').should('be.visible');
  })

  it('check user can add, select and delete todos', () => {
    //adding todos
    addTodo('Do prayer');
    addTodo('Recite Quran');

    //is todo exists
    cy.findByText(/Do prayer/i).should('exist');
    cy.findByText(/Recite Quran/i).should('exist');
    cy.get(remainingTodosCountElement).should('have.text', '2 tasks left');

    //toggle todo status
    toggleTodoStatus('Do-prayer', '1 task');
    toggleTodoStatus('Recite-Quran', 'No task');

    //delete todo
    deleteTodo('Do-prayer');
    deleteTodo('Recite-Quran');
    cy.get('#empty-task').contains('No task available!');
  });

  it('check complete all tasks button works', () => {
    addTodo('Do prayer');
    addTodo('Recite Quran');
    addTodo('Read a islamic book');
    cy.get(completeAllTasksButton).click();
    cy.get('#check-icon').should('exist');
    cy.get('#todo-item').should('have.class', 'line-through');
    cy.get(remainingTodosCountElement).should('have.text', 'No task left');
  });

  it('check clear completed button works', () => {
    addTodo('Do prayer');
    addTodo('Recite Quran');
    addTodo('Read a islamic book');
    toggleTodoStatus('Do-prayer', '2 tasks');
    toggleTodoStatus('Recite-Quran', '1 task');
    toggleTodoStatus('Read-a-islamic-book', 'No task');
    cy.get(clearCompletedTaskButton).click();
    cy.get('#empty-task').contains('No task available!');
  });
}) 