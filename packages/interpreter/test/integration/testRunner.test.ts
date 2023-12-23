import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`jo baka;
    baka aa che a = 4;
    {
      baka aa che a = 90;
      bol baka a;
    }
    bol baka a;
    aavje baka;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`jo baka;
    baka aa che a = 4;
    {
      a = 90;
      bol baka a;
    }
    bol baka a;
    aavje baka;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`jo baka;
    baka aa che a = 4;
    {
      bol baka a;
    }
    bol baka a;
    aavje baka;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka;
    baka aa che a = 0;
    jya sudhi (a < 2) {
      bol baka "bhai";
      a += 1;
    }
    aavje baka;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka;
    baka aa che a = 0, b = 0;
    jya sudhi (a < 2) {
      jya sudhi (b < 1) {
        bol baka "bhai";
        b += 1;
      }
      a += 1;
    }
    aavje baka;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka;
    baka aa che a = 0;
    jya sudhi (a < 2) {
      baka aa che b = 0;
      jya sudhi (b < 2) {
        bol baka "bhai";
        b += 1;
        jo agar (b == 1)
          bas kar bhai;
      }
      a += 1;
    }
    aavje baka;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka
    baka aa che a = 0;
    jya sudhi (a < 10) {
      bol baka a;
      a += 1;
      jo agar (a == 6) {
        bas kar bhai;
      }
    }
    bol baka "done";
    aavje baka
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka
    baka aa che a = 0;
    jya sudhi (a < 10) {
      bol baka a;
      a += 1;
      jo agar (a == 6)
        bas kar bhai;
    }
    bol baka "done";
    aavje baka
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka
    baka aa che a = 0;
    jya sudhi (a < 10) {
      bol baka a;
      a += 1;
      jo agar (a == 3) {
        bas kar bhai;
      }
      bol baka "2 baar hi chapunga";
    }
    bol baka "done";
    aavje baka
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka
    
    jya sudhi (sachu) {
      bol baka "bhai";
    }
    aavje baka;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    jo baka
    baka aa che x = 6;
    jo agar (x < 5) {
      bol baka "x < 5";
    } athva toh (x < 8) {
      bol baka "x < 8";
    } jo agar (x < 4) {
      bol baka "x < 4";
    } nahi toh {
      bol baka "x > 4";
    }
    aavje baka;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     jo baka
//     baka aa che a = 0;
//     jya sudhi (a < 10) {
//       bol baka a;
//       a += 1;
//       jo agar (a == 3) {
//         bas kar bhai;
//       }
//       bol baka "2 baar hi chapunga";
//     }
//     bol baka "done";
//     aavje baka
//     `);
// });
