<template>
	<div>
		<label class="container">
			<input type="checkbox" checked="checked">
			<span class="checkmark"></span>
    </label>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class CheckboxInput extends Vue {}
</script>

<style scoped lang="scss">
/* The container */
.container {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The custom checkbox */
.checkmark {
	display: block;
  height: 16px;
	width: 16px;

	border: 2px solid #859EFF;
	border-radius: 3px;

	&:after {
    content: "";
    position: absolute;
    display: none;
	}
}

input {
	//Hide input
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;

	//When checked show background-color
	&:checked ~ .checkmark {
		background-color: #859EFF;
	}

	//When checked draw checkmark
	&:checked ~ .checkmark:after {
  	display: block;
		margin-left: 5px;
		width: 4px;
		height: 9px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	
}

</style>
