// mom's spaghetti. ye have been warned
const bioText = ' I started coding ';
const speed = 50;
let first = true;

function typeWriter(text, element, cursorStart, cursorEnd, delayTime) {
  let i = 0;

  function typeWriterAux(text, element) {
    if (i < text.length) {
      document.getElementById(element).innerHTML += text.charAt(i);
      if (text.charAt(i - 1) == '=') {
        document.getElementById('openingBracket').innerHTML = '[';
        document.getElementById('closingBracket').style.visibility='visible';
        document.getElementById('openingBracket').style.color='#ffe835';
        document.getElementById('closingBracket').style.color='#ffe835';
        document.getElementById('openingBracket').style.backgroundColor='#3b514d';
        document.getElementById('closingBracket').style.backgroundColor='#3b514d';
      } else if (text.charAt(i) == '\'') {
        if (i == text.length - 1) {
          document.getElementById('quote').innerHTML = '';
        } else {
          document.getElementById('quote').innerHTML = '\'';
        }
      }
      i++;
      setTimeout(typeWriterAux, 50, text, element);
    } else if (delayTime <= 3) {
      flashCursor(cursorStart, delayTime);
      setTimeout(moveCursor, delayTime * 500, cursorStart, cursorEnd, delayTime);
    } else if (delayTime == 3.1) {
      flashCursor(cursorStart, delayTime);
      setTimeout(typeWriter, delayTime * 500, '\'Application Development\'', 'appDev', 'cursor3', 'cursor3', 3.2);
      setTimeout(clearBrackets, delayTime * 500);
    } else if (delayTime == 3.2) {
      document.getElementById('comma1').innerHTML += ',';
      setTimeout(addSpace, 80, 'comma1');
      highlightBrackets();
      flashCursor(cursorStart, delayTime);
      setTimeout(typeWriter, delayTime * 500, '\'Cryptography\'', 'crypto', 'cursor3', 'cursor3', 3.3);
      setTimeout(clearBrackets, delayTime * 500);
    } else if (delayTime == 3.3) {
      document.getElementById('comma2').innerHTML += ',';
      setTimeout(addSpace, 80, 'comma2');
      highlightBrackets();
      setTimeout(typeWriter, delayTime * 500, '\'Augmented Reality\'', 'augment', 'cursor3', 'cursor3', 6);
      setTimeout(clearBrackets, delayTime * 500);
      flashCursor('cursor3', 20);
    } else if (delayTime > 5) {
      highlightBrackets();
    }
  }
  typeWriterAux(text, element);
}

function addSpace(commaNum) {
  document.getElementById(commaNum).innerHTML += ' ';
}

function highlightBrackets() {
  document.getElementById('openingBracket').style.color='#ffe835';
  document.getElementById('closingBracket').style.color='#ffe835';
  document.getElementById('openingBracket').style.backgroundColor='#3b514d';
  document.getElementById('closingBracket').style.backgroundColor='#3b514d';
}

function clearBrackets() {
  document.getElementById('openingBracket').style.color='#a9b7c6';
  document.getElementById('closingBracket').style.color='#a9b7c6';
  document.getElementById('openingBracket').style.backgroundColor='#2b2b2b';
  document.getElementById('closingBracket').style.backgroundColor='#2b2b2b';
}

function moveCursor(cursorStart, cursorEnd) {
  document.getElementById(cursorStart).style.visibility='hidden';
  document.getElementById(cursorEnd).style.visibility='visible';
  if (cursorStart == 'cursor1') {
    typeWriter('', 'bottomQuotes', 'cursor2', 'cursor3', 2);
  } else if (cursorStart == 'cursor2') {
    typeWriter('interests = ', 'interestsStart', 'cursor3', 'cursor3', 3.1);
  }
}

function flashCursor(name, duration) {
  let j = 0;
  function flashAux(name, duration) {
    if (j < duration) {
      if (j % 2 == 0) {
        document.getElementById(name).style.visibility='hidden';
      } else {
        document.getElementById(name).style.visibility='visible';
      }
      j++;
      setTimeout(flashAux, 500, name, duration);
    } else if (first) {
      typeWriter(bioText, 'bio', 'cursor1', 'cursor2', 2);
      first = false;
    } else if (duration == 20) {
      document.getElementById(name).style.visibility='hidden';
      clearBrackets();
    }
  }
  flashAux(name, duration);
}

flashCursor('cursor1', 8);
