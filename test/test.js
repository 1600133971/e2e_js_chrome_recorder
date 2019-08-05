
//==============================================================================
// TestCafe generated Sat Aug 03 2019 16:11:41 GMT+0800 (中国标准时间) 
//==============================================================================

import { Selector, t, ClientFunction } from "testcafe";

fixture `fixture demo`
  .page `http://localhost:8085/layui/examples/tree.html`;

test("TestCafeJS test", async t => {
  await t
    .click(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(3)"))
    .click(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > i.layui-icon.layui-icon-addition"))
    .click(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > i.layui-icon.layui-icon-addition"))
    .click(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > i.layui-icon.layui-icon-addition"))
    .click(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > i.layui-icon.layui-icon-addition"))
    .expect(Selector("div#test1 > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span:nth-child(4)").textContent).eql("五级1-1-3-1-1")

});
