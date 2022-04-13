const container = document.querySelector('.container');
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = async (url) => {
  // const response = await fetch(url);
  // const data = await response.json();

  // requested api currently having cors issue, dummy-data is a timed solution
  console.warn(
    'requested api currently having cors issue, dummy-data is a timed solution'
  );
  const data = {
    Date: '2022-04-13T11:30:00+03:00',
    PreviousDate: '2022-04-12T11:30:00+03:00',
    PreviousURL: '//www.cbr-xml-daily.ru/archive/2022/04/12/daily_json.js',
    Timestamp: '2022-04-12T23:00:00+03:00',
    Valute: {
      AUD: {
        ID: 'R01010',
        NumCode: '036',
        CharCode: 'AUD',
        Nominal: 1,
        Name: 'Австралийский доллар',
        Value: 59.187,
        Previous: 58.9581,
      },
      AZN: {
        ID: 'R01020A',
        NumCode: '944',
        CharCode: 'AZN',
        Nominal: 1,
        Name: 'Азербайджанский манат',
        Value: 46.8396,
        Previous: 46.5645,
      },
      GBP: {
        ID: 'R01035',
        NumCode: '826',
        CharCode: 'GBP',
        Nominal: 1,
        Name: 'Фунт стерлингов Соединенного королевства',
        Value: 103.8421,
        Previous: 102.9629,
      },
      AMD: {
        ID: 'R01060',
        NumCode: '051',
        CharCode: 'AMD',
        Nominal: 100,
        Name: 'Армянских драмов',
        Value: 16.8299,
        Previous: 16.6708,
      },
      BYN: {
        ID: 'R01090B',
        NumCode: '933',
        CharCode: 'BYN',
        Nominal: 1,
        Name: 'Белорусский рубль',
        Value: 28.1369,
        Previous: 28.029,
      },
      BGN: {
        ID: 'R01100',
        NumCode: '975',
        CharCode: 'BGN',
        Nominal: 1,
        Name: 'Болгарский лев',
        Value: 44.378,
        Previous: 43.958,
      },
      BRL: {
        ID: 'R01115',
        NumCode: '986',
        CharCode: 'BRL',
        Nominal: 1,
        Name: 'Бразильский реал',
        Value: 16.9341,
        Previous: 16.6617,
      },
      HUF: {
        ID: 'R01135',
        NumCode: '348',
        CharCode: 'HUF',
        Nominal: 100,
        Name: 'Венгерских форинтов',
        Value: 22.8421,
        Previous: 22.7235,
      },
      HKD: {
        ID: 'R01200',
        NumCode: '344',
        CharCode: 'HKD',
        Nominal: 1,
        Name: 'Гонконгский доллар',
        Value: 10.1799,
        Previous: 10.1175,
      },
      DKK: {
        ID: 'R01215',
        NumCode: '208',
        CharCode: 'DKK',
        Nominal: 1,
        Name: 'Датская крона',
        Value: 11.6698,
        Previous: 11.5602,
      },
      USD: {
        ID: 'R01235',
        NumCode: '840',
        CharCode: 'USD',
        Nominal: 1,
        Name: 'Доллар США',
        Value: 79.6274,
        Previous: 79.1596,
      },
      EUR: {
        ID: 'R01239',
        NumCode: '978',
        CharCode: 'EUR',
        Nominal: 1,
        Name: 'Евро',
        Value: 86.7939,
        Previous: 85.9752,
      },
      INR: {
        ID: 'R01270',
        NumCode: '356',
        CharCode: 'INR',
        Nominal: 10,
        Name: 'Индийских рупий',
        Value: 10.5621,
        Previous: 10.4769,
      },
      KZT: {
        ID: 'R01335',
        NumCode: '398',
        CharCode: 'KZT',
        Nominal: 100,
        Name: 'Казахстанских тенге',
        Value: 17.7135,
        Previous: 17.7134,
      },
      CAD: {
        ID: 'R01350',
        NumCode: '124',
        CharCode: 'CAD',
        Nominal: 1,
        Name: 'Канадский доллар',
        Value: 63.0912,
        Previous: 62.88,
      },
      KGS: {
        ID: 'R01370',
        NumCode: '417',
        CharCode: 'KGS',
        Nominal: 100,
        Name: 'Киргизских сомов',
        Value: 92.5685,
        Previous: 91.8935,
      },
      CNY: {
        ID: 'R01375',
        NumCode: '156',
        CharCode: 'CNY',
        Nominal: 1,
        Name: 'Китайский юань',
        Value: 12.5043,
        Previous: 12.4234,
      },
      MDL: {
        ID: 'R01500',
        NumCode: '498',
        CharCode: 'MDL',
        Nominal: 10,
        Name: 'Молдавских леев',
        Value: 43.2438,
        Previous: 43.0313,
      },
      NOK: {
        ID: 'R01535',
        NumCode: '578',
        CharCode: 'NOK',
        Nominal: 10,
        Name: 'Норвежских крон',
        Value: 90.9051,
        Previous: 90.4237,
      },
      PLN: {
        ID: 'R01565',
        NumCode: '985',
        CharCode: 'PLN',
        Nominal: 1,
        Name: 'Польский злотый',
        Value: 18.6446,
        Previous: 18.5394,
      },
      RON: {
        ID: 'R01585F',
        NumCode: '946',
        CharCode: 'RON',
        Nominal: 1,
        Name: 'Румынский лей',
        Value: 17.5136,
        Previous: 17.5016,
      },
      XDR: {
        ID: 'R01589',
        NumCode: '960',
        CharCode: 'XDR',
        Nominal: 1,
        Name: 'СДР (специальные права заимствования)',
        Value: 108.9996,
        Previous: 108.5444,
      },
      SGD: {
        ID: 'R01625',
        NumCode: '702',
        CharCode: 'SGD',
        Nominal: 1,
        Name: 'Сингапурский доллар',
        Value: 58.3223,
        Previous: 57.9584,
      },
      TJS: {
        ID: 'R01670',
        NumCode: '972',
        CharCode: 'TJS',
        Nominal: 10,
        Name: 'Таджикских сомони',
        Value: 63.7019,
        Previous: 63.3277,
      },
      TRY: {
        ID: 'R01700J',
        NumCode: '949',
        CharCode: 'TRY',
        Nominal: 10,
        Name: 'Турецких лир',
        Value: 54.255,
        Previous: 53.7426,
      },
      TMT: {
        ID: 'R01710A',
        NumCode: '934',
        CharCode: 'TMT',
        Nominal: 1,
        Name: 'Новый туркменский манат',
        Value: 22.7507,
        Previous: 22.617,
      },
      UZS: {
        ID: 'R01717',
        NumCode: '860',
        CharCode: 'UZS',
        Nominal: 10000,
        Name: 'Узбекских сумов',
        Value: 70.284,
        Previous: 69.7768,
      },
      UAH: {
        ID: 'R01720',
        NumCode: '980',
        CharCode: 'UAH',
        Nominal: 10,
        Name: 'Украинских гривен',
        Value: 26.9589,
        Previous: 26.8574,
      },
      CZK: {
        ID: 'R01760',
        NumCode: '203',
        CharCode: 'CZK',
        Nominal: 10,
        Name: 'Чешских крон',
        Value: 35.3664,
        Previous: 35.3123,
      },
      SEK: {
        ID: 'R01770',
        NumCode: '752',
        CharCode: 'SEK',
        Nominal: 10,
        Name: 'Шведских крон',
        Value: 83.6396,
        Previous: 83.8022,
      },
      CHF: {
        ID: 'R01775',
        NumCode: '756',
        CharCode: 'CHF',
        Nominal: 1,
        Name: 'Швейцарский франк',
        Value: 85.3456,
        Previous: 84.6989,
      },
      ZAR: {
        ID: 'R01810',
        NumCode: '710',
        CharCode: 'ZAR',
        Nominal: 10,
        Name: 'Южноафриканских рэндов',
        Value: 54.7177,
        Previous: 54.1336,
      },
      KRW: {
        ID: 'R01815',
        NumCode: '410',
        CharCode: 'KRW',
        Nominal: 1000,
        Name: 'Вон Республики Корея',
        Value: 64.413,
        Previous: 64.1956,
      },
      JPY: {
        ID: 'R01820',
        NumCode: '392',
        CharCode: 'JPY',
        Nominal: 100,
        Name: 'Японских иен',
        Value: 63.433,
        Previous: 63.3277,
      },
    },
  };
  return data;
};

const getOldUrl = (data) => {
  return 'https:' + data.PreviousURL;
};

/* getting data for past 10 days */
const getDataFewDays = async (data, days) => {
  const oldUrlArr = [];
  const oldDataArr = [];
  let oldUrl = getOldUrl(data);
  oldUrlArr.push(oldUrl);
  for (let i = days; i > 0; i--) {
    const oldData = await getData(oldUrl);
    oldDataArr.push(oldData);
    oldUrl = getOldUrl(oldData);
    oldUrlArr.push(oldUrl);
  }
  return createChildElement(oldDataArr);
};

getData(url)
  .then((res) => {
    createElement(res);
    /* custom length */
    getDataFewDays(res, (days = 10));
  })
  .catch((err) => console.error(err));

/* element for current rate */
const createElement = (data) => {
  const valute = data.Valute;
  const getGrowth = (a, b) => {
    const compare =
      a > b ? '+' + ((a - b) / 100).toFixed(3) + '%' : ((a - b) / 100).toFixed(3) + '%';
    return compare;
  };
  for (let el in valute) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute('data-tooltip', `${valute[el].Name}`);
    item.innerHTML = `
        <div class="item__head">
        <span class="item__code">${valute[el].CharCode}</span>
        <span class="item__toRUB">${(valute[el].Value / valute[el].Nominal).toFixed(
          2
        )}&nbsp;RUB</span>
        <span class="item__percentDiff ${
          valute[el].Previous - valute[el].Value > 0 ? 'green' : 'red'
        }">${getGrowth(valute[el].Previous, valute[el].Value)}</span>
        </div>
        <div class="item__body" id="${valute[el].CharCode}" data-code:${
      valute[el].CharCode
    }></div>
    `;
    container.appendChild(item);
  }
};

/* child-element for previous rates */
const createChildElement = (dataArr) => {
  dataArr.forEach((el) => {
    const keys = Object.keys(el.Valute);
    for (let i = 0; i < keys.length; i++) {
      const parent = document.getElementById(el.Valute[keys[i]].CharCode);
      const item = document.createElement('div');
      item.classList.add('item__child');
      item.innerHTML = `
          <span>${el.Date}</span>
          <span>${(el.Valute[keys[i]].Value / el.Valute[keys[i]].Nominal).toFixed(
            2
          )}&nbsp;RUB</span>
      `;
      parent.append(item);
    }
  });
};

/* listeners */
const addListeners = () => {
  container.addEventListener('click', (e) => {
    const element = e.target.closest('.item');
    if (element) {
      element.classList.toggle('active');
    } else {
      return null;
    }
  });
};
addListeners();
