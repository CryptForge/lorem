import Box from "../../Box"
import "./Dashboard.css"
import "../Tab.css"
import TaskComponent from "../../TaskComponent"
import { Task, Website } from "../../../types"
import WebsiteComponent from "../../WebsiteComponent"
import TaskList from "../../TaskList"

type Properties = {
    tasks: Task[],
    websites: Website[],
    updateTask: (index: number, func: (task: Task) => void) => void
}

export default function Dashboard(props: Properties) {
    return (
        <>
            <p className="title">Dashboard</p>
            <div className="content-grid">
                <Box className="tasks-box" title="My tasks" link="/tasks">
                    <TaskList tasks={props.tasks} includeCompleted={false} includeExpired includeInProgress/>
                </Box>
                <Box title="My favorite websites" link="/websites">
                    <div className="websites">
                        {
                            props.websites.map((website, index) => <WebsiteComponent key={index} website={website} />)
                        }
                    </div>
                </Box>
                <Box title="Something else here" link="/other">

                </Box>
            </div>
        </>
    )
}