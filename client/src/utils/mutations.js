import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
    ) {
        token
        user {
            _id
        }
    }
}
`;

export const CREATE_PLANET = gql`
    mutation createPlanet($planetName: String!) {
        createPlanet(planetName: $planetName) {
            _id
            username
            savedPlanets {
                planetName
			}
        }
    }
`;

export const RAINFALL = gql`
    mutation rainfall($planetId: String!, $bio: Int!, $hydro: Int!, $litho: Int!) {
        rainfall(planetId: $planetId, bio: $bio, hydro: $hydro, litho: $litho) {
            _id
            username
            savedPlanets {
                planetName
                biosphere
                hydrosphere
                lithosphere
                atmosphere
                age
            }
        }
    }
`;

export const VOLCANO = gql`
    mutation volcano($planetId: String!, $bio: Int!, $hydro: Int!, $litho: Int!, $atmo: Int!) {
        volcano(planetId: $planetId, bio: $bio, hydro: $hydro, litho: $litho, atmo: $atmo) {
            _id
            username
            savedPlanets {
                planetName
                biosphere
                hydrosphere
                lithosphere
                atmosphere
                age
            }
        }
    }
`;

export const SUNLIGHT = gql`
    mutation sunlight($planetId: String!, $bio: Int!, $hydro: Int!, $atmo: Int!) {
        sunlight(planetId: $planetId, bio: $bio, hydro: $hydro, atmo: $atmo) {
            _id
            username
            savedPlanets {
                planetName
                lithosphere
                atmosphere
                age
            }
        }
    }
`;

export const WIND = gql`
    mutation wind($planetId: String!, $bio: Int!, $atmo: Int!) {
        wind(planetId: $planetId, bio: $bio, atmo: $atmo) {
            _id
            username
            savedPlanets {
                planetName
                biosphere
                hydrosphere
                lithosphere
                atmosphere
                age
            }
        }
    }
`;