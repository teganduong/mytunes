// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  add: function() {
      debugger;
    this.enqueue();
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    var firstSong = this.at(0);
    if (firstSong) {
      firstSong.play();
    }
  }

});