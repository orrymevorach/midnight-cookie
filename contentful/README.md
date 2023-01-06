To run content migrations, you must install the Contentful CLI.
Instructions can be found here: https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/

<h2>Creating Content Entries from Contentful and Importing into a Contentful Space</h2>

<b>To create a file that can be imported into Contentful using data from mock files we:</b>

<ol>
    <li>1. Run one of the scripts that will format the data for us</li>
    <li>2. Import the formatted data into our space</li>
</ol>

The scripts to format the data are:

```
node contentful/format-cookies.js // formatting the cookie gallery on the home page
node contentful/format-news.js // formatting the news articles on the media page
```

To import the formatted files into our space, run:

```
contentful space import --space-id <SPACE_ID> --content-file contentful/cookie-content-entries.json
contentful space import --space-id <SPACE_ID> --content-file contentful/news-content-entries.json
```

---

<h2>Migrating all the content models, entries, and media from one space into another</h2>

<b>To migrate all content models and entries from one space into another, we:</b>

<ol>
    <li>1. On the command line, log into the space of which we want to import existing data from</li>
    <li>2. Export all data from the space</li>
    <li>3. On the command line, log into the space of which we want to export data to</li>
    <li>4. Export the data file into the new space</li>
</ol>

---

The script to log into a space is:

```
contentful login --management-token <MANAGEMENT_TOKEN>
```

---

To export data from a space we run:

```
contentful space export --space-id <SPACE_ID>
```

If run successfuly, you should see a file at the root of your project with all of the data that was exported.

---

To import data to a space we run:

```
contentful space import --space-id <SPACE_ID> --content-file <EXPORTS_FILE>
```

If run successfuly, you should see all of the new content models, entries, and media in your project
