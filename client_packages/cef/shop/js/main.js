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

/***/ "./src/blocks/modules/shop/shop.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/shop/shop.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabs = [{
  "name": "Продукты",
  "type": "products"
}, {
  "name": "Инструменты",
  "type": "instruments"
}, {
  "name": "Бытовое",
  "type": "household"
}, {
  "name": "Прочее",
  "type": "other"
}];
var products = {
  "products": [{
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца 2",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца 4",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Торт",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца 2",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца 4",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Торт",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }],
  "instruments": [{
    "name": "Пила",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Молоток",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }],
  "household": [{
    "name": "Скотч",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }],
  "other": [{
    "name": "Ножницы",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }, {
    "name": "Пицца",
    "image": "pizza.png",
    "price": "100"
  }]
}; // ~~> Получаем фреймы

var tubButtonsFrame = document.querySelector(".shop__tab-items");
var productsFrame = document.querySelector(".shop__products"); // ~> Чистим рендерим и кнопки

if (tubButtonsFrame) {
  tubButtonsFrame.innerHTML = "";
  createTabButtons(tabs, tubButtonsFrame);
} // ~> Чистим рендерим и товары


if (productsFrame) {
  productsFrame.innerHTML = "";
  createProductsCard(products, productsFrame, "products");
}
/**
 * Рендерит кнопки табов и привязывает к ним события
 *
 * @param {object} tabs массив с элементами табов.
 * @param {object} tubButtonsFrame фрейм в которых необходимо отрендерить табы.
 */


function createTabButtons(tabs, tubButtonsFrame) {
  tabs.forEach(function (tab, index) {
    var button = createElement(tubButtonsFrame, "button", index === 0 ? "shop-tabs__button shop-tabs__button--active" : "shop-tabs__button", "beforeend", tab["type"]);
    button.insertAdjacentText("beforeend", tab["name"]);
    button.addEventListener("click", function () {
      var buttons = document.querySelectorAll(".shop-tabs__button");
      buttons.forEach(function (button) {
        return button.classList.remove("shop-tabs__button--active");
      });
      button.classList.add("shop-tabs__button--active");
      productsFrame.innerHTML = "";
      createProductsCard(products, productsFrame, tab["type"]);
    });
  });
}
/**
 * Рендерит товары и привязывает к ним события
 *
 * @param {object} products массив с товарами.
 * @param {object} productsFrame фрейм в которых необходимо отрендерить товары.
 * @param {string} currentType тип товаров которые необходимо отрендерить.
 */


function createProductsCard(products, productsFrame, currentType) {
  products[currentType].forEach(function (product) {
    var card = createElement(productsFrame, "div", "shop-card", "beforeend");
    card.insertAdjacentHTML("afterbegin", "\n            <div class=\"shop-card__info\">\n              <p class=\"shop-card__name\">".concat(product["name"], "</p><img class=\"shop-card__image\" src=\"/img/").concat(product["image"], "\">\n              <p class=\"shop-card__price\">$").concat(product["price"], "</p>\n            </div>\n        "));
    var buttonFrame = createElement(card, "div", "shop-card__buttons", "beforeend");
    createIconButton("afterbegin", buttonFrame, "shop-card__button", "shop-card__icon", "icon-wallet", "bay", "wallet", "{\"name\": ".concat(product["name"], ",\"price\": ").concat(product["price"], "}"));
    createIconButton("beforeend", buttonFrame, "shop-card__button", "shop-card__icon", "icon-card", "bay", "card", "{\"name\": ".concat(product["name"], ",\"price\": ").concat(product["price"], "}"));
  });
}
/**
 * Создает элемент и добавляет его в дерево
 *
 * @param {object} wrap фрейм элемента.
 * @param {string} classNames классы элемента.
 * @param {string} position позиция добавляемого элемента для insertAdjacentElement.
 */


function createElement(wrap, tag, classNames, position, dataType) {
  var userData = document.createElement(tag);
  userData.classList = classNames;
  if (dataType) userData.setAttribute("data-type", dataType);
  return wrap.insertAdjacentElement(position, userData);
}
/**
 * Создает кнопку и добавляет ее в дерево и добавляет к ней отслеживание событий
 *
 * @param {string} position позиция добавляемого элемента для insertAdjacentElement.
 * @param {object} wrap фрейм элемента.
 * @param {string} classNames классы элемента.
 * @param {string} classNamesIcon классы иконки у элемента.
 * @param {string} icon иконка.
 * @param {string} eventTarget Цель к которой приводит кнопка.
 * @param {string} eventType Тип события.
 * @param {object} eventData Информация о покупке
 */


function createIconButton(position, wrap, classNames, classNamesIcon, icon, eventTarget, eventType, eventData) {
  var button = document.createElement("button");
  button.classList = classNames;
  if (eventTarget) button.setAttribute("data-target", eventTarget);
  if (eventType) button.setAttribute("data-type", eventType);
  if (eventData) button.setAttribute("data", eventData);
  button.insertAdjacentHTML("afterbegin", "\n        <svg class=".concat(classNamesIcon, "><use xlink:href=\"img/sprites/sprite.svg#").concat(icon, "\"></use></svg>\n    "));
  button.addEventListener("click", function () {
    console.log(eventData);
  });
  return wrap.insertAdjacentElement(position, button);
}

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
/* harmony import */ var _modules_shop_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/shop/shop */ "./src/blocks/modules/shop/shop.js");
/* harmony import */ var _modules_shop_shop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_shop_shop__WEBPACK_IMPORTED_MODULE_0__);
// import "%modules%/tree/tree";
// import "%modules%/product-cards/product-cards";
// import "%modules%/family-management-tabs/family-management-tabs";
// import "%modules%/family-management-ranks/family-management-ranks";
// import "%modules%/family-management-property/family-management-property";
// import "%modules%/popup-menu/popup-menu";
// import "%modules%/family-management/family-management";


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