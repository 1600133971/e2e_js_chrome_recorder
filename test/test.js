//==============================================================================
// TestCafe generated Thu Aug 01 2019 20:38:01 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t, ClientFunction } from 'testcafe';

fixture `fixture demo`
  .page `http://localhost:8085/testcafe/example/index.html`;

test('TestCafeJS test', async t => {
  await t
    .click(Selector("input#populate"))
    .click(Selector("button.swal-button.swal-button--Confirm"))
    .click(Selector("input#remote-testing"))
    .click(Selector("select#preferred-interface"))
    .click(Selector("select#preferred-interface").find("option").withExactText("JavaScript API"))

});
