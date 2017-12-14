module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('translation', {korean:""});
  });
  return router;
};
