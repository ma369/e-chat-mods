import { tempRank, userCommands, modId, getId, UserProp, getRankFromMessage } from './rank.js';

const readChat = new MutationObserver(mutationsList => {for(const messages of mutationsList) {const userInfo = new UserProp(messages.addedNodes[0].children[0].src.slice(-48, -12), messages.addedNodes[0].children[1].firstChild.firstChild.textContent, messages.addedNodes[0].children[0].naturalHeight, messages.addedNodes[0].children[1].lastChild.textContent);

getRankFromMessage(userInfo.userName);

    checkMessage = rank => {
        if (diminson > 51 && rank >= 0) {
/^addUser:\s/i.test(message) === true && id === modId || rank === 3 ? userCommands.genral.addUsers(getId(message.substring(9)), message.substring(9)) : console.log('Your not allowed to perfom this action');
/^rankUp:\s/i.test(message) === true && rank === 3 ? userCommands.genral.rankUpDown(rankUpDown('up', message.substring(8))) : console.log('Your not allowed to perfom this action');
/^rankDown:\s/i.test(message) === true && rank === 3 ? userCommands.genral.rankUpDown(rankUpDown('down', message.substring(10))) : console.log('Your not allowed to perfom this action');
/^rankOf:\s/i.test(message) === true ? userCommands.genral.retrieve(message.substring(8)) : console.log('Your not allowed to perfom this action');
    }
};
checkMessage(tempRank)

    }
});
readChat.observe(document.querySelector('.chat-box-layer__messages'), {attributes: true, childList: true});