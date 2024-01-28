var item = localStorage.getItem("Acc_Username")
setTimeout(() => {
    if(!item){
    
    } else {
        document.getElementById("AvatarImgNavbar").src = `https://ui-avatars.com/api/?length=1&background=random&name=${localStorage.getItem("Acc_Username")}&bold=true`
    }
}, 100);