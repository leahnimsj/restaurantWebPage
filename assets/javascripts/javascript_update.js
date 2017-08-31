(function () {

  $(function () {



    function populateRestaurantTable() {
      $("#updateRestaurant").hide();
      $.get("http://localhost:1337/restaurant", function (data) {

        for (var i = 0; i < data.length; i++) {
          $('#table_body').append(`
            <tr>
              <td>${data[i].restaurantName}</td>
              <td><button data-restaurantid="${data[i].id}" class="update">Select to update</button></td>
            </tr>
            `)
        }

      })

    }

    let searchURL;

    populateRestaurantTable();

    $('#table_body').on("click", ".update", function(e){


      searchURL = $(this).data("restaurantid");


      $('#table_body').empty();
      $("#updateTable").hide();

      $.get('http://localhost:1337/restaurant/' + searchURL, function (data) {


        $.each(data, function(name, val){
          var $el = $('[name="'+name+'"]'),
          type = $el.attr('type');

          switch(type){
            default:
              $el.val(val);
          }

        });

        $("#updateRestaurant").show();

      })

    })

    $('#addRecordButton').click(function(e){
      e.preventDefault();

      let updateString = $("#updateRestaurant").serialize();

      let result = confirm("Are you sure you want to update this record?");

      if (result == true) {

        $.ajax({
          url: 'http://localhost:1337/restaurant/' + searchURL,
          type: 'PUT',
          data: updateString,
          success: function(result) {
            alert("This record has been update");
            $("#updateTable").show();
            populateRestaurantTable();
          }
        })

      }


    })







  })

})()
