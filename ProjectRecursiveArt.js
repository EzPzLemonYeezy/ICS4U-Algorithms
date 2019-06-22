var drawShape = function(x, y, radius) {
    // random variable to decide what shape is used
    var r = random(2);
    
    // creating random colors
    var color = floor(random(0, 255));
    var color2 = floor(random(0, 255));
    var color3 = floor(random(0, 255));
    
    
    fill(color-radius, color2+radius, color3+radius);
    
    // if r less than 1 create circles
    if(r < 1){
        ellipse(radius*2, radius, radius, radius);
        ellipse(radius/2, radius, radius, radius);
    }
    
    if(r >= 1){
        rect(radius*2, radius, radius, radius);
        rect(width-radius, radius, radius, radius);
    }    
    var newRadius = radius/2;
    if (newRadius >= 2) {
        drawShape(x-20, y, newRadius);
        drawShape(x+20, y, newRadius);
    }
};

drawShape(width/2, height/2, 380);
