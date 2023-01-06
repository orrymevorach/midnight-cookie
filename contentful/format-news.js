const newsData = require('./mocks/newsArticles');
const fs = require('fs');

const data = {
  entries: newsData.map(news => {
    return {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          },
        },
        id: '',
        type: 'Entry',
        createdAt: '2022-12-26T17:01:22.678Z',
        updatedAt: '2022-12-26T19:51:34.302Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        publishedVersion: 10,
        publishedAt: '2022-12-26T19:51:34.302Z',
        firstPublishedAt: '2022-12-26T17:05:27.889Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6QllWncJAdvEaBZcw1PJ2j',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6QllWncJAdvEaBZcw1PJ2j',
          },
        },
        publishedCounter: 3,
        version: 11,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6QllWncJAdvEaBZcw1PJ2j',
          },
        },
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'newsPost',
          },
        },
      },

      fields: {
        title: {
          'en-US': news.title,
        },
        url: {
          'en-US': news.url,
        },
        date: {
          'en-US': news.date,
        },
        publisher: {
          'en-US': news.publisher,
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: news.imageId,
            },
          },
        },
        content: {
          'en-US': {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: news.content,
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
      },
    };
  }),
};

fs.writeFileSync(
  './contentful/news-content-entries.json',
  JSON.stringify(data)
);
