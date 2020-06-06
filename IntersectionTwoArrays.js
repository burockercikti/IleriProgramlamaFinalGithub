var intersect = function(nums1, nums2) { // leetcode' un oluşturduğu fonksiyon
    var dizi = [], indeks; // bir dizi oluşturdum
    while (nums1.length) {
        indeks = nums2.indexOf(nums1.shift());
        if (indeks > -1) {// Burada index 0 ve ya ondan daha büyük olması için koşul koydum
            dizi.push(nums2.splice(indeks, 1)[0]);// dizinin sonuna ekledim
        }
    }
    return dizi;
};
console.log(intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]));
