import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import AddTaskModal from '../components/AddTaskModal';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    const addTask = async (task) => {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        fetchTasks();
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <h1>Todo App</h1>
            <button onClick={() => setIsModalOpen(true)}>Add New Task</button>
            <div className={styles.grid}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} onSave={addTask} />}
        </div>
    );
}