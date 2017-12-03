module.exports = (router,fs,Words)=>{
  router.post('/save', async (req,res)=>{
    var new_word = new Words(req.body);
    let result = await new_word.save();
    console.log('new Word! : ' + result.word);
    res.status(200).send('New Word! : ' + result.word + result.change);
  })
  .post('/find', async (req,res)=>{
    const rquery = new RegExp(req.body.word);
    let result = await Words.find({word : rquery});
    if(!result) return res.status(404).json({message : "Word not find!"});
    else return res.status(200).json(result);
  })
  .post('/chk', async (req,res)=>{
    var result = await Words.find().sort({_id : 1});
    if(result[0] == null) res.status(404).json({message : "DB Have not Words!"});
    else{
     res.status(200).json(result);
     console.log(result);
    }
  })
  return router;
};
