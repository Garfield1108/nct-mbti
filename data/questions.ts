import type { OptionWeights, QuizOption, QuizQuestion, TraitTag } from "@/lib/types";
import { QUESTION_TRANSLATIONS_EN } from "@/data/questions-en";

const weights = (...entries: [TraitTag, number][]): OptionWeights =>
  Object.fromEntries(entries) as OptionWeights;

const option = (
  id: string,
  label: string,
  note: string,
  scoreMap: OptionWeights,
  labelEn = label,
  noteEn = note,
): QuizOption => ({
  id,
  label,
  labelEn,
  note,
  noteEn,
  weights: scoreMap,
});

const questions: QuizQuestion[] = [
  {
    id: "q1",
    category: "social",
    prompt: "刚对一个人有点好感时，你会怎么靠近？",
    options: [
      option(
        "a",
        "先把话聊起来，边闹边熟",
        "互动起来才有感觉",
        weights(["热闹", 3], ["朋友感", 2], ["轻松", 2]),
      ),
      option(
        "b",
        "先观察相处舒不舒服，再慢慢近一点",
        "慢一点更安心",
        weights(["慢热", 3], ["安静", 2], ["稳定", 2]),
      ),
      option(
        "c",
        "会先被一种特别的气场吸住",
        "感觉到了就很难忽略",
        weights(["氛围感", 3], ["宿命感", 2], ["张力", 2]),
      ),
      option(
        "d",
        "先像朋友一样待着，久了自然更近",
        "时间会让关系变深",
        weights(["长期主义", 3], ["朋友感", 2], ["稳定", 1], ["治愈", 1]),
      ),
    ],
  },
  {
    id: "q2",
    category: "affection",
    prompt: "哪种喜欢最容易打动你？",
    options: [
      option(
        "a",
        "会明显来找你，反应也很快",
        "偏爱最好看得见",
        weights(["依赖", 2], ["热闹", 2], ["朋友感", 1]),
      ),
      option(
        "b",
        "不高调，但会把细节照顾到",
        "安静照顾最戳人",
        weights(["照顾", 3], ["温柔", 2], ["偏爱", 1]),
      ),
      option(
        "c",
        "平时克制，关键时刻只站你这边",
        "分寸里带偏爱",
        weights(["成熟", 3], ["偏爱", 2], ["稳定", 1]),
      ),
      option(
        "d",
        "不一定多说，但会一直在",
        "陪着本身就很动人",
        weights(["长期主义", 2], ["稳定", 2], ["治愈", 2]),
      ),
    ],
  },
  {
    id: "q3",
    category: "rhythm",
    prompt: "你更喜欢什么样的关系节奏？",
    options: [
      option(
        "a",
        "高频互动，消息和玩笑都不断线",
        "热闹才会有在一起的感觉",
        weights(["热闹", 2], ["依赖", 2], ["朋友感", 2]),
      ),
      option(
        "b",
        "慢一点，但越处越稳",
        "舒服最重要",
        weights(["慢热", 2], ["稳定", 3], ["长期主义", 2]),
      ),
      option(
        "c",
        "安静一点，不用一直说话",
        "有温度就够了",
        weights(["安静", 3], ["治愈", 2], ["温柔", 1]),
      ),
      option(
        "d",
        "低频也可以，但要很有特别感",
        "浓度比频率重要",
        weights(["宿命感", 2], ["氛围感", 3], ["张力", 2]),
      ),
    ],
  },
  {
    id: "q4",
    category: "emotion",
    prompt: "你状态差时，更想被怎么陪？",
    options: [
      option(
        "a",
        "来找我、逗我，把我从低气压里拉出来",
        "热闹一点反而会好",
        weights(["热闹", 3], ["轻松", 2], ["依赖", 1]),
      ),
      option(
        "b",
        "不用说太多，安静陪着就行",
        "陪着就已经很好",
        weights(["安静", 3], ["治愈", 2], ["共情", 2]),
      ),
      option(
        "c",
        "先帮我理清楚，再给我明确支持",
        "可靠感很重要",
        weights(["成熟", 3], ["稳定", 2], ["照顾", 1]),
      ),
      option(
        "d",
        "轻轻哄我一下，让我知道你是偏向我的",
        "确认感不能少",
        weights(["温柔", 2], ["依赖", 2], ["偏爱", 2]),
      ),
    ],
  },
  {
    id: "q5",
    category: "conflict",
    prompt: "有分歧时，你更像哪一种？",
    options: [
      option(
        "a",
        "会先顶两句，但其实没想走开",
        "嘴上不让，心里还在意",
        weights(["拉扯", 3], ["张力", 1], ["依赖", 1], ["热闹", 1]),
      ),
      option(
        "b",
        "先冷静，之后再认真讲清楚",
        "情绪过去再说",
        weights(["成熟", 2], ["稳定", 2], ["慢热", 1], ["安静", 1]),
      ),
      option(
        "c",
        "会先缓和气氛，不想真的伤到彼此",
        "软处理更适合我",
        weights(["温柔", 2], ["共情", 2], ["治愈", 2]),
      ),
      option(
        "d",
        "希望直接把问题拆开解决",
        "问题还是要处理掉",
        weights(["强强", 2], ["成熟", 2], ["稳定", 1]),
      ),
    ],
  },
  {
    id: "q6",
    category: "social",
    prompt: "你通常会先被哪种人吸引？",
    options: [
      option(
        "a",
        "会接梗、会带气氛的人",
        "有趣的人很难不注意",
        weights(["热闹", 2], ["轻松", 2], ["朋友感", 2]),
      ),
      option(
        "b",
        "温和、让人放松的人",
        "舒服感很重要",
        weights(["温柔", 3], ["安静", 1], ["共情", 1]),
      ),
      option(
        "c",
        "稳得住场、很有分寸的人",
        "成熟感会加分",
        weights(["成熟", 3], ["稳定", 2], ["偏爱", 1]),
      ),
      option(
        "d",
        "有点危险感，也很特别的人",
        "越特别越容易上头",
        weights(["张力", 2], ["宿命感", 2], ["反差", 2]),
      ),
    ],
  },
  {
    id: "q7",
    category: "affection",
    prompt: "在关系里，你更常是哪个位置？",
    options: [
      option(
        "a",
        "负责把气氛点亮的那一个",
        "会让相处一直有来有回",
        weights(["热闹", 2], ["轻松", 2], ["朋友感", 1]),
      ),
      option(
        "b",
        "会先注意对方状态，顺手照顾一下",
        "细节会先跑出来",
        weights(["照顾", 3], ["共情", 2], ["温柔", 1]),
      ),
      option(
        "c",
        "更像会被接住的那个，安全了就会变黏",
        "被接住以后会很依赖",
        weights(["依赖", 3], ["温柔", 1], ["偏爱", 1]),
      ),
      option(
        "d",
        "会慢慢把关系稳下来",
        "更想让彼此安心",
        weights(["稳定", 2], ["长期主义", 2], ["成熟", 1]),
      ),
    ],
  },
  {
    id: "q8",
    category: "rhythm",
    prompt: "哪种日常最让你心动？",
    options: [
      option(
        "a",
        "随时碎碎念，对方都接得住",
        "高频在线感很重要",
        weights(["热闹", 2], ["朋友感", 2], ["依赖", 2]),
      ),
      option(
        "b",
        "一起做普通小事，也会很舒服",
        "平淡但有后劲",
        weights(["长期主义", 2], ["治愈", 2], ["稳定", 2]),
      ),
      option(
        "c",
        "平时各忙各的，但关键时刻一定站一边",
        "独立也有归属",
        weights(["成熟", 2], ["稳定", 2], ["偏爱", 2]),
      ),
      option(
        "d",
        "偶尔会有一点电影镜头感",
        "特别感不能少",
        weights(["氛围感", 3], ["宿命感", 2], ["张力", 1]),
      ),
    ],
  },
  {
    id: "q9",
    category: "emotion",
    prompt: "喜欢上一个人时，你更常怎样？",
    options: [
      option(
        "a",
        "会很想找对方说话，也藏不太住",
        "喜欢会变明显",
        weights(["热闹", 2], ["依赖", 2], ["朋友感", 1]),
      ),
      option(
        "b",
        "不会太明显，但细节会越来越多",
        "喜欢是慢慢露出来的",
        weights(["慢热", 2], ["温柔", 2], ["照顾", 1]),
      ),
      option(
        "c",
        "会因为某种感觉太特别而上头",
        "气氛先击中我",
        weights(["宿命感", 2], ["氛围感", 2], ["张力", 2]),
      ),
      option(
        "d",
        "会先想这段关系能不能走远",
        "长期可能性很重要",
        weights(["长期主义", 3], ["稳定", 2], ["成熟", 1]),
      ),
    ],
  },
  {
    id: "q10",
    category: "conflict",
    prompt: "如果对方突然冷一点，你第一反应是？",
    options: [
      option(
        "a",
        "先试探一下，看他到底还在不在意",
        "会忍不住观察反应",
        weights(["拉扯", 2], ["依赖", 2], ["张力", 1]),
      ),
      option(
        "b",
        "直接问，但会尽量讲得平和",
        "把问题摆出来",
        weights(["成熟", 2], ["稳定", 2], ["共情", 1]),
      ),
      option(
        "c",
        "先怀疑是不是自己哪里没做好",
        "波动很容易让我不安",
        weights(["依赖", 2], ["温柔", 1], ["慢热", 1]),
      ),
      option(
        "d",
        "先给点空间，再看看会不会自然回来",
        "冷静一下再判断",
        weights(["安静", 2], ["慢热", 2], ["稳定", 1]),
      ),
    ],
  },
  {
    id: "q11",
    category: "social",
    prompt: "你最喜欢哪种双人氛围？",
    options: [
      option(
        "a",
        "热闹、会闹、一直有来有回",
        "关系要有声量",
        weights(["热闹", 3], ["轻松", 2], ["朋友感", 2]),
      ),
      option(
        "b",
        "安静，但待在一起就很舒服",
        "低压感最迷人",
        weights(["安静", 2], ["治愈", 2], ["温柔", 2]),
      ),
      option(
        "c",
        "两个人都很强，却还是能同频",
        "并肩的感觉很重要",
        weights(["强强", 3], ["成熟", 2], ["稳定", 1]),
      ),
      option(
        "d",
        "有一种别人插不进来的故事感",
        "专属频道最上头",
        weights(["宿命感", 2], ["氛围感", 2], ["张力", 1]),
      ),
    ],
  },
  {
    id: "q12",
    category: "affection",
    prompt: "哪种偏爱瞬间最戳你？",
    options: [
      option(
        "a",
        "当着别人也明显偏向你",
        "偏爱最好别藏太深",
        weights(["偏爱", 3], ["依赖", 1], ["热闹", 1]),
      ),
      option(
        "b",
        "记得你随口提过的小事，还真的去做",
        "细节里的偏爱最难忘",
        weights(["照顾", 2], ["温柔", 2], ["偏爱", 2]),
      ),
      option(
        "c",
        "平时克制，关键时刻永远站你这边",
        "稳稳站位会很加分",
        weights(["成熟", 2], ["偏爱", 2], ["稳定", 2]),
      ),
      option(
        "d",
        "一直想着你，很多小事都会先想到你",
        "持续存在感最打动人",
        weights(["长期主义", 2], ["治愈", 2], ["稳定", 1], ["依赖", 1]),
      ),
    ],
  },
  {
    id: "q13",
    category: "rhythm",
    prompt: "比起上头感，你更在意什么？",
    options: [
      option(
        "a",
        "有没有稳定回应",
        "规律反馈会让我安心",
        weights(["稳定", 3], ["依赖", 1], ["长期主义", 2]),
      ),
      option(
        "b",
        "有没有把彼此情绪点起来的火花",
        "浓度也是吸引力",
        weights(["张力", 2], ["拉扯", 2], ["热闹", 1]),
      ),
      option(
        "c",
        "有没有真正懂你、不用解释太多",
        "被懂比被哄更重要",
        weights(["共情", 2], ["稳定", 2], ["成熟", 1], ["安静", 1]),
      ),
      option(
        "d",
        "有没有互补感和自然新鲜感",
        "差异也会发光",
        weights(["反差", 3], ["轻松", 1], ["张力", 1]),
      ),
    ],
  },
  {
    id: "q14",
    category: "emotion",
    prompt: "你最希望对方懂你哪一面？",
    options: [
      option(
        "a",
        "我那些没说出口的脆弱",
        "希望被细腻接住",
        weights(["温柔", 2], ["共情", 2], ["依赖", 1]),
      ),
      option(
        "b",
        "我其实也很想被明确偏爱",
        "偏向感很重要",
        weights(["偏爱", 3], ["依赖", 1], ["温柔", 1]),
      ),
      option(
        "c",
        "我看起来稳，但很需要长期在场感",
        "存在感才是底盘",
        weights(["长期主义", 2], ["稳定", 2], ["成熟", 1]),
      ),
      option(
        "d",
        "我很在意特别的感觉和气氛",
        "没有质感就很难心动",
        weights(["氛围感", 2], ["宿命感", 2], ["张力", 1]),
      ),
    ],
  },
  {
    id: "q15",
    category: "conflict",
    prompt: "关系里最让你受不了什么？",
    options: [
      option(
        "a",
        "太冷、太闷、完全没有互动",
        "没有来回会很快降温",
        weights(["热闹", 2], ["朋友感", 1], ["依赖", 1]),
      ),
      option(
        "b",
        "忽冷忽热、让人一直猜",
        "不确定感很消耗",
        weights(["稳定", 2], ["长期主义", 1], ["温柔", 1]),
      ),
      option(
        "c",
        "不讲道理，只剩情绪对撞",
        "不解决问题会很累",
        weights(["成熟", 2], ["强强", 1], ["稳定", 2]),
      ),
      option(
        "d",
        "明明在意，却一直互相较劲",
        "卡在拉扯里会很伤",
        weights(["拉扯", 2], ["张力", 2], ["反差", 1]),
      ),
    ],
  },
  {
    id: "q16",
    category: "affection",
    prompt: "你理想中的关系，会怎么开始？",
    options: [
      option(
        "a",
        "先有火花，再在互动里慢慢确认",
        "吸引力先发生",
        weights(["张力", 2], ["热闹", 1], ["轻松", 1]),
      ),
      option(
        "b",
        "先从朋友或队友做起，后来越来越重要",
        "基础盘先建立",
        weights(["朋友感", 2], ["长期主义", 2], ["成熟", 1]),
      ),
      option(
        "c",
        "先被温柔接住，再慢慢形成依赖",
        "安全感先出现",
        weights(["温柔", 2], ["依赖", 2], ["照顾", 1]),
      ),
      option(
        "d",
        "像命运推着靠近，过程自带故事感",
        "特别感拉满",
        weights(["宿命感", 3], ["氛围感", 2]),
      ),
    ],
  },
  {
    id: "q17",
    category: "social",
    prompt: "一段关系里，你最想保留什么感觉？",
    options: [
      option(
        "a",
        "一直都很好玩，不会无聊",
        "有趣比完美重要",
        weights(["轻松", 2], ["热闹", 2], ["朋友感", 1]),
      ),
      option(
        "b",
        "彼此都能放松，不用逞强",
        "舒服是真心的前提",
        weights(["治愈", 2], ["温柔", 2], ["安静", 1]),
      ),
      option(
        "c",
        "不必一直黏着，也知道彼此站同一边",
        "信任会托住关系",
        weights(["成熟", 2], ["稳定", 2], ["偏爱", 1]),
      ),
      option(
        "d",
        "关系里有别人学不来的张力",
        "独特性会让我上头",
        weights(["张力", 2], ["强强", 1], ["反差", 2]),
      ),
    ],
  },
  {
    id: "q18",
    category: "emotion",
    prompt: "你更容易因为什么心动？",
    options: [
      option(
        "a",
        "先被陪伴感打动",
        "存在感最先起作用",
        weights(["依赖", 1], ["长期主义", 2], ["治愈", 2]),
      ),
      option(
        "b",
        "先被成熟和可靠吸引",
        "稳得住很加分",
        weights(["成熟", 3], ["稳定", 2], ["照顾", 1]),
      ),
      option(
        "c",
        "先被反差和化学反应击中",
        "火花来得更快",
        weights(["反差", 3], ["张力", 2], ["轻松", 1]),
      ),
      option(
        "d",
        "先被命定感和氛围打动",
        "像故事开场一样",
        weights(["宿命感", 3], ["氛围感", 2], ["安静", 1]),
      ),
    ],
  },
  {
    id: "q19",
    category: "conflict",
    prompt: "关系有点平下来时，你会想怎么把感觉找回来？",
    options: [
      option(
        "a",
        "一起做点新鲜事，把气氛点起来",
        "先把关系重新激活",
        weights(["轻松", 2], ["热闹", 1], ["反差", 1]),
      ),
      option(
        "b",
        "把没说开的想法认真聊一遍",
        "理解比花样更重要",
        weights(["成熟", 2], ["共情", 2], ["稳定", 1]),
      ),
      option(
        "c",
        "回到最普通的陪伴里，让心慢慢靠近",
        "重新习惯彼此",
        weights(["长期主义", 2], ["治愈", 2], ["安静", 1]),
      ),
      option(
        "d",
        "制造一个只属于彼此的浪漫场景",
        "感觉还是得找回来",
        weights(["偏爱", 1], ["氛围感", 2], ["宿命感", 1]),
      ),
    ],
  },
  {
    id: "q20",
    category: "rhythm",
    prompt: "如果要给理想关系下一句定义，你会选哪句？",
    options: [
      option(
        "a",
        "一起热热闹闹地把日子过下去",
        "共享生活感优先",
        weights(["热闹", 2], ["轻松", 2], ["朋友感", 1]),
      ),
      option(
        "b",
        "被稳稳接住，也能安心依赖",
        "柔软和安全感优先",
        weights(["温柔", 2], ["依赖", 2], ["治愈", 1]),
      ),
      option(
        "c",
        "要有明显火花，不然很难彻底上头",
        "张力和刺激优先",
        weights(["张力", 2], ["拉扯", 1], ["反差", 1]),
      ),
      option(
        "d",
        "能并肩走很久，也有成熟默契",
        "长线和默契优先",
        weights(["长期主义", 2], ["成熟", 2], ["稳定", 2]),
      ),
    ],
  },
];

export const QUESTIONS: QuizQuestion[] = questions.map((question) => {
  const questionTranslation = QUESTION_TRANSLATIONS_EN[question.id];

  return {
    ...question,
    promptEn: questionTranslation?.prompt ?? question.promptEn ?? question.prompt,
    options: question.options.map((item) => {
      const optionTranslation = questionTranslation?.options[item.id];

      return {
        ...item,
        labelEn: optionTranslation?.label ?? item.labelEn ?? item.label,
        noteEn: optionTranslation?.note ?? item.noteEn ?? item.note,
      };
    }) as QuizQuestion["options"],
  };
});

export const QUESTION_COUNT = QUESTIONS.length;
