import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Brands from "../pages/Brands";
import Customeraccount from "../pages/Customeraccount";
import Fragrance from "../pages/Fragrance";
import Gift from "../pages/Gift";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Cart from "../pages/Cart";
import { FC } from "react";
import NotSideBarLayOut from "../components/layouts/NotSideBarLayOut";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/ProductDetail";
import NotUser from "../components/NotUser";


const publicRoutes: {path: string, component: FC, layout?: any, children?: any, element?:any}[] = [
  { path: "/", component: HomePage, layout: NotSideBarLayOut},
  { path: "/search", component: Search },
  { path: "/brands", component: Brands, layout: NotSideBarLayOut },
  { path: "/customeraccount", component: Customeraccount, layout: null },
  { path: "/fragrance", component: Fragrance, layout: null },
  { path: "/gift", component: Gift},
  { path: "/men", component: Men, children: ProductDetail},
  { path: "/women", component: Women, children: ProductDetail},
  // { path: "/help", component:Help, layout: NotSideBarLayOut },
  // { path: "/cart", component: Cart, layout: NotSideBarLayOut },
  { path: "/women", component: Women, children: ProductDetail },
  // { path: "/payment", component: Payment, layout: null },
  { path: "product/:id", component: ProductDetail, layout: NotSideBarLayOut},
];

const privateRoutes: {path: string, component: FC, layout?: any, naviComponent: FC}[] = [
  {path: "/cart", component: Cart, layout: NotSideBarLayOut, naviComponent: NotUser},
  { path: "/payment", component: Payment, layout: null, naviComponent: NotUser }
];
export { publicRoutes, privateRoutes };
