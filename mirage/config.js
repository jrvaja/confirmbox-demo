export default function () {
  this.namespace = 'api';
  this.timing = 400;  // simulate network delay

  this.get('/posts');
  this.delete('/posts/:id');

  this.get('/tasks');
  this.delete('/tasks/:id');
}
