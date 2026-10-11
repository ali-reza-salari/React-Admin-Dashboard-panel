import { MdOutlineGridView } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const sidebarMenus = [
    {
        id: 1,
        menu_name: "Overview",
        path: "/",
        icon: MdOutlineGridView
    },
    {
        id: 2,
        menu_name: "Products",
        path: "products",
        icon: IoShirtOutline
    },
    {
        id: 3,
        menu_name: "Orders",
        path: "orders",
        icon: FiShoppingBag
    }
]

export default sidebarMenus