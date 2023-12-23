export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "jo baka",

  BYE_BHAI_TYPE: "aavje baka",

  BOL_BHAI_TYPE: "bol baka",

  BHAI_YE_HAI_TYPE: "baka aa che",

  AGAR_BHAI: "jo agar",

  WARNA_BHAI: "nahi toh",

  NAHI_TO_BHAI: "athva toh",

  JAB_TAK_BHAI: "jya sudhi",

  BAS_KAR_BHAI: "bas kar bhai",

  AGLA_DEKH_BHAI: "agla dekh bhai",

  NALLA_TYPE: "NALLA",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bjo baka\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\baavje baka\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bbol baka\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bbaka aa che\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bjo agar\b/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^\bathva toh\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^\bnahi toh\b/, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^\bnakkamo\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjya sudhi\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsachu\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bkhotu\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
