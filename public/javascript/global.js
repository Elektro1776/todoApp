$('document').ready(() => {
  $('form').submit((e) => {
    e.preventDefault();
    let $inputs = $('#todoForm :input:not(:button)');
    let todo = {
      todoName: $($inputs[0]).val(),
    }
    $($inputs[0]).val(' ')
    post('/api/createToDo', todo).then((response) => {
      console.log(' WHAT IS THE RESPONSE', response);
      if(response.status === 200) {
        return response.json();

      } else {
        // this would be a good place to show a modal to let the user know something
        // went wrong
      }
    }).then((response) => {
      updateIncompleteTodos(response);
    })
  })
  function updateIncompleteTodos(todos) {
    let lastChild = $('#incompleteTodos .panel-body ');
    let html = `<h3 draggable="true">${todos.todoName}</h3>`;
    lastChild.append(html);
  }
  function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
});
