const router = require('express').Router();
const fs = require('fs');
const express = require ("express");
const util = require ("util");
const { Router } = require('express');


// const uuid = require ("../helpers/uuid");
// const store = require('../db/store');

// // requesting the existing notes

router.get('/api/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// posting note function route 

router.post('/api/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// delete note function route

router.delete('/api/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;