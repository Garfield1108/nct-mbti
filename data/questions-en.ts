interface QuestionTranslationEn {
  prompt: string;
  options: Record<
    string,
    {
      label: string;
      note: string;
    }
  >;
}

export const QUESTION_TRANSLATIONS_EN: Record<string, QuestionTranslationEn> = {
  q1: {
    prompt: "When you start to like someone, how do you get closer?",
    options: {
      a: {
        label: "Start talking first and get close through playful banter",
        note: "I need interaction to feel it",
      },
      b: {
        label: "See if being together feels comfortable, then move closer slowly",
        note: "Slower feels safer",
      },
      c: {
        label: "Get pulled in by a certain aura first",
        note: "Once I feel it, I cannot ignore it",
      },
      d: {
        label: "Stay friends first, then naturally grow closer",
        note: "Time deepens the bond",
      },
    },
  },
  q2: {
    prompt: "What kind of affection moves you most?",
    options: {
      a: {
        label: "They obviously come find you and reply fast",
        note: "Devotion should be visible",
      },
      b: {
        label: "They stay low-key but take care of the details",
        note: "Quiet care hits hardest",
      },
      c: {
        label: "Usually restrained, but firmly stand on your side when it matters",
        note: "Devotion inside restraint",
      },
      d: {
        label: "They may not say much, but they are always there",
        note: "Steadiness itself is moving",
      },
    },
  },
  q3: {
    prompt: "What relationship pace do you prefer?",
    options: {
      a: {
        label: "High-frequency interaction, with messages and jokes always flowing",
        note: "Liveliness makes it feel real",
      },
      b: {
        label: "A slower pace that becomes steadier over time",
        note: "Comfort matters most",
      },
      c: {
        label: "Something quieter, without needing to talk all the time",
        note: "Warmth is enough",
      },
      d: {
        label: "Low frequency is fine, as long as it feels special",
        note: "Intensity matters more than frequency",
      },
    },
  },
  q4: {
    prompt: "When you are feeling low, how do you want to be cared for?",
    options: {
      a: {
        label: "Come find me, tease me, and pull me out of the mood",
        note: "A little liveliness helps",
      },
      b: {
        label: "No need to say much, just stay quietly with me",
        note: "Presence is already enough",
      },
      c: {
        label: "Help me sort things out first, then support me clearly",
        note: "Reliability matters",
      },
      d: {
        label: "Soothe me gently and make it clear you are on my side",
        note: "I need reassurance",
      },
    },
  },
  q5: {
    prompt: "When there is a disagreement, which are you more like?",
    options: {
      a: {
        label: "I snap back first, but I do not actually want to leave",
        note: "I act tough, but I still care",
      },
      b: {
        label: "I calm down first, then talk it through seriously",
        note: "Let us talk after emotions settle",
      },
      c: {
        label: "I try to soften the atmosphere because I do not want us to hurt each other",
        note: "A softer approach suits me",
      },
      d: {
        label: "I want to break the problem down and solve it directly",
        note: "The issue still needs to be handled",
      },
    },
  },
  q6: {
    prompt: "What kind of person do you usually notice first?",
    options: {
      a: {
        label: "Someone who catches jokes and lifts the mood",
        note: "Interesting people are hard to miss",
      },
      b: {
        label: "Someone gentle who makes you feel at ease",
        note: "Comfort matters a lot",
      },
      c: {
        label: "Someone composed and full of boundaries",
        note: "Maturity is attractive",
      },
      d: {
        label: "Someone a little dangerous, a little unusual",
        note: "The more distinctive, the easier I fall",
      },
    },
  },
  q7: {
    prompt: "In a relationship, which role are you more often in?",
    options: {
      a: {
        label: "The one who lights up the atmosphere",
        note: "I keep the interaction flowing",
      },
      b: {
        label: "The one who notices how the other person feels and takes care of it",
        note: "Details come first",
      },
      c: {
        label: "The one who likes being held and gets clingy once safe",
        note: "When I am received, I depend deeply",
      },
      d: {
        label: "The one who slowly steadies the relationship",
        note: "I want both of us to feel secure",
      },
    },
  },
  q8: {
    prompt: "What kind of everyday moment makes your heart move?",
    options: {
      a: {
        label: "You can ramble anytime and they always catch it",
        note: "That constant online feeling matters",
      },
      b: {
        label: "Doing ordinary little things together still feels good",
        note: "Simple does not mean shallow",
      },
      c: {
        label: "You can both stay busy, but stand on the same side when it matters",
        note: "Independent, but still belonging",
      },
      d: {
        label: "Sometimes it feels like a movie scene",
        note: "It has to feel special",
      },
    },
  },
  q9: {
    prompt: "When you like someone, what are you usually like?",
    options: {
      a: {
        label: "I really want to talk to them, and I cannot hide it well",
        note: "My feelings show quickly",
      },
      b: {
        label: "I am not obvious, but the details start to build up",
        note: "Liking someone leaks out slowly",
      },
      c: {
        label: "I get swept up because something about it feels too special",
        note: "The atmosphere hits first",
      },
      d: {
        label: "I start thinking about whether the relationship can go far",
        note: "Long-term potential matters",
      },
    },
  },
  q10: {
    prompt: "If the other person suddenly turns colder, what is your first reaction?",
    options: {
      a: {
        label: "Test the waters and see if they still care",
        note: "I cannot help reading the reaction",
      },
      b: {
        label: "Ask directly, but try to stay calm about it",
        note: "Put the problem on the table",
      },
      c: {
        label: "Wonder if I did something wrong",
        note: "I get uneasy very easily",
      },
      d: {
        label: "Give a little space first and see if it naturally returns",
        note: "I need to cool down before deciding",
      },
    },
  },
  q11: {
    prompt: "What kind of two-person atmosphere do you like most?",
    options: {
      a: {
        label: "Lively, playful, always going back and forth",
        note: "A relationship should have volume",
      },
      b: {
        label: "Quiet, but comfortable just by being together",
        note: "Low pressure is the most charming",
      },
      c: {
        label: "Two strong people still staying in sync",
        note: "Standing side by side matters",
      },
      d: {
        label: "A sense that no one else can step into your story",
        note: "An exclusive channel is intoxicating",
      },
    },
  },
  q12: {
    prompt: "What kind of devoted moment hits you the hardest?",
    options: {
      a: {
        label: "They clearly take your side even in front of other people",
        note: "Devotion should not be hidden too deeply",
      },
      b: {
        label: "They remember something small you mentioned and actually do it",
        note: "Detail-level devotion stays with me",
      },
      c: {
        label: "Usually restrained, but always on your side when it counts",
        note: "Steady loyalty scores big",
      },
      d: {
        label: "They keep thinking of you and small things all lead back to you",
        note: "Consistent presence is most moving",
      },
    },
  },
  q13: {
    prompt: "Compared with pure excitement, what matters more to you?",
    options: {
      a: {
        label: "Whether the response stays steady",
        note: "Regular feedback makes me feel safe",
      },
      b: {
        label: "Whether there is enough spark to light both people up",
        note: "Intensity is part of attraction",
      },
      c: {
        label: "Whether they truly understand you without endless explanation",
        note: "Being understood matters more than being soothed",
      },
      d: {
        label: "Whether there is complementarity and natural freshness",
        note: "Differences can shine too",
      },
    },
  },
  q14: {
    prompt: "What side of you do you most want the other person to understand?",
    options: {
      a: {
        label: "The vulnerability I never say out loud",
        note: "I want to be received gently",
      },
      b: {
        label: "That I also want to be clearly chosen",
        note: "Being favored matters a lot",
      },
      c: {
        label: "That I look steady, but I need long-term presence",
        note: "Steady presence is my foundation",
      },
      d: {
        label: "That I care a lot about special feeling and atmosphere",
        note: "Without texture, it is hard to fall",
      },
    },
  },
  q15: {
    prompt: "What can you least stand in a relationship?",
    options: {
      a: {
        label: "Too cold, too dull, no interaction at all",
        note: "No back-and-forth cools me down fast",
      },
      b: {
        label: "Hot-and-cold behavior that keeps you guessing",
        note: "Uncertainty is exhausting",
      },
      c: {
        label: "No reason, just emotional collision after emotional collision",
        note: "It is tiring when nothing gets solved",
      },
      d: {
        label: "Both people care, but keep competing with each other",
        note: "Getting stuck in the push-pull really hurts",
      },
    },
  },
  q16: {
    prompt: "How would your ideal relationship begin?",
    options: {
      a: {
        label: "With sparks first, then certainty grows through interaction",
        note: "Attraction happens first",
      },
      b: {
        label: "As friends or teammates first, then one day they matter more",
        note: "Build the base first",
      },
      c: {
        label: "By being gently received, then slowly growing dependent",
        note: "Security comes first",
      },
      d: {
        label: "As if fate keeps pulling you closer, with a built-in story",
        note: "Maximum sense of specialness",
      },
    },
  },
  q17: {
    prompt: "In a relationship, what feeling do you most want to keep?",
    options: {
      a: {
        label: "That it is always fun and never dull",
        note: "Interesting matters more than perfect",
      },
      b: {
        label: "That both people can relax and not pretend to be strong",
        note: "Comfort is the basis of sincerity",
      },
      c: {
        label: "That you do not need to stay glued together to know you are on the same side",
        note: "Trust should hold the relationship",
      },
      d: {
        label: "That the relationship has a kind of tension no one else could copy",
        note: "Uniqueness is what gets me",
      },
    },
  },
  q18: {
    prompt: "What are you most likely to fall for first?",
    options: {
      a: {
        label: "A sense of being accompanied",
        note: "Presence works on me first",
      },
      b: {
        label: "Maturity and reliability",
        note: "Being steady is a huge plus",
      },
      c: {
        label: "Contrast and chemistry",
        note: "The spark hits fast",
      },
      d: {
        label: "A sense of fate and atmosphere",
        note: "Like the opening of a story",
      },
    },
  },
  q19: {
    prompt: "When a relationship starts to flatten out, how would you bring the feeling back?",
    options: {
      a: {
        label: "Do something fresh together and lift the atmosphere again",
        note: "Reactivate the connection first",
      },
      b: {
        label: "Have a serious talk about the things left unsaid",
        note: "Understanding matters more than tricks",
      },
      c: {
        label: "Return to ordinary companionship and let the heart move closer again",
        note: "Get used to each other again",
      },
      d: {
        label: "Create a romantic scene that belongs only to the two of you",
        note: "You still have to bring back the feeling",
      },
    },
  },
  q20: {
    prompt: "If you had to define an ideal relationship in one line, which would you choose?",
    options: {
      a: {
        label: "Living through everyday life together, loudly and joyfully",
        note: "Shared daily life comes first",
      },
      b: {
        label: "Being steadily held, and feeling safe enough to rely on them",
        note: "Softness and security come first",
      },
      c: {
        label: "There has to be obvious spark, or I cannot fully fall",
        note: "Tension and thrill come first",
      },
      d: {
        label: "Walking side by side for a long time, with mature chemistry",
        note: "Long-term harmony comes first",
      },
    },
  },
};
