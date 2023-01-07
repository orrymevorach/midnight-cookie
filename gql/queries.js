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
      pageCollection(preview: false) {
        items {
          title
          url
        }
      }
    }
  }
`;

export const GET_COOKIES = gql`
  query getCookies {
    cookieGalleryCollection(where: { title: "Home Page Gallery" }) {
      items {
        cookiesCollection(limit: 30) {
          items {
            description
            title
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_MAINTENANCE_MODE_FEATURE_FLAG = gql`
  query GetMaintenanceModeFeatureFlag {
    featureFlagCollection(where: { title: "Maintenance Mode" }) {
      items {
        title
        value
      }
    }
  }
`;

export const GET_IS_PAGE_PUBLISHED = gql`
  query GetIsPagePublished($slug: String!) {
    pageCollection(where: { url: $slug }) {
      items {
        title
      }
    }
  }
`;
