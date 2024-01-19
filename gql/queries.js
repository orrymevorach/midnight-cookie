export const GET_NEWS_ARTICLES = `
  query GetAllPosts($slug: String) {
    newsPostCollection(where: {slug: $slug}) {
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

export const GET_MENU_ITEMS = `
  query GetMenuItems {
    menu(id: "7CaGAfKOaxtSAYUN2p9L91") {
      pageCollection {
        items {
          title
          url
        }
      }
    }
  }
`;

export const GET_COOKIES = `
  query GetCookies ($title: String) {
    cookieGalleryCollection(where: { title: $title }) {
      items {
        cookiesCollection(limit: 30) {
          items {
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

export const GET_COOKIE = `
query GetCookie ($slug: String) {
  cookieCollection(where: { slug: $slug }) {
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

export const GET_MAINTENANCE_MODE_FEATURE_FLAG = `
  query GetMaintenanceModeFeatureFlag {
    featureFlagCollection(where: { title: "Maintenance Mode" }) {
      items {
        title
        value
      }
    }
  }
`;

export const GET_IS_PAGE_PUBLISHED = `
  query GetIsPagePublished($slug: String!) {
    pageCollection(where: { url: $slug }) {
      items {
        title
      }
    }
  }
`;
