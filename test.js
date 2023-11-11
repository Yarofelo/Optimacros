//Подключение ранее установленной библиотеки Puppeteer
const puppeteer = require('puppeteer');

async function getPic() {
    const browser = await puppeteer.launch({headless: false});
//Установка параметра headless: false для визуализации работы кода
    const page = await browser.newPage();

    page.setViewport
    ({width: 1800, height: 900})
//Установка параметров открытия браузера в окне размером 1800 на 900
    await page.goto('https://google.com');
//Переход на сайт google.com
    (await page.waitForSelector('#APjFqb')).click();
//Работа с селектором поисковой строки
    await page.waitForTimeout(2000);
//Добавил задержки для визуализации
    await page.keyboard.type('qa engineering');
//Ввод текста "qa engineering" в поисковую строку
    (await page.waitForSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > ' +
        'div.A8SBwf.emcav > div.UUbT9.EyBRub > div.aajZCb > div.lJ9FBc > center > input.gNO89b')).click();
//Работа с селектором кнопки "Поиск в Google"
    await page.waitForTimeout(2000);
//Добавил задержку для прогрузки результатов поиска
    await page.screenshot({path: 'screen.png'});
//Делаем скриншот

    await browser.close();
}

getPic();