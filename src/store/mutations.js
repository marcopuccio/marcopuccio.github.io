/* eslint-disable */
export default {
  loading(state, payload) {
    Object.entries(payload).map((pos) => {
      state.loading[pos[0]] = pos[1];
    });
  },
  hydrateState(state, { key, data }) {
    state[key] = data;
  },
};
