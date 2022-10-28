const qs = (el) => document.querySelector(el);
const date = new Date();
const day = date.getDay()

let total = 0;
let yeld = 0;
let balanceVisbility = true;

// loop of json
json.map((item, index) => {
  let graphic = qs('.graphic--model').cloneNode(true);   // clone of model graphic of HTML
  
  let graphicBar = graphic.querySelector('.graphic');
  graphic.setAttribute('data-key', index);
  graphicBar.style.height = `${json[index].amount * 0.25}px`;
  graphic.querySelector('.graphic--model .day').innerHTML = item.day;
  

   // Event of click to show values
  graphic.querySelectorAll('a').forEach(item => {       
    item.addEventListener('click', (e) => {
      e.preventDefault(); 
      
      let amountValue = json[index].amount;
      graphic.innerHTML += `<a href="">
      <div class="value">$${amountValue}</div>
      <div class="graphic"></div>
      <span class="day"></span>
      </a>`;
    });
  });
  
   // change the color to day of week
  (json[index].id === day) ? graphicBar.style.backgroundColor = 'hsl(186, 34%, 60%)' : '';
  
  qs('.graphic--area').append(graphic);
});


 // loop that sums the values of the graphs
let balance = () => {               
  for(let k in json){
  total += json[k].amount;
} return total
}
balance();

// put the total value on screen
qs('.balance').innerHTML = `$${total.toFixed(2)}`;  



// Event that show or hidden the balance
let clickShowBalance = qs('#logo').addEventListener('click',(e) => {  
  e.preventDefault();

  qs('#logo').style.transform = 'rotate(180deg)';

  if(balanceVisbility){
    hiddenBalance();
    balanceVisbility = false;
  } else {
    showBalance();
    balanceVisbility = true;
  }
})

let showBalance = () => {
  qs('.balance--title').style.display = 'flex';
  qs('.balance').style.display = 'flex';
} 

let hiddenBalance = () => {
  qs('.balance--title').style.display = 'none';
  qs('.balance').style.display = 'none';
  }



