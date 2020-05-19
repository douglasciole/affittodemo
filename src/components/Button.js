import React from 'react'
import '../css/components/Button.css'

export default (props) =>
    <button className={"affittoButton " + props.className}>
        {props.children}
    </button>
