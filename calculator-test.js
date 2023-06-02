let values = {
  amount: null,
  years: null,
  rate: null
}
afterEach(() => {
   values = {
    amount: null,
    years: null,
    rate: null
  }
})

it('should calculate the monthly rate correctly', function() {
  values = {
    amount: 40000,
    years: 8,
    rate: 5.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('510.21');
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 12331,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('160.85');
});

it("should handle terribly high interest rates", function() {
  values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

