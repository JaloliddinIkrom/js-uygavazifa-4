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


 let nameNew = []; 
 let users = [];


   
 let Contact = (array, node) => { 

  node.innerHTML = '';
 
  array.forEach((item) => { 


    var elItem = document.createElement('li'); 
    elItem.setAttribute('class', 'bg-dark text-white p-3 rounded mb-2')
      
      var elTitle = document.createElement("h2"); 
      elTitle.textContent = item.name;  
      elItem.appendChild(elTitle);
     
      
      var elLink = document.createElement("a");  
       elLink.textContent = item.email; 
       elLink.href = `email:${item.email}`; 
       elLink.style.display = "block"; 
       elLink.style.color = "red"; 
       elLink.setAttribute('class', 'text-decoration-none')
       elItem.appendChild(elLink); 
     
  
      var elTel = document.createElement("a");
      elTel.textContent = item.tel; 
      elTel.href = `tel:${item.tel}`;  
      elTel.style.display = "block"; 
      elTel.style.color = "blue"; 
      elItem.appendChild(elTel);  
      elTel.setAttribute('class', 'text-decoration-none')
      
  
      var elButten = document.createElement('button');
      elButten.textContent = 'DELETE';
      elButten.type = 'submit';
      elButten.setAttribute('class', 'btn btn-danger ms-3 js-btn'); 
      elButten.dataset.daletId = item.id;
       elItem.appendChild(elButten);
       elList.appendChild(elItem); 
  });  
 }   



 ///=================================================================================================

elForm.addEventListener('submit', function (evt){ 
     
    evt.preventDefault();  
  
    elList.innerHTML = '';

    var elVal1 = elInp1.value; 
    var elVal2 = elInp2.value; 
    var elVal3 = elInp3.value;

  
    let neIndex = users.findIndex((item) => item.tel == elVal3);

    console.log(neIndex);

     if(neIndex >= 0){ 

      alert("Bu raqam oldin kiritilgan boshqa raqam kiriting.."); 
  
     }else{ 
        
      elInp1.value = '';
      elInp2.value = ''; 
      elInp3.value = ''; 

      users.push({ 

         id: users.length + 1,
         name:  elVal1,
         email: elVal2,
         tel: elVal3,

      });
     
     } 
   
    Contact(users, elList); 
    nameNew.push(elVal3);   



}); 
 
  
elList.addEventListener('click', function(evt){ 

if(evt.target.matches('.js-btn')){ 

var userT = evt.target.dataset.daletId; 

var dateUsers = users.findIndex((num) => num.id == userT);
 
users.splice(dateUsers, 1); 
Contact(users, elList);  


}

});   


//======================================================================================================

let elButt = document.querySelector('.js-butten');

  var TurFol = false;

  elButt.addEventListener('click', function(){ 
 
    TurFol = !TurFol; 
     
    var netur = TurFol ? 'dark' : 'light';
     
    window.localStorage.setItem('TurFol', netur); 

   
   domgachiqaradi();
  });  

  function domgachiqaradi (){ 

    if(window.localStorage.getItem('TurFol') == 'dark'){ 

      document.body.classList.add('dark'); 

    }else{ 

      document.body.classList.remove('dark'); 
   
    }
  } 
  domgachiqaradi();

   


























