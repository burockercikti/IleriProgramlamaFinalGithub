/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const sayi = new Array(1000).fill(0);
//Fill () yöntemi, bir dizideki belirtilen öğeleri statik bir değerle doldurur.


    for (var i = 0; i < target.length; i++) {
        //target dizisini for döngüsü ile dolaşıyoruz.
        sayi[target[i]]++;
        sayi[arr[i]]--; 
    }
    return sayi.reduce((acc, cur) => acc && cur == 0, true);
/*reduce() methodu ile Azaltma işlemi yapılır.
reduce() methodu acc(accumulator) ve cur(Current Value) argümanlarını alır. 
reduce() methodunun döndürülen değeri, dizideki her yinelemede değeri hatırlanan 
ve sonuçta nihai, tek sonuçlanan değer olan acc argümanına atanır.
cur --> Dizide işlenmekte olan geçerli öğe.*/
    };

console.log(canBeEqual([1,2,3,4], arr = [2,4,1,3]))
//program girilen iki dizi nin elemanlarının birbirlerine şit olup olmadığını kontrol eder.