import useTitle from "../../hooks/useTitle.jsx";
import OrdersTable from "../../features/OrdersTable/OrdersTable.jsx";
import PagesTitleSection from "../../features/PagesTitleSection/PagesTitleSection.jsx";

export default function Orders() {
    useTitle("Order's");
    return (
        <>
            <PagesTitleSection
                page_title={"Recent orders"}
                page_description={"Latest customer purchases"}
            />

            <OrdersTable />
        </>
    )
}