<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for bhai-lang.<br><br>
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bhai</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
jo baka
  bol baka "Hello bhai";
aavje baka

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>jo baka</code> is the entrypoint for the program and all program must end with <code>aavje baka</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

jo baka
// Write code here
aavje baka

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>baka aa che</code>.</p>

```

jo baka
  baka aa che a = 10;
  baka aa che b = "two";
  baka aa che c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
aavje baka
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nakkamo</code>. <code>sachu</code> and <code>khotu</code> are the boolean values.</p>

```

jo baka
  baka aa che a = 10;
  baka aa che b = 10 + (15*20);
  baka aa che c = "two";
  baka aa che d = 'ok';
  baka aa che e = nakkamo;
  baka aa che f = sachu;
  baka aa che g = khotu;
aavje baka
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol baka</code> to print anything to console.</p>

```

jo baka
  bol baka "Kem Party!";
  baka aa che a = 10;
  {
    baka aa che b = 20;
    bol baka a + b;
  }
  bol baka 5, 'ok', nakkamo , sachu , khotu;
aavje baka
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports if-else-if ladder construct , <code>jo agar</code> block will execute if condition is <code>sachu</code>, otherwise one of the subsequently added <code>athva toh</code> blocks will execute if their respective condition is <code>sachu</code>, and the <code>nahi toh</code> block will eventually execute if all of the above conditions are <code>khotu</code>

```

jo baka
  baka aa che a = 10;
  jo agar (a < 20) {
    bol baka "a is less than 20";
  } athva toh ( a < 25 ) {
    bol baka "a is less than 25";
  } nahi toh {
    bol baka "a is greater than or equal to 25";
  }
aavje baka
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jya sudhi</code> blocks are executed as long as a specified condition evaluates to sachu. If the condition becomes <code>khotu</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>roki de</code> to break the loop and <code className="language-cpp">chalva de</code> to continue within loop.</p>


```

jo baka
  baka aa che a = 0;
  jya sudhi (a < 10) {
   a += 1;
   jo agar (a == 5) {
    bol baka "andar thi bol baka ", a;
    chalva de;
   }
   jo agar (a == 6) {
    roki de;
   }
   bol baka a;
  }
  bol baka "done";
aavje baka
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of bhailang <a href="https://bhailang-ast.netlify.app/" target="_blank">here</a>.</p>








