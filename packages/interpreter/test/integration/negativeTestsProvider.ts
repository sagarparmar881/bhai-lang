import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          jo baka;
          a = 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          jo baka;
          a += 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          jo baka;
          a -= 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          jo baka;
          a -= 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          jo baka;
          a /= 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          jo baka;
          a;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          jo baka;
          a + b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          jo baka;
          a + 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          jo baka;
          a - 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          jo baka;
          a - b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          jo baka;
          a * 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          jo baka;
          a * b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          jo baka;
          a / 4;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          jo baka;
          a / b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          jo baka;
          bol baka a;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          jo baka;
          bol baka a, b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          jo baka;
          baka aa che a = 8;
          bol baka a, b;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          jo baka;
          baka aa che a = b = 8;
          aavje baka;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        jo baka;
        baka aa che a;
        a = 9;
        baka aa che a = 0;
        aavje baka;
      `,
    exception: RuntimeException,
  },
  // cases with nakkamo
  {
    name: "interpreter use nakkamo variable in expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a;
      bol baka a + 9;
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nakkamo variable in expression - 2, should throw an exception",
    input: `
      jo baka;
      baka aa che a = nakkamo;
      bol baka a + 9;
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nakkamo in variable initialisation expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = nakkamo + 80;
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nakkamo in variable initialisation expression - 2, should throw an exception",
    input: `
      jo baka;
      baka aa che a = nakkamo + "jam";
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nakkamo variable in another variable initialisation expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a;
      baka aa che b = a + "hello";
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nakkamo variable in complex expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a;
      baka aa che b = ((a*9) * a + "hello");
      aavje baka;
    `,
    exception: NallaPointerException,
  },
  // sachu - khotu case
  {
    name: "interpreter use sachu variable in expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = sachu;
      bol baka a + 9;
      aavje baka;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use khotu variable in expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = khotu;
      bol baka a + 9;
      aavje baka;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sachu in variable initialisation expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = sachu + 80;
      aavje baka;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use khotu in variable initialisation expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = khotu + 80;
      aavje baka;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sachu variable in another variable initialisation expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = sachu;
      baka aa che b = a + "hello";
      aavje baka;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use khotu variable in complex expression, should throw an exception",
    input: `
      jo baka;
      baka aa che a = khotu;
      baka aa che b = ((a*9) * a + "hello");
      aavje baka;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nakkamo operand, should throw an exception",
    input: `
        jo baka
        (nakkamo * (4 + 8 + 10));
        aavje baka
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nakkamo operand and one boolean operand, should throw an exception",
    input: `
        jo baka
        (nakkamo * (sachu + 8 + 10));
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nakkamo operand and one boolean operand - 2, should throw nakkamo pointer exception",
    input: `
        jo baka
        (sachu * (nakkamo + 8 + 10));
        aavje baka
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nakkamo operand and one boolean operand - 3, should throw nakkamo pointer exception",
    input: `
        jo baka
        (nakkamo + sachu);
        aavje baka
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        jo baka
        (sachu * (4 + 8 + 10));
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        jo baka
        sachu + khotu;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        jo baka
        baka aa che a = sachu, b = khotu;
        a + b;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        jo baka
        sachu * khotu;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        jo baka
        baka aa che a = sachu, b = khotu;
        a * b;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        jo baka
        sachu / khotu;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        jo baka
        baka aa che a = sachu, b = khotu;
        a / b;
        aavje baka
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nakkamo, should throw an exception",
    input: `
        jo baka
        bol baka nakkamo + 5;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nakkamo, should throw an exception",
    input: `
        jo baka
        baka aa che a;
        a *= 5;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sachu, should throw an exception",
    input: `
        jo baka
        baka aa che a = sachu;
        a *= 5;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nakkamo - 2, should throw an exception",
    input: `
        jo baka
        baka aa che a = nakkamo;
        a /= 5;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        jo baka
        jya sudhi (sachu) {

        }
        aavje baka;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        jo baka
        baka aa che a = 0;
        jya sudhi (a < 2) {
          bol baka "bhai";
        }
        aavje baka;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        jo baka
        baka aa che a = 0;
        jo agar (sachu)
          roki de;
        aavje baka;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nakkamo with &&, should throw an exception",
    input: `
        jo baka
        bol baka nakkamo && 90;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nakkamo variable with &&, should throw an exception",
    input: `
        jo baka
        baka aa che a;
        bol baka a && 90;
        aavje baka;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      jo baka;
      bol baka "sachu" % 9;
      aavje baka;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        jo baka
        baka aa che a = 0;
        jya sudhi (a < 2) {
          chalva de;
          a = 5;
        }
        aavje baka;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        jo baka
        baka aa che a = 0;
        jo agar (sachu)
          chalva de
        aavje baka;
      `,
    output: RuntimeException,
  },
];
