import { Text, View } from 'react-native';

import { SectionHeading } from '@/components/landing/SectionHeading';
import { trustBadges, trustSection, type TrustStatus } from '@/constants/config';

const BADGE_ICON: Record<string, string> = {
  garda: '🛡️',
  'first-aid': '⛑️',
  tusla: '📋',
};

function statusTone(status: TrustStatus): { bar: string; pill: string; bg: string } {
  switch (status) {
    case 'Completed':
      return {
        bar: 'bg-crayonGrass',
        pill: 'bg-crayonGrass/25 text-sage-deep border-crayonGrass',
        bg: 'bg-white',
      };
    case 'Pending':
      return {
        bar: 'bg-sunshine',
        pill: 'bg-sunshine/35 text-ink-900 border-sunshine',
        bg: 'bg-white',
      };
    default:
      return {
        bar: 'bg-crayonLilac',
        pill: 'bg-crayonLilac/30 text-ink-800 border-crayonLilac',
        bg: 'bg-white',
      };
  }
}

export function TrustBar() {
  return (
    <View className="from-babySky/10 to-crayonPink/15 bg-gradient-to-b px-0 pb-16 pt-10 md:px-0 md:pb-24">
      <View className="border-sunshine/50 -mt-12 overflow-hidden rounded-t-[2rem] border-4 border-dashed bg-white/98 px-5 pt-14 shadow-card backdrop-blur-md md:-mt-16 md:rounded-t-5xl md:px-10 md:pt-16">
        <View className="mb-2 flex-row items-center justify-center gap-2">
          <Text className="text-lg">✅</Text>
          <Text className="font-body text-crayonCoral text-xs font-bold uppercase tracking-[0.25em]">
            Safety & trust
          </Text>
        </View>
        <SectionHeading
          eyebrow={trustSection.eyebrow}
          title={trustSection.title}
          subtitle={trustSection.subtitle}
        />
        <View className="flex-col gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-5">
          {trustBadges.map((badge) => {
            const tone = statusTone(badge.status);
            return (
              <View
                key={badge.id}
                className={`flex-1 overflow-hidden rounded-3xl border-2 border-ink-900/[0.04] shadow-lift web:transition-transform web:duration-300 web:hover:-translate-y-1 md:min-w-[260px] md:max-w-[300px] ${tone.bg}`}>
                <View className={`h-2 w-full ${tone.bar}`} />
                <View className="p-5 md:p-6">
                  <Text className="mb-1 text-3xl">{BADGE_ICON[badge.id] ?? '⭐'}</Text>
                  <Text className="font-display text-ink-900 mb-3 text-lg font-bold">{badge.label}</Text>
                  <View
                    className={`mb-3 max-w-fit self-start rounded-full border-2 px-3 py-1 ${tone.pill}`}>
                    <Text className="font-body text-xs font-bold uppercase tracking-wide">
                      {badge.status}
                    </Text>
                  </View>
                  {badge.detail ? (
                    <Text className="font-body text-ink-700 text-sm leading-relaxed">{badge.detail}</Text>
                  ) : null}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
