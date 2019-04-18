import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      posts: this.store.findAll('post'),
      tasks: this.store.findAll('task')
    }
  }
});
