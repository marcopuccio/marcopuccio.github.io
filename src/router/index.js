/* eslint-disable quotes */
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import AboutMe from "@/views/AboutMe";
import Experience from "@/views/Experience";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about-me",
      name: "aboutMe",
      component: AboutMe,
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience,
    },
  ],
});
