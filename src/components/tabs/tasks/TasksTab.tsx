import { Task } from "../../../types";
import Box from "../../Box";
import TaskList from "../../TaskList";
import "../Tab.css";
import "./TasksTab.css"

type Properties = {
    tasks: Task[]
}

export default function TasksTab(props: Properties) {
    return (
        <>
            <p className="title">Tasks</p>
            <div className="content-grid">
                <Box className="main-tasks" title="My Tasks">
                    <TaskList tasks={props.tasks} includeCompleted={false} includeExpired={false} includeInProgress />
                </Box>
                <Box className="progress" title="Progress">

                </Box>
                <Box title="Finished tasks">
                    <TaskList tasks={props.tasks} includeCompleted includeExpired={false} includeInProgress={false}/>
                </Box>
            </div>
        </>
    )
}