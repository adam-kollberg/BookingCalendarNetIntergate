import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar  from 'react-calendar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css";
import  {differenceInCalendarDays}  from 'date-fns';


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
  
      const [value, onChange] = useState(new Date())
      
      

 //      
const bookedDays = [
    new Date (2022,1,7),
    new Date(2022,1,6)];

    function isSameDay(a, b) {
        return differenceInCalendarDays(a, b) === 0;
      }

    function tileClassName({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
          // Check if a date React-Calendar wants to check is on the list of dates to add class to
          if (bookedDays.find(dDate => isSameDay(dDate, date))) {
            return 'bookedDays';
          }
        }
      }


  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


 
  
  console.log(value)

  return (
      <>
 <div className="container">

<h3>Avboka dag</h3>
<div className="booked_days">
<div className="red"></div>
<p>Dina bokade dagar</p>

</div>

<div className="booked_days">
<p>Klicka på någon av dina bokade dagar för att avboka</p>

</div>

    <Calendar
    onChange={onChange}
    onClickDay={handleOpen}
    value={value}
    tileClassName={tileClassName}
    
     
      
      />
      </div>
       <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
    Vill du avboka detta datum {value.toDateString()}  ?
      </Typography>

<Button variant="contained" color="success" onClick={() => {
       value.className(null)       
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

