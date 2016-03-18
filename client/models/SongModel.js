// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // Create enqueue method that triggers enqueue event
  enqueue: function() {
    this.trigger('enqueue', this);
  },

  // Create dequeue method that triggers dequeue event
  dequeue: function() {
    this.trigger('dequeue', this);
  },

  // Create ended method that triggers ended event
  ended: function() {
    this.trigger('ended', this);
  }

});
