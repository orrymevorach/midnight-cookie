import {
  GET_MENU_ITEMS,
  GET_MAINTENANCE_MODE_FEATURE_FLAG,
  GET_IS_PAGE_PUBLISHED,
  GET_COOKIES,
  GET_FAQ_PAGE,
} from 'gql/queries';

export async function fetchGraphQL({
  query,
  isPreview = false,
  variables = {},
}) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          isPreview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },

      body: JSON.stringify({ query, variables }),
    }
  ).then(response => response.json());
}

export const getPageLoadData = async ({ slug, isPreview }) => {
  const navResponse = await fetchGraphQL({ query: GET_MENU_ITEMS });
  const featureFlagResponse = await fetchGraphQL({
    query: GET_MAINTENANCE_MODE_FEATURE_FLAG,
  });
  const isPagePublished = await fetchGraphQL({
    query: GET_IS_PAGE_PUBLISHED,
    variables: { slug },
  });

  return {
    navData:
      filterNullFields(navResponse?.data?.menu?.pageCollection?.items) || [],
    isMaintenanceMode:
      featureFlagResponse?.data?.featureFlagCollection?.items[0]?.value ||
      false,
    isPagePublished:
      !!isPagePublished?.data?.pageCollection?.items?.length || false,
    isPreview,
  };
};

export function filterNullFields(data) {
  return data?.filter(field => !!field);
}

export const getCookieGallery = async ({ title }) => {
  const cookieGalleryResponse = await fetchGraphQL({
    query: GET_COOKIES,
    variables: {
      title,
    },
  });

  const cookieGalleryData =
    cookieGalleryResponse.data.cookieGalleryCollection.items[0] || [];
  const columns = cookieGalleryData.columns;
  const cookies = cookieGalleryData.cookiesCollection.items;

  return { title, cookies, columns };
};

export const getFaqPage = async () => {
  const faqResponse = await fetchGraphQL({
    query: GET_FAQ_PAGE,
  });
  const faqItems =
    faqResponse.data.faqPageCollection.items[0]
      .frequentlyAskedQuestionsCollection.items;
  return faqItems;
};
