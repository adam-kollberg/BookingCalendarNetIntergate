import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CalendarCancel = () => {
  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  
  
    const defaultValue = {
    year: 2022,
    month: 2,
    day: 18,
  };

  
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
console.log(selectedDay)
  return (
      <>
 
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay,handleOpen}
      
      shouldHighlightWeekends
      // here we go
     />
       <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
    Vill du avboka detta datum {selectedDay.day} / {selectedDay.month} / {selectedDay.year} ?
      </Typography>

<Button variant="contained" color="success" onClick={() => {
              setSelectedDay(null)
            }}>
  Ja
</Button>
<Button variant="outlined" color="error" onClick={handleClose} >
  Nej
</Button>
    </Box>
  </Modal>
    </>
  );
  
      
};

export default CalendarCancel; 

