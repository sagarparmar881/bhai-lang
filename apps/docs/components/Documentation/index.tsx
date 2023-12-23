import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">jo baka</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">aavje baka</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

jo baka
  // Write code here
aavje baka

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">baka aa che</code>.
      </>
    ),
    code: `jo baka
    baka aa che a = 10;
    baka aa che b = "two";
    baka aa che c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
aavje baka
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nakkamo</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `jo baka
    baka aa che a = 10;
    baka aa che b = 10 + (15*20);
    baka aa che c = "two";
    baka aa che d = 'ok';
    baka aa che e = nakkamo;
    baka aa che f = sahi;
    baka aa che g = galat;
aavje baka
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol baka</code> to print anything to
        console.
      </>
    ),
    code: `jo baka
    bol baka "Kem Party!";
    baka aa che a = 10;
    {
       baka aa che b = 20;
       bol baka a + b;
    }
    bol baka 5, 'ok', nakkamo , sahi , galat;
aavje baka
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports if-else-if ladder construct , <code className="language-cpp">jo agar</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">athva toh</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">nahi toh</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `jo baka
    baka aa che a = 10;
    jo agar (a < 20) {
      bol baka "a is less than 20";
    } athva toh ( a < 25 ) {
      bol baka "a is less than 25";
    } nahi toh {
      bol baka "a is greater than or equal to 25";
    }
aavje baka
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jya sudhi</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.
      </>
    ),
    code: `jo baka
    baka aa che a = 0;
    jya sudhi (a < 10) {
      a += 1;
      jo agar (a == 5) {
        bol baka "andar se bol baka ", a;
        agla dekh bhai;
      }
      jo agar (a == 6) {
        bas kar bhai;
      }
      bol baka a;
    }
    bol baka "done";
aavje baka
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Bhailang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
