//関数＝janken (引数)
function janken(myHand) {
    
    //じゃんけんの手を格納する配列を用意する。選択した自分の手をコンピュータに渡すということをする。
    var handArray = ['グー', 'チョキ', 'パー'];
    console.log(handArray[myHand]);
    
    //コンピュータの手をランダムに決める
    //（）の中にはランダムに決められた値が入る。
    //Math.randomは0以上1未満の疑似乱数を返す。*100の理由は0から1だと小さすぎるから。ここでは100倍しているので0から100の数字が著される。
    var random = Math.random()*100;
    console.log(random);
    
    //渡した数以下の最大の整数を記録。小数点を切り捨ててくれる。
    var randomNum = Math.floor(random);
    console.log(randomNum);
    
    //コンピュータのランダムな99までの数をグー、チョキ、パーの0,1,2,で表したい。randomNumを3で割ると必ず余りは0か1か2になる。余りを使ってコンピュータの手を決める。
    var computerHand = randomNum % 3;
    console.log(computerHand);
    
    var victory = (myHand - computerHand + 3) % 3;
    
    //勝敗のメッセージの配列
    var messageArray = ['あいこです。','あなたの負けです。', 'あなたの勝ちです。'];
    
//    alert("あなたの手は" + handArray[myHand] + "、コンピュータは" + handArray[computerHand] + "なので"　+ messageArray[victory]);
    
    // JQueryを使ってHTMLに追記する
    //pを使って行を改行
//    $('#janken-result').append("<p>あなたの手は" + handArray[myHand] + "、コンピュータは" + handArray[computerHand] + "なので"　+ messageArray[victory]+ "</P>");
    
    //JQueryを使ってHTMLの文字列を置き換える
    $('#janken-result-p').text("あなたの手は" + handArray[myHand] + "、コンピュータは" + handArray[computerHand] + "なので"　+ messageArray[victory]);
    
    
    //if文を使って自分とコンピュータの手を比較し、勝ち負けを決める。
//   if(myHand == 0) {
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであいこです。");
//        } else if(computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの勝ちです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの負けです。");
//        }
//        
//    }else if (myHand == 1){
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの負けです。");
//        } else if(computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであいこです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの勝ちです。");
//        }
//        
//    }else if (myHand == 2){
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの勝ちです。");
//        } else if(computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであなたの負けです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なのであいこです。");
//        }
//        
//    }



}