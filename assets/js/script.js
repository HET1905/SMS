$(document).ready(function () {
  $("div#projectDisplay .card").click(function () {
    var myID = $(this).attr("Id");
    alert(myID);

    function clickOnClass(className) {
      $(".corporate").click(function () {
        $.getJSON("data.json", function (data) {
          var items = [];
          $.each(data, function (key, val1) {
            $.each(val1, function (index) {
              console.log(val1[index]);
              items.push(`<li> ${val1[index]} </li>`);
            });
          });

          $(".modal-body").empty();
          $("<ul/>", {
            // class: "my-new-list",
            html: items,
          }).appendTo(".modal-body");
          // $(".modal-body").html(myHeading + ulList);
          $(".modal").modal("show");
        });
      });
    }
  });
});
