import { Save } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { useState ,useEffect} from 'react'
import styled from 'styled-components';

export const Form = styled.form`
   display: flex;
   flex-direction:column ;
   padding:0.5rem ;
   width:300px ;
   height:400px ;
`

const Noteinput = () => {
    const [notes, setnotes] = useState({
       
        
    });
    const [data, setdata] = useState([]);

    const handelchange = (e) => {
        const Value = e.target.value;
        const name = e.target.name;
        const date = new Date().toDateString()
       
        setnotes({...notes,
            [name]: Value ,
              id: date
           }
         )
   

    }
   
const save =(e)=>{
     !notes.value && setdata(prevdata=>
            [...prevdata ,notes]
            )
            e.preventDefault()

        
        
   
}
    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(data))
        console.log("i am runnig")
        
    }, [data]);


    
    return (
        <Form>
            <TextField
                name='title'
                sx={{ maxWidth: "300px" }}
                size='small'
                margin='dense'
                placeholder='Title'
                required
                
                onChange={handelchange} />

            <TextField
                name='note'
                margin='dense'
                id="outlined-multiline-static"
                label="Note"
                multiline
                rows={11}
                onChange={handelchange}
                required
            />
             <IconButton color='success' onClick={save} >
                        <Save />
                    </IconButton>
        </Form>
    )
}

export default Noteinput
