import React from 'react'
import './style.scss'

export default function Bar({ message }) {
    return (
        <div className="bar-wrapper">
            <div className="bar">
                {message}
            </div>
        </div>
    )
}
