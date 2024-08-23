/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
