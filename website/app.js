

/* Global Variables */

// Create a new date instance dynamically with JS

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='

// let apiKey = '&appid=a07b53f0e456a0416491eeaf5da64c89'
let apiKey = 'a07b53f0e456a0416491eeaf5da64c89'



document.getElementById('generate').addEventListener('click', performAction);




// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

function performAction(e) {
    const newZipcode = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;
    getData(baseURL,newZipcode, apiKey).then((data) =>{
       postData('/add', {date, temp: data.main.temp, feeling: newFeeling })
    })
}


const getData = async (baseURL, zipcode, key) => {
    const res = await fetch(baseURL+zipcode+'&appid='+key)
    
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
       
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
        }
}

// postData('/add', {answer:42});
