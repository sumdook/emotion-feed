import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');


function setEmotion(cb,emotion){
	socket.on('liveFeed', (feed) => {cb(null,feed)});
	socket.emit('setEmotion',emotion);
}
export  { setEmotion };