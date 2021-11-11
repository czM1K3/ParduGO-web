import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../lib/schema";
import { myContext as context } from "../../lib/context";
import Cors from "micro-cors";

const cors = Cors({
	origin: "*",
});

const apolloServer = new ApolloServer({
	schema,
	context,
	parseOptions: {
		noLocation: true,
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default cors((req, res) => {
	if (req.method === 'OPTIONS') {
	  res.end();
	  return false;
	}
  
	return apolloServer.createHandler({
	  path: '/api/graphql',
	})(req, res);
  });