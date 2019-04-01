<template>
	<div class="singer">
		<singer-list :singers="singerList">
		</singer-list>
		<router-view></router-view>
	</div>
</template>
<script>
import {getSingerList} from '@/api/'
import SingerList from '@/components/singerList'
//a-z 开头排序 A要放一起 生成一个热门排序
	// [
	// 	"热门":[
	// 		{

	// 		},{

	// 		},{

	// 		}
	// 	]
	// 	"A":[

	// 	]
	// ]
	export default{
		data(){
			return {
				singerList:[],

			}
		},
		created(){
			this.getSList()
		},
		methods:{
			getSList(){
				getSingerList().then(res => {
					this.singerList = this.newSinger(res.data.list)
					
				})
			},
			newSinger(list){
				let nList = {
					hot:{
						title:"热门",
						list:[]
					}
				}
				//取前10条作为热门
				list.forEach((item,index) => {
					if(index < 10){
						nList.hot.list.push({
							id:item.Fsinger_mid,
							name:item.Fsinger_name,
							img:`http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
						})
					}
					let key = item.Findex
					if(!nList[key]){
						nList[key] = {
							title:key,
							list:[]
						}
					}
					nList[key].list.push({
							id:item.Fsinger_mid,
							name:item.Fsinger_name,
							img:`http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
					})
				});
	
				//排序成有序的数组
				let hot=[]
				let other = []
				for(let i in nList){
					if(nList[i].title.match(/[a-zA-Z]/)){
						other.push(nList[i])
					}else if(nList[i].title == "热门"){
						hot.push(nList[i])
					}
				}
				other.sort((a,b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})
				return hot.concat(other)
			}
		},
		components:{
			SingerList
		}
	}
</script>
<style lang="less" scoped>
	.singer{
		position: fixed;
		top:88px;
		bottom: 0;
		width: 100%;
	}
</style>