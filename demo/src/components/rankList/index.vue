<template>
  <div class="rank" ref="rank">
    <scroll  class="toplist" ref="topList"  :data="ranks">
      <ul>
        <li  class="item" v-for="item in ranks" @click="toDetail(item)">
          <div class="icon" >
            <img width="100" height="100" :src="item.picUrl"/>
          </div>
          <ul class="songlist" >
            <li class="song" v-for="(item1,index) in item.songList" >
              <span>{{index+1}}</span>
              <span>{{item1.songname}}-{{item1.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
 <!--      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div> -->
    </scroll>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Scroll from '@/components/scroll'
  export default {
   	props:{
   		ranks:{
   			type:Array,
   			default:""
   		},
      
   	},
    methods:{
      toDetail(tid){
        this.$router.push({path:`/rank/${tid.id}`})
        // console.log(tid)
      },
      
    },
   	components:{
   			Scroll
   		}
  }
</script>
<style scoped lang="less">
	@import '~@/content/less/variable.less';
  .rank{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .toplist{
      height: 100%;
      overflow: hidden;
      .item{
        display: flex;
        margin: 0 20px;
        padding-top: 20px;
        height: 100px;
        &:last-child{
          padding-bottom: 20px;
        }
        .icon{
          flex: 0 0 100px;
          width: 100px;
          height: 100px;
      	}
        .songlist{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          height: 100px;
          overflow: hidden;
          background: @color-highlight-background;
          color: @color-text-d;
          font-size: @font-size-small;
          .song{
            line-height: 26px;
             text-overflow:ellipsis; white-space:nowrap;
        }
    }
}

      /*.loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    	}
*/    }
    
}

</style>