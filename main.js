const container = document.querySelector('.container');
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getOldUrl = (data) => {
  return 'https:' + data.PreviousURL;
};

/* getting data for past 10 days */
const getDataFewDays = async (data, days) => {
  let oldUrlArr = [];
  let oldDataArr = [];
  let oldUrl = getOldUrl(data);
  oldUrlArr.push(oldUrl);
  for (let i = days; i > 0; i--) {
    let oldData = await getData(oldUrl);
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
    let element = e.target.closest('.item');
    if (element) {
      element.classList.toggle('active');
    } else {
      return null;
    }
  });
};
addListeners();
