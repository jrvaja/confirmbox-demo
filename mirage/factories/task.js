import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Task ${i + 1}`
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
});
