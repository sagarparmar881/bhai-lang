export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      jo baka
      aavje baka
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      jo baka
      aavje baka
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      jo baka
      ;
      aavje baka
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      jo baka
      ;
      ;
      ;;
      aavje baka
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      jo baka
      {};
      aavje baka
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      jo baka
      {
        baka aa che a = 4;
      }
      aavje baka
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      jo baka
      baka aa che a, b, c;
      aavje baka
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      jo baka
      baka aa che a = 10, b = "crap";
      aavje baka
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      jo baka
      baka aa che a = 10, b = 5;
      aavje baka
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      jo baka
      baka aa che a = 7 + 90;
      aavje baka
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      jo baka
      baka aa che a = sahi;
      a = 4;
      aavje baka
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      jo baka
      baka aa che a = 2;
      a *= 4;
      aavje baka
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      jo baka
      baka aa che a = 2;
      (a + 4);
      aavje baka
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      jo baka
      baka aa che a = 2;
      (a + 4) * 10 + (5 - 4);
      aavje baka
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      jo baka
      baka aa che a = 2;
      (a * (4 + 8) + 10);
      aavje baka
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    jo baka
    baka aa che x = 9;
    jo agar (x != 9) {
      x = 5;
      bol baka x;
    } nahi toh (x >= 9);
    aavje baka;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      jo baka;
      baka aa che a , b;
      a = b = 60;
      bol baka a, b;
      aavje baka
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nakkamo and "==", should success`,
    input: `
      jo baka;
      baka aa che a;
      jo agar (a == nakkamo) {
        bol baka a;
      }
      aavje baka
    `,
    output: "nakkamo",
  },
  {
    name: `binaryExpression print test with nakkamo without any operator, should success`,
    input: `
      jo baka;
      baka aa che a;
      jo agar (a) {
        bol baka a;
      } nahi toh {
        bol baka "not nakkamo";
      }
      aavje baka
    `,
    output: "not nakkamo",
  },
  {
    name: `binaryExpression print test - comparing nakkamo with nakkamo "==", should success`,
    input: `
      jo baka;
      jo agar (nakkamo == nakkamo) {
        bol baka "hai nakkamo";
      }
      aavje baka
    `,
    output: "hai nakkamo",
  },
  {
    name: `binaryExpression print test with comparing nakkamo with var "a", should success`,
    input: `
      jo baka;
      baka aa che a;
      jo agar (nakkamo == a) {
        bol baka "hai nakkamo";
      }
      aavje baka
    `,
    output: "hai nakkamo",
  },
  {
    name: `binaryExpression print test with comparing nakkamo with var "a" explicit initialization, should success`,
    input: `
      jo baka;
      baka aa che a = nakkamo;
      jo agar (nakkamo == a) {
        bol baka "hai nakkamo";
      }
      aavje baka
    `,
    output: "hai nakkamo",
  },
  {
    name: `binaryExpression print test with comparing nakkamo with string nakkamo, should success`,
    input: `
      jo baka;
      baka aa che a = nakkamo;
      jo agar ("nakkamo" == a) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "not nakkamo";
      }
      aavje baka
    `,
    output: "not nakkamo",
  },
  {
    name: `binaryExpression print test with comparing nakkamo with string nakkamo, should success`,
    input: `
      jo baka;
      baka aa che a = "nakkamo";
      jo agar (nakkamo == a) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "not nakkamo";
      }
      aavje baka
    `,
    output: "not nakkamo",
  },
  {
    name: `binaryExpression print test with comparing nakkamo with string null, should success`,
    input: `
      jo baka;
      baka aa che a = "null";
      jo agar (nakkamo == a) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "not nakkamo";
      }
      aavje baka
    `,
    output: "not nakkamo",
  },
  {
    name: `binaryExpression print test with nakkamo var "a" & "b" - 0, should success`,
    input: `
      jo baka;
      baka aa che a;
      baka aa che b;
      jo agar (a == b) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "nahi nakkamo";
      }
      aavje baka
    `,
    output: "hai nakkamo",
  },
  {
    name: `binaryExpression print test with nakkamo var "a" & "b" - 1, should success`,
    input: `
      jo baka;
      baka aa che a;
      baka aa che b = nakkamo;
      jo agar (a == b) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "nahi nakkamo";
      }
      aavje baka
    `,
    output: "hai nakkamo",
  },
  {
    name: `binaryExpression print test with nakkamo var "a" & "b" -2, should success`,
    input: `
      jo baka;
      baka aa che a;
      baka aa che b = "nakkamo";
      jo agar (a == b) {
        bol baka "hai nakkamo";
      } nahi toh {
        bol baka "nahi nakkamo";
      }
      aavje baka
    `,
    output: "nahi nakkamo",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      jo baka;
      baka aa che a = sahi;
      jo agar (sahi == a) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      jo baka;
      baka aa che a = galat;
      jo agar (galat == a) {
        bol baka "hai galat";
      } nahi toh {
        bol baka "nahi galat";
      }
      aavje baka
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      jo baka;
      baka aa che a = "sahi";
      jo agar (sahi == a) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      jo baka;
      baka aa che a = 7;
      jo agar (sahi == (a > 5)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      jo baka;
      baka aa che a = 7;
      jo agar ("sahi" == (a > 5)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      jo baka;
      baka aa che a = sahi;
      jo agar ("sahi" == (a == sahi)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      jo baka;
      baka aa che a = sahi;
      jo agar ((a == sahi) == (a == sahi)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      jo baka;
      baka aa che a;
      jo agar ((a == nakkamo) == (a == sahi)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      jo baka;
      baka aa che a;
      jo agar ((a == nakkamo) == (a == sahi)) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      jo baka;
      baka aa che a;
      baka aa che b = galat;
      jo agar (a == b) {
        bol baka "hai sahi";
      } nahi toh {
        bol baka "nahi sahi";
      }
      aavje baka
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      jo baka;
      baka aa che a = galat;
      baka aa che b = galat;
      jo agar (a == b) {
        bol baka "hai galat";
      } nahi toh {
        bol baka "nahi galat";
      }
      aavje baka
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      jo baka;
      baka aa che a = "galat";
      baka aa che b = galat;
      jo agar (a == b) {
        bol baka "hai galat";
      } nahi toh {
        bol baka "nahi galat";
      }
      aavje baka
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      jo baka
      baka aa che a = 1.2, b = 2;
      bol baka a + b;
      aavje baka
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      jo baka
      baka aa che a = 1.2, b = 2.3;
      bol baka a + b;
      aavje baka
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      jo baka;
      baka aa che a = 2, b = 60;
      bol baka (a * (4 + 8) + 10), b;
      aavje baka
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      jo baka;
      baka aa che a = 2, b = 60;

      a = b + 3;
      bol baka a, b;
      aavje baka
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      jo baka;
      bol baka "hello", sahi, galat;
      aavje baka
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nakkamo, should success",
    input: `
      jo baka;
      bol baka nakkamo;
      aavje baka;
    `,
    output: "nakkamo",
  },
  {
    name: "printStatement test with nakkamo as second parameter, should success",
    input: `
      jo baka;
      bol baka 10, nakkamo;
      aavje baka;
    `,
    output: "10 nakkamo",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      jo baka;
      bol baka "hello" + "crap";
      aavje baka;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nakkamo, should success",
    input: `
      jo baka;
      baka aa che a = 70;
      bol baka 6*5, nakkamo, "jamtara", a;
      aavje baka;
    `,
    output: "30 nakkamo jamtara 70",
  },
  {
    name: "printStatement test with nakkamo variable, should success",
    input: `
      jo baka;
      baka aa che a;
      bol baka a;
      aavje baka;
    `,
    output: "nakkamo",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      jo baka;
      bol baka "undefined";
      aavje baka;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nakkamo variable, should success`,
    input: `
      jo baka;
      baka aa che a;
      bol baka a;
      aavje baka;
    `,
    output: "nakkamo",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      jo baka;
      baka aa che a = sahi;
      bol baka a;
      aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      jo baka;
      baka aa che a = galat;
      bol baka a;
      aavje baka;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      jo baka;
      baka aa che a;
      bol baka a = 90;
      aavje baka;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      jo baka;
      bol baka 9 && 10;
      aavje baka;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      jo baka;
      bol baka 9 || 10;
      aavje baka;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      jo baka;
      bol baka galat && sahi;
      aavje baka;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    jo baka;
    baka aa che a = sahi;
    bol baka a && galat;
    aavje baka;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    jo baka;
    baka aa che a = sahi;
    bol baka a && sahi;
    aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      jo baka;
      bol baka 9 == 10;
      aavje baka;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      jo baka;
      bol baka 9 != 10;
      aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      jo baka;
      bol baka 9 || 10;
      aavje baka;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      jo baka;
      bol baka galat || sahi;
      aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      jo baka;
      bol baka sahi != 10;
      aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      jo baka;
      bol baka "sahi" == sahi;
      aavje baka;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      jo baka;
      baka aa che a = 0;
      jya sudhi (a < 1) {
        bol baka "bhai";
        a += 1;
      }
      aavje baka;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      jo baka;
      jya sudhi (sahi) 
        bas kar bhai;
      bol baka "end";
      aavje baka;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      jo baka;
      baka aa che a = 0;
      jya sudhi (a < 2) {
        jya sudhi (sahi)
          bas kar bhai;
        bol baka "hello";
        jo agar (sahi)
          bas kar bhai;
      }
      aavje baka;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      jo baka;
      baka aa che a = 0;
      jya sudhi (a < 2) {
        bol baka "hello";
        jo agar (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      aavje baka;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    jo baka
    jo agar (sahi) {
      bol baka "bhai";
    }
    aavje baka;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    jo baka
    jo agar (sahi) {
      bol baka "sahi";
    } nahi toh {
      bol baka "galat";
    }
    aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    jo baka
    baka aa che x = 9;
    jo agar (x >= 9) {
      x = 5;
      bol baka x;
    } 
    aavje baka;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    jo baka
    jo agar (galat) {
      bol baka "galat";
    } athva toh (sahi) {
      bol baka "sahi";
    }
    aavje baka;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    jo baka
    baka aa che x = 10;
    jo agar (x < 5) {
      bol baka "x < 5";
    } athva toh (x < 8) {
      bol baka "x < 8";
    } athva toh (x < 12) {
      bol baka "x < 12";
    } athva toh (x < 15) {
      bol baka "x < 15";
    }
    aavje baka;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    jo baka
    baka aa che a = 15;
    jo agar (a < 0) {
      bol baka "a < 0";
    } athva toh (a > 0) {
      jo agar (a < 10) {
        bol baka "a < 10";
      } athva toh (a < 20) {
        bol baka "a < 20";
      }
    }
    aavje baka
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    jo baka
    baka aa che x = 15;
    jo agar (x < 5) {
      bol baka "x < 5";
    } athva toh (x < 8) {
      bol baka "x < 8";
    } athva toh (x < 12) {
      bol baka "x < 12";
    } nahi toh {
      bol baka "x > 12";
    }
    aavje baka;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        jo baka
        jo agar (sahi && galat) {
          bol baka "sahi";
        } nahi toh {
          bol baka "galat";
        }
        aavje baka;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        jo baka
        bol baka 90 % 9;
        aavje baka;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        jo baka
        bol baka 27 % 5;
        aavje baka;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        jo baka
        bol baka 5 % 20;
        aavje baka;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      jo baka;
      baka aa che a = 5;
      baka aa che step = 0;
      jya sudhi (a > 0) {
        step += 1;
        jo agar (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      bol baka step;
      aavje baka;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      jo baka;
      baka aa che a = 5;
      baka aa che step = 0;
      jya sudhi (a > 0) {
        step += 1;
        jo agar (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        bol baka "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bol baka step;
      aavje baka;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      jo baka;
      baka aa che a = 10;
      baka aa che step = 0;
      jya sudhi (a > 0) {
        jo agar (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        jo agar (step == 1) agla dekh bhai
        step += 1;
      }
      bol baka step;
      aavje baka;
    `,
    output: "1",
  },
];