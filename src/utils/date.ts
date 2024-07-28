import moment from "moment-timezone"
/**
 * 时间转换
 * @param time unix时间戳（秒）unit64格式
 * @param splitter 分割符
 */
export const getTime = (time: number, splitter = '-'): string => {
    if (!time) {
        return '-'
    }
    return moment(time * 1000).tz(moment.tz.guess()).format(`YYYY${splitter}MM${splitter}DD HH:mm:ss`)
}
