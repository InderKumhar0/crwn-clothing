import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  OrderContainer,
  OrderId,
  OrderInfo,
  Orderblock,
} from "./order-item.style";
import { orderSelector } from "../../store/orders/order.selectors";

const OrderItems = () => {
  const orders = (useSelector(orderSelector)).slice().reverse();


  return (
    <OrderContainer>
      <h2>{orders.length !== 0 ? 'Your Orders' : 'No order'}</h2>
      <div>
        { orders.map((order) => {
          return (
            <Orderblock key={order.id}>
              <OrderId>
                <p>
                  Order ID: <span>{order.id}</span>
                </p>
                <p>
                  Placed Date: <span>{order.date}</span>
                </p>
              </OrderId>
              <OrderInfo>
                <p>
                  Items: <span>{order.count}</span>
                </p>
                <p>
                  Total : <span>&#8377; {order.total}</span>
                </p>
              </OrderInfo>
              <Link to={order.id}><h4>View Details</h4></Link>
            </Orderblock>
          );
        })}
      </div>
    </OrderContainer>
  );
};

export default OrderItems;
