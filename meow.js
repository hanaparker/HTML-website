var cat = [{'src':'./img/strawberryCat.jpg', 'length':"500", 'width':"430"},
        {'src':'./img/cat.jpeg','length':"460",'width':"420"}]
//anonymous function: ()=> or function()
$(document).ready(()=>{
    $("#meow").html("<b>this is a meow</b>");
    $("#imagePlaceholder").hover(function(){
        switch (this.src.substring(this.src.lastIndexOf('/')+1)){
            case "strawberryCat.jpg":
                this.src=cat[1].src;
                this.width=cat[1].width;
                this.height=cat[1].length;
                break;
            default:
                this.src=cat[0].src;
                this.width=cat[0].width;
                this.height=cat[0].length;
       
        }
    });
});


