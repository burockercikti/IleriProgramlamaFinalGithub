var getPermutation = function(n, k) { //leetcode' un oluşturduğu fonksiyon
//
  var faktoriyel=[];
  //faktoriyel dizisi oluşturdum
  var dizi=[];
  faktoriyel[0]=1;
  for(var i=1;i<n;i++)
  {
    // burda bir döngü kurup faktoriyel hesabı yaptım
    faktoriyel[i]=i*faktoriyel[i-1];
  }
  for(var i=1;i<=n;i++) {
    dizi.push(i);
    //push() methodu sayesinde dizinin sonuna eleman ekledim
  }
  k--;
  var s="";
  for(i=n-1;i>=0;i--)
  {
  var index=Math.floor(k/faktoriyel[i]);
  //sayıları tam sayıyı çevirmek için floor() methodunu kullandım
  s=s+""+dizi.splice(index,1)[0];
  // splice methodunu kullanarak dizimizin ilk elemanına ekleme yaptım.
  
	k=k%faktoriyel[i];
  }
  return s;
};

console.log(getPermutation(n = 3, k = 3))