var playlist = {Beyonce: "Crazy in Love"};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {artistName: songTitle});
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}