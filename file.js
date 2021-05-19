  var a = {
          "atm": "Automatic Teller Machine",
          "it": "Imformation Technology",
          "cs": "Computer Science",
        };
        var b = a.atm;
        var c = a.cs;
        var d = a.it;
        console.log(b);
        console.log(c);
        console.log(d);

        var array = [];
        var i = 0;
        while(i < 5){
          array.push(i);
          i++
        }
        console.log(array);
        var arr =[];
         for (var i = 1; i < 10; i++) {
            arr.push(i);
           }
           console.log(arr);
          function randomm() {
            return Math.random();
          }
          console.log(randomm());

        function ramran(o, s) {
          return Math.floor(Math.random() * (o - s + 1)) +s;
        }
        console.log(ramran(1,9));
