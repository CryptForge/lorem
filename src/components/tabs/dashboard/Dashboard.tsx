import Box from "../../Box"
import "./Dashboard.css"
import "../Tab.css"
import { Task, Website } from "../../../types"
import WebsiteComponent from "../../WebsiteComponent"
import TaskList from "../../TaskList"
import { useEffect, useRef } from "react"

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
                    <TaskList tasks={props.tasks} includeCompleted={false} includeExpired includeInProgress />
                </Box>
                <Box title="Favorite websites" link="/websites">
                    <div className="websites">
                        {
                            props.websites.map((website, index) => <WebsiteComponent key={index} website={website} showDescription={false} />)
                        }
                    </div>
                </Box>
                <Box title="Something else here">
                    
                </Box>
            </div>
        </>
    )
}