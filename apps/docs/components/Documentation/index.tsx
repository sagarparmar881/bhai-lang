import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">jo baka</code> program no entrypoint che
        ane darek program {" "}
        <code className="language-cpp">aavje baka</code> thi pura thase. Aani baar no code tel leva jaay.
      </>
    ),
    code: `Aa code tel leva jaay

jo baka
  // Aahiya code lakhvanu
aavje baka

Ane aa code pan tel leva jaay
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables banava maate{" "}
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
        Numbers ane strings bija programming language jevu same che. 
        Null values atle <code className="language-cpp">nakkamo</code>.{" "}
        <code className="language-cpp">sachu</code> ane{" "}
        <code className="language-cpp">khotu</code> atle ke boolean values.
      </>
    ),
    code: `jo baka
    baka aa che a = 10;
    baka aa che b = 10 + (15*20);
    baka aa che c = "two";
    baka aa che d = 'ok';
    baka aa che e = nakkamo;
    baka aa che f = sachu;
    baka aa che g = khotu;
aavje baka
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Console ma kasu pan lakhva maate <code className="language-cpp">bol baka</code> use karwanu.
      </>
    ),
    code: `jo baka
    bol baka "Kem Party!";
    baka aa che a = 10;
    {
       baka aa che b = 20;
       bol baka a + b;
    }
    bol baka 5, 'ok', nakkamo , sachu , khotu;
aavje baka
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Gujjulang supports if-else-if ladder construct, <code className="language-cpp">jo agar</code> block atle ki if condition barobar <code className="language-cpp">sachu</code>, ane <code className="language-cpp">athva toh</code> block atle ki else if condition barobar <code className="language-cpp">sachu</code>, ane <code className="language-cpp">nahi toh</code> block atle ki else condition barobar <code className="language-cpp">khotu</code>.
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
        Loop chalava maate <code className="language-cpp">jya sudhi</code> block chalse jya sudhi condition barobar <code className="language-cpp">sachu</code>. Ane jo condition barobar <code className="language-cpp">khotu</code>, loop bandh thay jase ane aagad no code chalavse. 
        Loop ne break or rokva maate <code className="language-cpp">roki de</code> ane continue or chalva maate <code className="language-cpp">chalva de</code> use karvanu.
      </>
    ),
    code: `jo baka
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
            Gujjulang ek gujju-gheli programming ni bhasha che typescript ma banaveli.
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
