import React from "react";
import NewsSlider from "../components/widgets/NewsSlider/slider";
import Newslist from "../components/widgets/NewsList/newslist";
const home = () =>{
    return (
        <div>
            <NewsSlider 
            type="feature"
            start={0}
            amount={7}

            />
            <Newslist
            type="card"
            loadmore={true}
            start={3}
            amount={3}
            />
            
        </div>
    )
}
export default home;