import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Adjust height as needed */
`;

export const OrderItemsContainer = styled.div`
 margin-top : 4rem;
`;

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 80px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 50%;
    height: 50%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const DateAndTime = styled.div`
display:flex;
justify-content: space-between;
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 25px;
`;

export const Delivery = styled.div`
  // position: absolute;
  // top: auto;
`;
