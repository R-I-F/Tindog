export { Dogs }

class Dogs {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        const { avatar, name, age, bio, alt } = this 
        return `<img class="profile-pic" src="${avatar}" alt="">
                <div class="profile-info">
                    <h1>${name}, ${age}</h1>
                    <h2>${bio} ?</h2>
                </div>`
    }
    getLikeAssetHtml(){
        return` <div class="like-asset">
                    <img src="./images/badge-like.png">
                </div>`
        }
    getDislikeAssetHtml(){
        return  `<div class="dis-like-asset">
                    <img src="./images/badge-nope.png">
                </div>`
    }
}