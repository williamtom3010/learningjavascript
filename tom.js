var  d= new Date();

switch( d.getDate() ){
    case 1 :
        document.write("today is sunday");
        break;
    case 2 :
        document.write("today is monday");
        break;
    case 3 :
        document.write("today is tuesday");
        break;
    case 4 :
        document.write("today is wednesday");
        break;
    case 5 :
        document.write("today is thurday");
        break;
    case 6 :
        document.write("today is friday");
        break;
    case 7 :
        document.write("today is saturday");
        break;
    default :
        document.write("No information Found");
        break;

}

//function Kth_greatest_in_array(arr, k) {

 // for (var i = 0; i < k; i++) {
   // var max_index = i,
   //   tmp = arr[i];
   // for (var j = i + 1; j < arr.length; j++) {
   //   if (arr[j] > arr[max_index]) {
   //     max_index = j;
  //    }
  //  }

  //  arr[i] = arr[max_index];
 //   arr[max_index] = tmp;
//  }

//  return arr[k - 1];
//}

//console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
//console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))




function test_same_elements_both_arrays(arra1, arra2) {
    var result = 0;
    for(var i = 0; i < arra1.length; i++) {
      for(var j = 0; j < arra2.length; j++){
        if(arra1[i] === arra2[j])
        {
          result++;
        }
      }
    }
    return result;
  }
  console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
  console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
  console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));
