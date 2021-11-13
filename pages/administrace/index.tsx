import { Layout } from "@components/Layout";
import React from "react";
import Link from "next/link";
import { UserEvents } from "@components/UserEvents";

const Administrace: React.FC = () => {
    return (
        <Layout>
            <h1>Administrace</h1>
            <Link href="/administrace/vytvorit">Vytvořit akci</Link>
            <UserEvents />
            <Link href="/administrace/odhlasit">Odhlásit se</Link>
        </Layout>
    );
}

export default Administrace;
