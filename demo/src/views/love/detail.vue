<template>
		<song-list :title="title" :img
		="bgImg" :list="songsList"></song-list>
</template>
<script>
import songList from '@/components/songsList'
import { getCdInfo } from '@/api'
	export default {
		data(){
			return {
				songsList:[],
				title:"",
				bgImg:""
			}
		},
		created(){
			this.getCdInfoList()
		},
		methods:{
			getCdInfoList(){
				getCdInfo().then(res => {
					console.log(res)
					this.title = res.data.cdlist[0].dissname
					this.bgImg = res.data.cdlist[0].logo
					this.songsList = this.editSongs(res.data.cdlist[0].songlist)
				})
			},
			editSongs(list){
				let nList = [];
				for(var i=0;i<list.length;i++){
					let item = {
						//不全
						//歌曲id
						id:list[i].songid,
						//歌曲名
						name:list[i].songname,
						//歌手姓名
						singer:list[i].singer,
						//专辑名
						album:list[i].albumname
					}
					nList.push(item)
				}
				return nList
			}
		},
		components:{
			songList
		}
	}
</script>
