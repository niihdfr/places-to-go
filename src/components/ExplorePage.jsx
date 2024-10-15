import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import loading from "../assets/loading.gif";
import { Link } from "react-router-dom";

export default function ExplorePage() {

    const [images, setImages] = useState(null);

    useEffect(() => {
        
        axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images")

        .then((response) => setImages(response.data))

        .catch((error) => console.log(error.response.data))
        
    }, []);

    if (images === null) {
        return <Loading><img src={loading} alt="" /></Loading>
    }

    return (
        <Content>
            <Images>
                {images.map((img => (                   
                    <Image key={img.id} to={`/images/${img.id}`}>
                        <img src={img.url} />
                        <Overlay>
                            <div className="name">{img.name}</div>
                        </Overlay>
                    </Image>
                )))}
            </Images>
        </Content>
    )
}

const Loading = styled.div `
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    
`

const Content = styled.div `    
    display: flex;
    width: 100%;
    margin: 90px 0px;
    padding: 20px;
    align-items: center;
    justify-content: center;   
    box-sizing: border-box;
    font-family: 'Afacad Flux', Arial;
`

const Images = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px 50px;
        
`

const Image = styled(Link) ` 
    position : relative;
    
        img {
            width: 400px;
            height: 200px;
            object-fit: cover;
            transition: 0.5s ease-in-out;
            border-radius: 10px;
            

        }

        &:hover img {
            filter: brightness(45%);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.23); 
        }

        &:hover div {
            opacity: 1; 
        } 
    `

    const Overlay = styled.div `
        position: absolute;
        top: 50%; 
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: 0.3s ease-in-out;
         

        .name {
            font-size: 1.4em;
            color: white;
            text-align: center;
        }
    
`