import React from 'react'
import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  FollowAge,
  EditButton } from './style';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Erika Skarda</h1>
        <h2>@skard0</h2>

        <p>ela</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de outubro de 1989
          </li>
        </ul>
      <FollowAge>
        <span>
          seguindo <strong>198</strong>
        </span>
        <span>
          <strong>230</strong> seguidores
        </span>
      </FollowAge>
      </ProfileData>

      <Feed />
    </Container>
    )
}
export default ProfilePage