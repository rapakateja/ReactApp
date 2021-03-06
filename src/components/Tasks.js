import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {   
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task }
                onDelete={onDelete}
                onToggle={onToggle}/>
                //<h3>Testing</h3>
            ))} 
        </>
    )
}

export default Tasks
