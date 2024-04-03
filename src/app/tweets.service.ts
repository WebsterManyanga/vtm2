import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { UserService } from './user.service';
import { Reply } from './reply';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  tweets: Tweet[] = [
    new Tweet(
      'bobmarley',
      'Woke up this morning feeling irie... until I realized it was Monday. Who needs Mondays anyway? #NoMondays #BobMarleyProblems',
      1,
      new Date(2024, 2, 20, 2, 15),
      ['tchala', 'mrKrabs', 'picasso'],
      [
        new Reply(
          this.userService.OtherUsers.find(
            (user) => user.username === 'tchala'
          )!,
          'Easy there, Bob! Every day good inna its own way. Just crank up some tunes and let the good vibes chase away the Monday blues. ✌️ #ReggaeMondays'
        ),
        new Reply(
          this.userService.OtherUsers.find(
            (user) => user.username === 'callMeIsaac'
          )!,
          "Fun fact: Mondays weren't always a thing, Bob! In ancient Rome, the week started on a market day! Maybe we should bring that back? #HistoryBuffMondays"
        ),
      ]
    ),
    new Tweet(
      'shakespeare',
      'To block or not to block, that is the question.',
      2,
      new Date(2024, 2, 29, 7, 30),
      ['callMeIsaac', 'spongebob'],
      [
        new Reply(
          this.userService.OtherUsers.find(
            (user) => user.username === 'beethoven'
          )!,
          'A question most vexing in these modern times, good sir! To banish forever, or endure the folly? A dilemma worthy of a sonnet! #WriterlyWoes'
        ),
      ]
    ),
    new Tweet(
      'beethoven',
      "When you're trying to write a symphony but your neighbor's dog won't stop barking... #ComposerProblems #NeedSomeQuiet",
      3,
      new Date(2024, 2, 29, 7, 35),
      ['shakespeare', 'picasso', 'bobmarley', 'mrKrabs', 'tchala'],
      [
        new Reply(
          this.userService.OtherUsers.find(
            (user) => user.username === 'spongebob'
          )!,
          '😂😂😂'
        ),
      ]
    ),
    new Tweet(
      'picasso',
      "Just finished painting my latest masterpiece. Critics are already debating whether it's avant-garde or just me sneezing on the canvas. #AbstractOrAccidental",
      4,
      new Date(2024, 2, 28, 7, 30)
    ),
    new Tweet(
      'callMeIsaac',
      "Just discovered calculus. Sorry in advance to all future students who'll have to learn it! #MathMadness #CalculusCraziness",
      5,
      new Date(2024, 1, 2, 7, 30),
      ['bobmarley', 'shakespeare'],
      [
        new Reply(
          this.userService.OtherUsers.find(
            (user) => user.username === 'tchala'
          )!,
          'This tweet marks the beginning of endless student tears worldwide! But seriously, a groundbreaking discovery, Mr. Newton. #TheScienceOfCalculus'
        ),
      ]
    ),
    new Tweet(
      'spongebob',
      "When you're so excited to go jellyfishing, but then you realize you left your net at home... Rookie mistake, even for a sponge! #JellyfishBlues",
      6,
      new Date(2024, 2, 29, 2, 30),
      ['spongebob']
    ),
    new Tweet(
      'mrKrabs',
      "Me money's feeling lonely. Any volunteers to keep it company? 💰 #MoneyTalks",
      7,
      new Date(2023, 3, 29, 5, 30),
      ['spongebob']
    ),
    new Tweet(
      'tchala',
      'To the guy who tried to steal vibranium from Wakanda last night... Nice try. #FailedHeist #WakandaSecurity',
      8,
      new Date(2024, 1, 10, 3, 3),
      ['shakespeare', 'callMeIsaac', 'bobMarley']
    ),
  ];

  constructor(public userService: UserService) {}

  addLike(id: number) {
    const i = this.tweets.findIndex((tweet) => tweet.id === id);
    if (this.tweets[i].likes.includes(this.userService.userInfo.username)) {
      this.tweets[i].likes.pop();
      return false;
    }
    this.tweets[i].likes.push(this.userService.userInfo.username);
    return true;
  };

  styleHashTags(message: string): string {
    const arr = message.split('');
    let openHash = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '#') {
        openHash = true;
        arr[i - 1] = [arr[i - 1]] + '<span class="text-primary">';
      }

      if (openHash && arr[i] === ' ') {
        openHash = false;
        arr[i] = '</span>' + arr[i];
      }
    }

    return arr.join('');
  }

  deleteRepost(i: number) {
    const j = this.tweets[i].reposts.findIndex(
      (user) => user.username === this.userService.userInfo.username
    );
    this.tweets[i].reposts.splice(j, 1);
    console.log(this.tweets[i].reposts);
  }
}
