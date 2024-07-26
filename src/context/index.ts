import axios from '@/apis/axios'
import API from '@/apis/constants'

/**
 * 用户注册
 * @param inviter 邀请码
 * @returns 
 */
export const postBotRegister = (inviter: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios({
                method: 'POST',
                url: API.POST_BOT_REGISTER,
                data: { inviter }
            }) as any
            if (result.code === 0) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 用户领取TPUSD
 * @returns 
 */
export const postUserLuckAward = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios({
                method: 'POST',
                url: API.POST_USER_LUCK_AWARD
            }) as any
            if (result.code === 0) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 领取列表
 * @returns 
 */
export const getUserAssetList = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios({
                method: 'GET',
                url: API.GET_USER_ASSET_LIST,
                params: {
                    pageSize: 200,
                    pageNo: 1
                }
            }) as any
            if (result.code === 0) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 用户详情
 * @returns 
 */
export const getUserDetail = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios({
                method: 'GET',
                url: API.GET_USER_DETAIL
            }) as any
            if (result.code === 0) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 排行榜
 * @returns 
 */
export const getRankList = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios({
                method: 'GET',
                url: API.GET_RANK_LIST,
                params: {
                    pageSize: 20,
                    pageNo: 1
                }
            }) as any
            if (result.code === 0) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}
