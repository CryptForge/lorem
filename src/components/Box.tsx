import React from "react"
import { Link } from "react-router-dom"
import "./Box.css"

type Properties = {
    title: string,
    link?: string,
    className?: string,
    children: React.ReactNode
}

export default function Box(props: Properties) {
    const seeAll = props.link === undefined ? undefined : <Link className="link" to={props.link}>See All</Link>
    return (
        <div className={"box " + (props.className === undefined ? "" : props.className) + (props.link === undefined ? " no-link" : "")}>
            <p className="title">{props.title}</p>
            {seeAll}
            <div className="box-children">
                {props.children}
            </div>
        </div>
    )
}