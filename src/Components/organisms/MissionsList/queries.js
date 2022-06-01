import {gql} from "@apollo/client";

export const MISSIONS_QUERY = gql`
  query launchesPast {
    launchesPast(limit: 10) {
        id
        mission_name
        rocket {
          rocket_name
          rocket {
            id
          }
        }
        ships {
          image
        } 
    }
  }
`;

export const ROCKET_QUERY = (id) => gql`
query rocket {
  rocket(id: "${id}") {
    active
    name
    type
    stages
    description
    country
    company
    boosters
    height {
      meters
    }
  }
}
`;