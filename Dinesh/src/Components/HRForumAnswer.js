import React from 'react'

const HrForumAnswer = () => {
    return (
        <div className='hr--forum--answer'>
            <p style={{ fontWeight: "bold", paddingBottom: "20px" }}>Question</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid accusamus delectus, quos, mollitia deleniti ea dolorem itaque numquam vero rerum possimus quam, animi eos. Nesciunt iusto laborum alias eos.</p>
            <br />
            <br />
            <p style={{ fontWeight: "bold", paddingBottom: "20px" }}>Response</p>
            <div className='hr--forum--answer--input'>
                <textarea type="text" rows={10} cols={110} />
            </div>
            <div className='answer--button'>
                <button className='answer--btn' >Submit</button>
            </div>
        </div>
    )
}

export default HrForumAnswer