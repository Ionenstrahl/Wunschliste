for (var i = 0; i < data.length; i++) {
  const wish = data[i];
  if (!wish["Patron"]) {
    addWishHtml(wish)
  } else {
    addGratitude(wish)
  }
}

function addWishHtml(wish) {
  var html = document.createElement('div');
  html.className = 'col-lg-4 feature-box';
  html.innerHTML = createWishInnerHtml(wish)

  document.getElementById("wishes").appendChild(html);
}

function createWishInnerHtml(wish) {
  var title = wish.Name;
  var description = wish.Description;
  var image = wish.Image;
  var links = wish.Links;

  return '<img src="' + image + '" class="present-img">' +
    '<h3 class="feature-title">' + title + '</h3>' +
    '<p>' + description + '</p>' +
    createLinksHtml(links)
}

function createLinksHtml(links) {
  var linksHtml = ""
  for (const link of links) {
    linksHtml += '<a href="' + link + '" class="btn btn-secondary">Buy</a>'
  }
  return linksHtml
}

function addGratitude(wish) {
  var html = document.createElement('div');
  html.className = 'col-3 col-lg-1';
  html.innerHTML = createGratitudeInnerHtml(wish)
  
  document.getElementById("laudation").appendChild(html);
}

function createGratitudeInnerHtml(wish) {
  var title = wish.Name;
  var description = wish.Description;
  var image = wish.Image;
  var patron = wish.Patron;

  return '<img src="' + image + '" class="gifted-img" type="button" data-toggle="modal" data-target="#' + image + '">' +
    '<div class="modal fade" id="' + image + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
    '<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title">' + title + '</h5>' +
    '<button type="button" class="btn-close" data-dismiss="modal">' +
    '</div>' +
    '<div class="modal-body">' +
    '<img src="' + image + '" class="present-img">' +
    '<p>' + description + '</p>' +
    '<p>Danke ' + patron + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
}
