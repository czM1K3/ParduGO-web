import { Layout } from "@components/Layout";
import React from "react";
import Link from "next/link";

const Administrace: React.FC = () => {
    return (
        <Layout>
            <h1>Administrace</h1>
            <Link href="/administrace/vytvorit">Vytvořit akci</Link>
            <Link href="/administrace/odhlasit">Odhlásit se</Link>
        </Layout>
    );
}

export default Administrace;
