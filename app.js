let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Config param
let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
    resetInterval(); // Reset interval on button click
}

// Event prev click
prev.onclick = function() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
    resetInterval(); // Reset interval on button click
}

// Auto run slider
let refreshInterval = setInterval(() => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}, 7000); // 8 seconds

function showSlider() {
    // Remove old active item
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    // Activate new item
    items[itemActive].classList.add('active');
}

// Function to reset the interval
function resetInterval() {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    }, 7000); // 8 seconds
}


// Initial call to showSlider to set the first item as active
showSlider();
