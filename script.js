async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here
    let firstCharacter = data[0];
    let secondCharacter = data[1];
    document.getElementById('firstImage').src = firstCharacter.image;
    document.getElementById('secondImage').src = secondCharacter.image;
}

render(20, 35);
