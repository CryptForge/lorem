import { Website } from "../../../types";
import Box from "../../Box";
import "../Tab.css";
import "./WebsitesTab.css";
import WebsiteList from "./WebsiteList";

type Properties = {
    websites: Website[]
}

export default function Websites(props: Properties) {
    return (
        <>
            <p className="title">Favorite Websites</p>
            <div className="content-grid">
                <Box className="main-tasks" title="Favorite websites">
                    <WebsiteList websites={props.websites} />
                </Box>
                <Box className="most-clicks" title="Most clicks">

                </Box>
                <Box className="random-quote" title="Quote of the day">
                    <p className="quote">
                        "If the thing is not be do good, then do the fix by start on and off" - Sun Tzu
                    </p>
                </Box>
            </div>
        </>
    )
}