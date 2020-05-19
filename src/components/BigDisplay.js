import React from 'react'
import '../css/components/BigDisplay.css'

export default (props) =>
    <div className='bigDisplay'>
        <span className='bigDisplayTitle'>{props.title}</span>
        <span className='bigDisplayText'>{props.subTitle}</span>
    </div>
