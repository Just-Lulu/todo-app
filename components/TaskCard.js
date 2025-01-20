import React from 'react';
import styles from '../styles/Home.module.css';

const TaskCard = ({ task }) => {
    return (
        <div className={styles.taskCard}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;