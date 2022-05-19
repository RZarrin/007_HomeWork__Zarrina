//JS Расчет возраста на сегодня

var Name = prompt('Введите ваше имя');
var currentYear = +prompt('Введите сегоднешний год');
var myYear = +prompt('Введите ваш год рождения');

console.log(Year(myYear, currentYear, Name));
function Year(a, b, c = '') {
    return Name + ', Ваш возраст ' + (b - a) ;
}


/*let userName =  prompt ('Введите имя:');
let x = +prompt ('Введите год рождения');
let y = +prompt ('Введите текущий год');

function sum (x, y, userName =){
  return (sum(userName + ', Ваш возраст ' + sum);
};*/