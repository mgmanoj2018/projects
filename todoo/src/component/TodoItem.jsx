const TodoItem = () => {
    const TodoItem ="Buy Milk";
    const dueDate = "10/02/2024"
  return (
    <>
      <div class="container ">
        <div class="row kg-row">
          <div class="col-6">{TodoItem}</div>
          <div class="col-4">{dueDate}</div>
          <div class="col-2">
            <button type="button" class="todo-btn btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem
