var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the BillCreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BillCreateProvider = (function () {
    function BillCreateProvider(http) {
        this.http = http;
        this.proxy = "https://codificandoideas.org";
    }
    BillCreateProvider.prototype.getProveedor = function () {
        return this.http.post(this.proxy + "/terecuerdo/api/proveedores", "");
    };
    BillCreateProvider.prototype.createBill = function (data) {
        return this.http.post(this.proxy + "/terecuerdo/api/create_factura", data);
    };
    BillCreateProvider.prototype.updateBill = function (data) {
        return this.http.post(this.proxy + "/terecuerdo/api/actualizar_factura", data);
    };
    BillCreateProvider.prototype.refreshStatus = function (factura) {
        return this.http.post(this.proxy + "/terecuerdo/api/cambiar_estado", factura);
    };
    BillCreateProvider.prototype.deleteBill = function (deletebillObject) {
        return this.http.post(this.proxy + "/terecuerdo/api/cambiar_estado", deletebillObject);
    };
    BillCreateProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BillCreateProvider);
    return BillCreateProvider;
}());
export { BillCreateProvider };
//# sourceMappingURL=bill-create.js.map