 // this is for connection with metamask
 async function Connect() {
    if (!window.ethereum) {
      alert("Connect to a Web3 wallet");
      console.log("Connect to a Web3 wallet");
    } else {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
  
      alert("connected");
      console.log("please install metamask");
  
      function truncateString(str, num) {
        if (str.length <= num) {
          return str;
        }
        return str.slice(0, num) + "...";
      }
  
      const addresstring = truncateString(accounts[0].toString(), 10);
  
      const connectButton = document.getElementById("connect");
      connectButton.innerHTML = addresstring.toUpperCase();
    }
  }