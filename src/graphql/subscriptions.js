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
