function init() {
    $(".add-list").click(onTaskClick);
}

//**************************************************************************** AL HACER CLICK AGREGAR LISTA
function onTaskClick() {
    hideShow($(".add-list"), $(".form-list"));
    $(".input-list").focus();
    
    $(".icon-list").click(onIconClick);
    $(".btn-list").click(onBtnClick);
}

//**************************************************************************** AL HACER CLICK EN LA EQUIS (X)
function onIconClick() {
    hideShow($(".form-list"), $(".add-list"));
}

//************************************************************************ AL HACER CLICK EN EL BOTON GUARDAR
function onBtnClick() {
    if($(".input-list").val() == ""){
        swal("falta");
    }else{
        hideShow($(".form-list"), $(".list"));
        $(".list-name").html($(".input-list").val());
        
        $(".add-list").clone().appendTo(".append");
        $(".append .add-list").slideDown();
        $(".append .add-list").click(onTaskClick);
    }
}


function hideShow (_hide, _show){
    _hide.slideUp("fast");
    _show.slideDown();
}