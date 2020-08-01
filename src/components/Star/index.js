import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({className,value,width,height,spacing}) {
    const startPlaceholder=[];

    for(let i=0;i<5;i++){
        startPlaceholder.push(
        <div className="star placeholder" key={`starplaceholder-${i}`} style={{
            left:i*width,
            width:width,
            marginRight:spacing,
            height:height
        }}>
        </div>
    )}

    const decimals=value%1
    const star=[]
    let leftPos=0
    for(let index=0;index<5 && index<value-decimals;index++){
        leftPos=leftPos+width
        star.push(
            <div className="star" style={{
                height:height,
                width:width,
                marginRight:spacing,
                left:index*width
            }}></div>
        )
    }

    if(decimals>0 && value <=5){
        star.push(
            <div className="star" style={{
                height:height,
                width:decimals * width - spacing,
                left:leftPos,
                marginRight:spacing
            }}>

            </div>
        )
    }

    const startPlaceholder2=[]
    for (let index = 0; index < 5; index++) {
        startPlaceholder2.push(
            <div className="star placeholder" style={{
                left:index*width,
                marginRight:spacing,
                height:height,
                width:width
            }}>

            </div>
        )
    }

    const decimals2=value%1
    const star2=[]
    let leftPost2=0;
    for (let index = 0; index < value-decimals2; index++) {
        leftPost2=leftPost2+width
        star2.push(
            <div className="star" style={{
                width:width,
                left:index*width,
                marginRight:spacing,
                height:height
            }}></div>
        )   
    }

    if(decimals2>0 && value<=5){
        star2.push(
            <div className="star"
            style={{
                left:leftPost2,
                width:decimals2*width-spacing,
                marginRight:spacing,
                height:height
            }}
            ></div>
        )
    }


    return (
        <>
        <div className={["stars",className].join(" ")} style={{height:height}}>
            {/* {startPlaceholder}
            {star} */}
            {startPlaceholder2}
            {star2}
        </div>
        </>
    )
}

Star.propTypes={
    className:propTypes.string,
    width:propTypes.number,
    value:propTypes.number,
    height:propTypes.number,
    spacing:propTypes.number
}
