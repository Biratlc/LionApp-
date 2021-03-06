const styles = theme => ({
  content: {
    height: "calc(100vh - 100px)",
    overflow: "auto",
    padding: "25px",
    marginLeft: "20px",
    right: "0px",
    boxSizing: "border-box",
    overflowY: "scroll",
    top: "90px",
    width: "calc(100% - 300px)",
    position: "absolute"
  },

  userSent: {
    float: "right",
    marginRight: "40px",
    clear: "both",
    padding: "10px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "rgb(0, 102, 51)",
    color: "white",
    width: "300px",
    height: "80px",
    borderRadius: "10px"
  },

  friendSent: {
    float: "left",
    clear: "both",
    padding: "10px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "5px",
    paddingBottom: "5px",
    marginLeft: "20px",
    backgroundColor: "#AA930A",
    color: "white",
    width: "300px",
    height: "80px",
    borderRadius: "10px"
  },

  chatHeader: {
    width: "calc(100% - 301px)",
    height: "34px",
    borderBottom: "1px solid #d2d2d4",
    paddingBottom: '10px',
    position: "fixed",
    top: "45px",
    marginLeft: "20px",
    right: "0px",
    fontSize: "18px",
    textAlign: "center",
    color: "gray",
    paddingTop: "5px",
    boxSizing: "border-box"
  },
  timer:{
    height:"100px",
    color:"black"
  },
});

export default styles;
