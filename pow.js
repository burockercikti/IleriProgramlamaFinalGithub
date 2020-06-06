var myPow = function(x, n) {  //leetcode' un oluşturduğu fonksiyon
    if(n===0) return 1;
    var sayi = Math.exp(Math.abs(n)*Math.log(Math.abs(x)));
    // değerleri abs ile mutlak değere aldım 
    if(x<0 && n%2==1)
    //Burada bir koşul koydum 
    //mod aldım
    sayi*=-1;
    //eğer koşul sağlanırsa sayiyi -1 le çarptım
    return n>0?sayi:(1/sayi);
  };
  
  console.log(Math.pow(2.00000, 10));
  