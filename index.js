const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const patientRoutes = require('./routes/patientRoutes');
app.use('/patients', patientRoutes);

app.get('/', (req, res) => {
    res.send('Hospital Management API Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
