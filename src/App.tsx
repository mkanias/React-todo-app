import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"
import { Task, CreateTaskInput } from "./types/task"
import supabase from "./supabase-client"

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<CreateTaskInput>({ name: "", description: "" });

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*');
      // TODO: Add .order('created_at', { ascending: false }) after adding created_at column to database

    if (error) {
      console.error('Error fetching tasks:', error.message);
    } else {
      setTasks(data || []);
    }
  };

  const handleTaskAdded = () => {
    // Refresh the task list after a new task is added
    fetchTasks();
  };

  return (
    <div className="flex justify-center items-center flex-col font-sans bg-gray-100 min-h-screen p-4" >
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Task Manager</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <AddTodoForm 
            newTask={newTask} 
            setNewTask={setNewTask}
            onTaskAdded={handleTaskAdded}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Tasks</h2>
          <TodoList tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default App
