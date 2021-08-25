import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Zary G. Manning",
    jobTitle: "Front-End Developer",
    aboutMe: "For the love of design and the love of learning, software development is a passion. Reading about new technologies, solving once impossible problems, providing value, these are the things that excite me.",
    profilePicture: "./assets/profilePicture.jpg",
    location: "Jacksonville, Fl",
    email: "zarymanning@gmail.com",
    devpostAccount: "",
    facebookAccount: "",
    githubAccount: "https://github.com/zm00622",
    googleAccount: "",
    linkedinAccount: "",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
