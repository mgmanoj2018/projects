const AddItem = () => {
  return (
    <>
      <div class="container ">
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder="Type Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="todo-btn btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem