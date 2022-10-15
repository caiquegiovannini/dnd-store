import { Outlet } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Banner />
            <Outlet />
        </>
    )
}