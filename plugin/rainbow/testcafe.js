/**
 * testcafe language patterns
 *
 * @author 1600133971
 */
Rainbow.extend('testcafe', [
  {
      matches: {
          1: [
              {
                  name: 'keyword.operator',
                  pattern: /\=|\+/g
              },
              {
                  name: 'keyword.dot',
                  pattern: /\./g
              }
          ],
          2: {
              name: 'string',
              matches: {
                  name: 'constant.character.escape',
                  pattern: /\\('|"|`){1}/g
              }
          }
      },
      pattern: /(\(|\s|\[|\=|:|\+|\.|\{|,)(('|"|`)([^\\\1]|\\.)*?(\3))/gm
  },
  {
      name: 'comment',
      pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)(?!.*('|"|`).*?[^:](\/\/|\#)).*?$/gm
  },
  {
      name: 'keyword',
      pattern: /\b(fixture|await|async|t|Selector|ClientFunction)\b/g
  },
  {
      matches: {
          1: 'support.property'
      },
      pattern: /\.(page)\b/g
  },
  {
      matches: {
          1: 'support.function'
      },
      pattern: /(test)(?=\()/g
  },
  {
      matches: {
          1: 'support.method'
      },
      pattern: /\.(click|find|withExactText)(?=\()/g
  }
], 'javascript');

Rainbow.addAlias('js', 'testcafe');
