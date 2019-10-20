const express=require('express')
const app=express()
app.get('/', (req, res) => {
    let requestAt=new Date().getHours()
    if(requestAt < 8 || requestAt < 18){
        return res.sendFile(__dirname + '/public/notopen.html')
    } else {
        return res.sendFile(__dirname + '/public/home.html')
    }
})

app.get('/ourservices', (req, res) => {
    let requestAt=new Date().getHours()
    if(requestAt < 8 || requestAt > 18){
        return res.sendFile(__dirname + '/public/notopen.html')
    } else {
        return res.sendFile(__dirname + '/public/home.html')
    }
})




app.use(express.static(__dirname + '/public/'))










app.listen(3000, (err)=>{
    if(err){
    console.log('server is not running')
    }
    else{
        console.log('server is running in port 3000 ')
    }

})
