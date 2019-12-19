<template>
	<div class="child">
		X : <input type="text" v-model="x"><br/>
		Y : <input type="text" v-model="y"><br/>
		<slot name="slot1" :slotX="x" :slotY="y"></slot>
		<slot name="slot2" :slotX="x" :slotY="y"></slot>
	</div>
</template>
<script>
export default{
	data(){
		return {
			x: 0, y: 0
		}
	}
}
</script>
<style scoped>
.child{
	padding: 5px; border: solid 1px black
}
</style>