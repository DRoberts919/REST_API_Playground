// route setup for CRUD Operations

exports.routes = (app) => {

  // home route
  app.route("/").get((req,res)=>{
      res.send("localhost:3000 works")
  })  
  // check Route
  app.route("/check").get((req, res) => {
    res.send("Check is a working route");
  });

  app.route("/push/time?").put((req,res)=>{
    
  })
};
