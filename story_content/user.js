function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DEAfUtqvDB":
        Script1();
        break;
      case "6mZGpMLDeRq":
        Script2();
        break;
      case "5x5KOJE90yy":
        Script3();
        break;
      case "6cAttskIKvN":
        Script4();
        break;
      case "6n028FzHeMd":
        Script5();
        break;
      case "672YKEnCAv0":
        Script6();
        break;
      case "66HYIvkGZph":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.5;
}

