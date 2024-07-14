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
            tableBody.appendChild(row); 
          });
          })
        .catch((error) => console.error(error));
}
consumeRestCountryAPI()
