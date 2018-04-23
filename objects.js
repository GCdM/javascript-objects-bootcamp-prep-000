var playlist = {Beyonce: "Crazy in Love"};

function updatePlaylist(obj, key, value) {
  Object.assign(obj, obj, {key: 'value'});
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}