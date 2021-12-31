

if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready);
}
else
{
    ready();
}


//small note on the script add the async to the <script></script> so it will download and load
//the javascript while letting the webpage still load while its doing so
//however because of this we have to do the document ready state thing as we dont want
//some of this javascript to run while the webpage isnt loaded yet
//since its just adding the events to then run the buttons, we make the init function ready
//and run it on an event when the webpage is finished loading
function ready() 
{

    // document.getElementsByClassName('classname'); 
    //returns array of all the elements it finds
    
    var button = document.getElementsByClassName('Test');
    


    //element/object .value will return the value if it is an element with a value applied
    //for example the input boxes in html have it but random elements like p dont seem to 
    //have one and will require innerText or innerHtml instead to get the data
    //but this allows us to then go buttonElement.value to get the quantity of a input field or someshit


    //js/web has trouble doing floating point math
    //so when dealing with numbers to display do Math.round(number * 100) / 100


    for (let i = 0; i < button.length; i++)
    {
        var temp = button[i];
        
        //click is a set event that will occur and we can then give it a function to run
        //event param is like the unity input system always needing that callback reference
        temp.addEventListener('click', function(event){
            //what was the element or whatever that was pressed
            var button = event.target;
            
            //so in the example the parent of the parent was the div that held that item row
            //so we can just remove it with remove and it is then gone from the html
            //basically javascript will edit the raw html to make the webpage responsive
            button.parentElement.parentElement.remove();
            
            button.getElementsByClassName('');
            //when used on an object like this getelements will only get the elements inside that object
            //not the whole webpage
            
            //to get the values from a item in the cart for example
            //PriceElement = cartrow.getElementsByClassName('cart-price')[0]
            //this gives the first (and should be only) price value
            //we then get the inner text with priceElement.innerText which will return what is inbetween
            //<p> basically </p>
            
            //we can set the innerText as well just element.innerText = "yeet";
        })
    }
}

//elements have a .removeChild (i think that is remove element)
//they also have a element.firstChild so we can do a loop to remove all of the children
//from a div or etc


//CREATING DIVS ELEMENTS AND SHIT

function addItemToCart(title, price, imageSrc)
{
    //we can make an element and then use innerHtml value to add html into it
    var cartRow = document.createElement('div');

    //we can just add classes to elements like so
    cartRow.classList.add('className');

    //here we can get a div like shopping cart or something to apply html adding to it
    var items = document.getElementsByClassName('className')[0]

    //using backticks we can give variables in there so we can make html elements with our
    //settings but with many more options
    var htmlContentToAdd = `
    <div>
        <strong class="${variable}">Cofee Cup</strong>
    </div>
    <img src="Images/Cofee.png">
    <div>
        <span>$6.99</span>
        <button type="button">ADD TO CART</button>
    </div>`;
    cartRow.innerHTML = htmlContentToAdd;
    
    //add this div into the div that we want so for example adding a item into the shopping cart
    items.append(cartRow);
}
