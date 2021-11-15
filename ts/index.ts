import { v4 as uuidv4 } from "uuid";

import { User } from "./User";

const user = new User("マツモト", "イブキ", 20);

const contentsElme = document.getElementById("contents");
if (!!contentsElme) {
  contentsElme.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById("saiban") as HTMLButtonElement;
const uuidSpan = document.getElementById("uuid") as HTMLSpanElement;

saibanButton.onclick = (e) => {
  uuidSpan.innerText = uuidv4();
};
