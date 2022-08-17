function strtoint(str){
    let res="";
    for(let i=0;i<str.length;i++){
        if(str[i]!="p"){
            res+=str[i];
        }else{
            res=Math.floor(Number(res));
            return res;
        }
    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
 
$("#start_btn").click(function () {
    $("#first_interface").css("display", "none");
    $("#second_interface").css("display", 'block');
    let vlns = $(".villen");
    $(vlns).css("top", "0px");
    $(vlns).css("opacity", "0");
    $("#player img").css("left", "570.172px");
    let flag = true;
    var hit = false;
    const plyr_top = strtoint($("#player").css("top"));
    var score=0
    async function game() {
        let count = 0;
        while (flag == true) {
            var index = Math.floor(Math.random() * vlns.length);
            var active_vln = $(vlns[index]);
            $(active_vln).css("opacity", "1");
            while (strtoint($(active_vln).css("top")) <= plyr_top) {
                var pos_lft_plyr = strtoint($("#player img").css('left'));
                if ((index == 0 & pos_lft_plyr == 68) | (index == 1 & pos_lft_plyr == 319) | (index == 2 & pos_lft_plyr == 570) | (index == 3 & pos_lft_plyr == 821) | (index == 4 & pos_lft_plyr == 1072)) {
                    hit = true;
                    score+=1;
                    $("#score h2").empty()
                    $("#score h2").append(String(score));
                    break;
                } else {
                    hit = false;
                    if(count<5){
                        await sleep(500);  
                }else if(count<15){
                    await sleep(250);
                }else if(count<25){
                    await sleep(125);
                }
                else{
                    await sleep(90);
                }
                $(active_vln).css('top', String(strtoint($(active_vln).css("top")) + 50).concat("px"));
                }
            }
            if (hit == true) {
                $(active_vln).css('opacity', '0');
                $(active_vln).css('top', '0px');
            } else {
                flag = false;
                $("#second_interface").css("display", 'none');
                $("#first_interface").css("display", "block");

            }// inner while close
            count++;
        } //main while close
    }//async close

    game();
});//click close
$("body").keydown((e) => {
    var get_pos = $("#player_img").css("left");
    var pos = "";
    for (let i = 0; i < get_pos.length; i++) {
        if (get_pos[i] != "p") {
            pos += get_pos[i];
        } else {
            break;
        }
    }
    pos = Math.floor(Number(pos));

    $("#player_img").css("left", String(pos) + "px")
    var name = e.key;
    if (name == "ArrowRight" & pos < 1056) {
        pos += 251;

        $("#player_img").css("left", (String(pos) + 'px'));
    }
    else if (name == 'ArrowLeft' & pos > 68) {
        pos -= 251;

        $("#player_img").css("left", (String(pos) + 'px'));
    } else { }
});
if($("#second_interface").css("display")=="block"){

}