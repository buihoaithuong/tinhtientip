function getEle(id){
    return document.getElementById(id);
}

function calculateTip(){
    var tongBill = getEle("billamt").value;
    var haiLongVaTip = getEle("serviceQual").value;
    var soNguoiShare = getEle("peopleamt").value;

    // validation
    if(tongBill === '' || haiLongVaTip == 0){
        alert("vui long chon gia tri");
        return;
    }
     
    if(soNguoiShare === '' || soNguoiShare <=1){
        soNguoiShare =1;
        getEle("each").style.display= "none";
    }
    else{
        getEle("each").style.display="block";
    }
    //tinh toan
    var tongTip = (tongBill*haiLongVaTip)/soNguoiShare;
    //lam tron den so thap phan thu hai
    tongTip = Math.round(tongTip*100)/100;
    // hien thi 2 chu so phan thap phan
    tongTip=tongTip.toFixed(2);

    // hien thi vung div tien tip
    getEle("totalTip").style.display="block";
    getEle("tip").innerHTML = tongTip;
}
// hien thi vung div tien tip
getEle("totalTip").style.display="none";
getEle("each").style.display = "none";


getEle("calculate").onclick = function(){
    calculateTip();
}