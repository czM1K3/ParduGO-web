import { Layout } from "@components/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const Odhlasit: React.FC = () => {
    const router = useRouter();
    const [cookie, _setCookie, removeCookie] = useCookies(["authorization"]);
    useEffect(() => {
        if (cookie.authorization) {
            removeCookie("authorization");
            router.reload();
        }
    }, [router]);
    return (
        <Layout>
            <h1>Odhlašování</h1>
        </Layout>
    );
}

export default Odhlasit;
