import { PAIR_PROFILES } from "@/data/pair-profiles";
import { RESULT_COPY_EN } from "@/data/results-en";
import type { ResultId, ResultPalette, ResultProfile } from "@/lib/types";

const palette = (
  accent: string,
  accentSoft: string,
  accentAlt: string,
  line: string,
): ResultPalette => ({
  accent,
  accentSoft,
  accentAlt,
  line,
});

const presentationById: Record<
  ResultId,
  Pick<ResultProfile, "palette" | "illustration">
> = {
  "mark-haechan": {
    palette: palette("#7bb7a4", "#e7f6f0", "#b9d6ff", "#cfe1d8"),
    illustration: {
      pose: "side-by-side",
      accessory: "spark",
      concept: "两个一起接话、一起笑，日常感很强。",
    },
  },
  "mark-jaemin": {
    palette: palette("#8fb3d9", "#edf4ff", "#d8efe9", "#d7e3f2"),
    illustration: {
      pose: "lean-in",
      accessory: "leaf",
      concept: "更柔和、更放松的陪伴距离。",
    },
  },
  "jeno-jaemin": {
    palette: palette("#9cc58d", "#eef8ea", "#f5f1cf", "#d9e6d3"),
    illustration: {
      pose: "side-by-side",
      accessory: "leaf",
      concept: "像白天一起出门的轻松稳定感。",
    },
  },
  "jaehyun-doyoung": {
    palette: palette("#97a0d8", "#eef0ff", "#dfe7d0", "#d6dbf1"),
    illustration: {
      pose: "lean-in",
      accessory: "bookmark",
      concept: "克制但很明确的照顾感。",
    },
  },
  "johnny-jaehyun": {
    palette: palette("#7ea0ef", "#eef3ff", "#d7f1f0", "#d4dff8"),
    illustration: {
      pose: "mirror",
      accessory: "star",
      concept: "并肩站稳、彼此欣赏的强强氛围。",
    },
  },
  "doyoung-taeyong": {
    palette: palette("#9db8c6", "#eef6fa", "#ebedff", "#d5e1e8"),
    illustration: {
      pose: "lean-in",
      accessory: "halo",
      concept: "安静治愈、彼此安放情绪。",
    },
  },
  "yuta-winwin": {
    palette: palette("#9c8de0", "#f2efff", "#dbe7ff", "#ddd7f5"),
    illustration: {
      pose: "orbit",
      accessory: "star",
      concept: "有距离感，也有电影镜头感。",
    },
  },
  "renjun-jaemin": {
    palette: palette("#89b69c", "#ebf6ef", "#eef2db", "#d6e4d9"),
    illustration: {
      pose: "side-by-side",
      accessory: "bookmark",
      concept: "像长期默认陪伴的生活片段。",
    },
  },
  "jeno-renjun": {
    palette: palette("#7fb9bf", "#e8f8f8", "#f1ebff", "#d2e8ea"),
    illustration: {
      pose: "side-by-side",
      accessory: "halo",
      concept: "双向照顾的平衡感更强。",
    },
  },
  "taeyong-ten": {
    palette: palette("#8a86d9", "#efeeff", "#ffe7ef", "#d8d6f2"),
    illustration: {
      pose: "orbit",
      accessory: "star",
      concept: "强烈、张力高、很难忽视。",
    },
  },
  "haechan-renjun": {
    palette: palette("#f0b171", "#fff2e4", "#ffd9e2", "#f1dcc7"),
    illustration: {
      pose: "mirror",
      accessory: "spark",
      concept: "会闹会黏、反应很快的依赖感。",
    },
  },
  "mark-jaehyun": {
    palette: palette("#8ca7b1", "#edf5f7", "#f5efe2", "#d8e4e7"),
    illustration: {
      pose: "side-by-side",
      accessory: "bookmark",
      concept: "像长期队友一样站在一起。",
    },
  },
  "jaehyun-jungwoo": {
    palette: palette("#9ab2cd", "#eef5fb", "#f4eadf", "#dbe4eb"),
    illustration: {
      pose: "mirror",
      accessory: "star",
      concept: "松弛舒服，但偏爱感会慢慢变得很明显。",
    },
  },
  "doyoung-jungwoo": {
    palette: palette("#a9b9ef", "#f0f4ff", "#f7ecff", "#dce1f7"),
    illustration: {
      pose: "lean-in",
      accessory: "leaf",
      concept: "偏温柔照顾，也更容易让人放松。",
    },
  },
  "kun-ten": {
    palette: palette("#93aebd", "#eef5f9", "#e8f0d9", "#d5dfe6"),
    illustration: {
      pose: "side-by-side",
      accessory: "bookmark",
      concept: "成熟、有秩序，也有照顾感。",
    },
  },
};

export const resultImageMap: Record<ResultId, string> = {
  "mark-haechan": "/results/mark-haechan.png",
  "mark-jaemin": "/results/mark-jaemin.png",
  "jeno-jaemin": "/results/jeno-jaemin.png",
  "jaehyun-doyoung": "/results/jaehyun-doyoung.png",
  "johnny-jaehyun": "/results/johnny-jaehyun.png",
  "doyoung-taeyong": "/results/doyoung-taeyong.png",
  "yuta-winwin": "/results/yuta-winwin.png",
  "renjun-jaemin": "/results/renjun-jaemin.png",
  "jeno-renjun": "/results/jeno-renjun.png",
  "taeyong-ten": "/results/taeyong-ten.png",
  "haechan-renjun": "/results/haechan-renjun.png",
  "mark-jaehyun": "/results/mark-jaehyun.png",
  "jaehyun-jungwoo": "/results/jaehyun-jungwoo.png",
  "doyoung-jungwoo": "/results/doyoung-jungwoo.png",
  "kun-ten": "/results/kun-ten.png",
};

const splitPair = (pair: string): [string, string] => {
  const members = pair.split(" × ");

  if (members.length !== 2) {
    throw new Error(`Unexpected pair format: ${pair}`);
  }

  return [members[0], members[1]];
};

export const RESULTS: ResultProfile[] = PAIR_PROFILES.map((profile) => ({
  ...profile,
  ...RESULT_COPY_EN[profile.id],
  members: splitPair(profile.pair),
  imagePath: resultImageMap[profile.id],
  ...presentationById[profile.id],
}));

export const RESULTS_BY_ID: Record<ResultId, ResultProfile> = RESULTS.reduce(
  (collection, result) => {
    collection[result.id] = result;
    return collection;
  },
  {} as Record<ResultId, ResultProfile>,
);

export const RESULT_COUNT = RESULTS.length;
