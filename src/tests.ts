import { expect } from "chai";
import isTransactionCompliant from "./calculation"

describe('calculation', function() {
  it('should be compliant given no transaction fee', function() {
    expect(isTransactionCompliant(1, 1, 1)).true;
  });
  it('should be compliant given 10% transaction fee', function() {
      expect(isTransactionCompliant(1, 10, 9)).true;
  });
  it('should not be compliant given 20% transaction fee', function() {
      expect(isTransactionCompliant(1, 10, 8)).false;
  })
});