/* eslint-disable */
export default {
  loading(state, payload) {
    Object.entries(payload).map((pos) => {
      state.loading[pos[0]] = pos[1];
    });
  },
  hydrateProfile(state, payload) {
    state.profile = payload;
  },
  hydrateAboutMe(state, payload) {
    state.aboutMe = payload;
  },
  hydrateLibs(state, payload) {
    state.libs = payload;
  },
};
