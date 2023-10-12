async function fetchUserData() {
    try {
        let response = await fetch('https://reqres.in/api/users');
        let data = await response.json();
        return data.data
    } catch (error) {
        console.log(error, 'error')

    }
}

async function userInformation(userId) {
    try {
        let response = await fetch(`https://reqres.in/api/users/${userId}`);
        let data = await response.json();
        return data.data
    } catch (error) {
        console.log(error, 'error')

    }
}
export { fetchUserData, userInformation }; 