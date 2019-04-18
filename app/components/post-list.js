import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({
  confirmbox: inject(),
  actions: {
    deletePost() {
      if (this.confirmbox.selected) {
        this.confirmbox.selected.destroyRecord();
        this.confirmbox.reset();
      }
    },
    closeConfirmbox() {
      this.confirmbox.reset();
    }
  }
});
