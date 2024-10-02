/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomerAccountByUniqueId = /* GraphQL */ `
  query GetCustomerAccountByUniqueId($uniqueCustomerId: String!) {
    getCustomerAccountByUniqueId(uniqueCustomerId: $uniqueCustomerId) {
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
export const searchCustomerAccounts = /* GraphQL */ `
  query SearchCustomerAccounts(
    $filter: SearchableCustomerAccountFilterInput
    $sort: [SearchableCustomerAccountSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomerAccountAggregationInput]
  ) {
    searchCustomerAccounts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
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
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getStationManager = /* GraphQL */ `
  query GetStationManager($id: ID!) {
    getStationManager(id: $id) {
      id
      username
      orders {
        nextToken
        __typename
      }
      managedStation {
        id
        StationName
        createdAt
        updatedAt
        stationStockId
        stationManagerId
        __typename
      }
      createdAt
      updatedAt
      stationManagerManagedStationId
      __typename
    }
  }
`;
export const listStationManagers = /* GraphQL */ `
  query ListStationManagers(
    $filter: ModelStationManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStationManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
        stationManagerManagedStationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
      orders {
        nextToken
        __typename
      }
      manager {
        id
        username
        createdAt
        updatedAt
        stationManagerManagedStationId
        __typename
      }
      stock {
        id
        metalic_6kg
        metalic_13kg
        composite_13kg
        metalic_50kg
        createdAt
        updatedAt
        stockLevelStationId
        __typename
      }
      createdAt
      updatedAt
      stationStockId
      stationManagerId
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
        stationStockId
        stationManagerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockLevel = /* GraphQL */ `
  query GetStockLevel($id: ID!) {
    getStockLevel(id: $id) {
      id
      metalic_6kg
      metalic_13kg
      composite_13kg
      metalic_50kg
      station {
        id
        StationName
        createdAt
        updatedAt
        stationStockId
        stationManagerId
        __typename
      }
      createdAt
      updatedAt
      stockLevelStationId
      __typename
    }
  }
`;
export const listStockLevels = /* GraphQL */ `
  query ListStockLevels(
    $filter: ModelStockLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        metalic_6kg
        metalic_13kg
        composite_13kg
        metalic_50kg
        createdAt
        updatedAt
        stockLevelStationId
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
export const getOrdersPlaced = /* GraphQL */ `
  query GetOrdersPlaced($id: ID!) {
    getOrdersPlaced(id: $id) {
      id
      userId
      product
      OrderType
      status
      DeliveryLocationDL {
        houseNo
        description
        latitude
        longitude
        __typename
      }
      createdAt
      updatedAt
      stationManagerOrdersId
      stationOrdersId
      __typename
    }
  }
`;
export const listOrdersPlaceds = /* GraphQL */ `
  query ListOrdersPlaceds(
    $filter: ModelOrdersPlacedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdersPlaceds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        product
        OrderType
        status
        createdAt
        updatedAt
        stationManagerOrdersId
        stationOrdersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
