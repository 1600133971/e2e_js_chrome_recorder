let content = 'import { Selector, t, ClientFunction } from "testcafe"; fixture `fixture demo` .page `http://localhost:8085/testcafe/example/index.html`; test("TestCafeJS test", async t => { await t .click(Selector("input#populate")) .click(Selector("button.swal-button.swal-button--Confirm").withExactText("Confirm")) .click(Selector("input#remote-testing")) .click(Selector("input#reusing-js-code")) .click(Selector("input#background-parallel-testing")) .click(Selector("input#continuous-integration-embedding")) .click(Selector("input#traffic-markup-analysis")) .click(Selector("form#main-form > div > div:nth-child(2) > div:nth-child(2) > fieldset:nth-child(1) > p:nth-child(2) > label")) .click(Selector("form#main-form > div > div:nth-child(2) > div:nth-child(2) > fieldset:nth-child(1) > p:nth-child(3) > label")) .click(Selector("form#main-form > div > div:nth-child(2) > div:nth-child(2) > fieldset:nth-child(1) > p:nth-child(4) > label")) .click(Selector("select#preferred-interface")) .click(Selector("select#preferred-interface").find("option").withExactText("JavaScript API")) .expect(Selector("a#href-test").textContent).eql("TestCafe") .expect(await Selector("img#img-test").hasAttribute("src")).ok() .expect(await Selector("img#img-test").getAttribute("src")).notEql("") .click(Selector("input#tried-test-cafe")) .drag(Selector("div#slider > span"), 97, -1) .click(Selector("button#submit-button")) /* submit form */ });';
console.log(
  content
    .replace(/;\s/g, ';\n\n')
    .replace(/`\s\./g, '`\n  .')
    .replace(/=>\s{\s/g, '=> {\n  ')
    .replace(/await\st\s\./g, 'await t\n    .')
    .replace(/\)\s\./g, ')\n    .')
    .replace(/\)\s\/\*/g, ')\n    /*')
    .replace(/\s\}\);/g, '\n});')
);