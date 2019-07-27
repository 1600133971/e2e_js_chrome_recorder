//==============================================================================
// TestCafe generated Sat Jul 27 2019 16:13:04 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t } from 'testcafe';

fixture `fixture demo`
  .page `http://localhost:8085/testcafe/example/index.html`;

test('TestCafeJS test', async t => {
  await t
    .click(Selector("select#preferred-interface"))
    .click(Selector("select#preferred-interface").find("option").withExactText("JavaScript API"))
    .expect(await Selector("select#preferred-interface").find("option").withExactText("JavaScript API").exists).ok()
    .expect(Selector("select#preferred-interface").find("option").withExactText("JavaScript API").selected).ok()
    .expect(Selector("select#preferred-interface").childElementCount).notEql(0)

});
