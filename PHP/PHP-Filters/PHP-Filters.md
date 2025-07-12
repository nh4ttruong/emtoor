# [PHP - Filters](https://www.root-me.org/en/Challenges/Web-Server/PHP-Filters)

Test payload trực tiếp đến `/etc/passwd` thì nhận được lỗi ràng buộc với `/etc/passwd`.

![](./media/image1.png)

Thật ra URL không filter keyword của mình nhưng mà không thể nào get nó theo cách này được. Chuyển qua dùng wrapper php với base64 để get source index.php:

![](./media/image2.png)

![](./media/image3.png)

Get source **ch12.php**:

![](./media/image4.png)

![](./media/image5.png)

Vậy là website có `config.php`, get source `config.php`:

![](./media/image6.png)

![](./media/image7.png)

```yaml
Username: admin
Password: DAPt9D2mky0APAF
```

![](./media/image8.png)

![](./media/image9.png)

- Flag: "****************************"
