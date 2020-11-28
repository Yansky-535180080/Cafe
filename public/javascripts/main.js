function showMenu() {
    $('#content-1').css('display', 'none');
    $('#content-2').css('display', 'block');
    AOS.init()
};

function showHome() {
    $('#content-1').css('display', 'block');
    $('#content-2').css('display', 'none');
    AOS.init()
};

function showAbout() {
    if ($('#content-1').css('display') == 'none') {
        showHome();
    }
};

$(window).on("load", () => {
    $('[data-toggle="popover"]').popover('show');
    setTimeout(() => {$('[data-toggle="popover"]').popover('hide')}, 5000);
});