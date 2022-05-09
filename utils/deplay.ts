import { CartItemProps } from "components/CartItem/CartItem";

export function deplay(data: CartItemProps[], time: number) {
  return new Promise<CartItemProps[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
