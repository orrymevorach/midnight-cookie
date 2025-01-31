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
          url (transform: {width: 1000})
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
          hoverText
        }
      }
    }
  }
`;

export const GET_COOKIES = `
  query GetCookies ($title: String) {
    cookieGalleryCollection(where: { title: $title }) {
      items {
        columns
        cookiesCollection(limit: 30) {
          items {
            title
            image {
              url (transform: {width: 1000})
              width
              height
            }
            description
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
        url (transform: {width: 300})
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

export const GET_FAQ_PAGE = `
  query GetFaqPage {
    faqPageCollection(where: { title: "FAQ Page" }) {
      items {
        frequentlyAskedQuestionsCollection {
          items {
            question
            answer {
              json
            }
          }
        }
      }
    }
  }
`;

export const GET_STORE_LOCATIONS = `
  query {
    storeLocationsCollection(where: {storeLocations: "Store Locations"} limit: 1) {
      items {
        storesCollection(limit: 10) {
          items {
            storeName
            address
            phoneNumber
            description {
              json
            }
            launchDate
            imagesCollection {
              items {
                url (transform: {width: 400})
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CAROUSEL_ITEMS = `
query {
  carouselCollection(where: {title: "Home Page Carousel"} limit: 1) {
    items {
      title
      contentCollection(limit: 10) {
        items {
          title
          text {
            json
          }
          buttonText
          buttonHoverText
          buttonLink
          image {
            url
            width
            height
          }
          video {
            url 
            width
            height
          }
          mobileMedia {
            url 
            width
            height
          }
          
          
        }
      }
    }
  }
}
`;
