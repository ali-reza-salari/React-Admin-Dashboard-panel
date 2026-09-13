export default function ModalFooter({ onClose }) {
    return <section className={`flex items-center gap-x-2 w-80 md:w-100`}>
        <button className={`rounded-lg cursor-pointer font-bold px-4 py-2 bg-brand-500 w-70 text-white`}>OK</button>
        <button className={`rounded-lg cursor-pointer px-4 py-2 border border-brand-500 w-30`} onClick={() => onClose(true)}>Cancel</button>
    </section>
}