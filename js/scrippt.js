$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-btn").click(function(){
        if($('#carousel-btn').children('span').hasClass('fa-pause')){
        $("#carousel-btn").children('span').removeClass('fa-pause');
        $("#carousel-btn").children('span').addClass('fa-play');
        $("#mycarousel").carousel('pause');
        }
        else{
            $("#carousel-btn").children('span').removeClass('fa-play');
        $("#carousel-btn").children('span').addClass('fa-pause');
        $("#mycarousel").carousel('cycle');
        }

    });

    $('.reserveBtn').click(()=>{ 
         $('#reservationModal').modal('toggle');}        
    );
    });

    $('.loginBtn').click(()=>{
        $('#loginModal').modal('toggle');
    });