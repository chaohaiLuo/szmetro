var subwayData = {"地铁1号线(罗宝线)": ["罗湖","国贸","老街","大剧院","科学馆","华强路","岗厦","会展中心","购物公园","香蜜湖","车公庙","竹子林","侨城东","华侨城","世界之窗","白石洲","高新园","深大","桃园","大新","鲤鱼门","前海湾","新安","宝安中心","宝体","坪洲","西乡","固戍","后瑞","机场东"],"地铁2号线(蛇口线)": ["赤湾","蛇口港","海上世界","水湾","东角头","湾厦","海月","登良","后海","科苑","红树湾","世界之窗","侨城北","深康","安托山","侨香","香蜜","香梅北","景田","莲花西","福田","市民中心","岗厦北","华强北","燕南","大剧院","湖贝","黄贝岭","新秀"],"地铁3号线(龙岗线)": ["益田","石厦","购物公园","福田","少年宫","莲花村","华新","通新岭","红岭","老街","晒布","翠竹","田贝","水贝","草埔","布吉","木棉湾","大芬","丹竹头","六约","塘坑","横岗","永湖","荷坳","大运","爱联","吉祥","龙城广场","南联","双龙"],"地铁4号线(龙华线)": ["清湖","龙华","龙胜","上塘","红山","深圳北站","白石龙","民乐","上梅林","莲花北","少年宫","市民中心","会展中心","福民","福田口岸"],"地铁5号线(环中线)": ["黄贝岭","怡景","太安","布心","百鸽笼","布吉","长龙","下水径","上水径","杨美","坂田","五和","民治","深圳北站","长岭陂","塘朗","大学城","西丽","留仙洞","兴东","洪浪北","灵芝","翻身","宝安中心","宝华","临海","前海湾"],"地铁11号线(机场线)": ["福田","车公庙","红树湾南","后海","南山","前海湾","宝安","碧海湾","机场","机场北","福永","桥头","塘尾","马安山","沙井","后亭","松岗","碧头"]};
var idsData={"地铁1号线(罗宝线)": ["3434","3435","3436","3437","3438","3439","3440","3441","3442","3443","3444","3445","3446","3447","3448","3449","3450","3451","3452","3453","3454","3455","3456","3457","3458","3459","3460","3461","3462","3463"],"地铁2号线(蛇口线)": ["3464","3465","3466","3467","3468","3469","3470","3471","3472","3473","3474","3475","3476","3477","3478","3479","3480","3481","3482","3483","3484","3485","3486","3487","3488","3489","3490","3491","3492"],"地铁3号线(龙岗线)": ["3493","3494","3495","3496","3497","3498","3499","3500","3501","3502","3503","3504","3505","3506","3507","3508","3509","3510","3511","3512","3513","3514","3515","3516","3517","3518","3519","3520","3521","3522"],"地铁4号线(龙华线)": ["3523","3524","3525","3526","3527","3528","3529","3530","3531","3532","3533","3534","3535","3536","3537"],"地铁5号线(环中线)": ["3538","3539","3540","3541","3542","3543","3544","3545","3546","3547","3548","3549","3550","3551","3552","3553","3554","3555","3556","3557","3558","3559","3560","3561","3562","3563","3564"],"地铁11号线(机场线)": ["5197","5198","5199","5200","5201","5202","5203","5204","5205","5206","5207","5208","5209","5210","5211","5212","5213","5214"]};
var pinyinData={"地铁1号线(罗宝线)": ["luohu","guomao","laojie","dajuyuan","kexueguan","huaqianglu","gangxia","huizhanzhongxin","gouwugongyuan","xiangmihu","chegongmiao","zhuzilin","qiaochengdong","huaqiaocheng","shijiezhichuang","baishizhou","gaoxinyuan","shenda","taoyuan","daxin","liyumen","qianhaiwan","xinan","baoanzhongxin","baoti","pingzhou","xixiang","gushu","hourui","jichangdong"],"地铁2号线(蛇口线)": ["chiwan","shekougang","haishangshijie","shuiwan","dongjiaotou","wanxia","haiyue","dengliang","houhai","keyuan","hongshuwan","shijiezhichuang","qiaochengbei","shenkang","antuoshan","qiaoxiang","xiangmi","xiangmeibei","jingtian","lianhuaxi","futian","shiminzhongxin","gangxiabei","huaqiangbei","yannan","dajuyuan","hubei","huangbeiling","xinxiu"],"地铁3号线(龙岗线)": ["yitian","shixia","gouwugongyuan","futian","shaoniangong","lianhuacun","huaxin","tongxinling","hongling","laojie","shaibu","cuizhu","tianbei","shuibei","caopu","buji","mumianwan","dafen","danzhutou","liuyue","tangkeng","henggang","yonghu","heao","dayun","ailian","jixiang","longchengguangchang","nanlian","shuanglong"],"地铁4号线(龙华线)": ["qinghu","longhua","longsheng","shangtang","hongshan","shenzhenbeizhan","baishilong","minle","shangmeilin","lianhuabei","shaoniangong","shiminzhongxin","huizhanzhongxin","fumin","futiankouan"],"地铁5号线(环中线)": ["huangbeiling","yijing","taian","buxin","baigelong","buji","changlong","xiashuijing","shangshuijing","yangmei","bantian","wuhe","minzhi","shenzhenbeizhan","changlingbei","tanglang","daxuecheng","xili","liuxiandong","xindong","honglangbei","lingzhi","fanshen","baoanzhongxin","baohua","linhai","qianhaiwan"],"地铁11号线(机场线)": ["futian","chegongmiao","hongshuwannan","houhai","nanshan","qianhaiwan","baoan","bihaiwan","jichang","jichangbei","fuyong","qiaotou","tangwei","maanshan","shajing","houting","songgang","bitou"]};// JavaScript Document