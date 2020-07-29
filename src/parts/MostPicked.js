import React from 'react'
import Button from 'components/Button'

export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refMostPicked}>
           
                <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        props.data.map((item,index)=>{
                            return(
                                <div className={`item column-4${index === 0? ` row-2`:` row-1`}`} key={`mostPicked${index}`}>
                                    <div className="card card-featured">  
                                        <div className="tag">
                                            ${item.price}
                                            <span className="font-weigth-light ">per {item.unit}</span>    
                                        </div>
                                        <figure className='img-wrapper'>
                                            <img className="img-cover" alt={item.name} src={item.imageUrl}></img>
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button type='Link' className="streched-link d-block text-white" href={`/${item._id}`}>
                                                <h5>{item.name}</h5>
                                                
                                            </Button>
                                            <span className="font-wight-light">{item.city},{item.country}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
            
        </section>
    )
}
