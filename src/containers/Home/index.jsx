import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../../API/api'
import ListCard, { DummyListCard } from '../../components/ListCard'
import MyPagination from '../../components/MyPagination'
import './style.scss'

export default function Home() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageDetails, setPageDetails] = useState({
        total: 1,
        current: 1
    })

    useEffect(() => {
        onfetch(pageDetails.current)
        // eslint-disable-next-line
    }, [])

    const onfetch = async (currentPage) => {
        setLoading(true)
        try {
            const { data: { page, total_pages, data } } = await api.getData(currentPage)
            // data.data gives actual list of users
            setUsers(data)
            setPageDetails(pageDetails => ({ ...pageDetails, current: page, total: total_pages }))
            setLoading(false)
        } catch (error) {
            // alert("Something went wrong, please try again.")
        }
    }
    return (
        <>
            <div className="home-wrapper">
                {
                    loading ?
                        Array.from(new Array(5)).map(each => {
                            return <DummyListCard style={{ animation: "none" }} />
                        })
                        : users.map(({ id, ...user }, i) => {
                            return <ListCard key={id} {...user} style={{ animationDelay: `${i * 0.25}s` }} />
                        })
                }

            </div>
            {/* <MyPagination total={15} current={1} onFetchData={onfetch} /> */}
            <MyPagination total={pageDetails.total} current={pageDetails.current} onFetchData={onfetch} />
        </>
    )
}
