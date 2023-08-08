const express = require('express');
const app = express();
const sequelize = require('./database/connection');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log('Base de datos conectada y modelos sincronizados.');
  })
  .catch((error) => console.log('Error al conectar a la base de datos:', error));

app.use('/api', taskRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
