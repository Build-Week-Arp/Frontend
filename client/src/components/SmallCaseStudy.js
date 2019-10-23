import React, {useState} from 'react';


const SmallCaseStudy = ( )  => {
const [data, setData ] = useState([]);

        return (
            <div>
                {/* <Image src={data.imgURL}/> */}
                <h2>{data.artist}</h2>
                <h2>{data.likes}</h2>
                <h2>{data.views}</h2>
                <button>Edit</button>
            </div>
        )
    }


export default SmallCaseStudy;