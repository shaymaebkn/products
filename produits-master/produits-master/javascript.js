
var url = "json.json";
//   visualise les produits  du fichier json dans une table HTML en utilisant jQuery et XmlHttpRequest
$(document).ready(function(){

    $.ajax({
        url:"json.json",
        dataType: "json",
        success: function (data){
            DATA = data ;
            json_j = "";
            $.each(data , function (index, value){
                json_j += '<tr>'
                json_j += '<td>' + value.ID + '</td>'
                json_j += '<td>' + value.designation + '</td>'
                json_j += '<td>' + value.prix + '</td>'
                json_j += '<td>' + value.categorie + '</td>'
                json_j += '<td>' + value.disponibilite + '</td>'
                json_j += '<td>' + value.fournisseur + '</td>'
    
                json_j += '</tr>';
            });
            $('table').append(json_j);
        }
    })

//  une barre de recherche && filtrer les données selon la valeur saisie par l'utilisateur.
    $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
    });


});
// l'option de tri ascendant et descendant 

$(function() {
    $("#id").on('click', function() {
        var rows = $("#table tbody tr").get();
        rows.sort(sortTable);
        $.each(rows, function(index, row) {
            $("#table").children("tbody").append(row);
        });
        if (ascending) {
            ascending = false;
        } else {
            ascending = true;
        }
    });
});

var ascending = false;

function sortTable(a, b) {
    var A = parseInt($(a).children('td').eq(0).text(), 10);
    var B = parseInt($(b).children('td').eq(0).text(), 10);


    if (ascending) {
        if (A > B) return 1;
        if (A < B) return -1;
    } else {
        if (A > B) return -1;
        if (A < B) return 1;
    }
    return 0;
}

















 