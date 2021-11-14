import { gql } from "@apollo/client";

export default gql`
	type Query {
		hello: String!
		getAllEvents: [Event!]!
		getUserEvents: [Event!]!
		getEvent(id: ID!): Event
		getFavorites(id: [ID!]!): [Event!]!
	}

	type Mutation {
		login(email: String!, password: String!): String!
		register(email: String!, password: String!): String!
		createEvent(input: CreateEventInput!): Boolean!
		approveEvent(id: ID!): Boolean!
	}

	input CreateEventInput {
		name: String!
		latitude: Float!
		longitude: Float!
		startTime: String!
		endTime: String!
		category: String!
		web: String!
		contactPhone: String!
		contactEmail: String!
		description: String!
		price: Int
	}

	type Event {
		id: ID!
		name: String!
		latitude: Float!
		longitude: Float!
		start: String!
		end: String!
		category: String!
		web: String!
		contact_phone: String!
		contact_email: String!
		description: String!
		approved: Boolean!
		price: Int
	}
`;