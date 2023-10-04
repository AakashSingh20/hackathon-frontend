import React from 'react'
import LeftMenu from './LeftMenu'
import MidMenu from './MidMenu'
import RightMenu from './RightMenu'
import HrForumAnswer from './HRForumAnswer'

const AppContent = () => {
    return (
        <div className='app--content'>
            <LeftMenu />
            <MidMenu />
            <RightMenu />
            {/* <HrForumAnswer /> */}
        </div>
    )
}

export default AppContent