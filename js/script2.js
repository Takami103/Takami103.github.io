function meal(like) {
    
    var message = "";
    
    if(like == 1){
        message = "韓国海苔巻きのキンパを是非食べてみてください✨ 日本のとはまた少し違って、きっとはまるはずです♪";
    } else if(like == 2){
        message = "チーズタッカルビはいかがでしょうか！本場で食べるとよりおいしいはずです！";
    } else if(like == 3){
        message = "キムチチゲがおすすめです！チヂミと一緒に食べるととても相性がいいですよ♪";
    } else if(like == 4){
        message = "スイーツが食べたいと思っているあなたに、フルーツパフェはいかがでしょうか！最近話題のカフェがたくさんあります♪";
    }
    
    alert(message);
}