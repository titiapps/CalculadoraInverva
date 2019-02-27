$(document).ready(function() {
  $("#boton_modal").click(function() {
    console.log("modal picado");
  });
  $("#enviar").click(function() {
    console.log("picado 2");
    console.log($("#nombre").val());
    $("#exampleModal").modal("toggle");
  });
});
