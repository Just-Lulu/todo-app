import { useState } from 'react';
import Modal from 'react-modal';

const AddTaskModal = ({ isOpen, onRequestClose, onSave }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSave = () => {
        if (taskName && taskDescription) {
            onSave({ name: taskName, description: taskDescription });
            setTaskName('');
            setTaskDescription('');
            onRequestClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Add New Task</h2>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onRequestClose}>Cancel</button>
        </Modal>
    );
};

export default AddTaskModal;