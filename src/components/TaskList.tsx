import { Task } from "../types"
import TaskComponent from "./TaskComponent";
import './TaskList.css';

type Properties = {
    tasks: Task[],
    includeCompleted: boolean,
    includeExpired: boolean,
    includeInProgress: boolean
}

export default function TaskList(props: Properties) {
    const hasExpired = (task: Task) => {
        const now = Date.now();
        return task.deadline !== undefined && task.deadline.getTime() < now;
    }

    let tasks = [...props.tasks].filter(task => !hasExpired(task) && props.includeInProgress).sort((a, b) => {
        const aTime = a.deadline === undefined ? Number.MAX_SAFE_INTEGER : a.deadline.getTime();
        const bTime = b.deadline === undefined ? Number.MAX_SAFE_INTEGER : b.deadline.getTime();

        return aTime - bTime;
    });
    const otherTasks = [...props.tasks].filter(task =>
        (props.includeExpired && hasExpired(task) && !task.completed)
        || (props.includeCompleted && task.completed)
    );
    tasks = tasks.concat(otherTasks);

    return (
        <div className="task-list">
            {
                tasks.map((task, index) =>
                    <TaskComponent
                        key={index}
                        name={task.name}
                        description={task.description}
                        category={task.category}
                        deadline={task.deadline}
                        completed={task.completed}
                        complete={() => { }}
                    />
                )
            }
        </div>
    )
}