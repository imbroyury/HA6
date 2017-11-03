function getResponse(query) {
    let response = prompt(query);
    while (!response) {
        response = prompt(`Не введены данные. ${query}`);
    }
    return response;
}

function getGender() {
    let gender = Number(prompt('Укажите ваш пол: 1 – мужчина, 2 – женщина'));
    while (gender < 1 || gender > 2 || isNaN(gender)) {
        gender = Number(prompt('Неверно указан пол. Повторите ввод (1 – мужчина, 2 – женщина)'));
    }
    switch (gender) {
        case 1: return 'муж';
        case 2: return 'жен';
    }
}

function getYearOfBirth() {
    let year = Number(prompt('Введите год вашего рождения'));
    while (year < 1917 || year > 2017 || isNaN(year)) {
        if (year < 1917) {
            if (confirm(`Вы уверены что вы родились в ${year} году?`)) {
                return year;
            }
            else {
                year = Number(prompt('Введите год вашего рождения'));
            }
        } else if (year > 2017) {
            if (confirm('Вы уверены что вы из будущего?')) {
                return year;
            }  else {
                year = Number(prompt('Введите год вашего рождения'));
            }
        } else {
            year = Number(prompt('Неверно указан год. Повторите ввод'));
        }
    }
    return year;
}

function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        else {
            return true;
        }
    } else {
        return false;
    }
}

function getMonthOfBirth() {
    let month = Number(prompt('Введите число от 1 до 12 для указания месяца вашего рождения, где 1 - январь, 12 - декабрь'));
    while (month < 1 || month > 12 || isNaN(month)) {
        month = Number(prompt('Неверно указан месяц. Повторите ввод (1 – январь ... 12 - декабрь)'));
    }
    switch (month) {
        case 1: return 'января';
        case 2: return 'февраля';
        case 3: return 'марта';
        case 4: return 'апреля';
        case 5: return 'мая';
        case 6: return 'июня';
        case 7: return 'июля';
        case 8: return 'августа';
        case 9: return 'сентября';
        case 10: return 'октября';
        case 11: return 'ноября';
        case 12: return 'декабря';
    }
}

function getDayOfBirth(year, month) {
    let isLeapYear = checkLeapYear(year);
    let day = Number(prompt('Введите день вашего рождения'));
    while (day < 1 ||
    ((month === 'января' || month === 'марта' || month === 'мая' || month === 'июля' || month === 'августа' || month === 'октября' || month === 'декабря') && day > 31) ||
    ((month === 'апреля' || month === 'июня' || month === 'сентября' || month === 'ноября') && day > 30) ||
    ((month === 'февраля' && isLeapYear === true) && day > 29) ||
    ((month === 'февраля' && isLeapYear === false) && day > 28) ||
    isNaN(day)) {
        day = Number(prompt(`День указан неверно. Не существует ${day} ${month} ${year} года. Повторите ввод`));
    }
    return day;
}

function getCityType() {
    let type = Number(prompt('Укажите тип населённого пункта: 1 – город, 2 – село, 3 - деревня'));
    while (type < 1 || type > 3 || isNaN(type)) {
        type = Number(prompt('Неверно указан тип населённого пункта. Повторите ввод (1 – город, 2 – село, 3 - деревня)'));
    }
    switch (type) {
        case 1: return 'г.';
        case 2: return 'с.';
        case 3: return 'д.';
    }
}

function getStreetType() {
    let type = Number(prompt('Укажите тип улицы: 1 – бульвар, 2 – переулок, 3 - проезд, 4 - улица, 5 - проспект'));
    while (type < 1 || type > 5 || isNaN(type)) {
        type = Number(prompt('Неверно указан тип населённого пункта. Повторите ввод (1 – бульвар, 2 – переулок, 3 - проезд, 4 - улица, 5 - проспект)'));
    }
    switch (type) {
        case 1: return 'бул.';
        case 2: return 'пер.';
        case 3: return 'пр.';
        case 4: return 'ул.';
        case 5: return 'просп.';
    }
}

function definePensionStatus(gender, age) {
    return (gender === 'муж' &&  age >= 60) || (gender === 'жен' && age >= 55) ? 'Да' : 'Нет';
}


function gatherAndDisplayInfo() {
    let lastName = getResponse('Введите вашу фамилию'),
        firstName = getResponse('Введите ваше имя'),
        patronym = getResponse('Введите ваше отчество'),
        gender = getGender(),
        yearOfBirth = getYearOfBirth(),
        monthOfBirth = getMonthOfBirth(),
        dayOfBirth = getDayOfBirth(yearOfBirth, monthOfBirth),
        age = 2017 - yearOfBirth,
        country = getResponse('Введите страну вашего проживания'),
        cityType = getCityType(),
        city = getResponse('Введите название населенного пункта, где вы проживаете'),
        streetType = getStreetType(),
        street = getResponse('Введите улицу'),
        house = getResponse('Введите номер дома'),
        pensionStatus = definePensionStatus(gender, age);

    alert(`
            ФИО: ${lastName} ${firstName} ${patronym}
            Дата рождения: ${dayOfBirth} ${monthOfBirth} ${yearOfBirth}
            Пол: ${gender}
            Адрес: ${country}, ${cityType} ${city}, ${streetType} ${street}, д. ${house}
            На пенсии: ${pensionStatus}
          `);
}

gatherAndDisplayInfo();
