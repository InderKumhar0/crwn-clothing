import { useSelector } from "react-redux";
import { orderSelector } from "../../store/orders/order.selectors";
import { Route, Routes } from "react-router-dom";
import OrderItems from "../../components/order-items/order-item.component";
import OrderDetails from "../../components/order-details/order-details.component";

const Order = () => {
  const orders = useSelector(orderSelector);
  console.log(orders);

  return (
    <Routes>
    <Route index element={<OrderItems />} />
    <Route path=":orderId" element={<OrderDetails />} />
  </Routes>
  );
};

export default Order;
