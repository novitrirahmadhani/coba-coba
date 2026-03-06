function ExecuteScript(strId)
{
  switch (strId)
  {
<<<<<<< HEAD
      case "6dyWBJALO6L":
        Script1();
        break;
=======
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
>>>>>>> dc63a6337fd85d09208d3d0bd16e63e6259ec739
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

