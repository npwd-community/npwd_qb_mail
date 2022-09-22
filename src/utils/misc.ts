// Quickly determine whether we are in browser
import { ServerPromiseResp } from '../types/common';

export const isEnvBrowser = (): boolean =>
  process.env.NODE_ENV === 'development' && !(window as any).invokeNative;

export const getResourceName = () =>
  (window as any).GetParentResourceName ? (window as any)?.GetParentResourceName() : 'npwd';

export const buildRespObj = (
  data: any,
  status?: 'ok' | 'error' | undefined,
  errorMsg?: string,
): ServerPromiseResp<any> => ({
  data,
  status,
  errorMsg,
});

const DayFormatting = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const MonthFormatting = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateString = (mailDate: number) => {
  const date = new Date(mailDate);
  return (
    DayFormatting[date.getDay()] +
    ', ' +
    MonthFormatting[date.getMonth()] +
    ' ' +
    ('0' + date.getDate()).slice(-2) +
    ' ' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes()
  );
};
