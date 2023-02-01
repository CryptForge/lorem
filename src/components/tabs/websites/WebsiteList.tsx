import { Website } from "../../../types"
import WebsiteComponent from "../../WebsiteComponent"

type Properties = {
    websites: Website[]
}

export default function WebsiteList(props: Properties) {
    return (
        <div className="websites-list">
            {
                props.websites.map((website, index) => <WebsiteComponent key={index} website={website} showDescription />)
            }
        </div>
    )
}