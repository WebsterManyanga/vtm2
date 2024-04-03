import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo:User = {
    name: 'Icarus',
    username: 'spaceCadet',
    bio: 'Flying to the sun soon. I mean what choice do I have ☀️',
    photo: '../assets/dp.png',
    headerPhoto: '../assets/bg-photo.jpg',
    created: 'January 2012',
    followers: ['tchala', 'bobmarley'],
    following: [
      'bobmarley',
      'shakespeare',
      'beethoven',
      'picasso',
      'callMeIsaac',
      'spongebob',
      'mrKrabs',
      'tchala',
    ],
  };

  OtherUsers: User[] = [
    {
      name: 'Bob Marley',
      username: 'bobmarley',
      bio: "Woke up this morning with a tweet on my mind. Let's get together and feel alright. 🌞🎶 #BuffaloSoldier",      created: '',

      photo: '../../assets/bobMarley.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'William Shakespeare',
      username: 'shakespeare',
      bio: 'To thine own bio be true. In fair Twitterland, where we lay our scene. Expect jokes, jests, and maybe a bit of iambic sass.',
      photo: '../../assets/shakespeare.jpeg',
      created: '',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'Ludwig Beethoven',
      username: 'beethoven',
      bio: '🎵 Deaf composer making noise since 1770',
      photo: '../../assets/beethoven.jpeg',      created: '',

      followers: [],
      headerPhoto: '',
      following: [],
    },
    {
      name: 'Pablo Picasso',
      username: 'picasso',
      bio: 'Blue period enthusiast, occasional painter. #BrushStrokesAndPunchlines',      created: '',

      photo: '../../assets/picasso.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'Isaac Newton',
      username: 'callMeIsaac',
      bio: "Gravity's favorite nemesis. Inventor of calculus, connoisseur of apples. #PhysicsLover #GravityIsReal",      created: '',

      photo: '../../assets/newton.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'Spongebob',
      username: 'spongebob',
      bio: 'Living in a pineapple under the sea, but tweeting from the surface world! 🍍☀️ #SpongeBobLife',      created: '',

      photo: '../../assets/spongebob.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'Mr Krabs',
      username: 'mrKrabs',
      bio: "Official Twitter account of the Krusty Krab's finest, Eugene Krabs! In the business of making Krabby Patties and counting me money. #BikiniBottomBaller 💰🍔",      created: '',

      photo: '../../assets/mrKrabs.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
    {
      name: 'Black Panther',
      username: 'tchala',
      bio: '🐾 King of Wakanda by day, Twitter warrior by night. 🌙 Vibranium suit, sharp wit, and a penchant for justice. #WakandaForever #WittyPanther',      created: '',
      photo: '../../assets/blackPanther.jpeg',
      headerPhoto: '',
      followers: [],
      following: [],
    },
  ];
}
