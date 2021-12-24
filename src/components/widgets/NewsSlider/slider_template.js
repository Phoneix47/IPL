import React from 'react';
import Slick from 'react-slick';
import './slide_template.css';
import {Link} from 'react-router-dom';


const SliderTemplate = (props) =>{
    let template = null;
    const settings = {
        dots: true,
        infinte: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }

    switch(props.type){
        case ('feature'):

        template = props.data.map( (item,i) => {
             return(

                <div key={i}>
                    <div className="feature_item">
                        <div className="feature_img"
                        style={{
                            background:`url(../images/articles/${item.image})`
                        }}></div>

                        <Link to={`/articles/${item.id}`}>
                    <div className="caption"> {item.title}</div>
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
export default SliderTemplate;