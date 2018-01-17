$(document).ready(function(){
  var warningPoints = 0;
  var symptomPoints = 0;
  var copingPoints = 0;

  var calculate = function(point1, point2, point3){
    return (point1 + point2) - point3;
  };

  $("form#stress-survey").submit(function(event){
    $("#stress-survey").hide("swing");
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningPoints++;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      symptomPoints++;
    });
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      copingPoints++;
    });

    var totalPoints = calculate(warningPoints, symptomPoints, copingPoints);

    if (totalPoints <= 5){
      $("#good").show("swing");
    } else if (totalPoints > 5 && totalPoints < 10){
      $("#bad").show("swing");
    } else {
      $("#bye").show("swing");
    }

    event.preventDefault();
  });
});
