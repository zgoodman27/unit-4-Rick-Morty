async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here
    let firstCharacter = data[0]; //grab the first character's data
    let secondCharacter = data[1]; //grab the second character's data
    document.getElementById('firstImage').src = firstCharacter.image; //grab the first character's image
    document.getElementById('secondImage').src = secondCharacter.image; //grab the second character's image
}

render(20, 35);
