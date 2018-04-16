xuLyThem = ()=>{
    $('#myTable tr:last').append(`<tr>
    <th>${$("#inputTenSanPham").val()}</th>
    <th>LOẠI SẢN PHẨM</th>
    <th>NHÀ SẢN XUẤT</th>
    <th>GIÁ MUA</th>
    <th>GIÁ BÁN</th>
    <th>SỐ LƯỢNG</th>
</tr>`);
}