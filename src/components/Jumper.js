import React from 'react'
import Login from './Login'
import News from './News'

export default function Jumper(props) {
    return (
        <>
            {
                localStorage.getItem("token") ?
                    <News /> : <Login />}
        </>
    )
}
