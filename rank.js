'use strict';
export{ tempRank, userCommands, modId, getId, UserProp, getRankFromMessage };

/* Global varables */
let tempRank;
const listOfUsers = [];
const modId = document.querySelector('.UsersListStarIcon').parentNode.firstChild.src.slice(-48, -12);
const getId = name => Array.from(document.querySelectorAll(".UsersListUserWrapper")).filter(check => check.children[0].naturalHeight > 51 && check.children[1].textContent === name).map(id => id.children[0].src.slice(-48, -12)).toString();
getRankFromMessage = name => {const singleOut = listOfUsers.filter(user => user._name === name); singleOut.length > 0 ? tempRank = singleOut[0]._rank : console.log('not found user')};

/* Classes */
class Rank {
    constructor (id, name, rank) {
        this._id = id;
        this._name = name;
        this._rank = rank;
    }
    get userName() {
        return this._name, this._rank;
    }
    set userName(updateRank) {
        this._rank = updateRank;
    }

}

class UserProp {
    constructor(id, userName, diminson, message) {
        this.id = id,
        this.userName = userName,
        this.diminson = diminson,
        this.message = message
    }
};

/* Holding all commands needed for user */
const userCommands = {
genral: {

addUsers(id, addName) {
if (id === undefined || addName === undefined || id.length < 6) {console.log('User not found')} else {
const users = new Rank(id, addName, 0); 
listOfUsers.push(users);
this.retrieve(addName);
    }
},

retrieve(name) { 
    setTimeout(() => {
    const singleOut = listOfUsers.filter(user => user._name === name); 
    if (singleOut.length > 0 ) {
    singleOut[0]._name === name ? console.log(`Username: ${singleOut[0]._name} Rank: ${singleOut[0]._rank}`) : console.log('User not found Or wrong command entered');
        } else {console.log('User not found')}
    }, 2000); 
},

rankUpDown(upOrdown, name) {
for (const user of listOfUsers) {
    user._name === name && upOrdown === 'up' ? user._rank = user._rank + 1
    : user._name === name && upOrdown === 'down' ? user._rank = user._rank - 1
    : false; 
}
    setTimeout(() => this.retrieve(name), 2000);

        }
        
    }
};
Object.freeze(userCommands);