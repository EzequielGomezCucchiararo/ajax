$('#sBeer').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)
  var beerSheet = '' +
    '<div class="col-sm-6 col-md-4">' +
      '<div class="thumbnail">' +
        '<img class="img-responsive" src="<%IMG%>" alt="...">' +
        '<div class="caption">' +
          '<h3><%NAME%></h3>' +
          '<p><strong>Type: </strong><%TYPE%></p>' +
          '<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>' +
        '</div>' +
      '</div>' +
    '</div>'

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    var listBeers = response
    var beersLiElem = listBeers.map(function (elem) {
      return "<li id='" + elem.id + "'>" + elem.name + '</li>'
    })
    console.log(beersLiElem.join(''))
    $('#list-beers').html(beersLiElem.join(''))
  })
})

$('#sBeer').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)
  var beerSheet = '' +
    '<div class="col-sm-6 col-md-6">' +
      '<div class="thumbnail">' +
        '<div class="caption">' +
          '<h3><%NAME%></h3>' +
          '<p><strong>Type: </strong><%TYPE%></p>' +
        '</div>' +
      '</div>' +
    '</div>'

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
    $('#list-beers').html(beersElem.join(''))
    $('.caption').css('backgroundColor', '#e3ffc7')
  })
})

