import "./Task.css";
import redWarning from "../assets/red-warning.svg";
import yellowWarning from "../assets/yellow-warning.svg";
import grayWarning from "../assets/gray-warning.svg";
import greenWarning from "../assets/green-circle.svg";

type Properties = {
    name: string,
    description: string,
    category: string,
    deadline?: Date,
    completed: boolean,
    complete: () => void
}

export default function TaskComponent(props: Properties) {
    let warning = greenWarning;
    let deadlineStatus: string;
    let deadlineDate: string | undefined = props.deadline?.toLocaleDateString()
    let deadlineTime: string | undefined = props.deadline?.toLocaleTimeString();

    if (props.deadline === undefined) {
        deadlineStatus = "No deadline"
    } else if(props.completed) {
        deadlineStatus = "Completed"
    } else {
        const currentDate = new Date();
        const difference = Math.abs(currentDate.getTime() - props.deadline.getTime());
        const differenceDays = Math.round(difference / (1000 * 60 * 60 * 24));
        const isSameDay = props.deadline.getDay() === currentDate.getDay() && differenceDays <= 1;
        
        deadlineStatus = `Deadline in ${differenceDays} day${differenceDays != 1 ? "s" : ""}`;

        if(isSameDay) {
            warning = redWarning;
            deadlineStatus = "Deadline today";
            console.log(differenceDays);
            
        } else if(differenceDays <= 7) {
            warning = yellowWarning;
        } else {
            warning = greenWarning;
        }

        if(currentDate > props.deadline) {
            deadlineStatus = "Deadline expired"
            warning = grayWarning;
        }
    }

    return (
        <div className="task">
            <p className="task-category">{props.category}</p>
            <p className="task-title">{props.name}</p>
            {/* <p className="task-description">{props.description}</p> */}
            <div className="deadline-container">
                <div className="deadline-image-container">
                    <img src={warning} alt="" />
                </div>
                <p className="task-deadline-status">{deadlineStatus}</p>
                <p className="task-deadline-date">{deadlineDate}</p>
                <p className="task-deadline-time">{deadlineTime}</p>
            </div>
        </div>
    )
}