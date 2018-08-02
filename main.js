(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _pages_main_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main/main */ "./src/app/pages/main/main.ts");
/* harmony import */ var _pages_list_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list/list */ "./src/app/pages/list/list.ts");
/* harmony import */ var _pages_list_list_menu_component_list_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/list/list-menu-component/list-menu-component */ "./src/app/pages/list/list-menu-component/list-menu-component.ts");
/* harmony import */ var _uiBox_closeButton_closeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uiBox/closeButton/closeButton */ "./src/app/uiBox/closeButton/closeButton.ts");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _uiBox_carousel_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uiBox/carousel/carousel */ "./src/app/uiBox/carousel/carousel.ts");
/* harmony import */ var _pages_list_guide_component_guide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/list/guide-component/guide-component */ "./src/app/pages/list/guide-component/guide-component.ts");
/* harmony import */ var _pages_list_detail_component_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/list/detail-component/detail-component */ "./src/app/pages/list/detail-component/detail-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_main_main__WEBPACK_IMPORTED_MODULE_5__["MainPage"],
                _pages_list_list__WEBPACK_IMPORTED_MODULE_6__["ListPage"],
                _pages_list_list_menu_component_list_menu_component__WEBPACK_IMPORTED_MODULE_7__["ListMenuComponent"],
                _pages_list_guide_component_guide_component__WEBPACK_IMPORTED_MODULE_11__["GuideComponent"],
                _pages_list_detail_component_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
                // ui
                _uiBox_closeButton_closeButton__WEBPACK_IMPORTED_MODULE_8__["CloseButtonUi"],
                _uiBox_carousel_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselUi"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_9__["NguCarouselModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main */ "./src/app/pages/main/main.ts");
/* harmony import */ var _pages_list_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/list/list */ "./src/app/pages/list/list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main__WEBPACK_IMPORTED_MODULE_2__["MainPage"] },
    { path: 'list', component: _pages_list_list__WEBPACK_IMPORTED_MODULE_3__["ListPage"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/icons.ts":
/*!**************************!*\
  !*** ./src/app/icons.ts ***!
  \**************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
var icons = {
    "weather": {
        "color": [
            "gonicon-sun",
            "gonicon-sunny",
            "gonicon-sunshine",
            "gonicon-cloud",
            "gonicon-sun_cloud",
            "gonicon-sunny_cloud",
            "gonicon-sunshine_cloud",
            "gonicon-rainy_cloud",
            "gonicon-sun_lightning_cloud",
            "gonicon-lightning_rainy",
            "gonicon-lightning_snow",
            "gonicon-lightning_hail",
            "gonicon-fog_cloud",
            "gonicon-sun_fog_cloud",
            "gonicon-fog_lightning",
            "gonicon-cumulus_cloud",
            "gonicon-snow_cloud",
            "gonicon-hail_snow",
            "gonicon-snow",
            "gonicon-hail",
            "gonicon-fog",
            "gonicon-rainy",
            "gonicon-rainy_snow",
            "gonicon-heavy_snow",
            "gonicon-heavy_hail",
            "gonicon-heavy_cloud",
            "gonicon-dark_cloud",
            "gonicon-snow_lightning",
            "gonicon-hail_lightning",
            "gonicon-rainy_lightning",
            "gonicon-dark_cloud_lightning",
            "gonicon-rainy_season",
            "gonicon-heavy_rainy_season",
            "gonicon-heavy_rainy_lightning",
            "gonicon-shower",
            "gonicon-typhoon_rainy",
            "gonicon-typhoon_hail",
            "gonicon-typhoon_fog",
            "gonicon-typhoon",
            "gonicon-typhoon_lightning",
            "gonicon-wind_lightning",
            "gonicon-sunny_wind_lightning1",
            "gonicon-cloud_wind_lightning",
            "gonicon-heavy_cloud_wind_lightning",
            "gonicon-sunny_wind_lightning2",
            "gonicon-wind",
            "gonicon-cloud_wind",
            "gonicon-heavy_cloud_wind"
        ],
        "fill": [
            "gonicon-sun",
            "gonicon-sunny",
            "gonicon-sunshine",
            "gonicon-cloud",
            "gonicon-sun_cloud",
            "gonicon-sunny_cloud",
            "gonicon-sunshine_cloud",
            "gonicon-rainy_cloud",
            "gonicon-sun_lightning_cloud",
            "gonicon-lightning_rainy",
            "gonicon-lightning_snow",
            "gonicon-lightning_hail",
            "gonicon-fog_cloud",
            "gonicon-sun_fog_cloud",
            "gonicon-fog_lightning",
            "gonicon-cumulus_cloud",
            "gonicon-snow_cloud",
            "gonicon-hail_snow",
            "gonicon-snow",
            "gonicon-hail",
            "gonicon-fog",
            "gonicon-rainy",
            "gonicon-rainy_snow",
            "gonicon-heavy_snow",
            "gonicon-heavy_hail",
            "gonicon-heavy_cloud",
            "gonicon-dark_cloud",
            "gonicon-snow_lightning",
            "gonicon-hail_lightning",
            "gonicon-rainy_lightning",
            "gonicon-dark_cloud_lightning",
            "gonicon-rainy_season",
            "gonicon-heavy_rainy_season",
            "gonicon-heavy_rainy_lightning",
            "gonicon-shower",
            "gonicon-typhoon_rainy",
            "gonicon-typhoon_hail",
            "gonicon-typhoon_fog",
            "gonicon-typhoon",
            "gonicon-typhoon_lightning",
            "gonicon-wind_lightning",
            "gonicon-sunny_wind_lightning1",
            "gonicon-cloud_wind_lightning",
            "gonicon-heavy_cloud_wind_lightning",
            "gonicon-sunny_wind_lightning2",
            "gonicon-wind",
            "gonicon-cloud_wind",
            "gonicon-heavy_cloud_wind"
        ],
        "line": [
            "gonicon-sun",
            "gonicon-sunny",
            "gonicon-sunshine",
            "gonicon-cloud",
            "gonicon-sun_cloud",
            "gonicon-sunny_cloud",
            "gonicon-sunshine_cloud",
            "gonicon-rainy_cloud",
            "gonicon-sun_lightning_cloud",
            "gonicon-lightning_rainy",
            "gonicon-lightning_snow",
            "gonicon-lightning_hail",
            "gonicon-fog_cloud",
            "gonicon-sun_fog_cloud",
            "gonicon-fog_lightning",
            "gonicon-cumulus_cloud",
            "gonicon-snow_cloud",
            "gonicon-hail_snow",
            "gonicon-snow",
            "gonicon-hail",
            "gonicon-fog",
            "gonicon-rainy",
            "gonicon-rainy_snow",
            "gonicon-heavy_snow",
            "gonicon-heavy_hail",
            "gonicon-heavy_cloud",
            "gonicon-dark_cloud",
            "gonicon-snow_lightning",
            "gonicon-hail_lightning",
            "gonicon-rainy_lightning",
            "gonicon-dark_cloud_lightning",
            "gonicon-rainy_season",
            "gonicon-heavy_rainy_season",
            "gonicon-heavy_rainy_lightning",
            "gonicon-shower",
            "gonicon-typhoon_rainy",
            "gonicon-typhoon_hail",
            "gonicon-typhoon_fog",
            "gonicon-typhoon",
            "gonicon-typhoon_lightning",
            "gonicon-wind_lightning",
            "gonicon-sunny_wind_lightning1",
            "gonicon-cloud_wind_lightning",
            "gonicon-heavy_cloud_wind_lightning",
            "gonicon-sunny_wind_lightning2",
            "gonicon-wind",
            "gonicon-cloud_wind",
            "gonicon-heavy_cloud_wind"
        ],
    }
};


/***/ }),

/***/ "./src/app/pages/list/detail-component/detail-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/list/detail-component/detail-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-component-content enter\" #content>\r\n  <div class=\"component-wrapper\">\r\n\r\n    <div class=\"close-box-outer\" \r\n      (click)=\"dismiss()\">\r\n      <close-button></close-button>\r\n    </div>\r\n\r\n    <div class=\"detail-header-wrapper\">\r\n\r\n      <div class=\"style-list\">\r\n        <div class=\"style-item\" *ngFor=\"let name of styleList\">\r\n          <div class=\"icon gonicon-{{themaName}}-{{name}} {{item}}\"></div>\r\n          <div class=\"label\">{{name}}</div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"detail-main\">\r\n        <div class=\"icon gonicon-weather-fill {{item}}\" #mainIcon></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"info-wrapper\">\r\n      <div class=\"info-label\">\r\n        {{iconName}}\r\n      </div>\r\n      <div class=\"setup-panel\">\r\n        <div class=\"link-box\">\r\n          &lt;<span class=\"bluesky\">i</span> <span class=\"pink\"> class</span>=&quot;gonicon-weather gonicon-sun_cloud&quot;&gt;&lt;<span class=\"bluesky\">/i</span>&gt;\r\n        </div>\r\n        <!-- <div class=\"link-box\">\r\n          &lt;<span class=\"bluesky\">i</span> <span class=\"pink\"> class</span>=&quot;gonicon-weather gonicon-sun_cloud&quot;&gt;&lt;<span class=\"bluesky\">/i</span>&gt;\r\n        </div> -->\r\n        <div class=\"image-box\">\r\n          <img src=\"assets/img/copy-icon.svg\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"palette-wrapper\">\r\n      <div class=\"item-row\">\r\n        <div \r\n          class=\"color-item\" \r\n          [style.border-color]=\"color\" \r\n          (click)=\"changeColor(color, $event)\"\r\n          *ngFor=\"let color of colors1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item-row\">\r\n        <div \r\n          class=\"color-item\" \r\n          [style.border-color]=\"color\" \r\n          (click)=\"changeColor(color, $event)\"\r\n          *ngFor=\"let color of colors2\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/list/detail-component/detail-component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/list/detail-component/detail-component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes setup-link-start {\n  0% {\n    opacity: 0;\n    width: 0vw; }\n  50% {\n    opacity: 0;\n    width: 59.4vw; }\n  100% {\n    opacity: 1;\n    width: 59.4vw; } }\n\n@keyframes setup-link-start {\n  0% {\n    opacity: 0;\n    width: 0vw; }\n  50% {\n    opacity: 0;\n    width: 59.4vw; }\n  100% {\n    opacity: 1;\n    width: 59.4vw; } }\n\n@-webkit-keyframes detail-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: white; } }\n\n@keyframes detail-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: white; } }\n\n.detail-component-content {\n  height: 100%;\n  width: 100%;\n  z-index: 990;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.detail-component-content.enter {\n    -webkit-animation: detail-fade-in 1s;\n            animation: detail-fade-in 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.detail-component-content.leave {\n    -webkit-animation: fade-out 0.5s;\n            animation: fade-out 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n\n.detail-component-content .component-wrapper {\n    width: 100%;\n    height: 100%;\n    min-height: 177.5vw;\n    position: relative;\n    padding: 10.6vw; }\n\n.detail-component-content .component-wrapper .close-box-outer {\n      position: absolute;\n      top: 10.6vw;\n      right: 10.6vw;\n      width: 10.6vw;\n      height: 10.6vw;\n      z-index: 999; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper {\n      overflow: hidden;\n      position: relative;\n      margin-bottom: 16.9vw; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper .style-list {\n        height: 67.5vw;\n        float: left; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper .style-list .style-item {\n          margin-bottom: 6.3vw; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper .style-list .style-item .icon {\n            height: 9.4vw;\n            font-size: 9.4vw;\n            margin-bottom: 2.8vw; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper .style-list .style-item .label {\n            font-size: 3.4vw;\n            color: #4a4a4a;\n            text-align: center; }\n\n.detail-component-content .component-wrapper .detail-header-wrapper .detail-main {\n        font-size: 24.4vw;\n        display: inline-block;\n        position: absolute;\n        bottom: 0;\n        right: 0; }\n\n.detail-component-content .component-wrapper .info-wrapper {\n      margin-bottom: 9.4vw; }\n\n.detail-component-content .component-wrapper .info-wrapper .info-label {\n        font-size: 7.2vw;\n        text-align: left;\n        color: #4a4a4a;\n        margin-bottom: 5vw;\n        letter-spacing: -1px; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel {\n        border: 1px solid #d9d9d9;\n        padding: 3.1vw;\n        width: 100%;\n        position: relative; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel .link-box {\n          display: inline-block;\n          width: calc(100% - 9.4vw);\n          font-size: 4.1vw;\n          line-height: 1.5em;\n          word-break: break-all; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel .link-box .bluesky {\n            color: #4abde5; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel .link-box .pink {\n            color: #ff9cce; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel .image-box {\n          display: inline-block;\n          width: 9.4vw;\n          min-height: 4.1vw; }\n\n.detail-component-content .component-wrapper .info-wrapper .setup-panel .image-box img {\n            position: absolute;\n            right: 3.1vw;\n            width: 5.6vw; }\n\n.detail-component-content .component-wrapper .palette-wrapper .item-row {\n      width: 100%;\n      text-align: center; }\n\n.detail-component-content .component-wrapper .palette-wrapper .item-row:first-child {\n        margin-bottom: 4.1vw; }\n\n.detail-component-content .component-wrapper .palette-wrapper .item-row .color-item {\n        display: inline-block;\n        width: 12.5vw;\n        height: 12.5vw;\n        border-radius: 50%;\n        margin: 0 2vw;\n        border: 1px solid #ffffff; }\n\n.detail-component-content .component-wrapper .palette-wrapper .item-row .color-item:first-child {\n          margin-left: 0; }\n\n.detail-component-content .component-wrapper .palette-wrapper .item-row .color-item:last-child {\n          margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/pages/list/detail-component/detail-component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/list/detail-component/detail-component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons */ "./src/app/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colors1 = [
            "#fe3f65",
            "#ffb645",
            "#fff289",
            "#a9e270",
            "#79a14b"
        ];
        this.colors2 = [
            "#37b8dd",
            "#5459eb",
            "#cf67ff",
            "#9b9b9b",
            "#000000"
        ];
    }
    DetailComponent.prototype.ngOnInit = function () {
        console.log("detail item test :: ", this.item);
        console.log("detail thema test :: ", this.thema);
        var themaList = this.thema.split('-');
        this.iconName = this.item.replace(/gonicon-/g, "");
        this.themaName = themaList[1];
        this.themaStyle = themaList[2];
        console.log(themaList);
        console.log(this.themaName);
        console.log(this.themaStyle);
        this.styleList = Object.keys(_icons__WEBPACK_IMPORTED_MODULE_3__["icons"][this.themaName]);
    };
    DetailComponent.prototype.ngAfterViewInit = function () { };
    DetailComponent.prototype.changeColor = function (color, e) {
        console.log("color :: ", color);
        console.log("e :: ", e);
        if (this.current) {
            this.current.style.backgroundColor = "#FFFFFF";
        }
        this.mainIcon.nativeElement.style.color = color;
        e.target.style.backgroundColor = color;
        this.current = e.target;
    };
    DetailComponent.prototype.dismiss = function () {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(1)
            .do(function () {
            _this.content.nativeElement.classList.remove('enter');
            _this.content.nativeElement.classList.add('leave');
        })
            .delay(500)
            .subscribe(function () {
            _this.closeEvent.emit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "thema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "closeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainIcon'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailComponent.prototype, "mainIcon", void 0);
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail-component',
            template: __webpack_require__(/*! ./detail-component.html */ "./src/app/pages/list/detail-component/detail-component.html"),
            styles: [__webpack_require__(/*! ./detail-component.scss */ "./src/app/pages/list/detail-component/detail-component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/guide-component/guide-component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/list/guide-component/guide-component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"guide-component-content enter\" #content>\r\n  <div class=\"component-wrapper\">\r\n\r\n    <div class=\"close-box-outer\" \r\n      (click)=\"dismiss()\">\r\n      <close-button></close-button>\r\n    </div>\r\n\r\n    <div class=\"setup-wrapper\">\r\n      <div class=\"label\">설치방법 :</div>\r\n  \r\n      <div class=\"setup-link-panel\">\r\n        <div class=\"front-quotation\">\r\n            <span>&#8220;</span>\r\n        </div>\r\n        <div class=\"setup-link\">\r\n          &lt;<span class=\"bluesky\">link</span> <span class=\"pink\"> href</span>=&quot;https://go-eun.github.io/<br>gonicon.css&quot; <span class=\"pink\">rel</span>=<span class=\"bluesky\">&quot;stylesheet&quot;</span>&gt;\r\n          <div class=\"temp-box\"></div>\r\n        </div>\r\n        <div class=\"back-quotation\">\r\n          <span>&#8221;</span>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n    \r\n    <div class=\"email\">kge17419@gmail.com</div>\r\n    <img class=\"logo\" src=\"assets/img/list-menu-logo.svg\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/list/guide-component/guide-component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/list/guide-component/guide-component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes setup-link-start {\n  0% {\n    opacity: 0;\n    width: 0vw; }\n  50% {\n    opacity: 0;\n    width: 59.4vw; }\n  100% {\n    opacity: 1;\n    width: 59.4vw; } }\n\n@keyframes setup-link-start {\n  0% {\n    opacity: 0;\n    width: 0vw; }\n  50% {\n    opacity: 0;\n    width: 59.4vw; }\n  100% {\n    opacity: 1;\n    width: 59.4vw; } }\n\n.guide-component-content {\n  height: 100%;\n  width: 100%;\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.guide-component-content.enter {\n    -webkit-animation: back-fade-in 1s;\n            animation: back-fade-in 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.guide-component-content.leave {\n    -webkit-animation: fade-out 0.5s;\n            animation: fade-out 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n\n.guide-component-content .component-wrapper {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    padding-top: 36.6vw; }\n\n.guide-component-content .component-wrapper .close-box-outer {\n      position: absolute;\n      top: 10.6vw;\n      right: 10.6vw;\n      width: 10.6vw;\n      height: 10.6vw; }\n\n.guide-component-content .component-wrapper .setup-wrapper {\n      position: absolute;\n      top: 50%;\n      margin-top: -12.5vw;\n      width: 100%; }\n\n.guide-component-content .component-wrapper .setup-wrapper .label {\n        font-size: 4.1vw;\n        font-weight: 600;\n        color: #4a4a4a;\n        letter-spacing: -1px;\n        text-align: center;\n        opacity: 0;\n        -webkit-animation: fade-in 1s;\n                animation: fade-in 1s;\n        -webkit-animation-delay: 1s;\n                animation-delay: 1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel {\n        width: 100%;\n        text-align: center;\n        opacity: 0;\n        -webkit-animation: fade-in 0.5s;\n                animation: fade-in 0.5s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        -webkit-animation-delay: 0.5s;\n                animation-delay: 0.5s; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel div {\n          display: inline-block; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .front-quotation {\n          width: 6.3vw; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .front-quotation span {\n            content: \"\\201C\";\n            font-size: 2.5em;\n            font-family: Georgia;\n            color: #bcbcbc;\n            position: relative;\n            top: -3.1vw;\n            left: -3.1vw; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link {\n          margin-top: 6.6vw;\n          overflow: hidden !important;\n          line-height: 6.3vw;\n          height: 12.5vw;\n          width: 0vw;\n          letter-spacing: -1px;\n          word-break: break-all;\n          position: relative;\n          -webkit-animation: setup-link-start 1.5s;\n                  animation: setup-link-start 1.5s;\n          -webkit-animation-fill-mode: forwards;\n                  animation-fill-mode: forwards;\n          -webkit-animation-delay: 1s;\n                  animation-delay: 1s; }\n\n@media (max-width: 358px) {\n            .guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link {\n              font-size: 4.1vw; } }\n\n@media (min-width: 359px) and (max-width: 535px) {\n            .guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link {\n              font-size: 3.9vw; } }\n\n@media (min-width: 536px) and (max-width: 700px) {\n            .guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link {\n              font-size: 3.8vw; } }\n\n@media (min-width: 701px) {\n            .guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link {\n              font-size: 3.6vw; } }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link .bluesky {\n            color: #4abde5; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link .pink {\n            color: #ff9cce; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .setup-link .temp-box {\n            width: 1.3vw;\n            height: 1.3vw;\n            border-radius: 50%;\n            background-color: #9b9b9b;\n            display: block;\n            position: absolute;\n            right: 0;\n            bottom: 0.9vw; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .back-quotation {\n          width: 6.3vw; }\n\n.guide-component-content .component-wrapper .setup-wrapper .setup-link-panel .back-quotation span {\n            content: \"\\201D\";\n            font-size: 2.5em;\n            font-family: Georgia;\n            color: #bcbcbc;\n            position: relative;\n            bottom: -9.4vw;\n            right: -3.1vw; }\n\n.guide-component-content .component-wrapper .email {\n      position: absolute;\n      width: 19.7vw;\n      left: 10.6vw;\n      bottom: 10.6vw;\n      font-family: NanumGothic;\n      font-size: 11px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.82;\n      letter-spacing: normal;\n      color: #9b9b9b; }\n\n.guide-component-content .component-wrapper .logo {\n      position: absolute;\n      width: 19.7vw;\n      right: 10.6vw;\n      bottom: 10.6vw; }\n"

/***/ }),

/***/ "./src/app/pages/list/guide-component/guide-component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/list/guide-component/guide-component.ts ***!
  \***************************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuideComponent = /** @class */ (function () {
    function GuideComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent.prototype.ngAfterViewInit = function () { };
    GuideComponent.prototype.dismiss = function () {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(1)
            .do(function () {
            _this.content.nativeElement.classList.remove('enter');
            _this.content.nativeElement.classList.add('leave');
        })
            .delay(500)
            .subscribe(function () {
            _this.closeEvent.emit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GuideComponent.prototype, "closeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GuideComponent.prototype, "content", void 0);
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-component',
            template: __webpack_require__(/*! ./guide-component.html */ "./src/app/pages/list/guide-component/guide-component.html"),
            styles: [__webpack_require__(/*! ./guide-component.scss */ "./src/app/pages/list/guide-component/guide-component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/list-menu-component/list-menu-component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/list/list-menu-component/list-menu-component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-menu-component-content enter\" #content>\r\n  <div class=\"component-wrapper\">\r\n\r\n    <div class=\"close-box-outer\" \r\n      (click)=\"dismiss()\">\r\n      <close-button></close-button>\r\n    </div>\r\n\r\n    <div class=\"carousel-wrapper fadeInRight animated delay-xs\">\r\n      <carousel-ui \r\n        [itemList]=\"imageList\" \r\n        (getIndex)=\"getIndex($event)\">\r\n      </carousel-ui>\r\n    </div>\r\n\r\n    <div #description \r\n      class=\"description-wrapper fadeIn animated delay-sm\">\r\n      <div class=\"label\">\r\n        <strong [ngStyle]=\"{'color': current.color}\">\r\n          {{current.bigLabel}}\r\n        </strong>\r\n        <span>{{current.smallLabel}}</span>\r\n      </div>\r\n      <div class=\"description\">\r\n        {{current.comment}}\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"email\">kge17419@gmail.com</div>\r\n    <img class=\"logo\" src=\"assets/img/list-menu-logo.svg\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/list/list-menu-component/list-menu-component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/list/list-menu-component/list-menu-component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes leave-left {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(-30px, 0px);\n            transform: translate(-30px, 0px); } }\n\n@keyframes leave-left {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(-30px, 0px);\n            transform: translate(-30px, 0px); } }\n\n@-webkit-keyframes leave-right {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px); } }\n\n@keyframes leave-right {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px); } }\n\n@-webkit-keyframes enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n@keyframes enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n@-webkit-keyframes enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-30px, 0px);\n            transform: translate(-30px, 0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n@keyframes enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-30px, 0px);\n            transform: translate(-30px, 0px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n.list-menu-component-content {\n  height: 100%;\n  width: 100%;\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.list-menu-component-content.enter {\n    -webkit-animation: back-fade-in 1s;\n            animation: back-fade-in 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.list-menu-component-content.leave {\n    -webkit-animation: fade-out 0.5s;\n            animation: fade-out 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n\n.list-menu-component-content .component-wrapper {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    padding-top: 36.6vw; }\n\n.list-menu-component-content .component-wrapper .close-box-outer {\n      position: absolute;\n      top: 10.6vw;\n      right: 10.6vw;\n      width: 10.6vw;\n      height: 10.6vw; }\n\n.list-menu-component-content .component-wrapper .carousel-wrapper {\n      height: 37.5vw;\n      width: 100%;\n      margin-bottom: 19.1vw; }\n\n.list-menu-component-content .component-wrapper .description-wrapper {\n      padding: 0 10.6vw; }\n\n.list-menu-component-content .component-wrapper .description-wrapper.hide-left {\n        -webkit-animation: leave-left 0.1s;\n                animation: leave-left 0.1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.list-menu-component-content .component-wrapper .description-wrapper.hide-right {\n        -webkit-animation: leave-right 0.1s;\n                animation: leave-right 0.1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.list-menu-component-content .component-wrapper .description-wrapper.enter-left {\n        -webkit-animation: enter-left 0.1s;\n                animation: enter-left 0.1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.list-menu-component-content .component-wrapper .description-wrapper.enter-right {\n        -webkit-animation: enter-right 0.1s;\n                animation: enter-right 0.1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.list-menu-component-content .component-wrapper .description-wrapper .label {\n        margin-bottom: 6.9vw; }\n\n.list-menu-component-content .component-wrapper .description-wrapper .label strong {\n          font-family: 'DevanagariSangamMN-Bold';\n          font-size: 9.4vw;\n          color: #438fe8;\n          font-weight: 600;\n          margin-right: 2.2vw;\n          -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.list-menu-component-content .component-wrapper .description-wrapper .label span {\n          font-family: 'DevanagariSangamMN';\n          font-size: 9.4vw;\n          color: #4a4a4a;\n          -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n\n.list-menu-component-content .component-wrapper .description-wrapper .description {\n        width: 59.4vw;\n        font-size: 4.1vw;\n        letter-spacing: -1px;\n        line-height: 6.3vw;\n        color: #4a4a4a; }\n\n.list-menu-component-content .component-wrapper .email {\n      position: absolute;\n      width: 19.7vw;\n      left: 10.6vw;\n      bottom: 10.6vw;\n      font-family: NanumGothic;\n      font-size: 11px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.82;\n      letter-spacing: normal;\n      color: #9b9b9b; }\n\n.list-menu-component-content .component-wrapper .logo {\n      position: absolute;\n      width: 19.7vw;\n      right: 10.6vw;\n      bottom: 10.6vw; }\n"

/***/ }),

/***/ "./src/app/pages/list/list-menu-component/list-menu-component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/list/list-menu-component/list-menu-component.ts ***!
  \***********************************************************************/
/*! exports provided: ListMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMenuComponent", function() { return ListMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListMenuComponent = /** @class */ (function () {
    function ListMenuComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageList = [
            {
                path: 'assets/img/weather-main-logo.svg',
                color: "#438fe8",
                bigLabel: 'B',
                smallLabel: 'lue sky',
                comment: "오늘의 날씨를 한눈에 인지하기 쉬운 정사각형의 픽셀형태로 제작하였습니다. ‘ 해, 구름, 번개, 태풍등.. ’ 하나의 주제가 되는 날씨에 각각의 색을 부여하여 의미를 더하였습니다."
            },
            {
                path: 'assets/img/company-main-logo.svg',
                color: "#913fff",
                bigLabel: 'P',
                smallLabel: 'urple company',
                comment: "회사를 상징하는 요소들을 나타낸 모습을 아이콘으로 담아보았습니다. ‘ 회사, 서류, 직원카드등.. ’ 각각의 요소들은 근무시 많이 보이는 풍경을 담아 냈습니다."
            },
            {
                path: 'assets/img/arrow-main-logo.svg',
                color: "#4a4a4a",
                bigLabel: 'B',
                smallLabel: 'lack arrow',
                comment: "여러가지 형태의 다양한 화살표를 그려보았습니다. 선,면의 형태로 다양하게 보여줘 실용성을 가지며 한가지형태도 다양한 각도로 표현되었습니다."
            }
        ];
        this.current = this.imageList[0];
        this.first = false;
    }
    ListMenuComponent.prototype.ngOnInit = function () {
    };
    ListMenuComponent.prototype.ngAfterViewInit = function () { };
    ListMenuComponent.prototype.dismiss = function () {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(1)
            .do(function () {
            _this.content.nativeElement.classList.remove('enter');
            _this.content.nativeElement.classList.add('leave');
        })
            .delay(500)
            .subscribe(function () {
            _this.closeEvent.emit();
        });
        // this.closeEvent.emit();
    };
    ListMenuComponent.prototype.getIndex = function (e) {
        if (!this.first) {
            this.first = true;
            this.currentIndex = e;
        }
        else if (this.currentIndex != e) {
            var action = this.currentIndex < e ? "left" : "right";
            this.currentIndex = e;
            this.description.nativeElement.classList.remove('fadeIn');
            this.description.nativeElement.classList.remove('animated');
            this.description.nativeElement.classList.remove('delay-sm');
            this.currentChange(this.imageList[e], action);
        }
    };
    ListMenuComponent.prototype.currentChange = function (data, action) {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(1)
            .do(function () {
            _this.description.nativeElement
                .classList.add('hide-' + action);
        })
            .delay(100)
            .do(function () {
            _this.description.nativeElement
                .classList.remove('hide-' + action);
            _this.current = data;
        })
            .do(function () {
            _this.description.nativeElement
                .classList.add('enter-' + action);
        })
            .delay(100)
            .subscribe(function () {
            _this.description.nativeElement
                .classList.remove('enter-' + action);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListMenuComponent.prototype, "closeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListMenuComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('description'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListMenuComponent.prototype, "description", void 0);
    ListMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-menu-component',
            template: __webpack_require__(/*! ./list-menu-component.html */ "./src/app/pages/list/list-menu-component/list-menu-component.html"),
            styles: [__webpack_require__(/*! ./list-menu-component.scss */ "./src/app/pages/list/list-menu-component/list-menu-component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ListMenuComponent);
    return ListMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/list.html":
/*!**************************************!*\
  !*** ./src/app/pages/list/list.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<list-menu-component \r\n  *ngIf=\"menuState\" \r\n  (closeEvent)=\"menuClose($event)\"></list-menu-component>\r\n\r\n<guide-component\r\n  *ngIf=\"guideState\"\r\n  (closeEvent)=\"guideClose($event)\"></guide-component>\r\n\r\n<detail-component\r\n  [item]=\"detailActiveItem\"\r\n  [thema]=\"detailActiveThema\"\r\n  *ngIf=\"detailState\"\r\n  (closeEvent)=\"detailClose($event)\"></detail-component>\r\n\r\n<div class=\"content\" [ngClass]=\"{'hold': contentState, 'out':!contentState}\">\r\n\r\n  <div class=\"header-wrapper fadeIn animated\">\r\n    <div \r\n      class=\"guide-icon-wrapper\"\r\n      (click)=\"guideOpen($event)\">\r\n      <div class=\"inner-wrapper\">\r\n        <img class=\"guide-circle\" src=\"assets/img/list-circle.svg\">\r\n        <img #arrow class=\"guide-arrow\" src=\"assets/img/list-down-arrow.svg\">\r\n      </div>\r\n    </div>\r\n    <img \r\n      class=\"search-icon\" \r\n      src=\"assets/img/list-search-icon.svg\">\r\n    <img \r\n      class=\"menu-icon\" \r\n      (click)=\"menuOpen($event)\" \r\n      src=\"assets/img/list-menu-icon.svg\">\r\n  </div>\r\n\r\n  <div class=\"logo-wrapper\">\r\n\r\n    <div class=\"name-panel\">\r\n      <div class=\"big-number fadeInLeft delay-md\" #bigNumber>\r\n        01\r\n      </div>\r\n      <div class=\"name-box\">\r\n        <strong class=\"fadeIn\" #nameB>B</strong>\r\n        <span class=\"fadeIn\" #nameSky>lue sky</span>\r\n      </div>\r\n    </div>\r\n\r\n    <img \r\n      #weatherLogo\r\n      class=\"weather-logo fadeInRight\" \r\n      src=\"assets/img/weather-logo.svg\">\r\n\r\n  </div>\r\n\r\n  <div class=\"info-wrapper fadeIn\" #infoWrapper>\r\n    <p>\r\n      오늘의 날씨를 한눈에 인지하기 쉬운 정사각<br>\r\n      형의 픽셀형태로 제작하였습니다. ‘ 해, 구름,<br> \r\n      번개, 태풍등.. ’ 하나의 주제가 되는 날씨에<br> \r\n      각각의 색을 부여하여 의미를 더하였습니다.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"list-wrapper fadeInUp animated\">\r\n    <div class=\"item-wrapper\" \r\n      (click)=\"detailOpen(item)\" \r\n      *ngFor=\"let item of activeIcon.list\">\r\n      <div class=\"icon {{activeIcon.name}} {{item}}\"></div>\r\n      <div class=\"name\">sun</div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/list/list.scss":
/*!**************************************!*\
  !*** ./src/app/pages/list/list.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes blur-in-effect {\n  0% {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); }\n  100% {\n    filter: blur(7px);\n    -webkit-filter: blur(7px);\n    -moz-filter: blur(7px);\n    -o-filter: blur(7px);\n    -ms-filter: blur(7px); } }\n\n@keyframes blur-in-effect {\n  0% {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); }\n  100% {\n    filter: blur(7px);\n    -webkit-filter: blur(7px);\n    -moz-filter: blur(7px);\n    -o-filter: blur(7px);\n    -ms-filter: blur(7px); } }\n\n@-webkit-keyframes blur-out-effect {\n  0% {\n    filter: blur(7px);\n    -webkit-filter: blur(7px);\n    -moz-filter: blur(7px);\n    -o-filter: blur(7px);\n    -ms-filter: blur(7px); }\n  100% {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); } }\n\n@keyframes blur-out-effect {\n  0% {\n    filter: blur(7px);\n    -webkit-filter: blur(7px);\n    -moz-filter: blur(7px);\n    -o-filter: blur(7px);\n    -ms-filter: blur(7px); }\n  100% {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); } }\n\n@-webkit-keyframes icon-wrapper-effect {\n  0% {\n    top: -6vh; }\n  40% {\n    top: 8.8vh; }\n  100% {\n    top: 6vh; } }\n\n@keyframes icon-wrapper-effect {\n  0% {\n    top: -6vh; }\n  40% {\n    top: 8.8vh; }\n  100% {\n    top: 6vh; } }\n\n@-webkit-keyframes circle-effect {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  30% {\n    -webkit-transform: rotate(-30deg);\n            transform: rotate(-30deg); }\n  60% {\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes circle-effect {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  30% {\n    -webkit-transform: rotate(-30deg);\n            transform: rotate(-30deg); }\n  60% {\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@-webkit-keyframes arrow-effect {\n  0% {\n    margin-top: -1.6vw; }\n  40% {\n    margin-top: 0vw; }\n  100% {\n    margin-top: -1.6vw; } }\n\n@keyframes arrow-effect {\n  0% {\n    margin-top: -1.6vw; }\n  40% {\n    margin-top: 0vw; }\n  100% {\n    margin-top: -1.6vw; } }\n\n.content {\n  height: 100%; }\n\n.content.hold {\n    overflow: hidden;\n    -webkit-animation: blur-in-effect 1s;\n            animation: blur-in-effect 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.content.out {\n    -webkit-animation: blur-out-effect 0.3s;\n            animation: blur-out-effect 0.3s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n\n.content .header-wrapper {\n    padding: 6vh;\n    width: 100%;\n    text-align: right;\n    position: relative; }\n\n.content .header-wrapper .guide-icon-wrapper {\n      position: absolute;\n      top: -6vh;\n      left: 10.6vw;\n      text-align: center;\n      width: 10.6vw;\n      height: 10.6vw;\n      -webkit-animation: icon-wrapper-effect 1s;\n              animation: icon-wrapper-effect 1s;\n      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s; }\n\n.content .header-wrapper .guide-icon-wrapper .inner-wrapper {\n        position: relative;\n        width: 100%;\n        height: 100%; }\n\n.content .header-wrapper .guide-icon-wrapper .inner-wrapper img {\n          position: absolute; }\n\n.content .header-wrapper .guide-icon-wrapper .inner-wrapper img.guide-circle {\n            top: 0;\n            left: 0;\n            width: 10.6vw;\n            height: 10.6vw;\n            -webkit-animation: circle-effect 0.5s;\n                    animation: circle-effect 0.5s;\n            -webkit-animation-fill-mode: forwards;\n                    animation-fill-mode: forwards;\n            -webkit-animation-delay: 3s;\n                    animation-delay: 3s; }\n\n.content .header-wrapper .guide-icon-wrapper .inner-wrapper img.guide-arrow {\n            width: 5.3vw;\n            height: 3.1vw;\n            left: 50%;\n            top: 50%;\n            margin-left: -2.7vw;\n            margin-top: -1.6vw; }\n\n.content .header-wrapper .guide-icon-wrapper .inner-wrapper img.guide-arrow.active {\n              -webkit-animation: arrow-effect 0.5s;\n                      animation: arrow-effect 0.5s;\n              -webkit-animation-fill-mode: forwards;\n                      animation-fill-mode: forwards; }\n\n.content .header-wrapper img {\n      vertical-align: middle; }\n\n.content .header-wrapper img.search-icon {\n        margin-right: 5vw;\n        width: 10.6vw; }\n\n.content .header-wrapper img.menu-icon {\n        width: 8.8vw; }\n\n.content .logo-wrapper {\n    overflow: hidden;\n    position: relative;\n    padding: 0 10.6vw;\n    margin-bottom: 4vh; }\n\n.content .logo-wrapper .name-panel {\n      float: left; }\n\n.content .logo-wrapper .name-panel .big-number {\n        text-align: left;\n        text-indent: -1.9vw;\n        font-size: 31.3vw;\n        color: #4a4a4a; }\n\n.content .logo-wrapper .name-panel .name-box strong {\n        font-family: 'DevanagariSangamMN-Bold';\n        font-size: 9.4vw;\n        color: #438fe8;\n        font-weight: 600;\n        margin-right: 2.2vw;\n        -webkit-animation-delay: 2s;\n        animation-delay: 2s; }\n\n.content .logo-wrapper .name-panel .name-box span {\n        font-family: 'DevanagariSangamMN';\n        font-size: 9.4vw;\n        color: #4a4a4a;\n        -webkit-animation-delay: 2.5s;\n        animation-delay: 2.5s; }\n\n.content .logo-wrapper .weather-logo {\n      position: absolute;\n      right: 10.6vw;\n      bottom: 1.6vw;\n      width: 15vw;\n      height: 15vw;\n      -webkit-animation-delay: 1.5s;\n      animation-delay: 1.5s; }\n\n.content .info-wrapper {\n    overflow: hidden;\n    padding: 0 10.6vw;\n    font-size: 4.1vw;\n    color: #9b9b9b;\n    letter-spacing: -1px;\n    text-align: right;\n    margin-bottom: 11.3vw;\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s; }\n\n.content .list-wrapper {\n    text-align: center;\n    width: 94.4vw;\n    margin: 0 auto; }\n\n.content .list-wrapper .item-wrapper {\n      display: inline-block;\n      position: relative;\n      text-align: center;\n      width: 25%;\n      height: 12.5vw;\n      margin-bottom: 9.4vw; }\n\n.content .list-wrapper .item-wrapper .icon {\n        font-size: 7.8vw; }\n\n.content .list-wrapper .item-wrapper .name {\n        position: absolute;\n        top: 9.4vw;\n        left: 50%;\n        width: 15.6vw;\n        margin-left: -7.8vw;\n        font-size: 2.5vw;\n        color: #4a4a4a;\n        word-wrap: break-word; }\n"

/***/ }),

/***/ "./src/app/pages/list/list.ts":
/*!************************************!*\
  !*** ./src/app/pages/list/list.ts ***!
  \************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./src/app/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.contentState = false;
        this.menuState = false;
        this.guideState = false;
        this.detailState = false;
        // detailState = true;
        // contentState = true;
        this.detailActiveItem = "";
        this.detailActiveThema = "";
        this.activeIcon = {
            name: "",
            list: []
        };
        console.log("icons test :: ", _icons__WEBPACK_IMPORTED_MODULE_3__["icons"]);
    }
    ListPage.prototype.ngOnInit = function () {
        this.changeActiveIcon("weather", "fill");
    };
    ListPage.prototype.changeActiveIcon = function (name, thema) {
        this.activeIcon.name = "gonicon-" + name + "-" + thema;
        this.activeIcon.list = _icons__WEBPACK_IMPORTED_MODULE_3__["icons"][name][thema];
    };
    ListPage.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.bigNumber.nativeElement, 'animated');
        this.renderer.addClass(this.weatherLogo.nativeElement, 'animated');
        this.renderer.addClass(this.nameB.nativeElement, 'animated');
        this.renderer.addClass(this.nameSky.nativeElement, 'animated');
        this.renderer.addClass(this.infoWrapper.nativeElement, 'animated');
    };
    ListPage.prototype.menuOpen = function (e) {
        this.menuState = true;
        this.contentState = true;
    };
    ListPage.prototype.menuClose = function (e) {
        this.menuState = false;
        this.contentState = false;
    };
    ListPage.prototype.guideOpen = function () {
        var _this = this;
        if (this.arrow.nativeElement.classList.contains('active'))
            return false;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([''])
            .do(function () {
            _this.arrow.nativeElement.className += " active";
        })
            .delay(500)
            .subscribe(function (res) {
            _this.arrow.nativeElement.className
                = _this.arrow.nativeElement.className.replace(/ active/g, "");
            _this.guideState = true;
            _this.contentState = true;
        });
    };
    ListPage.prototype.guideClose = function () {
        this.guideState = false;
        this.contentState = false;
    };
    ListPage.prototype.detailOpen = function (item) {
        this.detailActiveItem = item;
        this.detailActiveThema = this.activeIcon.name;
        this.detailState = true;
        this.contentState = true;
    };
    ListPage.prototype.detailClose = function () {
        this.detailState = false;
        this.contentState = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bigNumber'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "bigNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('weatherLogo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "weatherLogo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameB'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "nameB", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSky'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "nameSky", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infoWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "infoWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('arrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListPage.prototype, "arrow", void 0);
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-page',
            template: __webpack_require__(/*! ./list.html */ "./src/app/pages/list/list.html"),
            styles: [__webpack_require__(/*! ./list.scss */ "./src/app/pages/list/list.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ListPage);
    return ListPage;
}());



/***/ }),

/***/ "./src/app/pages/main/main.html":
/*!**************************************!*\
  !*** ./src/app/pages/main/main.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" #content>\r\n\r\n  <div class=\"button-wrapper\" #buttonWrapper>\r\n    <div class=\"button-inner-wrapper\">\r\n      <div class=\"dot\" #dot></div>\r\n      <button type=\"button\" #startButton>\r\n        <span>시작하기</span>\r\n        <img src=\"assets/img/main-right-arrow.svg\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/main.scss":
/*!**************************************!*\
  !*** ./src/app/pages/main/main.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes blur-in-effect {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); }\n  100% {\n    opacity: 0;\n    filter: blur(40px);\n    -webkit-filter: blur(40px);\n    -moz-filter: blur(40px);\n    -o-filter: blur(40px);\n    -ms-filter: blur(40px); } }\n\n@keyframes blur-in-effect {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px); }\n  100% {\n    opacity: 0;\n    filter: blur(40px);\n    -webkit-filter: blur(40px);\n    -moz-filter: blur(40px);\n    -o-filter: blur(40px);\n    -ms-filter: blur(40px); } }\n\n@-webkit-keyframes start-effect {\n  0% {\n    border: 2.5px solid rgba(234, 0, 118, 0); }\n  100% {\n    border: 2.5px solid #ea0076; } }\n\n@keyframes start-effect {\n  0% {\n    border: 2.5px solid rgba(234, 0, 118, 0); }\n  100% {\n    border: 2.5px solid #ea0076; } }\n\n@-webkit-keyframes dot-effect {\n  0% {\n    background-color: rgba(74, 189, 229, 0); }\n  100% {\n    background-color: #4abde5; } }\n\n@keyframes dot-effect {\n  0% {\n    background-color: rgba(74, 189, 229, 0); }\n  100% {\n    background-color: #4abde5; } }\n\n@-webkit-keyframes span-effect {\n  0% {\n    width: 21.9vw; }\n  100% {\n    width: 0vw; } }\n\n@keyframes span-effect {\n  0% {\n    width: 21.9vw; }\n  100% {\n    width: 0vw; } }\n\n@-webkit-keyframes img-effect {\n  0% {\n    left: 0;\n    margin-left: 0; }\n  20% {\n    left: -0.6vw;\n    margin-left: 0; }\n  60% {\n    left: -0.6vw;\n    margin-left: 0; }\n  99% {\n    left: 100vw;\n    opacity: 1; }\n  100% {\n    left: 100vw;\n    opacity: 0; } }\n\n@keyframes img-effect {\n  0% {\n    left: 0;\n    margin-left: 0; }\n  20% {\n    left: -0.6vw;\n    margin-left: 0; }\n  60% {\n    left: -0.6vw;\n    margin-left: 0; }\n  99% {\n    left: 100vw;\n    opacity: 1; }\n  100% {\n    left: 100vw;\n    opacity: 0; } }\n\n@-webkit-keyframes wrapper-effect {\n  0% {\n    left: 50%;\n    margin-left: -23.8vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 47.5vw; }\n  20% {\n    left: 30%;\n    margin-left: -8.4vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 16.9vw; }\n  40% {\n    left: 30%;\n    margin-left: -8.4vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 16.9vw; }\n  100% {\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n    width: 16.9vw;\n    left: 100%;\n    margin-left: 0px; } }\n\n@keyframes wrapper-effect {\n  0% {\n    left: 50%;\n    margin-left: -23.8vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 47.5vw; }\n  20% {\n    left: 30%;\n    margin-left: -8.4vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 16.9vw; }\n  40% {\n    left: 30%;\n    margin-left: -8.4vw;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    width: 16.9vw; }\n  100% {\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n    width: 16.9vw;\n    left: 100%;\n    margin-left: 0px; } }\n\n.content {\n  height: 100%;\n  min-height: 177.5vw;\n  overflow: hidden;\n  background-image: url('https://go-eun.github.io/main-background.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative; }\n\n.content.blur {\n    -webkit-animation-name: blur-in-effect;\n            animation-name: blur-in-effect;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-delay: 4.5s;\n    animation-delay: 4.5s; }\n\n.content .button-wrapper {\n    position: absolute;\n    bottom: 6vh;\n    left: 50%;\n    margin-left: -23.8vw;\n    width: 47.5vw;\n    height: 16.9vw; }\n\n.content .button-wrapper.start {\n      -webkit-animation-name: wrapper-effect;\n              animation-name: wrapper-effect;\n      -webkit-animation-duration: 3s;\n              animation-duration: 3s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-animation-delay: 1.5s;\n              animation-delay: 1.5s; }\n\n.content .button-wrapper.start .button-inner-wrapper .dot {\n        -webkit-animation-name: dot-effect;\n                animation-name: dot-effect;\n        -webkit-animation-duration: 1.5s;\n                animation-duration: 1.5s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.content .button-wrapper.start .button-inner-wrapper button {\n        -webkit-animation-name: start-effect;\n                animation-name: start-effect;\n        -webkit-animation-duration: 1.5s;\n                animation-duration: 1.5s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n\n.content .button-wrapper.start .button-inner-wrapper button span {\n          -webkit-animation-name: span-effect;\n                  animation-name: span-effect;\n          -webkit-animation-duration: 0.2s;\n                  animation-duration: 0.2s;\n          -webkit-animation-fill-mode: forwards;\n                  animation-fill-mode: forwards;\n          -webkit-animation-delay: 1.5s;\n                  animation-delay: 1.5s; }\n\n.content .button-wrapper.start .button-inner-wrapper button img {\n          -webkit-animation-name: img-effect;\n                  animation-name: img-effect;\n          -webkit-animation-duration: 1s;\n                  animation-duration: 1s;\n          -webkit-animation-fill-mode: forwards;\n                  animation-fill-mode: forwards;\n          -webkit-animation-delay: 1.5s;\n                  animation-delay: 1.5s; }\n\n.content .button-wrapper .button-inner-wrapper {\n      width: 100%;\n      height: 100%;\n      position: relative; }\n\n.content .button-wrapper .button-inner-wrapper .dot {\n        position: absolute;\n        width: 2.4vw;\n        height: 2.4vw;\n        border-radius: 50%;\n        right: 1.6vw;\n        top: 1.6vw; }\n\n.content .button-wrapper .button-inner-wrapper button {\n        background-color: #fff5fa;\n        color: #ea0076;\n        width: 100%;\n        height: 100%;\n        border: 0;\n        border-radius: 8.4vw;\n        font-weight: 600;\n        font-size: 5.3vw; }\n\n.content .button-wrapper .button-inner-wrapper button span {\n          font-size: 5.3vw;\n          display: inline-block;\n          width: 21.9vw;\n          height: 6.3vw;\n          overflow: hidden; }\n\n.content .button-wrapper .button-inner-wrapper button img {\n          display: inline-block;\n          background-color: #fff5fa;\n          height: 5.6vw;\n          margin-left: 3.1vw;\n          position: relative;\n          top: 0.3vw; }\n\n.content .button-wrapper .button-inner-wrapper button:focus {\n        outline: none; }\n"

/***/ }),

/***/ "./src/app/pages/main/main.ts":
/*!************************************!*\
  !*** ./src/app/pages/main/main.ts ***!
  \************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// ng build --base-href https://go-eun.github.io --deploy-url https://go-eun.github.io/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPage = /** @class */ (function () {
    function MainPage(router, renterer) {
        this.router = router;
        this.renterer = renterer;
        this.open = false;
        this.main = false;
        this.events = [];
    }
    MainPage.prototype.ngOnInit = function () { };
    MainPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var buttonStream$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].fromEvent(this.startButton.nativeElement, 'click')
            .do(function () {
            _this.buttonWrapper.nativeElement.className += " start";
            _this.content.nativeElement.className += " blur";
        })
            .delay(5500)
            .subscribe(function (res) {
            _this.router.navigate(['/list']);
        });
        this.events.push(buttonStream$);
    };
    MainPage.prototype.ngOnDestroy = function () {
        this.events.forEach(function (ele) { return ele.unsubscribe(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainPage.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('startButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainPage.prototype, "startButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dot'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainPage.prototype, "dot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buttonWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainPage.prototype, "buttonWrapper", void 0);
    MainPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-page',
            template: __webpack_require__(/*! ./main.html */ "./src/app/pages/main/main.html"),
            styles: [__webpack_require__(/*! ./main.scss */ "./src/app/pages/main/main.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MainPage);
    return MainPage;
}());



/***/ }),

/***/ "./src/app/uiBox/carousel/carousel.html":
/*!**********************************************!*\
  !*** ./src/app/uiBox/carousel/carousel.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-content\">\r\n  <div class=\"carousel-list\" #carouselList>\r\n    <div class=\"carousel-item\"\r\n      [ngClass]=\"{'active': i == 0}\"\r\n      *ngFor=\"let item of itemList; let i = index\">\r\n      <img [src]=\"item.path\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/uiBox/carousel/carousel.scss":
/*!**********************************************!*\
  !*** ./src/app/uiBox/carousel/carousel.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n.carousel-content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.carousel-content .carousel-list {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    white-space: nowrap;\n    overflow: visible; }\n\n.carousel-content .carousel-list .carousel-item {\n      display: inline-block; }\n\n.carousel-content .carousel-list .carousel-item:first-child {\n        margin-left: 26.3vw; }\n\n.carousel-content .carousel-list .carousel-item:last-child {\n        margin-right: 26.3vw; }\n\n.carousel-content .carousel-list .carousel-item img {\n        width: 37.5vw;\n        margin: 0 5vw; }\n"

/***/ }),

/***/ "./src/app/uiBox/carousel/carousel.ts":
/*!********************************************!*\
  !*** ./src/app/uiBox/carousel/carousel.ts ***!
  \********************************************/
/*! exports provided: CarouselUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselUi", function() { return CarouselUi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarouselUi = /** @class */ (function () {
    function CarouselUi(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.getIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listStartPosition = 0;
    }
    CarouselUi.prototype.ngOnInit = function () { };
    CarouselUi.prototype.ngAfterViewInit = function () {
        this.touchStart$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].fromEvent(this.carouselList.nativeElement, 'touchstart');
        this.touchMove$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].fromEvent(this.carouselList.nativeElement, 'touchmove');
        this.touchEnd$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].fromEvent(this.carouselList.nativeElement, 'touchend');
        this.itemWidth = this.carouselList.nativeElement.querySelector('.carousel-item').clientWidth;
        this.getIndex.emit(0);
        this.touchEventSet();
        this.touchEndEventSet();
    };
    CarouselUi.prototype.touchEventSet = function () {
        var _this = this;
        this.touchStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (start) {
            _this.listStartPosition = _this.carouselList.nativeElement.getBoundingClientRect().x;
            return _this.touchMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.touchEnd$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (move) {
                return { start: start, move: move };
            }));
        })).subscribe(function (e) {
            var startPoint = e.start.changedTouches[0].pageX;
            var movePoint = e.move.changedTouches[0].pageX;
            var sub = movePoint - startPoint;
            _this.translateX(_this.carouselList, _this.listStartPosition + sub);
        });
    };
    CarouselUi.prototype.touchEndEventSet = function () {
        var _this = this;
        this.touchEnd$.subscribe(function (e) {
            var x = _this.carouselList.nativeElement.getBoundingClientRect().x;
            var index = Math.floor(-(x - _this.itemWidth / 2) / _this.itemWidth);
            if (index < 0) {
                index = 0;
            }
            else if (index > _this.itemList.length - 1) {
                index = _this.itemList.length - 1;
            }
            var resX = -index * _this.itemWidth;
            _this.getIndex.emit(index);
            _this.updateIndicator(_this.carouselList, index);
            _this.translateX(_this.carouselList, resX, 0.1);
        });
    };
    CarouselUi.prototype.translateX = function (element, deltaX, duration, callback) {
        if (duration === void 0) { duration = 0; }
        if (callback === void 0) { callback = null; }
        element.nativeElement.style.transition = 'transform ' + duration + 's';
        element.nativeElement.style.transform = 'translate3d(' + deltaX + 'px, 0, 0)';
        if (duration > 0 && callback) {
            element.nativeElement.addEventListener('transitionend', callback, { once: true });
        }
    };
    CarouselUi.prototype.updateIndicator = function (element, index) {
        element.nativeElement.querySelector('.active').classList.remove('active');
        element.nativeElement.querySelector('.carousel-item:nth-child(' + (index + 1) + ')').classList.add('active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carouselList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselUi.prototype, "carouselList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselUi.prototype, "itemList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CarouselUi.prototype, "getIndex", void 0);
    CarouselUi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel-ui',
            template: __webpack_require__(/*! ./carousel.html */ "./src/app/uiBox/carousel/carousel.html"),
            styles: [__webpack_require__(/*! ./carousel.scss */ "./src/app/uiBox/carousel/carousel.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CarouselUi);
    return CarouselUi;
}());



/***/ }),

/***/ "./src/app/uiBox/closeButton/closeButton.html":
/*!****************************************************!*\
  !*** ./src/app/uiBox/closeButton/closeButton.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"close-box-inner\">\r\n  <div class=\"top line\"></div>\r\n  <div class=\"bottom line\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/uiBox/closeButton/closeButton.scss":
/*!****************************************************!*\
  !*** ./src/app/uiBox/closeButton/closeButton.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@keyframes back-fade-in {\n  0% {\n    background-color: rgba(255, 255, 255, 0); }\n  100% {\n    background-color: rgba(255, 255, 255, 0.9); } }\n\n@-webkit-keyframes close-width-top {\n  0% {\n    top: 0%;\n    left: 0vw;\n    width: 0; }\n  100% {\n    top: 50%;\n    left: -1.9vw;\n    width: 14.4vw; } }\n\n@keyframes close-width-top {\n  0% {\n    top: 0%;\n    left: 0vw;\n    width: 0; }\n  100% {\n    top: 50%;\n    left: -1.9vw;\n    width: 14.4vw; } }\n\n@-webkit-keyframes close-width-bottom {\n  0% {\n    bottom: 0%;\n    left: 0vw;\n    width: 0; }\n  100% {\n    bottom: 50%;\n    left: -1.9vw;\n    width: 14.4vw; } }\n\n@keyframes close-width-bottom {\n  0% {\n    bottom: 0%;\n    left: 0vw;\n    width: 0; }\n  100% {\n    bottom: 50%;\n    left: -1.9vw;\n    width: 14.4vw; } }\n\n.close-box-inner {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.close-box-inner .line {\n    position: absolute;\n    height: 2px;\n    background-color: #9b9b9b;\n    margin-bottom: -1px; }\n\n.close-box-inner .top {\n    -webkit-animation: close-width-top 1s;\n            animation: close-width-top 1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.close-box-inner .bottom {\n    -webkit-animation: close-width-bottom 1s;\n            animation: close-width-bottom 1s;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n"

/***/ }),

/***/ "./src/app/uiBox/closeButton/closeButton.ts":
/*!**************************************************!*\
  !*** ./src/app/uiBox/closeButton/closeButton.ts ***!
  \**************************************************/
/*! exports provided: CloseButtonUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButtonUi", function() { return CloseButtonUi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloseButtonUi = /** @class */ (function () {
    function CloseButtonUi(router, renderer) {
        this.router = router;
        this.renderer = renderer;
    }
    CloseButtonUi.prototype.ngOnInit = function () { };
    CloseButtonUi.prototype.ngAfterViewInit = function () {
    };
    CloseButtonUi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'close-button',
            template: __webpack_require__(/*! ./closeButton.html */ "./src/app/uiBox/closeButton/closeButton.html"),
            styles: [__webpack_require__(/*! ./closeButton.scss */ "./src/app/uiBox/closeButton/closeButton.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CloseButtonUi);
    return CloseButtonUi;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\97_gonicon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map