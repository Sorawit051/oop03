enum role{
    admin,
    Editor,
    Viewer
}

interface User {
    username: string;
    email: string;
    role: role;
}

function checkAccess(user: User): void {
    if(user.role === role.admin) {
        console.log(`${user.username} has full access.`);
    } else if(user.role === role.Editor) {
        console.log(`${user.username} can edit content.`);
    } else {
        console.log(`${user.username} can view content.`);
    }
}

let adminUser: User = {
    username: "Bank",
    email: "bank@example.com",
    role: role.admin
};

checkAccess(adminUser);