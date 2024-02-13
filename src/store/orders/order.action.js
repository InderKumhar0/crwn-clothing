import { createAction } from "../../utils/reducer/reducer.utils";
import { ORDER_ACTION_TYPES } from "./order.types";
import { v4 as uuidv4 } from "uuid";

function generateShortId() {
  const fullUuid = uuidv4();
  const shortId = fullUuid.substring(0, 5);
  return shortId;
}

const dateandTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrpm = hours >= 12 ? "PM" : "AM";

  return `${hours}:${minutes} ${amOrpm}`;
};

export const setOrders = (order, total, count) => {
  const newOrder = {
    id: generateShortId(),
    date: new Date().toDateString(),
    time: dateandTime(),
    items: order,
    total: total,
    count: count,
  };
  return createAction(ORDER_ACTION_TYPES.SET_ORDERS, newOrder);
};
