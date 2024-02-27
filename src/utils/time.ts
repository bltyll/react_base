import { getTimezone } from '@/stores/globalStore';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localeData from 'dayjs/plugin/localeData';
import objectSupport from 'dayjs/plugin/objectSupport';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(localeData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(dayOfYear);
dayjs.extend(objectSupport);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

/**
 * 根据参数和应用配置生成一个dayjs对象
 * @param options 配置
 */
export function timer(date?: dayjs.ConfigType): dayjs.Dayjs {
  const globalTimezone = getTimezone();
  // 如果没有传入local或timezone则使用应用配置
  return dayjs(date).tz(globalTimezone ?? globalTimezone ?? 'UTC');
}
