question_turn=player_1;
answer_turn=palyer_2;
function check()
{
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == "actual_answer"){
        if(answer_turn =="player1")
        {
            update_player1_score= player1_score + 1;
            document.getElementById("player1_score").innnerHTML = update_player1_score;
        }
        else{
            {
                update_player2_score= player2_score2+ 1;
                document.getElementById("player2_score").innnerHTML = update_player2_score;
            }
        }
        if(question_turn =="player1"){
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question turn -"+player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question turn -"+player1_name;
        }
    }
}