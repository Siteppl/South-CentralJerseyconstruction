
import React from "react";
import { scrollTo } from "../utils";

const ScrollToButton = ({ toId, toRef, duration, children }) => {
 const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

 return <li className='nav-item' onClick={handleClick}> {children} </li>;
};

export default ScrollToButton;