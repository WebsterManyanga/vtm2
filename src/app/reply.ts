import { User } from "./user";

export class Reply {
  constructor(user: User,private reply: string) {
    this.reply = styleHashTags(this.reply);
  } 

}


function styleHashTags(message: string): string {
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