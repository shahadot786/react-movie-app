import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-20">
      <div className="w-[400px] max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
