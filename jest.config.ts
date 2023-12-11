import { getJestProjects } from '@nx/jest';

// https://stackoverflow.com/a/33307487/8644294
// you can only have one default export per file
export default {
  // getJestProjects() function would fetch a list of all projects in the workspace that are using Jest.
  projects: getJestProjects(),
};
