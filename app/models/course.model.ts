export class Course {


  constructor(public name: string, public provider: string, public url: string,
              public description: string, public projects: {projectName: string, projectLink: string} []) {}

}
