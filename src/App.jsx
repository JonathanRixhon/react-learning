import { useState } from "react";
import Items from "./Items";
import Form from "./Form";

function App() {
  const [tasks, setTask] = useState([]);

  function submit(currenTask) {
    setTask((prevTasks) => [...prevTasks, currenTask]);
  }

  function deleteItem(item) {
    setTask(tasks.filter((task, index) => index !== item));
  }

  return (
    <div class="mw mx-auto my-12 w-11/12  rounded-xl bg-white p-6 text-slate-950 drop-shadow drop-shadow md:w-8/12">
      <Form submit={submit} />
      <Items tasks={tasks} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
