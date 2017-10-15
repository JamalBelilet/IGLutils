var vector1 = function(boxes)
    {
        v1 =[];
        for (var i = 1 ; i <= boxes; i++) {
            var value = prompt("insert the value "+i);
                v1.push(value);
        }
        console.log(v1);
        alert('vector created ');
        return vector1;
    }

var vector2 = function(boxes)
{
    v2 =[];
    for (var i = 1 ; i <= boxes; i++) {
        var value = prompt("insert the value "+i);
        v1.push(value);
    }
    console.log(v2);
    alert('vector created ');
    return vector2;
}

var list = function (v)
    {
        console.log(v);
        alert('vector listed');
    }

var sort = function (v) {
        v.sort();
        console.log(v);
        alert('vector sorted');
}

var sum = function (v1,v2)
{
    if (v1.length != v2.length)
    {
        throw (alert('must be the same length !!'))
    }
        else
        {
            v3 = [];
            for(var i=0 ; i<=v1.length ; i++)
            {
                v3[i]=v1[i]+v2[i];
            }
            console.log(v3);
            alert('two vectors have been summed in v3');
        }
}
var reverse = function (v) {
    v.reverse();
    console.log(v);
}
var v1,v2 =[];
    while (option !='quit')
    {
        var  option = prompt('select an option');
        if (option === "create")
        {
            var boxes = prompt("insert the number of boxes");
            vector1(Number(boxes));
        }
        else if(option ==="list")
        {
            var name = prompt("insert the name of the vector v1 or v2");
            if (name === "v1"){list(v1)}
            else if (name === "v2"){list(v2)}
            else {alert('name does not exist')};
        }
        else if(option ==="sort")
        {
            var name = prompt("insert the name of the vector v1 or v2");
            if (name === "v1"){sort(v1)}
            else if (name === "v2"){sort(v2)}
            else {alert('name does not exist')};
        }
    }
