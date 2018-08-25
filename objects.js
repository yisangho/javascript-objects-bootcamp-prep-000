var playlist = { aaa : "song1"}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(object, key) {
  delete object.key
}
