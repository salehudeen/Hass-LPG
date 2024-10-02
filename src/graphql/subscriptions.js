/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStationManager = /* GraphQL */ `
  subscription OnCreateStationManager(
    $filter: ModelSubscriptionStationManagerFilterInput
  ) {
    onCreateStationManager(filter: $filter) {
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
export const onUpdateStationManager = /* GraphQL */ `
  subscription OnUpdateStationManager(
    $filter: ModelSubscriptionStationManagerFilterInput
  ) {
    onUpdateStationManager(filter: $filter) {
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
export const onDeleteStationManager = /* GraphQL */ `
  subscription OnDeleteStationManager(
    $filter: ModelSubscriptionStationManagerFilterInput
  ) {
    onDeleteStationManager(filter: $filter) {
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
export const onCreateStation = /* GraphQL */ `
  subscription OnCreateStation($filter: ModelSubscriptionStationFilterInput) {
    onCreateStation(filter: $filter) {
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
export const onUpdateStation = /* GraphQL */ `
  subscription OnUpdateStation($filter: ModelSubscriptionStationFilterInput) {
    onUpdateStation(filter: $filter) {
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
export const onDeleteStation = /* GraphQL */ `
  subscription OnDeleteStation($filter: ModelSubscriptionStationFilterInput) {
    onDeleteStation(filter: $filter) {
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
export const onCreateStockLevel = /* GraphQL */ `
  subscription OnCreateStockLevel(
    $filter: ModelSubscriptionStockLevelFilterInput
  ) {
    onCreateStockLevel(filter: $filter) {
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
export const onUpdateStockLevel = /* GraphQL */ `
  subscription OnUpdateStockLevel(
    $filter: ModelSubscriptionStockLevelFilterInput
  ) {
    onUpdateStockLevel(filter: $filter) {
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
export const onDeleteStockLevel = /* GraphQL */ `
  subscription OnDeleteStockLevel(
    $filter: ModelSubscriptionStockLevelFilterInput
  ) {
    onDeleteStockLevel(filter: $filter) {
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
export const onCreateCustomerAccount = /* GraphQL */ `
  subscription OnCreateCustomerAccount(
    $filter: ModelSubscriptionCustomerAccountFilterInput
  ) {
    onCreateCustomerAccount(filter: $filter) {
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
export const onUpdateCustomerAccount = /* GraphQL */ `
  subscription OnUpdateCustomerAccount(
    $filter: ModelSubscriptionCustomerAccountFilterInput
  ) {
    onUpdateCustomerAccount(filter: $filter) {
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
export const onDeleteCustomerAccount = /* GraphQL */ `
  subscription OnDeleteCustomerAccount(
    $filter: ModelSubscriptionCustomerAccountFilterInput
  ) {
    onDeleteCustomerAccount(filter: $filter) {
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
export const onCreateOrdersPlaced = /* GraphQL */ `
  subscription OnCreateOrdersPlaced(
    $filter: ModelSubscriptionOrdersPlacedFilterInput
  ) {
    onCreateOrdersPlaced(filter: $filter) {
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
export const onUpdateOrdersPlaced = /* GraphQL */ `
  subscription OnUpdateOrdersPlaced(
    $filter: ModelSubscriptionOrdersPlacedFilterInput
  ) {
    onUpdateOrdersPlaced(filter: $filter) {
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
export const onDeleteOrdersPlaced = /* GraphQL */ `
  subscription OnDeleteOrdersPlaced(
    $filter: ModelSubscriptionOrdersPlacedFilterInput
  ) {
    onDeleteOrdersPlaced(filter: $filter) {
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
