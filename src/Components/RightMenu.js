import React from 'react'

const RightMenu = () => {
    return (
        <div className='right--menu'>
            <div className='right--menu--analytics'>
                <div className='right--menu--analytics--1'>
                    <h4>Employee</h4>
                    <p>359</p>
                </div>
                <div>
                    <h4>Today</h4>
                    <p>4</p>
                </div>
                {/* <div></div> */}
            </div>

            <div className='right--menu--recent'>
                <p style={{ textAlign: "center", borderBottom: "1px solid black", width: "80%", marginLeft: "28px", paddingBottom: "5px" }}>Recent Messages</p>
                <div className='card'>
                    <div className='right--menu--recent--card'>
                        <div className='right--menu--recent--card--detail'>
                            <p className='card--name'>Francis Tran</p>
                            <p className='card--text'>Health is not good</p>
                        </div>
                        <div className='right--menu--recent--card--time'>05 minutes ago</div>
                    </div>
                </div>
                <button className='right--menu--button'>View More</button>
            </div>
        </div>
    )
}

export default RightMenu