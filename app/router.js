import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes');
  this.route('exhibits');
  this.route('collections');
});

export default Router;
