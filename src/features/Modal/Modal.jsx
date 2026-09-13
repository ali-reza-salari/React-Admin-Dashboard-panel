import ModalFooter from "./elements/ModalFooter.jsx";
import {BiX} from "react-icons/bi";

export default function Modal({ modalTitle , closeModalStatus , onClose , children }) {
    return (
        <section className={`${closeModalStatus === true ? "hidden" : null} fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50`}>
            <div className={`flex flex-col gap-3 p-4 dark:bg-brand-900/30 bg-brand-50 rounded-lg`}>
                <div className={` flex items-center justify-between`}>
                    <p className={`font-bold text-3xl`}>{modalTitle}</p>
                    <button className={`cursor-pointer`} onClick={onClose}>
                        <BiX className={`size-7`} />
                    </button>
                </div>

                <div className={``}>
                    { children }
                </div>

                <div>
                    <ModalFooter onClose={onClose} />
                </div>
            </div>
        </section>
    )
}