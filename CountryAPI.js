
function consumeRestCountryAPI(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://restcountries.com/v3.1/all", requestOptions)
        .then((response) => response.text())
        .then(text => JSON.parse(text))
        .then(result => {  
          console.log(result)
          const screenWidth = window.innerWidth;
          var x = 801
          if (screenWidth >= x) {
            const tableBody = document.getElementById('tableBody')
            result.forEach(country => {
              const row = document.createElement('tr');
              const cellName = document.createElement('td'); 
              cellName.textContent = country.name.common; 
              row.appendChild(cellName); 
              const cellPopulation = document.createElement('td'); 
              cellPopulation.textContent = country.population; 
              row.appendChild(cellPopulation); 
              const cellFlag = document.createElement('td');
              const img = document.createElement('img')
              img.src = country.flags.png;
              cellFlag.appendChild(img)
              row.appendChild(cellFlag)
              const cellRegion = document.createElement('td');
              cellRegion.textContent = country.region;
              row.appendChild(cellRegion);
              const cellCoatOfArms = document.createElement('td');
              const coatOfArms = document.createElement('img');
              coatOfArms.src = country.coatOfArms.png;
              coatOfArms.style.width = "100px";
              coatOfArms.style.height = "100px";
              cellCoatOfArms.appendChild(coatOfArms);
              row.appendChild(cellCoatOfArms);
              const cellIndependent = document.createElement('td');
              cellIndependent.textContent = country.independent;
              row.appendChild(cellIndependent);
              tableBody.appendChild(row); 
            })}
            }
          )     
          .catch((error) => console.error(error));
          fetch("https://restcountries.com/v3.1/all", requestOptions)
        .then((response) => response.text())
        .then(text => JSON.parse(text))
        .then(result => {  
          console.log(result)
          var x = window.matchMedia("(max-width: 800px)")
              if (x.matches) {
                result.forEach(country => {
                const table = document.getElementById('table')
                var contents = table.innerHTML;
                contents.replace("");
                const row = document.createElement('tr');
                const cellFlag = document.createElement('td');
              const img = document.createElement('img')
              img.src = country.flags.png;
              cellFlag.appendChild(img)
              row.appendChild(cellFlag)
              tableBody.appendChild(row);   
              })}})
           } 
         
          
        

 consumeRestCountryAPI()



function searchCountryAPI() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const table = document.getElementById('table')
  const input = document.getElementById('searchcountry').value;
  const tableBody = document.getElementById('tableBody')
  if (tableBody) {
    table.removeChild(tableBody);
  }
  fetch("https://restcountries.com/v3.1/name/" + input, requestOptions)
  .then((response) => response.text())
  .then(text => JSON.parse(text))
  .then(result => {
    const tablbody = document.createElement("tbody")
    tablbody.id = 'tableBody';
    const row = document.createElement('tr')
 if (input == null || input == "") {
  alert('Please add an input')
 }
  
 else{
  const cellName = document.createElement('td')
  cellName.textContent = result[0].name.common;
  row.appendChild(cellName)
  const cellPopulation = document.createElement('td')
  cellPopulation.textContent = result[0].population;
  row.appendChild(cellPopulation)
  const cellFlag = document.createElement('td');
  const img = document.createElement('img')
  img.src = result[0].flags.png;
  cellFlag.appendChild(img)
  row.appendChild(cellFlag)
  const cellRegion = document.createElement('td');
  cellRegion.textContent = result[0].region;
  row.appendChild(cellRegion);
  const cellCoatOfArms = document.createElement('td');
  const coatOfArms = document.createElement('img');
  coatOfArms.src = result[0].coatOfArms.png;
  coatOfArms.style.width = "100px";
  coatOfArms.style.height = "100px";
  cellCoatOfArms.appendChild(coatOfArms);
  row.appendChild(cellCoatOfArms);
  const cellIndependent = document.createElement('td');
  cellIndependent.textContent = result[0].independent;
  row.appendChild(cellIndependent);
  tablbody.appendChild(row);
  table.appendChild(tablbody)
}


// searchCountryAPI()
  })}

 
