// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //Firebase
  firebase: {
    projectId: 'intranet-79368',
    appId: '1:134485977552:web:3aac5b645dc21c39dd71d5',
    storageBucket: 'intranet-79368.appspot.com',
    apiKey: 'AIzaSyAbu89kyj7ZaG0deOU2GUxSIF4jAKxW5so',
    authDomain: 'intranet-79368.firebaseapp.com',
    messagingSenderId: '134485977552',
  },
  //Uris
  healthUnitsUri: '/health-units',
  healthProductsUri: '/health-products',
  healthRecipeTypesUri: '/health-recipe-types',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
