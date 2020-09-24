"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dayjs_1 = __importDefault(require("dayjs"));
const express_validator_1 = require("express-validator");
const body_parser_1 = __importDefault(require("body-parser"));
const apiCall_1 = __importDefault(require("./apiCall"));
const currencies_1 = __importDefault(require("./currencies"));
const calculation_1 = __importDefault(require("./calculation"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post("/", [
    express_validator_1.check("date")
        .isISO8601()
        .withMessage("Should be ISO8601 format date"),
    express_validator_1.check("from.value")
        .isNumeric()
        .withMessage("Should be a number"),
    express_validator_1.check("to.value")
        .isNumeric()
        .withMessage("Should be a number"),
    express_validator_1.check("to.currency").isIn(currencies_1.default),
    express_validator_1.check("from.currency").isIn(currencies_1.default)
], (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const dateOfTransaction = dayjs_1.default(req.body.date).format("YYYY-MM-DD");
    const currencyTo = req.body.to.currency;
    const currencyFrom = req.body.from.currency;
    const valueFrom = req.body.from.value;
    const valueTo = req.body.to.value;
    apiCall_1.default(dateOfTransaction, currencyFrom, currencyTo)
        .then(function (rateKeys) {
        res.json({ compliant: calculation_1.default(rateKeys, valueTo, valueFrom) });
    })
        .catch(err => {
        console.log(err);
        return null;
    });
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
