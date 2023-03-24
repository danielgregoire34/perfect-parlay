//queries.js
import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            }
        }
    }
`;

export const GET_USER = gql`
    query getUser($username: String!) {
        user(username: $username) {
            _id
            username
            email
        }
    }
`;

export const GET_USER_BY_ID = gql`
    query getUserById($userId: ID!) {
        userById(userId: $userId) {
            _id
            username
            email
        }
    }
`;

