import { Task } from "../types/task";

const TodoList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
          >
            <input
              type="checkbox"
              checked={task.completed}
              className="w-5 h-5 rounded border-gray-300"
              readOnly
            />
            <span
              className={`flex-1 ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {task.name}
            </span>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
              Edit
            </button>
            <button className="px-3 py-1 text-sm text-red-600 hover:text-red-800">
              Delete
            </button>
          </li>
        ))}
      </ul>
  );
}

export default TodoList