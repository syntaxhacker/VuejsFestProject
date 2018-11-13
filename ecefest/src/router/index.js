import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Register from "@/components/Register";
import Participants from "@/components/Participants";
Vue.use(Router);

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(2);
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "Home",
//       component: Home
//     },
//     {
//       path: "/register",
//       name: "Register",
//       component: Register
//     }
//   ]
// });
