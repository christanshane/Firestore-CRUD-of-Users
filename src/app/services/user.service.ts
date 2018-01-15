import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users:Observable<User[]>;

  constructor(public angularFirestore: AngularFirestore) { 
    this.users = this.angularFirestore.collection('users').valueChanges();
   }

   getUsers(){
     return this.users;
   }

}
