$(document).ready(function () {
  var myID = $(this).attr("Id");
  // alert(myID);

  // myID.click(clickOnClass(myID));

  $(".corporate").click(function () {
    $.getJSON("data.json", function (data) {
      var items = [];
      $.each(data, function (i, key, val1) {
        $.each(key["corporate"], function (index) {
          items.push(`<li> ${key["corporate"][index]} </li>`);
        });
      });

      $(".modal-title").empty();
      $(".modal-title").append("Corporate");

      $(".modal-body").empty();
      $("<ul/>", {
        // class: "my-new-list",
        html: items,
      }).appendTo(".modal-body");
      // $(".modal-body").html(myHeading + ulList);
      $(".modal").modal("show");
    });
  });

  $("#NGO").click(function () {
    $.getJSON("data.json", function (data) {
      var items = [];
      $.each(data, function (i, key, val1) {
        $.each(key["NGO"], function (index) {
          items.push(`<li> ${key["NGO"][index]} </li>`);
        });
      });

      $(".modal-title").empty();
      $(".modal-title").append("NGO and Social bodies");
      $(".modal-body").empty();
      $("<ul/>", {
        // class: "my-new-list",
        html: items,
      }).appendTo(".modal-body");
      // $(".modal-body").html(myHeading + ulList);
      $(".modal").modal("show");
    });
  });

  $("#GovtDept").click(function () {
    $.getJSON("data.json", function (data) {
      var items = [];
      $.each(data, function (i, key, val1) {
        $.each(key["GovtDept"], function (index) {
          items.push(`<li> ${key["GovtDept"][index]} </li>`);
        });
      });

      $(".modal-title").empty();
      $(".modal-title").append(" Govt.Departments");

      $(".modal-body").empty();
      $("<ul/>", {
        // class: "my-new-list",
        html: items,
      }).appendTo(".modal-body");
      // $(".modal-body").html(myHeading + ulList);
      $(".modal").modal("show");
    });
  });

  $("#SHGs").click(function () {
    $.getJSON("data.json", function (data) {
      var items = [];
      $.each(data, function (i, key, val1) {
        $.each(key["SHG"], function (index) {
          items.push(`<li> ${key["SHG"][index]} </li>`);
        });
      });

      $(".modal-title").empty();
      $(".modal-title").append("SHGs(Self Help Groups)");

      $(".modal-body").empty();
      $("<ul/>", {
        // class: "my-new-list",
        html: items,
      }).appendTo(".modal-body");
      // $(".modal-body").html(myHeading + ulList);
      $(".modal").modal("show");
    });
  });
});
