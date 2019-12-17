import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Category from "../views/Category";
import Customer from "../views/Customer";
import Product from "../views/Product";
import Review from "../views/Review";
import First from "../views/First";
import Second from "../views/Second";
import Third from "../views/Third";

Vue.use(VueRouter);
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home/first",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        redirect: "/home/first",
        component: Home,
        children: [
          {
            path: "first",
            name: "first",
            component: First
          },
          {
            path: "second",
            name: "second",
            component: Second
          },
          {
            path: "third",
            name: "third",
            component: Third
          }
        ]
      },
      {
        path: "/category",
        name: "category",
        component: Category
      },
      {
        path: "/product",
        name: "product",
        component: Product
      },
      {
        path: "/customer",
        name: "customer",
        component: Customer
      },
      {
        path: "/review",
        name: "review",
        component: Review
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base:process.env.BASE_URL,
  routes
});

export default router;
