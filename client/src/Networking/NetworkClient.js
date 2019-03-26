import * as signalR from '@aspnet/signalr'
import Character from './Character';

class NetworkClient {
  constructor() {
      
    this.connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    this.connectionId = null;
    this.username = null;
    this.charName = null;

    this.connection.on("ReceiveMessage", (message) => {
      
        //var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        //var encodedMsg =  message;
        /*var li = document.createElement("li");
        li.textContent = encodedMsg;
        document.getElementById("messagesList").appendChild(li);*/
        console.log(message);
    });

    this.connection.start().catch( (err) => {
      return console.error(err.toString());
    }); 
    
    this.connection.on("PosUpdate", (connId, x, y) => {
      console.log(connId + ": " + x + " " + y);
    });

    this.connection.on("Connect", (connId) => {
      // store connId and send back ConnectConfirmMessage

      console.log("received connect message");

      this.conectionId = connId;
      // send username and password
      const username = "User_" + Math.floor(Math.random() * 999999);
      this.username = username;

      const password = "password";

      this.connection.invoke("Authenticate", username, password).catch( (err) => {
        return console.error(err.toString());
      });
    });

    this.connection.on("AuthSuccess", () => {
      
      // attempt to spawn here
      const charName = "Char_" + Math.floor(Math.random() * 999999);
      this.charName = charName;

      this.connection.invoke("Spawn", charName).catch( (err) => {
        return console.error(err.toString());
      });
    });

    this.connection.on("Spawn", (charName, x, y) => {

      // add the player to some kind of management class
      window.charManager.AddChar()

      if(charName === this.charName) {
        // own char
      } else {
        // other char
      }
    });

    this.connection.on("NewConnect", (username, x, y) => {
      if(this.username !== username) {
        console.log("New character spawned " + username);

        // spawn new player at this location
        window.mainScene.addNewPlayer(connId, x, y);
      }
    });
  }

  sendMessage(msg) {
    this.connection.invoke("SendMessage", "user", "message").catch( (err) => {
      return console.error(err.toString());
    });
  };
  
  sendPositionUpdate(x, y) {
    this.connection.invoke("PosUpdate", x, y).catch((err) => {
      return console.error(err.toString());
    });
  };
}

export default NetworkClient;