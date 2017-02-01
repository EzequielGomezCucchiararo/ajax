$('#click-me').on('click', function () {
  var username = $('#username').val()
  $.ajax({
    url: 'https://api.github.com/users/' + username + '/repos'
  })
  .done(function (myData) {
    var aListReposHtml = myData.map(function (elem) {
      return '<li>' + elem.full_name + '</li>'
    })
    $('#listRepos').html(aListReposHtml)
  })
})
