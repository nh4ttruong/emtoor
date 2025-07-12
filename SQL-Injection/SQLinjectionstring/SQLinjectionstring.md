# [SQL injection - String](https://www.root-me.org/en/Challenges/Web-Server/SQL-injection-String)

![](./media/image1.png)

Thử SQLi ở thẻ Login thì không bypass được, ta qua thẻ Search để thử. Ở thẻ này có vẻ khả thi hơn vì nó có thực hiện query theo input của ta. Ví dụ:

![](./media/image2.png)

Đầu tiên, thử với payload đơn giản **1’ or 1=1--** , thì phát hiện nó đã bị SQLi thành công:

![](./media/image3.png)

Ta thực hiện blind SQL để tìm kiếm thông tin infor của admin để có thể login. Ta thử với payload **1’ union select 1** , thì nhận về lỗi sau:

![](./media/image4.png)

Có thể biết được server sử dụng SQLite3, từ đó, công việc của ta cần sử dụng cú pháp của SQLite3 để mò ra các table trong database với hi vọng tìm được admin. Nhưng trước tiên, ta cần phải thực hiện dò số cột. Thay payload thành **1’ union select 1,1--** thì có vẻ đã tìm được số cột là 2:

![](./media/image5.png)

Vì server dùng SQLite3, do vậy, ta cần truy vẫn các table bằng cách tìm trong **sqlite\_master** hoặc **sqlite\_schema.** Thử truy vấn với payload **1’ union select 1,name from sqlite\_master--** ta có:

![](./media/image6.png)

Tiếp tục, ta blind vào table users *1' union select 1,1 from users--*

![](./media/image7.png)

Tiếp tục, ta thử query tìm username và password với payload **1' union select username,password from users-- :**

![](./media/image8.png)

Thử login thì thành công:

![](./media/image9.png)

- Flag: "****************************"
