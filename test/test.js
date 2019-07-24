//==============================================================================
// TestCafe generated Wed Jul 24 2019 22:59:45 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t } from 'testcafe';

fixture `fixture demo`
  .page `http://localhost:8085/testcafe/example/index.html`;

test('Resurrectio test', async t => {
  await t
    .click(Selector("input#populate"))
    .click(Selector("div.swal-overlay.swal-overlay--show-modal > div.swal-modal > div.swal-footer > div.swal-button-container > button.swal-button.swal-button--Confirm"))

});
