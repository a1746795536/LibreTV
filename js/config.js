// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    // xiaomaomi: {
    //     api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
    //     name: '小猫咪资源',
    // },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
https://blog.diggoo.xyz/feed/libretv-interface
    },
[
	{
		"name": "*白嫖资源",
		"nsfw": true,
		"api": {
			"root": "https://www.kxgav.com",
			"path": "/api/xml.php"
		},
		"status": true
	},
	{
		"name": "新浪资源(切)",
		"nsfw": false,
		"api": {
			"root": "http://api.xinlangapi.com",
			"path": "/xinlangapi.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "闪电资源(切)",
		"nsfw": false,
		"api": {
			"root": "http://sdzyapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*黄AV资源",
		"nsfw": true,
		"api": {
			"root": "https://www.pgxdy.com",
			"path": "/api/xml.php"
		},
		"status": true
	},
	{
		"name": "*鲨鱼资源",
		"nsfw": true,
		"api": {
			"root": "https://shayuapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "光速资源(切)",
		"nsfw": false,
		"api": {
			"root": "https://api.guangsuapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*色猫资源",
		"nsfw": true,
		"api": {
			"root": "https://api.maozyapi.com",
			"path": "/inc/api.php"
		},
		"status": true
	},
	{
		"name": "*乐播资源",
		"nsfw": true,
		"api": {
			"root": "https://lbapi9.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "U酷资源(优)",
		"nsfw": false,
		"api": {
			"root": "https://api.ukuapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*淫水机资源",
		"nsfw": true,
		"api": {
			"root": "https://www.xrbsp.com",
			"path": "/api/xml.php"
		},
		"status": true
	},
	{
		"name": "*香奶儿资源",
		"nsfw": true,
		"api": {
			"root": "https://www.gdlsp.com",
			"path": "/api/xml.php"
		},
		"status": true
	},
	{
		"name": "量子资源(切)",
		"nsfw": false,
		"api": {
			"root": "http://cj.lziapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*91麻豆",
		"nsfw": true,
		"api": {
			"root": "https://91md.me",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*大地资源",
		"nsfw": true,
		"api": {
			"root": "https://dadiapi.com",
			"path": "/api.php"
		},
		"status": true
	},
	{
		"name": "*番号资源",
		"nsfw": true,
		"api": {
			"root": "http://fhapi9.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*博天堂",
		"nsfw": true,
		"api": {
			"root": "http://bttcj.com",
			"path": "/inc/sapi.php"
		},
		"status": true
	},
	{
		"name": "*色南国资源",
		"nsfw": false,
		"api": {
			"root": "https://api.sexnguon.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "无尽资源(切)",
		"nsfw": true,
		"api": {
			"root": "https://api.wujinapi.net",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "*美少女资源",
		"nsfw": true,
		"api": {
			"root": "https://www.msnii.com",
			"path": "/api/xml.php"
		},
		"status": true
	},
	{
		"name": "*辣椒资源",
		"nsfw": true,
		"api": {
			"root": "https://apilj.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "樱花资源(切)",
		"nsfw": false,
		"api": {
			"root": "https://m3u8.apiyhzy.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "华为吧",
		"nsfw": false,
		"api": {
			"root": "https://huawei8.live",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "鲨鱼18+",
		"nsfw": true,
		"api": {
			"root": "https://shayuapi.com",
			"path": "/api.php/Seacms/vod"
		},
		"status": true
	},
	{
		"name": "*富二代资源",
		"nsfw": true,
		"api": {
			"root": "http://f2dcj6.com",
			"path": "/sapi"
		},
		"status": true
	},
	{
		"name": "索尼",
		"nsfw": true,
		"api": {
			"root": "https://suoniapi.com",
			"path": "/api.php/provide/vod/from/snm3u8/at/json/"
		},
		"status": true
	},
	{
		"name": "光速",
		"nsfw": false,
		"api": {
			"root": "https://api.guangsuapi.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "卧龙",
		"nsfw": false,
		"api": {
			"root": "https://collect.wolongzyw.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "光速云",
		"nsfw": false,
		"api": {
			"root": "https://api.guangsuapi.com",
			"path": "/api.php/provide/vod/at/json/"
		},
		"status": true
	},
	{
		"name": "新浪",
		"nsfw": false,
		"api": {
			"root": "https://api.xinlangapi.com",
			"path": "/xinlangapi.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "速播",
		"nsfw": false,
		"api": {
			"root": "https://subocaiji.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "无尽",
		"nsfw": true,
		"api": {
			"root": "https://api.wujinapi.me",
			"path": "/api.php/provide/vod/from/wjm3u8/at/json/"
		},
		"status": true
	},
	{
		"name": "量子",
		"nsfw": false,
		"api": {
			"root": "https://cj.lziapi.com",
			"path": "/api.php/provide/vod/from/lzm3u8/"
		},
		"status": true
	},
	{
		"name": "U酷",
		"nsfw": false,
		"api": {
			"root": "https://api.ukuapi.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "金鹰",
		"nsfw": false,
		"api": {
			"root": "https://jyzyapi.com",
			"path": "/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "非凡",
		"nsfw": false,
		"api": {
			"root": "http://cj.ffzyapi.com",
			"path": "/api.php/provide/vod/at/json/"
		},
		"status": true
	},
	{
		"name": "🚁福利采集🚁",
		"nsfw": true,
		"api": {
			"root": "https://155api.com",
			"path": "/api.php/provide/vod/at/xml"
		},
		"status": true
	},
	{
		"name": "成人24",
		"nsfw": true,
		"api": {
			"root": "http://lbapiby.com",
			"path": "/api.php/provide/vod/at/xml"
		},
		"status": true
	},
	{
		"name": "优质资源库",
		"nsfw": false,
		"api": {
			"root": "http://api.1080zyku.com",
			"path": "/inc/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "卧龙资源",
		"nsfw": false,
		"api": {
			"root": "http://collect.wolongzyw.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "艾旦影视",
		"nsfw": false,
		"api": {
			"root": "http://lovedan.net",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "光速资源",
		"nsfw": false,
		"api": {
			"root": "http://api.guangsuapi.com",
			"path": "/api.php/provide/vod/from/gsm3u8"
		},
		"status": true
	},
	{
		"name": "量子資源",
		"nsfw": false,
		"api": {
			"root": "http://cj.lziapi.com",
			"path": "/api.php/provide/vod/from/lzm3u8"
		},
		"status": true
	},
	{
		"name": "樱花资源网",
		"nsfw": false,
		"api": {
			"root": "http://m3u8.apiyhzy.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "紅牛資源",
		"nsfw": false,
		"api": {
			"root": "http://hongniuzy2.com",
			"path": "/api.php/provide/vod/from/hnm3u8"
		},
		"status": true
	},
	{
		"name": "森林资源",
		"nsfw": true,
		"api": {
			"root": "http://slapibf.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "奥斯卡资源网",
		"nsfw": true,
		"api": {
			"root": "http://aosikazy.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "金鹰资源",
		"nsfw": false,
		"api": {
			"root": "http://jyzyapi.com",
			"path": "/provide/vod/from/jinyingm3u8"
		},
		"status": true
	},
	{
		"name": "百度资源",
		"nsfw": false,
		"api": {
			"root": "http://api.apibdzy.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "閃電資源",
		"nsfw": false,
		"api": {
			"root": "http://sdzyapi.com",
			"path": "/api.php/provide/vod/from/sdm3u8"
		},
		"status": true
	},
	{
		"name": "U酷资源",
		"nsfw": false,
		"api": {
			"root": "http://api.ukuapi.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "闪电资源",
		"nsfw": false,
		"api": {
			"root": "http://sdzyapi.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "老色逼资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://apilsbzy1.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "天翼|点播",
		"nsfw": false,
		"api": {
			"root": "https://www.911ysw.top",
			"path": "/tianyi.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "奶香香|AV",
		"nsfw": true,
		"api": {
			"root": "https://Naixxzy.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "360┃秒播┃采集",
		"nsfw": false,
		"api": {
			"root": "https://360zy.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "奥斯卡资源网",
		"nsfw": true,
		"api": {
			"root": "https://aosikazy.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "速博|点播",
		"nsfw": false,
		"api": {
			"root": "https://subocaiji.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "虎牙资源",
		"nsfw": false,
		"api": {
			"root": "https://www.huyaapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "草榴资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://www.caoliuzyw.com",
			"path": "/api.php/prodao/vod/"
		},
		"status": true
	},
	{
		"name": "ikun|点播",
		"nsfw": false,
		"api": {
			"root": "https://ikunzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "虎牙|点播",
		"nsfw": false,
		"api": {
			"root": "https://www.huyaapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃光速.云播",
		"nsfw": false,
		"api": {
			"root": "https://api.guangsuapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "极速|点播",
		"nsfw": false,
		"api": {
			"root": "https://jszyapi.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "91麻豆|AV",
		"nsfw": true,
		"api": {
			"root": "https://91md.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃量子",
		"nsfw": false,
		"api": {
			"root": "https://cj.lziapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "丫丫|点播",
		"nsfw": false,
		"api": {
			"root": "https://cj.yayazy.net",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "暴风|点播",
		"nsfw": true,
		"api": {
			"root": "https://bfzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "色南国资源",
		"nsfw": false,
		"api": {
			"root": "https://api.sexnguon.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "索尼资源",
		"nsfw": true,
		"api": {
			"root": "https://suoniapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "玉兔资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://apiyutu.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "番号资源|AV",
		"nsfw": true,
		"api": {
			"root": "http://fhapi9.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "️🔘奶儿",
		"nsfw": false,
		"api": {
			"root": "https://www.gdlsp.com",
			"path": "/api/json.php"
		},
		"status": true
	},
	{
		"name": "AIvin|AV",
		"nsfw": true,
		"api": {
			"root": "http://lbapiby.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "️🔘雪人",
		"nsfw": false,
		"api": {
			"root": "https://www.xrbsp.com",
			"path": "/api/json.php"
		},
		"status": true
	},
	{
		"name": "番号资源",
		"nsfw": true,
		"api": {
			"root": "http://fhapi9.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "速博资源",
		"nsfw": false,
		"api": {
			"root": "https://subocaiji.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "飘零影院",
		"nsfw": true,
		"api": {
			"root": "https://p2100.net",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "️🔘米色",
		"nsfw": true,
		"api": {
			"root": "https://www.msnii.com",
			"path": "/api/json.php"
		},
		"status": true
	},
	{
		"name": "️🔘皮革",
		"nsfw": false,
		"api": {
			"root": "https://www.pgxdy.com",
			"path": "/api/json.php"
		},
		"status": true
	},
	{
		"name": "湿乐园",
		"nsfw": true,
		"api": {
			"root": "https://xxavs.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃红牛.云播",
		"nsfw": false,
		"api": {
			"root": "https://www.hongniuzy2.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "非凡资源",
		"nsfw": false,
		"api": {
			"root": "http://cj.ffzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "光速☆资源",
		"nsfw": false,
		"api": {
			"root": "https://api.guangsuapi.com",
			"path": "/api.php/provide/vod/from/gsm3u8/"
		},
		"status": true
	},
	{
		"name": "️🔘天天",
		"nsfw": true,
		"api": {
			"root": "http://bttcj.com",
			"path": "/inc/sapi.php"
		},
		"status": true
	},
	{
		"name": "️🐯乐播",
		"nsfw": true,
		"api": {
			"root": "https://lbapi9.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "鲨鱼资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://shayuapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "精品资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://www.jingpinx.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "1080资源库(切)",
		"nsfw": false,
		"api": {
			"root": "https://api.1080zyku.com",
			"path": "/inc/api_mac10.php"
		},
		"status": true
	},
	{
		"name": "奥斯卡资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://aosikazy.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "卧龙|点播",
		"nsfw": false,
		"api": {
			"root": "https://collect.wolongzyw.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "色猫资源",
		"nsfw": false,
		"api": {
			"root": "https://caiji.semaozy.net",
			"path": "/inc/apijson_vod.php"
		},
		"status": true
	},
	{
		"name": "牛牛|点播",
		"nsfw": false,
		"api": {
			"root": "https://api.niuniuzy.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "最大资源",
		"nsfw": true,
		"api": {
			"root": "http://zuidazy.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "闪电☆资源",
		"nsfw": false,
		"api": {
			"root": "https://sdzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "魔都|点播",
		"nsfw": false,
		"api": {
			"root": "https://caiji.moduapi.cc",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "无尽资源",
		"nsfw": true,
		"api": {
			"root": "https://api.wujinapi.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "飘零|点播",
		"nsfw": true,
		"api": {
			"root": "https://p2100.net",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "91视频",
		"nsfw": true,
		"api": {
			"root": "https://91av.cyou",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "360|点播",
		"nsfw": false,
		"api": {
			"root": "https://360zy.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "富二代资源",
		"nsfw": true,
		"api": {
			"root": "http://f2dcj6.com",
			"path": "/sapi"
		},
		"status": true
	},
	{
		"name": "成人18+",
		"nsfw": true,
		"api": {
			"root": "http://91md.me",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "️🔘当初",
		"nsfw": true,
		"api": {
			"root": "http://f2dcj6.com",
			"path": "/sapi/"
		},
		"status": true
	},
	{
		"name": "橘猫资源(丝袜)",
		"nsfw": true,
		"api": {
			"root": "https://to.to-long.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "红牛",
		"nsfw": false,
		"api": {
			"root": "https://www.hongniuzy2.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "金鹰资源",
		"nsfw": false,
		"api": {
			"root": "https://jyzyapi.com",
			"path": "/provide/vod/"
		},
		"status": true
	},
	{
		"name": "最大|点播",
		"nsfw": true,
		"api": {
			"root": "http://zuidazy.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "️🔘番号",
		"nsfw": true,
		"api": {
			"root": "http://fhapi9.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "️🔘白嫖",
		"nsfw": true,
		"api": {
			"root": "https://www.kxgav.com",
			"path": "/api/json.php"
		},
		"status": true
	},
	{
		"name": "量子资源",
		"nsfw": false,
		"api": {
			"root": "http://cj.lziapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "U酷资源",
		"nsfw": false,
		"api": {
			"root": "https://api.ukuapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃卧龙.云播",
		"nsfw": false,
		"api": {
			"root": "https://collect.wolongzyw.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "无尽|点播",
		"nsfw": true,
		"api": {
			"root": "https://api.wujinapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "樱花|点播",
		"nsfw": false,
		"api": {
			"root": "https://m3u8.apiyhzy.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "索尼|点播",
		"nsfw": true,
		"api": {
			"root": "https://suoniapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃新浪.云播",
		"nsfw": false,
		"api": {
			"root": "http://api.xinlangapi.com",
			"path": "/xinlangapi.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "新浪|点播",
		"nsfw": false,
		"api": {
			"root": "https://api.xinlangapi.com",
			"path": "/xinlangapi.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "️极速┃资源",
		"nsfw": false,
		"api": {
			"root": "https://jszyapi.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "暴风资源",
		"nsfw": true,
		"api": {
			"root": "https://bfzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "滴滴资源",
		"nsfw": true,
		"api": {
			"root": "https://api.ddapi.cc",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "红牛|点播",
		"nsfw": false,
		"api": {
			"root": "https://www.hongniuzy2.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "玉兔资源",
		"nsfw": true,
		"api": {
			"root": "https://apiyutu.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "爱坤资源",
		"nsfw": false,
		"api": {
			"root": "https://ikunzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "华为吧|点播",
		"nsfw": false,
		"api": {
			"root": "https://hw8.live",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "森林资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://slapibf.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "黑木耳|点播",
		"nsfw": false,
		"api": {
			"root": "https://www.heimuer.tv",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "91md|AV",
		"nsfw": true,
		"api": {
			"root": "https://91md.me",
			"path": "/api.php/provide/vod/from/mdm3u8/"
		},
		"status": true
	},
	{
		"name": "U酷|点播",
		"nsfw": false,
		"api": {
			"root": "https://api.ukuapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "优异资源",
		"nsfw": true,
		"api": {
			"root": "https://a.uezy.pw",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "华为吧",
		"nsfw": false,
		"api": {
			"root": "https://hw8.live",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "非凡|点播",
		"nsfw": false,
		"api": {
			"root": "http://cj.ffzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "CK☆资源",
		"nsfw": false,
		"api": {
			"root": "https://ckzy.me",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "辣椒资源|AV",
		"nsfw": true,
		"api": {
			"root": "https://apilj.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "📛挺好┃非凡",
		"nsfw": false,
		"api": {
			"root": "http://cj.ffzyapi.com",
			"path": "/api.php/provide/vod/at/xml/"
		},
		"status": true
	},
	{
		"name": "鸡坤资源",
		"nsfw": true,
		"api": {
			"root": "https://jkunzyapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "奥斯卡资源",
		"nsfw": true,
		"api": {
			"root": "https://aosikazy.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "量子|点播",
		"nsfw": false,
		"api": {
			"root": "https://cj.lziapi.com",
			"path": "/api.php/provide/vod/"
		},
		"status": true
	},
	{
		"name": "成人09",
		"nsfw": true,
		"api": {
			"root": "http://dadiapi.com",
			"path": "/api.php"
		},
		"status": true
	},
	{
		"name": "成人06",
		"nsfw": true,
		"api": {
			"root": "http://apilj.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "玉兔资源",
		"nsfw": true,
		"api": {
			"root": "https://apiyutu.com",
			"path": "/api.php/provide/vod/at/xml"
		},
		"status": true
	},
	{
		"name": "★精品下(直连)",
		"nsfw": true,
		"api": {
			"root": "https://www.jingpinx.com",
			"path": "//api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "辣椒(FQ)",
		"nsfw": true,
		"api": {
			"root": "https://apilj.com",
			"path": "/api.php/provide/vod/at/json"
		},
		"status": true
	},
	{
		"name": "成人15",
		"nsfw": true,
		"api": {
			"root": "http://api.11bat.com",
			"path": "/api.php/provide/vod/at/xml"
		},
		"status": true
	},
	{
		"name": "♥155(直连)",
		"nsfw": true,
		"api": {
			"root": "https://155api.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "★黄瓜(直连)",
		"nsfw": true,
		"api": {
			"root": "https://www.avre06.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "★草榴(直连)",
		"nsfw": true,
		"api": {
			"root": "https://www.caoliuzyw.com",
			"path": "/api.php/provide/vod"
		},
		"status": true
	},
	{
		"name": "成人16",
		"nsfw": false,
		"api": {
			"root": "https://api.maozyapi.com",
			"path": "/inc/apijson_vod.php"
		},
		"status": true
	},
	{
		"name": "🈵成人影视5",
		"nsfw": true,
		"api": {
			"root": "https://lbapi9.com",
			"path": "/api.php/provide/vod/at/json/"
		},
		"status": true
	}
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    // ckzy: {
    //     api: 'https://www.ckzy1.com',
    //     name: 'CK资源',
    //     adult: true
    // },
    // jkun: {
    //     api: 'https://jkunzyapi.com',
    //     name: 'jkun资源',
    //     adult: true
    // },
    // bwzy: {
    //     api: 'https://api.bwzym3u8.com',
    //     name: '百万资源',
    //     adult: true
    // },
    // souav: {
    //     api: 'https://api.souavzy.vip',
    //     name: 'souav资源',
    //     adult: true
    // },
    // r155: {
    //     api: 'https://155api.com',
    //     name: '155资源',
    //     adult: true
    // },
    // lsb: {
    //     api: 'https://apilsbzy1.com',
    //     name: 'lsb资源',
    //     adult: true
    // },
    // huangcang: {
    //     api: 'https://hsckzy.vip',
    //     name: '黄色仓库',
    //     adult: true,
    //     detail: 'https://hsckzy.vip'
    // },
    // yutu: {
    //     api: 'https://yutuzy10.com',
    //     name: '玉兔资源',
    //     adult: true
    // },

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
