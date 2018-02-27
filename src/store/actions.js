import firebase from '@/shared/firebase';

export default {
  fetchAppData({ commit }) {
    firebase.database().ref().on('value', (snap) => {
      const data = snap.val();
      commit('hydrateState', { key: 'profile', data: data.profile });
      commit('hydrateState', { key: 'aboutMe', data: data.aboutme });
      commit('hydrateState', { key: 'libs', data: data.libs });
      commit('hydrateState', { key: 'jobs', data: data.jobs });
      commit('loading', { app: false });
    });
  },
};

