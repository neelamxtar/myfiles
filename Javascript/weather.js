let selectbox = document.getElementById('selectbox');
let cityoption = '';
let prec = document.getElementById('prec');

prec.innerText = "sdfa";

fetch('city.json')
  .then((Response) => Response.json())
  .then((data) => {
    
    data.cities.forEach(e => {
      cityoption += `<option>${e}</option>`;
    });
  
    selectbox.innerHTML = cityoption;
  });

let currentdatetime = document.getElementById('currentdate');

function dateTime() {
  setInterval(() => {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const dayOfWeek = getDayName(date.getDay());
    const month = getMonthName(date.getMonth());
    const dayOfMonth = date.getDate();

    // Create a formatted date and time string
    const formattedDate = `${dayOfWeek},  ${dayOfMonth} ${month}, ${hr}:${min} am`;
    
    // Update the currentdatetime element
    currentdatetime.textContent = formattedDate;
  }, 1000);
}

// Call the dateTime function to start updating the date and time
dateTime();

function getDayName(dayOfWeek) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dayOfWeek];
}

function getMonthName(monthIndex) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[monthIndex];
}


