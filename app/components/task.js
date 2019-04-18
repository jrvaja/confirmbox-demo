import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({
  tagName: "li",
  classNames: ['list-group-item'],
  confirmbox: inject()
});
