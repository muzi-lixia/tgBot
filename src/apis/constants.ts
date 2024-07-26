const API = {
    // 获取token
    GET_JWT_TOKEN: '/v1/terpolly/miniapp/create_token',
    // 用户注册
    POST_BOT_REGISTER: '/bot/register',
    // 用户详情
    GET_USER_DETAIL: '/user/detail',
    // 用户领取TPUSD明细列表
    GET_USER_ASSET_LIST: '/user/asset/list',
    // 领取TPUSD
    POST_USER_LUCK_AWARD: '/user/luckAward',
    // 排行榜
    GET_RANK_LIST: '/user/rank/list'
}

export default API
