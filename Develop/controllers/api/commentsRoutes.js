const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.get ('/', (req, res) => {
Comments.findAll ({})
.then(commentDate => res.json (CommentsData))
.catch(err => {
    console.log (err);
    res.status(500).json(err)
});
});


router.get('/:id', (req, res) => {
   Comments.findAll({
    where: {
        id: req.params.id
    }
   })
        .then (CommentsData => res.json (CommentsData))
        .catch(err => {
            console.log (err);
            res.status(500).json(err)
        })
      });

      router.post('/', async (req, res) => {
        try {
          const newComments = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
          });
      
          res.status(200).json(newComments);
        } catch (err) {
          res.status(400).json(err);
        }
      });


      router.delete('/:id', async (req, res) => {
        try {
          const CommentsData = await Comments.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
      
          if (!CommentsData) {
            res.status(404).json({ message: 'No commentfound!' });
            return;
          }
      
          res.status(200).json(commentsData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
      module.exports = router;
      