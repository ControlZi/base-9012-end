var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var index = 0;
  var arr = [];
  var len = s.length;
  while(1){
      if(max >= len-index){
        console.log(max);
        return;
      }
      var i = index;
      while(true){
          var char = s.charAt(i)
          if(char && !arr.includes(char)){
              arr.push(char);
              i++;
              continue;
          } else {
              max = max > arr.length ? max : arr.length;
              arr = [];
              index++;
              break;
          }
      }
  }
};
lengthOfLongestSubstring(" ")