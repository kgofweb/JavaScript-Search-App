export const deleteSearchResults = () => {
  const parentElement = document.getElementById('search-results');
  let child = parentElement.lastElementChild;
  // While child exits
  while(child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
}

export const buildSearchResults = (resultArray) => {
  resultArray.forEach(result => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement('div');
    resultContents.classList.add('resultContents');
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage)
    }

    // 
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);

    // Create search result
    const searchResults = document.getElementById('search-results')
    searchResults.append(resultItem);
  });
}

// Result items
const createResultItem = (result) => {
  // Create div
  const resultItem = document.createElement('div');
  resultItem.classList.add('resultItem');
  // Title
  const resultTitle = document.createElement('div');
  resultTitle.classList.add('resultTitle');
  // Link
  const link = document.createElement('a');
  link.href = `https://en.wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target = '_blank';
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
}

// Result Image
const createResultImage = (result) => {
  const resultImage = document.createElement('div');
  resultImage.classList.add('resultImage');
  const img = document.createElement('img');
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
}

const createResultText = (result) => {
  const resultText = document.createElement('div');
  resultText.classList.add('resultText');
  const resultDescription = document.createElement('p');
  resultDescription.classList.add('resultDescription');
  resultDescription.textContent = result.text;
  resultText.append(resultDescription);
  return resultText;
}

// Clear functions
export const clearStatsLine = () => {
  document.getElementById('stats').textContent = '';
}

// Result number
export const setStatsLine = (numberOfResults) => {
  const statLine = document.getElementById('stats');
  console.log(statLine);
  if(numberOfResults) {
    statLine.innerText = `Displaying ${numberOfResults} results`;
  } else {
    statLine.innerText = 'Sorry, no results';
  }
}