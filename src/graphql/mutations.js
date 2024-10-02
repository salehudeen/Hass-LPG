/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStationManager = /* GraphQL */ `
  mutation CreateStationManager(
    $input: CreateStationManagerInput!
    $condition: ModelStationManagerConditionInput
  ) {
    createStationManager(input: $input, condition: $condition) {
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
export const updateStationManager = /* GraphQL */ `
  mutation UpdateStationManager(
    $input: UpdateStationManagerInput!
    $condition: ModelStationManagerConditionInput
  ) {
    updateStationManager(input: $input, condition: $condition) {
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
export const deleteStationManager = /* GraphQL */ `
  mutation DeleteStationManager(
    $input: DeleteStationManagerInput!
    $condition: ModelStationManagerConditionInput
  ) {
    deleteStationManager(input: $input, condition: $condition) {
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
export const createStation = /* GraphQL */ `
  mutation CreateStation(
    $input: CreateStationInput!
    $condition: ModelStationConditionInput
  ) {
    createStation(input: $input, condition: $condition) {
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
export const updateStation = /* GraphQL */ `
  mutation UpdateStation(
    $input: UpdateStationInput!
    $condition: ModelStationConditionInput
  ) {
    updateStation(input: $input, condition: $condition) {
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
export const deleteStation = /* GraphQL */ `
  mutation DeleteStation(
    $input: DeleteStationInput!
    $condition: ModelStationConditionInput
  ) {
    deleteStation(input: $input, condition: $condition) {
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
export const createStockLevel = /* GraphQL */ `
  mutation CreateStockLevel(
    $input: CreateStockLevelInput!
    $condition: ModelStockLevelConditionInput
  ) {
    createStockLevel(input: $input, condition: $condition) {
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
export const updateStockLevel = /* GraphQL */ `
  mutation UpdateStockLevel(
    $input: UpdateStockLevelInput!
    $condition: ModelStockLevelConditionInput
  ) {
    updateStockLevel(input: $input, condition: $condition) {
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
export const deleteStockLevel = /* GraphQL */ `
  mutation DeleteStockLevel(
    $input: DeleteStockLevelInput!
    $condition: ModelStockLevelConditionInput
  ) {
    deleteStockLevel(input: $input, condition: $condition) {
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
export const createCustomerAccount = /* GraphQL */ `
  mutation CreateCustomerAccount(
    $input: CreateCustomerAccountInput!
    $condition: ModelCustomerAccountConditionInput
  ) {
    createCustomerAccount(input: $input, condition: $condition) {
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
export const updateCustomerAccount = /* GraphQL */ `
  mutation UpdateCustomerAccount(
    $input: UpdateCustomerAccountInput!
    $condition: ModelCustomerAccountConditionInput
  ) {
    updateCustomerAccount(input: $input, condition: $condition) {
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
export const deleteCustomerAccount = /* GraphQL */ `
  mutation DeleteCustomerAccount(
    $input: DeleteCustomerAccountInput!
    $condition: ModelCustomerAccountConditionInput
  ) {
    deleteCustomerAccount(input: $input, condition: $condition) {
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
export const createOrdersPlaced = /* GraphQL */ `
  mutation CreateOrdersPlaced(
    $input: CreateOrdersPlacedInput!
    $condition: ModelOrdersPlacedConditionInput
  ) {
    createOrdersPlaced(input: $input, condition: $condition) {
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
export const updateOrdersPlaced = /* GraphQL */ `
  mutation UpdateOrdersPlaced(
    $input: UpdateOrdersPlacedInput!
    $condition: ModelOrdersPlacedConditionInput
  ) {
    updateOrdersPlaced(input: $input, condition: $condition) {
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
export const deleteOrdersPlaced = /* GraphQL */ `
  mutation DeleteOrdersPlaced(
    $input: DeleteOrdersPlacedInput!
    $condition: ModelOrdersPlacedConditionInput
  ) {
    deleteOrdersPlaced(input: $input, condition: $condition) {
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
