import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setCart } from "@/redux/cart/cartSlice";

const CartProvider = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

  return <></>;
};

export default CartProvider;
