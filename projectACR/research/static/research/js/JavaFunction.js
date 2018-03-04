var nameArray = new Array("goku", "gundam", "luffy", "pikachu", "gaogaigar");

var name_first = randomItem(nameArray);
var name_second = randomItem(nameArray);

$('#first_name_text').text(name_first);
$('#second_name_text').text(name_second);

$('#first_button').click(function clickButton(){
    alert("승자는 "+name_first)
    location.reload();
});

$('#second_button').click(function clickButton(){
    alert("승자는 "+name_second)
    location.reload();
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

function sendPost()
{
    $(document).ready(function(){
        $("button").click(function(){
            $.post("demo_test_post.asp",
            {
              name: "Donald Duck",
              city: "Duckburg"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
        });
    });
}


