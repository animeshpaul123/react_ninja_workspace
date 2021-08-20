import React from 'react'
import { memo } from 'react'
import Shimmer from './Shimmer'
import './style.scss'

const ListCard = (props) => {
    const { avatar, first_name, email, style } = props

    console.log("rendering")
    return (
        <div className="list-card-wrapper" style={style}>
            <div className="list-card-body">
                <div className="list-card-avater">
                    <img src={avatar} alt="people" />
                </div>
                <div className="list-card-description-wrapper">
                    <div className="list-card-description">
                        <p>{first_name}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DummyListCard = ({ style }) => {

    console.log("rendering")
    return (
        <div className="list-card-wrapper" style={style}>
            <div className="list-card-body">
                <div className="list-card-avater">
                    <Shimmer style={{ height: "280px", backgroundSize: "789px 504px" }} />
                </div>
                <div className="list-card-description-wrapper" style={{ display: "block" }}>
                    <div className="list-card-description">
                        <Shimmer style={{ width: "50%" }} />
                        <Shimmer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ListCard)
