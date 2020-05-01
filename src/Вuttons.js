import React from "react";


const Button = (props) => {
    return <button type="submit" className="operation__add" onClick={props.getDollar}> Курс доллара</button>
}

export default Button;
