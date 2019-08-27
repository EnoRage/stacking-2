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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _staker_details_staker_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staker-details/staker-details.component */ "./src/app/staker-details/staker-details.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    {
        path: 'asset',
        component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_4__["AssetComponent"],
    },
    {
        path: 'details',
        component: _staker_details_staker_details_component__WEBPACK_IMPORTED_MODULE_5__["StakerDetailsComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'staking';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _balance_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance/balance.component */ "./src/app/balance/balance.component.ts");
/* harmony import */ var _current_staking_current_staking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current-staking/current-staking.component */ "./src/app/current-staking/current-staking.component.ts");
/* harmony import */ var _staker_details_staker_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staker-details/staker-details.component */ "./src/app/staker-details/staker-details.component.ts");
/* harmony import */ var _blockchains_blockchains_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blockchains/blockchains.component */ "./src/app/blockchains/blockchains.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _stakers_stakers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stakers/stakers.component */ "./src/app/stakers/stakers.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _back_header_back_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./back-header/back-header.component */ "./src/app/back-header/back-header.component.ts");
/* harmony import */ var _trust_header_trust_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trust-header/trust-header.component */ "./src/app/trust-header/trust-header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _balance_balance_component__WEBPACK_IMPORTED_MODULE_6__["BalanceComponent"],
                _current_staking_current_staking_component__WEBPACK_IMPORTED_MODULE_7__["CurrentStakingComponent"],
                _staker_details_staker_details_component__WEBPACK_IMPORTED_MODULE_8__["StakerDetailsComponent"],
                _blockchains_blockchains_component__WEBPACK_IMPORTED_MODULE_9__["BlockchainsComponent"],
                _asset_asset_component__WEBPACK_IMPORTED_MODULE_10__["AssetComponent"],
                _stakers_stakers_component__WEBPACK_IMPORTED_MODULE_11__["StakersComponent"],
                _back_header_back_header_component__WEBPACK_IMPORTED_MODULE_13__["BackHeaderComponent"],
                _trust_header_trust_header_component__WEBPACK_IMPORTED_MODULE_14__["TrustHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset/asset.component.html":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-back-header></app-back-header>\n<div class=\"container pt-4\">\n  <app-balance></app-balance>\n  <app-current-staking></app-current-staking>\n</div>\n<div class=\"container\">\n  <app-stakers></app-stakers>\n</div>\n"

/***/ }),

/***/ "./src/app/asset/asset.component.scss":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXNzZXQvYXNzZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/asset/asset.component.ts":
/*!******************************************!*\
  !*** ./src/app/asset/asset.component.ts ***!
  \******************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetComponent = /** @class */ (function () {
    function AssetComponent() {
    }
    AssetComponent.prototype.ngOnInit = function () {
    };
    AssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./asset.component.html */ "./src/app/asset/asset.component.html"),
            styles: [__webpack_require__(/*! ./asset.component.scss */ "./src/app/asset/asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/back-header/back-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/back-header/back-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small pt-4\">\n  <div class=\"text-center col-12 d-flex justify-content-around\">\n    <div (click)=\"goBack()\"><i class=\"fas fa-arrow-left fa-2x navigation-icons\"></i></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/back-header/back-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/back-header/back-header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYmFjay1oZWFkZXIvYmFjay1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/back-header/back-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/back-header/back-header.component.ts ***!
  \******************************************************/
/*! exports provided: BackHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackHeaderComponent", function() { return BackHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var BackHeaderComponent = /** @class */ (function () {
    function BackHeaderComponent(location) {
        this.location = location;
    }
    BackHeaderComponent.prototype.ngOnInit = function () {
    };
    BackHeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    BackHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back-header',
            template: __webpack_require__(/*! ./back-header.component.html */ "./src/app/back-header/back-header.component.html"),
            styles: [__webpack_require__(/*! ./back-header.component.scss */ "./src/app/back-header/back-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BackHeaderComponent);
    return BackHeaderComponent;
}());



/***/ }),

/***/ "./src/app/balance/balance.component.html":
/*!************************************************!*\
  !*** ./src/app/balance/balance.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row small\">\n    <div class=\"col-12 card pt-4\">\n      <div class=\"balances-box card-body p-0 d-flex justify-content-between\">\n        <div>\n          <div>My Balance</div>\n          <div>Staked</div>\n        </div>\n        <div>\n          <div>{{(fiat$ | async) || '...' }} </div>\n          <div>0</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/balance/balance.component.scss":
/*!************************************************!*\
  !*** ./src/app/balance/balance.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYmFsYW5jZS9iYWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/balance/balance.component.ts":
/*!**********************************************!*\
  !*** ./src/app/balance/balance.component.ts ***!
  \**********************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trust_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trust-provider.service */ "./src/app/trust-provider.service.ts");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BalanceComponent = /** @class */ (function () {
    function BalanceComponent(trustProvider, cosmos) {
        var _this = this;
        this.trustProvider = trustProvider;
        this.cosmos = cosmos;
        this.subscription = this.trustProvider.currentAccount$.subscribe(function (account) {
            _this.cosmosInstance = _this.cosmos.getInstance(account);
            var balance$ = _this.cosmosInstance.balance$;
            _this.balance$ = balance$;
            var price$ = _this.cosmosInstance.getPrice();
            _this.fiat$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([price$, balance$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                var price = x[0], balance = x[1];
                return Number(price) * Number(balance);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                return '$' + x.toFixed(2);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        });
    }
    BalanceComponent.prototype.ngOnInit = function () {
    };
    BalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! ./balance.component.html */ "./src/app/balance/balance.component.html"),
            styles: [__webpack_require__(/*! ./balance.component.scss */ "./src/app/balance/balance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trust_provider_service__WEBPACK_IMPORTED_MODULE_2__["TrustProviderService"], _cosmos_service__WEBPACK_IMPORTED_MODULE_3__["CosmosService"]])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/blockchains/blockchains.component.html":
/*!********************************************************!*\
  !*** ./src/app/blockchains/blockchains.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small\">\n  <div class=\"col-12 pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\"> Blockhains</h6>\n        <table class=\"table\">\n          <tbody>\n          <tr (click)=\"navigate()\">\n            <th scope=\"row\"><img class=\"icon\"\n                                 src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDQ3IDY0Ij48cGF0aCBmaWxsPSIjMkM3REY3IiBkPSJNMzAuMjUyIDYzLjQ0MWMtNC41NSAwLTcuODY0LTEuMDg5LTkuOTQ2LTMuMjY3LTIuMDgtMi4xNzctMy4xMjEtNC41MjUtMy4xMjEtNy4wNDEgMC0uOTIuMTgxLTEuNjk0LjU0NC0yLjMyM2EzLjk5MyAzLjk5MyAwIDAgMSAxLjQ4OS0xLjQ4OWMuNjI5LS4zNjMgMS40MDMtLjU0NCAyLjMyMy0uNTQ0LjkyIDAgMS42OTMuMTgxIDIuMzIzLjU0NC42MjkuMzYzIDEuMTI1Ljg2IDEuNDg4IDEuNDg5LjM2My42MjkuNTQ0IDEuNDAzLjU0NCAyLjMyMyAwIDEuMTEzLS4yNjYgMi4wMi0uNzk4IDIuNzIyLS41MzMuNzAyLTEuMTYyIDEuMTYxLTEuODg4IDEuMzguNjMuODcgMS42MjIgMS40ODcgMi45NzcgMS44NSAxLjM1NS4zODggMi43MS41ODEgNC4wNjUuNTgxIDEuODg3IDAgMy41OTMtLjUwOCA1LjExOC0xLjUyNCAxLjUyNC0xLjAxNyAyLjY1LTIuNTE3IDMuMzc2LTQuNTAxLjcyNi0xLjk4NCAxLjA4OS00LjIzNSAxLjA4OS02Ljc1MiAwLTIuNzM0LS40LTUuMDctMS4xOTgtNy4wMDUtLjc3NS0xLjk2LTEuOTI0LTMuNDEyLTMuNDQ5LTQuMzU2YTkuMjEgOS4yMSAwIDAgMC00LjkzNi0xLjQxNWMtMS4xNjIgMC0yLjYxMy40ODQtNC4zNTYgMS40NTJsLTMuMTk0IDEuNTk3di0xLjU5N0wzNy4wNzYgMTYuNEgxNy4xODV2MTkuODljMCAxLjY0Ni4zNjMgMy4wMDEgMS4wODkgNC4wNjZzMS44MzkgMS41OTcgMy4zNCAxLjU5N2MxLjE2IDAgMi4yNzQtLjM4NyAzLjMzOS0xLjE2MmExMS44MDMgMTEuODAzIDAgMCAwIDIuNzU4LTIuODNjLjA5Ny0uMjE5LjIxOC0uMzc2LjM2My0uNDczYS43MjMuNzIzIDAgMCAxIC40NzItLjE4MWMuMjY2IDAgLjU4LjEzMy45NDQuNC4zMzkuMzg2LjUwOC44MzQuNTA4IDEuMzQyYTkuMjQzIDkuMjQzIDAgMCAxLS4xODIgMS4wMTdjLS44MjIgMS44MzktMS45NiAzLjI0Mi0zLjQxMiA0LjIxYTguNDU3IDguNDU3IDAgMCAxLTQuNzkgMS40NTJjLTQuMzA4IDAtNy4yODUtLjg0Ny04LjkzLTIuNTQtMS42NDUtMS42OTUtMi40NjgtMy45OTQtMi40NjgtNi44OTdWMTYuNEguMDUydi0zLjcwM2gxMC4xNjR2LTguNDJMNy44OTMgMS45NTJWLjA2Nmg2Ljc1MWwyLjU0IDEuMzA2djExLjMyNWwyNi4yOC0uMDcyIDIuNjE0IDIuNjEzLTE2LjExNiAxNi4xMTZhMTAuODA3IDEwLjgwNyAwIDAgMSAzLjA0OS0uNzI2YzEuNzQyIDAgMy43MDIuNTU3IDUuODggMS42NyAyLjIwMiAxLjA4OSAzLjg5NiAyLjU5IDUuMDgxIDQuNSAxLjE4NiAxLjg4OCAxLjk0OCAzLjcwMyAyLjI4NyA1LjQ0NS4zNjMgMS43NDMuNTQ1IDMuMjkxLjU0NSA0LjY0NiAwIDMuMDk4LS42NTQgNS45NzctMS45NiA4LjY0LTEuMzA3IDIuNjYxLTMuMjkxIDQuNjQ1LTUuOTUzIDUuOTUyLTIuNjYyIDEuMzA3LTUuNTQyIDEuOTYtOC42MzkgMS45NnoiLz48L3N2Zz4=\"\n                                 alt=\"logo\"></th>\n            <td>Tezos</td>\n            <td>13%</td>\n            <td>XZT</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          <tr (click)=\"navigate()\">\n            <th scope=\"row\"><img class=\"icon\"\n                                 src=\"../../assets/img/cosmos.png\"\n                                 alt=\"cosmos\">\n            </th>\n            <td>Cosmos</td>\n            <td>13%</td>\n            <td>ATOM</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          <tr (click)=\"navigate()\">\n            <th scope=\"row\"><img class=\"icon\"\n                                 src=\"https://assets.trustwalletapp.com/blockchains/vechain/info/logo.png\"\n                                 alt=\"vechain\">\n            </th>\n            <td>VeChain</td>\n            <td>1%</td>\n            <td>VET</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blockchains/blockchains.component.scss":
/*!********************************************************!*\
  !*** ./src/app/blockchains/blockchains.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYmxvY2tjaGFpbnMvYmxvY2tjaGFpbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchains/blockchains.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blockchains/blockchains.component.ts ***!
  \******************************************************/
/*! exports provided: BlockchainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainsComponent", function() { return BlockchainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlockchainsComponent = /** @class */ (function () {
    function BlockchainsComponent(router) {
        this.router = router;
    }
    BlockchainsComponent.prototype.ngOnInit = function () {
    };
    BlockchainsComponent.prototype.navigate = function () {
        this.router.navigate(['/asset']);
    };
    BlockchainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blockchains',
            template: __webpack_require__(/*! ./blockchains.component.html */ "./src/app/blockchains/blockchains.component.html"),
            styles: [__webpack_require__(/*! ./blockchains.component.scss */ "./src/app/blockchains/blockchains.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlockchainsComponent);
    return BlockchainsComponent;
}());



/***/ }),

/***/ "./src/app/cosmos.service.ts":
/*!***********************************!*\
  !*** ./src/app/cosmos.service.ts ***!
  \***********************************/
/*! exports provided: CosmosAccount, CosmosAccountResult, CosmosService, CosmosServiceInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosAccount", function() { return CosmosAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosAccountResult", function() { return CosmosAccountResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosService", function() { return CosmosService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosServiceInstance", function() { return CosmosServiceInstance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var Coin = /** @class */ (function () {
    function Coin() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(function (value) { return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(value); }, { toClassOnly: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a)
    ], Coin.prototype, "amount", void 0);
    return Coin;
}());
var PublicKey = /** @class */ (function () {
    function PublicKey() {
    }
    return PublicKey;
}());
var CosmosAccount = /** @class */ (function () {
    function CosmosAccount() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Type"])(function () { return PublicKey; }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])({ name: 'public_key' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PublicKey)
    ], CosmosAccount.prototype, "publicKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Type"])(function () { return Coin; }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CosmosAccount.prototype, "coins", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(function (value) { return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(value); }, { toClassOnly: true }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Expose"])({ name: 'account_number' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a)
    ], CosmosAccount.prototype, "accountNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(function (value) { return Number(value); }, { toClassOnly: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CosmosAccount.prototype, "sequence", void 0);
    return CosmosAccount;
}());

var CosmosAccountResult = /** @class */ (function () {
    function CosmosAccountResult() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Type"])(function () { return CosmosAccount; }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CosmosAccount)
    ], CosmosAccountResult.prototype, "value", void 0);
    return CosmosAccountResult;
}());

var CosmosService = /** @class */ (function () {
    function CosmosService(http) {
        this.http = http;
        this.mapping = {};
    }
    CosmosService.prototype.getInstance = function (address) {
        if (this.mapping[address]) {
            return this.mapping[address];
        }
        var instance = new CosmosServiceInstance(this.http, address);
        this.mapping[address] = instance;
        return instance;
    };
    CosmosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CosmosService);
    return CosmosService;
}());

var CosmosServiceInstance = /** @class */ (function () {
    function CosmosServiceInstance(http, account) {
        this.http = http;
        this.account = account;
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 5000);
        var url = 'https://cosmos-rpc.trustwalletapp.com';
        var balance$ = this.getBalance(account, url);
        this.balance$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([timer$, balance$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (x) {
            var timer = x[0], balance = x[1];
            var denom = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(1000000);
            // @ts-ignore
            return (balance / denom).toString();
        }));
    }
    CosmosServiceInstance.prototype.getBalance = function (address, baseUrl) {
        return this.http.get(baseUrl + ("/auth/accounts/" + address)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
            // @ts-ignore
            var cosmosAccount = result.value;
            var balances = cosmosAccount.coins;
            var cosmosBalance = balances.find(function (coin) { return coin.denom.toUpperCase() == "UATOM"; });
            return cosmosBalance.amount;
        }));
    };
    CosmosServiceInstance.prototype.getPrice = function () {
        var body = {
            "currency": "USD",
            "tokens": [
                {
                    "contract": "0x0000000000000000000000000000000000000076"
                }
            ]
        };
        return this.http.post(' https://api.trustwallet.com/prices', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
            var currency = result.docs;
            var coin = currency.find(function (coin) { return coin.contract == '0x0000000000000000000000000000000000000076'; });
            return coin.price;
        }));
    };
    return CosmosServiceInstance;
}());



/***/ }),

/***/ "./src/app/current-staking/current-staking.component.html":
/*!****************************************************************!*\
  !*** ./src/app/current-staking/current-staking.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small\">\n  <div class=\"col-12 pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\"> Staking</h6>\n        <table class=\"table\">\n          <tbody>\n          <tr (click)=\"navigate()\" id=\"Cosmos\">\n            <th scope=\"row\"><img class=\"icon\" src=\"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/validators/assets/cosmosvaloper102ruvpv2srmunfffxavttxnhezln6fnc54at8c/logo.png\" alt=\"Ztake\"></th>\n            <td>Ztake</td>\n            <td>11%</td>\n            <td>17777</td>\n            <td>ATOM</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/current-staking/current-staking.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/current-staking/current-staking.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY3VycmVudC1zdGFraW5nL2N1cnJlbnQtc3Rha2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/current-staking/current-staking.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/current-staking/current-staking.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrentStakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentStakingComponent", function() { return CurrentStakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CurrentStakingComponent = /** @class */ (function () {
    function CurrentStakingComponent(router) {
        this.router = router;
    }
    CurrentStakingComponent.prototype.ngOnInit = function () {
    };
    CurrentStakingComponent.prototype.navigate = function () {
        this.router.navigate(['/details']);
    };
    CurrentStakingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-staking',
            template: __webpack_require__(/*! ./current-staking.component.html */ "./src/app/current-staking/current-staking.component.html"),
            styles: [__webpack_require__(/*! ./current-staking.component.scss */ "./src/app/current-staking/current-staking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CurrentStakingComponent);
    return CurrentStakingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container pt-4\">\n  <app-trust-header></app-trust-header>\n  <app-balance></app-balance>\n  <app-current-staking></app-current-staking>\n</div>\n<div class=\"container\">\n  <app-blockchains></app-blockchains>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trust_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trust-provider.service */ "./src/app/trust-provider.service.ts");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(trustProvider, cosmos) {
        this.trustProvider = trustProvider;
        this.cosmos = cosmos;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trust_provider_service__WEBPACK_IMPORTED_MODULE_2__["TrustProviderService"], _cosmos_service__WEBPACK_IMPORTED_MODULE_3__["CosmosService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-blue container-fluid\"></div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/staker-details/staker-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/staker-details/staker-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-back-header></app-back-header>\n<div class=\"container pt-4\">\n  <app-balance></app-balance>\n</div>\n<div class=\"container pt-2\">\n  <div class=\"row small\">\n    <div class=\"col-12 pt-2\">\n      <div class=\"card\">\n        <div class=\"card-body p-2\">\n          <div class=\"col-12 text-center\">\n            <img style=\"width: 90px\"\n                 src=\"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/validators/assets/cosmosvaloper102ruvpv2srmunfffxavttxnhezln6fnc54at8c/logo.png\"\n                 alt=\"cosmos\">\n          </div>\n          <div class=\"text-center pt-1\">\n            <p class=\"description\">We have been participating in the validating role since early 2018 and is a proud\n              member of the Never Jailed Crew of the Game of Stakes</p>\n          </div>\n          <div style=\"display: grid; grid-template: 1fr 1fr  / 1fr 1fr;\"\n               class=\"col-12 text-center pt-2\">\n            <div>\n              <h5>Annual Rate (APR)</h5>\n            </div>\n            <div>\n              <h5>Staked amount</h5>\n            </div>\n            <div>\n              <p class=\"metric\">9.65%</p>\n            </div>\n            <div>\n              <p class=\"metric\">0</p>\n            </div>\n          </div>\n          <div class=\"col-12 text-center pt-2\">\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n              </div>\n              <input placeholder=\"Enter ATOM to stake\" type=\"number\" class=\"form-control\" aria-label=\"Large\"\n                     aria-describedby=\"inputGroup-sizing-sm\">\n            </div>\n          </div>\n          <div class=\"col-12 text-center pt-4 pb-4\">\n            <button class=\"btn btn-info btn-lg col-12\">STAKE</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staker-details/staker-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/staker-details/staker-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc3Rha2VyLWRldGFpbHMvc3Rha2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/staker-details/staker-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/staker-details/staker-details.component.ts ***!
  \************************************************************/
/*! exports provided: StakerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakerDetailsComponent", function() { return StakerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StakerDetailsComponent = /** @class */ (function () {
    function StakerDetailsComponent() {
    }
    StakerDetailsComponent.prototype.ngOnInit = function () {
    };
    StakerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staker-details',
            template: __webpack_require__(/*! ./staker-details.component.html */ "./src/app/staker-details/staker-details.component.html"),
            styles: [__webpack_require__(/*! ./staker-details.component.scss */ "./src/app/staker-details/staker-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StakerDetailsComponent);
    return StakerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/stakers/stakers.component.html":
/*!************************************************!*\
  !*** ./src/app/stakers/stakers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small\">\n  <div class=\"col-12 pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\"> All Stakers</h6>\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <th scope=\"row\"><img class=\"icon\"\n                                 src=\"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/validators/assets/cosmosvaloper102ruvpv2srmunfffxavttxnhezln6fnc54at8c/logo.png\"\n                                 alt=\"Ztake\">\n            </th>\n            <td>\n              Ztake.org\n            </td>\n            <td>9.65%</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          <tr>\n            <th scope=\"row\"><img class=\"icon \"\n                                 src=\"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/validators/assets/cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys/logo.png\">\n            </th>\n            <td>Certus One\n            </td>\n            <td>9.08%</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\"><img class=\"icon\" src=\"../../assets/img/cosmos.png\" alt=\"Cosmos\"></th>\n            <td>Polychain Labs\n            </td>\n            <td>8.30%</td>\n            <td><i class=\"fas fa-chevron-right\"></i></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/stakers/stakers.component.scss":
/*!************************************************!*\
  !*** ./src/app/stakers/stakers.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc3Rha2Vycy9zdGFrZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stakers/stakers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stakers/stakers.component.ts ***!
  \**********************************************/
/*! exports provided: StakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakersComponent", function() { return StakersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StakersComponent = /** @class */ (function () {
    function StakersComponent() {
    }
    StakersComponent.prototype.ngOnInit = function () {
    };
    StakersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stakers',
            template: __webpack_require__(/*! ./stakers.component.html */ "./src/app/stakers/stakers.component.html"),
            styles: [__webpack_require__(/*! ./stakers.component.scss */ "./src/app/stakers/stakers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StakersComponent);
    return StakersComponent;
}());



/***/ }),

/***/ "./src/app/trust-header/trust-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/trust-header/trust-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small\">\n  <div class=\"text-center col-12 d-flex justify-content-around\">\n    <div><img class=\"icon-trust\" src=\"https://avatars0.githubusercontent.com/u/32179889?s=200&v=4\" alt=\"trust\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/trust-header/trust-header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/trust-header/trust-header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdHJ1c3QtaGVhZGVyL3RydXN0LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/trust-header/trust-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/trust-header/trust-header.component.ts ***!
  \********************************************************/
/*! exports provided: TrustHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustHeaderComponent", function() { return TrustHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrustHeaderComponent = /** @class */ (function () {
    function TrustHeaderComponent() {
    }
    TrustHeaderComponent.prototype.ngOnInit = function () {
    };
    TrustHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trust-header',
            template: __webpack_require__(/*! ./trust-header.component.html */ "./src/app/trust-header/trust-header.component.html"),
            styles: [__webpack_require__(/*! ./trust-header.component.scss */ "./src/app/trust-header/trust-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrustHeaderComponent);
    return TrustHeaderComponent;
}());



/***/ }),

/***/ "./src/app/trust-provider.service.ts":
/*!*******************************************!*\
  !*** ./src/app/trust-provider.service.ts ***!
  \*******************************************/
/*! exports provided: TrustProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustProviderService", function() { return TrustProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TrustProviderService = /** @class */ (function () {
    function TrustProviderService() {
        this.network = 118; // Cosmos
        this.currentAccount$ = this.getAddressOnce(this.network).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.currentAccount$.subscribe();
    }
    TrustProviderService.prototype.getAddressOnce = function (network) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!window.trustProvider; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(window.trustProvider.getAccounts());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (accounts) {
            var accountRaw = accounts.find(function (account) { return account.network === network; });
            return JSON.stringify(accountRaw.address)
                .replace('"', '')
                .replace('"', '');
        }));
    };
    TrustProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrustProviderService);
    return TrustProviderService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/erage/Desktop/anotherChain/staking/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map