
createLinksHtml = links => {
  var linksHtml = ""
  for (const link of links) {
    linksHtml += '<a href="' + link + '" class="btn btn-secondary">Buy</a>'
  }
  return linksHtml
}

addWishHtml = wish => {
  var title = data[i].Name;
  var description = data[i].Description;
  var image = data[i].Image;
  var links = data[i].Links;

  var wish = document.createElement('div');

  wish.className = 'col-lg-4 feature-box';
  wish.innerHTML =
    '<img src="' + image + '" class="present-img">' +
    '<h3 class="feature-title">' + title + '</h3>' +
    '<p>' + description + '</p>' +
    createLinksHtml(links)

  document.getElementById("wishes").appendChild(wish);
}

addGratitude = wish => {
  var title = data[i].Name;
  var description = data[i].Description;
  var image = data[i].Image;
  var patron = data[i].Patron;

  var wish = document.createElement('div');
  wish.className = 'col-3 col-lg-1';
  wish.innerHTML = '<img src="' + image + '" class="gifted-img" type="button" data-toggle="modal" data-target="#' + image + '">' +
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
  document.getElementById("laudation").appendChild(wish);
}

for (var i = 0; i < data.length; i++) {
  const wish = data[i];
  if (!!wish["Patron"]) {
    addGratitude(wish)
  } else {
    addWishHtml(wish)
  }

}
