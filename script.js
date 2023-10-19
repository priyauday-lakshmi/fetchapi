var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
  let containerDiv = document.createElement("div");
  containerDiv.className = "container";
  
  let rowDiv = document.createElement("div")
  rowDiv.className = "row";
  containerDiv.appendChild(rowDiv);
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.className = "col-md-4";
        div.innerHTML = `
       
        <div class="box">
      
        <div class="card" style="width: 300px;">
        <div class="card-header">
           
        <h5 class="card-title heading">${data1[i].name}</h5>
        </div>
        <div class="card-body">
        <img src="${data1[i].flag}" class="card-img-top" "alt=""> 
     
       
          <h5 class="card-title">Capital: ${data1[i].capital}</h5>
          <h5 class="card-title">Latlng:${data1[i].latlng}</h5>
          <h5 class="card-title">Region :${data1[i].region}</h5>
          <h5 class="card-title">Countrycode:${data1[i].alpha3Code}</h5>
          <button class="weather-button btn" data-country="${data1[i].name}">Click For Weather</button>
           <h6 class="card-text text-center mt-3"></h6>
          </div>
      
      </div>
      </div>
 `;
 rowDiv.appendChild(div);
      
    }
   
   document.body.append(containerDiv);


   let weatherButtons = document.querySelectorAll(".weather-button");
  for (let i = 0; i < weatherButtons.length; i++) {
    let button = weatherButtons[i];
    button.addEventListener("click", function () {
     
      let countryName = button.getAttribute("data-country");

      
      let openWeatherMapURL = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=07d82107f2354534f73e2590bbad8f38`;

    
      fetch(openWeatherMapURL)
        .then((response) => response.json())
        .then((weatherData) => {
          
          let h6Element = button.nextElementSibling; 
          h6Element.textContent = `Temperature: ${weatherData.main.temp}°C, Weather: ${weatherData.weather[0].description}`;
        })
        
    });
  }
   
});