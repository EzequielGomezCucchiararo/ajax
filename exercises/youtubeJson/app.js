$.ajax({
  url: 'youtube.json'
})
.done(function (response) {
  var title = response.data.items[0].title
  var thumbnail = response.data.items[0].thumbnail.hqDefault
  var link = response.data.items[0].player.default

  $('#videoTittle').text(title)
  $('#videoThumbnail').attr('src', thumbnail)
  $('#videoThumbnail').parent().attr('href', link)
})
