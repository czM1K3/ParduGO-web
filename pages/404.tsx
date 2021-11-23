import { Layout } from "@components/Layout";
import Head from "next/head";
import React, { FC } from "react";

const NotFound: FC = () => (
	<>
		<Head>
        	<title>Stránka nenalezena</title>
      	</Head>
		<Layout>
			<div className="flex h-screen">
				<div className="m-auto">
					<h1 className="text-gray-800 font-bold text-3xl">
						Stránka nenalezena
					</h1>
				</div>
			</div>
		</Layout>
	</>
);

export default NotFound;
