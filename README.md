# WebWeather

**WebWeather** là một ứng dụng web đơn giản cho phép người dùng nhanh chóng tra cứu thời tiết hiện tại và dự báo 4 ngày tới cho bất kỳ thành phố hoặc địa điểm nào. Ứng dụng sử dụng [OpenWeatherMap API](https://openweathermap.org/api) để cung cấp thông tin thời tiết mới nhất dựa trên tên thành phố, tọa độ hoặc lựa chọn trên bản đồ. App hỗ trợ chuyển đổi đơn vị (Celsius/Fahrenheit), lưu lịch sử tìm kiếm và định vị vị trí hiện tại.

## Tính năng

- **Thời tiết hiện tại**: Xem nhanh nhiệt độ, độ ẩm, mô tả thời tiết, tốc độ gió tại địa điểm bạn tra cứu.
- **Dự báo 4 ngày tới**: Hiển thị dự báo thời tiết ngắn hạn cho 4 ngày tiếp theo.
- **Tìm kiếm theo tên hoặc vị trí**: Nhập tên thành phố hoặc chọn vị trí trên bản đồ để lấy dữ liệu thời tiết.
- **Định vị vị trí hiện tại**: Lấy thời tiết nơi bạn đang đứng với tính năng định vị trình duyệt.
- **Chuyển đổi đơn vị**: Đổi qua lại giữa hệ mét (°C, m/s) và hệ imperial (°F, mph).
- **Lịch sử tìm kiếm**: Xem lại nhanh các địa điểm đã tra cứu gần đây nhờ lưu trữ local.
- **Hỗ trợ tiếng Việt**: Giao diện, nội dung API tối ưu cho người dùng Việt Nam.

## Demo

Chỉ cần mở file `index.html` bằng trình duyệt, không cần cài đặt thêm.

## Hướng dẫn sử dụng

1. **Clone về máy:**
   ```sh
   git clone https://github.com/canhpt2004/WebWeather.git
   cd WebWeather
   ```

2. **Mở file `index.html` trên trình duyệt.**

3. **Nhập địa điểm hoặc dùng các nút bản đồ/định vị để tra cứu thời tiết.**

4. **Chuyển đổi đơn vị hoặc xem lại lịch sử tra cứu qua các nút điều khiển.**

## Cấu hình API

- Ứng dụng sử dụng sẵn một API key công khai của OpenWeatherMap. Để dùng cá nhân hoặc lâu dài, bạn nên [tạo API key riêng](https://openweathermap.org/appid) và thay vào biến `apiKey` trong file `script.js` và `index.html`.

## Các file chính

- `index.html` – Giao diện web chính để tra cứu thời tiết.
- `script.js` – Xử lý gọi API, cập nhật giao diện, quản lý lịch sử.
- `index-test.html` – Giao diện thử nghiệm, bổ sung chức năng bản đồ.

## Phụ thuộc

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Leaflet.js](https://leafletjs.com/) cho bản đồ (qua CDN)

## Ảnh minh họa

![screenshot](https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png)
![image](https://github.com/user-attachments/assets/f3eaae22-1e91-4589-9840-ca01a55c6717)


## License

Dự án phục vụ mục đích học tập và cá nhân.

---

**Tác giả:** [canhpt2004](https://github.com/canhpt2004)
