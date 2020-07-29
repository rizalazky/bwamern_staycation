import React from 'react'
import Button from 'components/Button'

export default function Categories(props) {
    return (
        props.data.map((item,index)=>{
            return(
                <section className='container' key={`typeCategories-${index}`}>
                    <h3 className="mb-3 font-weight-medium">{item.name}</h3>
                    <div className="container-grid">
                    {
                        item.items.map((da,index)=>{
                            return(
                            <div className='item column-3 row-1' key={ `dataCategories-${index}`}>
                                <div className='card'>
                                    { da.isPopular ?
                                        
                                            <div className="tag">Most Popular Picked</div>:null
                                        
                                    }
                                    <figure className="img-wrapper" style={{height:180}}>
                                        <img alt={da.name} src={da.imageUrl} className="img-cover"></img>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button type='Link' href={`/${da._id}`} className="streched-link d-block text-gray-800">
                                            <h5>{da.name}</h5>
                                        </Button>
                                        <span className="text-gray-500">{da.city},{da.country}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                </section>
            )
        })
    )
}
