// redux/selectors.js

export const getCluesState = store => store.clues;

export const getClueList = store =>
  getCluesState(store) ? getCluesState(store).allIds : [];

export const getClueById = (store, id) =>
  getCluesState(store) ? {...getCluesState(store).byIds[id], id } : {};

export const getClues = store =>
  getClueList(store).map(id => getClueById(store, id));