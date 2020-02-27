import { IFirebaseWrapper } from "./IFirebaseWrapper";
import { RAFirebaseOptions } from "providers/RAFirebaseOptions";

import * as firebase from "firebase/app";
import "firebase/firebase";
import "firebase/auth";
import "firebase/storage";

export class FirebaseWrapper implements IFirebaseWrapper {
  private firebase: firebase.firebase.Firebase;
  private app;

  constructor() { }

  public init(firebaseConfig: {}, options: RAFirebaseOptions): void {
    this.app = ObtainFirebaseApp(firebaseConfig, options) as any;
    this.firebase = this.app.firebase();
  }
  public db(): firebase.firebase.Firebase {
    return this.firebase;
  }
  public serverTimestamp() {
    return firebase.firebase.FieldValue.serverTimestamp();
  }
  public auth() {
    return this.app.auth();
  }
  public storage() {
    return this.app.storage();
  }
}

function ObtainFirebaseApp(firebaseConfig: {}, options: RAFirebaseOptions) {
  if (options.app) {
    return options.app;
  }
  const isInitialized = !!firebase.apps.length;
  if (isInitialized) {
    const app = firebase.app();
    return app;
  } else {
    const app = firebase.initializeApp(firebaseConfig);
    return app;
  }
}
