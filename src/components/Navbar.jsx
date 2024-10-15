import styled from "styled-components";
import logo from "../assets/logo-no-background.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Header>
            
            <Logo to="/"><img className="top" src={logo} /></Logo>

            <AddPictureButton to="/add-image">+</AddPictureButton>

        </Header>
    )
}

const Header = styled.div `

    width: 100%;
    height: 120px;
    background-color: #8FC1B5;
    border: solid white 0px 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
    text-decoration: none;  }   

`

const Logo = styled(Link) `

    img {       
        width: 180px;
        height: 90px; 
        transition: transform 0.5s, background-color 0.5s;

        &:hover {
        transform: scale(1.05);
    }

     &:active {
        transform: scale(0.95);
    }
}  
    `

const AddPictureButton = styled(Link) `   
    font-size: 35px;
    color: white;
    background-color: #2F2F2F;
    padding: 0px 15px;
    border-radius: 30px;
    transition: transform 0.2s, background-color 0.3s;

    &:hover {
        background-color: #4D4D4D;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

export default Navbar;