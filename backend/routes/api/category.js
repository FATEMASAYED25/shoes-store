const router = require('express').Router();
const { Category } = require('../../models');
const { authAdmin } = require('../../middlewares/authentication');


router.get('/', authAdmin, async (_req, res) => {
    try {
        const categories = await Category.findAll({include: 'products'})
        if(categories === null){
            return res.json("Not found");
        }
        res.status(200).json(categories)
    }catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }
});

router.get('/:id', authAdmin, async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id)
        if(category === null){
            return res.json("Not found")
        }
        res.status(200).json(category)
    }catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }
});

router.post('/', authAdmin, async (req, res) => {
    try{
        const category = {
            name: req.body.name
        }
        const newCategory = await Category.create(category)
        res.status(201).json(newCategory)
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }

});

router.put('/:id', authAdmin, async (req, res) => {
    try {
        const  name  = req.body.name
        const category = await Category.findByPk(req.params.id)
        if(category === null){
            return res.json("Not found")
        }
        category.name = name
        await category.save()
        res.status(200).json(category) 
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }
});

router.delete('/:id', authAdmin, async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id)
        if(category === null){
            return res.json("Not found")
        }
        await category.destroy()
        res.status(200).json({ message: 'category deleted!' })
    }catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }
});

module.exports = router;