import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    // Header Background Image - Blue Texture
    backgroundImage: "./assets/header.jpg",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: false, // Removed part of the page!
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: false,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false, // Removed part of the page!
    awardsBackgroundColor: "white",
    showContact: false,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Your Next Web Developer",
    projectLink: "https://github.com/zm00622"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
