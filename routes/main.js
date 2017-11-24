module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('main');
  })
  .get('/information', (req,res)=>{
    fs.readFile('./views/image/information.png', (error,data)=>{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  })
  .get('/slo', (req,res)=>{
    fs.readFile('./views/image/slo.png', (error,data)=>{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  })
  .get('/news', (req,res)=>{
    fs.readFile('./views/image/news.png', (error,data)=>{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  });
  return router;
}