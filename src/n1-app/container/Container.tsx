import React, {DetailedHTMLProps, HTMLAttributes} from 'react'
import s from './Container.module.css'

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type ContainerPropsType = DivPropsType & {

}

const Container: React.FC<ContainerPropsType> = ({className, ...restProps}) => {
    const classNameFinal = s.div + (
        className
            ? ' ' + className
            : ''
    )

    return (
        <div
            className={classNameFinal}
            {...restProps}
        />
    )
}

export default Container