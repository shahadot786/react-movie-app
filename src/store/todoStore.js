import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),

  addTodo: (title) =>
    set((state) => {
      const newTodos = [
        ...state.todos,
        { id: Date.now(), title, completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  deleteTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((t) => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  editTodo: (id, title) =>
    set((state) => {
      const newTodos = state.todos.map((t) =>
        t.id === id ? { ...t, title } : t
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
}));
