<template>
		<song-list :title="title" :img
		="bgImg" :list="songsList":rank="rank"></song-list>
</template>
<script>
import songList from '@/components/songsList'
import { getRankInfo } from '@/api'
	export default {
		data(){
			return {
				songsList:[],
				title:"",
				bgImg:""
			}
		},
		created(){
			this.getsRankInfo()
		},
		methods:{
			getsRankInfo(){
				getRankInfo(this.$route.params.id).then(res => {

					if(res){
						console.log(res)
						this.title = res.topinfo.ListName;
						this.bgImg = res.topinfo.pic_v12;
						this.songsList = this.editSongs(res.songlist)
						console.log(res.songlist)
					}
				})
			},
			editSongs(list){
				let nList = [];
				for(var i=0;i<list.length;i++){
					let item = {
						//不全
						//歌曲id
						id:list[i].data.singer,
						//歌曲名
						name:list[i].data.songname,
						//歌手姓名
						singer:list[i].data.singer,
						//专辑名
						album:list[i].data.albumname
					}
					nList.push(item)
				}
				return nList
			},
			
				},
		components:{
			songList
		}
}
</script>
