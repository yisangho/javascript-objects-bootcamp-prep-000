var playlist = { bbb : "song1"}

function updatePlaylist(obj, key, value) {
  return Object.assign(this, obj, { key: value })
}

function removeFromPlaylist(obj, key) {
  return delete obj.key
}
