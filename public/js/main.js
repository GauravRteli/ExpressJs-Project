const temp_val = document.getElementById('temp_val');
const update = document.getElementById('status');
const DAY = document.getElementById('day');
const dateandmonth = document.getElementById('dateandmonth');
const city = document.getElementById('city');
const city_name = document.getElementById('city_name');
const search = document.getElementById('button-addon2');
function update_day(){
    let today = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    let date = today.getDate();
    let dm = date + " " + month[today.getMonth()];
    let d = weekday[today.getDay()];
    dateandmonth.innerText = dm;
    DAY.innerText = d;
}
const getinfo = async(event) => {
    event.preventDefault();
    let cityname = city.value;
    if(cityname === ""){
        city_name.innerText = 'Plz Enter the City Name !';
    }
    else{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=92bdcc379b3275de66cac7e178733e98`;
            let data = await fetch(url)
            .then(res => res.json())
            .then((data) => {
                city_name.innerText = city.value;
                temp_val.innerText = (data.main.temp - 273.15).toPrecision(2);
                if(data.weather[0].main == 'Clouds'){
                    update.innerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style="color: grey;" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16">
                    <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"/>
                    <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
                  </svg>`;
                }
                else if(data.weather[0].main == 'Clear'){
                    update.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" style="color: yellow;" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>`;
                }
                else if(data.weather[0].main == 'Rain'){
                    update.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" style="color: rgb(57, 57, 57); fill="currentColor" class="bi bi-cloud-lightning-rain-fill" viewBox="0 0 16 16">
                    <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
                    </svg>`;
                }
                else{
                    update.innerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style="color: grey;" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16">
                    <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"/>
                    <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
                  </svg>`;

                }

            })
            .catch((error) => { city_name.innerText = 'Enter the name of City properly !'; });



    }
}
update_day();
search.addEventListener('click',getinfo);