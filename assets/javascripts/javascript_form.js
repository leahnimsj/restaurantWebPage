(function () {

  $(function () {


    // $.post( URL, $( "#updateRestaurant" ).serialize(), function(data){
	  //    //do something with the result
    //
    // });

    $('#addRecordButton').click(function () {

      // let restaurantName = $('#inputRestaurant').val();
      // let cuisine = $('#inputCuisine').val();
      // let price = $('#inputPrice').val();
      // let location = $('#inputLocation').val();
      // let proximity = $('#inputProximity').val();
      // let link = $('#inputLink').val();
      //
      // console.log(restaurantName);
      // console.log(cuisine);
      // console.log(price);
      // console.log(location);
      // console.log(proximity);
      // console.log(link);

      $.post( "http://localhost:1337/restaurant", $( "#updateRestaurant" ).serialize(), function(data){
  	     alert("Restaurant has been added to Leah's Guide")

      });

      // console.log($( "#updateRestaurant" ).serialize())




    })













  })

})()
