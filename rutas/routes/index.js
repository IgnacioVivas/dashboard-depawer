// const { Router } = require('express');
// const router = Router();
// const { Post } = require('../db');




// router.put('/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { powers } = req.query;
  
//       const user = await UserInfo.findByPk(id);
//       user.powers = powers;
  
//       await user.save();
  
//       res.json(user);
//     } catch (error) {
//       res.status(500).send({ message: error.message });
//     }
//   });



//   router.post('', async (req, res) => {
//     try {
//       const { name, category, price, stock, published, image, description } = req.body;
  
//       if (name && category && price && stock && published && description) {
//         const newProduct = await Product.create({
//           name,
//           category,
//           price,
//           stock,
//           published,
//           image,
//           description,
//         });
  
//         res.json(newProduct);
//       } else {
//         throw new Error('the required data is empty');
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
