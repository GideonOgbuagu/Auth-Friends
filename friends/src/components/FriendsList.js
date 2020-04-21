import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend'

const FriendsList = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = () => {
            axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log("Something went wrong", err)
            })
        }

        getData()
       
    }, [])

    return (
        <div className="friendslist">
            <h1>FriendsList</h1>
            {data.map(friend => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </div>
    )
}

export default FriendsList;
