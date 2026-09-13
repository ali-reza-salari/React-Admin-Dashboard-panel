import Table from "../../components/common/Table/Table.jsx";
import TableHead from "../../components/common/Table/elements/TableHead.jsx";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell.jsx";
import ordersTableHeadCellRows from "../../data/ordersTableHeadCellRows.js";
import TableBody from "../../components/common/Table/elements/TableBody.jsx";
import TableRow from "../../components/common/Table/elements/TableRow.jsx";
import ordersData from "../../data/ordersData.js";
import TableCell from "../../components/common/Table/elements/TableCell.jsx";

export default function OrdersTable() {
    return (
        <div className={`overflow-x-auto`}>
            <Table>
                <TableHead>
                    {
                        ordersTableHeadCellRows.map(order => (
                            <TableHeadCell>
                                <p key={order.id}>{order}</p>
                            </TableHeadCell>
                        ))
                    }
                </TableHead>

                <TableBody>
                    {
                        ordersData.map(order => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <div className="px-2 py-4">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <p className="font-semibold">{order.order_id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-2 py-4">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <p className="font-semibold">{order.ordering_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 text-slate-500">{order.order_date}</div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <span className="font-semibold">${order.order_price.toLocaleString()}.00</span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 font-semibold">{order.order_status}</div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <span className={`rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold dark:bg-emerald-500/15`}>
                                            <button className={"bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500 flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer"}>
                                                View
                                            </button>
                                        </span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}