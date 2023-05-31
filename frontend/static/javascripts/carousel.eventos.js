$(".modal-galery").click(function (e) {
    e.preventDefault();
    let target = $(e.currentTarget);

    $("#GalleryModal1 .event-img").attr('src', target.data('img'));
    $("#GalleryModal1 .event-title").text(target.data('title'));
    $("#GalleryModal1 .event-description").text(target.data('description'));
    $("#GalleryModal1 .event-date").text(target.data('date'));
    $("#GalleryModal1").modal('show');
});
$("#GalleryModal1 .close-btn").click(function (e) {
    $("#GalleryModal1").modal('hide');
});