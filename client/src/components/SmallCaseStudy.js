import React, {useState} from 'react';


const SmallCaseStudy = ( {data, setData} )  => {
    const [data setData] = useState([

    ]);

        return {
            <Container>
                <Image src={data.imgURL}/>
                <h2>{data.artist}</h2>
                <h2>{data.likes}</h2>
                <h2>{data.views}</h2>
                <button>Edit</button>
            </Container>
};
export default SmallCaseStudy;