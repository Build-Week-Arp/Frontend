import React from 'react';


const SmallCaseStudy = ({data}) => {

        return (
            <div>
                <img>{data.imageURL}</img>
                <h2>{data.title}</h2>
                <h2>{data.author}</h2>
                
                <h2>{data.likes}</h2>
                <h2>{data.views}</h2>
                <button>Edit</button>
            </div>
        )
    }

export default SmallCaseStudy;
