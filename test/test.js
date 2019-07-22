//==============================================================================
// TestCafe generated Mon Jul 22 2019 20:58:35 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t } from 'testcafe';

fixture `fixture demo`
  .page `http://localhost:8085/testcafe/example/index.html`;

test('Resurrectio test', async t => {
  await t
    .drag(Selector("input#populate"), 1, 0)
    .click(Selector(".swal-button.swal-button--Confirm"))

});
