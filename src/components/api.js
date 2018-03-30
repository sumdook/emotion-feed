import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');


function setEmotion(cb,emotion){
	socket.on('livefeed', feed => cb(null,feed));
	socket.emit('setEmotion',emotion);
}
export  { setEmotion };