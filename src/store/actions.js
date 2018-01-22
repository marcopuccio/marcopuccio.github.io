import firebase from '@/shared/firebase';

export default {
  fetchAppData({ commit }) {
    firebase.database().ref().on('value', (snap) => {
      const data = snap.val();
      commit('hydrateProfile', data.profile);
      commit('hydrateAboutMe', data.aboutme);
      commit('hydrateLibs', data.libs);
      commit('loading', { app: false });
    });
  },
};

