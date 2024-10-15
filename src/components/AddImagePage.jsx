import styled from "styled-components";

function AddImagePage() {
    return (
        <Content>
            <Infos>
                <Info>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </Info>

                <Info>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" />
                </Info>

                <Info>
                    <label htmlFor="url">Image URL</label>
                    <input type="text" id="url" />
                </Info>
            </Infos>

            <BotaoAdd>
                <button>Add Image</button>
            </BotaoAdd>
        </Content>
    );
}

export default AddImagePage;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    weight: 95%;
    min-height: 100%;
    background-color: #265C5B;
    gap: 20px;
    margin-top: 40px;
    transition: transform 0.2s
`;

const Infos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;

    label {
        color: white;
        font-weight: 200;
        font-size: 1.2em;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        font-family: 'Afacad Flux', Arial, sans-serif;
        height: 20px;
        border-radius: 5px;
        border: solid #E3E3E3 1px;
        padding: 5px;
        outline: none;
        color: #8F8F8F; 
        
`;

const BotaoAdd = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    

    button {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;
        background-color: #8BC9ED;
        cursor: pointer;
        font-size: 1em;
        transition: transform 0.5s, background-color 0.5s;
        color: white;
        font-family: 'Afacad Flux', Arial, sans-serif;
        margin-top: 20px;
        

        &:hover {
            background-color: #9FE2FA;
            transform: scale(1.03);
        }
    }
`;
