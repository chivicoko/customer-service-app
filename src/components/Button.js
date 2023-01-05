import React from "react";

const Button = (props) => {
    
    return (
        <button
            style={{backgroundColor: props.backgroundColor, margin: "10px"}}
            className="btn btn-lg text-white"
            onClick={props.onButtonClick}
        >
            {props.title}
        </button>
    )
}

export default Button;