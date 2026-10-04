const data = {
    1: {src: "goku.jpg", title: "The Royal Navy Suit", desc: "Formal & Business Attire"},
    2: {src: "image-4.jpg", title: "Elegance Evening Gown", desc: "Evening & Luxury Wear"},
    3: {src: "IMG-20260724-WA0033.jpg", title: "Black Tie Tuxedo", desc: "Special Events and Wedding"},
    4: {src: "IMG-20260724-WA0033.jpg", title: "Lovely Wedding Dress", desc: "Weddings"},
    5: {src: "image-4.jpg", title: "Casual Female Wear", desc: "Home"},
    6: {src: "image2.webp", title: "Outstanding Party Gown", desc: "Special Events and Parties"}
}
const params = new URLSearchParams(window.location.search);
const id = params.get('id')

if (data[id]) {
    document.getElementById('bigImg').src = data[id].src;
    document.getElementById('title').textContent = data[id].title;
    document.getElementById('desc').textContent = data[id].desc;
    //prev and next buttons
    const keys = Object.keys(data).map(Number);
    const index = keys.indexOf(parseInt(id));
    let prevIndex = index > 0? index - 1 : keys.length - 1;
    let nextIndex = index < keys.length -1? index + 1 : 0;
    document.getElementById('prev').href = `detail.html?id=${keys[prevIndex]}`;
    document.getElementById('next').href = `detail.html?id=${keys[nextIndex]}`
} else {
    document.body.innerHTML = "<h1>Image not found</h1>"
}