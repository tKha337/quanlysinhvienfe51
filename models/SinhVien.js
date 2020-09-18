var SinhVien = function ( masv,tensv,email,diemToan,diemLy,diemHoa,diemRenLuyen, loaiSinhVien) {//Lớp đối tượng sinh viên
    this.maSinhVien = masv; //Các thuộc tính của class SinhVien
    this.tenSinhVien = tensv;
    this.email = email;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa =diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    this.loaiSinhVien = loaiSinhVien;
    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) /3;
        return dtb;
    }
}