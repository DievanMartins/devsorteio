//para "sortear" números aleatórios usa-se o Math.round(Math.random() * 10); o * 10 será o maior número que será lançado.
//ex.:
//let n = Math.round(Math.random() * 1000);
//console.log(n);


let submit = document.querySelector('#send');
let clean = document.querySelector('#clean');

function draw(){
  let num = document.querySelector('#prizeDraw').value;
  let res = document.querySelector('#result');;
  let result = Math.round(Math.random() * num);
  res.textContent = `O número sorteado foi ${result}. Parabéns ao ganhador(a)!`;
}

function cleanElements(){
  document.querySelector('#prizeDraw').value = '';
  document.querySelector('#result').innerHTML = '';
}


submit.addEventListener('click', draw);
clean.addEventListener('click', cleanElements)