var SinhVienService = function () {
    this.layDanhSachSinhVien = function () {
        var promise =axios ({
            url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
            method:'GET'
        });
        return promise;
    }

    this.xoaSinhVien = function(maSinhVien) {
        var promise =axios ({
            url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
            method: 'DELETE'
        })
        return promise;
    }

    this.layThongTinSinhVien = function(maSinhVien) {
        var promise =axios ({
            url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'GET'
        })
        return promise;
    }

    this.capNhatThongTinSinhVien = function(maSinhVien) {
        var promise = axios ({
            url :`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method:'PUT',
            data:sinhVienUpdate
        })
        return promise;
    }
    // tinh1 nang tim kiem sinh vien
    this.timKiemSinhVien = function() {
        console.log('Chuc nang tim kiem sinh vien');
        return '';
    }
}