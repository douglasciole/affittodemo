import React from 'react'
import '../css/components/TextField.css'

export default (props) =>
    <label className="textDIsplay">
        {props.label}
        <input type="input" />
    </label>
