const ordersData = [
    {
        id: 1,
        order_id: crypto.randomUUID().slice(0,6),
        ordering_name: "Sophia Williams",
        order_date: "8/5/2026",
        order_price: 218,
        order_status: "Processing"
    },
    {
        id: 2,
        order_id: crypto.randomUUID().slice(0,6),
        ordering_name: "James Miller",
        order_date: "10/7/2026",
        order_price: 72,
        order_status: "Shipped"
    },
    {
        id: 3,
        order_id: crypto.randomUUID().slice(0,6),
        ordering_name: "Emma Johnson",
        order_date: "18/12/2026",
        order_price: 342,
        order_status: "Delivered"
    },
]

export default ordersData