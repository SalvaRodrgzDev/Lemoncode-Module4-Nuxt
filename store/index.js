export const state = () => ({
    searchTerm: 'lemoncode'
})

export const mutations = {
    setSearchTerm(state, searchTerm ) {
        state.searchTerm = searchTerm
    }
}
