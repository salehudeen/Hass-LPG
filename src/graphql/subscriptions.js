/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      __typename
    }
  }
`;
