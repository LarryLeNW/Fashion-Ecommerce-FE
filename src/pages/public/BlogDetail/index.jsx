import React from "react";

function BlogDetail() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-8 flex gap-6">
        
        <main className="flex-1">
          <article className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tiêu đề bài viết</h2>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="mr-2">Người viết: Tên tác giả</span> | 
              <span className="ml-2">Ngày đăng: 01/11/2024</span>
            </div>
            
            <img src="https://via.placeholder.com/800x400" alt="Hình ảnh bài viết" className="w-full h-auto mb-6 rounded-md" />
            
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Đây là đoạn nội dung giới thiệu cho bài viết của bạn. Nội dung bài viết có thể dài hoặc ngắn tùy thuộc vào cách bạn trình bày. Bạn có thể phân chia thành các đoạn văn bản để dễ đọc và theo dõi.
              </p>
              <p className="mb-4">
                Thông tin chi tiết về bài viết được trình bày tại đây. Nội dung này có thể bao gồm các đoạn văn bản, hình ảnh hoặc thậm chí video để mô tả chủ đề của bài viết.
              </p>
              <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4 mb-4">
                “Trích dẫn một câu nói hoặc thông tin quan trọng để thu hút sự chú ý của người đọc.”
              </blockquote>
              <p className="mb-4">
                Bạn có thể chia sẻ thêm nhiều chi tiết và sự kiện liên quan đến bài viết ở đây. Đừng quên cập nhật các thông tin quan trọng nếu có.
              </p>
            </div>
          </article>

          <section className="mt-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Tiêu đề liên quan 1</h4>
                <p className="text-gray-500 text-sm">Nội dung tóm tắt ngắn gọn cho bài viết liên quan.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Tiêu đề liên quan 2</h4>
                <p className="text-gray-500 text-sm">Nội dung tóm tắt ngắn gọn cho bài viết liên quan.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Tiêu đề liên quan 3</h4>
                <p className="text-gray-500 text-sm">Nội dung tóm tắt ngắn gọn cho bài viết liên quan.</p>
              </div>
            </div>
          </section>
        </main>

        <aside className="w-64 sticky top-4 self-start h-[calc(100vh-4rem)] overflow-y-auto bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Các mục nổi bật</h3>
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Mục 1</li>
            <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Mục 2</li>
            <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Mục 3</li>
            <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Mục 4</li>
            <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Mục 5</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetail;
