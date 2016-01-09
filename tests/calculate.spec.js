import Calculator from "../src/Calculator";

describe("calculatorES6", function () {

  let calculator;

  beforeEach(() => {

    calculator = new Calculator();
  });

  it("add two numbers", function () {
    expect(calculator.add(1, 2)).toBe(3);
  });
});
