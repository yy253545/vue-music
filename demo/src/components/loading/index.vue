<template>
	<div class="load">
		<img src="./loading.gif" alt="">
		<p v-text="title"></p>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type:String,
				default:"loading..."
			}
		}
	}
</script>
<style lang="less" scoped>
@import '~@/content/less/variable.less';
	.load{
		width: 100%;
		text-align: center;
		position: absolute;
		top:50%;
		margin-top: -50px;
		img{
			width: 48px;
			height: 48px;
		}
		p{
			line-height: 20px;
			font-size: 12px;
			color: @color-text-l;
		}
	}
</style>