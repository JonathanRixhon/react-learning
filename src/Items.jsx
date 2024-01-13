function Items(props) {

  let items = [];

  items = props.tasks.map((task, index) => buildItem(task, index));

  function deleteItem(e, index) {
    e.preventDefault();
    props.deleteItem(index);
  }

  function buildItem(task, index) {
    return (
      <li class="flex items-center gap-2 border-2 border-solid border-transparent border-t-slate-100 p-2" key={index}>
        <input type="checkbox" name="done[]" id={index} />
        <label htmlFor={index} class="p-2 flex-1">
          {task}
        </label>
        <button onClick={(e) => deleteItem(e, index)} className={['border-2', 'border-solid', 'border-slate-700', 'rounded p-1']} >Delete</button>
      </li>
    );
  }

  return <ul class="mt-6">{items}</ul>;
}

export default Items;
