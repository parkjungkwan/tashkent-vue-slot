<template>
<div id="app">
	<child-form>
		<template #slot1="s1">
			<div>{{s1.slotX}} + {{s1.slotY}} = {{parseInt(s1.slotX) + parseInt(s1.slotY)}}</div>
		</template>
		<template #slot2="s2">
			<div>{{s2.slotX}} 더하기  {{s2.slotY}} 는 {{parseInt(s2.slotX) + parseInt(s2.slotY)}} 입니다</div>
		</template>
	</child-form>
</div>
</template>
<script>
import ChildForm from '@/components/CalcChild.vue'
export default {
	name : "calcApp",
	components: {
		ChildForm
	}
}
</script>
<style scoped></style>