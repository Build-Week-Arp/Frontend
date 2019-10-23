import React, {useState} from 'react';
import { Card } from 'semantic-ui-react';

const LargeCaseStudy = ( {data} ) => {

console.log(data)

        return (
            <Card>
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
            </Card>
        )
    }

export default LargeCaseStudy;
