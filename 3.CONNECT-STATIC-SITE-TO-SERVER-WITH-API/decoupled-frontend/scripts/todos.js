const todoFormElement = document.querySelector('#todo-management form');
const todosListElement = document.getElementById('todos-list');

let editedTodoElement;

async function loadTodos() {
  let response;
  try {
    response = await fetch('http://localhost:3000/todos');    // 이 페이지는, 정적 페이지로, API SERVER에 있는 JSON 데이터를 가져오려면,
  } catch (error) {                                          // "http://localhost:3000/todos" 처럼 도메인을 확실하게 적어야한다. [다른 페이지니까]
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
  const todos = responseData.todos;

  for (const todo of todos) {
    createTodoListItem(todo.text, todo.id);
  }
}

function createTodoListItem(todoText, todoId) {
  const newTodoItemElement = document.createElement('li');
  newTodoItemElement.dataset.todoid = todoId; // data-todoid

  const todoTextElement = document.createElement('p');
  todoTextElement.textContent = todoText;

  const editTodoButtonElement = document.createElement('button');
  editTodoButtonElement.textContent = 'Edit';
  editTodoButtonElement.addEventListener('click', startTodoEditing);

  const deleteTodoButtonElement = document.createElement('button');
  deleteTodoButtonElement.textContent = 'Delete';
  deleteTodoButtonElement.addEventListener('click', deleteTodo);

  const todoActionsWrapperElement = document.createElement('div');
  todoActionsWrapperElement.appendChild(editTodoButtonElement);
  todoActionsWrapperElement.appendChild(deleteTodoButtonElement);

  newTodoItemElement.appendChild(todoTextElement);
  newTodoItemElement.appendChild(todoActionsWrapperElement);

  todosListElement.appendChild(newTodoItemElement);
}

async function createTodo(todoText) {        // todo 만들기 (API는 SAVE)
  let response;

  try {
    response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,           // API에서 TODO의 INPUT을 위한 "키"는 "text" 였기 때문에!
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
  const todoId = responseData.createdTodo.id;     // API에서 돌려주는 값은 "message"와 "createdTodo" 였다.

  createTodoListItem(todoText, todoId);
}

async function updateTodo(newTodoText) {
  const todoId = editedTodoElement.dataset.todoid; // data-todoid
  let response;

  try {
    response = await fetch('http://localhost:3000/todos/' + todoId, {
      method: 'PATCH',
      body: JSON.stringify({
        newtext: newTodoText,                   // API에서 업데이트를 위한 "키"는 "newtext"였다.
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  editedTodoElement.firstElementChild.textContent = newTodoText;

  todoFormElement.querySelector('input').value = '';
  editedTodoElement = null;
}

async function deleteTodo(event) {
  const clickedButtonElement = event.target;
  const todoElement = clickedButtonElement.parentElement.parentElement;
  const todoId = todoElement.dataset.todoid;

  let response;

  try {
    response = await fetch('http://localhost:3000/todos/' + todoId, {
      method: 'DELETE',
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  todoElement.remove();
}

function saveTodo(event) {
  event.preventDefault();                       // 기본 FORM 기능을 막고, FORM 안에있는 DATA를 가져온 후에, 그 안에있는 "text" 키를 가진 값을 뽑음

  const formInput = new FormData(event.target);
  const enteredTodoText = formInput.get('text');

  if (!editedTodoElement) {
    createTodo(enteredTodoText);
  } else {
    updateTodo(enteredTodoText);
  }
}

function startTodoEditing(event) {
  const clickedButtonElement = event.target;
  editedTodoElement = clickedButtonElement.parentElement.parentElement; // the <li>
  const currentText = editedTodoElement.firstElementChild.textContent;

  todoFormElement.querySelector('input').value = currentText;
}

todoFormElement.addEventListener('submit', saveTodo);

loadTodos();