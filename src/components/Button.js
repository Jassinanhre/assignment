import React from 'react';
import "./Button.css";


const STYLES =['btn--primary', 'btn--outline']
const SIZES = ['bt--medium' ,'btn--large', 'btn--mobile','btn--wide' ]
const COLOR =['primary', 'blue' ,'green', 'red']
  export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
     buttonSize, 
     buttonColor
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? 
        buttonStyle : STYLES[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? 
        buttonSize : SIZES[0]

         const checkButtonColor = COLOR.includes(buttonColor) ? 
         buttonColor : STYLES[0]

        return(
            <button className= {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick=
            {onclick} type={type}> {children}</button>
        )
    };
  