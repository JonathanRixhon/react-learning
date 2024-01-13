import { useState } from "react";

function Form(props) {
  const [currentTask, setCurrentTask] = useState('');

  function updateCurrentTask(e) {
    setCurrentTask(() => e.target.value) ;
  }

  function submit(e) {
    e.preventDefault();
    props.submit(currentTask)
    setCurrentTask(() => '') ;
  }

  return (
    <form onSubmit={submit}>
      <label class="mb-1 block hidden" htmlFor="task">
        Task
      </label>
      <input
        onInput={updateCurrentTask}
        id="task"
        value={currentTask}
        class="block w-full rounded border-2 border-solid border-slate-100 p-2 shadow-none placeholder:text-slate-500
           focus:border-indigo-200"
        placeholder="What you have to do ?"
        name="task"
      />
    </form>
  );
}

export default Form;
