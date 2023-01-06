const cookieData = require('./mocks/cookieData');
const fs = require('fs');

const data = {
  entries: cookieData.map(cookie => {
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
        createdAt: new Date(),
        updatedAt: '',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        publishedVersion: 1,
        publishedAt: '',
        firstPublishedAt: '',
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
        publishedCounter: 2,
        version: 7,
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
            id: cookie.model,
          },
        },
      },

      fields: {
        title: {
          'en-US': cookie.title,
        },
        description: {
          'en-US': cookie.content,
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: cookie.id,
            },
          },
        },
      },
    };
  }),
};

fs.writeFileSync(
  './contentful/cookies-content-entries.json',
  JSON.stringify(data)
);
