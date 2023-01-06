import { gql } from '@apollo/client';

export const GET_NEWS_ARTICLES = gql`
  query GetAllPosts {
    newsPostCollection {
      items {
        title
        date
        content {
          json
        }
        image {
          url
        }
        url
      }
    }
  }
`;

export const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menu(id: "7CaGAfKOaxtSAYUN2p9L91") {
      menuItemsCollection {
        items {
          label
          url
        }
      }
    }
  }
`;

export const GET_COOKIES = gql`
  query getCookies {
    cookieCollection {
      items {
        description
        title
        image {
          url
        }
      }
    }
  }
`;
