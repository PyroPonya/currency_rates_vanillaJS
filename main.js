const container = document.querySelector('.container');
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = async (url) => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};

getData(url).then((res) => {
  createElement(res);
});

const createElement = (data) => {
  const prevDataUrl = 'https:' + data.PreviousURL;
  console.log(data);
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
    item.setAttribute('data-code', `${valute[el].CharCode}`);
    item.innerHTML = `
        <div class="item__head">
        <span class="item__code">${valute[el].CharCode}</span>
        <span class="item__toRUB">${valute[el].Value}</span>
        <span class="item__percentDiff ${
          valute[el].Previous - valute[el].Value > 0 ? 'green' : 'red'
        }">${getGrowth(valute[el].Previous, valute[el].Value)}</span>
        </div>
        <div class="item__body" data-code:${valute[el].CharCode}></div>
    `;
    container.appendChild(item);
  }
};

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
