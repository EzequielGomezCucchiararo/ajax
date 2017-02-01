$('#sArtist').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listArtists = response.artists.items
    var optionsArtists = listArtists.map(function (elem) {
      return "<option value='" + elem.id + "'>" + elem.name + '</option>'
    })
    optionsArtists.unshift('<option value="">Choose the Artist</option>')
    $('#list-artists').html(optionsArtists.join(''))
    $('#select-artist').removeClass('hidden')
    $('#select-album').addClass('hidden')
    $('#select-tracks').addClass('hidden')
  })
})

$('#lArtist').on('change', '#list-artists', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
  var artistID = $('#list-artists').val()
  var urlFilled = urlSearch.replace('<%ID-ARTIST%>', artistID)

  $.ajax({
    url: urlFilled
  })
  .done(responseOnArtist)
})

$('#lAlbums').on('change', '#list-albums', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
  var albumID = $('#list-albums').val()
  var urlFilled = urlSearch.replace('<%ID-ALBUM%>', albumID)

  $.ajax({
    url: urlFilled
  })
  .done(responseOnAlbum)
})

function responseOnArtist (response) {
  var listAlbums = response.items
  var optionsAlbums = listAlbums.map(function (elem) {
    return "<option value='" + elem.id + "'>" + elem.name + '</option>'
  })
  optionsAlbums.unshift('<option value="">Choose the Album</option>')
  $('#list-albums').html(optionsAlbums.join(''))
  $('#select-album').removeClass('hidden')
}

function responseOnAlbum (response) {
  var listTracks = response.items
  var optionsTracks = listTracks.map(function (elem) {
    return '<li><a href="' + elem.preview_url + '">' + elem.name + '</a></li>'
  })
  $('#lTracks').html(optionsTracks.join(''))
  $('#select-tracks').removeClass('hidden')
}

