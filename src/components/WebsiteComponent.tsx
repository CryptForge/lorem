import { Website } from "../types"
import "./Website.css"

type Properties = {
    website: Website
}

export default function WebsiteComponent(props: Properties) {
    return (
        <div className="website">
            <img src={(props.website.url + "favicon.ico")} alt="" />
            <a className="website-title" target="_blank" href={props.website.url}>{props.website.name}</a>
        </div>
    )
}
