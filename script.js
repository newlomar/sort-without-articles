const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsWithNoArticles = bands.map((band) => {

  const splittedBandName = band.split(' ');
  if (
      splittedBandName[0].toLocaleLowerCase() === 'the' || 
      splittedBandName[0].toLocaleLowerCase() === 'a' || 
      splittedBandName[0].toLocaleLowerCase() === 'an'
  ) {
    const bandWithoutArticle = splittedBandName.slice(1);
    return bandWithoutArticle;
  }

  return band;

});

const sortedBands = bands.sort((a, b) => {

  console.log(a, b);

  if (a > b) {
    return 1;
  }

  if (a < b) {
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