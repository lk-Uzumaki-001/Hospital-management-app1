const express = require('express');
const router = express.Router();

// Multiple patients data
let patients = [
    { id: 1, name: "Ramesh", age: 45, disease: "Fever" },
    { id: 2, name: "Sita", age: 30, disease: "Diabetes" },
    { id: 3, name: "Arun", age: 25, disease: "Cold" }
];

// READ – Get all patients
router.get('/', (req, res) => {
    res.json(patients);
});

// READ – Get single patient
router.get('/:id', (req, res) => {
    const patient = patients.find(p => p.id == req.params.id);
    res.json(patient || { message: "Patient not found" });
});

// CREATE – Add new patient
router.post('/', (req, res) => {
    patients.push(req.body);
    res.json({ message: "Patient added", patients });
});

// UPDATE – Update patient
router.put('/:id', (req, res) => {
    patients = patients.map(p =>
        p.id == req.params.id ? { ...p, ...req.body } : p
    );
    res.json({ message: "Patient updated", patients });
});

// DELETE – Remove patient
router.delete('/:id', (req, res) => {
    patients = patients.filter(p => p.id != req.params.id);
    res.json({ message: "Patient deleted", patients });
});

module.exports = router;
