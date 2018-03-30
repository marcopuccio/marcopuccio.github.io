export default {
  loading(state) {
    return state.loading;
  },
  profile(state) {
    return state.profile;
  },
  social(state, getters) {
    let socials = [];
    const profile = getters.profile;
    if (profile) {
      socials = Object.values(profile.social).filter(s => s.visible);
    }
    return socials;
  },
  aboutMe(state) {
    return state.aboutMe;
  },
  libs(state) {
    return state.libs;
  },
  jobs(state) {
    return Object.values(state.jobs)
      .filter(s => s.visible)
      .sort((a, b) => a.order > b.order);
  },
};
