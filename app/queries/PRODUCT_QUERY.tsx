export const PRODUCTS_QUERY = `#graphql
  query Products {
    products(first: 12) {
      nodes {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
      }
    }
  }
`;
