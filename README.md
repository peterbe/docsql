# docsQL

Getting an overview of your Jamstack Markdown files.

## Demo

Play with: [https://peterbe.github.io/docsql/](https://peterbe.github.io/docsql/)

You're supposed to run `docsQL` with your own projects Markdown files, but this
demo uses a subset of the content behind [GitHub Docs](https://github.com/github/docs).

## How it works

You give the CLI program one or more directories that contain Markdown files.
Most of the time it's just one directory; where your jamstack website files
are.

Each file is opened and the front-matter becomes the key-value pairs that you
can later query. I.e. if you have a front-matter key called `title`
you'll be able to query `SELECT title FROM ? WHERE title ILIKE "%peterbe%"`.
The content is not included in the database. That would make the searchable
database too big.

Additionally, plugins are executed for each file. There are built-in plugins
and there are plugins you write and point to yourself.
One of the built-in plugins is called `commonheadings.mjs` and it counts
the number of `## ` and `### ` rows there are in the content so you can
query `SELECT h2s, h3s, h2s+h3s AS combined FROM ? ORDER BY 3 DESC`.

To specify your own plugins for your particular project, see the
section on ["Plugins"](#plugins).

## Getting started

```sh
npx docsql /path/to/my/project/with/lots/of/markdown/files
```

## Getting start (after `git` clone)

```sh
export CONTENT_SOURCES=/path/to/my/project/with/lots/of/markdown/files
npm run run
```

## Getting Started (for local development)

```sh
echo CONTENT_SOURCES=/path/to/my/project/with/lots/of/markdown/files >> .env
npm run dev
```

## Plugins

The built-in plugins are can be found in the source code (TODO: add link).
These are hopefully generic enough and useful enough for most people.

To write your own plugin, you create a `.mjs` file. Your `.mjs` files
just need to export a default function that returns an object. Best
demonstrated with an example:

1. Create a folder called `my-docsql-plugins`.
2. Create the file `my-docsql-plugins/chocolate-icecream-mentions.mjs`
3. Enter something like this:

```js
const regex = /💩/g;
export default function countCocoIceMentions({ data, content }) {
  const inTitle = (data.title.match(regex) || []).length;
  const inBody = (content.match(regex) || []).length;
  return {
    chocolateIcecreamMentions: inTitle + inBody,
  };
}
```

The name of the function isn't important. You could have used
`export default function whatever(`. What is important is that you
get a context object that contains the keys `data` and `content`.
And it's important you return an object with keys and values that
make sense to search on. You can even return a namespace which
you can search on as if it was JSON.

Now start the CLI with `--plugins my-docsql-plugins` and your new plugin
will be included. Once the server starts, you can click "Open help"
in the web interface and expect to see it mentioned there. With this,
you can now run:

```sql
SELECT _file, chocolateIcecreamMentions FROM ? WHERE chocolateIcecreamMentions > 0
```

### Share plugins with your team

At the moment, the best way is that one of you writes some plugins that
suites your content. Once that works well, you can either zip up that
directory and share with your team. Or, you can simply create a
`git` repo and put them in there.

### Caveats on plugins

- They don't self-document. Yet. It would be nice if you could include
  a string of text from within your plugin code that shows up in the
  "Help" section.
- The order matters for overriding. There's a built-in plugin called
  `wordcount.mjs` which is really basic. If you don't like it, write
  your own plugin that returns a key called `wordCount` and it will
  override the built-in computation.
- Debugging bad plugins is a bit rough but an error thrown is stopping
  the CLI and the stacktrace should be sufficiently clear.

## Open found files in your editor

If you have an environment variable called `EDITOR` set, and you make a
query that includes the key `_file` it will make that a clickable link,
which when running on `localhost` will open that file on your computer.

A lot of systems have a default `$EDITOR` which might be something
terminal based, like `nano`. If you, for example, what your files to
open in VS Code you can set:

```sh
echo EDITOR=code >> .env
```

## Icon

Icon by [Yannick Lung](https://www.iconfinder.com/icons/315196/documents_icon)
