// const users = [
//     {
//       name: 'Jonibek',
//       debt: 10000,
//     },
//     {
//       name: 'Asadbek',
//       debt: 30000,
//     },
//     {
//       name: 'Ravshanjon',
//       debt: 50000,
//     },
//     {
//       name: 'Otabek aka',
//       debt: 1000,
//     },
//     {
//       name: 'Muhammad Ali',
//       debt: 100000,
//     },
//     {
//       name: 'Jaloliddin aka',
//       debt: 5000,
//     },
//   ]; 
   
//   let usarr = 0;
//   users.forEach(function(poke) { 

//     usarr += poke.dept; 
//   });

//   console.log(usarr);



//    var numbers = [1, 2, 3, 4, 5]; 

//    var red = numbers.reduce((str, el) => { 
     
//      return str += el * 10;
      
//    }, 0); 
//    console.log(red);

 
// var arry = [1, 2, false, true, false, true, '56']; 
// var arry2 = [ false, true, false, true, '56', null];  

// var res = arry.reduce((str, el) => { 
//  if(typeof el == 'number'){ 

//     str += el;
//  } 
//  return str;
 

// }, 0); 
// console.log(res); 


// var number = [1, 2, 3, 4, 5]; 


// var res = number.reduce((str, el, index) => { 
  
//   return str += el * index;

// }, 0); 
// console.log(res); 


// var arry = [true, false, true, false, true]; 

// console.log( 

//     arry.filter((el) => el).length
// );



var elForm = document.querySelector('.js-form'); 
var elList = document.querySelector('.js-list');  
var elInp1 = document.querySelector('.js-inp1');
var elInp2 = document.querySelector('.js-inp2'); 
var elInp3 = document.querySelector('.js-inp3'); 
var elBtn = document.querySelector('.js-btn');
 

 

elForm.addEventListener('submit', function (evt){ 

    evt.preventDefault();  


    var elVal1 = elInp1.value; 
    var elVal2 = elInp2.value; 
    var elVal3 = elInp3.value;

  var elItem = document.createElement('li');
    
    var elTitle = document.createElement("h2"); 
    elTitle.textContent = elVal1;  
    elItem.appendChild(elTitle);
    elInp1.value = "";
    
    var elLink = document.createElement("a");  
     elLink.textContent = elVal2; 

     elLink.href = `email:${elVal2}`; 
     elLink.style.display = "block"; 
     elLink.style.color = "red";
     elItem.appendChild(elLink); 
     elInp2.value = "";

    var elTel = document.createElement("a");
    elTel.textContent = elVal3; 
    elTel.href = `tel:${elVal3}`;  
    elTel.style.display = "block"; 
    elTel.style.color = "blue"; 
    elItem.appendChild(elTel); 
    elInp3.value = "";
 
   elList.appendChild(elItem);  
    
});
    

























