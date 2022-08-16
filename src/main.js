import express from "express"
import cors from 'cors';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const app = express()
const port = 1007
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.get("/film", async (req, res) => {
    const film = await prisma.film.findMany();
    res.send(film)
})

app.post("/film/create", async (req, res) => {
    try {
        const isValid = await prisma.film.create({
            data: {
                judul: req.body.judul,
                sinopsis: req.body.sinopsis,
                genre: req.body.genre,
                direktur: req.body.direktur,
                produser: req.body.produser,
                negara: req.body.negara,
                tahun: req.body.tahun,
            }
        })

        if(!isValid) {
            throw new Error("error");
        } else {
            res.send({success: true, message: "data berhasil dibuat"})
        }
    } catch (err) {
        res.send({status: "Error", message: err.message});
    }
})

app.put("/film/update", async (req, res) => {
    try {
        const isValid = await prisma.film.update({
            where: {
                id: req.body.id,
            },
            data: {
                judul: req.body.judul,
                sinopsis: req.body.sinopsis,
                genre: req.body.genre,
                direktur: req.body.direktur,
                produser: req.body.produser,
                negara: req.body.negara,
                tahun: req.body.tahun,
            }
        })

        if(!isValid) {
            throw new Error("Duplicate");
        } else {
            res.send({success: true, message: "data berhasil diubah"});
        }
    } catch (err) {
        res.send({success: false, message: err.message});
    }
})

app.delete("/film/delete", async (req, res) => {
    try {
        const isValid = await prisma.film.delete({
            where: {
                id: req.body.id,
            }
        });

        if(!isValid) {
            throw new Error("Duplicate");
        } else {
            res.send({success: true, message: "data berhasil dihapus"});
        }
    } catch (error) {
        res.send({success: false, message: error.message});
    }
})

app.listen(port, () => {
    console.log(`aplikasi jalan di http://localhost:${port}`)
})