  const refs = {
    mainList: document.querySelector('#categories'),
    secondList: document.querySelectorAll('.item')
  }
  console.log(`Number of categories:${refs.secondList.length}`)
  for(let i = 0; i < refs.secondList.length; i += 1){
    console.log(`Category: ${refs.secondList[i].querySelector('h2').textContent}`)
    console.log(`Elements: ${refs.secondList[i].querySelectorAll('ul li').length}`)
  }