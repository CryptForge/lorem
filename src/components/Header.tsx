import { useEffect, useState } from 'react';
import image from '../assets/header.jpeg';
import "./Header.css"

export default function Header() {
    const [date, setDate] = useState<Date>(new Date());
    const style = {
        backgroundImage: "url(" + image + ")"
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newDate = new Date();
            if (newDate.getMinutes() != date.getMinutes()) {
                setDate(newDate);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return (
        <header style={style}>
            <p className='time'>{hours + ":" + minutes}</p>
            <p className="date">{date.toLocaleDateString()}</p>
        </header>
    )
}