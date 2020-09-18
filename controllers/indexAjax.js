// Khai báo servicer
var svService = new SinhVienService();


var layThongTinSinhVien = function() {
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(result) {
        var content = '' ;
        for(var i = 0; i<result.data.length; i++) {
            var sv  = result.data[i]
            // Tao đối tượng chứa dl đó
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
    
    
            content+= `<tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.loaiSinhVien}</td>
                <td></td>
                <td>${sv.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien(${sinhVien.maSinhVien})">Xóa
                </button>

                <button class="btn btn-primary mr-1" onclick="chinhSua('${sv.maSinhVien}')">Chỉnh sửa</button>

                </td>
            </tr>`
        }
        document.getElementById('tblSinhVien').innerHTML = content;

    }).catch(function(err) {
        console.log(err.response.data);
    })
}
layThongTinSinhVien();

// Tạo ra 1 obj chứa các tt backend cungcap
// var objectGetSinhVien = {
//     url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
//     method:'GET'
// }

// Dùng thu vien axios gui yeu cau dến sv

var promise = axios({
    url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
    method:'GET'
});
var layDLThanhCong = function(result) {
    console.log(result.data);
    
var content = '';
    for(var i = 0; i<result.data.length; i++) {
        var sv  = result.data[i]
        // Tao đối tượng chứa dl đó
        var sinhVien = new SinhVien();
        sinhVien.maSinhVien = sv.maSinhVien;
        sinhVien.tenSinhVien = sv.tenSinhVien;
        sinhVien.email = sv.email;
        sinhVien.diemToan = sv.diemToan;
        sinhVien.diemLy = sv.diemLy;
        sinhVien.diemHoa = sv.diemHoa;
        sinhVien.diemRenLuyen = sv.diemRenLuyen;
        sinhVien.loaiSinhVien = sv.loaiSinhVien;


        content+= `<tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.loaiSinhVien}</td>
            <td></td>
            <td>${sv.diemRenLuyen}</td>
        </tr>`
    }
    document.getElementById('tblSinhVien').innerHTML = content;
}

// var layDlThatBai = function(err){
//     console.log(err.response.data);
// }
// // pt .then(calback): nhận vào 1 hàm có  1 ts là kq trả ve thành công từ phía sv(trả về dl)
// //  .catch(calback): Nhận vào 1 hàm có 1 ts là kq trả về thất bại
// promise.then(layDLThanhCong).catch(layDlThatBai);




// ----------------------------------Post: Chức nag thêm sv vào server
document.getElementById('btnThemSinhVien').onclick = function() {
    var sv = new SinhVien() ;
sv.maSinhVien = document.getElementById('maSinhVien').value;
sv.tenSinhVien = document.getElementById('tenSinhVien').value;
sv.email = document.getElementById('email').value;
sv.diemToan = document.getElementById('diemToan').value;
sv.diemLy = document.getElementById('diemLy').value;
sv.diemHoa = document.getElementById('diemHoa').value;
sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
console.log('sinhVien', sv)


    axios ({
        url:'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method:'POST',
        data:sv
    }).then(function(result) {
        console.log("Kết quả",result.data)
        // c1: location.reload => load lại file scripr => Gọi api lấy danh sach ms về lại
        location.reload();

        // C2 gọi lại api lấy danh sách sv tại đây
        layThongTinSinhVien();
    }) .catch(function(err){
        console.log('Kết quả', err.response.data)
    })
        
    

}



var xoaSinhVien = function(maSinhVien) {
    // Gọi api từ backend => trả promise
    var promise = svService.xoaSinhVien(maSinhVien);
    // Dùng promise xử lý thành công hoặc thất bại
    promise.then(function(result) {
        console.log(result.data);

        // Load lại tt sinh viên
        layThongTinSinhVien() ;
    }).catch(function(err) {
        console.log(err.response.data)
    });
    
}

 
var chinhSua = function(maSinhVien) {
   var promise = svService.layThongTinSinhVien(maSinhVien);

   promise.then(function(result) {
       var sinhVien = result.data;
       document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
       document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
       document.getElementById('email').value = sinhVien.email;
       document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
       document.getElementById('diemToan').value = sinhVien.diemToan;
       document.getElementById('diemLy').value = sinhVien.diemLy;
       document.getElementById('diemHoa').value = sinhVien.diemHoa;
       document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
   }).catch(function(err) {
       
   })
}


document.getElementById('btnCapNhatSinhVien').onclick =function() {
    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.maSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.maSinhVien = document.getElementById('email').value;
    sinhVienUpdate.maSinhVien = document.getElementById('loaiSinhVien').value;
    sinhVienUpdate.maSinhVien = document.getElementById('diemToan').value;
    sinhVienUpdate.maSinhVien = document.getElementById('diemLy').value;
    sinhVienUpdate.maSinhVien = document.getElementById('diemHoa').value;
    sinhVienUpdate.maSinhVien = document.getElementById('diemRenLuyen').value;


    var promise = svService.capNhatThongTinSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate); 

    promise.then(function(result) {
        console.log(result.data);
        // Xử lý cập nhật thành công
        layThongTinSinhVien() ;

  }).catch(function(err) {
      console.log(err.response.data);
  });
    
}