import React from 'react'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './style.scss'
import { useEffect } from 'react';

const debounce = (fn, delay) => {
    let timeoutID
    return (...args) => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export default function MyPagination({ total, current, onFetchData }) {
    const mappedpagination = (total) => Array.from(new Array(total)).map((each, i) => {
        return i + 1
    })
    const [state, setstate] = useState(mappedpagination(total))
    const [selectedIndex, setselectedIndex] = useState(current)

    useEffect(() => {
        setstate(mappedpagination(total))
        setselectedIndex(current)
        // eslint-disable-next-line
    }, [current, total])

    useEffect(() => {
        onFetchData(selectedIndex)
        // eslint-disable-next-line
    }, [selectedIndex])
    let mid = []
    if (selectedIndex <= 5) {
        mid = state.slice(0, 6)
    }
    else if (selectedIndex > state.length - 5) {
        mid = state.slice(selectedIndex - 5)
    }
    else if (selectedIndex > 5 || selectedIndex < state.length - 5) {
        mid = state.slice(selectedIndex - 3, selectedIndex + 3)
    }

    const moveIndexLeft = () => {
        if (selectedIndex > 1) {
            setselectedIndex(selectedIndex => selectedIndex - 1)
        }
    }

    const moveIndexRight = () => {
        if (selectedIndex < state.length) {
            setselectedIndex(selectedIndex => selectedIndex + 1)
        }
    }
    return (
        <div className="pagination-wrapper">
            <div className="pagination-body">
                <div className="left-arrow" onClick={debounce(moveIndexLeft, 200)} style={
                    {
                        background: selectedIndex < 2
                            ? "#c8ced6"
                            : "transparent"
                    }
                }>
                    <AiOutlineLeft />
                </div>
                <div className="pagination-inner">
                    {
                        mid.map((item, index) => {
                            return <div className="mid" style={{ margin: "0 5px", border: item === selectedIndex ? "1px solid #1599fd" : "" }} key={index} onClick={() => {
                                setselectedIndex(item)
                            }}>{item}</div>
                        })
                    }
                </div>
                <div className="right-arrow" onClick={debounce(moveIndexRight, 200)} style={
                    {
                        background: selectedIndex >= state.length
                            ? "#c8ced6"
                            : "transparent"
                    }
                }>
                    <AiOutlineRight />
                </div>
            </div>
        </div>
    )
}
