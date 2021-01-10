/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/main-menu/main-menu.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main-menu/main-menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var person = {
  name: "ROBERT STONe",
  level: 1,
  currentValue: 5,
  maxValue: 8,
  image: "/img/pngwing.png",
  stats: [{
    name: "Дата создания",
    content: "23.09.2020"
  }, {
    name: "Телефон",
    content: "255671"
  }, {
    name: "Общий онлайн",
    content: "2 ч 32 м"
  }, {
    name: "Организация",
    content: "Отсутствует"
  }, {
    name: "Должность",
    content: "Отсутствует"
  }, {
    name: "Работа",
    content: "Дизайнер"
  }, {
    name: "Наличные средства",
    content: "23 000$"
  }, {
    name: "На счету в банке",
    content: "0$"
  }],
  skills: [{
    name: "Шахтёр",
    level: 1,
    currentValue: 5,
    maxValue: 10
  }, {
    name: "Дизайнер",
    level: 1,
    currentValue: 14,
    maxValue: 15
  }, {
    name: "Дальнобойщик",
    level: 1,
    currentValue: 50,
    maxValue: 90
  }, {
    name: "Строитель",
    level: 1,
    currentValue: 40,
    maxValue: 80
  }, {
    name: "Фермер",
    level: 1,
    currentValue: 20,
    maxValue: 22
  }, {
    name: "Почтальон",
    level: 1,
    currentValue: 15,
    maxValue: 15
  }, {
    name: "Сборщик оружия",
    level: 1,
    currentValue: 5,
    maxValue: 8
  }, {
    name: "Стример",
    level: 1,
    currentValue: 5,
    maxValue: 8
  }, {
    name: "Разработчик",
    level: 1,
    currentValue: 5,
    maxValue: 8
  }, {
    name: "Музыкант",
    level: 1,
    currentValue: 5,
    maxValue: 8
  }],
  cards: [{
    name: "Компания",
    icon: "menu-tie",
    image: "menu-tie",
    backgroundImage: "menu-bg-tie",
    message: "Вы не состоите в компании",
    items: [{
      type: "base",
      name: "Компания",
      value: "FireFerrets Company"
    }, {
      type: "base",
      name: "Ранг",
      value: "Директор"
    }, {
      type: "online",
      name: "В сети",
      currentValue: 12,
      maxValue: 15
    }]
  }, {
    name: "Фракция",
    icon: "menu-briefcase",
    image: "menu-briefcase",
    backgroundImage: "menu-bg-briefcase",
    message: "Вы не состоите во фракции",
    items: [{
      type: "base",
      name: "Организация",
      value: "Los Santos County Sheriff Department"
    }, {
      type: "base",
      name: "Ранг",
      value: "Sheriff"
    }, {
      type: "online",
      name: "В сети",
      currentValue: 3,
      maxValue: 14
    }]
  }, {
    name: "Семья",
    icon: "menu-users",
    image: "menu-users",
    backgroundImage: "menu-bg-users",
    message: "Вы не состоите в семье",
    items: [{
      type: "base",
      name: "Семья",
      value: "FireFerrets Family"
    }, {
      type: "base",
      name: "Ранг",
      value: "Верховный Главнокомандующий Армией"
    }, {
      type: "online",
      name: "В сети",
      currentValue: 3,
      maxValue: 14
    }]
  }, {
    name: "Имущество",
    icon: "menu-house",
    image: "menu-house",
    backgroundImage: "menu-bg-house",
    message: "У вас нет имущества",
    items: [{
      type: "base",
      name: "Автомобили",
      value: "Mercedes Benz     BMW i8     Audi RS 7     и 2 других "
    }, {
      type: "base",
      name: "Недвижимость",
      value: "Дом №123"
    }, {
      type: "base",
      name: "Бизнес",
      value: "Los Santos Customs #4"
    }]
  }, {
    name: "Квесты",
    icon: "menu-verified",
    image: "menu-verified",
    backgroundImage: "menu-bg-verified",
    message: "Нет сюжетных линий, доступных для прохождения",
    items: [{
      type: "base",
      name: "Сюжетная линия",
      value: "Культ Тьмы"
    }, {
      type: "base",
      name: "Текущее задание",
      value: "Раздобыть 20 магических тыкв"
    }, {
      type: "progress",
      currentValue: 3,
      maxValue: 14
    }]
  }, {
    name: "Донат",
    icon: "menu-gift",
    image: "menu-gift",
    backgroundImage: "menu-bg-gift",
    message: "",
    items: [{
      type: "balance",
      name: "Баланс",
      value: "253"
    }, {
      type: "advantage",
      name: "VIP статус",
      endDate: "24.12.2020"
    }]
  }]
}; //
// http://easings.net/#easeInOutQuart
//  t: current time
//  b: beginning value
//  c: change in value
//  d: duration
//

function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
} // Функция парсит объект из переменной person и рендерит на его основе элементы интерфейса


var windowRender = function windowRender(person, selector) {
  // ~~> Подготовка шаблонов
  // ~> Создаем элементы статистики персонажа
  var stats = person.stats.map(function (stat) {
    return "\n        <div class=\"menu-info__item\">\n            <span class=\"menu-info__item-name\"> ".concat(stat.name, "</span>\n            <span class=\"menu-info__item-value\"> ").concat(stat.content, "</span>\n        </div>\n    ");
  }).join(""); // ~> Создаем элементы навыков персонажа

  var skills = person.skills.map(function (skill) {
    return "\n        <div class=\"menu-info__skill\">\n            <div class=\"menu-info__skill-name\">".concat(skill.name, "</div>\n            <div class=\"menu-info__skill-level\">\n                <p class=\"menu-info__level-name\"> \u0423\u0440\u043E\u0432\u0435\u043D\u044C ").concat(skill.level, "</p>\n                <div class=\"menu-info__level-progress js-animate-counter\" data-value=\"").concat(skill.currentValue, "\" data-max-value=").concat(skill.maxValue, ">\n                    <div class=\"menu-info__level-progress-bar\"></div>\n                </div>\n                <p class=\"menu-info__level-exp\" data-value=\"").concat(skill.currentValue, "\" data-max-value=\"").concat(skill.maxValue, "\"> 0/").concat(skill.maxValue, " exp</p>\n            </div>\n        </div>     \n    ");
  }).join(""); // ~> Создаем карточки с информацией

  var cards = person.cards.map(function (card) {
    return "\n            <div class=\"menu-card js-hover-card\">\n                <div class=\"menu-card__front\">\n                    <p class=\"menu-card__name\">\n                        <svg class=\"menu-card__icon\">\n                            <use xlink:href=\"img/sprites/sprite.svg#".concat(card["icon"], "\"></use>\n                        </svg>\n                        <span>").concat(card["name"], "</span>\n                    </p>\n                </div>\n                <div class=\"menu-card__back\" data-image=\"").concat(card["backgroundImage"], "\">\n                    <p class=\"menu-card__name\">\n                        <svg class=\"menu-card__icon\">\n                             <use xlink:href=\"img/sprites/sprite.svg#").concat(card["icon"], "\"></use>\n                        </svg>\n                        <span>").concat(card["name"], "</span> \n                    </p>\n                    <div class=\"menu-card__data\">\n                        <div class=\"menu-card__items\">\n                            ").concat(renderCardItem(card), "\n                        </div>\n                    </div>\n                    <div class=\"menu-card__picture\">\n                        <img class=\"menu-card__image\" src=\"/img/").concat(card["image"], ".png\">\n                    </div>\n                </div>\n            </div>\n    ");
  }).join(""); // ~> Функция проверяет массив с элементами в карточке.

  function renderCardItem(card) {
    if (!card["items"].length) {
      // если массив пуст то вернет сообщение из message
      return "<div class=\"menu-card__item menu-card__item--message\">\n                        <div class=\"menu-card__value\">".concat(card["message"], "</div> \n                    </div>");
    } else {
      // если не пуст, то вернет айтемы для карточки
      var items = card["items"].map(function (item) {
        return "<div class=\"menu-card__item menu-card__item--".concat(item["type"], "\">\n                    ").concat(typeCardItem(item), "\n                </div>");
      }).join("");
      return items;
    }
  } // ~> Функция подготавливает айтем согласно его типу.


  function typeCardItem(item) {
    if (item.type === "base") {
      return "<div class=\"menu-card__name\">".concat(item.name, "</div><div class=\"menu-card__value\">").concat(item.value, "</div>");
    } else if (item.type === "online") {
      return "<div class=\"menu-card__name\">".concat(item.name, "</div>\n            <div class=\"menu-card__value\">\n                <span class=\"menu-card__current\" data-value=\"").concat(item.currentValue, "\">0</span>\n                <span class=\"menu-card__separator\">/</span>\n                <span class=\"menu-card__max\">").concat(item.maxValue, "</span>\n            </div>");
    } else if (item.type === "progress") {
      return "<div class=\"menu-card__counter\" data-cp-percentage=".concat(Math.round(item.currentValue / item.maxValue * 100), "></div>\n                <div class=\"menu-card__value\">\n                    <span class=\"menu-card__current\" data-value=\"").concat(item.currentValue, "\">0</span>\n                    <span class=\"menu-card__separator\">/</span>\n                    <span class=\"menu-card__max\">").concat(item.maxValue, "</span>\n                </div>");
    } else if (item.type === "balance") {
      return "<div class=\"menu-card__name\">".concat(item.name, "</div>\n                <div class=\"menu-card__balance\">\n                    <svg class=\"menu-card__icon\">\n                        <use xlink:href=\"img/sprites/sprite.svg#menu-mc-icon\"></use>\n                    </svg>\n                    <span class=\"menu-card__coin\" data-value=\"").concat(item.value, "\">0</span>\n                </div>");
    } else if (item.type === "advantage") {
      return "<div class=\"menu-card__name\">".concat(item.name, "</div>\n                <div class=\"menu-card__advantage\">\n                    <span class=\"menu-card__indicator\"></span>\n                    <span class=\"menu-card__status\">\u0430\u043A\u0442\u0438\u0432\u0435\u043D</span>\n                    <span class=\"menu-card__date\">\u0434\u043E ").concat(item.endDate, "</span>\n                </div>");
    }
  } // ~> Склеиваем весь экран


  var template = "\n       <div class=\"main-menu\">\n        <div class=\"main-menu__container\">\n          <div class=\"main-menu__header\">\n            <div class=\"menu-header\">\n              <div class=\"menu-header__container\">\n                <button class=\"menu-header__button\">\n                  <svg class=\"menu-header__icon\">\n                    <use xlink:href=\"img/sprites/sprite.svg#menu-help\"></use>\n                  </svg><span>\u041F\u043E\u043C\u043E\u0449\u044C</span>\n                </button>\n                <button class=\"menu-header__button\">\n                  <svg class=\"menu-header__icon\">\n                    <use xlink:href=\"img/sprites/sprite.svg#menu-gear\"></use>\n                  </svg><span>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"main-menu__body\">\n            <div class=\"main-menu__info\">\n              <div class=\"menu-info\">\n                <div class=\"menu-info__person\"><img class=\"menu-info__image\" src=\"".concat(person.image, "\"></div>\n                <div class=\"menu-info__content\">\n                  <p class=\"menu-info__title\">").concat(person.name, "</p>\n                  <div class=\"menu-info__stat-frame\">\n                    <p class=\"menu-info__stat-name\">\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430</p>\n                    <div class=\"menu-info__level\">\n                      <p class=\"menu-info__level-name\">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ").concat(person.level, "</p>\n                      <div class=\"menu-info__level-progress js-animate-counter\" data-value=\"").concat(person.currentValue, "\" data-max-value=").concat(person.maxValue, ">\n                        <div class=\"menu-info__level-progress-bar\"></div>\n                      </div>\n                      <p class=\"menu-info__level-exp\" data-value=\"").concat(person.currentValue, "\" data-max-value=\"").concat(person.maxValue, "\">0/").concat(person.maxValue, " exp</p>\n                    </div>\n                    <div class=\"menu-info__data\">\n                      <div class=\"menu-info__stats\">\n                        ").concat(stats, "\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"menu-info__skill-frame\">\n                    <p class=\"menu-info__stat-name\">\u043D\u0430\u0432\u044B\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430</p>\n                    <div class=\"menu-info__data\">\n                      <div class=\"menu-info__skills\">\n                        ").concat(skills, "\n                      </div>\n                    </div>\n                  </div>\n                  <button class=\"menu-info__button js-main-menu-toggle\">\u041D\u0430\u0432\u044B\u043A\u0438</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"main-menu__cards\">\n                ").concat(cards, "\n            </div>\n          </div>\n        </div>\n      </div>\n");
  var main = document.querySelector(selector);

  if (main) {
    // Рендерим экран
    main.insertAdjacentHTML("beforeend", template);
  }
}; // Функция выполняет роль обработчика анимации для круглого прогресс бара


var circleProgress = function circleProgress(selector) {
  var wrapper = document.querySelectorAll(selector);
  Array.prototype.forEach.call(wrapper, function (wrapper, i) {
    var wrapperWidth, wrapperHeight, percent, innerHTML, context, lineWidth, centerX, centerY, radius, newPercent, speed, from, to, duration, start, strokeStyle, text;

    var getValues = function getValues() {
      wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
      wrapperHeight = wrapperWidth;
      percent = wrapper.getAttribute("data-cp-percentage");
      innerHTML = "<span class=\"menu-card__percentage\"><strong>" + percent + "</strong> %</span><canvas class=\"menu-card__circleProgressCanvas\" width=\"" + wrapperWidth * 2 + "\" height=\"" + wrapperHeight * 2 + "\"></canvas>";
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
      var time = new Date().getTime() - start;

      if (time <= duration) {
        var x = easeInOutQuart(time, from, to - from, duration);
        newPercent = x;
        text.innerHTML = Math.round(newPercent) + " %";
        drawArc();
      }
    }

    function drawArc() {
      var circleStart = 1.5 * Math.PI;
      var circleEnd = circleStart + newPercent / 50 * Math.PI;
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

    var update = function update() {
      getValues();
      animate();
    };

    update();
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        clearTimeout(resizeTimer);
        start = new Date().getTime();
        update();
      }, 250);
    });
  });
}; // Хендлер анимаций


var animateHandler = function animateHandler(elements, type) {
  elements.forEach(function (element) {
    // Дефолтные значения
    var start = new Date().getTime();
    var duration = 1000;
    var from = 0;
    var newPercent = 0;
    var to = 0;

    switch (type) {
      case "bar":
        to = Math.round(element.dataset.value / element.dataset.maxValue * 100);
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
      var time = new Date().getTime() - start;

      if (time <= duration) {
        var x = easeInOutQuart(time, from, to - from, duration);
        newPercent = x;

        switch (type) {
          case "bar":
            element.querySelector(".menu-info__level-progress-bar").style = "width: ".concat(Math.round(newPercent), "%");
            break;

          case "exp":
            element.innerHTML = "".concat(Math.round(newPercent), "/").concat(element.dataset.maxValue, " exp");
            break;

          case "front":
          case "menu":
            element.style = "opacity: ".concat(newPercent / 100);
            break;

          case "back":
            element.style = "opacity: ".concat(newPercent / 100, "; background: radial-gradient(143.8% 75.34% at 50% 50%, rgba(0, 42, 122, 0.65) 0%, rgba(0, 117, 255, 0.65) 100%), url(\"/img/").concat(element.dataset.image, ".png\"); background-repeat: no-repeat; background-size: ").concat(200 - newPercent, "%;");
            break;

          case "picture":
            element.style = "margin-right: -".concat(newPercent / 100, "rem");
            break;

          default:
            element.innerHTML = Math.round(newPercent);
        }
      }
    }

    progressAnimate();
  });
}; // Распределитель анимаций


var animateDistributor = function animateDistributor(arr) {
  arr.forEach(function (item) {
    var elements = document.querySelectorAll(item[0]);
    animateHandler(elements, item[1]);
  });
}; // Переключает состояния информации в меню


var menuToggle = function menuToggle(selector) {
  var item = document.querySelector(selector);
  item.addEventListener("click", function () {
    var infoContent = document.querySelector(".menu-info__content");

    if (item.textContent === "Навыки") {
      item.innerHTML = "Статистика";
      infoContent.classList.add("menu-info__content--stats");
      animateDistributor([[".menu-info__skill-frame", "menu"], [".menu-info__level-progress", "bar"], [".menu-info__level-exp", "exp"]]);
    } else {
      item.innerHTML = "Навыки";
      infoContent.classList.remove("menu-info__content--stats");
      animateDistributor([[".menu-info__stat-frame", "menu"], [".menu-info__level-progress", "bar"], [".menu-info__level-exp", "exp"]]);
    }
  });
}; // Переключает состояния карточек


var cardToggle = function cardToggle(selector) {
  var cards = document.querySelectorAll(selector);
  cards.forEach(function (card, index) {
    card.addEventListener("mouseleave", function (e) {
      animateHandler(card.querySelectorAll(".menu-card__front"), "front");
    });
    card.addEventListener("mouseenter", function (e) {
      animateHandler(card.querySelectorAll(".menu-card__back"), "back");
      animateHandler(card.querySelectorAll(".menu-card__current"), "number");
      animateHandler(card.querySelectorAll(".menu-card__coin"), "coin");
      animateHandler(card.querySelectorAll(".menu-card__picture"), "picture");
      circleProgress(".menu-card__counter");
    });
  });
}; // Рендерим экран и добавляем обработку анимаций


windowRender(person, "#main-menu");
animateDistributor([[".main-menu__container", "menu"], [".menu-info__level-progress", "bar"], [".menu-info__level-exp", "exp"], [".menu-card__current", "number"], [".menu-card__coin", "coin"]]);
menuToggle(".js-main-menu-toggle");
cardToggle(".js-hover-card");

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/main-menu/main-menu */ "./src/blocks/modules/main-menu/main-menu.js");
/* harmony import */ var _modules_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0__);
// import "%modules%/tree/tree";
// import "%modules%/product-cards/product-cards";
// import "%modules%/family-management-tabs/family-management-tabs";
// import "%modules%/family-management-ranks/family-management-ranks";
// import "%modules%/family-management-property/family-management-property";
// import "%modules%/popup-menu/popup-menu";
// import "%modules%/family-management/family-management";
// import "%modules%/metal-detector/metal-detector";


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map