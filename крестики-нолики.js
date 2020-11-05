var testing = document.getElementById('testing');
var move = 0;
testing.addEventListener('click', function(event){
    var currentItem = document.getElementById(event.target.id);
    if(currentItem.innerHTML === 'X' || currentItem.innerHTML === '0'){
        event.preventDefault();
    } else {
       move % 2 === 0 ? 
        event.target.innerHTML = 'X' : event.target.innerHTML = '0';
     move++;
     check();
    }
});
function check (){
  var getBlockGame = document.getElementsByClassName('one');
  var arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(var i = 0; i < arr.length; i++){
      if(
          getBlockGame[arr[i][0]].innerHTML === 'X' &&
          getBlockGame[arr[i][1]].innerHTML === 'X' &&
          getBlockGame[arr[i][2]].innerHTML === 'X' ){
            alert('X - WIN');
            location.reload();
      }else if (
          getBlockGame[arr[i][0]].innerHTML === '0' &&
          getBlockGame[arr[i][1]].innerHTML === '0' &&
          getBlockGame[arr[i][2]].innerHTML === '0' ){
            alert('0 - WIN');
            location.reload();
          }
  }
}