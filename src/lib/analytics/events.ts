export const EVENTS = {
  SIGN_UP_CLICKED: "sign_up_clicked",
} as const;

export type AnalyticsEvent =
  typeof EVENTS[keyof typeof EVENTS];
