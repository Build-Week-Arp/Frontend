import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const SocialIcons = styled.div`
  text-align: center;
`;

const BioCard = () => (
  <Card>
    
      <Image
        src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
        wrapped
        ui={false}
      />
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
);

export default BioCard;