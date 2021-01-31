export default {
    namespaced: true,
    state: () => ({
        isShowLNB: false,
        isShowRNB: false
    }),
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        // params에서 구조분해로 commit만 가져온 것
        onNav({ commit }, name) {
            // mutations의 updataState를 실행시킨다, {payload}를 파라미터로 전달해서
            commit('updateState', {
                [`isShow${name}`]: true
            })
        },
        offNav({ commit }, name) {
            commit('updateState', {
                [`isShow${name}`]: false
            })
        }
    }
}