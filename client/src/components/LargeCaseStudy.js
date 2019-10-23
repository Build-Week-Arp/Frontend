import React, {useState} from 'react';


const LargeCaseStudy = ( ) => {
const [data, setData ] = useState([]);
console.log(data)
        return (
            <div >
                {/* <Image src={data.imgURL}/> */}
                <h1>{data.artist}</h1>
                <h2>Artist</h2>
                <span/>
                <h2>Description</h2>
                <p></p>><span/>
                <button>Cancel</button>
                <button>Update Post</button>
            </div>
        )
    }


export default LargeCaseStudy;