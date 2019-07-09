var reviewDeleteBtn = $('#reviewDeleteBtn');

reviewDeleteBtn.on('click', function(){
    var campID = reviewDeleteBtn.parent().parent().parent().parent().parent().parent().parent().parent().eq(0).children().eq(0).attr('id'),
        reviewID = reviewDeleteBtn.parent().parent().parent().attr('id');

    $.ajax({
        type: 'POST',
        url: '/campgrounds/'+campID+'/reviews/'+reviewID+'?_method=DELETE'
    })
    .done(function(){
        let noOfRatings = parseInt($('#noOfRatings').text());
        reviewDeleteBtn.parent().parent().parent().fadeOut(function(){
            this.remove();
        });
        $('#noOfRatings').text(noOfRatings-1);
    })
    .fail(function(err){
        alert("Comment Delete failed " + err)
    })
})