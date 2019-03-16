import { all } from 'redux-saga/effects';
// import UsersServiceRoot from ''
// import PhotoServiceRoot from ''
// import FileService from ''

// add here all saga service root
export default function* rootSaga() {
  yield all([
    // ...UsersServiceRoot,
    // ...PhotoServiceRoot,
    // FileService,
  ]);
}
