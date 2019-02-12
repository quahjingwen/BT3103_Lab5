var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Happier",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE"
      },
      {
        show: false,
        title: "Happier - Chorus no controls",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE?controls=0&amp;start=55"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },
    removeVideo: function(title) {
      console.log("Deleting video");
      var i;
      for (i = 0; i < this.videos.length; i++) {
        if (this.videos[i].title == title) {
          console.log(title);
          this.videos.splice(i, 1);
          console.log(this.videos);
          return;
        }
      }
    }
  }
});
