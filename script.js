const apik="db3981b31d2a2418407d8abb8abe3fbc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
async function check(city){
    const response=await fetch(apiurl+city+`&appid=${apik}`);
    if(response.status==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }

else{
    var data= await response.json();
    document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
console.log(data);
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Humidity"){
    weatherIcon.src="images/humidity.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/raun.png";
}
else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png";
}
document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display ="none";

}


}




searchBtn.addEventListener("click",()=>{
    check(searchBox.value);
})
