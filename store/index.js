export const state = () => ({
    searchterm: 'lemoncode'
})

export const mutations = {
    setSearchTerm(state, searchterm ) {
        state.searchterm = searchterm
    }
}

export const getters = {
  getSearchterm: state => {
    return state.searchterm
  }
};
