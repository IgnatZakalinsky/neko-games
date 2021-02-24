import React from 'react'
import s from './Container.module.css'

const Container: React.FC = ({...restProps}) => {
    return (
        <div
            className={s.div}

            {...restProps}
        />
    )
}

export default Container