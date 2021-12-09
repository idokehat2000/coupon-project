function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddCompanyAddCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Add Company</h1>\n    <h3>please enter company details:</h3>\n</div>\n    <div>\n        <input required type=\"text\" type=\"text\" placeholder=\"company name\" [(ngModel)]=\"name\" /><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"company email\"  [(ngModel)]=\"email\"/><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"company password\" [(ngModel)]=\"password\" /><br/>\n       \n        <input type=\"button\" value=\"Add company\" (click)=\"addCompany()\" />\n    \n    </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddCustomerAddCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n   <h1>Add Customer</h1>\n   <h3>please enter customer details:</h3>\n</div>\n   <div>\n       <input required type=\"text\" type=\"text\" placeholder=\"customer first name\" [(ngModel)]=\"firstName\" /><br/>\n       <input required type=\"text\" type=\"text\" placeholder=\"customer last name\"  [(ngModel)]=\"lastName\"/><br/>\n       <input required type=\"text\" type=\"text\" placeholder=\"customer email\" [(ngModel)]=\"email\" /><br/>\n       <input required type=\"text\" type=\"text\" placeholder=\"customer password\" [(ngModel)]=\"password\"><br>\n       <input type=\"button\" value=\"Add customer\" (click)=\"addCustomer()\" />\n   \n   </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDeleteCompanyDeleteCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n<h1>Delete Company</h1>\n<h3>please enter the ID of the company you want to remove:</h3>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDeleteCustomerDeleteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Delete Customer</h1>\n    <h3>please enter the ID of the customer you want to remove:</h3>\n    \n    \n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGetAllCompaniesGetAllCompaniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Your companies</h1>\n<p *ngIf=\"!companies\"> <img src=\"assets/loadingif.gif\" alt=\"loadingif\"></p>\n<table *ngIf=\"companies\" class=\"tblCompanies\">\n    <tr>\n        <th>name</th>\n        <th >email</th>\n        <th >password</th>\n        <th>remove </th>\n    </tr>\n    <tr *ngFor=\"let c of companies\">\n        <td>{{c.name}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.password}}</td>  <input type=\"button\" value=\"delete company\" (click)=\"deleteCompany(c.id)\" />\n    </tr>\n</table>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGetAllCustomersGetAllCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Your Customers</h1>\n    <p *ngIf=\"!customers\"><img src=\"assets/loadingif.gif\" alt=\"loadingif\"></p>\n    <table *ngIf=\"customers\" class=\"tblCustomers\">\n        <tr>\n            <th>first name</th>\n            <th>last name</th>\n            <th >email</th>\n            <th>password</th>\n            <th>remove </th>\n        </tr>\n        <tr *ngFor=\"let c of customers\">\n            <td>{{c.firstName}}</td>\n            <td>{{c.lastName}}</td>\n            <td>{{c.email}}</td>\n            <td>{{c.password}}</td>\n            \n          <input type=\"button\" value=\"delete customer\" (click)=\"deleteCustomer(c.id)\" />\n        </tr>\n    </table>\n    \n    \n    </div>\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGetOneCompanyGetOneCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Find One Company</h1>\n    <h3>please enter the ID of your company:</h3>\n    <input type=\"number\" required type=\"number\" placeholder=\"company id\" [(ngModel)]=\"id\"/>\n    \n    <input type=\"button\" value=\"Find company\" (click)=\"getOneCompany()\"/>\n\n    <table *ngIf=\"company\"  >\n        <tr>\n            <th>name</th>\n            <th >email</th>\n            <th >password</th>\n           \n        </tr>\n        <tr  >\n            <td>{{company.name}}</td>\n            <td>{{company.email}}</td>\n            <td>{{company.password}}</td>  \n        </tr>\n    </table>\n  \n  \n  \n  \n  \n  \n    <!-- <div>\n        <h3>{{company.name}}</h3>\n        <h3>{{company.email}}</h3>\n        <h3>{{company.password}}</h3>\n    </div> -->\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGetOneCustomerGetOneCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Find One Customer</h1>\n    <h3>please enter the ID of your customer:</h3>\n    <input type=\"number\" required type=\"number\" placeholder=\"customer id\" [(ngModel)]=\"id\"/>\n    \n    <input type=\"button\" value=\"Find customer\" (click)=\"getOneCustomer()\"/>\n\n    <table *ngIf=\"customer\">\n        <tr>\n            <th>first name</th>\n            <th>last name</th>\n            <th >email</th>\n            <th >password</th>\n           \n        </tr>\n        <tr >\n            <td>{{customer.firstName}}</td>\n            <td>{{customer.lastName}}</td>\n            <td>{{customer.email}}</td>  \n            <td>{{customer.password}}</td>\n        </tr>\n    </table>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>welcome to my <span id=\"span1\">C</span><span id=\"span2\">o</span><span id=\"span3\">u</span><span id=\"span4\">p</span>on !</h1>\n<h2>here you can:<br/>\n<span id=\"span1\">Add</span><br/>\n<span id=\"span2\">Update</span><br/>\n<span id=\"span3\">Remove</span><br/>\nAnd <span id=\"span4\">View</span> the companies and customers in your business.</h2>\n<h3>please choose one of the operations on the left side of the screen.</h3>\n<h3 id=\"semiheader\">thank you and have a wonderful day !</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n   \n<header>\n<h1> <span id=\"span1\">MyCoupon</span></h1>  \n</header>\n<nav>\n <app-navbar></app-navbar>\n</nav>\n<main>\n<router-outlet></router-outlet>\n</main>\n<footer>\n<img src=\"assets/logo.jpg\" alt=\"logo\" style=\"height: 65px; width: 135px; margin-top: 0px; text-align: center;\">\n</footer>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <a id=\"1\" routerLink=\"home\">home</a><br/><br/>\n    <a routerLink=\"add-company\">add company</a><br/>\n    <a routerLink=\"update-company\" >update company</a><br/>\n    <a routerLink=\"get-one-company\"  >find company</a><br/>\n    <a routerLink=\"get-all-companies\" >get all companies</a><br/><br/><br/>\n    \n    <a routerLink=\"add-customer\">add customer</a><br/>\n    <a routerLink=\"update-customer\" >update customer</a><br/>\n    <a routerLink=\"get-one-customer\" >find customer</a><br/>\n    <a routerLink=\"get-all-customers\" >get all customers</a><br/>\n    <br>\n    <input type=\"button\" value=\"logout\" (click)=\"logoutFunction()\">\n    \n   \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpdateCompanyUpdateCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Update Company</h1>\n    <h3>please enter company details:</h3>\n    <div>\n        <input type=\"number\" required type=\"number\" placeholder=\"company id\" [(ngModel)]=\"id\"/><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"company name\" [(ngModel)]=\"name\" /><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"company email\"  [(ngModel)]=\"email\"/><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"company password\" [(ngModel)]=\"password\" /><br/>\n       \n        <input type=\"button\" value=\"update company\" (click)=\"updateCompany()\" />\n    \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpdateCustomerUpdateCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>Update Customer</h1>\n    <h3>please enter customer details:</h3>\n\n    <div>\n        <input type=\"number\" required type=\"number\" placeholder=\"customer id\" [(ngModel)]=\"id\"/><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"customer first name\" [(ngModel)]=\"firstName\" /><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"customer last name\"  [(ngModel)]=\"lastName\"/><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"customer email\" [(ngModel)]=\"email\" /><br/>\n        <input required type=\"text\" type=\"text\" placeholder=\"customer password\" [(ngModel)]=\"password\"><br>\n        <input required type=\"text\" type=\"button\" value=\"update customer\" (click)=\"updateCustomer()\" />\n    \n    </div>\n \n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/add-company/add-company.component */
    "./src/app/components/add-company/add-company.component.ts");
    /* harmony import */


    var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/update-company/update-company.component */
    "./src/app/components/update-company/update-company.component.ts");
    /* harmony import */


    var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/delete-company/delete-company.component */
    "./src/app/components/delete-company/delete-company.component.ts");
    /* harmony import */


    var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/get-all-companies/get-all-companies.component */
    "./src/app/components/get-all-companies/get-all-companies.component.ts");
    /* harmony import */


    var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/get-one-company/get-one-company.component */
    "./src/app/components/get-one-company/get-one-company.component.ts");
    /* harmony import */


    var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/add-customer/add-customer.component */
    "./src/app/components/add-customer/add-customer.component.ts");
    /* harmony import */


    var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/update-customer/update-customer.component */
    "./src/app/components/update-customer/update-customer.component.ts");
    /* harmony import */


    var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/delete-customer/delete-customer.component */
    "./src/app/components/delete-customer/delete-customer.component.ts");
    /* harmony import */


    var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/get-all-customers/get-all-customers.component */
    "./src/app/components/get-all-customers/get-all-customers.component.ts");
    /* harmony import */


    var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/get-one-customer/get-one-customer.component */
    "./src/app/components/get-one-customer/get-one-customer.component.ts");
    /* harmony import */


    var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/logout/logout.component */
    "./src/app/components/logout/logout.component.ts");

    var routes = [{
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "add-company",
      component: _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_4__["AddCompanyComponent"]
    }, {
      path: "update-company",
      component: _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCompanyComponent"]
    }, {
      path: "delete-company",
      component: _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_6__["DeleteCompanyComponent"]
    }, {
      path: "get-all-companies",
      component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCompaniesComponent"]
    }, {
      path: "get-one-company",
      component: _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_8__["GetOneCompanyComponent"]
    }, {
      path: "add-customer",
      component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_9__["AddCustomerComponent"]
    }, {
      path: "update-customer",
      component: _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_10__["UpdateCustomerComponent"]
    }, {
      path: "delete-customer",
      component: _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCustomerComponent"]
    }, {
      path: "get-all-customers",
      component: _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCustomersComponent"]
    }, {
      path: "get-one-customer",
      component: _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_13__["GetOneCustomerComponent"]
    }, {
      path: "logout",
      component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"]
    }, {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/components/layout/layout.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-company/add-company.component */
    "./src/app/components/add-company/add-company.component.ts");
    /* harmony import */


    var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/update-company/update-company.component */
    "./src/app/components/update-company/update-company.component.ts");
    /* harmony import */


    var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/delete-company/delete-company.component */
    "./src/app/components/delete-company/delete-company.component.ts");
    /* harmony import */


    var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/get-all-companies/get-all-companies.component */
    "./src/app/components/get-all-companies/get-all-companies.component.ts");
    /* harmony import */


    var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/get-one-company/get-one-company.component */
    "./src/app/components/get-one-company/get-one-company.component.ts");
    /* harmony import */


    var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/add-customer/add-customer.component */
    "./src/app/components/add-customer/add-customer.component.ts");
    /* harmony import */


    var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/update-customer/update-customer.component */
    "./src/app/components/update-customer/update-customer.component.ts");
    /* harmony import */


    var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/delete-customer/delete-customer.component */
    "./src/app/components/delete-customer/delete-customer.component.ts");
    /* harmony import */


    var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/get-all-customers/get-all-customers.component */
    "./src/app/components/get-all-customers/get-all-customers.component.ts");
    /* harmony import */


    var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/get-one-customer/get-one-customer.component */
    "./src/app/components/get-one-customer/get-one-customer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/logout/logout.component */
    "./src/app/components/logout/logout.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__["AddCompanyComponent"], _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCompanyComponent"], _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCompanyComponent"], _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_11__["GetAllCompaniesComponent"], _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_12__["GetOneCompanyComponent"], _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__["AddCustomerComponent"], _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_14__["UpdateCustomerComponent"], _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_15__["DeleteCustomerComponent"], _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_16__["GetAllCustomersComponent"], _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_17__["GetOneCustomerComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-company/add-company.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/add-company/add-company.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddCompanyAddCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/add-company/add-company.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/add-company/add-company.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddCompanyComponent */

  /***/
  function srcAppComponentsAddCompanyAddCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
      return AddCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");
    /* harmony import */


    var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/company */
    "./src/app/models/company.ts");

    var AddCompanyComponent =
    /*#__PURE__*/
    function () {
      function AddCompanyComponent(myService) {
        _classCallCheck(this, AddCompanyComponent);

        this.myService = myService;
      }

      _createClass(AddCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCompany",
        value: function addCompany() {
          var _this = this;

          this.myService.addCompany(new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"](0, this.name, this.email, this.password)).subscribe(function (Company) {
            alert("company " + _this.name + " has been added successfully !");
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return AddCompanyComponent;
    }();

    AddCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-company.component.css */
      "./src/app/components/add-company/add-company.component.css")).default]
    })], AddCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/add-customer/add-customer.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/add-customer/add-customer.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddCustomerAddCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/add-customer/add-customer.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/add-customer/add-customer.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddCustomerComponent */

  /***/
  function srcAppComponentsAddCustomerAddCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () {
      return AddCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");
    /* harmony import */


    var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/customer */
    "./src/app/models/customer.ts");

    var AddCustomerComponent =
    /*#__PURE__*/
    function () {
      function AddCustomerComponent(myService) {
        _classCallCheck(this, AddCustomerComponent);

        this.myService = myService;
      }

      _createClass(AddCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCustomer",
        value: function addCustomer() {
          var _this2 = this;

          this.myService.addCustomer(new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](0, this.firstName, this.lastName, this.email, this.password)).subscribe(function (Customer) {
            alert("customer " + _this2.firstName + " " + _this2.lastName + " added successfully !");
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return AddCustomerComponent;
    }();

    AddCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-customer.component.css */
      "./src/app/components/add-customer/add-customer.component.css")).default]
    })], AddCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/delete-company/delete-company.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/delete-company/delete-company.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDeleteCompanyDeleteCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWNvbXBhbnkvZGVsZXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/delete-company/delete-company.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/delete-company/delete-company.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DeleteCompanyComponent */

  /***/
  function srcAppComponentsDeleteCompanyDeleteCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function () {
      return DeleteCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteCompanyComponent =
    /*#__PURE__*/
    function () {
      function DeleteCompanyComponent() {
        _classCallCheck(this, DeleteCompanyComponent);
      }

      _createClass(DeleteCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeleteCompanyComponent;
    }();

    DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-company.component.css */
      "./src/app/components/delete-company/delete-company.component.css")).default]
    })], DeleteCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/delete-customer/delete-customer.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/delete-customer/delete-customer.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDeleteCustomerDeleteCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWN1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/delete-customer/delete-customer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/delete-customer/delete-customer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DeleteCustomerComponent */

  /***/
  function srcAppComponentsDeleteCustomerDeleteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function () {
      return DeleteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteCustomerComponent =
    /*#__PURE__*/
    function () {
      function DeleteCustomerComponent() {
        _classCallCheck(this, DeleteCustomerComponent);
      }

      _createClass(DeleteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeleteCustomerComponent;
    }();

    DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-customer.component.css */
      "./src/app/components/delete-customer/delete-customer.component.css")).default]
    })], DeleteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/get-all-companies/get-all-companies.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGetAllCompaniesGetAllCompaniesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tblCompanies, th,td{\r\n    border: solid white 2px;\r\n}\r\n\r\n.tblCompanies{\r\n    margin: auto;\r\n    margin-top: 40px;\r\n  \r\n   \r\n}\r\n\r\np{\r\n    text-align: center;\r\n    font-size: 20pt;\r\n    color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7O0FBR3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY29tcGFuaWVzL2dldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsQ29tcGFuaWVzLCB0aCx0ZHtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG59XHJcblxyXG4udGJsQ29tcGFuaWVze1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICBcclxuICAgXHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/get-all-companies/get-all-companies.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: GetAllCompaniesComponent */

  /***/
  function srcAppComponentsGetAllCompaniesGetAllCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function () {
      return GetAllCompaniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var GetAllCompaniesComponent =
    /*#__PURE__*/
    function () {
      function GetAllCompaniesComponent(myService) {
        _classCallCheck(this, GetAllCompaniesComponent);

        this.myService = myService;
      }

      _createClass(GetAllCompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.myService.getAllCompanies().subscribe(function (companies) {
            _this3.companies = companies;
          }, function (err) {
            alert("oops something went wrong...");
            console.log(err);
          });
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          var _this4 = this;

          this.myService.deleteCompany(id).subscribe(function (comp) {
            alert("company deleted succssefully !");

            for (var i = 0; i < _this4.companies.length; i++) {
              if (_this4.companies[i].id == id) {
                _this4.companies.splice(i, 1);

                break;
              }
            }
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return GetAllCompaniesComponent;
    }();

    GetAllCompaniesComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-all-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-all-companies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-all-companies.component.css */
      "./src/app/components/get-all-companies/get-all-companies.component.css")).default]
    })], GetAllCompaniesComponent);
    /***/
  },

  /***/
  "./src/app/components/get-all-customers/get-all-customers.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGetAllCustomersGetAllCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tblCustomers, th,td{\r\n    border: solid white 2px;\r\n}\r\n\r\n.tblCustomers{\r\n    margin: auto;\r\n    margin-top: 40px;\r\n}\r\n\r\np{\r\n    text-align: center;\r\n    font-size: 20pt;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRibEN1c3RvbWVycywgdGgsdGR7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxufVxyXG5cclxuLnRibEN1c3RvbWVyc3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/get-all-customers/get-all-customers.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: GetAllCustomersComponent */

  /***/
  function srcAppComponentsGetAllCustomersGetAllCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function () {
      return GetAllCustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var GetAllCustomersComponent =
    /*#__PURE__*/
    function () {
      function GetAllCustomersComponent(myService) {
        _classCallCheck(this, GetAllCustomersComponent);

        this.myService = myService;
      }

      _createClass(GetAllCustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.myService.getAllCustomers().subscribe(function (customers) {
            _this5.customers = customers;
          }, function (err) {
            alert("oops something went wrong...");
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          var _this6 = this;

          this.myService.deleteCustomer(id).subscribe(function (comp) {
            alert("customer deleted succssefully !");

            for (var i = 0; i < _this6.customers.length; i++) {
              if (_this6.customers[i].id == id) {
                _this6.customers.splice(i, 1);

                break;
              }
            }
          }, function (err) {
            alert("failed to delete customer...");
          });
        }
      }]);

      return GetAllCustomersComponent;
    }();

    GetAllCustomersComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-all-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-all-customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-all-customers.component.css */
      "./src/app/components/get-all-customers/get-all-customers.component.css")).default]
    })], GetAllCustomersComponent);
    /***/
  },

  /***/
  "./src/app/components/get-one-company/get-one-company.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/get-one-company/get-one-company.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGetOneCompanyGetOneCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tblCompanies, th,td{\r\n    border: solid white 2px;\r\n    \r\n}\r\n\r\n.tblCompanies{\r\n    margin: auto;\r\n    margin-top: 40px;\r\n   \r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWNvbXBhbnkvZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7O0FBR3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWNvbXBhbnkvZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsQ29tcGFuaWVzLCB0aCx0ZHtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50YmxDb21wYW5pZXN7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICBcclxuICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/get-one-company/get-one-company.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/get-one-company/get-one-company.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GetOneCompanyComponent */

  /***/
  function srcAppComponentsGetOneCompanyGetOneCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function () {
      return GetOneCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var GetOneCompanyComponent =
    /*#__PURE__*/
    function () {
      function GetOneCompanyComponent(myService) {
        _classCallCheck(this, GetOneCompanyComponent);

        this.myService = myService;
      }

      _createClass(GetOneCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOneCompany",
        value: function getOneCompany() {
          var _this7 = this;

          this.myService.getOneCompany(this.id).subscribe(function (comp) {
            _this7.company = comp;
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return GetOneCompanyComponent;
    }();

    GetOneCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-one-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-one-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-one-company.component.css */
      "./src/app/components/get-one-company/get-one-company.component.css")).default]
    })], GetOneCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/get-one-customer/get-one-customer.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/get-one-customer/get-one-customer.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGetOneCustomerGetOneCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tblCompanies, th,td{\r\n    border: solid white 2px;\r\n    \r\n}\r\n\r\n.tblCompanies{\r\n    margin: auto;\r\n    margin-top: 40px;\r\n   \r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWN1c3RvbWVyL2dldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCOzs7QUFHcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1vbmUtY3VzdG9tZXIvZ2V0LW9uZS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRibENvbXBhbmllcywgdGgsdGR7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICAgIFxyXG59XHJcblxyXG4udGJsQ29tcGFuaWVze1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgXHJcbiAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/get-one-customer/get-one-customer.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/get-one-customer/get-one-customer.component.ts ***!
    \***************************************************************************/

  /*! exports provided: GetOneCustomerComponent */

  /***/
  function srcAppComponentsGetOneCustomerGetOneCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function () {
      return GetOneCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var GetOneCustomerComponent =
    /*#__PURE__*/
    function () {
      function GetOneCustomerComponent(myService) {
        _classCallCheck(this, GetOneCustomerComponent);

        this.myService = myService;
      }

      _createClass(GetOneCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOneCustomer",
        value: function getOneCustomer() {
          var _this8 = this;

          this.myService.getOneCustomer(this.id).subscribe(function (cust) {
            _this8.customer = cust;
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return GetOneCustomerComponent;
    }();

    GetOneCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-one-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-one-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-one-customer.component.css */
      "./src/app/components/get-one-customer/get-one-customer.component.css")).default]
    })], GetOneCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1{\r\n    font-size: 50px;\r\n    font-family: fantasy;\r\n    text-align: left;\r\n    position: relative;\r\n    bottom: 40px;\r\n  \r\n  color: rgba(255, 255, 255, 0.979); \r\n}\r\nh2{\r\n    font-size: 25px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    position: relative;\r\n    bottom: 75px;\r\n   \r\n    color: rgba(255, 255, 255, 0.979);\r\n}\r\nh3{\r\n    font-size: 25px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    position: relative;\r\n    bottom: 100px;\r\n   \r\n    color: rgba(255, 255, 255, 0.979);\r\n}\r\n#span1{\r\n    color: red;\r\n}\r\n#span2{\r\n    color: yellow;\r\n}\r\n#span3{\r\n    color: blue;\r\n}\r\n#span4{\r\n    color: limegreen;\r\n}\r\n#semiheader{\r\n    font-size: 40px;\r\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: left;\r\n    position: relative;\r\n    bottom: 50px;\r\n   \r\n    color: rgba(255, 255, 255, 0.979);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZOztFQUVkLGlDQUFpQztBQUNuQztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTs7SUFFYixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixxRUFBcUU7SUFDckUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZOztJQUVaLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICBcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3OSk7IFxyXG59XHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3NXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTc5KTtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgIFxyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NzkpO1xyXG59XHJcbiNzcGFuMXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuI3NwYW4ye1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG4jc3BhbjN7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG4jc3BhbjR7XHJcbiAgICBjb2xvcjogbGltZWdyZWVuO1xyXG59XHJcbiNzZW1paGVhZGVye1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6Q2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgXHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3OSk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/layout/layout.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/layout/layout.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\r\n    margin: 0;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 10% 90%;\r\n    grid-template-rows: 12% 75% 13%;\r\n    \r\n    \r\n   \r\n}\r\n\r\nheader{\r\n    grid-column: span 3;\r\n    \r\n}\r\n\r\nfooter{\r\n    grid-column: span 2;\r\n    text-align: center;\r\n}\r\n\r\nmain{\r\n    overflow: auto;\r\n   \r\n    \r\n}\r\n\r\nh1{\r\n    text-align: left;\r\n    margin-top: 0px;\r\n    position: relative;\r\n    font-family: fantasy;\r\n    font-size: 25px;\r\n    color:  black;\r\n    margin-top: 15px;\r\n   \r\n    \r\n    \r\n    \r\n}\r\n\r\n#span1{\r\n    background-color: rgb(243, 206, 40) ;\r\n    border: rgb(243, 206, 40) solid ;\r\n    border-width: 3px;\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCOzs7O0FBSW5DOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjOzs7QUFHbEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7Ozs7O0FBS3BCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgNzUlIDEzJTtcclxuICAgIFxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5oZWFkZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xyXG4gICAgXHJcbn1cclxuXHJcbmZvb3RlcntcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgXHJcbiAgICBcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4jc3BhbjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMDYsIDQwKSA7XHJcbiAgICBib3JkZXI6IHJnYigyNDMsIDIwNiwgNDApIHNvbGlkIDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/layout/layout.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/layout/layout.component.ts ***!
    \*******************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.css */
      "./src/app/components/layout/layout.component.css")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/components/logout/logout.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/logout/logout.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/logout/logout.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/logout/logout.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/components/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_LoginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/LoginService */
    "./src/app/service/LoginService.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(myService) {
        _classCallCheck(this, NavbarComponent);

        this.myService = myService;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logoutFunction",
        value: function logoutFunction() {
          this.myService.logout(localStorage.myToken).subscribe(function (response) {
            alert("goodbye");
            localStorage.myToken = null;
            location.href = "http://localhost:8080/index.html";
          }, function (err) {
            alert("something went wrong");
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_service_LoginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/update-company/update-company.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/update-company/update-company.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpdateCompanyUpdateCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/update-company/update-company.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/update-company/update-company.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UpdateCompanyComponent */

  /***/
  function srcAppComponentsUpdateCompanyUpdateCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function () {
      return UpdateCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/company */
    "./src/app/models/company.ts");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var UpdateCompanyComponent =
    /*#__PURE__*/
    function () {
      function UpdateCompanyComponent(myService) {
        _classCallCheck(this, UpdateCompanyComponent);

        this.myService = myService;
      }

      _createClass(UpdateCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCompany",
        value: function updateCompany() {
          var _this9 = this;

          this.myService.updateCompany(new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"](this.id, this.name, this.email, this.password)).subscribe(function (Company) {
            alert("customer " + _this9.name + " updated successfully !");
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return UpdateCompanyComponent;
    }();

    UpdateCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"]
      }];
    };

    UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-company.component.css */
      "./src/app/components/update-company/update-company.component.css")).default]
    })], UpdateCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/update-customer/update-customer.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/update-customer/update-customer.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpdateCustomerUpdateCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWN1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/update-customer/update-customer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/update-customer/update-customer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UpdateCustomerComponent */

  /***/
  function srcAppComponentsUpdateCustomerUpdateCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function () {
      return UpdateCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/customer */
    "./src/app/models/customer.ts");
    /* harmony import */


    var src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/admin-service.service */
    "./src/app/service/admin-service.service.ts");

    var UpdateCustomerComponent =
    /*#__PURE__*/
    function () {
      function UpdateCustomerComponent(myService) {
        _classCallCheck(this, UpdateCustomerComponent);

        this.myService = myService;
      }

      _createClass(UpdateCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCustomer",
        value: function updateCustomer() {
          var _this10 = this;

          this.myService.updateCustomer(new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](this.id, this.firstName, this.lastName, this.email, this.password)).subscribe(function (Customer) {
            alert("customer " + _this10.firstName + " " + _this10.lastName + " added successfully !");
          }, function (err) {
            alert("oops! " + err.error);
          });
        }
      }]);

      return UpdateCustomerComponent;
    }();

    UpdateCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_service_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"]
      }];
    };

    UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-customer.component.css */
      "./src/app/components/update-customer/update-customer.component.css")).default]
    })], UpdateCustomerComponent);
    /***/
  },

  /***/
  "./src/app/models/company.ts":
  /*!***********************************!*\
    !*** ./src/app/models/company.ts ***!
    \***********************************/

  /*! exports provided: Company */

  /***/
  function srcAppModelsCompanyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Company", function () {
      return Company;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Company = function Company(id, name, email, password) {
      _classCallCheck(this, Company);

      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/models/customer.ts":
  /*!************************************!*\
    !*** ./src/app/models/customer.ts ***!
    \************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppModelsCustomerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Customer = function Customer(id, firstName, lastName, email, password) {
      _classCallCheck(this, Customer);

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/service/LoginService.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/LoginService.ts ***!
    \*****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(httpClient) {
        _classCallCheck(this, LoginService);

        this.httpClient = httpClient;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(email, password, type) {
          return this.httpClient.post("http://localhost:8080/LoginController/login/" + email, "/" + password + "/" + type, {
            responseType: "text"
          });
        }
      }, {
        key: "logout",
        value: function logout(token) {
          return this.httpClient.post("http://localhost:8080/LoginController/logout/" + token, null, {
            responseType: "text"
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/service/admin-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/admin-service.service.ts ***!
    \**************************************************/

  /*! exports provided: AdminServiceService */

  /***/
  function srcAppServiceAdminServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminServiceService", function () {
      return AdminServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AdminServiceService =
    /*#__PURE__*/
    function () {
      function AdminServiceService(httpClient) {
        _classCallCheck(this, AdminServiceService);

        this.httpClient = httpClient;
      }

      _createClass(AdminServiceService, [{
        key: "getAllCompanies",
        value: function getAllCompanies() {
          return this.httpClient.get("/Admin/getAllCompanies/" + localStorage.myToken);
        }
      }, {
        key: "addCompany",
        value: function addCompany(company) {
          return this.httpClient.post("/Admin/addCompany/" + localStorage.myToken, company);
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          return this.httpClient.put("/Admin/updateCompany/" + localStorage.myToken, company);
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          return this.httpClient.delete("/Admin/deleteCompany/" + localStorage.myToken + "/" + id, {
            responseType: 'text'
          });
        }
      }, {
        key: "getOneCompany",
        value: function getOneCompany(id) {
          return this.httpClient.get("/Admin/getOneCompany/" + localStorage.myToken + "/" + id);
        }
      }, {
        key: "getAllCustomers",
        value: function getAllCustomers() {
          return this.httpClient.get("/Admin/getAllCustomers/" + localStorage.myToken);
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(customer) {
          return this.httpClient.post("/Admin/addCustomer/" + localStorage.myToken, customer);
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          return this.httpClient.put("/Admin/updateCustomer/" + localStorage.myToken, customer);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          return this.httpClient.delete("/Admin/deleteCustomer/" + localStorage.myToken + "/" + id, {
            responseType: 'text'
          });
        }
      }, {
        key: "getOneCustomer",
        value: function getOneCustomer(id) {
          return this.httpClient.get("/Admin/getOneCustomer/" + localStorage.myToken + "/" + id);
        }
      }]);

      return AdminServiceService;
    }();

    AdminServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular\AdminProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map