const actions = {
    increment (context) {
        context.commit('increment')
    },
    incrementAsync ({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },
        /*
        async actionA ({ commit }) {
        commit('gotData', await getData())
        },
        async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // wait for `actionA` to finish
        commit('gotOtherData', await getOtherData())
        }*/
}

export default actions;