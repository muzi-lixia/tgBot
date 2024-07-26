import moment from "moment"
/**
 * 时间转换
 * @param time unix时间戳（秒）unit64格式
 * @param splitter 分割符
 */
export const getTime = (time: number, splitter = '-'): string => {
    if (!time) {
        return '-'
    }
    return moment.unix(time).utc(true).format(`YYYY${splitter}MM${splitter}DD hh:mm:ss`)
}
