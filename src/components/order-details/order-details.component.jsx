import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderSelector } from "../../store/orders/order.selectors";
import {
  BaseSpan,
  Container,
  DateAndTime,
  Delivery,
  ImageContainer,
  ItemDetails,
  OrderItemContainer,
  OrderItemsContainer,
  Total,
} from "./order-details.style";

const OrderDetails = () => {
  const params = useParams();
  const id = params.orderId;

  const Orders = useSelector(orderSelector);

  const order = Orders.find((order) => order.id === id);

  return (
    <Container>
      {!order ? (
        "Opps Something went wrong"
      ) : (
        <div>
          <h1>{`Order ${order.id} Details`}</h1>
          <OrderItemsContainer>
            <h5>
              Order ID: <span>{order.id}</span>
            </h5>
            <DateAndTime>
            <p>
              Order Placed Date: <span>{order.date}</span>
            </p>
            <p>Time: <span>{order.time}</span></p>
            </DateAndTime>

            <h3>Order Details</h3>
            <h4>Ordered Items</h4>
            {order.items &&
              order.items.map((item) => (
                <OrderItemContainer key={item.id}>
                  <ImageContainer>
                    <img src={item.imageUrl} alt="" />
                  </ImageContainer>
                  <ItemDetails>
                    <BaseSpan>{item.name}</BaseSpan>
                    <BaseSpan>{item.quantity}</BaseSpan>
                    <BaseSpan>&#8377;{item.price}</BaseSpan>
                  </ItemDetails>
                </OrderItemContainer>
              ))}

            <Total>
              Total : <span>&#8377;{order.total}</span>
            </Total>
            <Delivery>
              <h3>Delivery Address</h3>
              <p>udaipur, rajasthan, indian </p>
            </Delivery>
          </OrderItemsContainer>
        </div>
      )}
    </Container>
  );
};

export default OrderDetails;
