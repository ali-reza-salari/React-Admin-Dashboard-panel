import PagesTitleSection from "../../features/PagesTitleSection/PagesTitleSection.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import ProductsTable from "../../features/ProductsTable/ProductsTable.jsx";

export default function Products() {
    useTitle("Product's");
    const AddProductBtn = () => {
        return <button
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
            <svg
                className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
            </svg>
            Add product
        </button>
    }

    return (
        <>
            <PagesTitleSection
                page_title={"Product inventory"}
                page_description={"Manage catalogue, stock and product availability."}
                trigger={<AddProductBtn />}
            />

            <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

                <ProductsTable />
            </section>
        </>
    )
}