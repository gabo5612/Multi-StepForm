/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const NextStep = (props) => {
    

    return (
        <NavLink to={props.screen}>
            <button className="text-White px-5 py-3 rounded-lg border bg-MarineBlue ">Next Step</button>
        </NavLink>
    );
}

export default NextStep;
