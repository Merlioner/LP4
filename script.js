login = prompt('Хто ти?', 'співробітник');
let message = (login == 'співробітник') ? 'Привіт' : 
(login == 'директор') ? 'Доброго дня' : 
'Введіть правильний логін';
document.write(message);

year = prompt("Якого року відкрито заклад?", 1995)
if (year == 1995) {
    alert("true");
} else if (year >= 1990 && year <= 2000 && year != 1995){
    alert("близько до правильного року");
} else{
    alert("false")
}

learn = 2;
switch(learn){
    case 1:
        document.write("Комп'ютерні мережі");
        break;
    case 2:
        document.write("Вебтехнології та вебдизайн");
        break;
    case 3:
        document.write("Вища математика");
        break;
    case 4:
        document.write("Вища математика");
        break;
    case 5:
        document.write("Фізичне виховання");
        break;
    case 6:
        document.write("Фізичне виховання");
        break;
    default:
        document.write("Уроків немає");
        break;
}

x = 4;
par = (x % 2 == 0) ? "Число парне" : "Число не парне";
document.write(" " + par);

bal = 3;

 if (bal >= 13){
    step = 0;
} else if (bal >= 10){
    step = 2000;
} else if (bal >= 7){
    step = 1250;
} else if (bal >= 4){
    step = 490;
} else {
    step = 0;
}

document.write(" " + step)