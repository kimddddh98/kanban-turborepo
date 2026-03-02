import dayjs from 'dayjs'

type FormatDayInput = string | number | Date

export const formatDay = (
  value: FormatDayInput,
  format = 'YYYY.MM.DD',
): string => {
  return dayjs(value).format(format)
}
