function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eJ718Kvzzo":
        Script1();
        break;
      case "6KBYmZrQY1G":
        Script2();
        break;
      case "6c6lmgN661z":
        Script3();
        break;
      case "62bWHEIOdhA":
        Script4();
        break;
      case "5YMyUjDJxT1":
        Script5();
        break;
      case "5rGQbrSiUUL":
        Script6();
        break;
      case "6NUQ3THRzUX":
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

