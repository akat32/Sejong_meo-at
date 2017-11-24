module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('main');
  })
  .get('/information', (req,res)=>{
    return res.sendFile('/root/meouk/Sejong_meo-at/views/image/information.PNG');
  })
  .get('/slo', (req,res)=>{
    fs.readFile('./views/image/slo.PNG', (error,data)=>{
      res.end(data);
    });
  })
  .get('/news', (req,res)=>{
    fs.readFile('./views/image/news.PNG', (error,data)=>{
      res.end(data);
    });
  });
  return router;
}
