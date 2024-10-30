const url = "https://brianobruno.github.io/cats.json";
const options = {method: 'GET'};

async function getWebsiteCatData(){
  const response = await fetch(url, options);
  const result = await response.text();
  const data = JSON.parse(result);
  
  const organizedFacts = data.facts.sort((a,b)=>a.factId-b.factId);
  const table= document.getElementById('factTable')
  table.innerHTML = '<tr><th>Fact Number</th><th>The Fact</th></tr>';
  
  organizedFacts.forEach(fact=> {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${fact.factId}</td><td>${fact.text}</td>`;
    table.appendChild(row);
  });
  document.getElementById('catImage').src = data.catPhoto
}