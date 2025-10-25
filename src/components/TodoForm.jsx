import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  const onChangeText = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 ">
      <input
        type="text"
        placeholder="Add a new task..."
        className="border flex-1 p-2 rounded"
        value={title}
        onChange={onChangeText}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
