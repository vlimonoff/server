const person = {
    name: "ROBERT STONe",
    level: 1,
    currentValue: 5,
    maxValue: 8,
    image: "/img/pngwing.png",
    stats: [
        {
            name: "Дата создания",
            content: "23.09.2020"
        },
        {
            name: "Телефон",
            content: "255671"
        },
        {
            name: "Общий онлайн",
            content: "2 ч 32 м"
        },
        {
            name: "Организация",
            content: "Отсутствует"
        },
        {
            name: "Должность",
            content: "Отсутствует"
        },
        {
            name: "Работа",
            content: "Дизайнер"
        },
        {
            name: "Наличные средства",
            content: "23 000$"
        },
        {
            name: "На счету в банке",
            content: "0$"
        }
    ],
    skills: [
        {
            name: "Шахтёр",
            level: 1,
            currentValue: 5,
            maxValue: 10
        },
        {
            name: "Дизайнер",
            level: 1,
            currentValue: 14,
            maxValue: 15
        },
        {
            name: "Дальнобойщик",
            level: 1,
            currentValue: 50,
            maxValue: 90
        },
        {
            name: "Строитель",
            level: 1,
            currentValue: 40,
            maxValue: 80
        },
        {
            name: "Фермер",
            level: 1,
            currentValue: 20,
            maxValue: 22
        },
        {
            name: "Почтальон",
            level: 1,
            currentValue: 15,
            maxValue: 15
        },
        {
            name: "Сборщик оружия",
            level: 1,
            currentValue: 5,
            maxValue: 8
        },
        {
            name: "Стример",
            level: 1,
            currentValue: 5,
            maxValue: 8
        },
        {
            name: "Разработчик",
            level: 1,
            currentValue: 5,
            maxValue: 8
        },
        {
            name: "Музыкант",
            level: 1,
            currentValue: 5,
            maxValue: 8
        }
    ],
    cards: [
        {
            name: "Компания",
            icon: "menu-tie",
            image: "menu-tie",
            backgroundImage: "menu-bg-tie",
            message: "Вы не состоите в компании",
            items: [
                {
                    type: "base",
                    name: "Компания",
                    value: "FireFerrets Company"
                },
                {
                    type: "base",
                    name: "Ранг",
                    value: "Директор"
                },
                {
                    type: "online",
                    name: "В сети",
                    currentValue: 12,
                    maxValue: 15
                }
            ]
        },
        {
            name: "Фракция",
            icon: "menu-briefcase",
            image: "menu-briefcase",
            backgroundImage: "menu-bg-briefcase",
            message: "Вы не состоите во фракции",
            items: [
                {
                    type: "base",
                    name: "Организация",
                    value: "Los Santos County Sheriff Department"
                },
                {
                    type: "base",
                    name: "Ранг",
                    value: "Sheriff"
                },
                {
                    type: "online",
                    name: "В сети",
                    currentValue: 3,
                    maxValue: 14
                }
            ]
        },
        {
            name: "Семья",
            icon: "menu-users",
            image: "menu-users",
            backgroundImage: "menu-bg-users",
            message: "Вы не состоите в семье",
            items: [
                {
                    type: "base",
                    name: "Семья",
                    value: "FireFerrets Family"
                },
                {
                    type: "base",
                    name: "Ранг",
                    value: "Верховный Главнокомандующий Армией"
                },
                {
                    type: "online",
                    name: "В сети",
                    currentValue: 3,
                    maxValue: 14
                }
            ]
        },
        {
            name: "Имущество",
            icon: "menu-house",
            image: "menu-house",
            backgroundImage: "menu-bg-house",
            message: "У вас нет имущества",
            items: [
                {
                    type: "base",
                    name: "Автомобили",
                    value: "Mercedes Benz     BMW i8     Audi RS 7     и 2 других "
                },
                {
                    type: "base",
                    name: "Недвижимость",
                    value: "Дом №123"
                },
                {
                    type: "base",
                    name: "Бизнес",
                    value: "Los Santos Customs #4"
                }
            ]
        },
        {
            name: "Квесты",
            icon: "menu-verified",
            image: "menu-verified",
            backgroundImage: "menu-bg-verified",
            message: "Нет сюжетных линий, доступных для прохождения",
            items: [
                {
                    type: "base",
                    name: "Сюжетная линия",
                    value: "Культ Тьмы"
                },
                {
                    type: "base",
                    name: "Текущее задание",
                    value: "Раздобыть 20 магических тыкв"
                },
                {
                    type: "progress",
                    currentValue: 3,
                    maxValue: 14
                }
            ]
        },
        {
            name: "Донат",
            icon: "menu-gift",
            image: "menu-gift",
            backgroundImage: "menu-bg-gift",
            message: "",
            items: [
                {
                    type: "balance",
                    name: "Баланс",
                    value: "253"
                },
                {
                    type: "advantage",
                    name: "VIP статус",
                    endDate: "24.12.2020"
                }
            ]
        },
    ]
};

//
// http://easings.net/#easeInOutQuart
//  t: current time
//  b: beginning value
//  c: change in value
//  d: duration
//
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
// Функция парсит объект из переменной person и рендерит на его основе элементы интерфейса
const windowRender = (person, selector) => {
    // ~~> Подготовка шаблонов
    // ~> Создаем элементы статистики персонажа
    const stats = person.stats.map(stat => {
        return `
        <div class="menu-info__item">
            <span class="menu-info__item-name"> ${stat.name}</span>
            <span class="menu-info__item-value"> ${stat.content}</span>
        </div>
    `;
    }).join("");
    // ~> Создаем элементы навыков персонажа
    const skills = person.skills.map(skill => {
        return `
        <div class="menu-info__skill">
            <div class="menu-info__skill-name">${skill.name}</div>
            <div class="menu-info__skill-level">
                <p class="menu-info__level-name"> Уровень ${skill.level}</p>
                <div class="menu-info__level-progress js-animate-counter" data-value="${skill.currentValue}" data-max-value=${skill.maxValue}>
                    <div class="menu-info__level-progress-bar"></div>
                </div>
                <p class="menu-info__level-exp" data-value="${skill.currentValue}" data-max-value="${skill.maxValue}"> 0/${skill.maxValue} exp</p>
            </div>
        </div>     
    `;
    }).join("");
    // ~> Создаем карточки с информацией
    const cards = person.cards.map(card => {
        return `
            <div class="menu-card js-hover-card">
                <div class="menu-card__front">
                    <p class="menu-card__name">
                        <svg class="menu-card__icon">
                            <use xlink:href="img/sprites/sprite.svg#${card["icon"]}"></use>
                        </svg>
                        <span>${card["name"]}</span>
                    </p>
                </div>
                <div class="menu-card__back" data-image="${card["backgroundImage"]}">
                    <p class="menu-card__name">
                        <svg class="menu-card__icon">
                             <use xlink:href="img/sprites/sprite.svg#${card["icon"]}"></use>
                        </svg>
                        <span>${card["name"]}</span> 
                    </p>
                    <div class="menu-card__data">
                        <div class="menu-card__items">
                            ${renderCardItem(card)}
                        </div>
                    </div>
                    <div class="menu-card__picture">
                        <img class="menu-card__image" src="/img/${card["image"]}.png">
                    </div>
                </div>
            </div>
    `;
    }).join("");

    // ~> Функция проверяет массив с элементами в карточке.
    function renderCardItem(card) {
        if (!card["items"].length) {
            // если массив пуст то вернет сообщение из message
            return `<div class="menu-card__item menu-card__item--message">
                        <div class="menu-card__value">${card["message"]}</div> 
                    </div>`;
        } else {
            // если не пуст, то вернет айтемы для карточки
            const items = card["items"].map(item => {
                return `<div class="menu-card__item menu-card__item--${item["type"]}">
                    ${typeCardItem(item)}
                </div>`;
            }).join("");
            return items;
        }
    }

    // ~> Функция подготавливает айтем согласно его типу.
    function typeCardItem(item) {
        if (item.type === "base") {
            return `<div class="menu-card__name">${item.name}</div><div class="menu-card__value">${item.value}</div>`;
        } else if (item.type === "online") {
            return `<div class="menu-card__name">${item.name}</div>
            <div class="menu-card__value">
                <span class="menu-card__current" data-value="${item.currentValue}">0</span>
                <span class="menu-card__separator">/</span>
                <span class="menu-card__max">${item.maxValue}</span>
            </div>`;
        } else if (item.type === "progress") {
            return `<div class="menu-card__counter" data-cp-percentage=${Math.round((item.currentValue / item.maxValue) * 100)}></div>
                <div class="menu-card__value">
                    <span class="menu-card__current" data-value="${item.currentValue}">0</span>
                    <span class="menu-card__separator">/</span>
                    <span class="menu-card__max">${item.maxValue}</span>
                </div>`;
        } else if (item.type === "balance") {
            return `<div class="menu-card__name">${item.name}</div>
                <div class="menu-card__balance">
                    <svg class="menu-card__icon">
                        <use xlink:href="img/sprites/sprite.svg#menu-mc-icon"></use>
                    </svg>
                    <span class="menu-card__coin" data-value="${item.value}">0</span>
                </div>`;
        } else if (item.type === "advantage") {
            return `<div class="menu-card__name">${item.name}</div>
                <div class="menu-card__advantage">
                    <span class="menu-card__indicator"></span>
                    <span class="menu-card__status">активен</span>
                    <span class="menu-card__date">до ${item.endDate}</span>
                </div>`;
        }
    }

    // ~> Склеиваем весь экран
    const template = `
       <div class="main-menu">
        <div class="main-menu__container">
          <div class="main-menu__header">
            <div class="menu-header">
              <div class="menu-header__container">
                <button class="menu-header__button">
                  <svg class="menu-header__icon">
                    <use xlink:href="img/sprites/sprite.svg#menu-help"></use>
                  </svg><span>Помощь</span>
                </button>
                <button class="menu-header__button">
                  <svg class="menu-header__icon">
                    <use xlink:href="img/sprites/sprite.svg#menu-gear"></use>
                  </svg><span>Настройки</span>
                </button>
              </div>
            </div>
          </div>
          <div class="main-menu__body">
            <div class="main-menu__info">
              <div class="menu-info">
                <div class="menu-info__person"><img class="menu-info__image" src="${person.image}"></div>
                <div class="menu-info__content">
                  <p class="menu-info__title">${person.name}</p>
                  <div class="menu-info__stat-frame">
                    <p class="menu-info__stat-name">статистика персонажа</p>
                    <div class="menu-info__level">
                      <p class="menu-info__level-name">Уровень ${person.level}</p>
                      <div class="menu-info__level-progress js-animate-counter" data-value="${person.currentValue}" data-max-value=${person.maxValue}>
                        <div class="menu-info__level-progress-bar"></div>
                      </div>
                      <p class="menu-info__level-exp" data-value="${person.currentValue}" data-max-value="${person.maxValue}">0/${person.maxValue} exp</p>
                    </div>
                    <div class="menu-info__data">
                      <div class="menu-info__stats">
                        ${stats}
                      </div>
                    </div>
                  </div>
                  <div class="menu-info__skill-frame">
                    <p class="menu-info__stat-name">навыки персонажа</p>
                    <div class="menu-info__data">
                      <div class="menu-info__skills">
                        ${skills}
                      </div>
                    </div>
                  </div>
                  <button class="menu-info__button js-main-menu-toggle">Навыки</button>
                </div>
              </div>
            </div>
            <div class="main-menu__cards">
                ${cards}
            </div>
          </div>
        </div>
      </div>
`;

    const main = document.querySelector(selector);
    if (main) {
        // Рендерим экран
        main.insertAdjacentHTML("beforeend", template);
    }
};

// Функция выполняет роль обработчика анимации для круглого прогресс бара
const circleProgress = selector => {
    let wrapper = document.querySelectorAll(selector);
    Array.prototype.forEach.call(wrapper, function (wrapper, i) {
        let wrapperWidth,
            wrapperHeight,
            percent,
            innerHTML,
            context,
            lineWidth,
            centerX,
            centerY,
            radius,
            newPercent,
            speed,
            from,
            to,
            duration,
            start,
            strokeStyle,
            text;

        let getValues = function () {
            wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
            wrapperHeight = wrapperWidth;
            percent = wrapper.getAttribute("data-cp-percentage");
            innerHTML = "<span class=\"menu-card__percentage\"><strong>" + percent + "</strong> %</span><canvas class=\"menu-card__circleProgressCanvas\" width=\"" + (wrapperWidth * 2) + "\" height=\"" + wrapperHeight * 2 + "\"></canvas>";
            wrapper.innerHTML = innerHTML;
            text = wrapper.querySelector(".menu-card__percentage");
            canvas = wrapper.querySelector(".menu-card__circleProgressCanvas");
            wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
            context = canvas.getContext("2d");
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            newPercent = 0;
            speed = 1;
            from = 0;
            to = percent;
            duration = 1500;
            lineWidth = 4;
            radius = canvas.width / 2 - lineWidth;
            strokeStyle = "#0094FF";
            start = new Date().getTime();
        };

        function animate() {
            requestAnimationFrame(animate);
            let time = new Date().getTime() - start;
            if (time <= duration) {
                let x = easeInOutQuart(time, from, to - from, duration);
                newPercent = x;
                text.innerHTML = Math.round(newPercent) + " %";
                drawArc();
            }
        }

        function drawArc() {
            let circleStart = 1.5 * Math.PI;
            let circleEnd = circleStart + (newPercent / 50) * Math.PI;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
            context.lineWidth = lineWidth;
            context.strokeStyle = "rgba(0, 148, 255, 0.15)";
            context.stroke();
            context.beginPath();
            context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
            context.lineWidth = lineWidth;
            context.strokeStyle = strokeStyle;
            context.stroke();

        }

        let update = function () {
            getValues();
            animate();
        };
        update();

        let resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                clearTimeout(resizeTimer);
                start = new Date().getTime();
                update();
            }, 250);
        });
    });

};

// Хендлер анимаций
const animateHandler = (elements, type) => {
    elements.forEach(element => {
        // Дефолтные значения
        let start = new Date().getTime();
        let duration = 1000;
        let from = 0;
        let newPercent = 0;
        let to = 0;
        switch (type) {
        case "bar":
            to = Math.round((element.dataset.value / element.dataset.maxValue) * 100);
            break;
        case "menu":
            to = 100;
            break;
        case "front":
        case "picture":
        case "back":
            duration = 500;
            to = 100;
            break;
        default:
            to = element.dataset.value;
        }

        function progressAnimate() {
            requestAnimationFrame(progressAnimate);
            let time = new Date().getTime() - start;
            if (time <= duration) {
                let x = easeInOutQuart(time, from, to - from, duration);
                newPercent = x;
                switch (type) {
                case "bar":
                    element.querySelector(".menu-info__level-progress-bar").style = `width: ${Math.round(newPercent)}%`;
                    break;
                case "exp":
                    element.innerHTML = `${Math.round(newPercent)}/${element.dataset.maxValue} exp`;
                    break;
                case "front":
                case "menu":
                    element.style = `opacity: ${newPercent / 100}`;
                    break;
                case "back":
                    element.style = `opacity: ${newPercent / 100}; background: radial-gradient(143.8% 75.34% at 50% 50%, rgba(0, 42, 122, 0.65) 0%, rgba(0, 117, 255, 0.65) 100%), url("/img/${element.dataset.image}.png"); background-repeat: no-repeat; background-size: ${200 - newPercent}%;`;
                    break;
                case "picture":
                    element.style = `margin-right: -${newPercent / 100}rem`;
                    break;
                default:
                    element.innerHTML = Math.round(newPercent);
                }
            }
        }

        progressAnimate();
    });
};

// Распределитель анимаций
const animateDistributor = arr => {
    arr.forEach(item => {
        const elements = document.querySelectorAll(item[0]);
        animateHandler(elements, item[1]);
    });
};

// Переключает состояния информации в меню
const menuToggle = selector => {
    const item = document.querySelector(selector);
    item.addEventListener("click", () => {
        const infoContent = document.querySelector(".menu-info__content");
        if (item.textContent === "Навыки") {
            item.innerHTML = "Статистика";
            infoContent.classList.add("menu-info__content--stats");
            animateDistributor([
                [".menu-info__skill-frame", "menu"],
                [".menu-info__level-progress", "bar"],
                [".menu-info__level-exp", "exp"],
            ]);
        } else {
            item.innerHTML = "Навыки";
            infoContent.classList.remove("menu-info__content--stats");
            animateDistributor([
                [".menu-info__stat-frame", "menu"],
                [".menu-info__level-progress", "bar"],
                [".menu-info__level-exp", "exp"],
            ]);

        }
    });
};

// Переключает состояния карточек
const cardToggle = selector => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
        card.addEventListener("mouseleave", e => {
            animateHandler(card.querySelectorAll(".menu-card__front"), "front");
        });
        card.addEventListener("mouseenter", e => {
            animateHandler(card.querySelectorAll(".menu-card__back"), "back");
            animateHandler(card.querySelectorAll(".menu-card__current"), "number");
            animateHandler(card.querySelectorAll(".menu-card__coin"), "coin");
            animateHandler(card.querySelectorAll(".menu-card__picture"), "picture");
            circleProgress(".menu-card__counter");
        });
    });
};


// Рендерим экран и добавляем обработку анимаций
windowRender(person, "#main-menu");
animateDistributor([
    [".main-menu__container", "menu"],
    [".menu-info__level-progress", "bar"],
    [".menu-info__level-exp", "exp"],
    [".menu-card__current", "number"],
    [".menu-card__coin", "coin"],
]);
menuToggle(".js-main-menu-toggle");
cardToggle(".js-hover-card");
