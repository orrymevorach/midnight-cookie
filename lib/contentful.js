import { createClient } from 'contentful';

// Create Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// Create preview client for draft content
const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

// Helper function to get the appropriate client
const getClient = (isPreview = false) => {
  return isPreview ? previewClient : client;
};

export const getPageLoadData = async ({ slug, isPreview }) => {
  const contentfulClient = getClient(isPreview);

  // Get navigation data
  const navResponse = await contentfulClient.getEntry(
    '7CaGAfKOaxtSAYUN2p9L91',
    {
      include: 2,
    },
  );
  const navData = navResponse.fields.page.map(navItem => navItem.fields);
  const filteredNavData = filterNullFields(navData);

  // Get maintenance mode feature flag
  const featureFlagResponse = await contentfulClient.getEntries({
    content_type: 'featureFlag',
    'fields.title': 'Maintenance Mode',
    limit: 1,
  });

  // Check if page is published
  const isPagePublished = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.url': slug,
    limit: 1,
  });

  return {
    navData: filteredNavData,
    isMaintenanceMode: featureFlagResponse?.items?.[0]?.fields?.value || false,
    isPagePublished: !!isPagePublished?.items?.length || false,
    isPreview,
  };
};

export function filterNullFields(data) {
  return data?.filter(field => !!field);
}

export const getCookieGallery = async ({ title }) => {
  const contentfulClient = getClient(false);

  const cookieGalleryResponse = await contentfulClient.getEntries({
    content_type: 'cookieGallery',
    'fields.title': title,
    include: 2,
    limit: 1,
  });

  const cookieGalleryData = cookieGalleryResponse?.items?.[0].fields;

  const cookies = cookieGalleryData.cookies.map(cookie => cookie.fields) || [];
  const columns = cookieGalleryData.columns;

  return { title, cookies, columns };
};

export const getFaqPage = async () => {
  const contentfulClient = getClient(false);

  const faqResponse = await contentfulClient.getEntries({
    content_type: 'faqPage',
    'fields.title': 'FAQ Page',
    include: 2,
    limit: 1,
  });

  const faqItems =
    faqResponse?.items?.[0]?.fields?.frequentlyAskedQuestions.map(
      item => item.fields,
    ) || [];
  return faqItems;
};

export const getStoreLocations = async () => {
  const contentfulClient = getClient(false);

  const response = await contentfulClient.getEntries({
    content_type: 'storeLocations',
    'fields.storeLocations': 'Store Locations',
    include: 2,
    limit: 1,
  });

  return response?.items?.[0]?.fields?.stores?.map(store => store.fields) || [];
};

export const getCateringOptions = async () => {
  const contentfulClient = getClient(false);

  const response = await contentfulClient.getEntries({
    content_type: 'cateringOptions',
    'fields.title': 'Catering Options',
    include: 2,
    limit: 1,
  });

  return (
    response?.items?.[0]?.fields?.cateringOptions?.map(
      option => option.fields,
    ) || []
  );
};

export const getCateringPricingOptions = async () => {
  const contentfulClient = getClient(false);

  const response = await contentfulClient.getEntries({
    content_type: 'cateringPricingOptions',
    'fields.title': 'CATERING_PRICING_OPTIONS',
    include: 2,
    limit: 1,
  });

  return (
    response?.items?.[0]?.fields?.options?.map(option => option.fields) || []
  );
};

export const getCarouselItems = async () => {
  const contentfulClient = getClient(false);

  const response = await contentfulClient.getEntries({
    content_type: 'carousel',
    'fields.title': 'Home Page Carousel',
    include: 2,
    limit: 1,
  });
  const content = response?.items?.[0]?.fields?.content.map(
    item => item.fields,
  );
  return content;
};

// export async function getVideoDuration(video) {
//   const ffprobe = require('ffprobe');
//   const ffprobeStatic = require('ffprobe-static');

//   const videoUrl = `https:${video.url}`;

//   // // Use ffprobe to fetch video metadata
//   let duration = null;

//   try {
//     const metadata = await ffprobe(videoUrl, { path: ffprobeStatic.path });
//     duration = metadata.streams[0].duration; // Duration in seconds
//     return parseFloat(duration);
//   } catch (error) {
//     console.error('Error fetching video metadata:', error);
//   }
// }

export function getMedia(media) {
  const size = media.fields?.file?.details?.image;
  const src = `https:${media.fields.file.url}`;
  const alt = media.fields.title;
  return {
    src,
    alt,
    width: size?.width || null,
    height: size?.height || null,
  };
}

export async function getNewsArticles() {
  const client = await getClient(false);
  const response = await client.getEntries({
    content_type: 'newsPost',
    include: 1,
  });
  return response.items.map(item => item.fields);
}

export async function getShopGallery() {
  const contentfulClient = getClient(false);

  const response = await contentfulClient.getEntries({
    content_type: 'shopGallery',
    'fields.title': 'Home Page Tiles',
    limit: 1,
  });

  return response?.items?.[0]?.fields?.items?.map(tile => tile.fields) || [];
}
