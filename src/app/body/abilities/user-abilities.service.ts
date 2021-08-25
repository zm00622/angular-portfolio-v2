import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: "[Your abilities details here]",
    skills: [
      {
        skillName: "UI / UX Design",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Front End Development",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "Algorithms",
        proficiency: 1 //"[5 to 0]"
      },
      {
        skillName: "SEO",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Multimedia Marketing",
        proficiency: 5 //"[5 to 0]"
      }
    ],
    languages: [
      {
        languageName: "JavaScript",
        level: "4",
        proficiency: 4 //"[5 to 0]"
      },
      {
        languageName: "HTML",
        level: "5",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "CSS",
        level: "5",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "PHP",
        level: "2",
        proficiency: 2 //"[5 to 0]"
      }
    ],
    tools: [
      {
        toolName: "React.js",
        year: "2019 - Current",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "Angular.js",
        year: "2021",
        proficiency: 2 //"[5 to 0]"
      },
      {
        toolName: "WordPress",
        year: "2016 - Current",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "Adobe Editing Suite",
        year: "2010 - Current",
        proficiency: 2 //"[5 to 0]"
      },
      {
        toolName: "Git",
        year: "2019 - Current",
        proficiency: 4 //"[5 to 0]"
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
