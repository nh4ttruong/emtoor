# [SQL injection - Error](https://www.root-me.org/en/Challenges/Web-Server/SQL-injection-Error)

![](./media/image1.png)

Website cung cấp cho ta 2 tab (Authentication và Contents), tuy vậy, khi fuzz SQLi vào Authentication thì không có kết quả khả thi. Chuyển qua tab Contents, ta phát hiện ra website sẽ res về lỗi cho ta:

![](./media/image2.png)

Thử fuzz các payload dựa vào `“ORDER BY”`:

![](./media/image3.png)

![](./media/image4.png)

![](./media/image5.png)

Có thể thấy, với `position==3` hoặc `VARCHAR/CHAR` type thì database res về lỗi. Như vậy, ta cần phải hiết 3 position của database này cũng như dựa vào type varibles để attack. Dựa vào cheatsheet của MySQL, ta có thể sử dụng `CAST … AS [type]` để khiến database res về error khi postion không thể là `VARCHAR/CHAR`. Mở burpsuite và thử payload:

![](./media/image6.png)

Lỗi res về cho ta biết, website sẽ chỉ hiển thị 1 row. Đến đây, ta có thể sử dụng LIMIT để filter res về 1 row:

![](./media/image7.png)

-   Table name: `m3mbr35t4bl3`

![](./media/image8.png)

-   Column name (first column): `id`

Đến đây, ta cần sử dụng OFFSET để có thể filter vào đúng postion ta cần LIMIT để hiển thị các column còn lại:

![](./media/image9.png)

![](./media/image10.png)

-   Username column: `us3rn4m3_c0l`
-   Password column: `p455w0rd_c0l`

![](./media/image11.png)

![](./media/image12.png)

-   Username của admin: `admin`
-   Password của admin: `1a2BdKT5DIx3qxQN3UaC`

![](./media/image13.png)

- Flag: "****************************"
