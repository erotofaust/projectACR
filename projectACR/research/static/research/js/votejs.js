var nameArray = new Array("goku", "gundam", "luffy", "pikachu", "gaogaigar");

var name_first = randomItem(nameArray);
var name_second = randomItem(nameArray);

$('#first_name_text').text(name_first);
$('#second_name_text').text(name_second);

$('#first_button').click(function clickButton(){
    alert("승자는 "+name_first)
    location.reload();
    sendPost("test.php", name_first, name_second)
});

$('#second_button').click(function clickButton(){
    alert("승자는 "+name_second)
    location.reload();
    sendPost("test.php", name_second, name_first)
});

function clickButton(name)
{
    alert("승자는 "+name)
    location.reload();
}

function randomItem(a) 
{
    return a[Math.floor(Math.random() * a.length)];
}

function sendPost(url, name_winner, name_loser){
    $.post(url, {winner: name_winner, loser: name_loser});
}
