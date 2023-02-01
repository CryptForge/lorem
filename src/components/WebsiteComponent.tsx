import { Website } from "../types"
import "./Website.css"

type Properties = {
    website: Website,
    showDescription: boolean
}

export default function WebsiteComponent(props: Properties) {
    const description = props.showDescription ? <p>{props.website.description}</p> : undefined;

    return (
        <div className="website">
            <img src={(props.website.url + "favicon.ico")} alt="" />
            <a className="website-title" target="_blank" href={props.website.url}>{props.website.name}</a>
            {description}
        </div>
    )
}
