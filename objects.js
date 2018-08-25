Object.assign({}, playlist, { aaa : ['song1']})

function updatePlaylist(object, key, value) {
  Object.assign({}, object, [key, value])
}

function removeFromPlaylist(object, key) {
  delete object.key
}
