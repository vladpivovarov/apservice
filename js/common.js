$(document).ready(function() {
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

	var mail = function() {
      $(".vladozin").submit(function(e) { //Change
      	e.preventDefault();
        var th = $(this);
        var form = e.target;
        var name = form.querySelector('.input_name').value;
        var status = form.querySelector('.status');

        $.ajax({
          type: "POST",
          url: "./mail.php", //Change
          data: th.serialize()
        }).done(function(result) {
          status.innerHTML = result + " " + name + "! Скоро мы с вами свяжемся";
          setTimeout(function() {
            status.innerHTML = "";
          }, 5000);

          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    };

    mail();

	//Выпадающее меню
    $(".nav-btn").click(function () {
        $(this).next().slideToggle();
    })

});