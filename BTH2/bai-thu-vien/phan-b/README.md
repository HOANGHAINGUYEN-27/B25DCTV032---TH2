# So sánh JavaScript thuần (Phần A) và React (Phần B)

| Tiêu chí | Phần A – DOM thuần | Phần B – React |
|---|---|---|
| Cách cập nhật giao diện | Viết lệnh thủ công: `createElement`, `replaceChildren`, `textContent` | Mô tả giao diện theo state; React tự cập nhật khi `setState` |
| Quản lý dữ liệu | Biến toàn cục (`books`, `favs`) và phải nhớ gọi `update()` | `useState` trong `App`; đổi state là giao diện đổi theo |
| Sự kiện | Event delegation trên lưới thẻ, đọc `data-action` | `onClick` gắn trực tiếp vào nút, truyền hàm xuống bằng props |
| Tái sử dụng | Tách hàm/module (`render.js`, `api.js`) | Tách component (`BookCard`, `Section` dùng `children`) |
| Danh sách | Dựng lại toàn bộ thẻ mỗi lần | `map` + `key`, React so sánh và chỉ sửa phần thay đổi |
| Độ phức tạp | Code dài hơn khi giao diện nhiều trạng thái | Code ngắn, dễ đọc hơn, nhưng cần Vite/Node và học khái niệm mới |

**Kết luận:** DOM thuần giúp hiểu rõ trình duyệt hoạt động thế nào, nhưng phải tự đồng bộ dữ liệu và giao diện. React làm việc đó thay ta, nên phù hợp hơn khi ứng dụng lớn dần.

## Chạy
- Phần A: `cd phan-a && npx serve .` (cần server vì dùng `fetch` và ES module).
- Phần B: `cd phan-b && npm install && npm run dev`.
