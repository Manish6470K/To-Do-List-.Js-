$('#addTask').click(function(){
    var task = $.trim($('#taskName').val());
    if(task=="" || task==null){
        $('#errDisplay').css('display','block');
    }
    else{
        var msg = '<div class="resDiv"><input type="text" class="form-control bg-dark text-white" value="'+task+'"disabled>&nbsp;&nbsp;<button class="btn btn-danger" onclick="remDiv(this)">X</button></div>';
        $('#resultSpace').append(msg);
        $('#taskName').val("");
    }
});


$('#taskName').keyup(function(){
    $('#errDisplay').css('display','none');
});

function remDiv(elem){
    $(elem).parent('div').remove();
};