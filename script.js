
const searchInput = document.querySelector('#search-bar')
const searchButton = document.querySelector('.search')
// eventlistener to get value from search bar

searchInput.addEventListener('input', (e) => {  //for some reason browser does not recognize addeventlistener
    const value = e.target.value
    console.log(value)

    // on click add href to button
    searchButton.addEventListener('click', () => {
        searchButton.href = `https://www.google.com/search?q=${value}`
    })
})

// shopping cart *tried to add items to another page,
const cart = document.querySelector('#cart-items')
const item1 = document.querySelector('.item1')

//NEED TO MAKE THIS GENERAL TO ALL ITEMS
//FIGURE OUT HOW TO SEND TO ANOTHER PAGE OF THE SITE
$('.item1-button').on('click', () => {
    let item = item1.cloneNode()
    $('#cart').append(item)
})


//.get from stockx API
//for loop through data to grab as many items I need to populate the page
    //create img element with picture of item from data as src
    //append created element to the items class element

// * placeholder to show understanding until I find a shoe/clothing api *

$.get(`https://poetrydb.org/title/Ozymandias/lines.json`, (data) => { 
    for(let e of data[0].lines){
        let div = $(`<div>${e}</div>`)

        $('#cart').append(div)
    }
    console.log(data[0].lines)
})

// for loop to grab items from stockx and populate my page with items
