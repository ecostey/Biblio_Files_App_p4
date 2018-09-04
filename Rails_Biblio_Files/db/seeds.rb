# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Book.create({
    title:"Neverwhere",
    author:"Neil Gaiman",
    isbn:"0-7553-2280-0"
})

Book.create({
    title:"Lirael",
    author:"Garth Nix",
    isbn:"0-06-000542-4"
})

Book.create({
    title:"House of Leaves",
    author:"Mark Z. Danielewski",
    isbn:"0-375-70376-4"
})

Book.create({
    title:"The Book of Atrus (Myst, Book 1)",
    author:"Rand Miller",
    isbn:"1-4013-0781-7"
})

Book.create({
    title:"Goodnight Moon",
    author:"Margaret Wise Brown",
    isbn:"0-0607-7585-8"
})

Patron.create({
    name:"David Whitlatch",
    email:"DWhitlatch@aol.com"
})

Patron.create({
    name:"Shua Wolff",
    email:"troubleShua@msn.com"
})

Patron.create({
    name:"Luke Fariselli",
    email:"fariswheel@hotmail.com"
})