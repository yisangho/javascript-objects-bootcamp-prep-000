var playlist = { bbb : "song1",
                 ccc : "song2"}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { key: [value] })
}

function removeFromPlaylist(obj, key) {
  return delete obj.key
}
