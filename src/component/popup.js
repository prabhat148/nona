import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Noteinput from './Noteinput';
import { IconButton } from '@mui/material';
import { Cancel } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
  
    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth='lg'
            >
             <DialogActions   >
                   
                   <IconButton color='error' onClick={handleClose}>
                       <Cancel />
                   </IconButton>

               </DialogActions>
                <DialogTitle>Create Note</DialogTitle>
                <DialogContent>
                   
                        <Noteinput  />
                    
                </DialogContent>
               
            </Dialog>
        </div>
    );
}
