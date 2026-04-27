import { pickLocalizedList, pickLocalizedText, type Locale } from "@/lib/locale";
import type { ResultProfile, TraitTag } from "@/lib/types";

const traitTagLabelsEn: Record<TraitTag, string> = {
  热闹: "Lively",
  朋友感: "Friendly chemistry",
  轻松: "Ease",
  依赖: "Reliance",
  温柔: "Gentleness",
  照顾: "Care",
  慢热: "Slow burn",
  稳定: "Stability",
  长期主义: "Long-term mindset",
  成熟: "Mature",
  偏爱: "Devotion",
  安静: "Quiet",
  强强: "Power pair",
  治愈: "Healing",
  共情: "Empathy",
  宿命感: "Fated vibe",
  氛围感: "Atmosphere",
  张力: "Tension",
  反差: "Contrast",
  拉扯: "Push-pull",
};

export const getLocalizedResultContent = (
  result: ResultProfile,
  locale: Locale,
) => ({
  typeName: pickLocalizedText(
    locale,
    result.typeName,
    result.typeNameEn,
    result.typeNameKo,
  ),
  oneLine: pickLocalizedText(
    locale,
    result.oneLine,
    result.oneLineEn,
    result.oneLineKo,
  ),
  narrative: pickLocalizedText(
    locale,
    result.narrative,
    result.narrativeEn,
    result.narrativeKo,
  ),
  coreVibe: pickLocalizedList(
    locale,
    result.coreVibe,
    result.coreVibeEn,
    result.coreVibeKo,
  ),
  attractionStyle: pickLocalizedList(
    locale,
    result.attractionStyle,
    result.attractionStyleEn,
    result.attractionStyleKo,
  ),
  relationshipTempo: pickLocalizedList(
    locale,
    result.relationshipTempo,
    result.relationshipTempoEn,
    result.relationshipTempoKo,
  ),
  affectionStyle: pickLocalizedList(
    locale,
    result.affectionStyle,
    result.affectionStyleEn,
    result.affectionStyleKo,
  ),
  conflictStyle: pickLocalizedList(
    locale,
    result.conflictStyle,
    result.conflictStyleEn,
    result.conflictStyleKo,
  ),
  securityNeed: pickLocalizedList(
    locale,
    result.securityNeed,
    result.securityNeedEn,
    result.securityNeedKo,
  ),
  weakPoints: pickLocalizedList(
    locale,
    result.weakPoints,
    result.weakPointsEn,
    result.weakPointsKo,
  ),
  idealDate: pickLocalizedList(
    locale,
    result.idealDate,
    result.idealDateEn,
    result.idealDateKo,
  ),
  scoringHints:
    locale === "en"
      ? result.scoringHintsEn ??
        result.scoringHints.map((trait) => traitTagLabelsEn[trait])
      : result.scoringHints,
});
