const { db } = require("./server/db/models");
const app = require("./server/db/app");

const { PORT = 3000 } = process.env;

const init = async () => {
    try {
      await db.sync();
        
      app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error starting server:', error)
    }
  };
  
  init();