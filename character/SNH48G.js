//48武将扩展包，适用于身份场
'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        character: {
            //S
            SNH48Gchenguanhui: ['female', 'S', 4, ['wenwan', 'fuhei']],
            SNH48Gchengjue: ['female', 'S', 4, ['kuaidao', 'qiaoyan']],
            SNH48Gchensi: ['female', 'S', 4, ['jingwu', 'tianyin']],
            SNH48Gdaimeng: ['female', 'S', 4, ['dandang', 'jianyi', 'lingjun'], ['zhu']],
            SNH48Gjiangyun: ['female', 'S', 3, ['jingyan', 'qichang', 'duomian']],
            SNH48Gkongxiaoyin: ['female', 'S', 4, ['shenhun', 'diandao', 'xinggan']],
            SNH48Gliyuqi: ['female', 'S', 3, ['haomai', 'quanneng', 'chongzhen']],
            SNH48Gliuzengyan: ['female', 'S', 4, ['tongyin', 'ganbei', 'yonglie']],
            SNH48Gmohan: ['female', 'S', 3, ['shiyu', 'yuyan', 'ziqiang'], ['zhu']],
            SNH48Gpanyanqi: ['female', 'S', 4, ['tongxin', 'dedication']],
            SNH48Gqianbeiting: ['female', 'S', 4, ['juxia', 'qiangong']],
            SNH48Gqiuxinyi: ['female', 'S', 4, ['meixi', 'nvwang', 'laydown']],
            SNH48Gsunrui: ['female', 'S', 3, ['qigai', 'rexin']],
            SNH48Gshaoxuecong: ['female', 'S', 4, ['yibing', 'tianpin', 'jiaozhu']],
            SNH48Gshenzhilin: ['female', 'S', 4, ['zanmei', 'luanyin', 'luansheng']],
            SNH48Gwenjingjie: ['female', 'S', 4, ['talent', 'wenhe']],
            SNH48Gwuzhehan: ['female', 'S', 4, ['jiangshan', 'jiamian']],
            SNH48Gxuchenchen: ['female', 'S', 4, ['qiangyin', 'jinwu', 'chengshu']],
            SNH48Gxujiaqi: ['female', 'S', 4, ['shengou', 'secret', 'meiren']],
            SNH48Gxuyiren: ['female', 'S', 4, ['tisu', 'fenfa']],
            SNH48Gxuzixuan: ['female', 'S', 4, ['luogod', 'longgong', 'huangzi']],
            SNH48Gyuandanni: ['female', 'S', 4, ['complement', 'kuxuan']],
            SNH48Gyuanyuzhen: ['female', 'S', 4, ['ganxing', 'huopo']],
            SNH48Gzhangyuge: ['female', 'S', 3, ['guayan', 'xuanmu']],
            SNH48Gzhaohanqian: ['female', 'S', 4, ['kuaiyan', 'innocence']],
            SNH48Gzhaoye: ['female', 'S', 4, ['baofa', 'caihua']],
            SNH48Gzhuxiaodan: ['female', 'S', 4, ['liren','shouzhuo']],
            SNH48Gchenjunyu: ['female', 'S', 4, ['mengdong','maomao']],
            SNH48Gzhaojiamin: ['female', 'S', 4, ['shuangfa', 'buzhuang']],

            //N
            //SNH48Gchenjiaying: ['female', 'N', 3, ['zhiheng']],
            //SNH48Gchenwenyan: ['female', 'N', 3, ['zhiheng']],
            SNH48Gfengxinduo: ['female', 'N', 4, ['pupu', 'hainv']],
            //SNH48Gguoqianyun: ['female', 'N', 3, ['zhiheng']],
            SNH48Ghuangtingting: ['female', 'N', 4, ['yancang', 'jiezou']],
            //SNH48Ghaowanqing: ['female', 'N', 3, ['rende', 'yingzi']],
            //SNH48Ghexiaoyu: ['female', 'N', 3, ['rende', 'yingzi']],
            //SNH48Gjinyingyue: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gjiangzhenyi: ['female', 'N', 4, ['zhengyi']],
            //SNH48Gliujuzi: ['female', 'N', 3, ['rende', 'yingzi']],
            //SNH48Gliupeixin: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gluting: ['female', 'N', 4, ['dage', 'kongchang']],
            //SNH48Gtaoboer: ['female', 'N', 3, ['biyue', 'paoxiao']],
            //SNH48Gxieni: ['female', 'N', 3, ['biyue', 'liuli']],
            //SNH48Gyijiaai: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhaoyue: ['female', 'N', 4, ['huobing', 'renwu']],
            //SNH48Gzhangyi: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhangyuxin: ['female', 'N', 3, ['xingwen', 'duoyi']],

            SNH48Gjujingyi: ['female', 'N', 4, ['dufei', 'poisonousfog', 'jiedu', 'duzong']],

            //H
            SNH48Gfeiqinyuan: ['female', 'H', 3, ['tianxuan', 'yuanqi', 'taizi']],
            SNH48Ghongpeiyun: ['female', 'H', 4, ['peiyun', 'fuwei']],
            SNH48Gjiangshan: ['female', 'H', 4, ['yonggu']],
            //SNH48Gjiangshuting: ['female', 'H', 4, ['jiang', 'luanji']],
            //SNH48Glijiaen: ['female', 'H', 4, ['jiang', 'luanji']],
            //SNH48Glinnan: ['female', 'H', 4, ['jiang', 'biyue']],
            //SNH48Glinsiyi: ['female', 'H', 3, ['luoshen', 'qingguo']],
            SNH48Gliyitong: ['female', 'H', 4, ['jizhi', 'haibao', 'jianfeng']],
            //SNH48Gqiyuzhu: ['female', 'H', 3, ['kurou', 'biyue']],
            //SNH48Gshenmengyao: ['female', 'H', 3, ['luoshen', 'qingguo']],
            //SNH48Gsongyushan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gsunzhenni: ['female', 'H', 4, ['pengyue', 'haosi']],
            SNH48Gwanlina: ['female', 'H', 4, ['tiequan'], ['zhu']],
            //SNH48Gwangyi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gxuhan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gxiongqinxian: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gxuyangyuzhuo: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gyanghuiting: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyujiayi: ['female', 'H', 4, ['princess', 'jiaoyi']],
            //SNH48Gyuanyiqi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gzhangxin: ['female', 'H', 3, ['paoxiao', 'longdan']],
            //SNH48Gzengxiaowen: ['female', 'H', 3, ['paoxiao', 'longdan']],

            //SNH48Gliujiongran: ['female', 'H', 3, ['luoshen', 'biyue']],
            //X
            SNH48Gchenlin: ['female', 'X', 4, ['datou', 'xunshan']],
            SNH48Gchenyunling: ['female', 'X', 4, ['taowa', 'quanhuang']],
            SNH48Gfengxiaofei: ['female', 'X', 4, ['chongaaaa', 'beifen', 'yuanzhen']],
            SNH48Glizhao: ['female', 'X', 4, ['mitao', 'taobao'], ['zhu']],            
            SNH48Glvyi: ['female', 'X', 4, ['chengzhang']],
            SNH48Gpanyingqi: ['female', 'X', 4, ['liangong', 'tisheng']],
            SNH48Gqijing: ['female', 'X', 4, ['lianer', 'jingjing']],
            SNH48Gsongxinran: ['female', 'X', 4, ['guoer', 'xiaohua']],
            //SNH48Gsunxinwen: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangjialing: ['female', 'X', 4, ['jiujiu']],
            SNH48Gwangshu: ['female', 'X', 4, ['chemistry', 'neighbor']],
            SNH48Gwangxiaojia: ['female', 'X', 4, ['tiancao', 'dianyan']],
            SNH48Gxushiqi: ['female', 'X', 4, ['xiaoqi']],
            SNH48Gxietianyi: ['female', 'X', 4, ['wushuang', 'nvzun']],
            SNH48Gyangbingyi: ['female', 'X', 4, ['tieyi', 'icefeng', 'ershui'], ['zhu']],
            SNH48Gyangyunyu: ['female', 'X', 3, ['zhanbu']],
            SNH48Gzhangdansan: ['female', 'X', 4, ['tansuan']],
            SNH48Gzhangjiayu: ['female', 'X', 4, ['muwang']],

            SNH48Glijing: ['female', 'X', 4, ['order']],

            SNH48Gwangzijie: ['male', 'ye', 2, ['longdan', 'chongzhen', 'paoxiao', 'jiang', 'linglong']],
            SNH48Gaji: ['male', 'ye', 2, ['buqu', 'yingzi', 'kuaihuo', 'yiji', 'jizhi']],
            SNH48Gyegou: ['male', 'ye', 2, ['zhiheng', 'paoxiao', 'wansha', 'weimu', 'luanwu']],
            SNH48Gmulaosi: ['female', 'ye', 2, ['biyue', 'tiaoxin', 'xiaoji', 'liuli', 'ziqiang']],
            SNH48Gpiggyrae: ['female', 'ye', 2, ['luoshen', 'luandance', 'qingguo', 'fankui', 'leiji']],


            shibing1wei: ['male', 'S', 0, [], ['unseen']],
            shibing2wei: ['female', 'S', 0, [], ['unseen']],
            shibing1shu: ['male', 'H', 0, [], ['unseen']],
            shibing2shu: ['female', 'H', 0, [], ['unseen']],
            shibing1wu: ['male', 'X', 0, [], ['unseen']],
            shibing2wu: ['female', 'X', 0, [], ['unseen']],
            shibing1qun: ['male', 'qun', 0, [], ['unseen']],
            shibing2qun: ['female', 'qun', 0, [], ['unseen']],
            shibing1ye: ['male', 'N', 0, [], ['unseen']],
            shibing2ye: ['female', 'N', 0, [], ['unseen']],
        },
        characterIntro: {
            //S
            SNH48Gchenjunyu: 'SNH48 Team SII 成员，SHY48三期生。',
            SNH48Gchenguanhui: 'SNH48 Team SII 成员，SNH48一期生。很少有人知道如今的人妻艾在当初也曾是S队的标准男役担当。温婉是一个标准的纯防御技能，体现着小艾不欲与人争锋的性格特点。而偶尔腹黑的一面，不仅能跟队友形成微妙的联动，还能有力的回击来自外界的恶意',
            SNH48Gchengjue: 'SNH48 Team SII 成员，SNH48六期生。MC四大输出之一，同时直播里喜欢疯狂暗示自成一路的王玉是S队次时代之一。快刀在当前环境下算是较为合理的强命技。巧盐则保证了不会缺少武器的尴尬，有队友支持的情况下输出能力相当不俗',
            SNH48Gchensi: 'SNH48 Team SII 成员，SNH48一期生。教练是早期的最强者，也是队内的小天使。在面对有恶意的人时，教练会以强大的武力回击来保护自己的队友。同时，即使自身的经历并不美好，教练仍然对这个世界抱有期待，在各种不被人注意的时候总能看到其暖心的一面。',
            SNH48Gdaimeng: 'SNH48 Team SII 队长，SNH48一期生。全队的领军人物，也是队里的家长般的存在。作为主公坚毅提供了一定的防护能力，担当虽然属性上更适合忠臣，但是能够体恤忠臣的付出更显王道本色，领军意味着只要队友不死，就能依靠队友的支持一次次重新站起，体现出了TEAM SII的诚挚团结之意。',
            SNH48Gjiangyun: 'SNH48 Team SII 成员，古风大佬，SNH48二期生。一首红玫瑰惊艳四座，她的潜力远远超过了我们的想象。多面结合了张郃的巧变和荀攸的奇策，进可攻退可守，是上限极高的技能之一。气场则保证了多面的命中率，跟多变形成独有的锦囊类强命技能，还能跟络崽的技能形成几乎完美的配合。',
            SNH48Gkongxiaoyin: 'SNH48 Team SII 性感成员，SNH48一期生。小孔是一个十分有趣的人，既是全团最拽也是队内总欺，温柔大方的她所在之处一定不会缺少欢乐。神魂颠倒是小孔的成名曲，神魂也是小孔的精髓所在，提高手牌上限能加强蓄爆能力，而颠倒则赋予了回合外的反制能力以及加快音符数的累积。音符是小孔家粉丝的昵称，觉醒后的小孔会跟自己的粉丝共同进退，赢得最终的胜利',            
            SNH48Gliyuqi: 'SNH48 Team SII 成员，SNH48一期生。李毛毛是嘉兴路著名暖男，全能偶像，日常义务公演，从替补到选拔，坚韧是毛毛最好的代名词。豪迈是根据毛毛有话直说的个性得来，虽然放弃了属性伤害，但却大幅提高了普通杀和决斗的收益，堂堂正正以王道取胜。全能与其说是神技不如说是信仰，只要手中仍有牌就有希望，与李毛一贯的坚韧风格相匹配。',
            SNH48Gliuzengyan: 'SNH48 Team SII 成员，SNH48五期生。增锅是重组后新加入S队的成员，人美歌甜，造梗能力出色，很快融入了S队的氛围中并成为不可或缺的一员。技能上，痛饮赋予了增锅不会被酒杀集火的防御力，也能在关键时刻援助队友。勇烈改自神周瑜的业火，奠定了增锅作为全队第一爆发手的地位，预示着一旦外界压力达到了警戒线，被激发的增锅将会给所有人展示她的强硬。',
            SNH48Gmohan: 'SNH48 Team SII 副队长，SNH48一期生。莫寒是一个表面无害实则刚强的人，回合内依靠食欲进行续航与爆发，回合外以预言保证手牌量不会过低，也会让敌人因为判定牌而随时改变战术。觉醒后的大魔王更加强大，不仅血量增加还拥有了回合外的强输出能力，凸显了于危难中接任队长时莫莫的魄力和强势。',
            SNH48Gpanyanqi: 'SNH48 Team SII 成员，SNH48七期生。大可是心旅加入S队的三个七期生之一，重组后下放预备生。在队期间大可上进且温柔，是非常具有队魂的后辈。大可的两个技能都是来源于重组当日给我的印象，同心是王玉哭崩时上前给予的安慰，也有着强悍的防守反击能力。奉献是同样被下放的处境下却能忍住悲伤跟全队一起鞠躬，在已经命悬一线的情况下主动给队友创造奇迹的机会。',
            SNH48Gqianbeiting: 'SNH48 Team SII 成员，SNH48一期生。曾是一期生16人替补的小钱历经风雨磨练出一套属于自己的偶像理解，已经成为如今S队的支柱。聚虾成塔来自全年四选的获奖发言，虽然小钱有着众多表情包和搞笑高能，但我认为她欢乐的外表下隐藏着一颗要强的心，聚虾随着时间的推移愈发强大，成塔则是在关键时刻能挺身而出，于逆境中闯出一片天。',
            SNH48Gqiuxinyi: 'SNH48 Team SII 成员，SNH48一期生。湾总，S队公认土豪，一期生早期官推，星梦剧场传说级别的人物，但从不因距离而疏远与队友的关系。妹系湾是早期形态，无防具的白银狮子有着良好的防爆特性。如今完全体的女王湾不仅过去的经历独一无二，未来的前途也同样不可限量。',
            SNH48Gsunrui: 'SNH48 Team SII 成员，生日公演专用“男”嘉宾，SNH48二期生。水系偶像孙三哥，非著名迪拜土豪，老来俏干架担当，上海黑心的哥一生之敌...孙芮的事迹太多太多。豪情壮志的前缀，是三哥蛰伏三年后四选一鸣惊人的雄心，气概能有效地限制对方核心的血量和手牌，而热心则能令队友在场外有一定的反制防御能力，',
            SNH48Gshaoxuecong: 'SNH48 Team SII 成员，SNH48四期生。COCO，一个相当正能量的偶像，与萌队一样纯素人入团却也有不输于其他人的偶像素养。異稟来自二选时令人惊讶的UG前列成绩，甜品教主则是COCO平常的代称，異稟本身是个出色的防御技，甜品兼具回复和拆卸两重功效，教主则是高效的控场，令COCO在团队中的作用变得无比重要。',
            SNH48Gshenzhilin: 'SNH48 Team SII 成员，SNH48二期生。小双是S队最早的智商担当，同时也是拍照能手，KI吹顶点，强力歌姬，死亡音姬...小双的才华非常多，缺乏的只是展现的舞台。赞美如字面含义是舍己为人的补牌技，乱音是小双的技能核心，改自鲁肃的缔盟，有着非常强大的控场效果，最后的孪生令小双获得补牌类锦囊或技能的收益变高，但同时必须警惕来自翻面的不良效果。',
            SNH48Gwenjingjie: 'SNH48 Team SII 成员，SNH48二期生。温温是最早加入S队的后辈之一，多年来兢兢业业，三温震一家在S队的几大家庭里别树一帜，离不开温温的居中调和。颖资改自荀彧的驱虎，虽然由对方来选择是掉血或者弃牌，但起到的威慑其实更大，温和则是全队少数的能改判定牌的技能，控场能力十分出色，更能在关键时刻利用判定牌获得某些关键牌改变局面。',
            SNH48Gwuzhehan: 'SNH48 Team SII 成员，SNH48一期生。五折是一个有点傻气却又不天真的人，热爱动物热爱自然，沉稳和童心在她身上显得无比的和谐。阿爸的武将卡我是特地做得比较中二的，这样比较符合阿爸天然的一面23333。江山是询询的强化，偶尔能英姿的李典谁用谁知道。觉醒之后阿爸则化身暴力输出，皇冠改自神吕布的神愤，与KIKI的上钩形成完美COMBO，也是七五折CP的实力象征。',
            SNH48Gxuchenchen: 'SNH48 Team SII 成员，SNH48一期生。大C，老来俏舞蹈担当，塞纳河著名歌姬，曾经的文艺少女在塞纳河经历了种种风雨之后变得风趣且成熟，是S队的定海神针。强音是主要的技能，一牌换两血在集火敌人时非常强悍。劲舞则是回复技能，结合强音几乎是完美的永动效果。成熟则赋予了大C一定的操作技巧，如何控牌控血量将成为制胜关键。',
            SNH48Gxujiaqi: 'SNH48 Team SII 成员，SNH48一期生。从许玛丽到许钩钩，许佳琪一直在超越上一秒的自己，KIKI闪耀的地方不仅仅是好看的外表，更是始终坚强的心灵。阿妈是第一个拥有翻面技能的人，时尚作为回合外的拆顺有稳定的限制爆发能力，上钩改自刘禅的放权，但效果从辅助队友变成强力控场，令KIKI一跃成为S队数一数二的团战强力控制。',
            SNH48Gxuyiren: 'SNH48 Team SII 成员，SNH48三期生。伊姐是S队的老熟人了，是S队公演一道闪烁的光。技能方面很简单，徐家司机担当是伊姐成名之始，提速自带青龙偃月刀效果，保证了杀的高效率使用。另一方面，不懈的努力和良好的人缘使得伊姐无论在哪都能迅速跟成员打成一片，奋发使得伊姐几乎不会缺杀，简单而直接的技能也是伊姐的作风。',
            SNH48Gxuzixuan: 'SNH48 Team SII 成员，SNH48二期生。络络是S队的忙内，曾经是一个大号的中二患者，现在是继承了七五折外加隔壁戴叔叔优点的中流砥柱。络崽作为七五折之子完美继承了阿爸跟阿妈的技能，同时又有着满满的队魂能辅助其他队友，堪称全能。龙宫改自貂蝉的闭月，龙宫成员越多络崽就越强，更能体现一个浪帅浪帅的徐子苏个人魅力。总之一个字，强。',
            SNH48Gyuandanni: 'SNH48 Team SII 成员，SNH48三期生。有着好人缘的丹妮在队里一直以舞蹈担当的存在散发着自己的光和热。补刀源自丹妮的袁式飞刀人设，也是跟队友联动的神技，联合高爆发的队友几乎无解。自己回合内判定的酷炫增加了手牌可使用杀的数量，跟补刀联动使得丹妮可以瞬间打出三刀流的高爆发。',
            SNH48Gyuanyuzhen: 'SNH48 Team SII 成员，SNH48二期生。余震震，S队第二个98LINE，戏精担当，补刀小能手，安静时美如画，活泼时疯如马（芮哥：儿子儿子MUA~）民乐歌姬了解一下。感性是稳定的拆迁控制，虽然有自己的手牌会被对方看到的风险，但配合第二个技能活泼就完全不一样了，大规模拉牌差能力是余震的强势之处，但单挑能力的缺失以及回合外的反制能力差也是高收益背后的高风险。',
            SNH48Gzhangyuge: 'SNH48 Team SII 成员，SNH48一期生。Tako是队宠，更是核心，从话唠小章鱼成长为如今的老干部张帅，多方面发展使得TAKO在任何场合都能迅速成为聚焦点。技能方面简单而实用，寡言使得TAKO免疫了除了翻面以外的所有控制，炫目则是神曹操的归心变化而来，一血多牌可以说是卖血流的最强技能之一，也代表着TAKO即使受伤仍然要坚持梦想的决心。',
            SNH48Gzhaohanqian: 'SNH48 Team SII 成员，SNH48 七期生。赵韩倩给我们带来了很多快乐，也是S队大家的开心果，如今的抖音红人--【赵韩倩要吃钳子】，了解一下。小钳子的两个技能是两种完全不同的机制，只要有发挥的舞台，小钳子就能用自己的实力改变很多东西。',
            SNH48Gzhaoye: 'SNH48 Team SII 成员，SNH48三期生。腿腿，三期生中为数不多的创作担当，MC冷枪王，TAKO著名小迷妹，虽然天天喊着躺床，却依旧能用优质的表现征服大家。腿腿跟王玉一样属于强命系，不同的地方在于王玉是精准打击，腿腿则是大范围的AOE伤害，而且造成的伤害越多，才华的用处就越大，属于越打越强的残局收割者，也跟腿腿不鸣则已一鸣惊人的设定相符合。',
            SNH48Gzhuxiaodan: 'SNH48 Team SII 成员，SNH48九期生。',
            SNH48Gzhaojiamin: '中央戏剧学院在读，SNH48 Team SII 成员，SNH48一期生，《梦想预备生》中饰演同名角色赵嘉敏。',

            //N
            SNH48Gchenjiaying: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gchenwenyan: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gfengxinduo: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gguoqianyun: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Ghuangtingting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Ghaowanqing: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Ghexiaoyu: 'SNH48 Team NII 副队长，SNH48二期生',
            SNH48Gjinyingyue: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gjiangzhenyi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliujuzi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliupeixin: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gluting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gtaoboer: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gxieni: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gyijiaai: 'SNH48 Team NII 队长，SNH48二期生',
            SNH48Gzhaoyue: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gzhangyi: 'SNH48 Team NII 成员，SNH48五期生',
            SNH48Gzhangyuxin: 'SNH48 Team NII 成员，SNH48三期生',

            SNH48Gjujingyi: '明星殿堂 成员，SNH48二期生。《芸汐传》中的秦王妃--韩芸汐 的扮演者。',

            //H
            SNH48Gfeiqinyuan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Ghongpeiyun: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshuting: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Glijiaen: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Glinnan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Glinsiyi: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gliyitong: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gqiyuzhu: 'SNH48 Team HII 成员，SNH48十期生',
            SNH48Gshenmengyao: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gsongyushan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gsunzhenni: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Gwanlina: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gwangyi: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuhan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gxiongqinxian: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuyangyuzhuo: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyanghuiting: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyujiayi: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gyuanyiqi: 'SNH48 Team HII 成员，SNH48七期生',
            SNH48Gzhangxin: 'SNH48 Team HII 副队长，SNH48三期生',
            SNH48Gzengxiaowen: 'SNH48 Team HII 成员，SNH48七期生',

            SNH48Gliujiongran: '现CKG48 Team K 成员，SNH48三期生',

            //X
            SNH48Gchenlin: 'Team X 成员，SNH48四期生',
            SNH48Gchenyunling: 'Team X 成员，SNH48五期生',
            SNH48Gfengxiaofei: 'SNH48 Team X 成员，SNH48四期生，曾经是著名SNH48黑，OLD48法人',
            SNH48Glvyi: 'SNH48 Team X 成员，SNH48七期生。口口一是个灵动的孩子，既有不俗的舞蹈能力，也有高能的MC水平，表情包是她的绝技，网盘是她的禁忌。成长是这个S队次时代目前最强者最有力的武器，只要给她时间，没什么是她做不到的。演技则是于吉的蛊惑改版，但却是一个非常具有操作性的技能，也预示着串儿不可预知的成长空间。',
            SNH48Glizhao: 'Team X 队长，SNH48四期生',
            SNH48Gpanyingqi: 'Team X 成员，SNH48五期生',
            SNH48Gqijing: 'Team X 成员，SNH48七期生',
            SNH48Gsongxinran: 'Team X 成员，SNH48四期生',
            SNH48Gsunxinwen: 'Team X 成员，SNH48四期生',
            SNH48Gwangjialing: 'Team X 成员，SNH48四期生',
            SNH48Gwangshu: 'Team X 成员，SNH48四期生',
            SNH48Gwangxiaojia: 'Team X 成员，SNH48四期生',
            SNH48Gxushiqi: 'Team X 成员，SNH48七期生',
            SNH48Gxietianyi: 'Team X 成员，SNH48四期生',
            SNH48Gyangbingyi: 'Team X 副队长，SNH48四期生',
            SNH48Gyangyunyu: 'Team X 成员，SNH48四期生',
            SNH48Gzhangdansan: 'Team X 成员，SNH48四期生',
            SNH48Gzhangjiayu: 'Team X 成员，SNH48七期生',

            SNH48Glijing: 'Team X 前队长，SNH48四期生',

            SNH48Gwangzijie: '王靖，上海丝芭文化传媒集团有限公司董事长。',
            SNH48Gaji: '张竞，前SNH48剧场发言人。',
            SNH48Gyegou: '叶盛，上海丝芭文化传媒集团有限公司【艺术总监】。',
            SNH48Gmulaosi: '棒槌女郎，上海丝芭文化传媒集团有限公司舞蹈总监。',
            SNH48Gpiggyrae: '朱小希，SNH48G Team SII的舞蹈老师'
        },
        characterFilter: {
            SNH48G: function (mode) {
                return mode != 'SNH48G';
            }
        },
        skill: {
            shaDisabled: { mod: { cardEnabled: function (card) { return card.name != 'sha' } } },
            shaDamageMore: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                forced: true,
                content: function () {
                    trigger.num++;
                },
                ai: {
                    damageBonus: true
                }
            },
            shanDisabled: { mod: { cardEnabled: function (card) { return card.name != 'shan' } } },
            basicDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'basic' } } },
            triggerDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'trigger' } } },
            equipDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'equip'; } } },
            qichang2: { mod: { cardEnabled: function (card, player) { if (card.name == 'wuxie') return false; }, cardUsable: function (card, player) { if (card.name == 'wuxie') return false; }, cardRespondable: function (card, player) { if (card.name == 'wuxie') return false; }, } },
            fengfa: {
                audio: 2,
                enable: 'phaseUse',
                viewAs: { name: 'wanjian' },
                filter: function (event, player) {
                    return player.countCards('h') >= 2;
                },
                filterCard: function (card, player) {
                    if (ui.selected.cards.length) {
                        return get.suit(card) == get.suit(ui.selected.cards[0]);
                    }
                    var cards = player.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (card != cards[i]) {
                            if (get.suit(card) == get.suit(cards[i])) return true;
                        }
                    }
                    return false;
                },
                selectCard: 2,
                complexCard: true,
                check: function (card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return player.canUse('wanjian', current);
                    });
                    var num = 0;
                    for (var i = 0; i < targets.length; i++) {
                        var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                        if (targets[i].hp == 1) {
                            eff *= 1.5;
                        }
                        num += eff;
                    }
                    if (!player.needsToDiscard(-1)) {
                        if (targets.length >= 7) {
                            if (num < 2) return 0;
                        }
                        else if (targets.length >= 5) {
                            if (num < 1.5) return 0;
                        }
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            gaoshi: {
                audio: 4,
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                },
                content: function () {
                    "step 0"
                    target.chooseToUse({ name: 'sha' }, player, -1, '挑衅：对' + get.translation(player) + '使用一张杀，或令其弃置你的一张牌').set('targetRequired', true);
                    "step 1"
                    if (result.bool == false && target.countCards('he') > 0) {
                        player.discardPlayerCard(target, 'he', true).set('ai', function (button) {
                            return 9 - get.value(card)
                        });
                    }
                    else {
                        event.finish();
                    }
                },
                ai: {
                    order: 4,
                    expose: 0.2,
                    result: {
                        target: -1,
                        player: function (player, target) {
                            if (target.countCards('h') == 0) return 0;
                            if (target.countCards('h') == 1) return -0.1;
                            if (player.hp <= 2) return -2;
                            if (player.countCards('h', 'shan') == 0) return -1;
                            return -0.5;
                        }
                    },
                    threaten: 1.1
                }
            },
            modi: {
                mod: {
                    globalTo: function (from, to, distance) {
                        return distance + 1;
                    }
                }
            },
            zhanwu: {
                enable: 'phaseUse',
                usable: 1,
                audio: 2,
                position: 'he',
                filterCard: function (card) {
                    return card.name == 'sha' || get.type(card) == 'equip';
                },
                filter: function (event, player) {
                    return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
                },
                check: function (card) { return 8 - get.value(card) },
                selectTarget: 2,
                multitarget: true,
                discard: false,
                targetprompt: ['得到牌', '出杀目标'],
                prepare: 'give',
                filterTarget: function (card, player, target) {
                    if (ui.selected.targets.length == 0) {
                        return player != target;
                    }
                    else {
                        return lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
                    }
                },
                content: function () {
                    "step 0"
                    targets[0].gain(cards, player);
                    "step 1"
                    targets[0].chooseControl('draw_card', '出杀', function () {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                            return 1;
                        }
                        return 0;
                    }).set('target', targets[1]).set('prompt', '对' + get.translation(targets[1]) + '使用一张杀，或摸一张牌');
                    "step 2"
                    if (result.control == 'draw_card') {
                        targets[0].draw();
                    }
                    else {
                        targets[0].useCard({ name: 'sha' }, targets[1]);
                    }
                },
                ai: {
                    result: {
                        player: function (player) {
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                        target: function (player, target) {
                            if (ui.selected.targets.length) {
                                return -0.1;
                            }
                            return 1;
                        }
                    },
                    order: 8.5,
                    expose: 0.2
                }
            },
            kuaihuo: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                direct: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'h') return true;
                    }
                    return false;
                },
                content: function () {
                    "step 0"
                    var num = 0;
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].original == 'h') num++;
                    }
                    player.chooseTarget('选择发动连营的目标', [1, num]).ai = function (target) {
                        var player = _status.event.player;
                        if (player == target) return get.attitude(player, target) + 10;
                        return get.attitude(player, target);
                    }
                    "step 1"
                    if (result.bool) {
                        player.logSkill('relianying', result.targets);
                        game.asyncDraw(result.targets);
                    }
                },
                ai: {
                    threaten: 0.8,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                        }
                    },
                    noh: true,
                }
            },
            letian: {
                audio: 2,
                trigger: { player: 'judgeEnd' },
                frequent: function (event) {
                    if (event.result.card.name == 'du') return false;
                    //if (get.is.guozhanMode()) return false;
                    return true;
                },
                check: function (event) {
                    if (event.result.card.name == 'du') return false;
                    return true;
                },
                filter: function (event, player) {
                    if (get.owner(event.result.card)) {
                        return false;
                    }
                    if (event.nogain && event.nogain(event.result.card)) {
                        return false;
                    }
                    return true;
                },
                content: function () {
                    player.gain(trigger.result.card);
                    player.$gain2(trigger.result.card);
                }
            },
            quanneng: {
                group: ['longdan_sha', 'longdan_shan', 'longdan_draw'],
                subSkill: {
                    draw: {
                        trigger: { player: ['useCard', 'respond'] },
                        forced: true,
                        popup: false,
                        filter: function (event, player) {
                            if (!get.zhu(player, 'shouyue')) return false;
                            return event.skill == 'longdan_sha' || event.skill == 'longdan_shan';
                        },
                        content: function () {
                            player.draw();
                            player.storage.fanghun2++;
                        }
                    },
                    sha: {
                        audio: 2,
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard: { name: 'shan' },
                        viewAs: { name: 'sha' },
                        viewAsFilter: function (player) {
                            if (!player.countCards('h', 'shan')) return false;
                        },
                        prompt: '将一张闪当杀使用或打出',
                        check: function () { return 1 },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                }
                            },
                            respondSha: true,
                            skillTagFilter: function (player) {
                                if (!player.countCards('h', 'shan')) return false;
                            },
                            order: function () {
                                return get.order({ name: 'sha' }) + 0.1;
                            },
                            useful: -1,
                            value: -1
                        }
                    },
                    shan: {
                        audio: 2,
                        enable: ['chooseToRespond'],
                        filterCard: { name: 'sha' },
                        viewAs: { name: 'shan' },
                        prompt: '将一张杀当闪打出',
                        check: function () { return 1 },
                        viewAsFilter: function (player) {
                            if (!player.countCards('h', 'sha')) return false;
                        },
                        ai: {
                            respondShan: true,
                            skillTagFilter: function (player) {
                                if (!player.countCards('h', 'sha')) return false;
                            },
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                }
                            },
                            order: 4,
                            useful: -1,
                            value: -1
                        }
                    }
                }
            },
            tianlai: {
                audio: 2,
                audioname: ['boss_qinglong'],
                trigger: { player: 'respond' },
                filter: function (event, player) {
                    return event.card && event.card.name == 'shan';
                },
                direct: true,
                content: function () {
                    "step 0";
                    player.chooseTarget(get.prompt('tianlai')).ai = function (target) {
                        if (target.hasSkill('hongyan')) return 0;
                        return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                    };
                    "step 1"
                    if (result.bool) {
                        player.logSkill('tianlai', result.targets, 'thunder');
                        event.target = result.targets[0];
                        event.target.judge(function (card) {
                            var suit = get.suit(card);
                            if (suit == 'spade') return -4;
                            if (suit == 'club') return -2;
                            return 0;
                        });
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.suit == 'club') {
                        event.target.damage('thunder');
                        player.recover();
                    }
                    else if (result.suit == 'spade') {
                        event.target.damage(2, 'thunder');
                    }
                },
                ai: {
                    useShan: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan')) {
                                var hastarget = game.hasPlayer(function (current) {
                                    return get.attitude(target, current) < 0;
                                });
                                var be = target.countCards('e', { color: 'black' });
                                if (target.countCards('h', 'shan') && be) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('h') / 4 : 0];
                                }
                                if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                    return [0, 0];
                                }
                                if (target.countCards('h') == 0) {
                                    return [1.5, 0];
                                }
                                if (target.countCards('h') == 1 && !be) {
                                    return [1.2, 0];
                                }
                                if (!target.hasSkill('guidao')) return [1, 0.05];
                                return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                            }
                        }
                    }
                }
            },
            yezhan: {
                priority: 9,
                audio: 2,
                filter: function (event, player) {
                    return event.player != player && get.type(event.card) == 'trick' && event.targets && event.targets.length > 1;
                },
                check: function (event, player) {
                    return get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                trigger: { target: 'useCardToBefore' },
                content: function () {
                    trigger.cancel();
                    player.draw();
                },
                ai: {
                    effect: {
                        target: function (card) {
                            if (get.type(card) != 'trick') return;
                            if (card.name == 'tiesuo') return [0, 0];
                            if (card.name == 'yihuajiemu') return [0, 1];
                            if (get.tag(card, 'multineg')) return [0, 2];
                        }
                    }
                }
            },
            zhanbu: {
                group: ['guanxing', 'aocai', 'miji']
            },
            tiaosuo: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return game.countPlayer(function (current) {
                        if (get.is.guozhanMode()) {
                            return current != player && current.sex == 'female' && get.is.SNH48G(current);
                        }
                        return current != player && current.sex == 'female';
                    }) > 1;
                },
                check: function (card) { return 10 - get.value(card) },
                filterCard: true,
                position: 'he',
                filterTarget: function (card, player, target) {
                    if (player == target) return false;
                    if (target.sex != 'female') return false;
                    if (ui.selected.targets.length == 1) {
                        return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
                    }
                    return true;
                },
                targetprompt: ['先出杀', '后出杀'],
                selectTarget: 2,
                multitarget: true,
                content: function () {
                    targets[1].useCard({ name: 'juedou2' }, targets[0], 'noai').animate = false;
                    game.delay(0.5);
                },
                ai: {
                    order: 8,
                    result: {
                        target: function (player, target) {
                            if (ui.selected.targets.length == 0) {
                                return -3;
                            }
                            else {
                                return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
                            }
                        }
                    },
                    expose: 0.4,
                    threaten: 3,
                }
            },
            luandance: {
                audio: 2,
                unique: true,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return true;
                    else
                        return false;
                },
                filter: function (event, player) {
                    return !player.storage.luandance;
                },
                init: function (player) {
                    player.storage.luandance = false;
                },
                mark: true,
                intro: {
                    content: 'limited'
                },
                skillAnimation: 'epic',
                animationColor: 'thunder',
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                content: function () {
                    "step 0"
                    player.unmarkSkill('luandance');
                    player.storage.luandance = true;
                    event.current = player.next;
                    "step 1"
                    event.current.animate('target');
                    event.current.chooseToUse('乱舞：使用一张杀或受到一点伤害', { name: 'sha' }, function (card, player, target) {
                        if (player == target) return false;
                        if (!player.canUse('sha', target)) return false;
                        if (get.distance(player, target) <= 1) return true;
                        if (game.hasPlayer(function (current) {
                            return current != player && get.distance(player, current) < get.distance(player, target);
                        })) {
                            return false;
                        }
                        return true;
                    });
                    "step 2"
                    if (result.bool == false)
                        event.current.damage(player);
                    if (event.current.next != player) {
                        event.current = event.current.next;
                        game.delay(0.5);
                        event.goto(1);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: function (player) {
                            if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                            }
                            var num = 0;
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                var att = get.attitude(player, players[i]);
                                if (att > 0) att = 1;
                                if (att < 0) att = -1;
                                if (players[i] != player && players[i].hp <= 3) {
                                    if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                    else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                    else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                }
                                if (players[i].hp == 1) num += att * 1.5;
                            }
                            if (player.hp == 1) {
                                return -num;
                            }
                            if (player.hp == 2) {
                                return -game.players.length / 4 - num;
                            }
                            return -game.players.length / 3 - num;
                        }
                    }
                }
            },
            //初心不忘设计的技能
            wenrou: {
                trigger: { global: 'damageEnd' },
                locked: true,
                forced: true,
                frequent: true,
                filter: function (event, player) {
                    return event.player.hp == player.hp && event.player != player;
                },
                content: function () {
                    'step 0'
                    player.chooseControl('你', '受害者').set('你摸一张牌', get.translation(trigger.player) + '摸一张牌').set('ai', function () {
                        if (player.isFriendOf(trigger.player))
                            //无私奉献的队友AI
                            return 1;
                        else
                            return 0;
                    });
                    'step 1'
                    if (result.index == 1) {
                        trigger.player.draw()
                    }
                    else
                        player.draw();
                },
                group: 'wenrou2'
            },
            wenrou2: {
                trigger: { player: 'damageEnd' },
                locked: true,
                forced: true,
                frequent: true,
                direct: true,
                filter: function (event, player) {
                    return (event.source && event.source != player);
                },
                content: function () {
                    player.draw();
                }
            },
            //鞠婧祎，AI测试ok
            dufei: {
                unique: true,
                gainable: true,
                group: ['dufei1', 'dufei2', 'dufei3', 'dufei4', 'dufei5', 'dufei6'],
                mod: {
                    maxHandcard: function (player, num) {
                        return num + player.countCards('h', { name: 'du' })
                    }
                }
            },
            dufei1: {
                //其他角色弃牌毒，获得之
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    //自己弃的不算
                    if (event.player == player)
                        return false;
                    if (event.cards & event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (event.cards[i].name == 'du' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].name == 'du' && get.position(event.cards[i]) == 'd')
                            return true;
                    }
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].name == 'du' && get.position(trigger.cards[i]) == 'd') {
                            cards.push(trigger.cards[i]);
                        }
                    }
                    if (cards.length) {
                        player.gain(cards, 'log');
                        player.$gain2(cards);
                    }
                },
            },
            dufei2: {
                //判定牌为毒
                audio: 2,
                trigger: { global: 'judgeAfter' },
                frequent: 'check',
                check: function (event, player) {
                    return event.result.card.name == 'du';
                },
                filter: function (event, player) {
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    return (event.result.card.name == 'du' && get.position(event.result.card) == 'd');
                },
                content: function () {
                    player.gain(trigger.result.card, 'log');
                    player.$gain2(trigger.result.card);
                }
            },
            dufei3: {
                //没有【毒妃】技能的人使用毒后
                trigger: { global: 'useCardAfter' },
                audio: 2,
                forced: true,
                filter: function (event, player) {
                    //没有【毒妃】技能的人
                    return event.card.name == 'du' && !player.hasSkill("dufei");
                },
                content: function (card) {
                    player.gain(trigger.card, 'log');
                    player.$gain2(trigger.card);
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (!target.hasFriend() && !player.hasUnknown()) return;
                        }
                    },
                    threaten: function (player, target) {
                        if (target.countCards('h') == 0) return 2;
                        return 0.5;
                    },
                    nodiscard: true,
                    nolose: true
                }
            },
            dufei4: {
                trigger: { player: 'duBegin' },
                forced: true,
                content: function () {
                    player.recover();
                },
                ai: {
                    //使用、弃置毒不会失去体力，反而会回复1点体力
                    nodu: true,
                }
            },
            dufei5: {
                audio: 2,
                unique: true,
                gainable: true,
                trigger: { global: 'dieEnd' },
                priority: 5,
                forced: true,
                filter: function (event) {
                    //有弃牌
                    return event.playerCards && event.playerCards.filter(card => card.name == 'du').length > 0
                },
                check: function (event) {
                    return event.playerCards.filter(card => card.name == 'du').length > 0;
                },
                content: function () {
                    "step 0"
                    player.gain(trigger.playerCards.filter(card => card.name == 'du' && get.position(card) == 'd'));
                    player.$gain2(trigger.playerCards.filter(card => card.name == 'du' && get.position(card) == 'd'));
                    game.delay();
                    "step 1"
                    for (var i = 0; i < trigger.playerCards.length; i++) {
                        trigger.cards.remove(trigger.playerCards[i]);
                    }
                    trigger.playerCards.length = 0;
                }
            },
            dufei6: {
                audio: 2,
                trigger: { global: ['chooseToCompareAfter', 'compareMultipleAfter'] },
                frequent: true,
                filter: function (event, player) {
                    return event.card2.name == 'du' || event.card1.name == 'du';
                },
                check: function (event, player) {
                    return event.card2.name == 'du' || event.card1.name == 'du';
                },
                content: function () {
                    'step 0'
                    game.delay(2);
                    'step 1'
                    if (trigger.card1.name == 'du' && get.position(trigger.card1) == 'd')
                        player.gain(trigger.card1);

                    if (trigger.card2.name == 'du' && get.position(trigger.card2) == 'd')
                        player.gain(trigger.card2);
                }
            },
            poisonousfog: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filterCard: function (card, player) {
                    return card.name == 'du';
                },
                filter: function (card, player) {
                    return player.countCards('h', { name: 'du' }) >= 2
                },
                selectCard: 2,
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                skillAnimation: 'epic',
                animationColor: 'nature',
                filterTarget: function (card, player, target) {
                    return target != player;
                },
                check: function (button) {
                    var player = _status.event.player;
                    var recover = 0, lose = 1, players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (!players[i].isOut()) {
                            //目标不满血
                            if (players[i].hp < players[i].maxHp) {
                                //友方
                                if (get.attitude(player, players[i]) > 0) {
                                    if (players[i].hp < 2) {
                                        lose--;
                                        recover += 0.5;
                                    }
                                    lose--;
                                    recover++;
                                }
                                //敌方
                                else if (get.attitude(player, players[i]) < 0) {
                                    if (players[i].hp < 2) {
                                        lose++;
                                        recover -= 0.5;
                                    }
                                    lose++;
                                    recover--;
                                }
                            }
                            //目标满血
                            else {
                                //影响友方程度
                                if (get.attitude(player, players[i]) > 0) {
                                    lose--;
                                }
                                //影响敌方程度
                                else if (get.attitude(player, players[i]) < 0) {
                                    lose++;
                                }
                            }
                        }
                    }
                    if (lose > recover && lose > 0) return true
                    if (lose < recover && recover > 0) return false;
                    return false
                },
                content: function () {
                    for (var i = 0; i < event.targets.length; i++) {
                        event.targets[i].loseHp();
                    }
                    if (player.hasSkill('xinxie'))
                        player.draw(2);
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            jiedu: {
                enable: 'chooseToUse',
                filter: function (event, player) {
                    return event.type == 'dying' &&
                        event.dying && event.dying.hp <= 0 &&
                        event.dying != player &&
                        player.countCards('h', { name: 'du' }) > 0;
                },
                filterTarget: function (card, player, target) {
                    return target == _status.event.dying;
                },
                direct: true,
                delay: 0,
                selectTarget: -1,
                selectCard: 1,
                filterCard: function (card) {
                    return card.name == 'du'
                },
                content: function (event) {
                    for (var i = 0; i < 1 - target.hp; i++) {
                        target.recover();
                        target.update();
                        game.delay();
                    }
                    player.draw();
                    //if (player.hasSkill('xinxie'))
                    //    player.draw(2);
                },
                ai: {
                    order: 6,
                    skillTagFilter: function (player) {
                        return player.countCards('h', { name: 'du' }) > 0;
                    },
                    save: true,
                    result: {
                        target: 3
                    },
                    threaten: 1.6
                },
            },
            duzong: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: 'xinxie',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h', { name: 'du' }) >= 2;
                },
                content: function () {
                    --player.maxHp;
                    player.update();
                    player.recover();
                    if (player.hasSkill('duzong')) {
                        player.addSkill('xinxie');
                    }
                    else {
                        player.addAdditionalSkill('duzong', 'xinxie');
                    }
                    event.trigger('zhuUpdate');
                    player.awakenSkill('duzong');
                }
            },
            xinxie: {
                trigger: { player: 'duEnd' },
                forced: true,
                content: function () {
                    player.draw(1);
                },
                ai: {
                    threaten: 1.2,
                    nodu: true,
                    usedu: true,
                },
                group: 'xinxie2'
            },
            xinxie2: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function () {
                    var hs = player.getCards('h');
                    for (var i = 0; i < hs.length; i++) {
                        if (hs[i].name == 'du') {
                            hs.splice(i--, 1);
                        }
                    }
                    if (hs.length) {
                        var card = hs.randomGet();
                        card.init([card.suit, card.number, 'du']);
                        game.log(player, '将一张手牌转化为', { name: 'du' });
                    }
                }
            },
            shuangfa: {
                //出牌阶段使用的第一张牌将结算两次
                trigger: { player: 'useCardAfter' },
                direct: true,
                usable: 1,
                init: function (player) {
                    player.storage.shuangfa = true;
                },
                mark: true,
                intro: {
                    content: 'limited'
                },
                filter: function (event, player) {
                    if (!player.storage.shuangfa)
                        return false;
                    if (event.parent.name == 'shuangfa') return false;
                    //没实体卡的不触发
                    if (!event.card) return false;
                    //无懈可击不触发
                    if (event.card && event.card.name == 'wuxie') return false;
                    //知己知彼不触发
                    if (event.card && event.card.name == 'zhibi') return false;
                    //铁锁连环不触发
                    if (event.card && event.card.name == 'tiesuo') return false;
                    //挟天子令诸侯不触发
                    if (event.card && event.card.name == 'xietianzi') return false;
                    //调虎离山不触发
                    if (event.card && event.card.name == 'diaohulishan') return false;
                    //敕令不触发
                    if (event.card && event.card.name == 'chiling') return false;
                    //酒不触发
                    if (event.card && event.card.name == 'jiu') return false;
                    //毒不触发
                    if (event.card && event.card.name == 'du') return false;

                    //装备牌不触发
                    if (get.type(event.card) == 'equip') return false;

                    //模拟镜像卡
                    var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                    //复制目标
                    var targets = event._targets || event.targets;
                    for (var i = 0; i < targets.length; i++) {
                        //不在范围内不触发
                        if (!targets[i].isIn()) return false;
                        //不能使用不触发
                        if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                            return false;
                        }
                    }
                    return true;
                },
                check: function (event, player) {
                    if (event.card && event.card.name == 'tiesuo') return false;
                    if (event.card && event.card.name == 'zhibi') return false;
                    if (event.card && event.card.name == 'xieling') return false;
                    if (event.card && event.card.name == 'diaohulishan') return false;
                    if (event.card && event.card.name == 'chiling') return false;
                    if (event.card && event.card.name == 'wuxie') return false;
                    if (event.card && event.card.name == 'jiu') return false;
                    if (event.card && event.card.name == 'du') return false;
                    return true;
                },
                content: function () {
                    var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                    //使用卡名，而不是实体卡牌
                    player.useCard({ name: card.name }, (trigger._targets || trigger.targets).slice(0), 'noai').animate = false;
                    player.unmarkSkill('shuangfa');
                },
                ai: {
                    threaten: 1.3
                }
            },
            buzhuang: {
                trigger: { player: 'phaseEnd' },
                frequent: true,
                filter: function (event, player) {
                    return player.countCards('e') < 5
                },
                content: function () {
                    var card;
                    if (!player.getEquip(2)) {
                        card = game.createCard(get.inpile('equip2').randomGet());
                    } else if (!player.getEquip(1)) {
                        card = game.createCard(get.inpile('equip1').randomGet());
                    } else if (!player.getEquip(5)) {
                        card = game.createCard(get.inpile('equip5').randomGet());
                    } else if (!player.getEquip(4)) {
                        card = game.createCard(get.inpile('equip4').randomGet());
                    } else if (!player.getEquip(3)) {
                        card = game.createCard(get.inpile('equip3').randomGet());
                    }
                    player.$gain2(card);
                    player.equip(card);
                    player.storage.shuangfa = true;
                    player.markSkill('shuangfa');
                }
            },

            //参考北极瑞风HZYQ   定义的技能  https://space.bilibili.com/74970579/#/
            //戴萌，AI测试ok
            dandang: {
                trigger: { global: 'useCardToBefore' },
                direct: true,
                priority: 5,
                prompt: '弃一张牌并将该杀的目标转移至你身上',
                //触发时机
                filter: function (event, player) {
                    //你不是来源，且不是目标
                    if (player == event.target || player == event.player) return false;
                    //有手牌
                    if (!player.countCards('he')) return false;
                    //目标是唯一目标
                    if (event.targets.length > 1) return false;
                    //有目标
                    if (!event.target) return false;

                    //目标在你的攻击距离内
                    var inRange = function () {
                        return get.distance(player, event.target, 'attack') <= 1;
                    }
                    var card = event.card;

                    //杀
                    if (card.name == 'sha') return inRange();
                    //黑色锦囊
                    //if (get.color(card) == 'black' && get.type(card) == 'trick') return inRange();
                    return false;
                },
                content: function () {
                    "step 0"
                    var save = false;
                    if (get.attitude(player, trigger.target) > 2) {
                        if (trigger.card.name == 'sha') {
                            if (player.countCards('h', 'shan') || player.getEquip(2) ||
                                trigger.target.hp == 1 || player.hp > trigger.target.hp + 1) {
                                if (!trigger.target.countCards('h', 'shan') || trigger.target.countCards('h') < player.countCards('h')) {
                                    save = true;
                                }
                            }
                        }
                    }
                    var next = player.chooseToDiscard('he', get.prompt('dandang'));

                    next.logSkill = ['dandang', trigger.target];
                    next.set('ai', function (card) {
                        if (_status.event.aisave) {
                            return 7 - get.value(card);
                        }
                        return 0;
                    });
                    next.set('aisave', save);
                    "step 1"
                    if (result.bool) {
                        //转移目标
                        trigger.target = player;
                        trigger.targets.length = 0;
                        trigger.targets.push(player);
                        trigger.untrigger();
                        trigger.trigger('useCardToBefore');
                        trigger.trigger(trigger.card.name + 'Before');
                        trigger.player.line(player);
                    }
                    game.delay();
                },
                ai: {
                    threaten: 1.1
                }
            },
            jianyi: {
                audio: true,
                trigger: { player: 'damageBegin' },
                direct: true,
                prompt: '弃置一张手牌，否则伤害-1',
                filter: function (event, player) {
                    //有伤害来源，且不是自己，才能触发这个技能
                    return (event.source && event.source != player);
                },
                content: function (event) {
                    "step 0"
                    if (trigger.source) {
                        trigger.source.chooseToDiscard('he', '弃置一张牌，否则造成伤害-1').set('ai', function (card) {
                            if (get.attitude(player, trigger.source) > 0)
                                //不弃牌
                                return 0;
                            else
                                return 7 - get.value(card);
                        });
                    }
                    "step 1"
                    if (!result.bool) {
                        trigger.num--;
                    }
                },
                ai: {
                    expose: 0.2,
                    threaten: 1.5
                }
            },
            lingjun: {
                audio: 2,
                unique: true,
                trigger: { target: 'taoBegin' },
                zhuSkill: true,
                forced: true,
                filter: function (event, player) {
                    //自己对自己不触发
                    if (event.player == player) return false;
                    //没有领军主公技不触发
                    if (!get.is.guozhanMode() && !player.hasZhuSkill('lingjun')) return false;
                    //主公体力大于0不触发
                    if (player.hp > 0) return false;
                    //势力不是主公势力不触发
                    if (event.player.group != player.group) return false;
                    return true;
                },
                content: function (event, target) {
                    player.recover();
                    trigger.player.draw();
                }
            },
            //莫寒，AI测试OK
            shiyu: {
                audio: 2,
                trigger: { source: 'damageEnd' },
                filter: function (event, player) {
                    if (event._notrigger.contains(event.player))
                        return false;
                    return (event.card && event.card.name == 'sha' &&
                        event.player.classList.contains('dead') == false &&
                        event.player.countCards('h') > 0 && player.countCards('h') > 0) && event.player != player;
                },
                check: function (event, player) {
                    return get.attitude(player, event.player) < 0
                        && player.countCards('h') > 0 && event.player.countCards('h') > 0;
                },
                priority: 5,
                content: function () {
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if (result.bool && trigger.player.countCards('he')) {
                        player.draw();
                        player.gainPlayerCard(trigger.player, true, 'he');
                    }
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            yuyan: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                frequent: true,
                filter: function (event, player) {
                    if (player == _status.currentPhase) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original && event.cards[i].original != 'j') return true;
                    }
                    return false;
                },
                content: function () {
                    "step 0"
                    player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                        switch (Math.floor(Math.random() * 6)) {
                            case 0: return 'heart2';
                            case 1:
                            case 4:
                            case 5: return 'diamond2';
                            case 2: return 'club2';
                            case 3: return 'spade2';
                        }
                    });
                    "step 1"
                    game.log(player, '选择了' + get.translation(result.control));
                    "step 2"
                    player.judge(function (card) {
                        //猜中
                        if ((get.suit(card) + '2') == result.control)
                            return 1;
                        return -1;
                    })
                    "step 3"
                    if (result.bool) {
                        //摸一张牌
                        //player.draw();
                        //获得判定牌
                        player.gain(result.card);
                        player.$gain2(result.card);
                    }
                },
                ai: {
                    threaten: function (player, target) {
                        if (target.countCards('h') == 0) return 2;
                        return 0.5;
                    },
                    nodiscard: true,
                    nolose: true
                }
            },
            ziqiang: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                zhuSkill: true,
                keepSkill: true,
                derivation: 'mowang',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasZhuSkill('ziqiang')) return false;
                    if (player.storage.ziqiang) return false;
                    return player.isMinHp();
                },
                content: function () {
                    player.storage.ziqiang = true;
                    player.maxHp++;
                    player.update();
                    player.recover();
                    if (player.hasSkill('ziqiang')) {
                        player.addSkill('mowang');
                    }
                    else {
                        player.addAdditionalSkill('ziqiang', 'mowang');
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_ziqiang = ['mowang'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('ziqiang');
                }
            },
            mowang: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return event.source != undefined;
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                logTarget: 'source',
                content: function () {
                    'step 0'
                    var next = trigger.source.chooseToDiscard('he', [0, player.maxHp - player.hp], '魔王：你将受到' + (player.maxHp - player.hp) + '点伤害，你可弃置0~' + (player.maxHp - player.hp) + '张牌，每弃置一张，减少1点伤害', true);

                    next.set('ai', function (card) {
                        if (card.name == 'tao') return -10;
                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                    });

                    'step 1'
                    if (result.bool) {
                        trigger.source.damage(player.maxHp - player.hp - result.cards.length);
                    }
                    else
                        trigger.source.damage(player.maxHp - player.hp);
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target: function (card, player, target) {
                            //if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            //敌人
                            //if (get.attitude(player, target) < 0)
                            //    return get.damageEffect(target, player);
                            if (get.attitude(target, player) < 0)
                                return [1, 1];
                        }
                    }
                }
            },
            //陈思，AI测试ok
            jingwu: {
                audio: 2,
                trigger: { player: ['phaseUseBegin', 'changeHp'] },
                forced: true,
                frequent: true,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('h') > 0;
                },
                filter: function () {
                    return true;
                },
                content: function () {
                    player.removeAdditionalSkill('jingwu');
                    if (player.hp % 2 == 1) {
                        player.addAdditionalSkill('jingwu', ['jingwu2']);
                    }
                    else {
                        player.addAdditionalSkill('jingwu', ['jingwu3']);
                    }
                }
            },
            jingwu2: {
                mod: {
                    //无视距离
                    targetInRange: function (card, player, target, now) {
                        return true;
                    },
                    //无限杀
                    //cardUsable: function (card, player, num) {
                    //    if (card.name == 'sha') return Infinity;
                    //}
                    //杀额外指定1个目标
                    selectTarget: function (card, player, range) {
                        if (card.name != 'sha') return;
                        if (range[1] == -1) return;
                        var cards = player.getCards('h');
                        //检查是否是最后一张手牌
                        //for (var i = 0; i < cards.length; i++) {
                        //    if (cards[i].classList.contains('selected') == false)
                        //        return;
                        //}
                        range[1] += 1;
                    }
                }
            },
            jingwu3: {
                mod: {
                    //额外使用1个杀
                    cardUsable: function (card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    }
                },
                group: 'qinggang_skill'
                //ai: {
                //    //无视防具
                //    unequip: true
                //}
            },
            tianyin: {
                audio: 2,
                enable: 'phaseUse',
                filterCard: function (card) {
                    //使用红色牌
                    return get.color(card) == 'red';
                },
                usable: 1,
                filterTarget: function (card, player, target) {
                    //目标有损失体力
                    if (target.hp >= target.maxHp) return false;
                    return true;
                },
                check: function (card) {
                    return 9 - get.value(card)
                },
                content: function () {
                    player.line(target, 'green');
                    target.recover();
                    //添加不能使用杀的锁定技
                    //player.addTempSkill('shaDisabled');
                },
                ai: {
                    order: 9,
                    result: {
                        target: function (player, target) {
                            if (target.hp == 1) return 5;
                            if (player == target && player.countCards('h') > player.hp) return 5;
                            return 2;
                        }
                    },
                    threaten: 2
                }
            },
            //陈观慧，AI测试OK
            wenwan: {
                audio: 2,
                trigger: { player: 'respond' },
                filter: function (event, player) {
                    return event.card && event.card.name == 'shan';
                },
                direct: true,
                content: function (player, target, event) {
                    if (player.hp % 2 == 1) {
                        player.draw(2);
                    } else {
                        if (!trigger.source.hasSkill('qianxun')) {
                            //体力值为双数：该闪结算后，将一张乐不思蜀置于伤害来源的判定区
                            if (!trigger.source.hasJudge('lebu')) {
                                trigger.source.addJudge(game.createCard('lebu'));
                            }
                        }
                    }
                },
                ai: {
                    mingzhi: false,
                    useShan: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan')) {
                                var hastarget = game.hasPlayer(function (current) {
                                    return get.attitude(target, current) < 0;
                                });
                                if (target.countCards('h', 'shan') && target.countCards('e', { suit: 'spade' })) {
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan')) {
                                    return [1, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                return [1, target.countCards('h') / 4];
                            }
                        }
                    }
                }
            },
            fuhei: {
                usable: 1,
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.countCards('he', { suit: 'spade' }) > 0;
                },
                selectTarget: 1,
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                position: 'he',
                selectCard: 1,
                filterCard: function (card) {
                    return get.suit(card) == 'spade';
                },
                content: function (event) {
                    event.target.damage();
                    event.target.addAdditionalSkill('fuhei', ['fuhei2', 'fuhei3']);
                },
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        target: function (player, target) {
                            return get.damageEffect(target, player);
                        }
                    }
                },
                threaten: 1.3
            },
            fuhei2: {
                audio: 2,
                trigger: { player: 'shaBegin' },
                forced: true,
                filter: function (event, player) {
                    return !event.directHit && event.target.hasSkill("fuhei");
                },
                priority: -1,
                content: function () {
                    if (typeof trigger.shanRequired == 'number') {
                        trigger.shanRequired++;
                    }
                    else {
                        trigger.shanRequired = 2;
                    }
                }
            },
            fuhei3: {
                trigger: { player: 'phaseEnd' },
                direct: true,
                forced: true,
                content: function () {
                    player.removeAdditionalSkill('fuhei', ['fuhei2', 'fuhei3'])
                }
            },
            //孔肖吟，AI测试OK
            shenhun: {
                audio: 2,
                trigger: { player: 'judgeEnd' },
                filter: function (event, player) {
                    if (get.owner(event.result.card)) {
                        return false;
                    }
                    if (event.nogain && event.nogain(event.result.card)) {
                        return false;
                    }
                    return true;
                },
                init: function (player) {
                    player.storage.shenhun = [];
                },
                intro: {
                    content: 'cards'
                },
                content: function (card) {
                    if (player.storage.shenhun == undefined)
                        player.storage.shenhun = [];
                    player.storage.shenhun.push(trigger.result.card);
                    player.markSkill('shenhun');
                },
                mod: {
                    maxHandcard: function (player, num) {
                        if (player.storage.shenhun == undefined)
                            player.storage.shenhun = [];
                        return num + player.storage.shenhun.length;
                    }
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (!target.hasFriend() && !player.hasUnknown()) return;
                        }
                    },
                    threaten: function (player, target) {
                        if (target.countCards('h') == 0) return 2;
                        return 0.5;
                    },
                    nodiscard: true,
                    nolose: true
                }
            },
            diandao: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    if (event.source == undefined)
                        return false;
                    if (event.player == player || event.source == player)
                        return false;
                    if (event.player.classList.contains('dead'))
                        return false;
                    return true;
                    //return event.source != undefined && event.player == player && player.classList.contains('dead') == false;
                },
                logTarget: 'target',
                content: function () {
                    "step 0"
                    player.judge();
                    "step 1"
                    //你的回合外每受到一次伤害可进行一次判定，
                    switch (get.suit(result.card)) {
                        //若结果为黑桃，伤害来源翻面；
                        //case 'spade': trigger.source.turnOver(); break;
                        //若结果为黑桃，伤害来源受到一点伤害；
                        case 'spade': trigger.source.damage();
                        //若结果为方块，你摸两张牌；
                        case 'diamond': player.draw(2); break;
                        //若结果为红桃，你回复一点体力；
                        case 'heart': player.recover(); break;
                        //若结果为梅花，伤害来源弃两张牌。
                        case 'club': trigger.source.chooseToDiscard('he', 2, true); break;
                    }
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target))
                                return [1, -1];
                            //为反时，主-8，忠-7，内-2，反5，未知0
                            return get.attitude(player, target) < 0;
                            //为忠时，主10，忠4，内1，反-8，未知0
                            //return 0.8;
                        }
                    }
                }
            },
            xinggan: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: 'meiyan',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    if (!player.storage.shenhun)
                        return false;
                    return player.storage.shenhun.length > player.hp;
                },
                content: function () {
                    player.storage.meiyan = true;
                    player.maxHp--;
                    player.update();
                    player.recover();
                    if (player.hasSkill('xinggan')) {
                        player.addSkill('meiyan');
                    }
                    else {
                        player.addAdditionalSkill('xinggan', 'meiyan');
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_xinggan = ['meiyan'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('xinggan');
                }
            },
            meiyan: {
                audio: 2,
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.storage.shenhun.length > 0;
                },
                chooseButton: {
                    dialog: function (event, player) {
                        return ui.create.dialog('美艳', player.storage.shenhun, 'hidden');
                    },
                    backup: function (links, player) {
                        return {
                            filterCard: function () { return false },
                            selectCard: -1,
                            viewAs: { name: 'lebu' },
                            cards: links,
                            onuse: function (result, player) {
                                result.cards = lib.skill[result.skill].cards;
                                var card = result.cards[0];
                                player.storage.shenhun.remove(card);
                                player.syncStorage('shenhun');
                                player.logSkill('meiyan', result.targets);
                                if (!player.storage.shenhun.length) {
                                    player.unmarkSkill('shenhun');
                                } else {
                                    player.markSkill('shenhun');
                                }
                            }
                        }
                    },
                    prompt: function (links, player) {
                        return '选择目标';
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            return player.storage.shenhun.length - 1;
                        }
                    }
                }
            },
            //成珏，AI测试ok
            kuaidao: {
                trigger: { player: 'shaBegin' },
                filter: function (event) {
                    return event.target.countCards('h') > 0;
                },
                direct: true,
                content: function (event, trigger) {
                    'step 0'
                    player.discardPlayerCard(trigger.target, 'h', get.prompt('kuaidao', trigger.target))
                        .set('ai', function (button) {
                            if (!_status.event.att) return 0;
                            if (get.position(button.link) == 'e') return get.value(button.link);
                            return 1;
                        })
                        .set('logSkill', ['kuaidao', trigger.target]).set('att', get.attitude(player, trigger.target) <= 0);
                    'step 1'
                    if (result.bool && result.links && result.links.length) {
                        //为装备牌，伤害+1
                        if (get.type(result.links[0]) == 'equip') {
                            player.addTempSkill('kuaidao2');
                        }
                        //花色相同不能被响应
                        if (get.suit(result.links[0]) == get.suit(trigger.cards[0])) {
                            trigger.directHit = true;
                        }
                        if (trigger.cards) {
                            trigger.target.gain(trigger.cards, 'gain2', 'log');
                        }
                    }
                }
            },
            kuaidao2: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                forced: true,
                content: function () {
                    trigger.num++;
                },
                temp: true,
                vanish: true,
                ai: {
                    damageBonus: true
                },
            },
            qiaoyan: {
                audio: 4,
                enable: 'chooseToUse',
                filterCard: function (card) {
                    return get.color(card) == 'black';
                },
                position: 'he',
                viewAs: { name: 'jiedao' },
                viewAsFilter: function (player) {
                    if (!player.countCards('he', { color: 'black' })) return false;
                },
                prompt: '将一张黑色牌当借刀杀人使用',
                check: function (card) { return 4 - get.value(card) },
                filter: function (event, player) {
                    return player.countCards('he', { color: 'black' }) > 0;
                },
                threaten: 1.2,
                group: 'qiaoyan_yan',
                subSkill: {
                    yan: {
                        audio: 2,
                        trigger: { source: 'damageBefore', player: 'damageBefore' },
                        forced: true,
                        priority: 15,
                        check: function (event, player) {
                            if (player == event.player) return true;
                            return false;
                        },
                        filter: function (event, player) {
                            return get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'black';
                        },
                        content: function () {
                            trigger.cancel();
                        },
                        ai: {
                            notrick: true,
                            notricksource: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.type(card) == 'trick' && get.color(card) == 'black' && get.tag(card, 'damage')) {
                                        return 'zeroplayertarget';
                                    }
                                },
                                player: function (card, player, target, current) {
                                    if (get.type(card) == 'trick' && get.color(card) == 'black' && get.tag(card, 'damage')) {
                                        return 'zeroplayertarget';
                                    }
                                }
                            }
                        }
                    }
                }
            },
            //冯晓菲，AI测试ok
            chongaaaa: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                prompt: '弃置任意张手牌，你摸等同于你弃置的数量张牌，并可以最多指定至多X名角色，各摸1张牌（X为你当前已损失体力值）',
                position: 'h',
                filterCard: true,
                selectCard: [1, Infinity],
                content: function () {
                    'step 0'
                    player.draw(cards.length);
                    'step 1'
                    if (player.maxHp > player.hp) {
                        player.chooseTarget("选择至多" + (player.maxHp - player.hp) + "名角色，各摸一张牌", [0, player.maxHp - player.hp], function (target) {
                            return true
                        }).set('ai', function (target) {
                            return get.attitude(player, target) >= 0;
                        });
                    }
                    'step 2'
                    if (result.bool) {
                        player.logSkill('chongaaaa', result.targets);
                        game.asyncDraw(result.targets);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1
                    },
                    threaten: 1.5
                }
            },
            beifen: {
                audio: 2,
                trigger: { global: 'damageBefore' },
                forced: true,
                priority: 15,
                check: function (event, player) {
                    ////自己造成的伤害，不触发此技能
                    //if (player == event.source)
                    //    return false;
                    ////自己受到的伤害，触发此技能
                    //if (player == event.player)
                    //    return true;
                    //不是自己造成的，并且自己受到的，触发
                    return event.source != player && event.player == player;
                },
                filter: function (event, player) {
                    if (get.type(event.card, 'trick') == 'trick' && get.tag(event.card, 'damage') && event.source.hp > player.hp) {
                        return event.source != player && event.player == player;
                    }
                    return false;
                },
                content: function (card, target, player, trigger) {
                    trigger.cancel();
                }
            },
            yuanzhen: {
                audio: 2,
                trigger: { player: 'phaseBegin' },
                filter: function (event, player) {
                    return !player.storage.yuanzhen && player.maxHp > player.hp;
                },
                init: function (player) {
                    player.storage.yuanzhen = false;
                },
                mark: true,
                unique: true,
                intro: {
                    content: 'limited'
                },
                skillAnimation: 'epic',
                animationColor: 'thunder',
                content: function () {
                    game.countPlayer(function (current) {
                        if (current.group == player.group)
                            player.draw();
                    });
                    player.recover();
                    player.storage.yuanzhen = true;
                    player.unmarkSkill('luanwu')
                }
            },
            //吕一
            chengzhang: {
                group: ['chengzhang1', 'chengzhang2', 'chengzhang3']
            },
            chengzhang1: {
                audio: 4,
                trigger: { player: 'loseEnd' },
                frequent: true,
                filter: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'e') return true;
                    }
                    return false;
                },
                content: function () {
                    var num = 0;
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].original == 'e')
                            --player.maxHp;
                    }
                    player.update();
                },
                ai: {
                    noe: true,
                    reverseEquip: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.type(card) == 'equip') return [1, 3];
                        }
                    }
                },
            },
            chengzhang2: {
                trigger: { player: 'equipAfter' },
                frequent: true,
                content: function (trigger) {
                    'step 0'
                    ++player.maxHp;
                    player.update();
                    player.judge();
                    'step 1'
                    if (get.color(result.card) == get.color(trigger.card))
                        player.recover();
                }
            },
            chengzhang3: {
                trigger: { player: ['phaseBefore', 'equipAfter', 'loseAfter'] },
                forced: true,
                popup: false,
                derivation: ['wenrou', 'jianyi', 'haomai', 'meiren', 'huangguan'],
                filter: function (event, player) {
                    if (player.equiping) return false;
                    if (player.additionalSkills.chengzhang3) {
                        return player.additionalSkills.chengzhang3.length != player.countCards('e');
                    }
                    else {
                        return player.countCards('e') > 0;
                    }
                },
                content: function () {
                    player.removeAdditionalSkill('chengzhang3');
                    switch (player.countCards('e')) {
                        case 1: player.addAdditionalSkill('chengzhang3', ['wenrou']); break;
                        case 2: player.addAdditionalSkill('chengzhang3', ['wenrou', 'jianyi']); break;
                        case 3: player.addAdditionalSkill('chengzhang3', ['wenrou', 'jianyi', 'haomai']); break;
                        case 4: player.addAdditionalSkill('chengzhang3', ['wenrou', 'jianyi', 'haomai', 'meiren']); break;
                        case 5: player.addAdditionalSkill('chengzhang3', ['wenrou', 'jianyi', 'haomai', 'meiren', 'huangguan']); break;
                    }
                },
                ai: {
                    threaten: 1.2
                }
            },
            yanji: {
                audio: 2,
                trigger: { target: 'shaBegin' },
                frequent: true,
                forced: true,
                //其他角色对你使用杀时，你可说出一种牌并将一张手牌背面朝上出示之，该角色可选择是否质疑，若不质疑，此杀无效。                
                //若质疑则展示，若为真，此杀无效，对方选择给你一张装备牌或让你对其造成1点伤害；
                //若为假，你失去1点体力，对方获得你展示的手牌。（丰富的表情包既能表达情绪也能掩盖心思）
                filter: function (event, player) {
                    //有手牌时发动
                    return player.countCards('h') > 0;
                },
                chooseButton: {
                    dialog: function () {
                        var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                        for (var i = 0; i < list.length; i++) {
                            if (i < 3) {
                                list[i] = ['基本', '', list[i]];
                            }
                            else {
                                list[i] = ['锦囊', '', list[i]];
                            }
                        }
                        return ui.create.dialog([list, 'vcard']);
                    },
                    filter: function (button, player) {
                        return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        if (player.countCards('h', 'wuzhong')) {
                            if (player.hp == 1 && player.countCards('h', 'tao')) {
                                return button.link == 'tao' ? 1 : 0;
                            }
                            return button.link == 'wuzhong' ? 1 : 0;
                        }
                        if (player.hp < player.maxHp) {
                            if (player.countCards('h', 'tao')) {
                                return button.link == 'tao' ? 1 : 0;
                            }
                        }
                    },
                    backup: function (links, player) {
                        return {
                            filterCard: true,
                            selectCard: 1,
                            audio: 2,
                            popname: true,
                            viewAs: { name: links[0][2] },
                        }
                    },
                    prompt: function (links, player) {
                        return '将一张当' + get.translation(links[0][2]) + '使用';
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: function (player) {
                            var num = 0;
                            var cards = player.getCards('h');
                            if (cards.length >= 3 && player.hp >= 3) return 0;
                            for (var i = 0; i < cards.length; i++) {
                                num += Math.max(0, get.value(cards[i], player, 'raw'));
                            }
                            num /= cards.length;
                            num *= Math.min(cards.length, player.hp);
                            return 12 - num;
                        }
                    },
                    threaten: 1.6,
                }
            },
            //李宇琪，AI测试OK
            haomai: {
                trigger: { source: 'damageBegin', player: 'damageBegin' },
                filter: function (event) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                },
                forced: true,
                content: function () {
                    trigger.num++;
                },
                ai: {
                    damageBonus: true
                }
            },
            //许佳琪,AI测试ok
            shengou: {
                usable: 1,
                trigger: { global: 'phaseUseBefore' },
                filter: function (event, player) {
                    return player.storage.shengou < 7 && event.player != player && player.countCards('h') > 0 && event.player.countCards('h') > 0;
                },
                check: function (event, player) {
                    return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
                },
                logTarget: function (event) {
                    return event.player;
                },
                init: function (player) {
                    player.storage.shengou = 0;
                },
                intro: {
                    content: 'mark'
                },
                mark: true,
                marktext: '钩',
                content: function (event, trigger) {
                    'step 0'
                    player.chooseToCompare(trigger.player);
                    'step 1'
                    if (result.bool) {
                        player.gainPlayerCard(get.prompt('shengou', event.player), trigger.player, get.buttonValue, 'he').set('logSkill', ['shengou', trigger.player]);
                    }
                    else {
                        player.storage.shengou++;
                        player.markSkill('shengou');
                        player.syncStorage('shengou');
                        game.addVideo('storage', player, ['shengou', player.storage.shengou]);
                        if (player.storage.shengou >= 7) {
                            player.unmarkSkill('shengou');
                        }
                        else {
                            player.draw();
                            player.loseHp();
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            var num = game.countPlayer(function (current) {
                                return get.attitude(player, current) < 0 && current != player && current.countCards('h');
                            });
                            if (num > 3) num = 3;
                            var hs = player.getCards('h');
                            for (var i = 0; i < hs.length; i++) {
                                if (get.value(hs[i]) <= 6) {
                                    switch (hs[i].number) {
                                        case 13: return -1;
                                        case 12: if (player.storage.shengou + num <= 8) return -1; break;
                                        case 11: if (player.storage.shengou + num <= 7) return -1; break;
                                        default: if (hs[i].number > 5 && player.storage.shengou + num <= 6) return -1;
                                    }
                                }
                            }
                            return 0;
                        },
                    }
                }
            },
            secret: {
                trigger: { player: 'phaseAfter' },
                direct: true,
                filter: function (event, player) {
                    return event.player != player;
                },
                content: function () {
                    "step 0"
                    player.chooseTarget(get.prompt('secret'), function (card, player, target) {
                        return player != target;
                    }).ai = function (target) {
                        if (target.hasSkillTag('noturn')) return 0;
                        return Math.max(0, -get.attitude(player, target) - 2);
                    };
                    "step 1"
                    if (result.bool) {
                        player.logSkill('secret', result.targets);
                        player.turnOver();
                        result.targets[0].turnOver();
                        game.asyncDraw([player, result.targets[0]], 2);
                    }
                },
            },
            meiren: {
                group: ['yingzi', 'biyue'],
                //锁定技
                forced: true
            },
            //吴哲晗,AI测试ok
            jiangshan: {
                audio: 2,
                trigger: { player: 'phaseDrawBefore' },
                content: function () {
                    "step 0"
                    //放弃摸牌
                    trigger.cancel();
                    "step 1"
                    //牌堆顶五张
                    event.cards = get.cards(5);
                    if (event.isMine() == false) {
                        event.dialog = ui.create.dialog('江山', event.cards);
                        game.delay(2);
                    }
                    "step 2"
                    if (event.dialog) event.dialog.close();
                    var dialog = ui.create.dialog('江山', event.cards);
                    player.chooseButton([0, 5], dialog, true).set('ai', function (button) {
                        return get.value(button.link);
                    }).filterButton = function (button) {
                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                            //不同花色
                            //if (get.suit(button.link) == get.suit(ui.selected.buttons[i].link)) return false;
                            //不同类型
                            if (get.type(button.link) == get.type(ui.selected.buttons[i].link)) return false;
                        }
                        return true;
                    }
                    "step 3"
                    var cards2 = [];
                    for (var i = 0; i < result.buttons.length; i++) {
                        cards2.push(result.buttons[i].link);
                        cards.remove(result.buttons[i].link);
                    }
                    player.gain(cards2, 'log');
                    if (cards2.length) player.$gain2(cards2);
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].discard();
                    }
                    game.delay(2);
                },
                ai: {
                    threaten: 1.2
                }
            },
            jiamian: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: 'huangguan',
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h', { suit: 'heart' }) > 0 &&
                        player.countCards('h', { suit: 'diamond' }) > 0 &&
                        player.countCards('h', { suit: 'spade' }) > 0 &&
                        player.countCards('h', { suit: 'club' }) > 0;
                },
                content: function () {
                    player.storage.huangguan = true;
                    player.maxHp--;
                    player.update();
                    player.recover();
                    if (player.hasSkill('jiamian')) {
                        //失去技能【预言】
                        //player.unmarkSkill('yuyan');
                        player.addSkill('huangguan');
                    }
                    else {
                        player.addAdditionalSkill('jiamian', 'huangguan');
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_jiamian = ['huangguan'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('jiamian');
                }
            },
            huangguan: {
                audio: 2,
                unique: true,
                usable: 1,
                enable: 'phaseUse',
                prompt: '弃置任意张手牌并指定不多于弃置手牌数的其他角色，造成弃牌数的伤害随机分配在这些角色上，随后你翻面（X为弃牌数量）',
                direct: true, position: 'h',
                filterCard: true,
                selectCard: [1, Infinity],
                content: function () {
                    'step 0'
                    player.storage.huangguanDamageCount = cards.length;
                    player.chooseTarget('选择角色随机造成' + player.storage.huangguanDamageCount + '点伤害', [1, player.storage.huangguanDamageCount])
                        .set('ai', function (target) {
                            return get.sgn(get.damageEffect(target, player, player));
                        });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('huangguan', result.targets);
                        if (result.targets.length == 1) {
                            result.targets[0].damage(player.storage.huangguanDamageCount);
                        } else {
                            var targetsDamage = new Array(player.storage.huangguanDamageCount);
                            for (var i = 0; i < player.storage.huangguanDamageCount; i++) {
                                var randomTarget = Math.floor(Math.random() * result.targets.length);//随机目标
                                targetsDamage[randomTarget] = targetsDamage[randomTarget] ? (++targetsDamage[randomTarget]) : 1;
                            }
                            for (var i = 0; i < player.storage.huangguanDamageCount; i++) {
                                if (targetsDamage[i]) {
                                    result.targets[i].damage(targetsDamage[i]);
                                }
                            }
                        }
                        player.turnOver();
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            return game.countPlayer(function (current) {
                                if (current != player) {
                                    return get.sgn(get.damageEffect(current, player, player));
                                }
                            });
                        }
                    }
                }
            },
            //徐子轩，AI测试OK
            longgong: {
                audio: 2,
                trigger: { player: 'phaseDiscardBegin' },
                direct: true,
                forced: true,
                frequent: true,
                content: function () {
                    player.draw(game.countPlayer(function (current) {
                        if (current.group == player.group)
                            return 1;
                    }))
                }
            },
            huangzi: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: ['jiangshan', 'shengou'],
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.hp * 10 <= player.maxHp * 5;
                },
                content: function () {
                    player.maxHp--;
                    player.update();
                    player.recover();
                    if (player.hasSkill('huangzi')) {
                        //失去技能【预言】
                        //player.unmarkSkill('yuyan');
                        player.addSkill('jiangshan');
                        player.addSkill('shengou');
                    }
                    else {
                        player.addAdditionalSkill('huangzi', ['jiangshan', 'shengou']);
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_huangzi = ['jiangshan', 'shengou'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('huangzi');
                }
            },
            luogod: {
                audio: 2,
                trigger: { player: 'phaseBegin' },
                frequent: true,
                content: function () {
                    "step 0"
                    if (event.cards == undefined) event.cards = [];
                    player.judge(function (card) {
                        if (get.color(card) == 'red') return 1.5;
                        return -1.5;
                    }, ui.special);
                    "step 1"
                    if (result.judge > 0) {
                        event.cards.push(result.card);
                        if (lib.config.autoskilllist.contains('luoshen')) {
                            player.chooseBool('是否再次发动【络神】？');
                        }
                        else {
                            event._result = { bool: true };
                        }
                    }
                    else {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.position(event.cards[i]) != 's') {
                                event.cards.splice(i, 1); i--;
                            }
                        }
                        player.gain(event.cards);
                        if (event.cards.length) {
                            player.$draw(event.cards);
                        }
                        event.finish();
                    }
                    "step 2"
                    if (result.bool) {
                        event.goto(0);
                    }
                    else {
                        player.gain(event.cards);
                        if (event.cards.length) {
                            player.$draw(event.cards);
                        }
                    }
                }
            },
            //刘增艳，AI测试ok
            tongyin: {
                unique: true,
                gainable: true,
                init: function (player) {
                    player.storage.tongyin = [];
                },
                intro: {
                    content: 'cards'
                },
                group: ['tongyin1', 'tongyin2', 'tongyin3', 'tongyin4', 'tongyin5'],
                ai: {
                    nodiscard: true,
                    nolose: true
                }
            },
            tongyin1: {
                //弃牌酒，获得之，自己弃牌不算
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    if (event.player == player)
                        return false;
                    if (event.cards && event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (event.cards[i].name == 'jiu' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        return event.cards[i].name == 'jiu' && get.position(event.cards[i]) == 'd'
                    }
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].name == 'jiu' && get.position(trigger.cards[i]) == 'd') {
                            player.storage.tongyin.push(trigger.cards[i]);
                        }
                    }
                    player.logSkill('tongyin');
                    player.syncStorage('tongyin');
                    player.markSkill('tongyin');
                },
            },
            tongyin2: {
                //判定牌为酒
                audio: 2,
                trigger: { global: 'judgeEdu' },
                frequent: 'check',
                check: function (event, player) {
                    return event.result.card.name == 'jiu';
                },
                filter: function (event, player) {
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    return (event.result.card.name == 'jiu' && get.position(event.result.card) == 'd');
                },
                content: function () {
                    if (player.storage.tongyin == undefined)
                        player.storage.tongyin = [];
                    player.logSkill('tongyin');
                    player.storage.tongyin.push(trigger.result.card);
                    player.syncStorage('tongyin');
                    player.markSkill('tongyin');
                }
            },
            tongyin3: {
                //使用9，自己用酒不算，且目标状态不是濒死
                trigger: { global: 'useCardAfter' },
                audio: 2,
                forced: true,
                filter: function (event, player) {
                    return event.card.name == 'jiu' && event.player != player && event.player.type != 'dying';
                },
                content: function (card) {
                    if (player.storage.tongyin == undefined)
                        player.storage.tongyin = [];
                    player.logSkill('tongyin');
                    player.storage.tongyin.push(trigger.card);
                    player.syncStorage('tongyin');
                    player.markSkill('tongyin');
                }
            },
            tongyin4: {
                audio: 2,
                unique: true,
                gainable: true,
                trigger: { global: 'dieEnd' },
                priority: 5,
                forced: true,
                filter: function (event) {
                    //有弃牌
                    return event.playerCards && event.playerCards.filter(card => card.name == 'jiu').length > 0
                },
                check: function (event) {
                    return event.playerCards.filter(card => card.name == 'jiu').length > 0;
                },
                content: function () {
                    "step 0"
                    if (player.storage.tongyin == undefined)
                        player.storage.tongyin = [];
                    game.delay(2);
                    "step 1"
                    var cards = trigger.playerCards.filter(card => card.name == 'jiu' && get.position(card) == 'd');
                    for (var i = 0; i < trigger.playerCards.length; i++) {
                        if (trigger.playerCards[i].name == 'jiu' && get.position(trigger.playerCards[i]) == 'd') {
                            player.storage.tongyin.push(cards[i]);
                            trigger.cards.remove(trigger.playerCards[i]);
                        }
                    }
                    player.logSkill('tongyin');
                    player.syncStorage('tongyin');
                    player.markSkill('tongyin');
                    trigger.playerCards.length = 0;
                }
            },
            tongyin5: {
                audio: 2,
                trigger: { global: ['chooseToCompareAfter', 'compareMultipleAfter'] },
                frequent: true,
                forced: true,
                filter: function (event, player) {
                    return event.card2.name == 'jiu' || event.card1.name == 'jiu';
                },
                check: function (event, player) {
                    return event.card2.name == 'jiu' || event.card1.name == 'jiu';
                },
                content: function () {
                    'step 0'
                    game.delay(2);
                    'step 1'
                    if (trigger.card1.name == 'jiu' && get.position(trigger.card1) == 'd') {
                        player.storage.tongyin.push(trigger.card1);
                    }
                    if (trigger.card2.name == 'jiu' && get.position(trigger.card2) == 'd') {
                        player.storage.tongyin.push(trigger.card2);
                    }
                    player.logSkill('tongyin');
                    player.syncStorage('tongyin');
                    player.markSkill('tongyin');
                }
            },
            ganbei: {
                enable: 'chooseToUse',
                filter: function (event, player) {
                    return event.type == 'dying' && event.dying && event.dying.hp <= 0 && player.storage.tongyin.length > 0;
                },
                filterTarget: function (card, player, target) {
                    return target == _status.event.dying;
                },
                check: function () {
                    return player.storage.tongyin.length > 0;
                },
                direct: true,
                delay: 0,
                selectTarget: -1,
                content: function () {
                    "step 0"
                    player.chooseCardButton(get.translation('ganbei'), player.storage.tongyin, true)
                        .set('ai', function (button) {
                            return button.link == 0
                        });
                    "step 1"
                    if (result.bool) {
                        player.logSkill('ganbei');
                        player.$throw(result.links);
                        player.storage.tongyin.remove(result.links[0]);

                        player.syncStorage('tongyin');
                        target.recover();

                        game.broadcastAll(function (target, card, gain2) {
                            player.addAdditionalSkill('kele', ['kele']);
                            if (!player.node.kele) {
                                player.node.kele = ui.create.div('.playerkele', player.node.avatar);
                                player.node.kele2 = ui.create.div('.playerkele', player.node.avatar2);
                            }
                        }, target, card, target == targets[0]);
                    }
                },
                ai: {
                    order: 6,
                    skillTagFilter: function (player) {
                        return player.storage.tongyin.length > 0;
                    },
                    save: true,
                    result: {
                        target: 3
                    },
                    threaten: 1.6
                },
            },
            yonglie: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return player.storage.tongyin.length > 0;
                },
                content: function () {
                    'step 0'
                    player.chooseTarget('选择角色随机造成' + player.storage.tongyin.length + '点伤害', [1, 3], function (target) {
                        return target != player
                    }).set('ai', function (target) {
                        return get.sgn(get.damageEffect(target, player, player));
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('yonglie', result.targets);
                        if (result.targets.length == 1) {
                            result.targets[0].damage(player.storage.tongyin.length);
                        } else {
                            var targetsDamage = new Array(result.targets.length);

                            for (var i = 0; i < player.storage.tongyin.length; i++) {
                                var randomTarget = Math.floor(Math.random() * result.targets.length);//随机目标
                                targetsDamage[randomTarget] = targetsDamage[randomTarget] ? (++targetsDamage[randomTarget]) : 1;
                            }
                            for (var i = 0; i < targetsDamage.length; i++) {
                                if (targetsDamage[i]) {
                                    result.targets[i].damage(targetsDamage[i]);
                                }
                            }
                        }
                        player.storage.tongyin = [];
                        player.syncStorage('tongyin');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            return game.countPlayer(function (current) {
                                if (current != player) {
                                    return get.sgn(get.damageEffect(current, player, player));
                                }
                            });
                        }
                    }
                }
            },
            kele: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                forced: true,
                content: function () {
                    trigger.num++;
                },
                temp: true,
                vanish: true,
                onremove: function (player) {
                    if (player.node.kele) {
                        player.node.kele.delete();
                        player.node.kele2.delete();
                        delete player.node.kele;
                        delete player.node.kele2;
                    }
                },
                ai: {
                    damageBonus: true
                },
                group: 'kele2'
            },
            kele2: {
                trigger: { player: 'useCardAfter', player: 'phaseAfter' },
                priority: 2,
                filter: function (event) {
                    if (event.name == 'useCard') return (event.card && (event.card.name == 'sha'));
                    return true;
                },
                forced: true,
                popup: false,
                audio: false,
                content: function () {
                    game.broadcastAll(function (player) {
                        if (player.node.kele) {
                            player.node.kele.delete();
                            player.node.kele2.delete();
                            delete player.node.kele;
                            delete player.node.kele2;
                        }
                        player.removeAdditionalSkill('kele');
                    }, player);
                },
            },
            //邱欣怡，AI测试OK
            meixi: {
                audio: 2,
                group: ['meixi2', 'baiyin_skill']
            },
            meixi2: {
                trigger: { player: 'equipBegin' },
                forced: true,
                frequent: true,
                filter: function (event) {
                    //没有装备防具时
                    if (event.player.countCards('e', function (card) {
                        return get.subtype(card) == 'equip2'
                    }) == 0)
                        //装备防具，触发
                        return get.subtype(event.card) == 'equip2';
                    return false;
                },
                content: function () {
                    player.recover();
                },
                threaten: 1.3
            },
            nvwang: {
                trigger: { source: 'damageBefore' },
                filter: function (event, player) {
                    return event.player.maxHp > 2 && event.card && event.card.name == 'sha';
                },
                logTarget: 'player',
                check: function (event, player) {
                    if (event.player.maxHp <= 2) return false;
                    return true;
                },
                content: function () {
                    if (trigger.player.maxHp > 1) {
                        'step 0'
                        if (trigger.player.countCards('he')) {
                            trigger.player.chooseControl(function (event, player) {
                                if (player.maxHp == player.hp && player.countCards('e', { type: 'equip' }) > 0) return 0;
                                if (player.maxHp > player.hp && player.maxHp > 1 && player.countCards('he', { type: 'equip' }) > 0) return 1;
                                return 2;
                            }).set('choiceList', ['防止伤害，弃置装备区内的所有牌并失去1点体力', '防止伤害，弃置一张装备牌并失去1点体力上限', '失去1点体力上限，然后伤害照常计算']);
                        }
                        else {
                            event._result = { index: 2 };
                        }
                        'step 1'
                        switch (result.index) {
                            case 0:
                                //弃置装备区内的所有牌并失去1点体力
                                trigger.cancel();
                                trigger.player.discard(trigger.player.getCards('e'));
                                trigger.player.loseHp();
                                break;
                            case 1:
                                //弃置一张装备牌并失去1点体力上限
                                trigger.cancel();
                                trigger.player.discard(1, function (card) {
                                    return get.type(card) == 'equip'
                                });
                                --trigger.player.maxHp;
                                break;
                            default:
                            case 2:
                                --trigger.player.maxHp;
                                break;
                        }
                        'step 2'
                        trigger.player.update();
                    }
                },
                ai: {
                    jueqing: true
                }
            },
            laydown: {
                trigger: { player: 'shaBegin' },
                priority: 5,
                audio: true,
                logTarget: 'target',
                filter: function (event, player) {
                    if (get.is.guozhanMode())
                        return true;
                    return event.target.sex == 'male'
                },
                content: function () {
                    "step 0"
                    trigger.target.chooseToDiscard('弃置一张手牌，或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                        var trigger = _status.event.getTrigger();
                        return -get.attitude(trigger.target, trigger.player) - get.value(card);
                    });
                    "step 1"
                    if (result.bool == false) player.draw();
                }
            },
            //潘燕琦,AI测试OK
            tongxin: {
                //除你之外每当有角色受到伤害时，你可对伤害来源进行一次判定，若为黑色，视为你对其造成X点雷属性伤害；若为红色，视为你对其造成X点火属性伤害，然后再进行一次判定，若为黑色，失去1点体力，若为红色，弃1张牌。（X为受到的伤害值）
                audio: 4,
                trigger: { global: 'damageEnd' },
                filter: function (event, player) {
                    if (event.source == player || event.player == player)
                        return false;
                    if (event.source.hasSkill('muwang'))
                        return false;
                    return true;
                },
                check: function (event, player) {
                    var att1 = get.attitude(player, event.player);
                    var att2 = get.attitude(player, event.source);
                    return att1 > 0 && att2 <= 0;
                },
                logTarget: 'source',
                content: function () {
                    "step 0"
                    trigger.source.judge();
                    "step 1"
                    switch (get.color(result.card)) {
                        case 'black':
                            trigger.source.damage(trigger.num, 'thunder')
                            break;
                        default:
                        case 'red':
                            trigger.source.damage(trigger.num, 'fire')
                            break;
                    }
                    'step 2'
                    player.judge();
                    'step 3'
                    switch (get.color(result.card)) {
                        case 'black':
                            player.loseHp();
                            break;
                        default:
                        case 'red':
                            if (player.countCards('he') > 0)
                                player.chooseToDiscard('he', 1, true).set('ai', function (card) {
                                    return 9 - get.value(card);
                                })
                            break;
                    }
                },
                ai: {
                    damage: true,
                    order: 8,
                }
            },
            dedication: {
                audio: 2,
                trigger: { player: 'dieBegin' },
                direct: true,
                content: function () {
                    "step 0"
                    player.chooseTarget(get.prompt('dedication'), 1, function (card, player, target) {
                        return player != target && _status.event.source != target;
                    }).set('ai', function (target) {
                        var num = get.attitude(_status.event.player, target);
                        if (num > 0) {
                            if (target.hp == 1) {
                                num += 2;
                            }
                            if (target.hp < target.maxHp) {
                                num += 2;
                            }
                        }
                        return num;
                    }).set('source', trigger.source);
                    "step 1"
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('dedication', result.targets);
                        target.recover();
                        target.draw(Math.min(5, target.maxHp) - target.countCards('h'));
                        target.addAdditionalSkill('dedication', ['tongxin']);
                    }
                },
                ai: {
                    expose: 0.5,
                }
            },
            //钱蓓婷，AI测试ok
            juxia: {
                audio: 2,
                trigger: { player: 'useCard' },
                frequent: true,
                forced: true,
                init: function (player) {
                    player.storage.juxia = [];
                },
                intro: {
                    content: 'cards'
                },
                filter: function (event) {
                    return event.card && get.type(event.card) == 'trick';
                },
                content: function () {
                    'step 0'
                    player.judge();
                    'step 1'
                    if (get.suit(result.card) != 'heart') {
                        if (player.storage.juxia == undefined)
                            player.storage.juxia = [];
                        player.logSkill('juxia');
                        player.storage.juxia.push(trigger.card);
                        player.syncStorage('juxia');
                        player.markSkill('juxia');
                    }
                },
                ai: {
                    threaten: 1.4,
                    noautowuxie: true,
                },
                group: 'juxia2'
            },
            juxia2: {
                audio: 2,
                trigger: { player: 'phaseDiscardBefore' },
                direct: true,
                forced: true,
                filter: function (event, player) {
                    return player.storage.juxia.length > player.countCards('h');
                },
                content: function () {
                    trigger.cancel();
                }
            },
            qiangong: {
                //觉醒技，回合开始阶段，若你手牌数小于虾，你加1点体力上限并回复1点体力，然后获得技能【成塔】。
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: 'chengta',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h') < player.storage.juxia.length;
                },
                content: function () {
                    player.maxHp--;
                    player.update();
                    player.recover();
                    if (player.hasSkill('qiangong')) {
                        player.addSkill('chengta');
                    }
                    else {
                        player.addAdditionalSkill('qiangong', 'chengta');
                    }
                    event.trigger('zhuUpdate');
                    player.awakenSkill('qiangong');
                }
            },
            chengta: {
                enable: 'chooseToUse',
                usable: 2,
                filter: function (event, player) {
                    return player.storage.juxia.length > 0;
                },
                chooseButton: {
                    dialog: function (event, player) {
                        return ui.create.dialog('虾塔', player.storage.juxia, 'hidden');
                    },
                    filter: function (button, player) {
                        var evt = _status.event.getParent();
                        if (evt && evt.filterCard) {
                            return evt.filterCard(button.link, player, evt);
                        }
                        return true;
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                            if (get.tag(button.link, 'multitarget')) return -1;
                            if (button.link.name == 'huoshaolianying') return -1;
                        }
                        return 1;
                    },
                    backup: function (links, player) {
                        return {
                            filterCard: function () { return false },
                            selectCard: -1,
                            viewAs: links[0],
                            onuse: function (result, player) {
                                player.storage.juxia.remove(result.card);
                                player.syncStorage('juxia');
                                player.logSkill('chengta', result.targets);
                                if (!player.storage.juxia.length) {
                                    player.unmarkSkill('juxia');
                                } else {
                                    player.markSkill('juxia');
                                }
                            }
                        }
                    },
                    prompt: function (links, player) {
                        return '选择' + get.translation(links) + '的目标';
                    }
                },
                ai: {
                    order: 4,
                    result: {
                        player: function (player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        }
                    },
                    useful: -1,
                    value: -1
                }
            },
            //邵雪聪,AI测试ok
            yibing: {
                trigger: { player: 'damageBefore' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h') <= 1 && !event.nature;
                },
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    nofire: false,
                    nothunder: false,
                    effect: {
                        target: function (card, player, target, current) {
                            if (!get.tag(card, 'natureDamage'))
                                return 'zerotarget';
                        }
                    }
                }
            },
            tianpin: {
                audio: 2,
                enable: 'phaseUse',
                filterCard: true,
                usable: 1,
                check: function (card) {
                    return 9 - get.value(card)
                },
                filterTarget: function (card, player, target) {
                    return target.hp < target.maxHp || target.countCards('j') > 0;
                },
                content: function () {
                    target.recover();
                    if (target.countCards('j') > 0)
                        player.discardPlayerCard(target, 1, 'j');
                    if (player == target && player.countCards('h') > 1)
                        player.chooseToDiscard(true, 'h').set('ai', function (card) {
                            return 9 - get.value(card)
                        });
                },
                ai: {
                    order: 9,
                    result: {
                        target: function (player, target) {
                            if (target.hp == 1) return 5;
                            if (player == target && player.countCards('h') > player.hp)
                                return 5;
                            return 2;
                        }
                    },
                    threaten: 2
                }
            },
            jiaozhu: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                direct: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'h') return true;
                    }
                    return false;
                },
                init: function (player) {
                    player.storage.jiaozhu = 0;
                },
                content: function () {
                    "step 0"
                    player.chooseControl('摸牌', '弃牌').set('ai', function (event) {
                        //永远都为自己着想的AI
                        return 0
                    });
                    "step 1"
                    player.storage.jiaozhu = result.index;
                    var num = 0;
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].original == 'h') num++;
                    }
                    player.chooseTarget('选择受影响的目标', [1, num]).ai = function (target) {
                        var player = _status.event.player;
                        if (player == target) return get.attitude(player, target) + 10;
                        return get.attitude(player, target);
                    }
                    "step 2"
                    if (result.bool) {
                        switch (player.storage.jiaozhu) {
                            case 1:
                                for (var i = 0; i < result.targets.length; i++) {
                                    result.targets[i].chooseToDiscard('he', 1, true).set('ai', function (card) {
                                        return 9 - get.value(card)
                                    })
                                }
                                break;
                            case 0:
                            default:
                                player.logSkill('relianying', result.targets);
                                game.asyncDraw(result.targets);
                        }
                    }
                },
                ai: {
                    threaten: 0.8,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                        }
                    },
                    noh: true,
                }
            },
            //徐伊人，AI测试OK
            tisu: {
                trigger: { player: 'shaMiss' },
                forced: true,
                direct: true,
                init: function (player) {
                    player.storage.sudu = 0;
                },
                intro: {
                    content: 'mark'
                },
                mark: true,
                marktext: '速',
                filter: function (event, player) {
                    return player.canUse('sha', event.target) && player.hasSha();
                },
                prompt: '额外对其使用一张杀',
                content: function () {
                    player.storage.sudu++;
                    player.syncStorage('sudu');
                    game.addVideo('storage', player, ['sudu', player.storage.sudu]);
                    player.chooseToUse(get.prompt('tisu'), { name: 'sha' }, trigger.target, -1).set('addCount', true).logSkill = 'tisu';
                }, group: ['tisu2', 'tisu3']
            },
            tisu2: {
                trigger: { source: 'damageBegin' },
                filter: function (event, player) {
                    return player.storage.sudu > 0 && event.card && event.card.name == 'sha' && event.notLink();
                },
                forced: true,
                content: function (player) {
                    trigger.num += player.storage.sudu;
                    player.storage.sudu = 0;
                    player.syncStorage('sudu');
                    game.addVideo('storage', player, ['sudu', player.storage.sudu]);
                },
                ai: {
                    damageBonus: true
                },
            },
            tisu3: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                frequent: true,
                direct: true,
                content: function (player) {
                    player.storage.sudu = 0;
                    game.addVideo('storage', player, ['sudu', player.storage.sudu]);
                }
            },
            fenfa: {
                //其他角色弃牌杀，获得之
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    //自己弃的不算
                    if (event.player == player)
                        return false;
                    if (event.cards && event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (event.cards[i].name == 'sha' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].name == 'sha' && get.position(event.cards[i]) == 'd')
                            return true;
                    }
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].name == 'sha' && get.position(trigger.cards[i]) == 'd') {
                            cards.push(trigger.cards[i]);
                        }
                    }
                    if (cards.length) {
                        player.gain(cards, 'log');
                        player.$gain2(cards);
                    }
                },
            },
            //袁丹妮，AI测试OK
            complement: {
                usable: 1,
                trigger: { global: 'damageEnd' },
                filter: function (event, player) {
                    //修复补刀能鞭尸的BUG：死了就别鞭尸了。。。
                    return event.player != player && event.player.hp > 0 &&
                        event.player.classList.contains('dead') == false &&
                        player.countCards('h', { name: 'sha' }) > 0
                },
                content: function (event) {
                    player.chooseToUse('对' + get.translation(trigger.player.name) + '使用杀', { name: 'sha' }, trigger.player, -1)
                        .set('addCount', false).logSkill = 'complement';
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            kuxuan: {
                audio: true,
                trigger: { player: 'phaseDrawBefore' },
                check: function (event, player) {
                    return true;
                },
                content: function () {
                    "step 0"
                    player.judge(ui.special);
                    "step 1"
                    player.gain(result.card);
                    player.$gain2(result.card);
                    player.addTempSkill('kuxuan2');
                    player.storage.kuxuan = get.color(result.card);
                    //trigger.cancel();
                }
            },
            kuxuan2: {
                filterCard: function (card, player) {
                    return get.color(card) == player.storage.kuxuan;
                },
                mod: {
                    cardEnabled: function (card, player) {
                        return true
                    },
                    cardUsable: function (card, player) {
                        return true
                    },
                    cardRespondable: function (card, player) {
                        return true
                    }
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                viewAs: { name: 'sha' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', { color: player.storage.kuxuan })) return false;
                },
                check: function () { return 1 },
                ai: {
                    skillTagFilter: function (player) {
                        if (!player.countCards('h', { color: player.storage.kuxuan })) return false;
                    },
                    respondSha: true,
                    useful: -1,
                    order: 4,
                    value: -1
                }
            },
            //赵韩倩，AI测试OK
            kuaiyan: {
                //选择一名其他角色进行一次判定，若结果为黑色，其受到1点雷属性伤害
                usable: 1,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    return player != target && !target.hasSkill('muwang');
                },
                selectTarget: 1,
                content: function (event) {
                    'step 0'
                    event.target.judge();
                    'step 1'
                    if (get.color(result.card) == 'black')
                        event.target.damage(1, 'thunder')
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            return game.countPlayer(function (current) {
                                if (current != player && get.attitude(player, current) > 0) {
                                    return get.sgn(get.damageEffect(current, player, player));
                                }
                            });
                        }
                    }
                }
            },
            innocence: {
                unique: true,
                gainable: true,
                group: ['innocence1', 'innocence2'],
            },
            innocence1: {
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    if (event.player == player) return false;
                    if (event.cards && event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.suit(event.cards[i]) == 'diamond' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                frequent: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.suit(event.cards[i]) == 'diamond' && get.position(event.cards[i]) == 'd') {
                            if (event.cards[i].name == 'du') return false;
                        }
                    }
                    return true;
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (get.suit(trigger.cards[i]) == 'diamond' && get.position(trigger.cards[i]) == 'd') {
                            cards.push(trigger.cards[i]);
                        }
                    }
                    if (cards.length) {
                        player.gain(cards, 'log');
                        player.$gain2(cards);
                    }
                },
            },
            innocence2: {
                audio: 2,
                trigger: { global: 'judgeAfter' },
                forced: true,
                frequent: true,
                check: function (event, player) {
                    return event.result.card.name != 'du';
                },
                filter: function (event, player) {
                    if (event.player == player) return false;
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    return (get.suit(event.result.card) == 'diamond');
                },
                content: function () {
                    player.gain(trigger.result.card, 'log');
                    player.$gain2(trigger.result.card);
                }
            },
            //温晶婕，AI测试OK
            talent: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('h') > 0;
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                selectTarget: 1,
                content: function () {
                    'step 0'
                    player.chooseToCompare(target);
                    'step 1'
                    if (result.bool) {
                        //拼点获胜，选择弃其两张牌或你对其造成1点伤害
                        target.chooseControl('弃置两张牌', '受到1点伤害').set('ai', function (event, target) {
                            return target.countCards('he') >= 2 ? 0 : 0
                        });
                    }
                    else {
                        //没赢跳过出牌阶段
                        var evt = _status.event.getParent('phaseUse');
                        if (evt && evt.name == 'phaseUse') {
                            evt.skipped = true;
                        }
                        event.finish();
                    }
                    'step 2'
                    switch (result.index) {
                        case 0:
                            target.chooseToDiscard('he', 2, true).set('ai', function (card) {
                                return 9 - get.value(card)
                            });
                            break;
                        case 1:
                        default:
                            target.damage(1);
                            break;
                    }
                },
                ai: {
                    order: 2.8,
                    result: {
                        player: function (player, target) {
                            if (get.attitude(player, target) < 0 && player.hasCard(function (card) {
                                return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
                            })) {
                                return get.sgn(get.damageEffect(target, player, player));
                            }
                            else {
                                return 0;
                            }
                        }
                    },
                    threaten: 1.3
                },
            },
            wenhe: {
                audio: 2,
                trigger: { global: 'judge' },
                filter: function (event, player) {
                    return player.countCards('he') > 0;
                },
                direct: true,
                content: function () {
                    "step 0"
                    player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                        get.translation(trigger.player.judging[0]) + '，' + get.prompt('wenhe'), 'he', function (card) {
                            return true
                        }).set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) return 0;
                            if (attitude > 0) {
                                return result;
                            }
                            else {
                                return -result;
                            }
                        }).set('judging', trigger.player.judging[0]);
                    "step 1"
                    if (result.bool) {
                        player.respond(result.cards, 'highlight');
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.bool) {
                        player.logSkill('wenhe');
                        //花色一样，获得原判定牌
                        if (get.suit(trigger.player.judging[0]) == get.suit(result.cards[0])) {
                            player.$gain2(trigger.player.judging[0]);
                            player.gain(trigger.player.judging[0]);
                        }
                        //替换判定牌
                        trigger.player.judging[0] = result.cards[0];
                        if (!get.owner(result.cards[0], 'judge')) {
                            trigger.position.appendChild(result.cards[0]);
                        }
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    "step 3"
                    game.delay(2);
                },
                ai: {
                    tag: {
                        rejudge: 1
                    }
                }
            },
            //张语格，AI测试ok
            guayan: {
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (get.type(card) == 'delay')
                            return false;
                    },
                    targetInRange: function (card, player, target, now) {
                        var type = get.type(card);
                        if (type == 'trick')
                            return true;
                    }
                },
            },
            xuanmu: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                check: function (event, player) {
                    if (player.isTurnedOver()) return true;
                    var num = game.countPlayer(function (current) {
                        if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                            return true;
                        }
                        if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                            return true;
                        }
                    });
                    return num >= 2;
                },
                content: function () {
                    "step 0"
                    var targets = game.filterPlayer();
                    targets.remove(player);
                    targets.sort(lib.sort.seat);
                    event.targets = targets;
                    event.num = 0;
                    player.line(targets, 'green');
                    "step 1"
                    if (num < event.targets.length) {
                        var hej = event.targets[num].getCards('hej')
                        if (hej.length) {
                            var card = hej.randomGet();
                            player.gain(card, event.targets[num]);
                            if (get.position(card) == 'h') {
                                event.targets[num].$giveAuto(card, player);
                            }
                            else {
                                event.targets[num].$give(card, player);
                            }
                        }
                        event.num++;
                        event.redo();
                    }
                    "step 2"
                    player.turnOver();
                },
                ai: {
                    maixie: false,
                    maixie_hp: false,
                    threaten: function (player, target) {
                        if (target.hp == 1) return 2.5;
                        return 1;
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                //if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (target.hp == 1) return 0.8;
                                if (target.isTurnedOver()) return [0, 3];
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                if (num > 2) return [0, 1];
                                if (num == 2) return [0.5, 1];
                            }
                        }
                    }
                }
            },
            //沈之琳，AI测试OK
            zanmei: {
                audio: 2,
                trigger: { player: 'phaseDrawBegin' },
                content: function () {
                    'step 0'
                    player.chooseTarget('选择一个角色摸一张牌', 1, function (target) {
                        return target != player;
                    }).set('ai', function (target) {
                        return get.attitude(player, target) > 0
                    })
                    'step 1'
                    if (result.bool) {
                        //少摸一张
                        trigger.num--;
                        result.targets[0].draw();
                    }
                }
            },
            luanyin: {
                group: ['ganlu', 'dimeng']
            },
            luansheng: {
                trigger: { player: 'gainEnd' },
                forced: true,
                frequent: true,
                usable: 1,
                content: function () {
                    'step 0'
                    player.judge();
                    'step 1'
                    if (get.color(result.card) == 'red')
                        player.draw();
                },
                group: 'luansheng2'
            },
            luansheng2: {
                trigger: { player: 'turnOverAfter' },
                forced: true,
                frequent: true,
                content: function () {
                    player.chooseToDiscard('hej', 1).set('ai', function (card) {
                        if (card.name == 'tao') return -10;
                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                    });
                }
            },
            //孙芮，AI测试OK
            qigai: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    //若你手牌数大于你当前体力值
                    return player.countCards('h') > player.hp;
                },
                //selectTarget: 1,
                //filterTarget: function (card, player, target) {
                //    return player != target;
                //},
                position: 'h',
                filterCard: true,
                selectCard: function () {
                    var player = _status.event.player;
                    return player.countCards('h') - player.hp;
                },
                content: function (target) {
                    //选target发动技能
                    'step 0'
                    player.chooseTarget(get.prompt('qigai'), 1, function (card, player, target) {
                        return player != target;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        //多1张牌  并且  目标没有牌
                        if (player.countCards('h') - player.hp == 1 && target.countCards('he') == 0) {
                            return 0;
                        }
                        if (get.attitude(_status.event.player, target) > 0) {
                            return 10 + get.attitude(_status.event.player, target);
                        }
                        //多1张牌不发动
                        if (player.countCards('h') - player.hp == 1) {
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if (result.bool) {
                        event.num = cards.length + 1;

                        player.logSkill('qigai', result.targets);
                        event.target = result.targets[0];

                        var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                        var str2 = '摸一弃' + get.cnNumber(event.num, true) + '，或受到' + event.num / 2 + '点伤害';
                        player.chooseControl(str1, str2, function (event, player) {
                            return _status.event.choice;
                        }).set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                        event.str = str1;
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.control == event.str) {
                        event.target.draw(event.num);
                        event.target.chooseToDiscard(true, 'he').set('ai', function (card) {
                            return 9 - get.value(card)
                        });;
                        event.finish();
                    }
                    else {
                        //选项2
                        event.target.draw();
                        event.target.chooseControl().set('choiceList', ['弃' + event.num + '张牌', '受到' + event.num / 2 + '点伤害'], function () {
                            return target.countCards('he') >= event.num ? 0 : 1
                        }).set('ai', function () {
                            return target.countCards('he') >= event.num ? 0 : 1;
                        });
                    }
                    'step 3'
                    switch (result.index) {
                        case 0:
                            target.chooseToDiscard(event.num, 'he', true).set('ai', function (card) {
                                return 9 - get.value(card);
                            });
                            break;
                        default:
                        case 1:
                            target.damage(Math.ceil(event.num / 2));
                            break;
                    }
                },
                ai: {
                    threaten: function (player, target) {
                        if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                        if (target.hp == target.maxHp) return 0.5;
                        if (target.hp == 2) return 1.5;
                        return 0.5;
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (target.maxHp <= 3) return;
                            if (get.tag(card, 'damage')) {
                                if (target.hp == target.maxHp) return [0, 1];
                            }
                            if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                        }
                    }
                }
            },
            rexin: {
                //弃牌结束选一张牌的颜色，颜色一样的返回手牌，不一样的获得之
                audio: 2,
                unique: true,
                gainable: true,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    if (event.player != player &&
                        event.player.classList.contains('dead') == false &&
                        event.cards && event.cards.length &&
                        event.getParent(2).name == 'phaseDiscard') {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.position(event.cards[i]) == 'd')
                                return true;
                        }
                        return false;
                    }
                    return false;
                },
                checkx: function (event, player) {
                    var du = false;
                    var num = 0;
                    //弃牌多少，弃牌有毒
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.position(event.cards[i]) == 'd') {
                            num++;
                            if (event.cards[i].name == 'du') {
                                du = true;
                            }
                        }
                    }
                    //友方弃毒不回收
                    if (get.attitude(player, event.player) > 0) {
                        if (du && num <= 3) {
                            return false;
                        }
                        return true;
                    }
                    if (du) return true;
                    return num > 2;
                },
                direct: true,
                content: function () {
                    "step 0"
                    event.cards = trigger.cards.slice(0);
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.position(event.cards[i]) != 'd') {
                            event.cards.splice(i, 1); i--;
                        }
                    }
                    if (event.cards.length == 0) {
                        event.finish();
                        return;
                    }
                    var check = lib.skill.guzheng.checkx(trigger, player);
                    player.chooseCardButton(event.cards, '热心：选择令' + get.translation(trigger.player) + '收回的牌')
                        .set('ai', function (button) {
                            if (_status.event.check) {
                                return 20 - get.value(button.link);
                            }
                            return 0;
                        }).set('check', check);
                    "step 1"
                    if (result.bool) {
                        game.delay(0.5);
                        player.logSkill('rexin', trigger.player);

                        //同花色回收
                        var backCards = event.cards.filter(f => get.color(f) == get.color(result.links[0]));
                        //不同花色获得
                        var gainCards = event.cards.filter(f => get.color(f) != get.color(result.links[0]));

                        trigger.player.gain(backCards);
                        trigger.player.$gain2(backCards);
                        game.log(trigger.player, '收回了', backCards);

                        //event.cards.remove(result.links[0]);

                        if (gainCards.length) {
                            player.gain(gainCards);
                            player.$gain2(gainCards);
                            game.log(player, '获得了', gainCards);
                        }
                        game.delay();
                    }
                },
                ai: {
                    threaten: 1.3,
                    expose: 0.2
                }
            },
            //徐晨辰，AI测试OK
            qiangyin: {
                audio: 2,
                usable: 1,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('hej') > 0;
                },
                selectTarget: 1,
                content: function (target) {
                    'step 0'
                    player.discardPlayerCard(get.prompt('qiangyin'), 'hej', target, Math.min(2, target.countCards('hej')), true);
                    'step 1'
                    player.loseHp();
                },
                //ai: {
                //    order: 10,
                //    result: {
                //        player: function (player) {
                //            return game.countPlayer(function (current) {
                //                if (current != player) {
                //                    //为反时，主-8，忠-7，内-2，反5，未知0
                //                    console.log(current + ":" + get.attitude(player, current))
                //                    return get.attitude(player, current) < 0;
                //                    //为忠时，主10，忠4，内1，反-8，未知0
                //                }
                //            });
                //        }
                //    }
                //}
                ai: {
                    basic: {
                        order: 9,
                        useful: 1,
                        value: 5,
                    },
                    result: {
                        target: function (player, target) {
                            var att = get.attitude(player, target);
                            var nh = target.countCards('h');
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                        return 2;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() &&
                                    get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                    if (target.hp == 2) return 0.01;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = (es.length == 0 || target.hasSkillTag('noe'));
                            var noe2 = (es.length == 1 && es[0].name == 'baiyin' && target.isDamaged());
                            var noh = (nh == 0 || target.hasSkillTag('noh'));
                            if (noh && (noe || noe2)) return 0;
                            if (att <= 0 && !target.countCards('he')) return 1.5;
                            return -1.5;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1
                    }
                }
            },
            jinwu: {
                //结束阶段，若你区域内的牌数之和大于等于当前体力值，你回复1点体力。（华丽的舞姿不仅优美而且快~活）
                audio: 2,
                trigger: { player: 'phaseEnd' },
                forced: true,
                frequent: true,
                filter: function (event, player) {
                    return player.countCards('ej') >= player.hp
                },
                content: function () {
                    player.recover();
                }
            },
            chengshu: {
                //你与所有体力值大于你的角色距离 + 1，与所有手牌数少于你的角色距离 - 1
                mod: {
                    globalFrom: function (from, to, distance) {
                        //进攻距离
                        if (from.countCards('h') > to.countCards('h'))
                            return distance - 1;
                        else
                            return distance;
                    },
                    globalTo: function (from, to, distance) {
                        //防御距离
                        if (from.hp > to.hp)
                            return distance + 1;
                        else
                            return distance;
                    }
                }
            },
            //袁雨桢，AI测试ok
            ganxing: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('he') > 0;
                },
                content: function () {
                    "step 0"
                    player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                        switch (Math.floor(Math.random() * 6)) {
                            case 1:
                            case 4:
                            case 0: return 'heart2';
                            case 5: return 'diamond2';
                            case 2: return 'club2';
                            case 3: return 'spade2';
                        }
                    });
                    "step 1"
                    game.log(player, '选择了' + get.translation(result.control));
                    "step 2"
                    event.videoId = lib.status.videoId++;
                    //目标所有手牌+所有装备牌
                    var cards = target.getCards('he');
                    if (player.isOnline2()) {
                        player.send(function (cards, id) {
                            ui.create.dialog('感性', cards).videoId = id;
                        }, cards, event.videoId);
                    }
                    event.dialog = ui.create.dialog('感性', cards);
                    event.dialog.videoId = event.videoId;
                    if (!event.isMine()) {
                        event.dialog.style.display = 'none';
                    }
                    player.chooseButton().set('filterButton', function (button) {
                        return get.suit(button.link) + '2' == result.control;
                    }).set('dialog', event.videoId);
                    "step 3"
                    if (result.bool) {
                        event.card = result.links[0];
                        var func = function (card, id) {
                            var dialog = get.idDialog(id);
                            if (dialog) {
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.buttons[i].link == card) {
                                        dialog.buttons[i].classList.add('selectedx');
                                    }
                                    else {
                                        dialog.buttons[i].classList.add('unselectable');
                                    }
                                }
                            }
                        }
                        if (player.isOnline2()) {
                            player.send(func, event.card, event.videoId);
                        }
                        else if (event.isMine()) {
                            func(event.card, event.videoId);
                        }
                        player.chooseControl('ganxing_discard');
                    }
                    else {
                        if (player.isOnline2()) {
                            player.send('closeDialog', event.videoId);
                        }
                        event.dialog.close();
                        event.finish();
                    }
                    "step 4"
                    if (player.isOnline2()) {
                        player.send('closeDialog', event.videoId);
                    }
                    event.dialog.close();
                    target.discard(event.card);
                    event.finish();
                },
                ai: {
                    threaten: 1.5,
                    result: {
                        target: function (player, target) {
                            return -target.countCards('h');
                        }
                    },
                    order: 10,
                    expose: 0.4,
                }
            },
            huopo: {
                //出牌阶段限一次，你可将一至三张手牌交给一名其他角色，若你这么做，该角色的下个回合开始时，你摸两倍数量的牌                
                usable: 1,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                selectTarget: 1,
                init: function (player) {
                    player.storage.huopo_target = player;
                    player.storage.huopo_draw = [];
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function (event) {
                    'step 0'
                    player.chooseCard('h', [1, Infinity], '活泼：将任意张手牌交给' + get.translation(event.target), true).set('ai', function (card) {
                        if (card.name == 'tao') return -10;
                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                    });
                    'step 1'
                    if (result.bool) {
                        event.target.gain(result.cards);
                        event.target.$gain2(result.cards);
                        //要回合开始时摸牌的人，数量
                        event.target.storage.huopo_target = player;
                        if (event.target.storage.huopo_draw == undefined)
                            event.target.storage.huopo_draw = [];
                        event.target.storage.huopo_draw = event.target.storage.huopo_draw.concat(result.cards);

                        event.target.addAdditionalSkill('huopo', ['huopo2']);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: function (player, target) {
                            if (get.attitude(player, target) > 0) {
                                return Math.sqrt(target.countCards('he'));
                            }
                            return 0;
                        },
                        player: 1
                    }
                }
            },
            huopo2: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player, target) {
                    return player.storage.huopo_draw.length > 0
                },
                init: function (player) {
                    player.storage.huopo2 = player.storage.huopo_draw.length;
                },
                logTarget: function (event) {
                    return event.player.storage.huopo_target;
                },
                intro: {
                    content: 'mark'
                },
                mark: true,
                marktext: '活',
                content: function (event) {
                    console.log(player.storage.huopo_target + "摸" + player.storage.huopo_draw.length * 2);
                    player.storage.huopo_target.draw(player.storage.huopo_draw.length * 2);
                    player.storage.huopo_draw = [];

                    player.removeAdditionalSkill('huopo', ['huopo2']);
                }
            },
            //赵晔，AI测试OK
            baofa: {
                //锁定技。你的无懈可击视为杀。你的杀可指定的目标数等于你当前的攻击距离。
                mod: {
                    cardEnabled: function (card, player) {
                        if (card.name == 'wuxie' && _status.event.skill != 'baofa') return false;
                    },
                    cardUsable: function (card, player) {
                        if (card.name == 'wuxie' && _status.event.skill != 'baofa') return false;
                    },
                    cardRespondable: function (card, player) {
                        if (card.name == 'wuxie' && _status.event.skill != 'baofa') return false;
                    },
                    selectTarget: function (card, player, range) {
                        if (card.name != 'sha') return;
                        if (range[1] == -1) return;

                        range[1] += player.getAttackRange() - 1;
                    }
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                filter: function (event, player) {
                    return player.countCards('h', 'wuxie') > 0;
                },
                filterCard: { name: 'wuxie' },
                viewAs: { name: 'sha' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', 'wuxie')) return false;
                },
                check: function () { return 1 },
                ai: {
                    skillTagFilter: function (player) {
                        if (!player.countCards('h', 'wuxie')) return false;
                    },
                    respondSha: true,
                    order: 4,
                    useful: -1,
                    value: -1
                },
            },
            caihua: {
                //你的杀造成伤害时，你可展示一张牌并进行一次判定，若颜色相同，你获得该判定牌
                audio: 2,
                trigger: { source: 'damageEnd' },
                filter: function (event, player) {
                    return event.card && event.card.name == 'sha' && player.countCards('h') > 0;
                },
                check: function (event, player) {
                    return player.countCards('h') > 0;
                },
                priority: 5,
                content: function () {
                    "step 0"
                    player.chooseCard('h', 1, true).ai = function (card) {
                        if (_status.event.getRand() < 0.5) return Math.random();
                        return get.value(card);
                    };
                    "step 1"
                    event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
                    event.videoId = lib.status.videoId++;

                    game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
                    game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                    event.card2 = result.cards[0];
                    game.log(target, '展示了', event.card2);
                    "step 2"
                    player.judge()
                    "step 3"
                    if (get.color(result.card) == get.color(event.card2)) {
                        player.gain(result.card);
                        player.$gain2(result.card);
                    }
                }
            },
            //蒋芸，AI测试OK
            jingyan: {
                trigger: { player: 'phaseEnd' },
                direct: true,
                notemp: true,
                filter: function (event, player) {
                    return player.countCards('h') >= 2;
                },
                content: function () {
                    'step 0'
                    player.chooseToDiscard('弃两张牌，你的下一个回合内，获得技能【未来】（锦囊牌造成的伤害+1）', 'he', 2).set('ai', function (card) {
                        if (card.name == 'du') return 20;
                        return 7 - get.useful(card);
                    });
                    'step 1'
                    if (result.bool) {
                        player.addAdditionalSkill('jingyan', ['mirai']);
                    }
                },
                group: ['yingzi', 'biyue'],
                ai: {
                    threaten: 0.8
                }
            },
            mirai: {
                marktext: '未',
                mark: true,
                intro: {
                    content: 'mark'
                },
                trigger: { source: 'damageBegin' },
                filter: function (event, player) {
                    return event.card && (get.type(event.card) == 'trick' && get.tag(event.card, 'damage'));
                },
                forced: true,
                content: function () {
                    trigger.num++;
                },
                ai: {
                    damageBonus: true
                },
                group: 'mirai2'
            },
            mirai2: {
                trigger: { player: 'phaseDiscardBegin' },
                direct: true,
                frequent: true,
                content: function () {
                    player.removeAdditionalSkill('jingyan', ['mirai']);
                    player.storage.mirai = [];
                }
            },
            qichang: {
                enable: 'phaseUse',
                usable: 1,
                audio: 2,
                filter: function (event, player) {
                    return player.countCards('h') > 0
                },
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                filterCard: true,
                selectTarget: -1,
                selectCard: 1,
                content: function (event, trigger) {
                    for (var i = 0; i < event.targets.length; i++) {
                        event.targets[i].addTempSkill("qichang2");
                    }
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            duomian: {
                enable: 'phaseUse',
                usable: 2,
                audio: 2,
                filter: function (event, player) {
                    return player.countCards('h') >= 2
                },
                chooseButton: {
                    dialog: function () {
                        var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                        if (get.is.guozhanMode())
                            list.concat(['yuanjiao', 'yiyi', 'zengbin', 'shengdong'])
                        for (var i = 0; i < list.length; i++) {
                            list[i] = ['锦囊', '', list[i]];
                        }
                        return ui.create.dialog([list, 'vcard']);
                    },
                    filter: function (button, player) {
                        return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        var recover = 0, lose = 1, players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (!players[i].isOut()) {
                                //目标不满血
                                if (players[i].hp < players[i].maxHp) {
                                    //友方
                                    if (get.attitude(player, players[i]) > 0) {
                                        if (players[i].hp < 2) {
                                            lose--;
                                            recover += 0.5;
                                        }
                                        lose--;
                                        recover++;
                                    }
                                    //敌方
                                    else if (get.attitude(player, players[i]) < 0) {
                                        if (players[i].hp < 2) {
                                            lose++;
                                            recover -= 0.5;
                                        }
                                        lose++;
                                        recover--;
                                    }
                                }
                                //目标满血
                                else {
                                    //影响友方程度
                                    if (get.attitude(player, players[i]) > 0) {
                                        lose--;
                                    }
                                    //影响敌方程度
                                    else if (get.attitude(player, players[i]) < 0) {
                                        lose++;
                                    }
                                }
                            }
                        }
                        if (lose > recover && lose > 0) return (button.link[2] == 'wanjian') ? 1 : -1;
                        if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                        return (button.link[2] == 'wuzhong') ? 1 : -1;
                    },
                    backup: function (links, player) {
                        return {
                            filterCard: true,
                            selectCard: 2,
                            audio: 2,
                            popname: true,
                            viewAs: { name: links[0][2] },
                        }
                    },
                    prompt: function (links, player) {
                        return '将两张手牌当作' + get.translation(links[0][2]) + '使用';
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: function (player) {
                            var num = 0;
                            var cards = player.getCards('h');
                            if (cards.length >= 3 && player.hp >= 3) return 0;
                            for (var i = 0; i < cards.length; i++) {
                                num += Math.max(0, get.value(cards[i], player, 'raw'));
                            }
                            num /= cards.length;
                            num *= Math.min(cards.length, player.hp);
                            return 12 - num;
                        }
                    },
                    threaten: 1.6,
                }
            },
            //陈俊羽
            //每当你使用一张非转化的非基本牌，你可以摸一张牌并展示之
            mengdong: {
				audio:2,
				trigger:{player:'useCard'},
				frequent:true,
				unique:true,
				filter:function(event){
					var type=get.type(event.card,'basic');
					return type=='basic'&&event.cards[0]&&event.cards[0]==event.card;
				},
				content:function(){
					var cards=get.cards();
					player.gain(cards,'gain2');
					game.log(player,'获得了',cards);
				},
				ai:{
					threaten:1.4,
					noautowuxie:true,
				}
            },
            maomao: {                
				audio:2,
				unique:true,
				enable:'chooseToUse',
				mark:true,
				skillAnimation:true,
				animationStr:'冒冒',
				animationColor:'fire',
				init:function(player){
					player.storage.maomao=false;
				},
				filter:function(event,player){
					if(player.storage.maomao) return false;
					if(event.type=='dying'){
						if(player!=event.dying) return false;
						return true;
					}
					else if(event.parent.name=='phaseUse'){
						return true;
					}
					return false;
				},
				content:function(){
					'step 0'
                    player.hp=Math.min(3,player.maxHp);
					player.discard(player.getCards('j'));
					player.draw(3);
					player.awakenSkill('maomao');
					player.storage.maomao=true;
					'step 1'
					player.link(false);
					'step 2'
					player.turnOver(false);
				},
				ai:{
					order:0.5,
					skillTagFilter:function(player){
						if(player.storage.maomao) return false;
						if(player.hp>0) return false;
					},
					save:true,
					result:{
						player:function(player){
							if(player.hp==0) return 10;
							if(player.hp<=1&&player.countCards('he')<=1) return 10;
							return 0;
						}
					},
					threaten:function(player,target){
						if(!target.storage.maomao) return 0.6;
					}
				},
				intro:{
					content:'limited'
				}
            },
            //朱小丹
            //少摸一张牌，选人决斗
            liren: {                
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					if(player.countCards('h')<player.hp) return false;					
					return game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&player.canUse('juedou',current);
					});
				},
				content:function(){
					"step 0"
                    trigger.num--;                    
					"step 1"
					var check= player.countCards('h')>2;
					player.chooseTarget(get.prompt('liren'),function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'juedou'},target,false);
					}).set('check',check).set('ai',function(target){
						if(!_status.event.check) return 0;
						return get.effect(target,{name:'juedou'},_status.event.player);
					});
                    "step 2"
					if(result.bool){
						player.logSkill('liren',result.targets);
						player.useCard({name:'juedou'},result.targets[0],false);
					}
				}
            },
            //当你需要打出一张杀或闪响应时，你可将两张手牌当做其使用或打出
			shouzhuo: {
				audio:2,
				trigger:{ player:'chooseToRespond' },
				frequent:true,
				filter:function(event,player){
                    return player.countCards('h') >=2 && !event.responded;
				},
				selectCard:2,
				check:function(card){
					var player=_status.event.player;
					return 6-get.value(card);
				},
				content:function(){
                    game.log(player,'守拙发动成功');
                    trigger.untrigger();
                    trigger.responded=true;
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					}
                },                
				mod:{
					maxHandcard:function(player,num){
						if(player.hasSkill('shouzhuo')){
							return num + game.countPlayer(function(current){
								if(player!=current&&current.group==player.group) return 1;
							});
						}
						return num;
					}
				}
            },
            //N
            //张雨鑫，AI测试ok
            xingwen: {
                audio: 2,
                trigger: { player: 'phaseBegin' },
                frequent: true,
                content: function () {
                    "step 0"
                    if (event.cards == undefined) event.cards = [];
                    player.judge(function (card) {
                        if (event.cards.length == 0)
                            return 1.5;
                        //类型相同就失败
                        if (get.type(event.cards[event.cards.length - 1]) == get.type(card))
                            return -1.5;
                        return 1.5;
                    }, ui.special);
                    "step 1"
                    if (result.judge > 0) {
                        event.cards.push(result.card);
                        if (lib.config.autoskilllist.contains('xingwen')) {
                            player.chooseBool('是否再次发动【行文】？');
                        }
                        else {
                            event._result = { bool: true };
                        }
                    }
                    else {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.position(event.cards[i]) != 's') {
                                event.cards.splice(i, 1); i--;
                            }
                        }
                        player.gain(event.cards);
                        if (event.cards.length) {
                            player.$draw(event.cards);
                        }
                        event.finish();
                    }
                    "step 2"
                    if (result.bool) {
                        event.goto(0);
                    }
                    else {
                        player.gain(event.cards);
                        if (event.cards.length) {
                            player.$draw(event.cards);
                        }
                    }
                }
            },
            duoyi: {
                audio: 2,
                unique: true,
                trigger: { target: 'taoBegin' },
                forced: true,
                filter: function (event, player) {
                    //自己对自己触发
                    return event.player == player;
                },
                content: function (event, target) {
                    player.recover();
                }
            },
            //赵粤
            huobing: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('h') > 0;
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function (target) {
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if (result.bool) {
                        player.useCard({ name: 'juedou2' }, target, 'noai').animate = false;
                    }
                    else {
                        target.useCard({ name: 'juedou2' }, player, 'noai').animate = false;
                    }
                    game.delay(0.5);
                },
                ai: {
                    order: function (name, player) {
                        var cards = player.getCards('h');
                        for (var i = 0; i < cards.length; i++) {
                            if (cards[i].number > 11 && get.value(cards[i]) < 7) {
                                return 9;
                            }
                        }
                        return get.order({ name: 'sha' }) - 1;
                    },
                    result: {
                        player: function (player) {
                            var num = player.countCards('h');
                            if (num > player.hp) return 0;
                            if (num == 1) return -2;
                            if (num == 2) return -1;
                            return -0.7;
                        },
                        target: function (player, target) {
                            var num = target.countCards('h');
                            if (num == 1) return -1;
                            if (num == 2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten: 1.3
                }
            },
            renwu: {
                trigger: { global: 'phaseEnd' },
                forced: true,
                frequent: true,
                filter: function (event, player) {
                    return player.isTurnedOver()
                },
                content: function (player) {
                    player.turnOver();
                },
                ai: {
                    noturn: true
                }
            },
            //陆婷
            dage: {
                trigger: { target: 'useCardToBefore' },
                forced: true,
                priority: 6,
                audio: true,
                filter: function (event, player) {
                    return event.player.countCards('h') < player.countCards('h') && event.card && event.card.name == 'sha'
                },
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (card.name == 'sha') {
                                return 'zerotarget';
                            }
                        }
                    }
                },
                group: 'dage2'
            },
            dage2: {
                skillAnimation: 'legend',
                audio: 2,
                unique: true,
                zhuSkill: true,
                keepSkill: true,
                derivation: 'lianglong',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasZhuSkill('dage')) return false;
                    if (player.storage.dage) return false;
                    return player.isMinHp();
                },
                content: function () {
                    player.storage.dage = true;
                    --player.maxHp;
                    player.update();
                    player.recover();
                    if (player.hasSkill('dage')) {
                        player.addSkill('lianglong');
                    }
                    else {
                        player.addAdditionalSkill('dage', 'lianglong');
                    }
                    player.awakenSkill('dage');
                }
            },
            kongchang: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                frequent: true,
                filter: function (event) {
                    return (event.num > 0)
                },
                content: function () {
                    "step 0"
                    var alivePlayersCount = game.countPlayer();
                    event.cards = get.cards(alivePlayersCount > 4 ? 4 : alivePlayersCount);
                    "step 1"
                    if (event.cards.length > 1) {
                        player.chooseCardButton('将【控场】牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                            if (ui.selected.buttons.length == 0) return 1;
                            return 0;
                        });
                    }
                    else if (event.cards.length == 1) {
                        event._result = { links: event.cards.slice(0), bool: true };
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.bool) {
                        for (var i = 0; i < result.links.length; i++) {
                            event.cards.remove(result.links[i]);
                        }
                        event.togive = result.links.slice(0);
                        player.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true).set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (_status.event.enemy) {
                                return -att;
                            }
                            else if (att > 0) {
                                return att / (1 + target.countCards('h'));
                            }
                            else {
                                return att / 100;
                            }
                        }).set('enemy', get.value(event.togive[0]) < 0);
                    }
                    "step 3"
                    if (result.targets.length) {
                        result.targets[0].gain(event.togive, 'draw');
                        player.line(result.targets[0], 'green');
                        game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                        event.goto(1);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                var num = 1;
                                if (get.attitude(player, target) > 0) {
                                    if (player.needsToDiscard()) {
                                        num = 0.7;
                                    }
                                    else {
                                        num = 0.5;
                                    }
                                }
                                if (target.hp >= 4) return [1, num * 2];
                                if (target.hp == 3) return [1, num * 1.5];
                                if (target.hp == 2) return [1, num * 0.5];
                            }
                        }
                    }
                }
            },
            lianglong: {
                mod: {
                    //无视距离
                    targetInRange: function (card, player, target, now) {
                        return true;
                    }
                },
                group: 'paoxiao'
            },
            //冯薪朵
            hainv: {
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (card.name == 'shuiyanqijun' || card.name == 'shuiyanqijunx')
                            return false;
                    }
                },
                group: 'hainv1'
            },
            hainv1: {
                audio: 4,
                usable: 1,
                enable: 'chooseToUse',
                filter: function (player) {
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] != player && players[i].countCards('e') > 0)
                            return true;
                    }
                    return false;
                },
                filterCard: function (card) {
                    return get.color(card) == 'red';
                },
                selectCard: 2,
                position: 'he',
                viewAs: { name: 'shuiyanqijunx' },
                viewAsFilter: function (player) {
                    if (!player.countCards('he', { color: 'red' })) return false;
                },
                prompt: '将两张红色牌当水淹七军使用',
                check: function (card) { return 4 - get.value(card) }
            },
            pupu: {
                trigger: { source: 'damageEnd', player: 'damageEnd' },
                frequent: true,
                content: function (player) {
                    player.draw()
                }
            },
            //黄婷婷
            yancang: {
                audio: 2,
                trigger: { player: 'phaseJudgeBefore' },
                direct: true,
                frequent: true,
                filter: function () { return true },
                content: function () {
                    trigger.cancel();
                }
            },
            jiezou: {
                audio: 2,
                group: ['tiaosuo', 'tiaoxin']
            },
            zhengyi: {
                enable: 'phaseUse',
                usable: 1,
                selectCard: 1,
                position: 'he',
                filterCard: function () {
                    return true;
                },
                selectTarget: function (target) {
                    return target != player;
                },
                filter: function (event, player) {
                    return player.countCards('he') > 0
                },
                content: function (event, player, target) {
                    target.addTempSkill('tianjiangzhengyi');
                },
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        target: function (player, target) {
                            return get.damageEffect(target, player);
                        }
                    }
                },
                threaten: 1.3,
            },
            tianjiangzhengyi: {
                trigger: { player: 'phaseBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    player.judge();
                    'step 1'
                    if (get.suit(result.card) == 'spade') {
                        if (result.card.num > 1 && result.card.num < 10) {
                            player.damage(3, 'thunder', 'nosource');
                        }
                        else {
                            player.damage(2, 'thunder', 'nosource');
                        }
                    } else if (get.suit(result.card) == 'club') {
                        player.chooseToDiscard(true, 'h', 2).set('ai', function (card) {
                            return 9 - get.value(card)
                        });
                    }
                }
            },
            //H
            //姜杉
            yonggu: {
                audio: 2,
                trigger: { player: 'phaseBegin' },
                forced: true,
                selectTarget: -1,
                filterTarget: function (target, player) {
                    return target.hp > player.hp;
                },
                filter: function (event, player) {
                    return player.isMinHp();
                },
                content: function (player) {
                    "step 0"
                    event.current = player.next;
                    "step 1"
                    event.current.animate('target');
                    var str1 = '弃一张牌，使' + get.translation(player) + '回复1点体力';
                    var str2 = '摸一张牌，并使武将牌翻面';
                    event.current.chooseControl(str1, str2, function (event, player) {
                        return _status.event.choice;
                    }).set('choice', get.attitude(player, event.current) > 0 ? str1 : str2);
                    event.str = str1;
                    "step 2"
                    if (result.control == event.str) {
                        event.current.chooseToDiscard(true, 'he');
                        player.recover();
                    }
                    else {
                        //选项2
                        event.current.draw();
                        event.current.turnOver();
                    }
                    "step 3"
                    if (event.current.next != player) {
                        event.current = event.current.next;
                        game.delay(0.5);
                        event.goto(1);
                    }
                }
            },
            //孙珍妮
            pengyue: {
                //其他角色弃置的装备牌，获得之
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    //自己弃的不算
                    if (event.player == player)
                        return false;
                    if (event.cards && event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.type(event.cards[i]) == 'equip' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.type(event.cards[i]) == 'equip' && get.position(event.cards[i]) == 'd')
                            return true;
                    }
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (get.type(trigger.cards[i]) == 'equip' && get.position(trigger.cards[i]) == 'd') {
                            cards.push(trigger.cards[i]);
                        }
                    }
                    if (cards.length) {
                        player.gain(cards, 'log');
                        player.$gain2(cards);
                    }
                },
                group: 'pengyue1'
            },
            pengyue1: {
                trigger: { player: 'equipAfter' },
                frequent: true,
                content: function (player) {
                    player.draw();
                }
            },
            haosi: {
                group: ['haosi1', 'haosi2'],
                ai: {
                    threaten: 2.2
                }
            },
            haosi1: {
                audio: 2,
                trigger: { player: 'phaseDrawBegin' },
                forced: true,
                content: function (player) {
                    trigger.num += player.countCards('e');
                }
            },
            haosi2: {
                audio: 2,
                trigger: { player: 'phaseDiscardBegin' },
                forced: true,
                content: function () {
                    player.chooseToDiscard(player.countCards('e'), 'he', true);
                }
            },
            //李艺彤
            jianfeng: {
                trigger: { source: 'damageBegin' },
                filter: function (event, player) {
                    return event.player != player && event.card && event.card.name == 'sha' && event.notLink();
                },
                frequent: true,
                content: function (player, event) {
                    if (trigger.player != player && trigger.num > 1) {
                        //两方向递减波及
                        //var previous = trigger.player.previous;
                        //var next = trigger.player.next;
                        //for (var i = trigger.num - 1; i > 0; i--) {
                        //    if (previous != player) {
                        //        previous.damage(i, trigger.nature);
                        //        previous = previous.previous;
                        //    }
                        //    if (next != player) {
                        //        next.damage(i, trigger.nature);
                        //        next = next.next;
                        //    }
                        //}
                        //溅射距离为1
                        var previous = trigger.player.previous;
                        var next = trigger.player.next;
                        if (previous != player && get.distance(trigger.player, previous) <= 1) {
                            previous.damage(trigger.num - 1, trigger.nature);
                        }
                        if (next != player && get.distance(trigger.player, next) <= 1) {
                            next.damage(trigger.num - 1, trigger.nature);
                        }
                    }
                },
            },
            haibao: {
                mod: {
                    suit: function (card, suit) {
                        if (suit == 'heart') return 'spade';
                        if (suit == 'diamond') return 'club'
                    }
                }
            },
            //万丽娜
            tiequan: {
                audio: 2,
                trigger: { player: ['shaBefore'], target: ['shaBefore'] },
                filter: function (event, player) {
                    return event.card && event.card.name == 'sha'
                },
                frequent: true,
                content: function () {
                    player.draw();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (card.name == 'sha') return [1, 0.6];
                        },
                        player: function (card, player, target) {
                            if (card.name == 'sha') return [1, 1];
                        }
                    }
                },
                group: ['qinggang_skill', 'shaDamageMore']
            },
            //费沁源
            tianxuan: {
                audio: 2,
                enable: 'phaseUse',
                viewAs: { name: 'xietianzi' },
                filterCard: function (card, player) {
                    if (ui.selected.cards.length) {
                        return get.suit(card) == get.suit(ui.selected.cards[0]);
                    }
                    var cards = player.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (card != cards[i]) {
                            if (get.suit(card) == get.suit(cards[i])) return true;
                        }
                    }
                    return false;
                },
                selectCard: 2,
                complexCard: true,
                prompt: '将两张同花色手牌当【挟天子以令诸侯】使用',
                check: function (card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) { });
                    var num = 0;
                    if (!player.needsToDiscard(-1)) {
                        return 0;
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            yuanqi: {
                audio: 2,
                trigger: { player: 'chooseToRespondBegin' },
                filter: function (event, player) {
                    if (event.responded) return false;
                    if (!event.filterCard({ name: 'shan' })) return false;
                    return true;
                },
                check: function (event, player) {
                    if (get.attitude(player, _status.currentPhase) > 0) return true;
                    var nh = _status.currentPhase.countCards('h') + 1;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i].countCards('h') > nh) {
                            if (!player.hasShan() || get.attitude(player, players[i]) <= 0) return true;
                        }
                    }
                    return false;
                },
                content: function (event) {
                    'step 0'
                    var str1 = '当前回合角色摸两张牌';
                    var str2 = '当前回合角色弃置你两张牌';
                    player.chooseControl(str1, str2, function (event, player) {
                        return _status.event.choice;
                    }).set('choice', get.attitude(player, _status.currentPhase) > 0 ? str1 : str2);
                    event.str = str1;
                    'step 1'
                    if (result.control == event.str) {
                        player.line(_status.currentPhase, 'green');
                        _status.currentPhase.draw(2);
                    }
                    else {
                        _status.currentPhase.discardPlayerCard(player, 'he', 2, true)
                    }
                    trigger.untrigger();
                    trigger.responded = true;
                    trigger.result = { bool: true, card: { name: 'shan' } }
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan') && current < 0) {
                                var nh = player.countCards('h');
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].countCards('h') > nh) return 0.4;
                                }
                            }
                        }
                    }
                }
            },
            taizi: {
                audio: 2,
                enable: 'chooseToUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h', { color: 'red' }) > 0;
                },
                filterCard: function (card) {
                    return get.color(card) == 'red';
                },
                position: 'h',
                viewAs: { name: 'yiyi' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', { color: 'red' })) return false;
                },
                prompt: '将一张红色手牌当【以逸待劳】使用',
                check: function (card) {
                    return 4 - get.value(card)
                }
            },
            //於佳怡
            princess: {
                usable: 1,
                enable: 'phaseUse',
                selectTarget: 1,
                filterTarget: function (target) {
                    return get.attitude(player, target) < 0
                },
                selectCard: 1,
                position: 'he',
                filterCard: function (card) {
                    return card.num == 12;
                },
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        target: function (player, target) {
                            return get.damageEffect(target, player);
                        }
                    }
                },
                threaten: 1.3,
                group: ['princess_recover', 'princess_compare']
            },
            princess_recover: {
                audio: 2,
                trigger: { player: 'useCardAfter' },
                filter: function (event, player) {
                    return event.card && event.card.num == 12;
                },
                frequent: true,
                content: function () {
                    player.draw();
                    player.recover();
                },
                effect: {
                    target: function (card, player, target) {
                        if (card.num == 12) return [1, 0.6];
                    },
                    player: function (card, player, target) {
                        if (card.num == 12) return [1, 1];
                    }
                }
            },
            princess_compare: {
                trigger: { player: 'compare', target: 'compare' },
                frequent: true,
                silent: true,
                content: function () {
                    game.log(player, '拼点牌点数视为', '#y12');
                    if (player == trigger.player) {
                        trigger.num1 = 12;
                    }
                    else {
                        trigger.num2 = 12;
                    }
                }
            },
            jiaoyi: {
                audio: 2,
                enable: 'chooseToUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h', { color: 'red' }) > 0;
                },
                filterCard: function (card) {
                    return get.color(card) == 'red';
                },
                position: 'h',
                viewAs: { name: 'yuanjiao' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', { color: 'red' })) return false;
                },
                prompt: '将一张红色手牌当【远交近攻】使用',
                check: function (card) {
                    return 4 - get.value(card)
                }
            },
            //洪珮雲
            peiyun: {
                audio: 2,
                enable: 'chooseToUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                filterCard: function (card) {
                    return true;
                },
                position: 'h',
                viewAs: { name: 'lulitongxin' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h')) return false;
                },
                prompt: '将一张手牌当【勠力同心】使用',
                check: function (card) {
                    return 4 - get.value(card)
                }
            },
            fuwei: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                frequent: true,
                content: function (player, event, trigger) {
                    trigger.player.storage.father = player;
                    trigger.player.addAdditionalSkill('fuwei', ['xiaoshun']);
                },
                group: 'fuwei2'
            },
            fuwei2: {
                audio: true,
                trigger: { player: 'damageBegin' },
                direct: true,
                prompt: '弃置一张手牌，否则伤害无效',
                filter: function (event, player) {
                    //有伤害来源，且有【孝顺】，才能触发这个技能
                    return (event.source && event.source != player && event.source.hasSkill('xiaoshun'));
                },
                content: function (event) {
                    "step 0"
                    if (trigger.source) {
                        trigger.source.chooseToDiscard('he', '弃置一张牌，否则造成伤害无效').set('ai', function (card) {
                            if (get.attitude(player, trigger.source) > 0)
                                //不弃牌
                                return 0;
                            else
                                return 7 - get.value(card);
                        });
                    }
                    "step 1"
                    if (!result.bool) {
                        trigger.cancel();
                    }
                },
                ai: {
                    expose: 0.2,
                    threaten: 1.5
                }
            },
            xiaoshun: {
                mark: true,
                marktext: '孝',
                intro: {
                    content: '对洪珮雲使用【杀】需额外弃置一张牌，否则此杀无效'
                },
                trigger: { player: 'phaseEnd' },
                direct: true,
                forced: true,
                content: function () {
                    player.removeAdditionalSkill('fuwei', ['xiaoshun'])
                }
            },
            //X
            //徐诗琪
            xiaoqi: {
                trigger: { player: 'damageEnd' },
                direct: true,
                audio: 2,
                content: function () {
                    'step 0'
                    event.cards = get.cards(7);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(function (player, id, cards) {
                        var str;
                        if (player == game.me && !_status.auto) {
                            str = '小七：选择任意张点数不大于7的牌';
                        }
                        else {
                            str = '小七';
                        }
                        var dialog = ui.create.dialog(str, cards);
                        dialog.videoId = id;
                    }, player, event.videoId, event.cards);
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['小七', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    'step 1'
                    var next = player.chooseButton([0, 7]);
                    next.set('dialog', event.videoId);
                    next.set('filterButton', function (button) {
                        return get.number(button.link) <= 7;
                    });
                    next.set('ai', function (button) {
                        return get.value(button.link, _status.event.player);
                    });
                    "step 2"
                    if (result.bool && result.links) {
                        player.logSkill('jiujiu');
                        var cards2 = [];
                        for (var i = 0; i < result.links.length; i++) {
                            cards2.push(result.links[i]);
                            cards.remove(result.links[i]);
                        }
                        for (var i = 0; i < cards.length; i++) {
                            cards[i].discard();
                        }
                        event.cards2 = cards2;
                    }
                    else {
                        event.finish();
                    }
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) {
                        game.delay(0, time);
                    }
                    "step 3"
                    game.broadcastAll('closeDialog', event.videoId);
                    var cards2 = event.cards2;
                    player.gain(cards2, 'log');
                    player.$draw(cards2);
                    game.delay();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                if (target.hp >= 4) return [1, 2];
                                if (target.hp == 3) return [1, 1.5];
                                if (target.hp == 2) return [1, 0.5];
                            }
                        }
                    }
                }
            },
            //汪佳翎
            jiujiu: {
                trigger: { player: 'damageEnd' },
                direct: true,
                audio: 2,
                content: function () {
                    'step 0'
                    event.cards = get.cards(9);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(function (player, id, cards) {
                        var str;
                        if (player == game.me && !_status.auto) {
                            str = '九九：选择任意张点数不小于9的牌';
                        }
                        else {
                            str = '九九';
                        }
                        var dialog = ui.create.dialog(str, cards);
                        dialog.videoId = id;
                    }, player, event.videoId, event.cards);
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['九九', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    'step 1'
                    var next = player.chooseButton([0, 9]);
                    next.set('dialog', event.videoId);
                    next.set('filterButton', function (button) {
                        return get.number(button.link) >= 9;
                    });
                    next.set('ai', function (button) {
                        return get.value(button.link, _status.event.player);
                    });
                    "step 2"
                    if (result.bool && result.links) {
                        player.logSkill('jiujiu');
                        var cards2 = [];
                        for (var i = 0; i < result.links.length; i++) {
                            cards2.push(result.links[i]);
                            cards.remove(result.links[i]);
                        }
                        for (var i = 0; i < cards.length; i++) {
                            cards[i].discard();
                        }
                        event.cards2 = cards2;
                    }
                    else {
                        event.finish();
                    }
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) {
                        game.delay(0, time);
                    }
                    "step 3"
                    game.broadcastAll('closeDialog', event.videoId);
                    var cards2 = event.cards2;
                    player.gain(cards2, 'log');
                    player.$draw(cards2);
                    game.delay();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                if (target.hp >= 4) return [1, 2];
                                if (target.hp == 3) return [1, 1.5];
                                if (target.hp == 2) return [1, 0.5];
                            }
                        }
                    }
                },
                group: 'jiujiu2'
            },
            jiujiu2: {
                trigger: { player: 'compare', target: 'compare' },
                frequent: true,
                silent: true,
                content: function () {
                    game.log(player, '拼点牌点数视为', '9');
                    if (player == trigger.player) {
                        if (trigger.num1 < 9)
                            trigger.num1 = 9;
                    }
                    else {
                        if (trigger.num2 < 9)
                            trigger.num2 = 9;
                    }
                }
            },
            //徐诗琪
            xiaoqi: {
                trigger: { player: 'damageEnd' },
                direct: true,
                audio: 2,
                content: function () {
                    'step 0'
                    event.cards = get.cards(7);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(function (player, id, cards) {
                        var str;
                        if (player == game.me && !_status.auto) {
                            str = '小七：选择任意张点数不大于7的牌';
                        }
                        else {
                            str = '小七';
                        }
                        var dialog = ui.create.dialog(str, cards);
                        dialog.videoId = id;
                    }, player, event.videoId, event.cards);
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['小七', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    'step 1'
                    var next = player.chooseButton([0, 7]);
                    next.set('dialog', event.videoId);
                    next.set('filterButton', function (button) {
                        return get.number(button.link) <= 7;
                    });
                    next.set('ai', function (button) {
                        return get.value(button.link, _status.event.player);
                    });
                    "step 2"
                    if (result.bool && result.links) {
                        player.logSkill('xiaoqi');
                        var cards2 = [];
                        for (var i = 0; i < result.links.length; i++) {
                            cards2.push(result.links[i]);
                            cards.remove(result.links[i]);
                        }
                        for (var i = 0; i < cards.length; i++) {
                            cards[i].discard();
                        }
                        event.cards2 = cards2;
                    }
                    else {
                        event.finish();
                    }
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) {
                        game.delay(0, time);
                    }
                    "step 3"
                    game.broadcastAll('closeDialog', event.videoId);
                    var cards2 = event.cards2;
                    player.gain(cards2, 'log');
                    player.$draw(cards2);
                    game.delay();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                if (target.hp >= 4) return [1, 2];
                                if (target.hp == 3) return [1, 1.5];
                                if (target.hp == 2) return [1, 0.5];
                            }
                        }
                    }
                },
                group: 'xiaoqi2'
            },
            xiaoqi2: {
                trigger: { player: 'compare', target: 'compare' },
                frequent: true,
                silent: true,
                content: function () {
                    if (player == trigger.player) {
                        if (trigger.num1 < 7) {
                            trigger.num1 += 7;
                            game.log(player, '拼点牌点数视为', trigger.num1);
                        }
                    }
                    else {
                        if (trigger.num2 < 7) {
                            trigger.num2 += 7;
                            game.log(player, '拼点牌点数视为', trigger.num2);
                        }
                    }
                }
            },
            //陈韫凌
            quanhuang: {
                trigger: { player: 'compare', target: 'compare' },
                frequent: true,
                silent: true,
                content: function () {
                    game.log(player, '拼点牌点数视为', '#y13');
                    if (player == trigger.player) {
                        trigger.num1 = 13;
                    }
                    else {
                        trigger.num2 = 13;
                    }
                }
            },
            taowa: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                frequent: true,
                filter: function (event, player) {
                    if (player == _status.currentPhase) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original && event.cards[i].original != 'j') return true;
                    }
                    return false;
                },
                content: function () {
                    player.draw();
                },
                group: 'taowa2'
            },
            taowa2: {
                enable: 'chooseToUse',
                filter: function (event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    if (player.maxHp <= 1) return false;
                    if (player.countCards('h') == 0) return false;
                    return true;
                },
                alter: true,
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('h') > 0;
                },
                content: function () {
                    'step 0'
                    player.chooseToCompare(target);
                    'step 1'
                    if (!result.bool) {
                        player.die();
                        event.finish();
                    }
                    else {

                        for (var i = 0; i < 1 - player.hp; i++) {
                            player.recover();
                            game.delay();
                        }
                        --player.maxHp;
                        player.update();
                    }
                },
                ai: {
                    order: 1,
                    skillTagFilter: function (player) {
                        if (player.maxHp <= 1) return false;
                        if (player.hp > 0) return false;
                        if (player.countCards('h') == 0) return false;
                    },
                    save: true,
                    result: {
                        target: -1,
                        player: 1
                    },
                    threaten: 2
                },
            },
            //祁静
            lianer: {
                trigger: { player: 'damageBegin' },
                frequent: true,
                filter: function (event) {
                    return event.card && event.card.name == 'sha';
                },
                content: function () {
                    if (trigger.num > 1) {
                        trigger.num--;
                        var targets = game.filterPlayer();
                        targets.remove(player);
                        for (var i = 0; i < targets.length; i++) {
                            console.log('get.distance(player, targets[i])', get.distance(player, targets[i]))
                            console.log('get.distance(targets[i], player)', get.distance(targets[i], player))
                            if ((targets[i] == player.previous || targets[i] == player.next) && targets[i] != player && get.distance(player, event.player) <= 1)
                                targets[i].damage(1, trigger.nature)
                        }
                    }
                }
            },
            jingjing: {
                trigger: { player: 'phaseEnd' },
                filter: function (event, player) {
                    return player.countCards('h') > 1;
                },
                audio: 2,
                content: function () {
                    'step 0'
                    player.chooseToDiscard(true, 2, 'h', { color: 'red' });
                    'step 1'
                    if (result.bool) {
                        player.addSkill('jingjing2');
                        player.logSkill('jingjing', player, 'thunder');
                    }
                },
                ai: {
                    effect: {
                        player: function (card, player) {
                            if (player.isMin())
                                return 1;
                            if (player.maxHp == player.hp)
                                return 0;
                            return -1;
                        }
                    }
                },
                group: 'jingjing3'
            },
            jingjing2: {
                trigger: { player: 'damageBefore' },
                filter: function (event) {
                    if (event.nature != 'thunder') return true;
                    return false;
                },
                mark: true,
                forced: true,
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    nodamage: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                        }
                    },
                },
                intro: {
                    content: '我想静静'
                }
            },
            jingjing3: {
                trigger: { player: 'phaseBegin' },
                silent: true,
                filter: function (event, player) {
                    return player.hasSkill('jingjing2');
                },
                content: function () {
                    player.removeSkill('jingjing2');
                    player.popup('jingjing2');
                }
            },
            //王晓佳
            tiancao: {
                trigger: { player: 'damageBegin' },
                frequent: true,
                audio: 2,
                filter: function (event) {
                    return event.num > 0;
                },
                content: function () {
                    player.storage.tiancao++;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                },
                intro: {
                    content: 'mark'
                },
                ai: {
                    combo: 'dianyan'
                },
                mark: true,
                marktext: '艹',
                init: function (player) {
                    if (player.storage.tiancao == undefined)
                        player.storage.tiancao = 2;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                },
                mod: {
                    globalFrom: function (from, to, distance) {
                        return distance - from.storage.tiancao;
                    }
                },
                group: ['tiancao2']
            },
            tiancao1: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function () { return true },
                content: function () {
                    if (player.storage.tiancao == undefined)
                        player.storage.tiancao = 2;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                }
            },
            tiancao2: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return player.storage.tiancao > 0;
                },
                content: function () {
                    --player.storage.tiancao;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                    player.draw(2);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1
                    },
                    threaten: 1.5
                },
            },
            dianyan: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return player.storage.tiancao > 1;
                },
                content: function () {
                    player.storage.tiancao -= 2;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                    player.addTempSkill('dianyan1');
                },
                ai: {
                    order: 5,
                    result: {
                        player: function (player) {
                            if (!player.storage.tiancao) return 0;
                            var cards = player.getCards('h', 'sha');
                            if (cards.length) {
                                if (game.hasPlayer(function (current) {
                                    return (player.canUse('sha', current) && get.effect(current, cards[0], player, player) > 0);
                                })) {
                                    return 1;
                                }
                            }
                            return 0;
                        }
                    }
                }
            },
            dianyan1: {
                mod: {
                    //杀额外指定1个目标
                    selectTarget: function (card, player, range) {
                        if (card.name != 'sha') return;
                        if (range[1] == -1) return;
                        var cards = player.getCards('h');
                        range[1] += 1;
                    }
                },
                group: ['qinggang_skill', 'shaDamageMore', 'dianyan2']
            },
            dianyan2: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                frequent: true,
                content: function (player) {
                    player.storage.tiancao++;
                    game.addVideo('storage', player, ['tiancao', player.storage.tiancao]);
                },
            },
            //杨冰怡
            tieyi: {
                audio: 2,
                enable: 'chooseToUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h', { color: 'black' }) > 0;
                },
                filterCard: function (card) {
                    return get.color(card) == 'black';
                },
                position: 'h',
                viewAs: { name: 'diaohulishan' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', { color: 'black' })) return false;
                },
                prompt: '将一张黑色手牌当【调虎离山】使用',
                check: function (card) {
                    return 4 - get.value(card)
                }
            },
            icefeng: {
                trigger: { source: 'damageBegin' },
                filter: function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                frequent: true,
                content: function (player, event, trigger) {
                    trigger.player.addAdditionalSkill('icefeng', ['icefeng2']);
                }
            },
            icefeng2: {
                mark: true,
                marktext: '冰',
                mod: {
                    cardEnabled: function (card) {
                        if (card.name == 'sha' || (get.type(card) == 'trick' && get.tag(card, 'damage')))
                            return false;
                        return true;
                    },
                    cardUsable: function (card) {
                        if (card.name == 'sha' || (get.type(card) == 'trick' && get.tag(card, 'damage')))
                            return false;
                        return true;
                    }
                },
                intro: {
                    content: '不能使用或打出伤害类锦囊和【杀】'
                },
                group: 'icefeng3'
            },
            icefeng3: {
                trigger: { player: 'phaseEnd' },
                direct: true,
                forced: true,
                content: function () {
                    player.removeAdditionalSkill('icefeng', ['icefeng2', 'icefeng3'])
                }
            },
            ershui: {
                trigger: { player: ['phaseEnd', 'phaseBegin', 'useCardAfter', 'loseEnd'] },
                frequent: true,
                filter: function (event, player) {
                    return player.countCards('h') < 5;
                },
                content: function () {
                    player.draw(5 - player.countCards('h'));
                }
            },
            //李钊
            mitao: {
                enable: 'phaseUse',
                usable: 1,
                selectCard: 1,
                filterCard: function (card) {
                    return card.name == 'tao';
                },
                selectTarget: -1,
                filterTarget: function (target) {
                    return target.hp < target.maxHp;
                },
                content: function () {
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        players[i].recover();
                    }
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: [3, 1],
                        value: 0
                    },
                    result: {
                        target: function (player, target) {
                            return (target.hp < target.maxHp) ? 2 : 0;
                        }
                    },
                    tag: {
                        recover: 0.5,
                        multitarget: 1
                    }
                }
            },
            taobao: {
                group: ['taobao1', 'taobao2']
            },
            taobao1: {
                trigger: { player: 'recoverEnd' },
                forced: true,
                audio: 2,
                filter: function (event, player) {
                    return event.source && event.source != player;
                },
                content: function () {
                    trigger.source.draw();
                }
            },
            taobao2: {
                trigger: { player: 'recoverEnd' },
                forced: true,
                audio: 2,
                filter: function (event, player) {
                    return true;
                },
                content: function () {
                    player.draw();
                }
            },
            //汪束
            neighbor: {
                audio: 2,
                trigger: { player: 'phaseDrawBegin' },
                frequent: true,
                content: function () {
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] != player && get.distance(player, players[i]) <= 1)
                            trigger.num++;
                    }
                },
                ai: {
                    threaten: 1.3
                },
                group: 'neighbor1'
            },
            neighbor1: {
                mod: {
                    targetInRange: function (card) {
                        if (card.name == 'sha')
                            return true;
                        var type = get.type(card);
                        if (type == 'trick' || type == 'delay') return true;
                    }
                }
            },
            chemistry: {
                audio: 2,
                trigger: { player: 'phaseEnd' },
                frequent: true,
                forced: true,
                init: function (player) {
                    player.storage.chemistry = [];
                },
                intro: {
                    content: 'cards'
                },
                filter: function (event) {
                    return true;
                },
                content: function () {
                    'step 0'
                    player.storage.chemistry = [];
                    player.syncStorage('chemistry');

                    var cards = [];
                    cards.push(game.createCard('tao'))
                    cards.push(game.createCard('sha'))
                    cards.push(game.createCard('sha', { nature: 'fire' }));
                    cards.push(game.createCard('sha', { nature: 'thunder' }));
                    cards.push(game.createCard('jiu'))

                    cards.push(game.createCard('taoyuan'));
                    cards.push(game.createCard('wugu'));
                    cards.push(game.createCard('juedou'));
                    cards.push(game.createCard('huogong'));
                    cards.push(game.createCard('jiedao'));
                    cards.push(game.createCard('tiesuo'));
                    cards.push(game.createCard('guohe'));
                    cards.push(game.createCard('shunshou'));
                    cards.push(game.createCard('wuzhong'));
                    cards.push(game.createCard('wanjian'));
                    cards.push(game.createCard('nanman'));
                    if (get.is.guozhanMode()) {
                        cards.push(game.createCard('yuanjiao'));
                        cards.push(game.createCard('yiyi'));
                        cards.push(game.createCard('zengbin'));
                        cards.push(game.createCard('shengdong'))
                    }
                    player.chooseCardButton('选择并声明一种牌，下一个回合开始时，随机将你的一张手牌变换成此牌', true, cards, 1).set('ai', function (button) {
                        //优先桃
                        if (player.maxHp - player.hp > 1)
                            return 0;
                        //没满牌无中生有
                        if (player.countCards('h') < player.maxHp)
                            return 13;
                        //满状态没有杀
                        if (player.countCards('h', { name: 'sha' }))
                            return 2;
                        //满状态也有杀，万箭齐发
                        return 14;
                    });
                    'step 1'
                    if (result.bool) {
                        player.storage.chemistry.push(result.links[0]);
                        player.logSkill('chemistry');
                        player.syncStorage('chemistry');
                        player.markSkill('chemistry');
                    }
                },
                ai: {
                    order: 1,
                    threaten: 1.6,
                },
                group: 'chemistry2'
            },
            chemistry2: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h') > 0 && player.storage.chemistry.length > 0;
                },
                content: function () {
                    var hs = player.getCards('h');
                    if (hs.length) {
                        var card = hs.randomGet();
                        card.init([card.suit, card.number, player.storage.chemistry[0].name]);
                        game.log(player, '将一张手牌转化为', { name: player.storage.chemistry[0].name });
                    }
                }
            },
            nvzun: {
                mod: {
                    globalFrom: function (from, to, distance) {
                        if (to.sex == 'female')
                            return distance - 1;
                    },
                    globalTo: function (from, to, distance) {
                        if (from.sex == 'male')
                            return distance + 1;
                    }
                }
            },
            //张嘉予
            muwang: {
                group: ['muwang2'],
                trigger: { player: 'damageBefore' },
                filter: function (event) {
                    return event.nature == 'thunder';
                },
                forced: true,
                frequent: true,
                content: function () {
                    player.draw();
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (card.name == 'tiesuo') return 0;
                            if (get.tag(card, 'thunderDamage')) return 0;
                        }
                    },
                    threaten: 0.5
                }
            },
            muwang2: {
                trigger: { source: 'damageAfter' },
                filter: function (event) {
                    return event.nature == 'thunder';
                },
                frequent: true,
                forced: true,
                popup: false,
                priority: 1,
                content: function () {
                    player.draw();
                }
            },
            //张丹三
            tansuan: {
                unique: true,
                mod: {
                    selectTarget: function (card, player, range) {
                        if (range[1] == -1) return;
                        if (card.name == 'sha') range[1] += 2;
                    },
                    cardUsable: function (card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    }
                }
            },
            //李晶
            order: {
                //出牌阶段，你可以弃置所有牌，
                //指定一名其他角色，令另外所有其他角色角色选择一项：1、对该角色使用一张【杀】；2、交给你一张牌，然后视为你对其使用一张【杀】
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h') > 0
                },
                selectCard: -1,
                filterCard: true,
                position: 'h',
                selectTarget: 1,
                filterTarget: function (card, player, target) {
                    return target != player;
                },
                content: function () {
                    "step 0"
                    event.targets = game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.remove(target);
                    event.targets.sortBySeat();
                    "step 1"
                    if (event.targets.length) {
                        event.current = event.targets.shift();
                        if (event.current.countCards('he') && target.isAlive()) {
                            event.current.chooseToUse({ name: 'sha' }, target, -1, '号令').set('prompt2', '选择一项：1. 对' + get.translation(event.current) + '使用一张杀；2. 取消并交给' + get.translation(player) + '一张牌，然后视' + get.translation(player) + '为对你使用一张杀');
                        }
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.bool == false) {
                        if (event.current.countCards('he')) {
                            event.current.chooseCard('he', true, '交给' + get.translation(player) + '一张牌');
                        }
                        else {
                            event.goto(4);
                        }
                    }
                    else {
                        event.goto(1);
                    }
                    "step 3"
                    if (result.bool) {
                        event.current.give(result.cards, player);
                    }
                    "step 4"
                    player.useCard({ name: 'sha' }, event.current, false);
                    event.goto(1);
                },
                ai: {
                    order: 5,
                    result: {
                        target: function (player, target) {
                            var players = game.filterPlayer();
                            if (player.hp > 1) {
                                if (game.phaseNumber < game.players.length) return 0;
                                if (player.hasUnknown()) return 0;
                            }
                            var effect = 0;
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != target && players[i] != player && players[i].countCards('he'))
                                    effect += get.effect(target, { name: 'sha' }, players[i], target);
                            }
                            return effect;
                        }
                    }
                }
            },
            //宋昕冉
            guoer: {
                audio: 4,
                enable: 'chooseToUse',
                filter: function (event, player) {
                    return player.countCards('h', { name: 'tao' }) > 0;
                },
                filterCard: function (card) {
                    return card.name == 'tao';
                },
                selectCard: 1,
                position: 'h',
                viewAs: { name: 'wuzhong' },
                viewAsFilter: function (player) {
                    if (!player.countCards('h', { name: 'tao' })) return false;
                },
                prompt: '将【桃】牌当【无中生有】使用',
                check: function (card) {
                    return card.name == 'tao'
                },
                group: 'guoer2'
            },
            guoer2: {
                trigger: { player: 'useCardAfter' },
                filter: function (event) {
                    return event.card && event.card.name == 'tao'
                },
                frequent: true,
                content: function () {
                    player.draw();
                }
            },
            xiaohua: {
                unique: true,
                gainable: true,
                group: ['xiaohua1', 'xiaohua2'],
            },
            xiaohua1: {
                audio: 2,
                trigger: { global: 'discardAfter' },
                filter: function (event, player) {
                    if (event.player == player) return false;
                    if (event.cards && event.cards.length > 0) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.suit(event.cards[i]) == 'heart' && get.position(event.cards[i]) == 'd')
                                return true;
                        }
                    }
                    return false;
                },
                forced: true,
                frequent: true,
                check: function (event, player) {
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.suit(event.cards[i]) == 'heart' && get.position(event.cards[i]) == 'd') {
                            if (event.cards[i].name == 'du') return false;
                        }
                    }
                    return true;
                },
                content: function () {
                    "step 0"
                    if (trigger.delay == false) game.delay();
                    "step 1"
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (get.suit(trigger.cards[i]) == 'heart' && get.position(trigger.cards[i]) == 'd') {
                            cards.push(trigger.cards[i]);
                        }
                    }
                    if (cards.length) {
                        player.gain(cards, 'log');
                        player.$gain2(cards);
                    }
                },
            },
            xiaohua2: {
                audio: 2,
                trigger: { global: 'judgeAfter' },
                forced: true,
                frequent: true,
                check: function (event, player) {
                    return event.result.card.name != 'du';
                },
                filter: function (event, player) {
                    if (event.player == player) return false;
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    return (get.suit(event.result.card) == 'heart');
                },
                content: function () {
                    player.gain(trigger.result.card, 'log');
                    player.$gain2(trigger.result.card);
                }
            },
            //陈琳
            datou: {
                unique: true,
                locked: true,
                group: ['datou1', 'datou2'],
                ai: {
                    effect: {
                        target: function (card) {
                            if (card.name == 'wanjian') return [0, 1];
                        }
                    }
                }
            },
            datou1: {
                audio: 2,
                trigger: { target: 'useCardToBefore' },
                forced: true,
                priority: 15,
                filter: function (event, player) {
                    return (event.card.name == 'wanjian');
                },
                content: function () {
                    player.logSkill('datou');
                    trigger.cancel();
                }
            },
            datou2: {
                trigger: { global: 'useCardAfter' },
                forced: true,
                filter: function (event, player) {
                    return (event.card.name == 'wanjian' && event.player != player && get.position(event.card) == 'd' && get.itemtype(event.card) == 'card');
                },
                content: function () {
                    player.logSkill('datou');
                    player.gain(trigger.card);
                    player.$gain2(trigger.card);
                }
            },
            xunshan: {
                audio: 2,
                unique: true,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    if (target == player)
                        return false;
                    if (get.is.guozhanMode())
                        return true;
                    else if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return true;
                    else
                        return false;
                },
                filter: function (event, player) {
                    return !player.storage.xunshan;
                },
                init: function (player) {
                    player.storage.xunshan = false;
                },
                mark: true,
                intro: {
                    content: 'limited'
                },
                skillAnimation: 'epic',
                animationColor: 'thunder',
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                check: function (event, player) {
                    var num = game.countPlayer(function (current) {
                        if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                            return true;
                        }
                        if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                            return true;
                        }
                    });
                    return num >= 2;
                },
                content: function () {
                    "step 0"
                    player.unmarkSkill('xunshan');
                    player.storage.xunshan = true;
                    var targets = game.filterPlayer();
                    targets.remove(player);
                    targets.sort(lib.sort.seat);
                    event.targets = targets;
                    event.num = 0;
                    player.line(targets, 'green');
                    "step 1"
                    if (num < event.targets.length) {
                        var hej = event.targets[num].getCards('hej')
                        if (hej.length) {
                            var card = hej.randomGet();
                            player.gain(card, event.targets[num]);
                            if (get.position(card) == 'h') {
                                event.targets[num].$giveAuto(card, player);
                            }
                            else {
                                event.targets[num].$give(card, player);
                            }
                        }
                        event.num++;
                        event.redo();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: function (player) {
                            var num = 0;
                            var players = game.filterPlayer();
                            players.sortBySeat();

                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != player) {
                                    var att = get.attitude(player, players[i]);
                                    //友
                                    if (att > 0) att = 1;
                                    //敌
                                    if (att < 0) att = -1;

                                    num += att;
                                }
                            }
                            return -players.length / 3 - num;
                        }
                    }
                }
            },
            //潘瑛琦
            liangong: {
                trigger: {
                    global: "damageEnd",
                },
                usable: 1,
                frequent: true,
                locked: false,
                notemp: true,
                init: function (player) {
                    player.storage.liangong = [];
                },
                filter: function (event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink() && _status.currentPhase != player;

                },
                content: function () {
                    "step 0"
                    player.draw();
                    "step 1"
                    if (player.countCards('h')) {
                        player.chooseCard('将' + get.cnNumber(1) + '张手牌置于武将牌上作为“功”', 1, true);
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (result.cards && result.cards.length) {
                        player.lose(result.cards, ui.special);
                        player.storage.liangong = player.storage.liangong.concat(result.cards);
                        player.syncStorage('liangong');
                        player.markSkill('liangong');
                        game.log(player, '将', result.cards, '置于武将牌上作为“功”');
                    }
                },
                intro: {
                    content: "cards",
                },
                mark: true,
                marktext: '功',
                group: "liangong_1",
                subSkill: {
                    "1": {
                        trigger: {
                            player: "damageBegin",
                        },
                        filter: function (event, player) {
                            return player.storage.liangong.length > 1;
                        },
                        content: function () {
                            'step 0'
                            player.chooseCardButton('移去两张“功”', 2, player.storage.liangong, true);
                            'step 1'
                            if (event.directresult || result.bool) {
                                player.logSkill('liangong');
                                var links = event.directresult || result.links;
                                for (var i = 0; i < links.length; i++) {
                                    player.storage.liangong.remove(links[i]);
                                }
                                player.syncStorage('liangong');
                                if (!player.storage.liangong.length) {
                                    player.unmarkSkill('liangong');
                                } else {
                                    player.markSkill('liangong');
                                }
                                player.$throw(links);
                                game.log(player, '被移去了', links);
                                for (var i = 0; i < links.length; i++) {
                                    links[i].discard();
                                }
                            }
                            'step 2'
                            trigger.cancel();
                        },
                        sub: true,
                    },
                },
                ai: {
                    threaten: 0.8,
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return;
                                return 0.8;
                            }
                        }
                    }
                }
            },
            tisheng: {
                enable: 'phaseUse',
                usable: 1,
                audio: 2,
                filterTarget: true,
                filter: function (event, player) {
                    return player.storage.liangong.length > 0;
                },
                content: function () {
                    "step 0"
                    player.chooseCardButton(player.storage.liangong, true);
                    "step 1"
                    var card = result.links[0];
                    card.discard();
                    player.$throw(card);
                    player.storage.liangong.remove(card);
                    if (!player.storage.liangong.length) {
                        player.unmarkSkill('tisheng');
                    }
                    else {
                        player.markSkill('tisheng');
                    }
                    player.syncStorage('tisheng');
                    "step 2"
                    target.draw(2);
                    player.recover();
                },
                ai: {
                    order: function (skill, player) {
                        if (player.hp < player.maxHp && player.storage.liangong.length > 1) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        target: function (player, target) {
                            if (target.hasSkillTag('nogain')) return 0;
                            if (target.hasJudge('lebu')) return 0;
                            var nh = target.countCards('h');
                            var np = player.countCards('h');
                            if (player.hp == player.maxHp || player.storage.liangong == 0) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        }
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', { subtype: get.subtype(card) })) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        }
                    },
                    threaten: 0.8
                }
            },
        },
        translate: {
            //S
            SNH48Gchenguanhui: '陈观慧',
            SNH48Gchengjue: '成珏',
            SNH48Gchensi: '陈思',
            SNH48Gdaimeng: '戴萌',
            SNH48Gjiangyun: '蒋芸',
            SNH48Gkongxiaoyin: '孔肖吟',
            SNH48Glvyi: '吕一',
            SNH48Gliyuqi: '李宇琪',
            SNH48Gliuzengyan: '刘增艳',
            SNH48Gmohan: '莫寒',
            SNH48Gpanyanqi: '潘燕琦',
            SNH48Gqianbeiting: '钱蓓婷',
            SNH48Gqiuxinyi: '邱欣怡',
            SNH48Gsunrui: '孙芮',
            SNH48Gshaoxuecong: '邵雪聪',
            SNH48Gshenzhilin: '沈之琳',
            SNH48Gwenjingjie: '温晶婕',
            SNH48Gwuzhehan: '吴哲晗',
            SNH48Gxuchenchen: '徐晨辰',
            SNH48Gxujiaqi: '许佳琪',
            SNH48Gxuyiren: '徐伊人',
            SNH48Gxuzixuan: '徐子轩',
            SNH48Gyuandanni: '袁丹妮',
            SNH48Gyuanyuzhen: '袁雨桢',
            SNH48Gzhangyuge: '张语格',
            SNH48Gzhaohanqian: '赵韩倩',
            SNH48Gzhaoye: '赵晔',
            SNH48Gchenjunyu: '陈俊羽',
            SNH48Gzhuxiaodan: '朱小丹',
            SNH48Gzhaojiamin: '赵嘉敏',

            //N
            SNH48Gchenjiaying: '陈佳莹',
            SNH48Gchenwenyan: '陈问言',
            SNH48Gfengxinduo: '冯薪朵',
            SNH48Gguoqianyun: '郭倩云',
            SNH48Ghuangtingting: '黄婷婷',
            SNH48Ghaowanqing: '郝婉晴',
            SNH48Ghexiaoyu: '何晓玉',
            SNH48Gjinyingyue: '金莹玥',
            SNH48Gjiangzhenyi: '江真仪',
            SNH48Gliujuzi: '刘菊子',
            SNH48Gliupeixin: '刘佩鑫',
            SNH48Gluting: '陆婷',
            SNH48Gtaoboer: '陶波尔',
            SNH48Gxieni: '谢妮',
            SNH48Gyijiaai: '易嘉爱',
            SNH48Gzhaoyue: '赵粤',
            SNH48Gzhangyi: '张怡',
            SNH48Gzhangyuxin: '张雨鑫',

            SNH48Gjujingyi: '鞠婧祎',

            //H
            SNH48Gfeiqinyuan: '费沁源',
            SNH48Ghongpeiyun: '洪珮雲',
            SNH48Gjiangshan: '姜杉',
            SNH48Gjiangshuting: '蒋舒婷',
            SNH48Glijiaen: '李佳恩',
            SNH48Glinnan: '林楠',
            SNH48Glinsiyi: '林思意',
            SNH48Gliyitong: '李艺彤',
            SNH48Gqiyuzhu: '戚予珠',
            SNH48Gshenmengyao: '沈梦瑶',
            SNH48Gsongyushan: '宋雨珊',
            SNH48Gsunzhenni: '孙珍妮',
            SNH48Gwanlina: '万丽娜',
            SNH48Gwangyi: '王奕',
            SNH48Gxuhan: '徐晗',
            SNH48Gxiongqinxian: '熊沁娴',
            SNH48Gxuyangyuzhuo: '许杨玉琢',
            SNH48Gyanghuiting: '杨惠婷',
            SNH48Gyujiayi: '於佳怡',
            SNH48Gyuanyiqi: '袁一琦',
            SNH48Gzhangxin: '张盺',
            SNH48Gzengxiaowen: '曾晓雯',

            SNH48Gliujiongran: '刘炅然',

            //X
            SNH48Gchenlin: '陈琳',
            SNH48Gchenyunling: '陈韫凌',
            SNH48Gfengxiaofei: '冯晓菲',
            SNH48Glizhao: '李钊',
            SNH48Gpanyingqi: '潘瑛琦',
            SNH48Gqijing: '祁静',
            SNH48Gsongxinran: '宋昕冉',
            SNH48Gsunxinwen: '孙歆文',
            SNH48Gwangjialing: '汪佳翎',
            SNH48Gwangshu: '汪束',
            SNH48Gwangxiaojia: '王晓佳',
            SNH48Gxushiqi: '徐诗琪',
            SNH48Gxietianyi: '谢天依',
            SNH48Gyangbingyi: '杨冰怡',
            SNH48Gyangyunyu: '杨韫玉',
            SNH48Gzhangdansan: '张丹三',
            SNH48Gzhangjiayu: '张嘉予',

            SNH48Glijing: '李晶',

            SNH48Gwangzijie: '王子杰',
            SNH48Gaji: '阿吉',
            SNH48Gyegou: '叶盛',
            SNH48Gmulaosi: '马跃',
            SNH48Gpiggyrae: '朱小希',

            //技能显示名称，技能说明文字
            fengfa: '风发',
            fengfa_info: '出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用。',
            gaoshi: '搞事',
            gaoshi_info: '出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。',
            kuaihuo: '快活',
            kuaihuo_info: '当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。',
            letian: '乐天',
            letian_info: '你可以立即获得你的判定牌',
            modi: '魔笛',
            modi_info: '锁定技：你的防御距离+1',
            zhanwu: '战舞',
            zhanwu_info: '出牌阶段，你可以交给任一其他角色一张装备牌或【杀】，该角色进行二选一：1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】。2. 摸一张牌。每回合限一次。',
            tianlai: '天籁',
            tianlai_info: '每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，其受到一点雷电伤害，然后你回复一点体力；若结果为黑桃，其受到两点雷电伤害',
            quanneng: '全能',
            quanneng_info: '你可以将[杀]当[闪]，或[闪]当[杀]使用或打出',
            yezhan: '夜战',
            yezhan_info: '当你成为一张指定了多个目标的锦囊牌的目标时，你可以取消之，并摸一张牌。',
            zhanbu: '占卜',
            zhanbu_info: '观星+傲才+秘计',

            //初心不忘设计的技能
            wenrou: '温柔',
            wenrou_info: '每当有角色受到伤害后，若其体力值与你相同，你选择你或他摸一张牌',
            //丶Gone设计的技能
            luandance: '乱舞',
            luandance_info: '令除你外的所有SNH48G非官方角色依次对另一名角色使用一张【杀】，无法如此做者受到1点伤害。',
            tiaosuo: '挑唆',
            tiaosuo_info: '出牌阶段，你可以弃一张牌，视为一名SNH48角色对另一名SNH48角色使用一张[决斗]，每阶段限一次',

            //鞠婧祎篇
            dufei: '毒妃',
            dufei_info: '锁定技：每当其他角色弃置、判定、拼点、使用后并进入弃牌堆的毒，你获得之。你每有一个【毒】，手牌上限+1。你使用毒时不会流失体力，反而会回复1点体力。',
            poisonousfog: '毒雾',
            poisonousfog_info: '出牌阶段限一次，你可以弃置两张【毒】，若如此做，除你之外的所有角色失去1点体力',
            jiedu: '解毒',
            jiedu_info: '其他角色失去体力濒死时，你可以弃置一张"毒"，使其回复至1点体力。然后你摸一张牌',
            duzong: '毒宗',
            duzong_info: '觉醒技：若你手中的【毒】大于等于两张，你体力上限-1并回复1点体力，永久获得技能【心血】',
            xinxie: '心血',
            xinxie_info: '你每次使用【毒】之后，摸1张牌；你的结束阶段，随机将一张手牌转化为毒。',

            //赵嘉敏篇
            shuangfa: '双发',
            shuangfa_info: '出牌阶段使用的第一张可以打出两次的牌将使用或打出两次',
            buzhuang: '补妆',
            buzhuang_info: '回合结束时，你随机装备一件装备（不替换现有装备）',

            //参考   北极瑞风HZYQ设计的技能
            dandang: '担当',
            dandang_info: '当你攻击距离内的角色被杀指定为目标时，你可弃一张牌并将该杀的目标转移至你身上。',
            jianyi: '坚毅',
            jianyi_info: '当你受到伤害时，若你的伤害来源不弃一张牌，此次伤害-1。',
            lingjun: '领军',
            lingjun_info: '主公技，当你陷入濒死状态时，与你同势力的角色对你使用的[桃]额外回复一点体力值。你以此法脱离濒死状态时，其摸一张牌。',
            shiyu: '食欲',
            shiyu_info: '每当你使用杀对一名角色造成伤害时，你可与其拼点，若你赢，你获得对方的一张牌并且摸一张牌。',
            yuyan: '预言',
            yuyan_info: '回合外每失去一张牌，你选择一个颜色并进行一次判定，若结果相同，你获得该判定牌。',
            mowang: '魔王',
            mowang_info: '你每受到一点伤害，你对伤害来源造成X点伤害，其可选择弃置手牌来降低伤害，每弃置一张降低一点（X为已损失体力值）。',
            ziqiang: '自强',
            ziqiang_info: '主公技，觉醒技, 准备阶段，若你的体力为全场最低（或之一），你增加一点体力上限并回复1点体力，获得技能【魔王】',
            jingwu: '精武',
            jingwu2: '精武',
            jingwu2_info: '体力值为单数：【杀】无视距离且能额外指定一名角色',
            jingwu3: '精武',
            jingwu3_info: '体力值为双数：【杀】无视防具且可额外使用1个【杀】',
            jingwu_info: '你的杀根据当前体力值获得如下效果。体力值为单数：无视距离且能额外指定一名角色；体力值为双数：无视防具且可额外使用1个杀。',
            tianyin: '甜音',
            tianyin_info: '出牌阶段限一次，你可弃置一张红色手牌并指定一名角色，该角色回复1点体力。',

            wenwan: '温婉',
            wenwan_info: '锁定技：你使用或打出的闪根据当前体力值获得如下效果：体力值为单数：结算后摸两张牌；体力值为双数：该闪结算后视为对伤害来源使用乐不思蜀。',
            fuhei: '腹黑',
            fuhei2: '腹黑',
            fuhei_info: '出牌阶段，你可弃置一张黑桃牌并选择一名角色，对其造成1点伤害，若如此做，下一个该角色的回合你需要两张闪来响应该角色的杀。',
            fuhei2_info: '对陈观慧使用杀时，陈观慧需要使用两个闪才能抵消',


            shenhun: '神魂',
            shenhun_bg: '音',
            shenhun_mark_bg: '音符',
            shenhun_info: '你的判定牌生效时，你可将该判定牌置于你的武将牌上，称为"音符"。你的手牌上限+X（X为音符数）。',
            diandao: '颠倒',
            diandao_info: '你的回合外每受到一次伤害可进行一次判定，判定结果为：♥你回复1点体力；♦︎你摸两张牌；♣伤害来源弃两张牌；♠伤害来源受到一点伤害。',
            xinggan: '性感',
            xinggan_info: '觉醒技，你的回合内若音符数大于你体力值，你体力上限-1，获得技能"美艳"。',
            meiyan: '美艳',
            meiyan_info: '出牌阶段限一次，你可弃置一张武将牌最上面的【音符】并指定一名角色，视为对该角色使用乐不思蜀。',
            kuaidao: '快刀',
            kuaidao_info: '使用杀指定目标后，你可以弃置其一张手牌，若此牌与【杀】花色相同，此【杀】不可被【闪】响应；同时若此牌为装备牌，此杀伤害+1；此【杀】结算后，该角色获得此【杀】',
            qiaoyan: '巧盐',
            qiaoyan_info: '你可以将黑色牌当借刀杀人使用，锁定技：每当黑色锦囊牌造成伤害时，若你为伤害来源，你防止此伤害；锁定技：每当你受到黑色锦囊牌对你造成的伤害时，你防止此伤害。',
            chongaaaa: '冲啊',
            chongaaaa_info: '出牌阶段限一次，你可弃置X张手牌并最多指定你当前体力值的角色各摸1张牌。',
            beifen: '辈分',
            beifen_info: '锁定技：你不会受到体力值不低于你的角色使用锦囊时造成的伤害。',
            yuanzhen: '圆阵',
            yuanzhen_info: '限定技，回合开始时，若你已受伤，你可摸X张牌，并回复1点体力（X为场上与你同势力角色数）',
            chengzhang: '成长',
            chengzhang2: '成长',
            chengzhang_info: '锁定技。装备区每多一张牌，体力上限+1并回复1点体力。每失去一张装备区内的牌，体力上限-1。你根据装备区里牌的数量获得以下技能：1种或以上-温柔；2种或以上-坚毅；3种或以上-豪迈；4种或以上-美人；5种-皇冠。',
            yanji: '演技',
            yanji_info: '其他角色对你使用杀时，你可说出一种牌并将一张手牌背面朝上出示之，该角色可选择是否质疑，若不质疑，跳过当前结算阶段。若质疑则展示，若为真，对方给你一张装备牌或让你对其造成1点伤害；若为假，你失去1点体力，对方获得你展示的手牌。（丰富的表情包既能表达情绪也能掩盖心思）',
            haomai: '豪迈',
            haomai_info: '锁定技：你受到和使用杀或决斗造成伤害时结算结束后伤害+1。',
            shengou: '神钩',
            shengou_info: '你可在其它任意角色的出牌阶段开始时与其拼点，若你赢，你获得其一张牌。若你没赢，你获得一个神钩标记，失去1点体力，摸一张牌。你有7个神钩标记时，失去此技能。',
            secret: '奥秘',
            secret_info: '回合结束后，若你的武将牌正面朝上，你可以与一名其他角色同时翻面，然后各摸两张牌。',
            meiren: '美人',
            meiren_info: '锁定技：（英姿）摸牌阶段多摸一张牌，（闭月）回合结束阶段摸一张牌',
            jiangshan: '江山',
            jiangshan_info: '摸牌阶段开始前，你可以跳过摸牌阶段并观看牌堆最上方5张牌，然后获得其中不同类型的牌各1张，其余牌弃置。',
            jiamian: '加冕',
            jiamian_info: '觉醒技，出牌阶段开始时，若你的手牌包含了四种不同花色的牌，你体力上限-1，回复1点体力，永久获得技能"皇冠"。',
            huangguan: '皇冠',
            huangguan_info: '出牌阶段限一次，你可弃置任意张手牌并指定不多于弃置手牌数的其他角色，视为你对这些角色随机造成X点伤害，随后你翻面（X为弃牌数量）。',
            longgong: '龙宫',
            longgong_info: '弃牌阶段开始前，你可摸X张牌，X为场上与你同势力的角色数',
            luogod: '络神',
            luogod_info: '你的准备阶段，可进行一定判定，若为红色则可以继续判定，直到出现黑色。然后你获得所有红色的判定牌',
            huangzi: '皇子',
            huangzi_info: '觉醒技，回合开始时，若你的体力值小于等于你的体力上限的一半，你失去1点体力上限，回复1点体力，并获得技能【江山】，【神钩】',
            tongyin: '痛饮',
            ganbei: '干杯',
            ganbei_info: '每当一名角色进入濒死状态，你可弃置一瓶可乐为其回复1点体力，并且自己也获得【酒】的效果。',
            kele: '可乐',
            kele_info: '下一次使用杀造成的伤害+1，可与【酒】叠加，此效果持续到你的回合结束或使用杀结算后。',
            tongyin_bg: '可',
            tongyin_mark_bg: '可乐',
            tongyin_info: '锁定技：每当其他角色弃置、判定、拼点、使用后的【酒】进入弃牌堆后，你可将其置于你的武将牌上，称为"可乐"。',
            yonglie: '涌烈',
            yonglie_info: '出牌阶段，你可弃置所有可乐，指定最多不超过3名角色造成共计X点伤害(X为可乐数)，随机分配每名目标角色受到的伤害点数。',
            meixi: '妹系',
            meixi_info: '锁定技：没有装备防具时视为装备【白银狮子】（你每次受到伤害时，最多承受1点伤害（防止多余的伤害）；没有装备防具时装备一个防具，你回复1点体力）',
            nvwang: '女王',
            nvwang_info: '锁定技：你使用杀对一名体力上限大于2的角色造成伤害时，你可以使目标角色进行三选一：1，终止该次伤害，弃置装备区内的所有牌并失去1点体力；2，终止该次伤害，弃置一张装备牌并失去1点体力上限,；3，失去1点体力上限，并依然承受该次伤害。',
            laydown: '雷当',
            laydown_info: '对男性角色使用杀后（SNH48模式无性别限制），你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。',
            tongxin: '同心',
            tongxin_info: '除你之外每当与你势力相同的武将受到伤害时，你可失去X点体力并对伤害来源进行一次判定，若为黑色，视为你对其造成X点雷属性伤害；若为红色，视为你对其造成X点火属性伤害（X为受到的伤害值）；然后再进行一次判定，若为黑色，你失去1点体力，若为红色，你弃1张牌，（没有则不弃）。',
            dedication: '奉献',
            dedication_info: '你死亡时，你可令一名角色获得技能"同心"并将手牌补至体力上限，最多5张。',
            juxia: '聚虾',
            juxia_bg: '虾',
            juxia_mark_bg: '虾',
            juxia_info: '锁定技：每当你使用或打出锦囊牌，你进行一次判定，若结果不为红桃，你将已使用的锦囊牌置于你的武将牌上，称为"虾"。弃牌阶段，若你的手牌数少于虾，跳过弃牌阶段。',
            qiangong: '钱攻',
            qiangong_info: '觉醒技，回合开始阶段，若你手牌数小于虾，你减1点体力上限并回复1点体力，然后获得技能【成塔】。',
            chengta: '成塔',
            chengta_info: '出牌阶段限两次，你可以使用【虾】中的牌，可再次触发【聚虾】。',
            yibing: '异禀',
            yibing_info: '锁定技：若你手牌数小于等于1，任何无属性的伤害对你无效。',
            tianpin: '甜品',
            tianpin_info: '出牌阶段限一次，你可以弃置1张牌，令一名角色回复1点体力并可以弃置其判定区的一张牌，如果目标是自己，弃一张牌（没有则不弃）。',
            jiaozhu: '教主',
            jiaozhu_info: '当你失去最后一张手牌时，你可选择一名角色令其摸一张牌或弃一张牌。',
            tisu: '提速',
            tisu_info: '每当一名角色使用闪抵消你的杀时，你可再对其一张杀，并且获得一枚速度标记；你每有一个速度标记，杀额外造成1点伤害，杀结算后，移除所有速度标记。',
            fenfa: '奋发',
            fenfa_info: '锁定技。每当一名其他角色弃置的杀进入弃牌堆时，你将其加入手牌。',
            complement: '补刀',
            complement_info: '每当一名角色造成伤害时，你可向受伤角色使用一张杀，补刀杀不计入使用限制。',
            kuxuan: '酷炫',
            kuxuan2: '酷炫',
            kuxuan_info: '摸牌阶段开始前，你可进行一次判定，获得判定牌，你在你的回合内，可以将所有与判定牌相同颜色的手牌视为杀使用或打出，并且此类杀不计入使用次数限制。',
            kuaiyan: '快言',
            kuaiyan_info: '出牌阶段仅一次，你可选择一名其他角色进行一次判定，若结果为黑色，其受到1点雷属性伤害。',
            innocence: '无邪',
            innocence_info: '当其他角色的♦︎牌，因弃牌或判定而进入弃牌堆时，你获得之。',
            talent: '颍资',
            talent_info: '出牌阶段开始时，你可与一名角色拼点，若你赢，你可令其选择弃两张牌或你对其造成1点伤害。若你输，你跳过出牌阶段。',
            wenhe: '温和',
            wenhe_info: '每当一名角色的判定牌生效前，你可打出一张牌替代之，若该牌与判定牌花色相同，你获得该判定牌。',
            guayan: '寡言',
            guayan_info: '你不能成为延时类锦囊的目标，你使用非延时类锦囊无距离限制。',
            xuanmu: '炫目',
            xuanmu_info: '每当你受到1点伤害，你可随机获得每名其他角色区域内的一张牌。然后你翻面。',
            zanmei: '赞美',
            zanmei_info: '摸牌阶段，你可少摸一张牌并让一名其他角色摸一张牌。',
            luanyin: '乱音',
            luanyin_info: '出牌阶段，你可选择两名其他角色，你弃置二者手牌或装备区之差的牌，然后令双方交换手牌或装备区内的牌。',
            luansheng: '孪生',
            luansheng_info: '锁定技。你每次获得牌之后，进行一次判定，若结果为红色，额外摸一张牌，每阶段限一次。你每次翻面，你弃置你的1张角色区的牌。',
            qigai: '气概',
            qigai_info: '出牌阶段仅一次，若你手牌数大于你当前体力值，你可将手牌弃置到当前体力值，然后选择一项：；摸X+1张牌，弃置一张牌；摸一张牌，弃置X+1张牌或受到（X+1）/2点伤害。X为弃牌数。',
            rexin: '热心',
            rexin_info: '其他角色弃牌时，你可选择一张牌，该角色收回与此牌颜色相同的牌，你获得与此牌颜色不同的牌。',
            qiangyin: '强音',
            qiangyin_info: '出牌阶段，你可指定一名角色，该角色弃置两张牌，然后你失去1点体力。',
            jinwu: '劲舞',
            jinwu_info: '弃牌阶段开始时，若你区域内的牌数之和大于等于当前体力值，你回复1点体力。',
            chengshu: '成熟',
            chengshu_info: '锁定技。你与所有体力值大于你的角色距离+1，与所有手牌数少于你的角色距离-1。',
            ganxing: '感性',
            ganxing_discard: '弃置',
            ganxing_info: '出牌阶段限一次, 你可指定一名其他角色并指定一个花色，观看手牌，然后你弃置其手牌或装备牌理一张此花色的牌。',
            huopo: '活泼',
            huopo2: '活泼',
            huopo_info: '回合结束阶段，你可将任意张手牌交给一名其它角色，若你这么做，该角色的下个回合开始时，你摸两倍数量的牌。',
            huopo2_info: '回合开始时，袁雨桢摸刚刚交给你的数量两倍的牌',
            baofa: '爆发',
            baofa_info: '锁定技。你不能使用或打出无懈可击。你可将无懈可击当杀使用或打出，并且此类杀不计入使用次数限制。你的杀可指定的目标数等于你当前的攻击距离。',
            caihua: '才华',
            caihua_info: '你的杀造成伤害时，你可展示一张牌并进行一次判定，若颜色相同，你获得该判定牌。',
            jingyan: '惊艳',
            jingyan_info: '摸牌阶段，你多摸一张牌。结束阶段开始时，你摸一张牌，然后可以将两张牌置于武将牌上，在你的下一个回合开始时，获得技能【未来】',
            mirai: '未来',
            mirai_info: '下一个回合中你的下两个伤害锦囊牌造成的伤害+1',
            qichang: '气场',
            qichang2: '气场',
            qichang2_info: '【无懈可击】无法被使用或者打出',
            qichang_info: '出牌阶段限一次，你可以弃置一张牌，令除自己外所有玩家的【无懈可击】无法被使用或者打出，直到回合结束',
            duomian: '多面',
            duomian_info: '出牌阶段限两次，你可以将两张手牌当做风标军争非延时锦囊使用',
            mengdong: '懵懂',
            mengdong_info: '锁定技。每当你使用一张基本牌，你摸一张牌并展示之',
            maomao: '冒冒',
            maomao_info: '限定技，当你处于濒死状态时，你可以弃置你判定区的牌，复原你的武将牌，并摸三张牌，将体力回复至3点',
            //摸牌阶段，你可放弃摸牌，选择弃一张牌或跳过出牌阶段，令一名角色获得一个额外的回合。
            liren: '利刃',
            liren_info: '摸牌阶段开始时，若你的手牌大于等于你当前体力值，你可指定一名其他角色，视为你对该角色使用了一张【决斗】，若如此做，你少摸一张牌',
            shouzhuo: '守拙',
            shouzhuo_info: '你的手牌上限增加场上同势力成员数，当你需要打出一张杀或闪响应时，你可将两张手牌当做其使用或打出',
            //N
            xingwen: '行文',
            xingwen_info: '你的准备阶段，可展示牌堆顶的一张牌并如此往复，直到出现展示的牌与上一张类型相同为止。然后你获得所有展示的牌',
            duoyi: '朵颐',
            duoyi_info: '你对自己使用桃时额外回复1点体力',
            huobing: '火并',
            huobing_info: '出牌阶段限一次，你与一名其他角色拼点，若你赢，视为你对其使用【决斗】，若你没赢，视为其对你使用【决斗】。此【决斗】不能被【无懈可击】响应',
            renwu: '刃舞',
            renwu_info: '锁定技：所有角色的回合结束后，若你的武将牌背面朝上，翻回正面。',
            dage: '大哥',
            dage_info: '锁定技：手牌数小于你的角色对你使用杀无效。觉醒技，你的回合开始时，若你的体力全场最低，你失去1点体力上限，回复1点体力，并获得技能【亮龙】',
            kongchang: '控场',
            kongchang_info: '每次受到伤害后，展示牌堆顶的X张牌，并将其交给任意1~X名角色（X为当前场上存活的角色数量，且最大为4）',
            lianglong: '亮龙',
            lianglong_info: '【杀】无距离限制，且可以无限出杀。',
            hainv: '海女',
            hainv1: '海女',
            hainv_info: '出牌阶段限一次，你可将两张红色手牌当做【水淹七军】使用。锁定技：【水淹七军】对你无效',
            pupu: '卟卟',
            pupu_info: '锁定技：每当你受到或造成一次伤害，从牌堆摸一张牌',
            yancang: '盐仓',
            yancang_info: '锁定技：你跳过你的判定阶段。',
            jiezou: '节奏',
            jiezou_info: '出牌阶段各限一次，你可以：1（挑衅），指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌；2（挑唆），弃一张牌，视为一名SNH48角色对另一名SNH48角色使用一张[决斗]（此决斗不可被无懈可击响应）',
            zhengyi: '正义',
            zhengyi_info: '弃置一张手牌，并选择一个角色，该角色的回合开始时进行一次判定。若结果为♠，其受到2点雷属性伤害，并且若点数为2~9，改为受到3点雷属性伤害。若为♣，弃置两张牌。',
            tianjiangzhengyi: '天降正义',
            tianjiangzhengyi_info: '判定阶段进行一次判定。若结果为♠，其受到2点雷属性伤害，并且若点数为2~9，改为受到3点雷属性伤害。若为♣，弃置两张牌。',
            //H
            yonggu: '永固',
            yonggu_info: '你的准备阶段，若你的体力值全场最低，可令所有体力值大于你的角色选择一项：1，弃置一张牌，然后你回复1点体力；2，摸一张牌，然后武将牌翻面',
            pengyue: '捧月',
            pengyue_info: '其他角色弃置的装备牌进入弃牌堆后，你获得之。每当你装备一张装备牌，摸一张牌',
            haosi: '壕肆',
            haosi_info: '摸牌阶段额外摸你装备区数量的牌，弃牌阶段开始时弃你装备区数量的牌。',
            jianfeng: '剑锋',
            jianfeng_info: '锁定技：当你对一个目标造成大于1点的伤害时，目标相邻且距离为1的角色也同样会受到伤害，但伤害-1',
            haibao: '海豹',
            haibao_info: '锁定技：你的♥均视为♠；你的♦︎均视为♣',
            tiequan: '铁拳',
            tiequan_info: '锁定技：你的【杀】无视防具且伤害+1，使用【杀】指定目标或成为【杀】的目标后，摸一张牌。',
            //tianxuan: '天选',
            //tianxuan_info: '出牌阶段限一次：弃置一张黑色手牌，获得一个额外的回合。',
            tianxuan: '天选',
            tianxuan_info: '出牌阶段你可以将两张同花色手牌当【挟天子以令诸侯】使用',
            yuanqi: '元气',
            yuanqi_info: '当你需要使用或打出【闪】时，你可以选择一项：1，令当前回合角色摸一张牌；2，令当前回合角色弃置你的一张手牌或装备牌。若如此做，视为你使用或打出了一张【闪】',
            taizi: '太子',
            taizi_info: '出牌阶段限一次，你可以将任意一张红色手牌当【以逸待劳】使用',
            fuwei: '父威',
            fuwei_info: '对其他角色使用【杀】造成伤害后，直到其回合结束，获得技能“孝顺”（对“父威”技能持有者使用【杀】需额外弃置一张牌，否则此杀无效）。',
            xiaoshun: '孝顺',
            xiaoshun_info: '对“父威”技能持有者使用【杀】需额外弃置一张牌，否则此杀无效',
            princess: '公主',
            princess_info: '锁定技：拼点时，点数小于Q的视为Q；每当你使用或打出一张点数为Q的牌，摸一张牌，回复一点体力。出牌阶段限一次，弃置一张点数为Q的牌，对一名角色造成1点伤害。',
            jiaoyi: '交易',
            jiaoyi_info: '出牌阶段限一次，你可以将任意一张红色手牌当【远交近攻】使用',
            peiyun: 'PY',
            peiyun_info: '出牌阶段限一次，将任意一张手牌当【勠力同心】使用',
            //X
            jiujiu: '九九',
            jiujiu_info: '每当你受到伤害，你亮出牌堆顶的9张牌，获得其中所有点数不小于9的牌。你点数小于9的拼点牌点数视为9。',
            xiaoqi: '小七',
            xiaoqi_info: '每当你受到伤害，你亮出牌堆顶的7张牌，获得其中所有点数不大于7的牌。你点数小于7的拼点牌点数+7。',
            taowa: '套娃',
            taowa_info: '你的回合外失去牌时，可立即摸一张牌。濒死状态时，你可以与其他角色拼点，若你赢，你减少1点体力上限，回复体力至1点。若你没赢，你立即死亡。',
            taowa2: '套娃',
            taowa2_info: '濒死状态时，若你的体力上限大于1，你可以与其他角色拼点，若你赢，你减少1点体力上限，回复体力至1点。若你没赢，你立即死亡。',
            quanhuang: '拳皇',
            quanhuang_info: '锁定技：你的拼点牌点数视为K。',
            lianer: '莲儿',
            lianer_info: '锁定技：你将要受到【杀】造成的大于1点的伤害时，令此伤害-1，然后与你距离不大于1的相邻角色，各受到你造成的1点伤害。',
            jingjing: '静静',
            jingjing2_bg: '静',
            jingjing2: '静静',
            jingjing3: '静静',
            jingjing_info: '弃置2张红色手牌，直到你的下回合开始，防止你受到的除雷电伤害外的一切伤害。',
            tiancao: '天草',
            tiancao2: '天草',
            tiancao_info: '游戏开始时你获得两枚【草】标记；你每次受到伤害，获得一枚【草】标记；每有一个【草】，你的进攻距离+1。出牌阶段限一次，你可以弃置一枚【草】标记，摸两张牌。',
            dianyan: '电眼',
            dianyan_info: '出牌阶段限一次，你可以弃置两枚【草】标记，若如此做，在本回合中，你的【杀】伤害+1，额外目标+1，无视防具，且若此【杀】造成伤害，获得一枚【草】标记',
            icefeng: '冰封',
            icefeng2: '冰封',
            icefeng_info: '锁定技：你的【杀】造成伤害后，目标不能使用【杀】和伤害类型的锦囊，直到他的回合结束。',
            ershui: '二水',
            ershui_info: '锁定技：若你的手牌小于5时，补到5张。',
            tieyi: '铁翼',
            tieyi_info: '出牌阶段限一次，你可以将任意一张黑色手牌当【调虎离山】使用',
            muwang: '沐王',
            muwang_info: '锁定技，每当你受到即将受到的雷电伤害时，防止此伤害，并摸一张牌；每当你造成一次雷电伤害时，你摸一张牌',
            mitao: '蜜桃',
            mitao_info: '出牌阶段限一次，你可以弃置一张【桃】，使所有角色回复1点体力。',
            taobao: '桃宝',
            taobao_info: '锁定技：你每回复1点体力，摸一张牌。其他角色每令你回复一次体力，该角色摸一张牌。',
            nvzun: '女尊',
            nvzun_info: '锁定技：所有男性角色与你计算距离时+1（防守距离+1），你与所有女性角色计算距离时-1（进攻距离+1）',
            neighbor: '邻居',
            neighbor_info: '锁定技：摸牌阶段你额外摸与你距离不大于1的角色数量的牌。使用【杀】和锦囊牌时，无视距离',
            chemistry: '化学',
            chemistry2: '化学',
            chemistry_info: '回合结束阶段，你可以选择并声明一种风标军争牌。你的下一个回合开始时，随机将一张手牌变化成你声明的类型的牌，点数和花色不变。',
            tansuan: '碳酸',
            tansuan_info: '锁定技，你使用【杀】指定的目标数上限+2，次数上限+1',
            order: '号令',
            order_info: '出牌阶段限一次，你可以弃置所有牌，指定一名其他角色，令另外所有其他角色角色选择一项：1、对该角色使用一张【杀】；2、交给你一张牌，然后视为你对其使用一张【杀】',
            guoer: '果儿',
            guoer_info: '你可以将【桃】当【无中生有】使用。锁定技：使用【桃】时，摸一张牌',
            xiaohua: '校花',
            xiaohua_info: '当其他角色的♥牌，因弃牌或判定而进入弃牌堆时，你获得之。',
            xiaoqi: '小七',
            xiaoqi_info: '每当你受到伤害，你亮出牌堆顶的7张牌，获得其中所有点数不大于7的牌。',
            datou: '大头',
            datou_info: '【万箭齐发】对你无效；若其他角色使用的【万箭齐发】在结算完时进入弃牌堆，你立即获得它。',
            xunshan: '巡山',
            xunshan_info: '限定技，随机获得每名其他角色区域内的一张牌。',
            liangong: '练功',
            liangong_info: '每当场上有角色因受到【杀】或【决斗】造成的伤害，你摸一张牌然后将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。',
            tisheng: '提升',
            tisheng_info: '出牌阶段限一次，你可以移去一张“功”并选择一名角色，令其摸两张牌。然后你回复1点体力。'
        },
    };
});
