import React from 'react'
import Fade from 'react-reveal/Fade'

const MainContent = ({ data, current }) => {
    return (
        <Fade>
            {
                data[current] && data[current].content
            }
        </Fade>
    )
}

export default MainContent
