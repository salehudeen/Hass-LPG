/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStation = /* GraphQL */ `
  query GetStation($id: ID!) {
    getStation(id: $id) {
      id
      StationName
      StationLocation {
        latitude
        longitude
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        StationName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomerAccount = /* GraphQL */ `
  query GetCustomerAccount($id: ID!) {
    getCustomerAccount(id: $id) {
      id
      uniqueCustomerId
      name
      deliveryLocations {
        name
        description
        latitude
        longitude
        __typename
      }
      phoneNumber
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomerAccounts = /* GraphQL */ `
  query ListCustomerAccounts(
    $filter: ModelCustomerAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        uniqueCustomerId
        name
        phoneNumber
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
