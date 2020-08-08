<img src = "https://user-images.githubusercontent.com/8677536/60679895-34e96380-9ec4-11e9-9da3-584549e7d6af.png" align = "right" height = "180px" />  
  
# bar_loading
  
 no image loading screen.  
   
## Demo  
<img src="https://user-images.githubusercontent.com/8677536/60984090-0fea6a00-a376-11e9-8652-11211391cc24.gif"> 
 
 ## Sample  
 HTML :  
 ```html
<!-- Index.html -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
        <meta charset="UTF-8">
        <link rel="stylesheet"href="stylesheet.css">
        <script type="text/javascript" src="load_run.js"></script>
        <title>loading...</title>
    </head>

    <body>
        <div class="spinner">
            <div class="act1"></div>
            <div class="act2"></div>
            <div class="act3"></div>
            <div class="act4"></div>
            <div class="act5"></div>
        </div>
        <div class="msg">　Now Loading...</div>
    </body>
</html>
```
CSS :  
```css
/* stylesheet.css */
@charset "utf-8";
body{
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    background:#393939;
    top:0;
    left:0;
}
.spinner{
    position:absolute;
    height:10%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

.act1,.act2,.act3,.act4,.act5{
    position: relative;
    top:25%;
    float:left;
    padding-left:20px;
    height:50%;
    border-left:10px solid #ab2395;
}

.msg{
    opacity: 0.5;
    position:absolute;
    font-size:20px;
    top:60%;
    left:50%;
    text-align: center;
    color:#ab2395;
    transform: translate(-60%,-50%);
}
```
## License
___UNLICENSE___  

