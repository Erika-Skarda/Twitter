import React from 'react';

import { Container,
         Retweeted,
         RocketseatIcon,
         Avatar,
         Body,
         Content,
         ImageContent,
         Icons,
         Status,
         CommentIcon,
         RetweetIcon,
         LikeIcon,
         Header,
         Dot,
         Description } from './style';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span> @rockeseat</span>
            <Dot />
            <time>05 de outubro</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
               18
            </Status>
            <Status>
              <RetweetIcon />
               18
            </Status>
            <Status>
              <LikeIcon />
               890
            </Status>
          </Icons>
        </Content>
      </Body>

    </Container>

  )
}

export default Tweet;