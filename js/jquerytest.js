//JQueryを使うときは$を使う。$(何のセレクタを).どうするか();

//クリックしたら要素にfunction内のことが起こります。
$('#jquery-h2').click(function() {
    
    //要素を隠す
    //$('#jquery-p1').hide();
    
    //クリックごとに要素を隠したり表したりすることができる
//    $('#jquery-p1').toggle();
    
    $('#jquery-p1').fadeToggle();
    
//    $('#jquery-p1').append('<p>hogehoge<p>')
    
    $('#jquery-h1').text('jquery');
    
});