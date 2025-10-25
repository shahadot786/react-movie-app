import { useTodoStore } from "../store/todoStore";
import { useState } from "react";

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodoStore();
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const handleSave = (id) => {
    editTodo(id, editTitle);
    setEditingId(null);
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 rounded p-2 mb-2"
          >
            <div className="flex items-center gap-2 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {editingId === todo.id ? (
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-1 flex-1"
                />
              ) : (
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-green-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.title)}
                  className="text-blue-500"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
