import {useState,useEffect,useCallback} from 'react'
import styled from 'styled-components';
import AlertDialogSlide from './popup';
import { Divider, IconButton } from '@mui/material';
import { Delete, Edit  } from '@mui/icons-material';

const Conatiner = styled.div`
 display: flex;
 flex-wrap:wrap ;
 align-items:center ;
 justify-content:space-between;
 overflow:hidden ;
 width:100wh;
 height:100vh ;
 background-image:url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity:0.7 ;
 background-size:cover ;
 position:relative ;
padding:2rem ;
   @media(max-width:600px){
    flex-wrap:nowrap ;
    flex-direction: column;
    align-items:center;
    
}


`
const Card = styled.div`
width:25% ;
height:70% ;
background-image:url('https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-size:cover ;
border-radius:10px ;
padding:0.5rem ;
flex-wrap: nowrap;
-webkit-box-shadow: 4px 8px 22px -1px rgba(14,15,15,1);
-moz-box-shadow: 4px 8px 22px -1px rgba(14,15,15,1);
box-shadow: 4px 8px 22px -1px rgba(14,15,15,1);
@media(max-width:460px){
    display: flex;
    width:70% ;
    height:100% ;
    margin-top:10px ;
    justify-content:space-between ;
    flex-direction:column ;
    
}

`
const Addbutton = styled.span`
margin-left:90%;
margin-top: 20%;
position:fixed ;
opacity: 80%;
@media(max-width:460px){
    
    margin-top:80% ;
    margin-right: 30px;
    
}
`

const Cardnav = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding:0.5rem ;
height:10% ;
opacity: 70%;

`
const Cardtitle=styled.h3``
const Cardate=styled.p``
const CardNotebox=styled.div`
height: 65%;
opacity:70% ;
padding:0.5rem;
align-items: center;
`
const CardNote=styled.p``
const Cardbutton=styled.div`
position:relative ;
display: flex;
padding:0.5rem ;
height: 15%;
align-items: flex-end;
justify-content: space-around;
`

const NoteCard = () => {

   
 
const [data, setdata] = useState([]);
useEffect(() => {
       const getdata =JSON.parse(localStorage.getItem('nootes'));
      
        data? setdata(getdata):setdata("")
      
       
},[data]);


console.log(data)
    return (

        <Conatiner>
            <Card key={''}>
                <Cardnav>
                    <Cardtitle>title</Cardtitle>
                    <Cardate>22/02/2032</Cardate>
                </Cardnav>
                <Divider></Divider>
                    <CardNotebox>
                       <CardNote>jashjfhj asflAV IOASHFIa zBBV</CardNote>
                    </CardNotebox>
                    <Cardbutton>
                        <IconButton aria-label="delete" color='error'>
                            <Delete/>
                        </IconButton>
                        <IconButton aria-label="edit" color='primary'>
                            <Edit/>
                        </IconButton>
                    </Cardbutton>
            </Card>
            <Addbutton>
            <AlertDialogSlide />
            </Addbutton>
           
        </Conatiner>
    )
}

export default NoteCard
