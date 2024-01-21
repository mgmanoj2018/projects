import styles from './AddItem.module.css'
const AddItem = () => {
  return (
    <>
      <div className="container ">
        <div className={`row ${styles.kgAddRow}`}>
          <div className="col-6">
            <input type="text" placeholder="Type Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="todo-btn btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem