import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

import "./calendar.css";

const App = () => {
  const defaultValue = [{
    year: 2022,
    month: 2,
    day: 11,
  },
  {
    year: 2022,
    month: 2,
    day: 15,




   
  }]
  
  ;
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  return (
      
      <div className="container">
          <h3>Dina bokade tider</h3>
          <p>Klicka på valda datum att avboka</p>
    <Calendar

      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      // here we go
      renderFooter={() => (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}>
          <button
            type="button"
            onClick={() => {
              setSelectedDay(null)
            }}
            style={{
              border: '#0fbcf9',
              color: '#fff',
              borderRadius: '0.5rem',
              padding: '1rem 2rem',
            }}
          >
            Reset Value!
          </button>
        </div>
        
      )}
    />
    </div>
  );
};

export default App;