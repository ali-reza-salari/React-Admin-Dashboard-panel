import {NavLink} from "react-router";
import sidebarMenus from "../../../data/sidebarMenus.js";

export default function Sidebar() {
    return (
        <>
            <div className="flex items-center justify-between lg:mb-10">
                <NavLink to={"/"} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-black text-white shadow-lg shadow-brand-500/25">V</span>
                    <span>
                        <span className="block text-lg font-bold tracking-tight">VELA</span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Fashion Commerce</span>
                    </span>
                </NavLink>

                <button className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                        aria-label="Open navigation">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <nav className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1" aria-label="Main navigation">
                {
                    sidebarMenus.map(menu => (
                        <NavLink key={menu.id} to={menu.path} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                            {<menu.icon className={"size-6"} />}
                            {menu.menu_name}
                        </NavLink>
                    ))
                }
            </nav>

            <div className="mt-8 hidden rounded-2xl bg-slate-950 p-4 text-white dark:bg-slate-800 lg:block">
                <p className="text-sm font-semibold">Need a hand?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                    Explore the Vela knowledge base for store setup guides.
                </p>

                <a href="#" className="mt-3 inline-block text-xs font-semibold text-brand-300 hover:text-brand-200">
                    Visit help center →
                </a>
            </div>
        </>
    )
}
