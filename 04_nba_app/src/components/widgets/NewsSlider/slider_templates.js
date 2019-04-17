import React from 'react'
import Slick from 'react-slick'
import { Link } from 'react-router-dom'
import styles from './slider.css'


const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots:false,
        infinite:  true,
        arrows: false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }

    switch(props.type){
        case('featured'):
            template = props.data.map((news, i) =>{
                return(
                    <div key={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_img}
                                style={{
                                    background: `url(../images/articles/${news.image})`
                                }}
                            ></div>
                        <Link to = {`/articles/${news.id}`}>
                                <div className= {styles.featured_caption}>
                                    {news.title}
                                </div>
                        </Link>
                        </div>
                    </div>
                )
            })
            break;            
        default:
            template = null;
    }
    return(
        <Slick {...settings} >
            {template}
        </Slick>
    )
}

export default SliderTemplates