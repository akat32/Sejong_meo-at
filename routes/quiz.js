module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('quiz');
  });
  return router;
};
