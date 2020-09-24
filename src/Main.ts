import { Response, Request } from "express";
import express from "express";
import dayjs from "dayjs";
import { check, validationResult } from "express-validator";
import bodyParser from "body-parser";
import apiCall from "./apiCall";
import currencies from "./currencies";
import isTransactionCompliant from "./calculation"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
  "/",
  [
    check("date")
      .isISO8601()
      .withMessage("Should be ISO8601 format date"),
    check("from.value")
      .isNumeric()
      .withMessage("Should be a number"),
    check("to.value")
      .isNumeric()
      .withMessage("Should be a number"),
    check("to.currency").isIn(currencies),
    check("from.currency").isIn(currencies)
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const dateOfTransaction = dayjs(req.body.date).format("YYYY-MM-DD");
    const currencyTo: string = req.body.to.currency;
    const currencyFrom: string = req.body.from.currency;
    const valueFrom: number = req.body.from.value;
    const valueTo: number = req.body.to.value;

    apiCall(dateOfTransaction, currencyFrom, currencyTo)
      .then(function(rateKeys) {
            res.json({compliant: isTransactionCompliant(rateKeys, valueTo, valueFrom)});
          })
        .catch(err => {
          console.log(err);
          return null;
        });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
