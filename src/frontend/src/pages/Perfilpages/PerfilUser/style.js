import styled from "styled-components";

export const Container = styled.div`
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PerfilCard = styled.div`
    width: 400px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border: 3.5px solid #930000;
    border-radius: 15px;
    > a {
        color: #ffffff;
        background-color:#C75B00;
        font-size: 18px;
        border-radius: 10px;
        padding: 12px 30px 12px 30px;
        margin-bottom: 30px;
    }
    
`;

export const HeaderCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 7%;
    font-size: 32px;
    color: #ffffff;
    background-color: #930000;
    border-top-right-radius: 11px;
    border-top-left-radius: 11px;
`;

export const ContentCard = styled.div`
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 5%;
`;

export const Subheader = styled.div`
	color: #C75B00;
	font-weight: 400;
`;

export const Info = styled.div`
    padding: 3% 0% 3% 10%;
`;

export const Email = styled.div`
    padding-top: 2%;
`;

export const Name = styled.div`
    padding-top: 2%;
`;