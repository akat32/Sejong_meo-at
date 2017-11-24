module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('main');
  })
  .get('/information', (req,res)=>{
    fs.readFile('./views/image/information.PNG', (error,data)=>{
      res.end(data);
    });
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
