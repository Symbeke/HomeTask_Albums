const albumId = +localStorage.getItem('albumId');
const usersList = $("#users_list")
const drawUsers = usersArray =>{
        usersList.empty();
        usersArray.map(user =>{
            usersList.append(
                `<p>album author: ${user.name}</p>
                <p>email: ${user.email}</p>
                <p>phone: ${user.phone}</p>
                `
            );
        })
    }
$.ajax({
    url:'https://jsonplaceholder.typicode.com/users',
        method:'get',
        success:(response)=>{
                        const filteredUsers = albumId ? response.filter(user => user.id == albumId) : response;
                        drawUsers(filteredUsers);
                    },
        
        error: error => {
            alert("Smth went wrong");
        }
})


