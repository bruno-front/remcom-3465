console.log('script work!');

let catName;

catName = 'Kesha';

console.log(catName);

catName = 'Gans';

console.log(catName);

catName = 34;

catName = true;
catAge = 10;



let petNames = ['Gans', 'Kesha', 'Robin', 'Albus'];

console.log(petNames.length);

let num1 = '5a';
let num2 = 2;

console.log( num1 + num2 );
console.log( num1 - num2 );
console.log( num1 * num2 );
console.log( num1 / num2 );
console.log( num1 % num2 );

num2++;
console.log(num2);

num2++;
console.log(num2);

num2++;
console.log(num2);


num2--;
console.log(num2);

num2--;
console.log(num2);

num2--;
console.log(num2);

console.log(5 >= 5);


let age = 59;

if ( age < 18 ) {
  console.log('Иди играй в песочницу');
}
else if ( age >= 60) {
  console.log('Купи мороженку внукам');
}
else {
  console.log('Иди работай, ***');
}


let name = 'Иван';

if (name) {
  console.log('Здравствуйте, ' + name);
} else {
  console.log('Здравствуйте, товарищ!');
}

// 0 - false
// 1 - true (2, 3, 5)
// undefined - false
// null - false
//




let count = 0

if (count < 10) {
  console.log(count); // 0
  count++; // 1
}


console.log(count); // 1
count++; // 2

console.log(count); // 2
count++; // 3

console.log(count); // 3
count++; // 4

console.log(count); // 4

// petNames.length
// petNames[2]

for (let i = 0; i < petNames.length; i++) {
  console.log('Myyyaaaawwwww - проорал ' + petNames[i]);
}



function printMessage(name, message) {
  if (name) {
    console.log('Привет, ' + name + '! ' + message);
    return;
  }

  console.log('Ти кто такой?');
}

printMessage('' ,'Пойдем учить js');
printMessage('Natasha', 'Конфета это хорошо, но где печеньки?');
printMessage('Aysanat', 'Используй свойство overflow, но не говори Наташе) Нефиг опаздывать');


let testFunc = function() {
  console.log('testFunc run');
}

testFunc();

let famousPeoples = ['Екатерина II', 'Петр I', 'Ломоносов', 'Королев']




















function greeting(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Hello, ' + array[i]);
  }
}













greeting(famousPeoples);
greeting(petNames);



let cat = {
  color: 'orange',
  size: 'medium',
  name: 'Kesha',
  age: 10,
  mew: function(name) {
    console.log('MEEEWWWWW! ГОНИ ЖРАТЬ, ' + name);
  }
}

cat.mew('Kirill');
console.log(cat);

console.log(console);

console.log(window)

console.dir(document.body.children[2]);




console.log(cat.size);
console.log(cat.size.length);
console.log(petNames.length);







let servicesHeading = document.querySelectorAll('.services_heading');

for (let i = 0; i < servicesHeading.length; i++) {
  servicesHeading[i].classList.add('services_heading-red')
}


function test(obj) {
  console.log(obj.name);
}

let someObj = {
  name: 'NAME',
  age: 155
};

test(someObj);




function runAnotherFunc(fn) {
  fn();
}

let testFunction = function() {
  console.log(4 + 3);
}

let testFunction2 = function () {
  console.log(6 + 9);
}

runAnotherFunc(testFunction);
runAnotherFunc(testFunction2);





















function sum(a, b) {
  console.log('BEFORE');
  return a + b;
}

let sum1 = sum(4, 6);
console.log(sum1);





let promoBtn = document.querySelector('.js-promo-btn');

promoBtn.addEventListener('click', function(event){
  event.preventDefault();
});


let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.js-menu');

burger.addEventListener('click', function() {
  menu.classList.add('open');
});
