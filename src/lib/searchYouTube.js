var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { 
      part: 'snippet',
      q: options.query,
      key: options.key,
      maxResults: options.max,
      type: 'video',

    },
    success: function(data) {
      callback(data.items);
    },
    failure: function(data) {
      console.log('Kat is being mean again...');
    }
  });

  // $.get('https://www.googleapis.com/youtube/v3/search', function sucess(data) {
  //   console.log(data);
  // });
};

window.searchYouTube = searchYouTube;
