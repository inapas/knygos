
  let knygos = {

    
       1: { 
            zanras: "fantastika",
            ISBN: 63554198,
            Title: "Ziedu Valdovas",
            Price: 15.99,
            Year: 1954,
            Pagecount: 900 
        },

       2: {
            zanras: "fantastika",
            ISBN: 98414832,
            Title: "Haris Poteris",
            Price: 19.99,
            Year: 1999,
            Pagecount: 650 
        },
       3: {
            zanras: "fantastika",
            ISBN: 09841832,
            Title: "Hobitas",
            Price: "120$",
            Year: 1949,
            Pagecount: 864 
        }
        ,


       4: { 
            zanras: "siaubo",
            ISBN: 06145756,
            Title: "Drakula",
            Price: 20.99,
            Year: 1995,
            Pagecount: 420 
        },

       5: {
            zanras: "siaubo",
            ISBN: 66269854,
            Title: "Tas",
            Price: 19.99 ,
            Year: 1959,
            Pagecount: 852
        },
        6:{
            zanras: "siaubo",
            ISBN: 46125928 ,
            Title: "Svytejimas",
            Price: 16.99,
            Year: 1995,
            Pagecount: 832 
        }
    ,

     
       7: { 
            zanras: "detektyvas",
            ISBN: 19441232,
            Title: "Vaiduoklis",
            Price: 19.99 ,
            Year: 2001,
            Pagecount: 400 
        },

        8: {
            zanras: "detektyvas",
            ISBN: 46191832,
            Title: "Tarakonai",
            Price: 24.99,
            Year: 1993,
            Pagecount: 400 
        },
        9: {
            zanras: "detektyvas",
            ISBN: 06141444,
            Title: "Sunus",
            Price: 16.99,
            Year: 2001,
            Pagecount: 400 
        }

}

for (let i in knygos){
    for (let k in knygos[i]){
      for (let o in knygos[i]){
          if(knygos[i][k] == 1995 && o =="Title"){
           console.log(o + ": " + knygos[i][o] + ". " + k + ": " + knygos[i][k])
        }
      }
    }
     
}  




