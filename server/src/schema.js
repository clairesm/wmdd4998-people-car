import { gql } from 'apollo-server-express';
import { find } from 'lodash';

const peopleArray = [
  {
    id: '1',
    firstName: 'Bill',
    lastName: 'Gates',
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Jobs',
  },
  {
    id: '3',
    firstName: 'Linux',
    lastName: 'Torvalds',
  },
];

const carsArray = [
  {
    id: '1',
    year: '2019',
    make: 'Toyota',
    model: 'Corolla',
    price: '40000',
    personId: '1',
  },
  {
    id: '2',
    year: '2018',
    make: 'Lexus',
    model: 'LX 600',
    price: '13000',
    personId: '1',
  },
  {
    id: '3',
    year: '2017',
    make: 'Honda',
    model: 'Civic',
    price: '20000',
    personId: '1',
  },
  {
    id: '4',
    year: '2019',
    make: 'Acura ',
    model: 'MDX',
    price: '60000',
    personId: '2',
  },
  {
    id: '5',
    year: '2018',
    make: 'Ford',
    model: 'Focus',
    price: '35000',
    personId: '2',
  },
  {
    id: '6',
    year: '2017',
    make: 'Honda',
    model: 'Pilot',
    price: '45000',
    personId: '2',
  },
  {
    id: '7',
    year: '2019',
    make: 'Volkswagen',
    model: 'Golf',
    price: '40000',
    personId: '3',
  },
  {
    id: '8',
    year: '2018',
    make: 'Kia',
    model: 'Sorento',
    price: '45000',
    personId: '3',
  },
  {
    id: '9',
    year: '2017',
    make: 'Volvo',
    model: 'XC40',
    price: '55000',
    personId: '3',
  },
];

const typeDefs = gql`
  type Person {
    id: String!
    firstName: String
    lastName: String
  }

  type Car {
    id: String!
    year: String
    make: String
    model: String
    price: String
    personId: String
  }

  type Query {
    person(id: String!): Person
    people: [Person]
    car(id: String!): Car
    cars: [Car]
  }

  type Mutation {
    addPerson(
      id: String!
      firstName: String!
      lastName: String!
    ): Person
  }
`;

const resolvers = {
  Query: {
    people: () => peopleArray,
    cars: () => carsArray,
    person: (root, args) => {
      return find(peopleArray, { id: args.id });
    },
    car: (root, args) => {
      return find(carsArray, { id: args.id });
    },
  },
  Mutation: {
    addPerson: (root, args) => {
      const newPerson = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
      };

      peopleArray.push(newPerson);

      return newPerson;
    },
  },
};

export { typeDefs, resolvers };
