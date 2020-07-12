import React from 'react'
import { Link } from 'react-router-dom'
import propType from 'prop-types'


export default function Button(props) {

    const className=[props.className]
     

    if(props.isPrimary) className.push('btn-primary')
    if(props.isLarge) className.push('btn-lg')
    if(props.isSmall) className.push('btn-small')
    if(props.isBlock) className.push('btn-block')
    if(props.hasShadow) className.push('btn-shadow')

    const onClick=()=>{
        if(props.onClick) props.onClick()
    }

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push('disabled')

        return(
            <span className={className.join(" ")}>
                {
                    props.isLoading ?(
                        <>
                            <span className="spinner-border spinner-border-sm mx-5"></span>
                            <span>Loading....</span>
                        </>
                    ) : (
                        props.children
                    )
                }
            </span>
        )
    }

    if(props.type === "Link"){
        if(props.isExternal){
            return(
            <a href={props.href} className={className.join(" ")} onClick={onClick}>{props.children}</a>
            )
        }else{
            return(
                <Link to={props.href} className={className.join(" ")} onClick={onClick}>{props.children}</Link>           
            )
        }
    }else{
        return(
        <button className={className.join(" ")} onClick={onClick}>{props.children}</button>
        )
    }
    
}

Button.propType={
    type:propType.oneOf(["button","link"]),
    href:propType.string,
    onClick:propType.func,
    target:propType.string,
    className:propType.string,
    isLoading:propType.bool,
    isDisabled:propType.bool,
    isSmall:propType.bool,
    isLarge:propType.bool,
    isBlock:propType.bool,
    hasShadow:propType.bool
}
