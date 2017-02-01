$('#sBeer').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)
  var beerSheet = '' +
    '<div class="col-sm-6 col-md-6">' +
      '<div class="thumbnail">' +
        '<img class="img-responsive" src="<%IMG%>" alt="...">' +
        '<div class="caption">' +
          '<h3><%NAME%></h3>' +
          '<p><strong>Type: </strong><%TYPE%></p>' +
        '</div>' +
      '</div>' +
    '</div>'

  var mainImg
  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    $('#list-beers').html(' ')
    var listBeers = response
    var beersElem = listBeers.map(function (elem) {
      return beerSheet.replace('<%NAME%>', elem.name).replace('<%TYPE%>', elem.type)
    })
    console.log(mainImg)
    beersElem = beersElem.join('').replace(/<%IMG%>/g, response[0].images.medium)
    $('#list-beers').html(beersElem)
  })
})

