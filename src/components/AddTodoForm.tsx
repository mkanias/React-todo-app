import { CreateTaskInput } from "../types/task";
import supabase from "../supabase-client";

function AddTodoForm({ 
  newTask, 
  setNewTask, 
  onTaskAdded 
}: { 
  newTask: CreateTaskInput, 
  setNewTask: (task: CreateTaskInput) => void,
  onTaskAdded: () => void
}) {

  const handleAddTask = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Don't submit if fields are empty
    if (!newTask.name.trim()) {
      alert('Please enter a task name');
      return;
    }

    const { data, error } = await supabase.from('tasks').insert({
      name: newTask.name,
      description: newTask.description,
    }).select().single();

    if (error) {
      console.error('Error adding task:', error.message);
      alert('Error adding task. Please try again.');
    } else {
      console.log('Task added:', data);
      setNewTask({ name: "", description: "" });
      // Notify parent component to refresh the task list
      onTaskAdded();
    }
  }

  return (
    <form>
        <h2 className="font-medium text-gray-700 text-lg mb-2">Add a new task</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            className="flex-1 h-[45px] border border-gray-300 rounded-md px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Enter a task..." 
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <input type="text" 
          className="flex-1 h-[45px] border border-gray-300 rounded-md px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          placeholder="Enter a description..." 
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
    </form>
  )
}

export default AddTodoForm