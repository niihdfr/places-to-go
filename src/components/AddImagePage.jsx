import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddImagePage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate();
    

    function submitForm(event) {
        event.preventDefault();
        const body = { name, description, url };
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images", body)

        .then(response =>  navigate("/"))
        .catch(err => console.log(err.response.data))



    }

    return (
        <PageContainer>
            <Content>
                <form onSubmit={submitForm}>
                    <Info>
                        <label htmlFor="name">Name</label>
                        <input
                            required
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Info>

                    <Info>
                        <label htmlFor="description">Description</label>
                        <input
                            required
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Info>

                    <Info>
                        <label htmlFor="url">Image URL</label>
                        <input
                            required
                            type="text"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Info>

                    <BotaoAdd>
                        <button type="submit">Add Image</button>
                    </BotaoAdd>
                </form>
            </Content>
        </PageContainer>
    );
}

export default AddImagePage;


const PageContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    background-color: #265C5B;
`;

const Content = styled.div`
    width: 80%;
    max-width: 80%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-weight: 200;
        font-size: 1.2em;
        margin-bottom: 8px;
    }

    input {
        width: 100%; 
        height: 30px;
        border-radius: 5px;
        border: 1px solid #e3e3e3;
        padding: 8px;
        font-size: 1em;
        outline: none;
        color: #8f8f8f;
        font-family: 'Afacad Flux', Arial, sans-serif;
    }
`;

const BotaoAdd = styled.div`
    margin-top: 20px;
    width: 100%;

    button {
        width: 100%; 
        height: 50px;
        border: none;
        border-radius: 5px;
        background-color: #8bc9ed;
        cursor: pointer;
        font-size: 1.2em;
        transition: transform 0.5s, background-color 0.5s;
        color: white;
        font-family: 'Afacad Flux', Arial, sans-serif;

        &:hover {
            background-color: #0DA7DB;
            transform: scale(1.03);
        }
    }
`;
