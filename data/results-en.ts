import type { ResultId, ResultProfile } from "@/lib/types";

type EnglishResultCopy = Pick<
  ResultProfile,
  | "typeNameEn"
  | "oneLineEn"
  | "narrativeEn"
  | "coreVibeEn"
  | "attractionStyleEn"
  | "relationshipTempoEn"
  | "affectionStyleEn"
  | "conflictStyleEn"
  | "securityNeedEn"
  | "weakPointsEn"
  | "idealDateEn"
  | "scoringHintsEn"
>;

export const RESULT_COPY_EN: Partial<Record<ResultId, EnglishResultCopy>> = {
  "mark-haechan": {
    typeNameEn: "Lively Companion Type",
    oneLineEn:
      "You are drawn to high-interaction, quick-banter relationships that stay noisy, close, and hard to leave.",
    narrativeEn:
      "The first thing you want from a relationship is not stability. It is responsiveness. The people who pull you in are usually quick, playful, and impossible to have a dead conversation with. Ideally, everyday life with them turns into a private frequency only the two of you understand. You are deeply moved by attention inside interaction. Even without dramatic love confessions, you can feel cared for through rhythm alone. Cold, dull, stop-and-start connections do not suit you. The moment the replies thin out, something inside you tightens. More than a grand declaration, what truly gets you is someone who still wants to find you first, still wants to keep the joke going, and keeps making the relationship feel alive.",
    coreVibeEn: ["Lively", "Friendly chemistry", "Easy", "High interaction", "Strong everyday vibe"],
    attractionStyleEn: ["Can keep the conversation going", "Makes you laugh", "Shares natural chemistry", "Never boring"],
    relationshipTempoEn: ["Frequent interaction", "Constant chatting", "Strong everyday closeness"],
    affectionStyleEn: ["Shows care through jokes", "Shows love through company", "Looks relaxed but reacts quickly"],
    conflictStyleEn: ["Can get verbally stubborn", "Rarely stays cold for long", "Recovers through interaction"],
    securityNeedEn: ["The other person stays present", "You keep getting responses", "They can still catch your jokes"],
    weakPointsEn: ["Too cold", "Too dull", "Interaction dropping off"],
    idealDateEn: ["Convenience store runs", "Night walks", "Spontaneous little outings"],
    scoringHintsEn: ["Lively", "Friendly chemistry", "Ease", "Reliance"],
  },
  "mark-jaemin": {
    typeNameEn: "Gentle Reliance Type",
    oneLineEn:
      "You are more likely to fall for a relationship that feels easy on the surface and quietly full of care and dependence underneath.",
    narrativeEn:
      "What moves you is not a loud, immediate kind of love, but a gentleness that gradually draws someone into your life. The other person does not have to be dramatic or constantly say how much they like you, but they do need to make you feel relaxed, like you do not always have to stay tense around them. You care about tenderness in details: being remembered, being quietly supported, having someone nearby when you need them. Sharp, rushed, or overly pressuring relationships rarely make you stay. The more natural and unforced the closeness feels, the more easily reliance begins to grow.",
    coreVibeEn: ["Gentle", "Familiar", "Soft dependence", "Mild", "Natural"],
    attractionStyleEn: ["Quietly takes care of people", "Helps you relax", "Does not force the relationship"],
    relationshipTempoEn: ["Steady", "Not clingy but never distant", "Gradually deepens"],
    affectionStyleEn: ["Soft", "Not intensely outward", "Moves closer through details"],
    conflictStyleEn: ["Dislikes head-on conflict", "Prefers softening and processing"],
    securityNeedEn: ["To be treated gently", "To be remembered", "To be cared for"],
    weakPointsEn: ["Being overlooked", "Someone too sharp", "A relationship that feels unstable"],
    idealDateEn: ["Coffee shops", "Quiet walks", "Being together without needing constant conversation"],
    scoringHintsEn: ["Gentleness", "Reliance", "Care", "Slow burn"],
  },
  "jeno-jaemin": {
    typeNameEn: "Sunny Stable Type",
    oneLineEn:
      "You are suited to a relationship that feels steady, natural, and built for the long term.",
    narrativeEn:
      "Your imagination of love is more practical than dramatic. Brief intensity can be exciting, but what truly keeps you is a connection that feels stable, natural, and able to keep going. You like people who feel reliable without needing endless reassurance. The rhythm is smooth, the emotions are steady, and ordinary days never feel stale. You do not need a relationship to keep manufacturing peaks. Instead, you are moved by the comfort of going out together, doing things together, and building a life that simply flows well. To you, comfort is not bland. It is a very advanced kind of peace of mind. As long as the other person is steady enough, you will keep imagining a future more seriously.",
    coreVibeEn: ["Bright", "Used to each other", "Companionship", "Calm", "Reliable"],
    attractionStyleEn: ["Understands you without too much explanation", "The relationship itself feels smooth"],
    relationshipTempoEn: ["Long-term stability", "Gets better the longer it lasts"],
    affectionStyleEn: ["Not necessarily dramatic", "But consistently steady", "Strong sense of companionship"],
    conflictStyleEn: ["Handles problems in a mature way", "Does not chase drama"],
    securityNeedEn: ["Companionship that keeps showing up", "A bond that does not swing wildly"],
    weakPointsEn: ["Hot-and-cold behavior", "Too much intensity", "Too many tests"],
    idealDateEn: ["Daytime outings", "Something active", "A date built around daily companionship"],
    scoringHintsEn: ["Stability", "Long-term mindset", "Ease", "Slow burn"],
  },
  "jaehyun-doyoung": {
    typeNameEn: "Mature Devotion Type",
    oneLineEn:
      "Quiet, mature, low-key, but very clear about who they choose.",
    narrativeEn:
      "You are not usually drawn to relationships that rush in loudly from the start. What makes you pause is someone calm, mature, and considerate. They do not have to say everything out loud, but they need to make you feel chosen when it matters. You notice details: whether they remember your habits, know when to come closer, and know when to give you space. A little restraint is fine, but it cannot turn into distance. What you need is a mature kind of certainty: no pressure, no endless guessing, just a steady attitude that makes you feel safe enough to stay.",
    coreVibeEn: ["Mature", "Restrained", "Steady", "Devoted", "Well-defined"],
    attractionStyleEn: ["Has a sense of boundaries", "Handles emotions with care", "Makes you feel deliberately chosen"],
    relationshipTempoEn: ["Slow to warm up", "Very steady once it settles"],
    affectionStyleEn: ["Not outwardly dramatic", "Action-oriented", "Detail-oriented"],
    conflictStyleEn: ["Prefers communication", "Wants clarity", "Does not solve problems through emotional blowups"],
    securityNeedEn: ["To be taken seriously", "To be clearly chosen"],
    weakPointsEn: ["Ambiguity", "Half-hearted effort", "No boundaries"],
    idealDateEn: ["A late-night cafe", "A quiet meal", "A night drive"],
    scoringHintsEn: ["Mature", "Devotion", "Stability", "Quiet"],
  },
  "johnny-jaehyun": {
    typeNameEn: "Power Pair Chemistry Type",
    oneLineEn:
      "You are suited to a relationship where both people feel composed, mature, and quietly impressed by each other.",
    narrativeEn:
      "You are drawn to people who stand on their own feet. Ideally, they have their own rhythm and judgment. They are not clingy, and they do not make the relationship wobble. You like admiration, but you also like balance. Two people are complete on their own, and closeness happens not because either side needs rescuing, but because both are steady, aware, and worth standing beside. Immature and uneven relationships do not suit you. Too much emotional tugging quickly cools you off. What really moves you is someone who does not loudly prove affection, but gives you respect, dignity, and support in the details. You do not need something explosive. You want maturity with a clear sense of chosen direction.",
    coreVibeEn: ["Reliable", "Relaxed", "Mature", "Balanced", "Power pair"],
    attractionStyleEn: ["Has a world of their own", "Can still hold you up at the same time"],
    relationshipTempoEn: ["Not clingy", "High comfort with a polished feel"],
    affectionStyleEn: ["More rational", "Does not rely on intense emotion to stay close"],
    conflictStyleEn: ["Leans toward mature negotiation", "Does not tend toward push-pull dynamics"],
    securityNeedEn: ["Someone strong and steady", "A bond that does not spiral out of control"],
    weakPointsEn: ["Immaturity", "Imbalance", "Too much emotional drain"],
    idealDateEn: ["Dinner", "A bar", "A date with city-night energy"],
    scoringHintsEn: ["Mature", "Power pair", "Stability", "Ease"],
  },
  "doyoung-taeyong": {
    typeNameEn: "Quiet Healing Type",
    oneLineEn:
      "You fit best with a relationship that is delicate, gentle, and emotionally soothing for both people.",
    narrativeEn:
      "You do not need love to be loud in order to feel moved by it. Often, what reaches you most is someone who listens seriously, who carries your emotions with care, and who understands how to receive the parts of you that are hard to explain. You care deeply about feeling understood, and you notice whether tenderness and boundaries exist inside the relationship. To you, love is not about pushing forward all the time. It is about someone who slows down when your emotions are messy, speaks to you gently, and receives what you cannot easily put into words. As long as that kind of softness and steadiness is there, you become more and more willing to move closer and let yourself be known.",
    coreVibeEn: ["Quiet", "Healing", "Delicate", "Emotional support", "Soft"],
    attractionStyleEn: ["Can understand your complicated emotions", "Knows how to receive you seriously"],
    relationshipTempoEn: ["Slow", "No rush to push forward", "Deep emotional intensity"],
    affectionStyleEn: ["Sincere", "Detail-focused", "Caring"],
    conflictStyleEn: ["Gets hurt easily", "Needs to be spoken to gently"],
    securityNeedEn: ["To be understood", "To be placed gently somewhere safe"],
    weakPointsEn: ["Someone too dull", "Too rough", "Not empathetic enough"],
    idealDateEn: ["Indoors", "Night lights", "A warm space", "Long conversations"],
    scoringHintsEn: ["Healing", "Empathy", "Gentleness", "Quiet"],
  },
  "yuta-winwin": {
    typeNameEn: "Romantic Fate Type",
    oneLineEn:
      "You are drawn to relationships that feel restrained, a little distant, and full of atmosphere.",
    narrativeEn:
      "You are easily attracted to people who carry a certain distance. Not because you enjoy uncertainty for its own sake, but because quiet, unexplained closeness that still lingers in your mind feels especially magnetic to you. You like a sense of story, and you like favoritism hidden inside restraint. On the surface it may not be loud, but the details make it clear this is not ordinary. The danger is when a connection stays trapped in atmosphere alone. If there is only longing and no real attitude, it eventually becomes exhausting. What you truly want is not floating romance, but someone who can make that sense of being special more explicit, beyond the silence and the restraint.",
    coreVibeEn: ["Romantic", "Fated", "Atmospheric", "Distant", "Story-like"],
    attractionStyleEn: ["Not always together every day", "But still deeply addictive"],
    relationshipTempoEn: ["Low frequency", "High intensity"],
    affectionStyleEn: ["Not direct", "Expressed through glances", "Built through atmosphere and detail"],
    conflictStyleEn: ["Tends to go quiet", "Tends to pull away", "More restrained overall"],
    securityNeedEn: ["Even if they do not say much", "You can still feel that you matter differently"],
    weakPointsEn: ["A floating relationship", "Contact that is too weak", "Never getting clarity over time"],
    idealDateEn: ["Nighttime", "Street corners", "City lights", "Walking quietly side by side"],
    scoringHintsEn: ["Fated vibe", "Atmosphere", "Quiet", "Tension"],
  },
  "renjun-jaemin": {
    typeNameEn: "Long-term Companion Type",
    oneLineEn:
      "You are suited to a relationship that feels soft, familiar, and slowly grows into everyday life.",
    narrativeEn:
      "You are made for a connection that gradually becomes part of your life. It does not need to be overly intense. Ideally, it feels as natural as daily routine itself: meeting up, eating, chatting, walking, and, over time, simply knowing where the two of you belong to each other. You are not drawn to closeness that is pushed too hard, and you do not like relationships where people always have to act strong. The people who make you feel safe are usually gentle, steady, and good at leaving room for you. They do not force an answer before you are ready, and they do not casually break the connection. What truly moves you is not a single dramatic highlight. It is someone who stays, and turns ordinary days into a quiet, default kind of devotion.",
    coreVibeEn: ["Companionship", "Gentleness", "Familiarity", "Long-term", "Soft"],
    attractionStyleEn: ["Feels like everyday life", "Not exhausting", "No need to pretend to be strong"],
    relationshipTempoEn: ["Builds up slowly", "Deepens slowly"],
    affectionStyleEn: ["Gentle", "Not overstimulating", "But always there"],
    conflictStyleEn: ["Tends to avoid direct collision", "More likely to process things inwardly"],
    securityNeedEn: ["Consistent presence", "Ongoing companionship"],
    weakPointsEn: ["Being ignored", "The relationship getting cut off", "Long periods without response"],
    idealDateEn: ["Eating together", "Going to an exhibition", "Slowly wandering around"],
    scoringHintsEn: ["Long-term mindset", "Healing", "Gentleness", "Slow burn"],
  },
  "jeno-renjun": {
    typeNameEn: "Mutual Healing Type",
    oneLineEn:
      "What you need most is a relationship where both people care for each other and help each other recover.",
    narrativeEn:
      "What matters most to you is whether both people become lighter together. You do not need a relationship full of drama. Instead, you are touched by the kind of closeness where both people care for each other and slowly help emotions settle back into place. You value understanding and steadiness. Ideally, the bond does not rush to heat up, but keeps getting more familiar. You do not suit relationships that keep pushing you forward, and you do not like being forced to declare yourself all the time. What truly makes you feel safe is someone willing to stand on the same side as you, talk things through slowly, smooth out the pace together, and make love feel more comfortable the longer it lasts.",
    coreVibeEn: ["Understanding", "Support", "Healing", "Steadiness", "Comfort"],
    attractionStyleEn: ["Both people help each other feel more relaxed"],
    relationshipTempoEn: ["Does not chase fast escalation", "Values the quality of being together"],
    affectionStyleEn: ["Gentle", "Comforting"],
    conflictStyleEn: ["Wants to talk problems through", "But dislikes things getting too intense"],
    securityNeedEn: ["To be understood", "To be received with steadiness"],
    weakPointsEn: ["Someone too aggressive", "Too unstable", "Always forcing you to define things"],
    idealDateEn: ["Easy walks", "Quiet conversations", "Gentle companionship"],
    scoringHintsEn: ["Healing", "Empathy", "Stability", "Care"],
  },
  "taeyong-ten": {
    typeNameEn: "Power Pair Fate Type",
    oneLineEn:
      "You are drawn to relationships full of tension, strength on both sides, and a strong sense of fate.",
    narrativeEn:
      "You are drawn to intense people, and you know that kind of affection is never going to feel too calm. Ideally, the other person is bright enough and distinctive enough that the moment they appear, you know this is not something light or forgettable. You like tension, but you also like equality. Both people are strong, and neither exists as an extension of the other. The danger is that without boundaries, this type of relationship can burn until nothing is left but exhaustion. What you truly want is not endless push-pull. You want someone with as much edge as you, who also knows how to leave room for respect, boundaries, and compromise. Intensity is welcome. Chaos is not.",
    coreVibeEn: ["Power pair", "Sharp", "Magnetic", "Control", "Tension"],
    attractionStyleEn: ["The other person is bright enough", "And distinctive enough"],
    relationshipTempoEn: ["High intensity", "Never too calm"],
    affectionStyleEn: ["Not necessarily excessive", "But impossible to ignore"],
    conflictStyleEn: ["Can become strength against strength", "Needs boundaries and respect"],
    securityNeedEn: ["Both people are strong enough", "And know each other deeply enough"],
    weakPointsEn: ["Control issues", "Too much push-pull", "Neither side giving in"],
    idealDateEn: ["Stage-like energy", "Urban energy", "Nighttime atmosphere", "Strong visual mood"],
    scoringHintsEn: ["Power pair", "Tension", "Fated vibe", "Contrast"],
  },
  "haechan-renjun": {
    typeNameEn: "Pure Love Reliance Type",
    oneLineEn:
      "You are likely to move toward a relationship that bickers, clings, and is actually full of deep dependence.",
    narrativeEn:
      "In relationships, you become attached easily, and the fact that you care often shows up in your reactions first. The more you like someone, the more you want to tease them, push at them, and confirm that they care just as much. Cold distance does not suit you. The moment there is no response, your emotions drop fast. The people who pull you in are usually the ones who interact with you often, react quickly, and keep bringing you back even if they are not always gentle with their words. What you want is actually very direct: not perfect restraint, not elaborate tests, but obvious care, timely responses, and the kind of favoritism that still comes back to you even after a fight.",
    coreVibeEn: ["Reliance", "Closeness", "Emotion-heavy", "Pure love", "Sensitive"],
    attractionStyleEn: ["You affect each other's moods deeply", "And can barely stay apart for real"],
    relationshipTempoEn: ["High interaction", "High reactivity"],
    affectionStyleEn: ["Obvious", "Easily shown outwardly"],
    conflictStyleEn: ["There will be bickering", "There will be teasing", "But you pull each other back quickly"],
    securityNeedEn: ["Do they still care about me", "Will they respond in time"],
    weakPointsEn: ["Cold treatment", "Being deliberately ignored", "Losing response entirely"],
    idealDateEn: ["Playful dates", "Walking and talking dates"],
    scoringHintsEn: ["Reliance", "Push-pull", "Lively", "Friendly chemistry"],
  },
  "mark-jaehyun": {
    typeNameEn: "Mature Friendship Type",
    oneLineEn:
      "You are more likely to fall into a relationship that feels comfortable first, then slowly warms up over time.",
    narrativeEn:
      "You do not mind if a relationship moves slowly, as long as being together already feels good. The other person does not have to be especially good at saying romantic things, but they should make their presence feel steady enough that you know the bond will not vanish at any moment. You like friendship-like chemistry, and you like the security that comes from maturity. You can talk, walk, and spend time without rushing to define everything, while still knowing that both of you are moving forward. You do not do well in relationships that drag you around emotionally. The more relaxed, clear, and pressure-free the connection feels, the more likely you are to take it seriously. What is moving is not a sudden rise in temperature, but how naturally it keeps getting better.",
    coreVibeEn: ["Friendly chemistry", "Mature", "Relaxed", "Tacit understanding", "Natural"],
    attractionStyleEn: ["No pressure", "But a steady sense of presence all along"],
    relationshipTempoEn: ["Take it slowly", "No rush to define it"],
    affectionStyleEn: ["More restrained", "But not cold"],
    conflictStyleEn: ["Handles things maturely", "Does not intentionally create drama"],
    securityNeedEn: ["A steady sense of presence", "Friendship-like chemistry"],
    weakPointsEn: ["A bond that never gets defined", "Someone who stays unclear"],
    idealDateEn: ["Coffee", "Conversation", "Walking through the city"],
    scoringHintsEn: ["Mature", "Friendly chemistry", "Stability", "Slow burn"],
  },
  "jaehyun-jungwoo": {
    typeNameEn: "Relaxed Devotion Type",
    oneLineEn:
      "Easy to be with, softly affectionate, and quietly clear about favoritism.",
    narrativeEn:
      "You are easily drawn to someone who feels effortless to be around. They do not need to make grand gestures or create dramatic moments, but they should make you feel quietly special. You like ease, but you also like devotion: chatting freely, sitting together in silence, and not having to explain yourself all the time. What moves you is often a kind of closeness that feels natural rather than forced. You do not like being pushed too hard, and you are not suited to vague, inconsistent attention. A relationship that feels comfortable, steady, and gently biased toward you is the one that can slowly pull you in.",
    coreVibeEn: ["Relaxed", "Gentle", "Devoted", "Natural", "Comfortable"],
    attractionStyleEn: ["No pressure", "Naturally moves closer to you", "Shows devotion in an easy way"],
    relationshipTempoEn: ["Gets familiar slowly", "Warms up naturally", "No rush to define it, but it keeps growing closer"],
    affectionStyleEn: ["Soft", "Everyday", "Unforced but obvious"],
    conflictStyleEn: ["Does not like making things tense", "Prefers easing things with humor or gentle conversation"],
    securityNeedEn: ["To be remembered naturally", "To be received gently", "To stay unguarded in the relationship"],
    weakPointsEn: ["Too cold", "Inconsistent distance", "Only flirting"],
    idealDateEn: ["A cafe", "A quiet dessert stop", "Being together at ease"],
    scoringHintsEn: ["Ease", "Devotion", "Gentleness", "Stability"],
  },
  "doyoung-jungwoo": {
    typeNameEn: "Gentle Healing Type",
    oneLineEn:
      "You are suited to a relationship that is gentle, caring, and emotionally generous.",
    narrativeEn:
      "You fall for gentle people very easily, especially the kind who can notice your mood on their own and know how to comfort and receive you. You do not necessarily need flashy expressions, but you are deeply moved by feeling cared for and quietly favored. As long as there is even a little tenderness and response in the relationship, you relax quickly, and may even hand over the vulnerability you usually keep hidden. On the other hand, someone too cold, too blank, or too unwilling to respond to your emotions will make you step back immediately. What you want is not complicated. You want someone willing to be a little softer, a little lighter, and steady enough to catch you.",
    coreVibeEn: ["Gentle", "Caring", "Delicate", "Reliant", "Comforted"],
    attractionStyleEn: ["Notices your emotions", "Comes to comfort you", "Knows how to receive you"],
    relationshipTempoEn: ["Soft and steady", "Does not chase stimulation"],
    affectionStyleEn: ["Care-oriented", "Comfort-oriented"],
    conflictStyleEn: ["Better with a softer approach", "Not suited to hard collisions"],
    securityNeedEn: ["To be favored", "To be cared for", "To be comforted"],
    weakPointsEn: ["Someone too blank", "Too cold", "No feedback at all"],
    idealDateEn: ["Indoors", "Comfortable spaces", "Warm surroundings"],
    scoringHintsEn: ["Gentleness", "Healing", "Care", "Reliance"],
  },
  "kun-ten": {
    typeNameEn: "Mature Care Type",
    oneLineEn:
      "You are better suited to a relationship that feels structured, caring, mature, and never dull.",
    narrativeEn:
      "Your standards in relationships are not low, but what you want is not drama. It is reliability. The people who truly make you feel at ease usually have a sense of order. They are steady, capable, and know how to make being together feel smooth. You love being cared for, but not in a suffocating way. Ideally, it feels mature, natural, and never like a burden. Repetitive chaos does not suit you, because what you really want is someone who puts affection into action, smooths out daily life, and includes you in that care. As long as the other person is steady enough, you become very willing to hand over trust.",
    coreVibeEn: ["Mature", "Caring", "Steady", "In sync", "Reliable"],
    attractionStyleEn: ["Does not make you feel tired", "Knows how to arrange things well"],
    relationshipTempoEn: ["Steady with room to breathe"],
    affectionStyleEn: ["Not dramatic", "But keeps taking care of you"],
    conflictStyleEn: ["More rational", "Does not like losing control"],
    securityNeedEn: ["To be steadied", "To feel taken care of", "To feel supported"],
    weakPointsEn: ["Chaos", "Immaturity", "Repeated emotional swings"],
    idealDateEn: ["A well-planned trip", "Cooking together", "Grocery shopping"],
    scoringHintsEn: ["Mature", "Care", "Stability", "Long-term mindset"],
  },
};
