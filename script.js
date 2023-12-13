console.log('Hello!');

const cardSummary = document.querySelector('.card__summary');

// Fetching a JSON file
fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const summaryItem = document.createElement('div');
      summaryItem.classList.add(
        'summary__item',
        `bg-${item.color}/5`,
        'flex',
        'items-center',
        'justify-between',
        'p-4',
        'rounded-xl'
      );

      const itemLeft = document.createElement('div');
      itemLeft.classList.add('item__left', 'flex', 'gap-3');

      const itemIcon = document.createElement('img');
      itemIcon.classList.add('item__icon');
      itemIcon.setAttribute('src', `assets/images/icon-${item.category}.svg`);

      const itemTitle = document.createElement('h3');
      itemTitle.classList.add(
        'item__title',
        `text-${item.color}`,
        'md:text-lg'
      );
      itemTitle.textContent = `${item.category}`;

      itemLeft.append(itemIcon, itemTitle);

      const itemRight = document.createElement('div');
      itemRight.classList.add('item__right', 'flex', 'gap-3');

      const itemResult = document.createElement('p');
      itemResult.classList.add('item__result');
      itemResult.innerHTML = `${item.score} <span class="opacity-50 pl-2">/ 100</span>`;

      itemRight.append(itemResult);

      summaryItem.append(itemLeft, itemRight);

      cardSummary.append(summaryItem);

      //     <div class="item__right flex gap-3">
      //       <p class="item__result">
      //         80 <span class="opacity-50 pl-2">/ 100</span>
      //       </p>
      //     </div>
      //   </div>
      //   console.log(item);
      //   const innerDivLeft = document.createElement('div');
      //   innerDivLeft.classList.add(`bg-${item.color}/5`);
      //   innerDivLeft.classList.add('flex');
      //   innerDivLeft.classList.add('gap-4');
      //   const img = document.createElement('img');
      //   const p = document.createElement('p');
      //   p.classList.add(`text-${item.color}`);
      //   img.setAttribute('src', `${item.icon}`);
      //   p.textContent = `${item.category}`;
      //   innerDivLeft.appendChild(img);
      //   innerDivLeft.appendChild(p);
      //   cardSummary.append(innerDivLeft);
    });
    // appendButton();
  });

function appendButton() {
  const cardBtn = document.createElement('button');
  cardBtn.classList.add(
    'card__btn',
    'bg-dark-gray-blue',
    'hover:bg-gradient-to-b',
    'hover:from-light-slate-blue',
    'hover:to-light-roayl-blue',
    'text-white',
    'py-3',
    'px-28',
    'rounded-full'
  );

  const btnText = document.createElement('p');
  btnText.classList.add('btn__text', 'text-lg');
  btnText.textContent = 'Continue';

  cardBtn.append(btnText);

  cardSummary.append(cardBtn);
}

{
  /* <button
          class="card__btn bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue text-white py-3 px-32 rounded-full"
        >
          <p class="text-lg">Continue</p>
        </button> */
}

// async function getData() {
//   const requestData = new
// }

//   append(param1, param2)
// div.classList.add('foo', 'bar');   // add multiple classes
//     <div
//     class="summary__item bg-light-red/5 flex items-center justify-between p-3 rounded-xl"
//   >
//     <div class="item__left flex gap-3">
//       <img
//         class="item__icon"
//         src="assets/images/icon-reaction.svg"
//         alt=""
//       />
//       <h3 class="item__title text-light-red">Reaction</h3>
//     </div>
