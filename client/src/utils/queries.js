import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
{
    users {
        username
        email
        savedPlanets {
            planetName  
            _id
            atmosphere
            biosphere
            hydrosphere
            lithosphere
            age
        }
    }
}
`;

export const QUERY_ME = gql`
{
    me {
        _id
        username
        savedPlanets {
            planetName
            _id
            atmosphere
            biosphere
            hydrosphere
            lithosphere
            age
        }
    }
}
`;