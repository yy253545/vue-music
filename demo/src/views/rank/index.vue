<template>
	<div>
		<rank-list :ranks="rankList" ></rank-list>
		<router-view></router-view>
	</div>
</template>
<script>
import rankList from '@/components/rankList'
import {getRankList} from '@/api/'

	export default{
		data(){
			return {
				rankList:[]
			}
		},
		created(){
			this.rankS()
		},
		methods:{
			rankS(){
				getRankList().then(res => {
					console.log(res.data)
					this.rankList = res.data.topList
				})
			}

		},
		components:{
			rankList
		}
	}
</script>
<style>
	
</style>