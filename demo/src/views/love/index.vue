<template>
	<div class="love">
		<scroll class="love-content" :data="songlist">
			<div>
			  	<!--轮播图-->
				<div class="swiper-container slide space">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in slider">
							<img :src="item.picUrl" width="100%">
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<!-- 热门歌单推荐 -->
				<div class="love-list">
					<h2>热门歌单推荐</h2>
					<ul>
						<li class="item" v-for="item in songlist" @click="toDetail(item.listid)">
							<div class="icon"><img :src="item.picUrl"></div>
							<div class="text" >
								<h3 v-text="item.songListAuthor"></h3>
								<p v-text="item.songListDesc"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</scroll>
		<div class="loading" v-show="isLoading">
			<loading :title="title"></loading>
		</div>
		<transition name="slide">
		<router-view></router-view>
		</transition>
	</div>
		
		<!-- <swiper ref="mySwiper">
			<swiper-slide>1</swiper-slide>
			<swiper-slide>2</swiper-slide>
			<swiper-slide>3</swiper-slide>
			<swiper-slide>4</swiper-slide>
			<div class="swiper-pagination" slot ="pagination"></div>
		</swiper> -->
</template>
<script src="https://cdn.bootcss.com/jquery/3.3.0/jquery.min.js"></script>
<script>

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
import {getLove} from '@/api'
import Scroll from '@/components/scroll'
import Loading from '@/components/loading'
	export default{
		data(){
			return {
				slider:[],
				songlist:[],
				title:"加载中...",
				isLoading:true
			}
		},
		components:{
			Swiper,
			Scroll,
			Loading
		},
		created(){
			this.getLoveData()
		},
		methods:{
			//获取接口
			getLoveData(){
				getLove().then(res => {
					console.log(res)
					this.slider = res.data.slider
					this.songlist = res.data.songList
					this.isLoading = false
				})
			},
			toDetail(tid){
				this.$router.push({path:`/love/${tid}`})
			}
		},
		// 挂载之前去实例化swiper 
		mounted(){
			var slide = new Swiper('.slide', {
				speed:800,
			    direction: 'horizontal', // 垂直切换选项
		    	autoplay:true,//等同于以下设置
			  	autoplay: {
			  	// autoplayDisableOnInteraction: true,
			  		// disableOnInteraction: true,
			  	loop: true, // 循环模式选项
			    mousewheel: true,
			    delay: 1000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
		    	},
		    	pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			    clickable :false,
			  },
				observer:true,
				observeParents:true,
			})
			
		}
		
	}
	
</script>
<style lang = "less" scoped>
	@import '~@/content/less/variable.less';
	.love{
		position: fixed;
		width: 100%;
		top:88px;
		bottom:0;
		.love-content{
			height: 100%;
			overflow: hidden;
		}
		.love-list{
			h2{
				height: 60px;
				line-height: 60px;
				text-align: center;
				font-size: @font-size-medium-x;
				color: @color-theme
			}
			.item{
				display: flex;
				box-sizing:border-box;
				padding:0 20px 20px 20px;
				.icon{
					flex:0 0 60px;
					width: 60px;
					height: 60px;
					padding-right: 20px;
					img{
						width: 60px;
						height: 60px;
					}
				}
				.text{
					flex:1;
					display: flex;
					flex-direction:column;
					justify-content:center;
					line-height: 20px;
					overflow: hidden;
					font-size: @font-size-medium;
					h3{
						margin-bottom: 10px;
						color: #fff;
					}
					p{
						color: @color-text-d;
					}
				}
			}
		}
		.content{
			height: 2300px;
		}
		.wrapper{
			height: 500px !important;
			position: relative;
			overflow: hidden;
		}
		.loading{
			position: absolute;
			width: 100%;
			height: 100%;
			background:#222;
			left:0;
			top:0;
		}
	}
	.slide-enter,.slide-leave-to{
		transform:translate3d(100%,0,0);
	}
	.slide-enter-active,.slide-leave-active{
		transition:all 0.5s;
	}
</style>