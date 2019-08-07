
//==============================================================================
// TestCafe generated Wed Aug 07 2019 20:39:17 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t, ClientFunction } from "testcafe";

fixture `fixture demo`
  .page `http://localhost:8085/datetimepicker/index.html`;

test("TestCafeJS test", async t => {
  await t
    .click(Selector("body > div:nth-child(1) > form.form-horizontal > fieldset > div:nth-child(2) > div:nth-child(2) > span:nth-child(3) > span"))
    .click(Selector("body > div:nth-child(7) > div:nth-child(3) > table > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)"))
    .click(Selector("body > div:nth-child(7) > div:nth-child(2) > table > tbody:nth-child(2) > tr > td > fieldset:nth-child(1) > span:nth-child(8)"))
    .click(Selector("body > div:nth-child(7) > div:nth-child(1) > table > tbody:nth-child(2) > tr > td > fieldset > span:nth-child(6)"))
    .click(Selector("body > div:nth-child(1) > form.form-horizontal > fieldset > div:nth-child(3) > div:nth-child(2) > span:nth-child(3) > span"))
    .click(Selector("body > div:nth-child(8) > div:nth-child(3) > table > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)"))
    .click(Selector("body > div:nth-child(1) > form.form-horizontal > fieldset > div:nth-child(4) > div:nth-child(2) > span:nth-child(3)"))
    .click(Selector("body > div:nth-child(9) > div:nth-child(2) > table > tbody:nth-child(2) > tr > td > span:nth-child(5)"))
    .click(Selector("body > div:nth-child(9) > div:nth-child(1) > table > tbody:nth-child(2) > tr > td > span:nth-child(5)"))

});
