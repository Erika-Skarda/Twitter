import React from 'react';

import { Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon, 
    EmailIcon, 
    BellIcon } from './styles';
import { ArrowLeft } from "../../styles/icons";
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Erika Skarda</strong>
                  <span>24 tweets</span>
              </ProfileInfo>
          </Header>

        <ProfilePage /> 

          <BottomMenu>
              <HomeIcon className="active"/>
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> 

      </Container>
  )
}

export default Main;