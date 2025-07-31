export type Task = {
    id: string;
    name: string;
    description: string;
    completed: boolean;
    // created_at: string; // TODO: Uncomment after adding created_at column to database
}

export type CreateTaskInput = {
    name: string;
    description: string;
}