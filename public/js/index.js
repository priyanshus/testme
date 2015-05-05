$("#login-form").submit(function(e) {
  var postData = $(this).serializeArray();
  var formURL = $(this).attr("action");

  $.ajax ({
    url : formURL,
    type: "POST",
    data : postData,
    success:function(data, textStatus, jqXHR) {
      if(data == "logged in") {
        window.location.href = '/dash-board';
      }else {
        alert('Wrong Username/Password');
        window.location.href = "/";
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Something went wrong');
      window.location.href = "/";
    }
  });
  e.preventDefault(); //STOP default action
});
