import Vue from "vue"
import Router from "vue-router"
import Home from "@/Home.vue"

import JumboTron from "@/components/cmm/JumboTron.vue"
import Footer from "@/components/cmm/Footer.vue"
import Cart from "@/components/contents/Cart.vue"
import Calculator from "@/components/contents/Calculator.vue"
import Seqsum from "@/components/contents/Seqsum.vue"
import Account from "@/components/contents/Account.vue"
import Todo from "@/components/contents/Todo.vue"

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes : [
		{path: '/', name : 'home', component: Home},
		{path: '/cart', name: 'cart', component: Cart},
		{path: '/jumboTron', name: 'jumboTron', component: JumboTron},
		{path: '/footer', name: 'footer', component: Footer},
		{path: '/calculator', name: 'calculator', component: Calculator},
		{path: '/seqsum', name: 'seqsum', component: Seqsum},
		{path: '/account', name: 'account', component: Account},
		{path: '/todo', name: 'todo', component: Todo},
	]	
})