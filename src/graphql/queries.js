/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHomePageImages = /* GraphQL */ `
  query GetHomePageImages($id: ID!) {
    getHomePageImages(id: $id) {
      id
      HeroBannerImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listHomePageImages = /* GraphQL */ `
  query ListHomePageImages(
    $filter: ModelHomePageImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePageImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        HeroBannerImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHomePageImages = /* GraphQL */ `
  query SyncHomePageImages(
    $filter: ModelHomePageImagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomePageImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        HeroBannerImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSubscribeNow = /* GraphQL */ `
  query GetSubscribeNow($id: ID!) {
    getSubscribeNow(id: $id) {
      id
      SubscriptionEmailId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSubscribeNows = /* GraphQL */ `
  query SyncSubscribeNows(
    $filter: ModelSubscribeNowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubscribeNows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        SubscriptionEmailId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContactUsCreateForms = /* GraphQL */ `
  query SyncContactUsCreateForms(
    $filter: ModelContactUsCreateFormFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContactUsCreateForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        EmailId
        Message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
