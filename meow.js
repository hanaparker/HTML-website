//instantiate the cat array
var cat = [{'src':'./img/strawberryCat.jpg', 'length':"356", 'width':"475"},
        {'src':'./img/cat.jpeg','length':"460",'width':"420"}]
//anonymous function: ()=> or function()

//$() is a jQuery function
$(document).ready(()=>{
    //returns the element with the id of meow
    $("#meow").html("<b>this is a meow</b>");
    //hovers over the element with the id of imagePlaceholder
    $("#imagePlaceholder").hover(function(){
        //conditionally assigns values to the properties of "this" object based on the value of the src property
        switch (this.src.substring(this.src.lastIndexOf('/')+1)){
            //if the src property ends with "strawberryCat.jpg", then assign the src property the second object in the cat array (cat)
            case "strawberryCat.jpg":
                this.src=cat[1].src;
                this.width=cat[1].width;
                this.height=cat[1].length;
                break;
            //if the src property ends with "cat.jpeg", then assign the src property the first object in the cat array (strawberryCat.jpg)
            default:
                this.src=cat[0].src;
                this.width=cat[0].width;
                this.height=cat[0].length;
       
        }
    });
});


