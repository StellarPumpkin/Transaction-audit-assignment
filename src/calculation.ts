const isTransactionCompliant = function(
  rate: number,
  to: number,
  from: number
) {
  const withoutFee = to / rate;
  const totalFee = Math.abs(from - withoutFee);
  const percentage = (totalFee / withoutFee) * 100;

  return percentage > 10 ? false : true
};
export = isTransactionCompliant;
