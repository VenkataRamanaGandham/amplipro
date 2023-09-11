/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscribeNow = /* GraphQL */ `
  query GetSubscribeNow($id: ID!) {
    getSubscribeNow(id: $id) {
      id
      SubscriptionEmailId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubscribeNows = /* GraphQL */ `
  query ListSubscribeNows(
    $filter: ModelSubscribeNowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribeNows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        SubscriptionEmailId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContactUsCreateForm = /* GraphQL */ `
  query GetContactUsCreateForm($id: ID!) {
    getContactUsCreateForm(id: $id) {
      id
      Name
      EmailId
      Message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactUsCreateForms = /* GraphQL */ `
  query ListContactUsCreateForms(
    $filter: ModelContactUsCreateFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactUsCreateForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        EmailId
        Message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
