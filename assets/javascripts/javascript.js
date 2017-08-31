(function () {

  $(function () {


  function populateRestaurantTable() {
    $.get("http://localhost:1337/restaurant", function (data) {

      for (var i = 0; i < data.length; i++) {
        $('#table_body').append(`
          <tr>
            <td>${data[i].restaurantName}</td>
            <td>${data[i].cuisine}</td>
            <td>${data[i].expensiveRating}</td>
            <td>${data[i].locationNeighborhood}</td>
            <td>${data[i].closeToHome}</td>
            <td><a href="${data[i].website}" target="_blank">${data[i].restaurantName}</a></td>
            <td><button data-restaurantid="${data[i].id}" class="delete">Select to delete</button></td>
          </tr>
          `)
      }

    })

  }

  populateRestaurantTable();


      $('#table_body').on("click", ".delete", function(e){


        let searchURL = $(this).data("restaurantid");

        let result = confirm("Are you sure you want to delete this record?");

        if (result==true) {
          $('#table_body').empty();
          $.ajax({
            url: 'http://localhost:1337/restaurant/' + searchURL,
            type: 'DELETE',
            success: function(result) {
              alert("This record has been deleted");
              populateRestaurantTable();
            }
            });

        }

      })








  })

})()
