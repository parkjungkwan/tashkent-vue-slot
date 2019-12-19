<template>
<div>
	<h1>seqsum 페이지</h1>
	<ul>
		<input v-model ="first" type="text" />첫번째수
		<input v-model ="second" type="text" />두번째수
	</ul>
	<button @click="sum">+</button>
	<p>합계:{{totalNum}}</p>
</div>
</template>
<script>
export default {
	data(){
		return {
			totalNum : 0,
			first : '',
			second : ''
		}
	},
	methods : {
		sum : function(){
			let a = parseInt(this.first)
			let b = parseInt(this.second)
			alert(`a의 타입 ${typeof a} b의 타입 ${typeof b}`)
			const arr = [a, b]
			arr.sort(function(a, b){
				return a - b
			})
			let sum = 0
			let start = arr[0]
			let end = arr[1]+1
			for(let i=start; i< end; i++){
				sum += i
			}
			this.totalNum = sum
		}
	}
}
</script>
<style scoped></style>








