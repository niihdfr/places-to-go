import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ImagePage() {

    const [image, setImage] = useState(null);
    const {imageId} = useParams();

    useEffect(() => {

        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images/${imageId}`)
        .then(res => setImage(res.data))
        .catch(err => console.log(err.res.data))
    }, [imageId]);

    if (image === null) {
        return <div>Carregando...</div>
    };

    return (
        <TopSection>

            <Image>
                <img src={image.url} alt="" />
            </Image>

            <Title>
                <h2>{image.name}</h2>
            </Title>

        </TopSection>
    )
}

export default ImagePage;

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 100px;

`;

const Image = styled.div`
    img {
        width: 500px;
        height: 500px;
        border-radius: 10px;
        object-fit: cover;
    }
`;

const Title = styled.div`

h2 {
    color: white;
    font-family: 'Afacad Flux', Arial;
    font-weight: 200;

}
    

`;



