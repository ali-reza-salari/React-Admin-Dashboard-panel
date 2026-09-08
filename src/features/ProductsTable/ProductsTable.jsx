import Table from "../../components/common/Table/Table.jsx";
import TableHead from "../../components/common/Table/elements/TableHead.jsx";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell.jsx";
import TableBody from "../../components/common/Table/elements/TableBody.jsx";
import TableRow from "../../components/common/Table/elements/TableRow.jsx";
import TableCell from "../../components/common/Table/elements/TableCell.jsx";
import productsTableHeadCellRows from "../../data/productsTableHeadCellRows.js";
import productsData from "../../data/productsData.js";
import {IoIosMore} from "react-icons/io";
import {IoIosSearch} from "react-icons/io";
import {useEffect, useState} from "react";

export default function ProductsTable({  }) {
    const [search , setSearch] = useState("")
    const searchedProduct = productsData.filter(product => (
        product.product_title.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <div className={`overflow-x-auto`}>
            <div className="flex flex-col gap-3 p-5 md:flex-row">
                <label className="relative flex-1">
                    <IoIosSearch className={"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 size-6"} />

                    <input
                        className="w-full rounded-xl border border-slate-200 bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 dark:border-slate-700"
                        placeholder="Search products..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </label>

                <select
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800">
                    <option>All categories</option>
                    <option>Women's wear</option>
                    <option>Men's wear</option>
                </select>

                <select
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800">
                    <option>All statuses</option>
                    <option>Active</option>
                    <option>Low stock</option>
                </select>

                <button
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Filter
                </button>
            </div>
            <Table>
                <TableHead>
                    {
                        productsTableHeadCellRows.map(row => (
                            <TableHeadCell key={row}>{row}</TableHeadCell>
                        ))
                    }
                </TableHead>

                <TableBody>
                    {
                        searchedProduct.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="px-2 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-11 w-11 rounded-lg bg-stone-200 dark:bg-stone-700">
                                                <img src={product.product_image} />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{product.product_title}</p>
                                                <p className="mt-0.5 text-xs text-slate-500">{product.product_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 text-slate-500">{product.product_brand}</div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <span className="font-semibold">{product.product_stock}</span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 font-semibold">${product.product_price.toLocaleString()}</div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <span className={`rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold dark:bg-emerald-500/15 ${product.product_stock === 0 ? "dark:text-yellow-300 text-yellow-700" : "dark:text-emerald-300 text-emerald-700"}`}>
                                            {product.product_stock === 0 ? "Low Stock" : "Active"}
                                        </span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <button className="text-slate-400 hover:text-brand-600 cursor-pointer" aria-label="Product options">
                                            <IoIosMore className={"size-6"} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>



                {/*<TableBody>*/}
                {/*    {*/}
                {/*        products.map(product => (*/}
                {/*            <TableRow key={product.id}>*/}
                {/*                <TableCell>*/}
                {/*                    <div className="px-2 py-4">*/}
                {/*                        <div className="flex items-center gap-3">*/}
                {/*                            <div className="h-11 w-11 rounded-lg bg-stone-200 dark:bg-stone-700">*/}
                {/*                                <img src={product.product_image} />*/}
                {/*                            </div>*/}
                {/*                            <div>*/}
                {/*                                <p className="font-semibold">{product.product_title}</p>*/}
                {/*                                <p className="mt-0.5 text-xs text-slate-500">{product.product_description}</p>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </TableCell>*/}

                {/*                <TableCell>*/}
                {/*                    <div className="px-5 py-4 text-slate-500">{product.product_brand}</div>*/}
                {/*                </TableCell>*/}

                {/*                <TableCell>*/}
                {/*                    <div className="px-5 py-4">*/}
                {/*                        <span className="font-semibold">{product.product_stock}</span>*/}
                {/*                    </div>*/}
                {/*                </TableCell>*/}

                {/*                <TableCell>*/}
                {/*                    <div className="px-5 py-4 font-semibold">${product.product_price.toLocaleString()}</div>*/}
                {/*                </TableCell>*/}

                {/*                <TableCell>*/}
                {/*                    <div className="px-5 py-4">*/}
                {/*                        <span className={`rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold dark:bg-emerald-500/15 ${product.product_stock === 0 ? "dark:text-yellow-300 text-yellow-700" : "dark:text-emerald-300 text-emerald-700"}`}>*/}
                {/*                            {product.product_stock === 0 ? "Low Stock" : "Active"}*/}
                {/*                        </span>*/}
                {/*                    </div>*/}
                {/*                </TableCell>*/}

                {/*                <TableCell>*/}
                {/*                    <div className="px-5 py-4">*/}
                {/*                        <button className="text-slate-400 hover:text-brand-600 cursor-pointer" aria-label="Product options">*/}
                {/*                            <IoIosMore className={"size-6"} />*/}
                {/*                        </button>*/}
                {/*                    </div>*/}
                {/*                </TableCell>*/}
                {/*            </TableRow>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</TableBody>*/}
            </Table>
        </div>
    )
}