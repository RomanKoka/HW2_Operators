// ==== напишіть змінні які питають за допомогою prompt логін та пароль ====
//    якщо логін admin і пароль 12345 вірні то виводити повідомлення
//     "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"
//      ( реалізувати за допомогою if else )

let login = prompt('Input your login');
let password = prompt('Input your password');
if(login === 'admin' && password === '12345'){
    console.log('Wellkom to system!');
}
else{
    console.log('Login or password is not correct');
}

// ==== Спитати в користувача вік, далі використовуючи тернарний оператор ====
//  ( це скорочений запис іf ) створити змінну яка отримує true якщо вік 
//  більше 18  i false якщо менше

let userAge = Number(prompt('Input your age'));
let recomendAge = 18;
let corectAge;
corectAge = userAge>recomendAge ? true : false;
console.log(corectAge);

// ==== створити змінну в якій за допогою Prompt спитати який день неділі зараз. ====
//  Далі написати swith який для вівторок четверг значень виводить ( Сьогодні ${day}
//      у вас урок о 19) для інших днів свої варіанти,  адля значень що не 
//      відповідають умові виведіть default

let dayOfWeek = prompt('Input day of week');
switch(dayOfWeek){
    case 'Tuesday':
    case 'Thursday':
        console.log(`Today is ${dayOfWeek} you have lesson at 19.00`);
        break;
        case 'Monday':
        case 'Wednesday':
            case 'Friday':
                case 'Saturday':
                    case 'Sunday':
                        console.log(`On ${dayOfWeek} you don't have lesson`);
                        break;
                        default:
                            console.log('Error. Input correct day of the week');   
}