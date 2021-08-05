const express=require('express');
const app=express();
const port =process.env.PORT||5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/api/customers',(req,res)=>{
  res.send([{
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍길동',
    'birthday':'961222',
    'gender':'남자',
    'job':'대학생'
  }
  ,
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'이순신',
    'birthday':'961222',
    'gender':'여자',
    'job':'직장인'
  },{
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'세종',
    'birthday':'961222',
    'gender':'남자',
    'job':'프로그래머'
  }]);
});

app.listen(port,()=>console.log(`Listening on port ${port}`))