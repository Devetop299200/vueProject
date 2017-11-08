import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Details from "@/pages/details/details"
import Pet from "@/pages/details/category/pet"
import Cake from "@/pages/details/category/cake"
import Jewellery from "@/pages/details/category/jewellery"
import Beauty from "@/pages/details/category/beauty"
import Cat from "@/pages/details/category/pet/cat"
import Dog from "@/pages/details/category/pet/dog"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: 'index',
            component: Index,
        },
        {
            path: "/details",
            name: "details",
            component: Details,
            redirect: "/details/cake",
            children: [{
                    path: "pet",
                    name: "pet",
                    component: Pet,
                    redirect: "/details/pet/cat",
                    children: [{
                            path: "cat",
                            name: "cat",
                            component: Cat
                        },
                        {
                            path: "dog",
                            name: "dog",
                            component: Dog
                        }
                    ]
                },
                {
                    path: "cake",
                    name: "cake",
                    component: Cake
                },
                {
                    path: "jewellery",
                    name: "jewellery",
                    component: Jewellery
                },
                {
                    path: "beauty",
                    name: "beauty",
                    component: Beauty
                }
            ]
        }
    ]
})