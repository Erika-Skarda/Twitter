import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email,  } from "../../styles/icons";

export const Container = styled.div`
    z-index:2;
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--outlined);
        border-right: 1px solid var(--outlined)

    }

  
`;
export const Header = styled.div`
    position:sticky;
    top:0%;
    background: var(--primary);

    display:flex;
    align-items:center;
    text-align:left;

    padding:8px 0 9px 13px;
    border-bottom: 1px solid var(--outlined);

    >button {

        padding: 8px;
        border-radius:50%;

        outline:0;
        cursor:pointer;

        &:hover {

            background:var(---twitter-dark-hover);
        }
    }
  
`;
export const BackIcon = styled(ArrowLeft)`

    height: 24px;
    width:24px;

    fill:var(--twitter);
  
`;
export const ProfileInfo = styled.div`

    margin-left:17px;

    display:flex;
    flex-direction:column;

    >strong {

        font-size:19px;
    }
    >span {

        font-size:15px;
        color:var(--gray);
    }
  
`;

export const BottomMenu = styled.div``;

const iconCSS = css `

    width:31px;
    height:31px;
`


export const HomeIcon = styled(Home)`
    ${iconCSS}
`
export const SearchIcon = styled(Search)`
    ${iconCSS}
`
export const BellIcon = styled(Notifications)`
    `
export const EmailIcon = styled(Email)``