export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only jo baka, should throw an exception",
    input: `
        jo baka
      `,
    output: SyntaxError,
  },
  {
    name: "only aavje baka, should throw an exception",
    input: `
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "multiple jo baka, should throw an exception",
    input: `
        jo baka
        jo baka
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        jo baka
        jo baka
        aavje baka
        aavje baka
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        jo baka
        {
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        jo baka
        }
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        jo baka
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        jo baka
        {
          naam = 4
        }
        aavje baka
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        jo baka
        bol baka ;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        jo baka
        bol baka 478
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        jo baka
        bol baka sachu khotu;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        jo baka
        bol baka ~!*;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        jo baka
        bol baka a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        jo baka
        baka aa che a b c;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        jo baka
        baka aa che a 
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        jo baka
        baka aa che ;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        jo baka
        baka aa che a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        jo baka
        baka aa che a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        jo baka
        baka aa che
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    jo baka
    jya sudhi (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        jo baka
        a = 4
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        jo baka
        a *=- 4;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        jo baka
        "hello" = 4;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        jo baka
        5 = 890;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        jo baka
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        jo baka
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        jo baka
        (a + 4;
        aavje baka
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        jo baka
        a + 4);
        aavje baka
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        jo baka
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        jo baka
        (a * (4 + 8 + 10);
        aavje baka
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    jo baka
    baka aa che a = b && ;
    aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    jo baka
    baka aa che a = && b;
    aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    jo baka
    jo agar (&&);
    aavje baka;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    jo baka
    baka aa che a = 1..2;
    aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    jo baka
    baka aa che a = ..2;
    aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    jo baka
    baka aa che a = 1.2.3;
    aavje baka;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        jo baka
        jo agar (sachu)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        jo baka
        nahi toh {

        }
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        jo baka
       jo agar {

       }
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        jo baka
        athva toh (sachu) {
        }
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        jo baka
        athva toh (sachu) {
        } athva toh (sachu) {
        }
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        jo baka
        jo agar (sachu) {

        } athva toh (sachu)
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        jo baka
        jo agar (sachu) {

        } athva toh (sachu) {

        } athva toh (sachu)
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        jo baka
        jo agar (sachu) {

        } athva toh
        aavje baka;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        jo baka
        jo agar (sachu) {

        } athva toh (sachu) {

        } athva toh
        aavje baka;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        jo baka
          agla dekh bhai
        aavje baka
      `,
    output: SyntaxError,
  },
]