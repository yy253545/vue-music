import Vue from 'vue'

export function getLove(){
	//https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1553407255730&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1
	const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
	const params = {
		g_tk:5318,
		uin:0,
		format:"jsonp",
		inCharset:"utf-8",
		outCharset:"utf-8",
		notice:0,
		platform:"h5",
		needNewCode:1,
		_:new Date().getTime()
	}
	const data = Object.assign(params,{jsonp:"jsonpCallback"})
	return Vue.http.jsonp(url,data).then((res) => {
		return Promise.resolve(res.data)
	})
}
//获取歌手列表
export function getSingerList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=1000&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0';
    const data = Object.assign({},{
        jsonp:'jsonpCallback'
    })
    
    return Vue.http.jsonp(url,data).then((res) => {
        return Promise.resolve(res.data)
    })
}

//获取歌单详情（QQ音乐不能获取，模拟）
export function getCdInfo(){
    const url = "https://www.easy-mock.com/mock/5bc00da00b3a4e257d956bbc/songsList";
    return Vue.http.get(url).then(res => {
        return Promise.resolve(res.data)
    })
}
//获取排行榜
export function getRankList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
    const params = {
        format: 'jsonp',
        g_tk: 5381,
        uin: 0,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime()
    }
    const data = Object.assign(params,{
        jsonpCallback:'MusicJsonCallback',
        jsonp:"jsonpCallback"
    })
    return Vue.http.jsonp(url,data).then((res) => {
        return Promise.resolve(res.data)
    })
}
//获取歌手详情
export function getSingerInfo(id){
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1695008182&loginUin=983915916&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&order=listen&begin=0&num=30&songstatus=1&singermid=${id}`;
    const data = Object.assign({},{
        jsonp:'jsonpCallback'
    })
    return Vue.http.jsonp(url,data).then((res) => {
        return Promise.resolve(res.data)
    })
}
//获取排行榜详情
export function getRankInfo(id){
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    let day = new Date().getDate()
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&needNewCode=1&page=detail&type=top&tpl=3&topid=${id}`
    const data = Object.assign({},{
        jsonpCallback:"tan2",
        jsonp:"jsonpCallback"
    })
    return Vue.http.jsonp(url,data).then((res) => {
        return Promise.resolve(res.data)
    })
}
