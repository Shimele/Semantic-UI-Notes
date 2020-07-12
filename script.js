$('.dropdown').dropdown();
$('.rating').rating();
$('.shape').shape();
$('.primary').on('click', function(){
    $('.shape').shape('flip up');
})
$('.secondary.button').on('click', function(){
    $('.cube').shape('flip left');
})
$('.tertiary.button').on('click', function(){
    $('.text').shape('flip left');
})