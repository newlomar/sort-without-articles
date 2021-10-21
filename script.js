const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => {

  let nameBandA;
  let nameBandB;

  if (a.split(' ')[0].toLowerCase() === 'the' || a.split(' ')[0].toLowerCase() === 'a' || a.split(' ')[0].toLowerCase() === 'an') {

    nameBandA = (a.split(' ')).slice(1).join(' ');

  }

  else {

    nameBandA = a;

  }

  if (b.split(' ')[0].toLowerCase() === 'the' || b.split(' ')[0].toLowerCase() === 'a' || b.split(' ')[0].toLowerCase() === 'an') {

    nameBandB = (b.split(' ')).slice(1).join(' ');

  }

  else {

    nameBandB = b;

  }

  if (nameBandA > nameBandB) {
    return 1;
  }

  if (nameBandA < nameBandB) {
    return -1;
  }

  return 0;

});

const ul = document.querySelector('ul');

sortedBands.forEach((band) => {

  const li = document.createElement('li');
  li.textContent = `${band}`;
  ul.appendChild(li);
});