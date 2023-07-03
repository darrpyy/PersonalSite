import {formatDistance} from 'date-fns'


const img = document.getElementById("comic-img");
const title = document.getElementById("title");
const date = document.getElementById("date");

function fetchID(email: string) {
    const params = new URLSearchParams();
    params.append('email', email);
    return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
        .then(function (response) {
            return response.json();
        })
}

function fetchContentByID(id: number) {
    return fetch('https://fwd.innopolis.university/api/comic?id=' + id.toString())
        .then(function (response) {
            return response.json();
        })
}

async function main() {
    const id = await fetchID('d.koncheva@innopolis.university');
    const data = await fetchContentByID(id)

    if (title != null && date != null && img != null) {
        title.textContent = data.safe_title;
        img.setAttribute("alt", data.alt);
        img.setAttribute("src", data.img);
        const eventDate = new Date(data.year, data.month, data.day);
        date.textContent = formatDistance(new Date(data.year, data.month - 1, data.day), new Date(), {addSuffix: true});
    }
}

main();
