const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
        <h2>This is demo2</h2>
        <form method="POST" action="/">
            <p>username:</p>
            <input name="username">
            <p>age:</p>
            <input name="age">
            <p>website</p>
            <input name="website">
            <button type="submit">submit</button>                   
        </form>
        `
    ctx.body = html;
  } else if (ctx.url === '/scripts' && ctx.method === 'POST') {
    let postData = await parsePostDate(ctx);
    console.log(postData);
    ctx.body = postData;

    //写入文件
    var fs = require('fs');
    console.log('准备写入文件');
    fs.writeFile('../test/test.js', postData, function (err) {
      if (err) console.error(err);
      console.log('数据写入的数据');

      //运行脚本
      var shell = require('shelljs');
      shell.exec('testcafe chrome:headless ../test/test.js', function(code, stdout, stderr) {
        console.log('Exit code:', code);
        //console.log('Program output:', stdout);
        //console.log('Program stderr:', stderr);
      });
    });
  } else {
    ctx.body = '<h2>404</h2>';
  }
})

const parsePostDate = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      let postData = ""
      ctx.req.on('data', (data) => {
        postData += data;
      })
      ctx.req.addListener("end", function () {
        let parseData = parseQueryStr(postData);
        resolve(parseData);
      })
    } catch (error) {
      reject(error);
    }
  })
}

const parseQueryStr = (queryStr) => {
  const queryStrList = queryStr.split('&');
  //console.log(queryStrList);
  return queryStrList[0];
}

app.listen(8086, () => {
  console.log('server is running!')
})