"use strict";
var reqData;
var imgData =
  "data:image/png;base64,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";

var porcentaje_g = 0;
$(document).ready(function() {
  calculartodo();
  $("#enviar_value").click(() => {
    let persona = $("#nombre").val();
    let correo = $("#correo").val();
    let telefono = $("#telefono").val();

    console.log(persona + "-" + "correo:" + correo);
    if (
      persona !== "" ||
      (persona !== null && correo !== "" && correo) ||
      correo !== null
    ) {
      $("#exampleModal").modal("toggle");

      setTimeout(() => {
        var doc = new jsPDF();

        doc.setFontSize(23);
        doc.addImage(imgData, "PNG", 80, 10, 50, 30);
        doc.text(30, 45, "ESTE ES EL RESULTADO DE TU CALCULO");

        //input y salidas
        //EDAD ACTUAL
        doc.setFontSize(12);
        doc.text(27, 68, "Edad Actual");
        doc.rect(20, 71, 40, 10);
        doc.setFontSize(15);
        doc.text(38, 78, $("#edad_actual").val());
        //

        //Patrimonio a la Fecha
        doc.setFontSize(12);
        doc.text(62, 68, "Ingreso Promedio Actual");
        doc.rect(65, 71, 40, 10);
        doc.setFontSize(15);
        doc.text(78, 78, $("#ingreso_mensual").val());
        //

        //INGRESO PROMEDIO ACTUAL
        doc.setFontSize(12);
        doc.text(110, 68, "Patrimonio a la Fecha");
        doc.rect(111, 71, 40, 10);
        doc.setFontSize(15);
        doc.text(123, 78, $("#patrimonio_fecha").val());
        //

        //Edad a Proyectar
        doc.setFontSize(12);
        doc.text(159, 68, "Edad a Proyectar");
        doc.rect(156, 71, 40, 10);
        doc.setFontSize(15);
        doc.text(171, 78, $("#edad_proyectar").val());
        //

        //SCORE InverVÁ
        doc.setFillColor(95, 158, 160);
        doc.rect(40, 100, 60, 40, "F");
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        let score = $("#score_invea").text();
        let string_score_inverva = `Tu Score InverVÁ es : \n            ${score} `;
        doc.text(45, 120, string_score_inverva);

        //TEXTO DE QUE TAL VA
        let valorevaluacion = "";
        if (porcentaje_g <= 57) {
          doc.setFillColor(128, 128, 128);
          valorevaluacion = "Te urge empezar YA!";
        }
        if (porcentaje_g > 57 && porcentaje_g <= 70) {
          doc.setFillColor(233, 150, 122);
          valorevaluacion = "Necesitas asesoria \n  de un experto!";
        }
        if (porcentaje_g > 70 && porcentaje_g <= 82) {
          doc.setFillColor(255, 215, 0);
          valorevaluacion = "Bien! Estas cerca de \n llegar a la meta";
        }
        if (porcentaje_g > 82) {
          doc.setFillColor(144, 238, 144);
          valorevaluacion = "Felicidades!  \n Vas en buen camino";
        }

        doc.rect(120, 100, 60, 40, "F");
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        score = $("#score_invea").text();
        string_score_inverva = valorevaluacion;
        doc.text(125, 120, string_score_inverva);

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0);
        doc.text(
          20,
          160,
          `Creeemos que necesitas aproximadamente ${$(
            "#resultado_mensual"
          ).text()} pesos mensualmente para el retiro
`
        );

        doc.text(
          20,
          170,
          `Creeemos que vas a tener aproximadamente ${$(
            "#ingreso_mensual_f"
          ).text()}  pesos al mes
`
        );

        //EDAD RETIRO
        doc.setFontSize(12);
        doc.text(27, 190, "Edad Retiro");
        doc.rect(20, 192, 40, 10);
        doc.setFontSize(15);
        doc.text(38, 198, $("#edad_retiro").val());
        //

        //AHORRO MENSUAL
        doc.setFontSize(12);
        doc.text(70, 190, "Ahorro Mensual");
        doc.rect(65, 192, 40, 10);
        doc.setFontSize(15);
        doc.text(78, 198, $("#ahorro_mensual").val());
        //

        //ESTANDAR DE VIDA EN EL RETIRO
        doc.setFontSize(12);
        doc.text(104, 190, "Estandar de vida en el retiro");
        doc.rect(111, 192, 40, 10);
        doc.setFontSize(15);
        doc.text(115, 198, $("#estandar_vida").val());
        //

        //PERFIL DE INVERSIONISTA
        doc.setFontSize(12);
        doc.text(159, 190, "Perfil de Inversionista");
        doc.rect(156, 192, 40, 10);
        doc.setFontSize(15);
        doc.text(160, 198, $("#perfil_inversionista").val());
        //

        doc.setFontSize(15);
        doc.text(27, 230, "Asesor InverVÁ:");
        doc.text(27, 240, "55-6389-6098   jose.moreno@inverva.mx ");
        doc.text(27, 250, "55-6383-0557   servando.escamilla@inverva.mx ");

        doc.setFontSize(13);
        doc.text(
          27,
          270,
          "Goethe 16 piso 5, Col Anzures, Del. Miguel Hidalgo, CDMX  CP 11590 \nChietla 718, Colonia La Paz, Puebla, Pue. CP 72160"
        );

        doc.save("Inverva.pdf");

        let binary = doc.output();

        let reqData = binary ? btoa(binary) : "";

        var params = {
          para: correo,
          persona: persona,
          telefono: telefono,
          pdf: reqData
        };
        /*         console.log("reqData" + reqData); */
        $.ajax({
          data: params,
          url: "http://inverva.mx/calculadora/envio_prueba.php",
          /*  url:
            "http://localhost/Trabajo/PruebadeEnvioCorreo/calculadora/envio_prueba.php", */
          type: "post",
          beforeSend: function() {
            console.log("DATA ENVIADA");
          },
          success: function(response) {
            console.log(response);
            console.log("REGRESO CHIDO TODO EL ASUNTO");
          }
        });
      }, 500);
    } else {
      console.log("se esta recargando la pagina");
    }
  });

  $(
    "#edad_actual,#ingreso_mensual,#patrimonio_fecha,#edad_proyectar,#edad_retiro,#ahorro_mensual,#estandar_vida,#perfil_inversionista"
  ).change(function(e) {
    e.preventDefault();
    calculartodo();
  });
});

/* =========================FUNCIONES================================================= */
/* ENGLOBA TODO PARA QUE EN CASO DE CAMBIOS SOLO SE MANDE A LLAMAR */
function calculartodo() {
  //OBTENEMOS LA DATA
  let inflacion = 0.04;
  let crecimiento_real_ingmen = 0.01;
  let ingreso_mensual_promedio = $("#ingreso_mensual").val();
  let edad_actual = $("#edad_actual").val();
  let edad_retiro = $("#edad_retiro").val();
  let edad_proyectar = $("#edad_proyectar").val();
  let ahorro_mensual = $("#ahorro_mensual").val();
  let patrimonio_fecha = $("#patrimonio_fecha").val();

  /* ===================TERMINA OBTENER DATA================== */

  /* CONDICION PARA EL ESTANDAR DE VIDA */
  let estandarvida = estandar_vida($("#estandar_vida").val());

  /* CONDICION PARA EL PERFIL DE INVERSIONISTA */

  let perfilInversionista = perfil_inversionista(
    $("#perfil_inversionista").val()
  );
  perfilInversionista =
    Math.round(perfilInversionista * 1000000000) / 1000000000;

  /* SE CALCULA CUANTO DINERO SE NECESITA AL MES EN TU RETIRO */
  let dinero_men_p_retiro = calculo_dinero_mensual_retiro(
    ingreso_mensual_promedio,
    inflacion,
    crecimiento_real_ingmen,
    edad_retiro,
    edad_actual,
    estandarvida
  );

  $("#resultado_mensual").text(Math.round(dinero_men_p_retiro));
  /* CUANTO PATRIMONIO VAS A TENER */
  let cuanto_pat_vas_tener = cal_cuanto_patri_tendras(
    perfilInversionista,
    (edad_retiro - edad_actual) * 12,
    ahorro_mensual,
    patrimonio_fecha
  );
  cuanto_pat_vas_tener = Math.round(cuanto_pat_vas_tener);
  /* CUANTO INGRESO MENSUAL TENDRAS */
  let perfilInversionistatemp = perfil_inversionista("conservador");
  perfilInversionistatemp =
    Math.round(perfilInversionistatemp * 1000000000) / 1000000000;
  let ingreso_mensual = function_ingreso_mensual(
    cuanto_pat_vas_tener,
    perfilInversionistatemp,
    (edad_proyectar - edad_retiro) * 12
  );

  $("#ingreso_mensual_f").text(Math.round(ingreso_mensual));
  /* SCORE */
  let score_invea = Math.round((ingreso_mensual / dinero_men_p_retiro) * 100);
  $("#score_invea").text(score_invea + "%");
  porcentaje_g = score_invea;
  resultado_texto_color(score_invea);
}

function estandar_vida(opcion) {
  if (opcion === "gastar_igual") {
    return 0.75;
  }
  if (opcion === "gastar_menos") {
    return 0.5;
  }
  if (opcion === "gastar_mas") {
    return 1;
  }
}
function perfil_inversionista(opcion) {
  if (opcion === "conservador") {
    return Math.pow(1.06, 1 / 12) - 1;
  }
  if (opcion === "moderado") {
    return Math.pow(1.075, 1 / 12) - 1;
  }
  if (opcion === "dinamico") {
    return Math.pow(1.09, 1 / 12) - 1;
  }
  if (opcion === "agresivo") {
    return Math.pow(1.11, 1 / 12) - 1;
  }
}

//FUNCION PARA CALCULAR CUANTO SE NECESITA AL MES PARA EL RETIRO
function calculo_dinero_mensual_retiro(
  ingreso_mensual_promedio,
  inflacion,
  crecimiento_real_ingmen,
  edad_retiro,
  edad_actual,
  estandarvida
) {
  let dinero_mensual_retiro =
    ingreso_mensual_promedio *
    Math.pow(
      1 + (inflacion + crecimiento_real_ingmen),
      edad_retiro - edad_actual
    );

  dinero_mensual_retiro = dinero_mensual_retiro * estandarvida;
  return dinero_mensual_retiro;
}

function cal_cuanto_patri_tendras(
  perfilInversionista,
  periodo,
  pago,
  valor_actual
) {
  let vfp1 = 0;

  for (let i = 0; i < periodo; i++) {
    let temp = pago * Math.pow(1 + perfilInversionista, i);
    vfp1 = vfp1 + temp;
  }

  let vfp2 = valor_actual * Math.pow(1 + perfilInversionista, periodo);
  let VF = vfp1 + vfp2;
  return VF;
}
/* FUNCION PARA CALCULAR EL INGRESO MENSUAL QUE DEBEMOS DE TENER */
function function_ingreso_mensual(cuanto_pat_vas_tener, interes, tiempo) {
  let ingreso_mensual =
    (cuanto_pat_vas_tener * interes) / (1 - Math.pow(1 + interes, -tiempo));

  return ingreso_mensual;
}
/* aqui es o te felicita o te va mal */
function resultado_texto_color(porcentaje) {
  if (porcentaje <= 57) {
    $("#resultado_texto_invea").text("Te urge empezar YA!");
    $(".resultado3 .tarjeta").css("background-color", "gray");
  }
  if (porcentaje > 57 && porcentaje <= 70) {
    $("#resultado_texto_invea").text("Necesitas asesoria de un experto!");
    $(".resultado3 .tarjeta").css("background-color", "	#E9967A");
  }
  if (porcentaje > 70 && porcentaje <= 82) {
    $("#resultado_texto_invea").text("Bien! Estas cerca de llegar a la meta");
    $(".resultado3 .tarjeta").css("background-color", "	#FFD700");
  }
  if (porcentaje > 82) {
    $("#resultado_texto_invea").text("Felicidades! Vas en buen camino");
    $(".resultado3 .tarjeta").css("background-color", "	#90EE90");
  }
}
