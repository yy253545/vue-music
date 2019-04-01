<template>
	<song-list :title="title" :img
		="bgImg" :list="songsList"></song-list>
</template>
<script>
import SongList from '@/components/songsList'
import { getSingerInfo } from '@/api'
	export default{
		data(){
			return {
				songsList:[],
				title:"",
				bgImg:""
			}
		},
		created(){
			this.getSong()
		},
		methods:{
			getSong(){
				getSingerInfo(this.$route.params.id).then(res => {
					 if(res){
                       this.title = res.data.singer_name;
                       this.bgImg = "http://y.gtimg.cn/music/photo_new/T001R300x300M000" +
                            res.data.singer_mid +
                            ".jpg?max_age=2592000";
                       this.songsList = this.editSongs(res.data.list)

                       console.log(res.data)
                    }
		        })
			},
			editSongs(list){
				let nList = [];
				for(var i=0;i<list.length;i++){
					let item = {
						//不全
						//歌曲id
						id:list[i].musicData.songid,
						//歌曲名
						name:list[i].musicData.songname,
						//歌手姓名
						singer:list[i].musicData.singer,
						//专辑名
						album:list[i].musicData.albumname,

					}
					nList.push(item)
				}
				return nList
			}
		},
		
		components:{
			SongList
		}
	}
</script>
<style scoped lang="less">
	.singer{
		position: absolute;
		background: #222;
		color: #fff
	}
</style>