import styled from "styled-components";
import { Link } from 'react-router-dom';


const colors = {
    fundo: '#00182a',
    fundoForm: '#fefefe',
    sizeText: '15px',
    fontColor: 'black',
    fontHover: '#c1c1c1',

}

export const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 35px;
flex-direction: column;
width: 100%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: center;


    img{
        border-radius: 50%;
        width: 40%
        
    }
    header{
        background-color: ${colors.fundoForm};
        border-radius: 8px;
        text-align: center;
        padding-left: 15px;
        width: 45%;
       
      
    }
    div{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    span{
        font-size: 35px;
        margin-bottom: 0px;
        margin: 0px;
        padding: 0px;
    }
    p{
        font-size: 18px;
        margin-bottom: 0px;
        margin: 0px;
        padding: 0px;
        padding-bottom: 8px;

    }
 
`;

export const BackButton = styled(Link)`
    width: 75%;
    align-self: self-end;
    
`;

export const IssuesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100%;
  
    
   
    div{
        text-decoration: none;
        background-color: #fff;
        width: 46%;
        border-radius: 8px;
        margin-top: 15px;
        display:flex;
        align-items: center;
        flex-direction: row;
        height: 55px;
      
    }

    img{
        border-radius: 50%;
        width: 45px;
        padding-left: 15px;
    }

    b{
        padding-left: 15px;
    }

    a{
        text-decoration: none;
        text-align: end;
        color: #f2f;
        overflow: hidden;
        overflow: hidden; 
        text-overflow: ellipsis; 
        white-space: nowrap;
        width: 250px;
    }
`;