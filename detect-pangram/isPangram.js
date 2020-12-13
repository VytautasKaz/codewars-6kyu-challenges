let abc = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(string){
    let newString = string.toLowerCase().replace(/\d+|\W|\','/g, '').split('').filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    }).sort().join('');
    if (newString === abc) {
      return true;
    } else {
      return false;
    }
}