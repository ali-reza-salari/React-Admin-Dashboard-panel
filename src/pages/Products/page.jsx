import PagesTitleSection from "../../features/PagesTitleSection/PagesTitleSection.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import ProductsTable from "../../features/ProductsTable/ProductsTable.jsx";
import { FaPlus } from "react-icons/fa6";
import Modal from "../../features/Modal/Modal.jsx";
import {useState} from "react";

export default function Products() {
    useTitle("Product's");
    const [closeModal , setCloseModal] = useState(true);
    const closeModalHandler = () => setCloseModal(true)
    const AddProductBtn = () => {
        return <button
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700 cursor-pointer"
            onClick={() => setCloseModal(false)}
        >
            <FaPlus className={`size-4`} />
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

            <Modal
                modalTitle={"Add new Product"}
                closeModalStatus={closeModal}
                onClose={closeModalHandler}
            >
                <p>Modal Body</p>
            </Modal>

            <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

                <ProductsTable />
            </section>
        </>
    )
}