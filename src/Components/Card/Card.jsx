import { AiOutlinePaperClip } from "react-icons/ai";
import { LuCrown } from "react-icons/lu";

import "./Card.css";

/* eslint-disable react/prop-types */
export function Card({ title, description, background }) {
    return (
        <div className="lzdla__card" style={{ backgroundColor: background }}>
            <AiOutlinePaperClip className="clip-icon" size={60} />
            <LuCrown className="crown-icon" size={60} />

            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
