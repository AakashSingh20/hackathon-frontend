import React from 'react'

const MidContent = () => {
    return (
        <div className='mid--menu'>
            <div className='mid--menu--greet'>
                <div>
                    <h1>Welcome Back!</h1>
                </div>
                <div className='mid--menu--para'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi animi soluta neque alias corporis ut deleniti possimus dolore mollitia amet praesentium ratione, qui repudiandae repellendus quos necessitatibus natus officiis quasi?
                </div>
                <div>
                    <button className='mid--menu--button'>Learn More</button>
                </div>
            </div>
            <div>
                <div className='mid--menu--employee--operations'>Add Employee</div>
                <div className='mid--menu--employee--operations'>Search Employee</div>
                <div className='mid--menu--employee--operations'>Employee Info Page</div>
            </div>
        </div>
    )
}

export default MidContent