import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        title
        content
        uri
        date
      }
    }
  }
`;

export const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menu(id: "Menu w/out Ordering", idType: NAME) {
      menuItems {
        nodes {
          uri
          label
        }
      }
    }
  }
`;

export const GET_COOKIES = gql`
  query getCookies {
    cookies {
      nodes {
        title
        content
        featuredImage {
          node {
            uri
            mediaItemUrl
          }
        }
      }
    }
  }
`;

// const posts = await client.query({
//   query: GET_POSTS,
// });
// const cookies = await client.query({
//   query: GET_COOKIES,
// });
// const menuItems = await client.query({
//   query: GET_MENU_ITEMS,
// });
// console.log(
//   'posts, cookies, menuItems',
//   posts.data.posts,
//   cookies.data.cookies,
//   menuItems.data.menu
// );
// return {
//   props: {
//     posts: posts.data.posts,
//   },
// };
