var request= new XMLHttpRequest();

request.open('GET',"https://restcountries.com/v3.1/all")

request.send();

request.onload=function(){
    var data = JSON.parse(request.response)
    
    for (i=0;i<data.length; i++)
    {
        console.log(
            `country_Name : ${data[i].name.official}
             Population : ${data[i].population} 
             Country_Flag : ${data[i].flag}  
             Region :${data[i].region}   
             Sub-Region :${data[i].subregion} 
             Capital_City :${data[i].capital}
        `)
    }
}