import { Spin } from 'antd'
import React from 'react'

const Loading = ({ size = 'large' }) => {
    return (
        <div className={'justify-center items-center flex z-10 text-white'}>
            <Spin size={size} />
            <h1>Loading</h1>
        </div>
    )
}

export default Loading;