import React from 'react'

const LeftMenu = () => {
    return (
        <div className='left--menu'>
            <h1 style={{ fontWeight: "normal", paddingTop: "20px" }}>Admin</h1>
            <ul className='sidebar--list'>
                <li className='sidebar--list--item'>
                    <a href="/">Anonymous Forum</a>
                </li>
                <li className='sidebar--list--item'>
                    <a href="/">Task</a>
                </li>
                <li className='sidebar--list--item'>
                    <a href="/">Feedback</a>
                </li>
                <li className='sidebar--list--item'>
                    <a href="/">Analytics</a>
                </li>
                <li className='sidebar--list--item'>
                    <a href="/">Account</a>
                </li>
                <li className='sidebar--list--item'>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu