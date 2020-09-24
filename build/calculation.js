"use strict";
const isTransactionCompliant = function (rate, to, from) {
    const withoutFee = to / rate;
    const totalFee = Math.abs(from - withoutFee);
    const percentage = (totalFee / withoutFee) * 100;
    return percentage > 10 ? false : true;
};
module.exports = isTransactionCompliant;
