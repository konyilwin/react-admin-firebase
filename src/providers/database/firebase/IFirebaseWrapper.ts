import { RAFirebaseOptions } from "providers/RAFirebaseOptions";
import { FirebaseAuth } from "@firebase/auth-types";
import { firebase } from 'firebase';

export interface IFirebaseWrapper {
  init(firebaseConfig: {}, options: RAFirebaseOptions): void;
  db(): firestore.Firestore;
  storage(): firebase.storage.Storage;
  auth(): FirebaseAuth;
  serverTimestamp(): any;
}
