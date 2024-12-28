const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("res sended") //ถ้ากด reload หน้าเว็บจะขึ้นข้ัอความ res sended ทุกครั้ง
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Open http://localhost:3000 too see some change");
});
