export const Config = {
  site_name: 'MBC blog',
  title: 'Min Byeong chan',
  description: 'MBC blog',
  url: 'https://github.com/MinByeongChan',
  locale: 'kr',
  author: 'Byeong Chan',
  pagination_size: 9,
  paging_indicator: 5,
};

const {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_databaseURL,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId,
  FIREBASE_appId,
  FIREBASE_measurementId,
} = process.env;

export const firebaseConfig = {
  apiKey: FIREBASE_apiKey,
  authDomain: FIREBASE_authDomain,
  databaseURL: FIREBASE_databaseURL,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_appId,
  measurementId: FIREBASE_measurementId,
};
