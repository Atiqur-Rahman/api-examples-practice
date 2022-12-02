const loadRandomUser = () => {
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayRandomUser(data));
};
loadRandomUser();

const displayRandomUser = (userData) => {
    const userDetails = userData.results;

    userDetails.forEach((user) => {
        const showUser = document.getElementById('show-user');
        const dob = (user.dob.date = new Date().toJSON().slice(0, 10).split('-').reverse().join('/'));
        showUser.innerHTML = `
            <div class="card w-25 text-center">
                <img src=${user.picture.large} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">
                        Gender: ${user.gender} <br>
                        Email: ${user.email} <br>
                        Cell: ${user.cell} <br>
                        Birth-Date: ${dob}  <br>
                        location: ${user.location.street.number} ${user.location.street.name}
                    </p>
                </div>
            </div>
        `;
    });
};
