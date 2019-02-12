// wait until DOM has loaded to run
$(document).ready( () => {
  $.getJSON("/api/todos")
    .then(addTodos)
    .catch( (err) => {
      console.log(err);
      alert("An error has occurred. Please try again.");
    })
})

const addTodos = (todos) => {
  const document.querySelector
  todos.forEach( (todo) => {

  })
}