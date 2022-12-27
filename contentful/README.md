To run content migrations, you must install the Contentful CLI.
Instructions can be found here: https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/

To export cookie data run:

```
node contentful/format-cookies.js
```

then:

```
contentful space import --space-id <SPACE_ID>  --content-file contentful/cookie-content-entries.json
```

To export news posts run:

```
node contentful/format-news.js
```

then:

```
contentful space import --space-id <SPACE_ID> --content-file contentful/news-content-entries.json
```

To export a Contentful file, run:

```
contentful space export --space-id <SPACE_ID> --content-file contentful/exports.json --content-only true
```
