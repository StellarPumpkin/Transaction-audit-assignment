"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculation_1 = __importDefault(require("./calculation"));
describe('calculation', function () {
    it('should be compliant given no transaction fee', function () {
        chai_1.expect(calculation_1.default(1, 1, 1)).true;
    });
    it('should be compliant given 10% transaction fee', function () {
        chai_1.expect(calculation_1.default(1, 10, 9)).true;
    });
    it('should not be compliant given 20% transaction fee', function () {
        chai_1.expect(calculation_1.default(1, 10, 8)).false;
    });
});
