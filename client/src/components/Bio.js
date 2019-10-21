import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const BioCardContainer = styled.section`
position: absolute;
left: 0%;
`;

const ImageContainer = styled.div`
 
height: 214px;
width: 100%;
`;

const SocialIcons = styled.div`
  text-align: center;
`;

const BioCard = () => (
  <BioCardContainer className = 'bio-card'>
  <Card>
    <ImageContainer>
      <Image
        src="https://media.licdn.com/dms/image/C4D03AQGEyqn3rIlCRw/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=zxpYoLRTOpEFal2OLx1lVshjXP5Tc2txps2DVGOXmFg"
        avatar
      />

      <p>Leighton Fritze</p>
      <small>Full Stack Developer</small>
      <div className="followers">
        <small>Followers 317 </small> 
        <small>Following 8</small>
      </div>
    </ImageContainer>

    <Card.Content>
      <button className="ui button">Follow</button>
      <Card.Header>About Me</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
      <Card.Description>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <SocialIcons>
        <a>
          <Icon name="facebook official" />{" "}
        </a>
        <a>
          <Icon name="linkedin" />{" "}
        </a>
        <a>
          <Icon name="twitter square" />{" "}
        </a>
        <a>
          <Icon name="mail" />{" "}
        </a>
      </SocialIcons>
    </Card.Content>
  </Card>
  </BioCardContainer>
);

export default BioCard;

// facebook official
//linkedin
//twitter square
// mail
